/*
 *  Copyright (C) 2000-2022  The Exult Team
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 */

#ifdef HAVE_CONFIG_H
#	include <config.h>
#endif

#include "font.h"

#include "U7file.h"
#include "databuf.h"
#include "exceptions.h"
#include "ibuf8.h"
#include "ignore_unused_variable_warning.h"
#include "vgafile.h"

namespace TTF {
    struct Render_Style {
        int letter_spacing;
        int weight;
        int shadow_type;
        int shadow_offset_x;
        int shadow_offset_y;
        int shadow_color;
    };
}

#include "ttf_font.cc"
#include "utils.h"

bool Font::is_painting_bark = false;
#include "Configuration.h"

#include <fstream>

static std::string get_chinese_font_path(int font_size = -1) {
	std::string path;
	if (config) {
		if (font_size >= 0 && font_size <= 10) {
			std::string small_path;
			config->value("config/video/chinese/small_font_path", small_path, "");
			if (!small_path.empty()) {
				std::string sys_path = get_system_path(small_path);
				if (U7exists(sys_path)) {
					return sys_path;
				}
			}
		}
		config->value("config/video/chinese/font_path", path, "<PATCH>/chinese.ttf");
	} else {
		path = "<PATCH>/chinese.ttf";
	}
	return get_system_path(path);
}

static TTF::Render_Style get_chinese_ttf_style(int font_index) {
	TTF::Render_Style style = {0, 0, -1, 1, 1, -1};
	if (!config) return style;

	bool is_bark = Font::is_painting_bark;
	bool is_book = (font_index != 0 && font_index != 7);

	if (is_book && !is_bark) {
		config->value("config/video/chinese/letter_spacing_book", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_book", style.weight, 0);
		config->value("config/video/chinese/shadow_type_book", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_book", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_book", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_book", style.shadow_color, -1);
	} else {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color", style.shadow_color, -1);
	}
	return style;
}

static int get_chinese_baseline_adjust() {
	int adjust = 0;
	if (config) {
		config->value("config/video/chinese/baseline_adjust", adjust, 0);
	}
	return adjust;
}

static int get_chinese_line_spacing(int font_size) {
	int spacing = (font_size >= 15 ? 8 : 6);
	if (config) {
		config->value("config/video/chinese/line_spacing", spacing, spacing);
	}
	return spacing;
}

static bool get_chinese_force_ttf_for_english() {
	bool force = false;
	if (config) {
		config->value("config/video/chinese/force_ttf_for_english", force, false);
	}
	return force;
}


inline bool Has_non_ascii(const char* text) {
	if (!text) {
		return false;
	}
	while (*text) {
		if (static_cast<unsigned char>(*text) >= 0x80) {
			return true;
		}
		text++;
	}
	return false;
}

inline bool Has_non_ascii(const char* text, int len) {
	if (!text) {
		return false;
	}
	for (int i = 0; i < len; ++i) {
		if (static_cast<unsigned char>(text[i]) >= 0x80) {
			return true;
		}
	}
	return false;
}

using std::size_t;
using std::string;
using std::strncmp;
using std::toupper;

FontManager fontManager;

//	Want a more restrictive test for space.
inline bool Is_space(char c) {
	return c == ' ' || c == '\n' || c == '\t';
}

/*
 *  Pass space.
 */

static const char* Pass_whitespace(const char* text) {
	while (Is_space(*text)) {
		text++;
	}
	return text;
}

// Just spaces and tabs:
static const char* Pass_space(const char* text) {
	while (*text == ' ' || *text == '\t') {
		text++;
	}
	return text;
}

/*
 *  Pass a word.
 */

static const char* Pass_word(const char* text) {
	const char* start = text;
	while (*text) {
		unsigned char c = *text;

		if (c >= 0x80) {    // Multi-byte UTF-8 character start
			if (text == start) {
				// It's the start of the word. Treat this single UTF-8 character as a "word".
				TTF::decode_utf8(text);
				return text;
			} else {
				// We are in the middle of an ASCII word. Break before the multi-byte character.
				break;
			}
		}

		if ((*text == '^') || (Is_space(*text) && (*text != '\f') && (*text != '\v'))) {
			break;
		}
		text++;
	}
	return text;
}

/*
 *  Draw text within a rectangular area.
 *  Special characters handled are:
 *      \n  New line.
 *      space   Word break.
 *      tab Treated like a space for now.
 *      *   Page break.
 *      ^   Uppercase next letter.
 *
 *  Output: If out of room, -offset of end of text painted.
 *      Else height of text painted.
 */

int Font::paint_text_box(
		Image_buffer8* win,                // Buffer to paint in.
		const char* text, int x, int y,    // Top-left corner of box.
		int w, int h,                      // Dimensions.
		int            vert_lead,          // Extra spacing between lines.
		bool           pbreak,             // End at punctuation.
		bool           center,             // Center each line.
		Cursor_info*   cursor,             // We set x, y if not nullptr.
		unsigned char* trans) {
	const char* start    = text;    // Remember the start.
	const bool  has_cjk  = Has_non_ascii(start);
	auto        clipsave = win->SaveClip();
	// Expand the clipping rectangle slightly to ensure text shadows/outlines aren't cut off
	auto        newclip  = clipsave.Rect().intersect(TileRect(x - 4, y - 4, w + 8, h + 8));
	win->set_clip(newclip.x, newclip.y, newclip.w, newclip.h);

	const int endx   = x + w;    // Figure where to stop.
	int       curx   = x;
	int       cury   = y;
	const int height = get_rendered_line_height_for(text) + vert_lead + ver_lead;
	const int space_width = get_text_width(" ", 1, has_cjk);
	const int   max_lines      = h / height;    // # lines that can be shown.
	auto*       lines          = new string[max_lines + 1];
	int         cur_line       = 0;
	const char* last_punct_end = nullptr;    // ->last period, qmark, etc.
	// Last punct in 'lines':
	int last_punct_line   = -1;
	int last_punct_offset = -1;
	int coff              = -1;

	if (cursor) {
		coff      = cursor->offset;
		cursor->x = -1;
	}
	TTF::load_font(get_chinese_font_path(get_text_height_for(text)).c_str(), get_text_height_for(text));    // Load default Big5 font
	while (*text) {
		if (cursor && text - start == coff) {
			cursor->set_found(curx, cury, cur_line);
		}
		switch (*text) {    // Special cases.
		case '\n':          // Next line.
			curx = x;
			text++;
			cur_line++;
			cury += height;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
			continue;
		case '\r':    //??
			text++;
			continue;
		case ' ':    // Space.
		case '\t': {
			// Pass space.
			const char* wrd = Pass_space(text);
			if (wrd != text) {
				int w = get_text_width(text, static_cast<int>(wrd - text), has_cjk);
				if (w <= 0) {
					w = space_width;
				}
				const int nsp = w / space_width;
				lines[cur_line].append(nsp, ' ');
				if (cursor && coff > text - start && coff < wrd - start) {
					cursor->set_found(curx + static_cast<uint32>(coff - (text - start)) * space_width, cury, cur_line);
				}
				curx += nsp * space_width;
			}
			text = wrd;
			break;
		}
		}
		if (cur_line >= max_lines) {
			break;
		}

		if (*text == '*') {
			text++;
			if (cur_line) {
				break;
			}
		}
		const bool ucase_next = *text == '^';
		if (ucase_next) {    // Skip it.
			text++;
		}
		// Pass word & get its width.
		const char* ewrd = Pass_word(text);
		int         width;
		if (ucase_next) {
			const char c = static_cast<char>(toupper(static_cast<unsigned char>(*text)));
			width        = get_text_width(&c, 1, has_cjk) + get_text_width(text + 1, static_cast<int>(ewrd - text - 1), has_cjk);
		} else {
			width = get_text_width(text, static_cast<int>(ewrd - text), has_cjk);
		}
		int wrap_width = width + (has_cjk ? 2 : -hor_lead);
		if (curx + wrap_width > endx) {
			// Word-wrap.
			if (ucase_next) {
				text--;    // Put the '^' back.
			}
			curx = x;
			cur_line++;
			cury += height;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
		}
		if (cursor && coff >= text - start && coff < ewrd - start) {
			cursor->set_found(curx + get_text_width(text, static_cast<int>(coff - (text - start)), has_cjk), cury, cur_line);
		}
		// Store word.
		if (ucase_next) {
			lines[cur_line].push_back(static_cast<char>(toupper(static_cast<unsigned char>(*text))));
			++text;
		}
		lines[cur_line].append(text, ewrd - text);
		curx += width;
		text = ewrd;    // Continue past the word.
		// Keep loc. of punct. endings.
		if (text[-1] == '.' || text[-1] == '?' || text[-1] == '!' || text[-1] == ',' || text[-1] == '"') {
			last_punct_end    = text;
			last_punct_line   = cur_line;
			last_punct_offset = static_cast<int>(lines[cur_line].length());
		}
	}
	if (*text &&    // Out of room?
					// Break off at end of punct.
		pbreak && last_punct_end) {
		text = Pass_whitespace(last_punct_end);
	} else {
		last_punct_line = -1;
		if (cursor && text - start == coff &&    // Cursor at very end?
			cur_line < max_lines) {
			cursor->set_found(curx, cury, cur_line);
		}
	}
	if (cursor) {
		cursor->nlines = cur_line + (cur_line < max_lines);
	}
	cury = y;    // Render text.
	for (int i = 0; i <= cur_line; i++) {
		const char* str = lines[i].c_str();
		int         len = static_cast<int>(lines[i].length());
		if (i == last_punct_line) {
			len = last_punct_offset;
		}
		if (center) {
			center_text(win, x + w / 2, cury, str, trans);
		} else {
			paint_text(win, str, len, x, cury, trans, has_cjk);
		}
		cury += height;
		if (i == last_punct_line) {
			break;
		}
	}
	delete[] lines;
	if (*text) {                                   // Out of room?
		return -static_cast<int>(text - start);    // Return -offset of end.
	} else {                                       // Else return height.
		return cury - y;
	}
}

/*
 *  Draw text at a given location (which is the upper-left corner of the
 *  place to draw.
 *
 *  Output: Width in pixels of what was drawn.
 */

int Font::paint_text(
		Image_buffer8* win,     // Buffer to paint in.
		const char*    text,    // What to draw, 0-delimited.
		int xoff, int yoff,     // Upper-left corner of where to start.
		unsigned char* trans,   // Trans. table, or 0.
		bool           force_cjk) {
	return paint_text(win, text, static_cast<int>(strlen(text)), xoff, yoff, trans, force_cjk);
}

/*
 *  Paint text using font from "fonts.vga".
 *
 *  Output: Width in pixels of what was painted.
 */

int Font::paint_text(
		Image_buffer8* win,        // Buffer to paint in.
		const char*    text,       // What to draw.
		int            textlen,    // Length of text.
		int xoff, int yoff,        // Upper-left corner of where to start.
		unsigned char* trans,      // Trans table or nullptr.
		bool           force_cjk) {
	ignore_unused_variable_warning(win);
	int x             = xoff;
	int yoff_original = yoff;
	int baseline      = force_cjk ? get_chinese_font_size() : get_text_baseline_for(text, textlen);
	yoff += baseline;
	TTF::load_font(get_chinese_font_path(force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen)).c_str(), force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen));
	if (font_shapes) {
		bool is_book = (font_index != 0 && font_index != 7);
		TTF::Render_Style style = get_chinese_ttf_style(font_index);
		while (textlen > 0) {
			uint32_t wch = TTF::decode_utf8(text, textlen);
			if (wch == 0) {
				break;
			}

			if (wch < 0x80 && wch != 127 && !((is_book || get_chinese_force_ttf_for_english()) && force_cjk)) {
				Shape_frame* shape = font_shapes->get_frame(wch);
				if (shape) {
					if (shape->is_rle()) {
						if (trans) {
							shape->paint_rle_remapped(win, x, yoff, trans);
						} else {
							shape->paint_rle(win, x, yoff);
						}
					} else {
						shape->paint(win, x, yoff);
					}
					x += shape->get_width() + hor_lead;
				}
			} else {
				Shape_frame* sample_shape = font_shapes->get_frame('A');
				x += TTF::paint_char(win, wch, x, yoff_original + get_chinese_baseline_adjust(), sample_shape, trans, is_book, style);
			}
		}
	}
	return x - xoff;
}

/*
 *
 *  FIXED WIDTH RENDERING
 *
 */

/*
 *  Draw text within a rectangular area.
 *  Special characters handled are:
 *      \n  New line.
 *      space   Word break.
 *      tab Treated like a space for now.
 *      *   Page break.
 *      ^   Uppercase next letter.
 *
 *  Output: If out of room, -offset of end of text painted.
 *      Else height of text painted.
 */

int Font::paint_text_box_fixedwidth(
		Image_buffer8* win,                // Buffer to paint in.
		const char* text, int x, int y,    // Top-left corner of box.
		int w, int h,                      // Dimensions.
		int            char_width,         // Width of each character
		int            vert_lead,          // Extra spacing between lines.
		int            pbreak,             // End at punctuation.
		unsigned char* trans) {
	const char* start = text;    // Remember the start.
	win->set_clip(x, y, w, h);
	const int   endx           = x + w;    // Figure where to stop.
	int         curx           = x;
	int         cury           = y;
	const int   height         = get_text_height() + vert_lead + ver_lead;
	const int   max_lines      = h / height;    // # lines that can be shown.
	auto*       lines          = new string[max_lines + 1];
	int         cur_line       = 0;
	const char* last_punct_end = nullptr;    // ->last period, qmark, etc.
	// Last punct in 'lines':
	int last_punct_line   = -1;
	int last_punct_offset = -1;

	while (*text) {
		switch (*text) {    // Special cases.
		case '\n':          // Next line.
			curx = x;
			text++;
			cur_line++;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
			continue;
		case ' ':    // Space.
		case '\t': {
			// Pass space.
			const char* wrd = Pass_space(text);
			if (wrd != text) {
				const int w   = static_cast<int>(wrd - text) * char_width;
				const int nsp = w / char_width;
				lines[cur_line].append(nsp, ' ');
				curx += nsp * char_width;
			}
			text = wrd;
			break;
		}
		}

		if (cur_line >= max_lines) {
			break;
		}

		if (*text == '*') {
			text++;
			if (cur_line) {
				break;
			}
		}
		const bool ucase_next = *text == '^';
		if (ucase_next) {    // Skip it.
			text++;
		}
		// Pass word & get its width.
		const char* ewrd  = Pass_word(text);
		const int   width = static_cast<int>(ewrd - text) * char_width;
		if (curx + width - hor_lead > endx) {
			// Word-wrap.
			if (ucase_next) {
				text--;    // Put the '^' back.
			}
			curx = x;
			cur_line++;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
		}

		// Store word.
		if (ucase_next) {
			lines[cur_line].push_back(static_cast<char>(toupper(static_cast<unsigned char>(*text))));
			++text;
		}
		lines[cur_line].append(text, ewrd - text);
		curx += width;
		text = ewrd;    // Continue past the word.
		// Keep loc. of punct. endings.
		if (text[-1] == '.' || text[-1] == '?' || text[-1] == '!' || text[-1] == ',' || text[-1] == '"') {
			last_punct_end    = text;
			last_punct_line   = cur_line;
			last_punct_offset = static_cast<int>(lines[cur_line].length());
		}
	}
	if (*text &&    // Out of room?
					// Break off at end of punct.
		pbreak && last_punct_end) {
		text = Pass_whitespace(last_punct_end);
	} else {
		last_punct_line = -1;
	}
	// Render text.
	for (int i = 0; i <= cur_line; i++) {
		const char* str = lines[i].data();
		int         len = static_cast<int>(lines[i].length());
		if (i == last_punct_line) {
			len = last_punct_offset;
		}
		paint_text_fixedwidth(win, str, len, x, cury, char_width, trans);
		cury += height;
		if (i == last_punct_line) {
			break;
		}
	}
	win->clear_clip();
	delete[] lines;
	if (*text) {                                   // Out of room?
		return -static_cast<int>(text - start);    // Return -offset of end.
	} else {                                       // Else return height.
		return cury - y;
	}
}

/*
 *  Draw text at a given location (which is the upper-left corner of the
 *  place to draw. Text will be drawn with the fixed width specified.
 *
 *  Output: Width in pixels of what was drawn.
 */

int Font::paint_text_fixedwidth(
		Image_buffer8* win,      // Buffer to paint in.
		const char*    text,     // What to draw, 0-delimited.
		int xoff, int yoff,      // Upper-left corner of where to start.
		int            width,    // Width of each character
		unsigned char* trans) {
	int x             = xoff;
	int yoff_original = yoff;
	yoff += get_text_baseline_for(text);
	TTF::load_font(get_chinese_font_path(get_text_height_for(text)).c_str(), get_text_height_for(text));
	TTF::Render_Style style = get_chinese_ttf_style(font_index);
	while (*text != 0) {
		uint32_t wch = TTF::decode_utf8(text);
		if (wch == 0) {
			break;
		}
		if (wch < 0x80 && wch != 127) {
			Shape_frame* shape = font_shapes->get_frame(wch);
			if (shape) {
				int paint_x = x + (width - shape->get_width()) / 2;
				if (shape->is_rle()) {
					if (trans) {
						shape->paint_rle_remapped(win, paint_x, yoff, trans);
					} else {
						shape->paint_rle(win, paint_x, yoff);
					}
				} else {
					shape->paint(win, paint_x, yoff);
				}
			}
			x += width;
		} else {
			Shape_frame* sample_shape = font_shapes->get_frame('A');
			int          char_width   = TTF::get_char_width(wch, style);
			int          paint_x      = x + (width - char_width) / 2;
			bool         is_book      = (font_index != 0 && font_index != 7);
			TTF::paint_char(win, wch, paint_x, yoff_original + get_chinese_baseline_adjust(), sample_shape, trans, is_book, style);
			x += width;
		}
	}
	return x - xoff;
}

/*
 *  Draw text at a given location (which is the upper-left corner of the
 *  place to draw. Text will be drawn with the fixed width specified.
 *
 *  Output: Width in pixels of what was drawn.
 */

int Font::paint_text_fixedwidth(
		Image_buffer8* win,        // Buffer to paint in.
		const char*    text,       // What to draw.
		int            textlen,    // Length of text.
		int xoff, int yoff,        // Upper-left corner of where to start.
		int            width,      // Width of each character
		unsigned char* trans) {
	int x             = xoff;
	int yoff_original = yoff;
	yoff += get_text_baseline_for(text, textlen);
	TTF::load_font(get_chinese_font_path(get_text_height_for(text, textlen)).c_str(), get_text_height_for(text, textlen));
	TTF::Render_Style style = get_chinese_ttf_style(font_index);
	while (textlen > 0) {
		uint32_t wch = TTF::decode_utf8(text, textlen);
		if (wch == 0) {
			break;
		}
		if (wch < 0x80 && wch != 127) {
			Shape_frame* shape = font_shapes->get_frame(wch);
			if (shape) {
				int paint_x = x + (width - shape->get_width()) / 2;
				if (shape->is_rle()) {
					if (trans) {
						shape->paint_rle_remapped(win, paint_x, yoff, trans);
					} else {
						shape->paint_rle(win, paint_x, yoff);
					}
				} else {
					shape->paint(win, paint_x, yoff);
				}
			}
			x += width;
		} else {
			Shape_frame* sample_shape = font_shapes->get_frame('A');
			int          char_width   = TTF::get_char_width(wch, style);
			int          paint_x      = x + (width - char_width) / 2;
			bool         is_book      = (font_index != 0 && font_index != 7);
			TTF::paint_char(win, wch, paint_x, yoff_original + get_chinese_baseline_adjust(), sample_shape, trans, is_book, style);
			x += width;
		}
	}
	return x - xoff;
}

/*
 *  Get the width in pixels of a 0-delimited string.
 */

int Font::get_text_width(const char* text, bool force_cjk) {
	int width = 0;
	TTF::load_font(get_chinese_font_path(force_cjk ? get_chinese_font_size() : get_text_height_for(text)).c_str(), force_cjk ? get_chinese_font_size() : get_text_height_for(text));
	if (font_shapes) {
		bool is_book = (font_index != 0 && font_index != 7);
		TTF::Render_Style style = get_chinese_ttf_style(font_index);
		while (*text != 0) {
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !((is_book || get_chinese_force_ttf_for_english()) && force_cjk)) {
				Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(*text));
				if (shape) {
					width += shape->get_width() + hor_lead;
				}
				text++;
			} else {
				uint32_t wch = TTF::decode_utf8(text);
				if (wch == 0) {
					break;
				}
				width += TTF::get_char_width(wch, style);
			}
		}
	}
	return width;
}

/*
 *  Get the width in pixels of a string given by length.
 */

int Font::get_text_width(
		const char* text,
		int         textlen,    // Length of text.
		bool        force_cjk
) {
	int width = 0;
	TTF::load_font(get_chinese_font_path(force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen)).c_str(), force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen));
	if (font_shapes) {
		bool is_book = (font_index != 0 && font_index != 7);
		TTF::Render_Style style = get_chinese_ttf_style(font_index);
		while (textlen > 0) {
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !((is_book || get_chinese_force_ttf_for_english()) && force_cjk)) {
				Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(*text));
				if (shape) {
					width += shape->get_width() + hor_lead;
				}
				text++;
				textlen--;
			} else {
				uint32_t wch = TTF::decode_utf8(text, textlen);
				if (wch == 0) {
					break;
				}
				width += TTF::get_char_width(wch, style);
			}
		}
	}
	return width;
}

void Font::get_text_box_dims(const char* text, int& width, int& height, int vert_lead) {
	width                 = 0;
	height                = 0;
	int         cur_width = 0;
	const char* orig_text = text;
	bool        has_cjk   = Has_non_ascii(orig_text);
	bool        is_book   = (font_index != 0 && font_index != 7);
	TTF::Render_Style style = get_chinese_ttf_style(font_index);

	int num_lines = 1;
	if (font_shapes) {
		while (*text != 0) {
			if (*text == '\n') {
				text++;
				num_lines++;
				width     = std::max(width, cur_width);
				cur_width = 0;
				continue;
			}
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !((is_book || get_chinese_force_ttf_for_english()) && has_cjk)) {
				Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(*text));
				if (shape) {
					cur_width += shape->get_width() + hor_lead;
				}
				text++;
			} else {
				uint32_t wch = TTF::decode_utf8(text);
				if (wch == 0) {
					break;
				}
				cur_width += TTF::get_char_width(wch, style);
			}
		}
		width  = std::max(width, cur_width);
		height = num_lines * (get_rendered_line_height_for(orig_text) + vert_lead + ver_lead);
	}
}

/*
 *  Get font line-height.
 */

int Font::get_text_height() {
	return get_original_height();
}

int Font::get_original_height() {
	int h = 10;
	if (font_shapes) {
		Shape_frame* shape = font_shapes->get_frame('A');
		if (shape) {
			h = shape->get_height();
		}
	}
	return h;
}


int Font::get_chinese_font_size() {
	int user_size = 0;
	if (is_painting_bark) {
		if (config) config->value("config/video/chinese/font_size_bark", user_size, 0);
		return user_size > 0 ? user_size : 15;    // Bark default
	}
	if (font_index == 0) {
		if (config) config->value("config/video/chinese/font_size_dialog", user_size, 0);
		return user_size > 0 ? user_size : 15;    // Dialogues
	}
	if (font_index != 0 && font_index != 7) {
		if (config) config->value("config/video/chinese/font_size_book", user_size, 0);
		return user_size > 0 ? user_size : 11;    // Books and UI (per user request)
	}

	// Fallback to height-based calculation
	int h = get_original_height();
	if (h <= 10) {
		return 15; // Enforce a minimum of 15px for readability and correct wrapping
	}
	return h * 3 / 2;
}

int Font::get_text_height_for(const char* text) {
	if (Has_non_ascii(text)) {
		return get_chinese_font_size();
	}
	return get_original_height();
}

int Font::get_rendered_line_height_for(const char* text) {
	if (Has_non_ascii(text)) {
		int font_size = get_chinese_font_size();
		return font_size + get_chinese_line_spacing(font_size); // Adjust spacing based on font size
	}
	return get_rendered_line_height();
}

int Font::get_text_height_for(const char* text, int len) {
	if (Has_non_ascii(text, len)) {
		return get_chinese_font_size();
	}
	return get_original_height();
}

int Font::get_rendered_line_height_for(const char* text, int len) {
	if (Has_non_ascii(text, len)) {
		int font_size = get_chinese_font_size();
		return font_size + get_chinese_line_spacing(font_size);
	}
	return get_rendered_line_height();
}

int Font::get_text_baseline_for(const char* text) {
	if (Has_non_ascii(text)) {
		int sz = get_chinese_font_size();
		TTF::load_font(get_chinese_font_path(sz).c_str(), sz);
		return TTF::get_ascender() + get_chinese_baseline_adjust();
	}
	return get_text_baseline();
}

int Font::get_text_baseline_for(const char* text, int len) {
	if (Has_non_ascii(text, len)) {
		int sz = get_chinese_font_size();
		TTF::load_font(get_chinese_font_path(sz).c_str(), sz);
		return TTF::get_ascender() + get_chinese_baseline_adjust();
	}
	return get_text_baseline();
}

/*
 *  Get font baseline as the distance from the top.
 */

int Font::get_text_baseline() {
	// Shape_frame *A = font_shapes->get_frame('A');
	return highest;
}

/*
 *  Find cursor location within text, given (x,y) screen coords.
 *  Note:  This has to match paint_text_box().
 *
 *  Output: Offset in text if found.
 *      If not found, -offset of end of text there was room to paint.
 */

int Font::find_cursor(
		const char* text, int x, int y,    // Top-left corner of box.
		int w, int h,                      // Dimensions.
		int cx, int cy,                    // Mouse loc. to find.
		int vert_lead                      // Extra spacing between lines.
) {
	const char* start       = text;     // Remember the start.
	const int   endx        = x + w;    // Figure where to stop.
	int         curx        = x;
	int         cury        = y;
	const int   height      = get_rendered_line_height_for(text) + vert_lead + ver_lead;
	const bool  has_cjk     = Has_non_ascii(start);
	const int   space_width = get_text_width(" ", 1, has_cjk);
	const int   max_lines   = h / height;    // # lines that can be shown.
	int         cur_line    = 0;

	TTF::Render_Style style = get_chinese_ttf_style(font_index);
	while (*text != 0) {
		const char* saved_text = text;
		uint32_t    wch        = TTF::decode_utf8(text);

		if (wch > 0x7F || wch == 127) {    // Multi-byte UTF-8 character (like Chinese) or custom bullet
			int width = TTF::get_char_width(wch, style);
			if (curx + width - hor_lead > endx) {
				// Word-wrap.
				if (cy >= cury && cy < cury + height && cx >= curx && cx < x + w) {
					return static_cast<int>(saved_text - start - 1);
				}
				curx = x;
				cur_line++;
				cury += height;
				if (cur_line >= max_lines) {
					break;
				}
			}
			if (cy >= cury && cy < cury + height && cx >= curx && cx < curx + width) {
				return static_cast<int>(saved_text - start);    // Approximate cursor position
			}
			curx += width;
			continue;
		}

		int chr = wch;
		switch (chr) {    // Special cases.
		case '\n':        // Next line.
			if (cy >= cury && cy < cury + height && cx >= curx && cx < x + w) {
				return static_cast<int>(text - start);
			}
			++text;
			curx = x;
			cur_line++;
			cury += height;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
			continue;
		case '\r':    //??
			++text;
			continue;
		case ' ':    // Space.
		case '\t':
			if (cy >= cury && cy < cury + height && cx >= curx && cx < curx + space_width) {
				return static_cast<int>(text - start);
			}
			++text;
			curx += space_width;
			continue;
		}
		if (cur_line >= max_lines) {
			break;
		}

		if (*text == '*') {
			text++;
			if (cur_line) {
				break;
			}
		}
		const bool ucase_next = *text == '^';
		if (ucase_next) {    // Skip it.
			text++;
		}
		// Pass word & get its width.
		const char* ewrd = Pass_word(text);
		int         width;
		if (ucase_next) {
			const char c = static_cast<char>(toupper(static_cast<unsigned char>(*text)));
			width        = get_text_width(&c, 1, has_cjk) + get_text_width(text + 1, static_cast<int>(ewrd - text - 1), has_cjk);
		} else {
			width = get_text_width(text, static_cast<int>(ewrd - text), has_cjk);
		}
		if (curx + width - hor_lead > endx) {
			// Word-wrap.
			// Past end of this line?
			if (cy >= cury && cy < cury + height && cx >= curx && cx < x + w) {
				return static_cast<int>(text - start - 1);
			}
			curx = x;
			cur_line++;
			cury += height;
			if (cur_line >= max_lines) {
				break;    // No more room.
			}
		}
		if (cy >= cury && cy < cury + height && cx >= curx && cx < curx + width) {
			const int woff = find_xcursor(text, static_cast<int>(ewrd - text), cx - curx);
			if (woff >= 0) {
				return static_cast<int>(text - start) + woff;
			}
		}
		curx += width;
		text = ewrd;    // Continue past the word.
	}
	if (cy >= cury && cy < cury + height &&    // End of last line?
		cx >= curx && cx < x + w) {
		return static_cast<int>(text - start);
	}
	return -static_cast<int>(text - start);    // Failed, so indicate where we are.
}

/*
 *  Find an x-coord. within a piece of text.
 *
 *  Output: Offset if found, else -1.
 */

int Font::find_xcursor(
		const char* text,
		int         textlen,    // Length of text.
		int         cx          // Loc. to find.
) {
	const char* start = text;
	int         curx  = 0;
	while (textlen > 0) {
		const char* saved_text = text;
		uint32_t    wch        = TTF::decode_utf8(text, textlen);

		if (wch > 0x7F || wch == 127) {    // Multi-byte character or custom bullet
			TTF::Render_Style style = get_chinese_ttf_style(font_index);
			int w = TTF::get_char_width(wch, style);
			if (cx >= curx && cx < curx + w) {
				return static_cast<int>(saved_text - start);    // Adjust based on string parsing logic
			}
			curx += w;
			continue;
		}
		int          chr   = wch;
		Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(chr));
		if (shape && shape->is_rle()) {
			const int w = shape->get_width() + hor_lead;
			if (cx >= curx && cx < curx + w) {
				return static_cast<int>(text - 1 - start);
			}
			curx += w;
		}
	}
	return -1;
}

Font::Font() = default;

Font::Font(const File_spec& fname0, int index, int hlead, int vlead) {
	load(fname0, index, hlead, vlead);
}

Font::Font(const File_spec& fname0, const File_spec& fname1, int index, int hlead, int vlead) {
	load(fname0, fname1, index, hlead, vlead);
}

void Font::clean_up() {
	font_shapes.reset();
}

/**
 *  Loads a font from a multiobject.
 *  @param font_obj Where we are loading from.
 *  @param hleah    Horizontal lead of the font.
 *  @param vleah    Vertical lead of the font.
 */
int Font::load_internal(IDataSource& data, int hlead, int vlead) {
	if (!data.good()) {
		font_shapes.reset();
		hor_lead = 0;
		ver_lead = 0;
		return -1;
	} else {
		// Is it an IFF archive?
		char hdr[5] = {0};
		data.read(hdr, 4);
		data.seek(0);
		if (!strncmp(hdr, "font", 4)) {
			data.skip(8);    // Yes, skip first 8 bytes.
		}
		font_shapes = std::make_unique<Shape_file>(&data);
		hor_lead    = hlead;
		ver_lead    = vlead;
		calc_highlow();
	}
	return 0;
}

int Font::load(const File_spec& fname0, int index, int hlead, int vlead) {
	clean_up();
	font_index = index;
	IExultDataSource data(fname0, index);
	return load_internal(data, hlead, vlead);
}

int Font::load(const File_spec& fname0, const File_spec& fname1, int index, int hlead, int vlead) {
	clean_up();
	font_index = index;
	IExultDataSource data(fname0, fname1, index);
	return load_internal(data, hlead, vlead);
}

int Font::center_text(Image_buffer8* win, int x, int y, const char* s, unsigned char* trans) {
	bool has_cjk = Has_non_ascii(s);
	return paint_text(win, s, x - get_text_width(s, has_cjk) / 2, y, trans, has_cjk);
}

void Font::calc_highlow() {
	bool unset = true;

	for (int i = 0; i < font_shapes->get_num_frames(); i++) {
		Shape_frame* f = font_shapes->get_frame(i);

		if (!f || !f->is_rle()) {
			continue;
		}

		if (unset) {
			unset   = false;
			highest = f->get_yabove();
			lowest  = f->get_ybelow();
			continue;
		}

		if (f->get_yabove() > highest) {
			highest = f->get_yabove();
		}
		if (f->get_ybelow() > lowest) {
			lowest = f->get_ybelow();
		}
	}
}

FontManager::~FontManager() {
	reset();
}

/**
 *  Loads a font from a File_spec.
 *  @param name Name to give to this font.
 *  @param fname0   First file spec.
 *  @param index    Number of font to load.
 *  @param hleah    Horizontal lead of the font.
 *  @param vleah    Vertical lead of the font.
 */
void FontManager::add_font(const char* name, const File_spec& fname0, int index, int hlead, int vlead) {
	remove_font(name);

	auto font = std::make_shared<Font>(fname0, index, hlead, vlead);

	fonts[name] = font;
}

/**
 *  Loads a font from a File_spec.
 *  @param name Name to give to this font.
 *  @param fname0   First file spec.
 *  @param fname1   Second file spec.
 *  @param index    Number of font to load.
 *  @param hleah    Horizontal lead of the font.
 *  @param vleah    Vertical lead of the font.
 */
void FontManager::add_font(const char* name, const File_spec& fname0, const File_spec& fname1, int index, int hlead, int vlead) {
	remove_font(name);

	auto font = std::make_shared<Font>(fname0, fname1, index, hlead, vlead);

	fonts[name] = font;
}

void FontManager::remove_font(const char* name) {
	fonts.erase(name);
}

std::shared_ptr<Font> FontManager::get_font(const char* name) {
	return fonts[name];
}

void FontManager::reset() {
	fonts.clear();
}
