/*
Copyright (C) 2000-2025 The Exult Team

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

#include "Book_gump.h"

#include "game.h"
#include "gamewin.h"
#include "deferred_text.h"

/*
 *  Create book display.
 */

Book_gump::Book_gump(int fnt, int gump) : Text_gump(gump < 0 ? game->get_shape("gumps/book") : gump, fnt) {
	// Re-calculate position now that the virtual table is fully constructed.
	// This ensures is_scaled_gump() correctly returns true and set_pos_scaled() is executed.
	set_pos();
}

/*
 *  Paint book.  Updates curend.
 */

void Book_gump::paint() {
	const int scale = get_gump_scale();
	Gump_scale_guard guard(static_cast<float>(scale));

	if (Deferred_text_renderer::instance().is_active()) {
		TileRect rect = get_rect();
		Deferred_text_renderer::instance().clear_region(rect.x, rect.y, rect.w, rect.h);
	}
	// Paint the gump itself at UI scale.
	paint_shape_scaled(scale);
	// Paint left page.
	curend = paint_page(TileRect(35 * scale, 8 * scale, 125 * scale, 130 * scale), curtop);
	// Paint right page.
	curend = paint_page(TileRect(173 * scale, 8 * scale, 125 * scale, 130 * scale), curend);
}
