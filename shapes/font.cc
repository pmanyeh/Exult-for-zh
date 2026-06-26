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
#include <chrono>

#include "font.h"
#include "deferred_text.h"
#include <unordered_map>

Chinese_IsSerpentIsle_Fn chinese_is_serpent_isle_pfn = nullptr;
Chinese_GetTicks_Fn chinese_get_ticks_pfn = nullptr;

static std::unordered_map<const Font*, std::string> font_names_map;

static bool chinese_in_paint_text_box = false;
struct PaintTextBoxGuard {
	PaintTextBoxGuard() { chinese_in_paint_text_box = true; }
	~PaintTextBoxGuard() { chinese_in_paint_text_box = false; }
};

#include "U7file.h"
#include "databuf.h"
#include "exceptions.h"
#include "ibuf8.h"
#include "ignore_unused_variable_warning.h"
#include "vgafile.h"

namespace TTF {
    struct Render_Style {
        int   letter_spacing;
        int   weight;
        int   shadow_type;
        int   shadow_offset_x;
        int   shadow_offset_y;
        int   shadow_color;
        int   fg_color;
        float brightness_boost;    // Pre-compensation for anti-aliasing darkening (1.0 = none)
    };
}

#include "ttf_font.cc"
#include "utils.h"

bool Font::is_painting_bark = false;
bool Font::is_painting_sign = false;
bool Font::is_painting_avatar_choices = false;
int Font::avatar_choices_font_size_adjust = 0;

// ---------------------------------------------------------------------------
// Global UI scale factor (1.0 = no scaling).
// Managed by Gump_scale_guard during paint() of scaled gumps.
// ---------------------------------------------------------------------------
float current_gump_scale = 1.0f;

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
		// Exult-zh: sign-specific font path — fallback to font_path if not configured
		if (Font::is_painting_sign) {
			std::string sign_path;
			config->value("config/video/chinese/sign_font_path", sign_path, "");
			if (!sign_path.empty()) {
				std::string sys_sign_path = get_system_path(sign_path);
				if (U7exists(sys_sign_path)) {
					return sys_sign_path;
				}
			}
		}
		config->value("config/video/chinese/font_path", path, "<PATCH>/chinese.ttf");
	} else {
		path = "<PATCH>/chinese.ttf";
	}
	return get_system_path(path);
}

static TTF::Render_Style get_chinese_ttf_style(Font* font) {
	TTF::Render_Style style = {0, 0, -1, 1, 1, -1, -1, 1.0f};
	if (!config) return style;

	bool is_bark = Font::is_painting_bark;
	int f_idx = font->get_font_index();
	const std::string& fname = font->get_font_name();
	bool is_si = chinese_is_serpent_isle_pfn ? chinese_is_serpent_isle_pfn() : false;

	bool is_si_intro = is_si && (fname == "SIINTRO_FONT");
	bool is_si_ending = is_si && (fname == "EXULT_END_FONT" || fname == "EXULT_AT_FONT");

	bool is_bg_intro = !is_si && font->get_force_not_book() && (f_idx == 11 || f_idx == 3);
	bool is_bg_ending = !is_si && (font->get_force_not_book() && (f_idx == 12 || f_idx == 13 || f_idx == 14 || f_idx == 4 || f_idx == 5 || f_idx == 0 || fname == "NORMAL_FONT"));

	bool is_woodsign = (f_idx == 1);
	bool is_tombstone = (f_idx == 3);
	bool is_goldsign = (f_idx == 6);
	bool is_serpentine = (f_idx == 8 || f_idx == 10);
	bool is_sign = (is_woodsign || is_tombstone || is_goldsign || is_serpentine);
	bool is_book = (f_idx != 0 && f_idx != 7 && !is_sign && !font->get_force_not_book());

	if (is_si_intro) {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type_si_intro", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_si_intro", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_si_intro", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_si_intro", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_si_intro", style.fg_color, -1);
		int boost_int = 100;
		config->value("config/video/chinese/hires_brightness_boost_si_intro", boost_int, 100);
		style.brightness_boost = boost_int / 100.0f;
	} else if (is_si_ending) {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type_si_ending", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_si_ending", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_si_ending", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_si_ending", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_si_ending", style.fg_color, -1);
		int boost_int_e = 100;
		config->value("config/video/chinese/hires_brightness_boost_si_ending", boost_int_e, 100);
		style.brightness_boost = boost_int_e / 100.0f;
	} else if (is_bg_intro) {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type_intro", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_intro", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_intro", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_intro", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_intro", style.fg_color, -1);
		// Brightness boost: compensate for anti-aliasing darkening in high-res mode.
		// Only read by Deferred_text_renderer; ignored in 8-bit mode.
		// Stored as integer * 100: e.g. 130 = 1.30x boost. Default 100 = no boost.
		int boost_int = 100;
		config->value("config/video/chinese/hires_brightness_boost_intro", boost_int, 100);
		style.brightness_boost = boost_int / 100.0f;
	} else if (is_bg_ending) {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type_ending", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_ending", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_ending", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_ending", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_ending", style.fg_color, -1);
		// Brightness boost: compensate for anti-aliasing darkening in high-res mode.
		// Only read by Deferred_text_renderer; ignored in 8-bit mode.
		// Stored as integer * 100: e.g. 130 = 1.30x boost. Default 100 = no boost.
		int boost_int_e = 100;
		config->value("config/video/chinese/hires_brightness_boost_ending", boost_int_e, 100);
		style.brightness_boost = boost_int_e / 100.0f;
	} else if (is_woodsign) {
		config->value("config/video/chinese/letter_spacing_woodsign", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_woodsign", style.weight, 0);
		config->value("config/video/chinese/shadow_type_woodsign", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_woodsign", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_woodsign", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_woodsign", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_woodsign", style.fg_color, -1);
	} else if (is_tombstone) {
		config->value("config/video/chinese/letter_spacing_tombstone", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_tombstone", style.weight, 0);
		config->value("config/video/chinese/shadow_type_tombstone", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_tombstone", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_tombstone", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_tombstone", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_tombstone", style.fg_color, -1);
	} else if (is_goldsign) {
		config->value("config/video/chinese/letter_spacing_goldsign", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_goldsign", style.weight, 0);
		config->value("config/video/chinese/shadow_type_goldsign", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_goldsign", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_goldsign", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_goldsign", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_goldsign", style.fg_color, -1);
	} else if (is_sign) {
		config->value("config/video/chinese/letter_spacing_sign", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_sign", style.weight, 0);
		config->value("config/video/chinese/shadow_type_sign", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_sign", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_sign", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_sign", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_sign", style.fg_color, -1);
	} else if (is_book && !is_bark) {
		config->value("config/video/chinese/letter_spacing_book", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight_book", style.weight, 0);
		config->value("config/video/chinese/shadow_type_book", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x_book", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y_book", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color_book", style.shadow_color, -1);
		config->value("config/video/chinese/font_color_book", style.fg_color, -1);
	} else {
		config->value("config/video/chinese/letter_spacing", style.letter_spacing, 0);
		config->value("config/video/chinese/font_weight", style.weight, 0);
		config->value("config/video/chinese/shadow_type", style.shadow_type, -1);
		config->value("config/video/chinese/shadow_offset_x", style.shadow_offset_x, 1);
		config->value("config/video/chinese/shadow_offset_y", style.shadow_offset_y, 1);
		config->value("config/video/chinese/shadow_color", style.shadow_color, -1);
		if (is_bark) {
			config->value("config/video/chinese/font_color_bark", style.fg_color, -1);
		} else {
			config->value("config/video/chinese/font_color_dialog", style.fg_color, -1);
		}
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
	if (Deferred_text_renderer::instance().is_active()) {
		return true;
	}
	bool force = false;
	if (config) {
		config->value("config/video/chinese/force_ttf_for_english", force, false);
	}
	return force;
}

static bool should_force_ttf_for_english(int font_index) {
	// Exclude UI/Menu fonts and Runic from forced TTF
	// 1 = Wood sign, 3 = Tombstone, 6 = Gold sign, 8/10 = Serpentine (all are runic/special)
	// 2 = SMALL_BLACK_FONT (Setup menus)
	// 4 = TINY_BLACK_FONT / Runic
	// 9, 16, 17 = MENU_FONT (Game menus)
	// 18-21 = Intro Menu fonts
	if (font_index == 1 || font_index == 3 || font_index == 6 || font_index == 8 || font_index == 10 ||
	    font_index == 2 || font_index == 4 || font_index == 9 || font_index == 16 || font_index == 17 || (font_index >= 18 && font_index <= 21)) {
		return false;
	}
	return get_chinese_force_ttf_for_english();
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
	PaintTextBoxGuard guard;
	bool is_si = chinese_is_serpent_isle_pfn ? chinese_is_serpent_isle_pfn() : false;
	if (is_si && (get_font_name() == "SIINTRO_FONT" || get_font_name() == "EXULT_END_FONT" || get_font_name() == "EXULT_AT_FONT")) {
		y -= 10;
	}
	const char* start    = text;    // Remember the start.
	const bool  has_cjk  = Has_non_ascii(start);
	auto        clipsave = win->SaveClip();
	// Expand the clipping rectangle slightly to ensure text shadows/outlines aren't cut off
	auto        newclip  = clipsave.Rect().intersect(TileRect(x - 4, y - 4, w + 8, h + 8));
	win->set_clip(newclip.x, newclip.y, newclip.w, newclip.h);

	const int endx   = x + w;    // Figure where to stop.
	int       curx   = x;
	int       cury   = y;
	const int height = get_rendered_line_height_for(text) + vert_lead + get_effective_ver_lead();
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
	bool is_si = chinese_is_serpent_isle_pfn ? chinese_is_serpent_isle_pfn() : false;
	if (is_si && (get_font_name() == "SIINTRO_FONT" || get_font_name() == "EXULT_END_FONT" || get_font_name() == "EXULT_AT_FONT")) {
		if (!chinese_in_paint_text_box) {
			static uint32_t last_draw_ticks = 0;
			static int first_line_y = -9999;
			static int current_line_index = 0;

			uint32_t current_ticks = chinese_get_ticks_pfn ? chinese_get_ticks_pfn() : 0;

			if (current_ticks - last_draw_ticks > 50 || yoff < first_line_y) {
				first_line_y = yoff;
				current_line_index = 0;
			} else if (yoff > first_line_y) {
				current_line_index = (yoff - first_line_y + 5) / 13;
			}

			last_draw_ticks = current_ticks;
			int extra_lead = get_effective_ver_lead() - ver_lead;
			yoff = yoff - 10 + (current_line_index * extra_lead);
		}
	}
	ignore_unused_variable_warning(win);
	int x             = xoff;
	int yoff_original = yoff;
	int baseline      = force_cjk ? get_chinese_font_size() : get_text_baseline_for(text, textlen);
	yoff += baseline;
	TTF::load_font(get_chinese_font_path(force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen)).c_str(), force_cjk ? get_chinese_font_size() : get_text_height_for(text, textlen));
	if (font_shapes) {
		bool is_book = (font_index != 0 && font_index != 7 && !force_not_book);
		TTF::Render_Style style = get_chinese_ttf_style(this);
		while (textlen > 0) {
			uint32_t wch = TTF::decode_utf8(text, textlen);
			if (wch == 0) {
				break;
			}

			if (wch < 0x80 && wch != 127 && !( (is_book && force_cjk) || should_force_ttf_for_english(font_index) )) {
				Shape_frame* shape = font_shapes->get_frame(wch);
				if (shape) {
					if (shape->is_rle()) {
						if (trans) {
							shape->paint_rle_remapped(win, x, yoff, trans);
						} else {
							if (current_gump_scale > 1.0f) {
								shape->paint_rle_scaled(win, x, yoff, static_cast<int>(current_gump_scale));
							} else {
								shape->paint_rle(win, x, yoff);
							}
						}
					} else {
						shape->paint(win, x, yoff);
					}
					int advance = shape->get_width() + hor_lead;
					if (current_gump_scale > 1.0f) {
						advance = static_cast<int>(advance * current_gump_scale);
					}
					x += advance;
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
	PaintTextBoxGuard guard;
	const char* start = text;    // Remember the start.
	win->set_clip(x, y, w, h);
	const int   endx           = x + w;    // Figure where to stop.
	int         curx           = x;
	int         cury           = y;
	const int   height         = get_text_height() + vert_lead + get_effective_ver_lead();
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
	TTF::Render_Style style = get_chinese_ttf_style(this);
	while (*text != 0) {
		uint32_t wch = TTF::decode_utf8(text);
		if (wch == 0) {
			break;
		}
		if (wch < 0x80 && wch != 127 && !(should_force_ttf_for_english(font_index))) {
			Shape_frame* shape = font_shapes->get_frame(wch);
			if (shape) {
				int paint_x = x + (width - shape->get_width()) / 2;
				if (shape->is_rle()) {
					if (trans) {
						shape->paint_rle_remapped(win, paint_x, yoff, trans);
					} else {
						if (current_gump_scale > 1.0f) {
							shape->paint_rle_scaled(win, paint_x, yoff, static_cast<int>(current_gump_scale));
						} else {
							shape->paint_rle(win, paint_x, yoff);
						}
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
			bool         is_book      = (font_index != 0 && font_index != 7 && !force_not_book);
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
	TTF::Render_Style style = get_chinese_ttf_style(this);
	while (textlen > 0) {
		uint32_t wch = TTF::decode_utf8(text, textlen);
		if (wch == 0) {
			break;
		}
		if (wch < 0x80 && wch != 127 && !(should_force_ttf_for_english(font_index))) {
			Shape_frame* shape = font_shapes->get_frame(wch);
			if (shape) {
				int paint_x = x + (width - shape->get_width()) / 2;
				if (shape->is_rle()) {
					if (trans) {
						shape->paint_rle_remapped(win, paint_x, yoff, trans);
					} else {
						if (current_gump_scale > 1.0f) {
							shape->paint_rle_scaled(win, paint_x, yoff, static_cast<int>(current_gump_scale));
						} else {
							shape->paint_rle(win, paint_x, yoff);
						}
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
			bool         is_book      = (font_index != 0 && font_index != 7 && !force_not_book);
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
		bool is_book = (font_index != 0 && font_index != 7 && !force_not_book);
		TTF::Render_Style style = get_chinese_ttf_style(this);
		while (*text != 0) {
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !( (is_book && force_cjk) || should_force_ttf_for_english(font_index) )) {
				Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(*text));
				if (shape) {
					int advance = shape->get_width() + hor_lead;
					if (current_gump_scale > 1.0f) {
						advance = static_cast<int>(advance * current_gump_scale);
					}
					width += advance;
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
		bool is_book = (font_index != 0 && font_index != 7 && !force_not_book);
		TTF::Render_Style style = get_chinese_ttf_style(this);
		while (textlen > 0) {
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !( (is_book && force_cjk) || should_force_ttf_for_english(font_index) )) {
				Shape_frame* shape = font_shapes->get_frame(static_cast<unsigned char>(*text));
				if (shape) {
					int advance = shape->get_width() + hor_lead;
					if (current_gump_scale > 1.0f) {
						advance = static_cast<int>(advance * current_gump_scale);
					}
					width += advance;
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
	bool        is_book   = (font_index != 0 && font_index != 7 && !force_not_book);
	TTF::Render_Style style = get_chinese_ttf_style(this);

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
			if (static_cast<unsigned char>(*text) < 0x80 && *text != 127 && !( (is_book && has_cjk) || should_force_ttf_for_english(font_index) )) {
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
		height = num_lines * (get_rendered_line_height_for(orig_text) + vert_lead + get_effective_ver_lead());
	}
}

/*
 *  Get font line-height.
 */

int Font::get_text_height() {
	// For sign/tombstone/goldsign fonts, return the TTF size so that
	// Sign_gump's vertical spacing math uses the correct CJK character height.
	if (font_index == 1 || font_index == 3 || font_index == 6 || font_index == 8 || font_index == 10) {
		int ttf_size = get_chinese_font_size();
		if (ttf_size > 0) {
			return ttf_size + 4;  // +4 for descenders/padding
		}
	}
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
	int final_size = 15;

	if (is_painting_bark) {
		if (config) config->value("config/video/chinese/font_size_bark", user_size, 0);
		final_size = user_size > 0 ? user_size : 15;    // Bark default
	} else {
		bool is_si = chinese_is_serpent_isle_pfn ? chinese_is_serpent_isle_pfn() : false;
		bool is_si_intro = is_si && (get_font_name() == "SIINTRO_FONT");
		bool is_si_ending = is_si && (get_font_name() == "EXULT_END_FONT" || get_font_name() == "EXULT_AT_FONT");
		bool is_bg_intro = !is_si && force_not_book && (font_index == 11 || font_index == 3);
		bool is_bg_ending = !is_si && (force_not_book && (font_index == 12 || font_index == 13 || font_index == 14 || font_index == 4 || font_index == 5 || font_index == 0 || get_font_name() == "NORMAL_FONT"));

		if (is_si_intro) {
			if (config) config->value("config/video/chinese/font_size_si_intro", user_size, 0);
			final_size = user_size > 0 ? user_size : 15;
		} else if (is_si_ending) {
			if (config) config->value("config/video/chinese/font_size_si_ending", user_size, 0);
			final_size = user_size > 0 ? user_size : 15;
		} else if (is_bg_intro) {
			if (config) config->value("config/video/chinese/font_size_intro", user_size, 0);
			final_size = user_size > 0 ? user_size : 15;
		} else if (is_bg_ending) {
			if (config) config->value("config/video/chinese/font_size_ending", user_size, 0);
			final_size = user_size > 0 ? user_size : 15;
		} else if (font_index == 0 || font_index == 7 || force_not_book) {
			if (config) config->value("config/video/chinese/font_size_dialog", user_size, 0);
			final_size = user_size > 0 ? user_size : 15;    // Dialogues
		} else if (font_index == 1) { // woodsign
			if (config) config->value("config/video/chinese/font_size_woodsign", user_size, 0);
			final_size = user_size > 0 ? user_size : 14;
		} else if (font_index == 3) { // tombstone
			if (config) config->value("config/video/chinese/font_size_tombstone", user_size, 0);
			final_size = user_size > 0 ? user_size : 14;
		} else if (font_index == 6) { // goldsign
			if (config) config->value("config/video/chinese/font_size_goldsign", user_size, 0);
			final_size = user_size > 0 ? user_size : 14;
		} else if (font_index != 0 && font_index != 7 && !force_not_book) {
			if (config) config->value("config/video/chinese/font_size_book", user_size, 0);
			final_size = user_size > 0 ? user_size : 11;    // Books and UI (per user request)
		} else {
			// Fallback to height-based calculation
			int h = get_original_height();
			if (h <= 10) {
				final_size = 15; // Enforce a minimum of 15px for readability and correct wrapping
			} else {
				final_size = h * 3 / 2;
			}
		}
	}

	if (Font::is_painting_avatar_choices) {
		final_size -= Font::avatar_choices_font_size_adjust;
		if (final_size < 10) final_size = 10;
	}

	// Scale font size when painting inside a scaled gump (Book/Scroll/Sign).
	// current_gump_scale is set by Gump_scale_guard during paint().
	if (current_gump_scale > 1.0f && final_size > 0) {
		final_size = static_cast<int>(final_size * current_gump_scale + 0.5f);
	}

	return final_size;
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
	const int   height      = get_rendered_line_height_for(text) + vert_lead + get_effective_ver_lead();
	const bool  has_cjk     = Has_non_ascii(start);
	const int   space_width = get_text_width(" ", 1, has_cjk);
	const int   max_lines   = h / height;    // # lines that can be shown.
	int         cur_line    = 0;

	TTF::Render_Style style = get_chinese_ttf_style(this);
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
			TTF::Render_Style style = get_chinese_ttf_style(this);
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
	font_names_map.erase(this);
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
	font->set_font_name(name);

	if (strstr(name, "END") || strstr(name, "MENU") || strstr(name, "GUARDIAN") || strstr(name, "INTRO") || strstr(name, "AT") || strstr(name, "CREDITS") || strstr(name, "NAV") || strstr(name, "HOT")) {
		font->set_force_not_book(true);
	}

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
	font->set_font_name(name);

	if (strstr(name, "END") || strstr(name, "MENU") || strstr(name, "GUARDIAN") || strstr(name, "INTRO") || strstr(name, "AT") || strstr(name, "CREDITS") || strstr(name, "NAV") || strstr(name, "HOT")) {
		font->set_force_not_book(true);
	}

	fonts[name] = font;
}

int Font::get_effective_ver_lead() const {
	bool is_si = chinese_is_serpent_isle_pfn ? chinese_is_serpent_isle_pfn() : false;
	if (is_si && (get_font_name() == "SIINTRO_FONT" || get_font_name() == "EXULT_END_FONT" || get_font_name() == "EXULT_AT_FONT")) {
		return ver_lead + 5;
	}
	return ver_lead;
}

void Font::set_font_name(const std::string& name) {
	font_names_map[this] = name;
}

const std::string& Font::get_font_name() const {
	static std::string empty_str;
	auto it = font_names_map.find(this);
	if (it != font_names_map.end()) return it->second;
	return empty_str;
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
