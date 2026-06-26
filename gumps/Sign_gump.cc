/*
Copyright (C) 2000-2022 The Exult Team

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
*/

#ifdef HAVE_CONFIG_H
#	include <config.h>
#endif

#include "Sign_gump.h"

#include "Font.h"
#include "actors.h"
#include "deferred_text.h"
#include "font.h"
#include "game.h"
#include "gamewin.h"


/*
 *  Create a sign gump.
 */

Sign_gump::Sign_gump(
		int shapenum,
		int nlines    // # of text lines.
		)
		: Gump(nullptr, shapenum), num_lines(nlines), serpentine(false) {
	// THIS IS A HACK, but don't ask me why this is like this,
	if (Game::get_game_type() == SERPENT_ISLE && shapenum == 49) {
		// check for avatar read here
		Main_actor* avatar = gwin->get_main_actor();
		if (!avatar->get_flag(Obj_flags::read)) {
			serpentine = true;
		}

		shapenum = game->get_shape("gumps/goldsign");
		set_shape(shapenum);
		set_pos();    // Recenter
	}

	if (shapenum == game->get_shape("gumps/woodsign")) {
		set_object_area(TileRect(0, 4, 196, 92));
	} else if (shapenum == game->get_shape("gumps/tombstone")) {
		set_object_area(TileRect(0, 8, 200, 112));
	} else if (shapenum == game->get_shape("gumps/goldsign")) {
		if (Game::get_game_type() == BLACK_GATE) {
			set_object_area(TileRect(0, 4, 232, 96));
		} else {    // SI
			set_object_area(TileRect(4, 4, 312, 96));
		}
	} else if (shapenum == game->get_shape("gumps/scroll")) {
		set_object_area(TileRect(48, 30, 146, 118));
	}
	lines = new std::string[num_lines];

	// Re-calculate position now that the virtual table is fully constructed.
	// This ensures is_scaled_gump() correctly returns true and set_pos_scaled() is executed,
	// properly centering the scaled sign before usecode/intrinsics.cc potentially shifts it.
	set_pos();
}

/*
 *  Delete sign.
 */

Sign_gump::~Sign_gump() {
	delete[] lines;
}

/*
 *  Add a line of text.
 */

void Sign_gump::add_text(int line, const std::string& txt) {
	if (line < 0 || line >= num_lines) {
		return;
	}

	// check for avatar read here
	Main_actor* avatar = gwin->get_main_actor();

	if (!serpentine && avatar->get_flag(Obj_flags::read)) {
		for (const auto& ch : txt) {
			if (ch == '(') {
				lines[line] += "TH";
			} else if (ch == ')') {
				lines[line] += "EE";
			} else if (ch == '*') {
				lines[line] += "NG";
			} else if (ch == '+') {
				lines[line] += "EA";
			} else if (ch == ',') {
				lines[line] += "ST";
			} else if (ch == '|') {
				lines[line] += ' ';
			} else {
				lines[line] += static_cast<char>(std::toupper(static_cast<unsigned char>(ch)));
			}
		}
	} else {
		lines[line] = txt;
	}
}

/*
 *  Paint sign.
 */

void Sign_gump::paint() {
	const int scale = get_gump_scale();
	Gump_scale_guard guard(static_cast<float>(scale));

	if (Deferred_text_renderer::instance().is_active()) {
		TileRect rect = get_rect();
		Deferred_text_renderer::instance().clear_region(rect.x, rect.y, rect.w, rect.h);
	}

	int font = 1;    // Normal runes.
	if (get_shapenum() == game->get_shape("gumps/goldsign")) {
		if (serpentine) {
			font = 10;
		} else {
			font = 6;    // Embossed.
		}
	} else if (serpentine) {
		font = 8;
	} else if (get_shapenum() == game->get_shape("gumps/tombstone")) {
		font = 3;
	}
	// Exult-zh: Determine if any sign line contains Chinese (non-ASCII) characters.
	bool has_chinese = false;
	for (int i = 0; i < num_lines; i++) {
		for (unsigned char c : lines[i]) {
			if (c >= 0x80) { has_chinese = true; break; }
		}
		if (has_chinese) break;
	}
	// Get height of 1 line (already scale-aware via get_text_height when
	// current_gump_scale > 1, because font.cc reads current_gump_scale).
	const int lheight = has_chinese ? sman->get_text_height(font) : sman->get_font(font)->get_rendered_line_height();

	// Scale the object_area so the existing lspace/ypos logic operates
	// within the correct pixel bounds. The original positioning offsets
	// (e.g. "translation mode shifts text slightly down") are preserved
	// because they are derived from lspace which scales with object_area.h.
	const TileRect scaled_area(
		object_area.x * scale,
		object_area.y * scale,
		object_area.w * scale,
		object_area.h * scale
	);

	// Get space between lines (uses scaled area height).
	const int lspace = (scaled_area.h - num_lines * lheight) / (num_lines + 1);

	// Paint the background shape at UI scale.
	paint_shape_scaled(scale);

	Font::is_painting_sign = true;
	int ypos = y + scaled_area.y;    // Where to paint next line.
	for (int i = 0; i < num_lines; i++) {
		ypos += lspace;
		if (lines[i].empty()) {
			continue;
		}
		sman->paint_text(
				font, lines[i].c_str(),
				x + scaled_area.x + (scaled_area.w - sman->get_text_width(font, lines[i].c_str())) / 2,
				ypos);
		ypos += lheight;
	}
	Font::is_painting_sign = false;
	gwin->set_painted();
}
