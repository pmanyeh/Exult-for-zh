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

#include "Scroll_gump.h"

#include "game.h"
#include "gamewin.h"
#include "deferred_text.h"

/*
 *  Create scroll display.
 */

Scroll_gump::Scroll_gump(int fnt, int gump) : Text_gump(gump < 0 ? game->get_shape("gumps/scroll") : gump, fnt) {
	set_pos();
}

/*
 *  Paint scroll.  Updates curend.
 */

void Scroll_gump::paint() {
	const int scale = get_gump_scale();
	Gump_scale_guard guard(static_cast<float>(scale));

	if (Deferred_text_renderer::instance().is_active()) {
		TileRect rect = get_rect();
		Deferred_text_renderer::instance().clear_region(rect.x, rect.y, rect.w, rect.h);
	}
	// Paint the background shape at UI scale.
	paint_shape_scaled(scale);

	// Original page area: (51, 31, 142, 118). Scale proportionally.
	curend = paint_page(TileRect(51 * scale, 31 * scale, 142 * scale, 118 * scale), curtop);
}
