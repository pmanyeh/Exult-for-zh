/*
 *
 *  Copyright (C) 2006  The Exult Team
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
 *
 *
 *	This header file contains externs for come of the new items and for the
 *	new NPCs. This is so that these functions can be used before their
 *	implementation.
 *
 *	Author: Marzo Junior
 *	Last Modified: 2006-02-27
 */

extern void Keyring shape#(0x44C) ();

extern void Zauriel object#(0x48B) ();
extern void Laurianna object#(0x494) ();

// SI engine-layer keyring intrinsics (available in SI game mode, intrinsic 0xC2/0xC3/0xC8).
// Declared here so BG Keyring Mod can call them when running under Serpent Isle.
// Note: ucc requires 'extern' syntax with shape# for non-shape functions; use 0xNN for intrinsic number.
extern var SI_is_on_keyring 0xC2(var key_quality);
extern void SI_add_to_keyring 0xC3(var key_quality);
extern var SI_remove_from_keyring 0xC8(var key_quality);
