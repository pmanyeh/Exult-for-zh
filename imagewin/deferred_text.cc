/*
 *  Deferred Text Rendering for Post-Scale CJK Font Display
 *
 *  Copyright (C) 2024  The Exult Team
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 */

#ifdef HAVE_CONFIG_H
#	include <config.h>
#endif

#include "deferred_text.h"
#include "manip.h"
#include "gamewin.h"
#include "imagewin.h"
#include "ignore_unused_variable_warning.h"

#include <ft2build.h>
#include FT_FREETYPE_H

#include <algorithm>
#include <cstring>
#include <iostream>

// Access the FreeType library/face from TTF namespace
namespace TTF {
	extern FT_Library library;
	extern FT_Face    face;
	bool              load_font(const char* filepath, int pixel_size);
}    // namespace TTF

Deferred_text_renderer& Deferred_text_renderer::instance() {
	static Deferred_text_renderer inst;
	return inst;
}

void Deferred_text_renderer::set_active(bool enable, int scale_factor, int w, int h) {
	active = enable;
	scale  = scale_factor;
	if (enable) {
		if (text_surface && (text_surface->w != w || text_surface->h != h)) {
			SDL_DestroySurface(text_surface);
			text_surface = nullptr;
		}
		if (!text_surface && w > 0 && h > 0) {
			text_surface = SDL_CreateSurface(w, h, SDL_PIXELFORMAT_RGBA32);
			if (text_surface) {
				SDL_SetSurfaceBlendMode(text_surface, SDL_BLENDMODE_BLEND);
				clear();
			}
		}
	} else {
		clear();
		if (text_surface) {
			SDL_DestroySurface(text_surface);
			text_surface = nullptr;
		}
	}
}

void Deferred_text_renderer::clear() {
	if (text_surface) {
		SDL_FillSurfaceRect(text_surface, nullptr, 0);
	}
}

void Deferred_text_renderer::clear_region(int x, int y, int w, int h) {
	if (!active || !text_surface) {
		return;
	}
	auto* gwin = Game_window::get_instance();
	if (!gwin) return;
	auto* image_win = gwin->get_win();
	if (!image_win) return;
	auto* ibuf = image_win->get_ibuf();
	if (!ibuf) return;

	int gb = (image_win->get_inter_surface() != image_win->get_display_surface()) ? image_win->get_guard_band() : 0;
	int ox = ibuf->get_offset_x();
	int oy = ibuf->get_offset_y();

	SDL_Rect rect = { (x + ox + gb) * scale, (y + oy + gb) * scale, w * scale, h * scale };
	SDL_FillSurfaceRect(text_surface, &rect, 0);
}

/*
 *  Helper: put a single pixel onto a 32-bit transparent RGBA surface at (px, py).
 *  Blends with destination alpha using Source Over.
 */
static inline void put_pixel_rgba(SDL_Surface* surf, int px, int py, uint8_t r, uint8_t g, uint8_t b, uint8_t a) {
	if (px < 0 || py < 0 || px >= surf->w || py >= surf->h) {
		return;
	}
	auto* pixels = static_cast<uint32_t*>(surf->pixels);
	const int pitch_pixels = surf->pitch / 4;
	uint32_t& dest = pixels[py * pitch_pixels + px];

	const SDL_PixelFormatDetails* fmt = SDL_GetPixelFormatDetails(surf->format);

	// Extract existing RGBA channels based on the format layout
	uint8_t dr = ((dest >> fmt->Rshift) << (8 - fmt->Rbits)) & 0xff;
	uint8_t dg = ((dest >> fmt->Gshift) << (8 - fmt->Gbits)) & 0xff;
	uint8_t db = ((dest >> fmt->Bshift) << (8 - fmt->Bbits)) & 0xff;
	uint8_t da = fmt->Amask ? (((dest >> fmt->Ashift) << (8 - fmt->Abits)) & 0xff) : 0;

	// Alpha blend source over destination
	uint8_t out_a = a + ((da * (255 - a)) / 255);
	uint8_t out_r, out_g, out_b;
	if (out_a > 0) {
		out_r = static_cast<uint8_t>((r * a + dr * da * (255 - a) / 255) / out_a);
		out_g = static_cast<uint8_t>((g * a + dg * da * (255 - a) / 255) / out_a);
		out_b = static_cast<uint8_t>((b * a + db * da * (255 - a) / 255) / out_a);
	} else {
		out_r = out_g = out_b = 0;
	}

	uint32_t pixel = ((out_r >> (8 - fmt->Rbits)) << fmt->Rshift)
	               | ((out_g >> (8 - fmt->Gbits)) << fmt->Gshift)
	               | ((out_b >> (8 - fmt->Bbits)) << fmt->Bshift);
	if (fmt->Amask) {
		pixel |= ((out_a >> (8 - fmt->Abits)) << fmt->Ashift);
	}
	dest = pixel;
}

/*
 *  Render a single glyph onto the text_surface at scaled coordinates.
 *  Uses FreeType at scaled pixel size for crisp rendering.
 */
void Deferred_text_renderer::draw_glyph(
		uint32_t wch, int x, int y,
		unsigned char fg_palette, unsigned char bg_palette,
		bool has_shadow, const Deferred_glyph_style& style,
		const std::string& font_path, int pixel_size,
		bool is_book, Image_buffer8* win) {
	if (!active || !text_surface) {
		return;
	}
	ignore_unused_variable_warning(is_book);

	auto* gwin = Game_window::get_instance();
	if (!gwin) return;
	auto* image_win = gwin->get_win();
	if (!image_win) return;
	SDL_Surface* paletted_surface = image_win->get_paletted_surface();
	if (!paletted_surface) return;
	SDL_Palette* pal = SDL_GetSurfacePalette(paletted_surface);
	if (!pal) return;
	const SDL_Color* palette = pal->colors;

	if (wch == 127) {
		// Load original font size just to get the ascender
		int ascender = 10;
		if (TTF::load_font(font_path.c_str(), pixel_size)) {
			ascender = TTF::face->size->metrics.ascender >> 6;
		}
		int gb = (image_win->get_inter_surface() != image_win->get_display_surface()) ? image_win->get_guard_band() : 0;
		int scaled_dot_x = (x + win->get_offset_x() + gb + 3) * scale;
		int scaled_dot_y = (y + win->get_offset_y() + gb + ascender - 5) * scale;
		int dot_size = 2 * scale;

		SDL_Color fg_rgb = palette[fg_palette];
		SDL_Color bg_rgb = palette[bg_palette];

		if (has_shadow) {
			// Right vertical bar of shadow
			for (int dy = 0; dy < dot_size + scale; ++dy) {
				for (int dx = 0; dx < scale; ++dx) {
					put_pixel_rgba(text_surface, scaled_dot_x + dot_size + dx, scaled_dot_y + dy, bg_rgb.r, bg_rgb.g, bg_rgb.b, 255);
				}
			}
			// Bottom horizontal bar of shadow
			for (int dy = 0; dy < scale; ++dy) {
				for (int dx = 0; dx < dot_size; ++dx) {
					put_pixel_rgba(text_surface, scaled_dot_x + dx, scaled_dot_y + dot_size + dy, bg_rgb.r, bg_rgb.g, bg_rgb.b, 255);
				}
			}
		}

		for (int dy = 0; dy < dot_size; ++dy) {
			for (int dx = 0; dx < dot_size; ++dx) {
				put_pixel_rgba(text_surface, scaled_dot_x + dx, scaled_dot_y + dy, fg_rgb.r, fg_rgb.g, fg_rgb.b, 255);
			}
		}
		return;
	}

	// Load the font at scaled pixel size
	int scaled_size = pixel_size * scale;
	if (!TTF::load_font(font_path.c_str(), scaled_size)) {
		return;
	}

	struct SizeRestorer {
		std::string path;
		int orig_size;
		~SizeRestorer() {
			TTF::load_font(path.c_str(), orig_size);
		}
	} restorer{ font_path, pixel_size };

	// Load the glyph — use grayscale rendering for anti-aliased text at high res
	FT_Int32 load_flags = FT_LOAD_RENDER | FT_LOAD_TARGET_NORMAL;
	if (FT_Load_Char(TTF::face, wch, load_flags)) {
		return;
	}

	FT_Bitmap& bitmap = TTF::face->glyph->bitmap;

	int ascender = TTF::face->size->metrics.ascender >> 6;

	// Scale the game-coordinate position to text_surface coordinates
	// Add offset_x/offset_y (the main draw surface has offset padding)
	int gb = (image_win->get_inter_surface() != image_win->get_display_surface()) ? image_win->get_guard_band() : 0;
	int sx = (x + win->get_offset_x() + gb) * scale;
	int sy = (y + win->get_offset_y() + gb) * scale;

	// Compute glyph placement
	int left_x = sx + TTF::face->glyph->bitmap_left;
	int top_y  = sy + ascender - TTF::face->glyph->bitmap_top;

	// Get RGB colors from palette
	SDL_Color fg_rgb = palette[fg_palette];
	SDL_Color bg_rgb = palette[bg_palette];

	// For grayscale bitmaps, bitmap.pixel_mode == FT_PIXEL_MODE_GRAY
	// Each byte is an alpha value 0-255
	bool is_grayscale = (bitmap.pixel_mode == FT_PIXEL_MODE_GRAY);

	// Draw shadow/outline first if needed
	if (has_shadow) {
		int so_x = style.shadow_offset_x * scale;
		int so_y = style.shadow_offset_y * scale;

		for (unsigned int row = 0; row < bitmap.rows; ++row) {
			for (unsigned int col = 0; col < bitmap.width; ++col) {
				uint8_t alpha;
				if (is_grayscale) {
					alpha = bitmap.buffer[row * bitmap.pitch + col];
				} else {
					int byte_idx = row * bitmap.pitch + (col >> 3);
					int bit_idx  = 7 - (col & 7);
					alpha = (bitmap.buffer[byte_idx] & (1 << bit_idx)) ? 255 : 0;
				}
				if (alpha < 128) {
					continue;    // Skip nearly-transparent pixels for shadow
				}

				int draw_x = left_x + col;
				int draw_y = top_y + row;

				if (style.shadow_type == -1) {
					// Default legacy shadow style (scaled offsets)
					if (wch >= 0x80) {
						put_pixel_rgba(text_surface, draw_x - scale, draw_y, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
						put_pixel_rgba(text_surface, draw_x, draw_y - scale, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
					}
					put_pixel_rgba(text_surface, draw_x + scale, draw_y, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
					put_pixel_rgba(text_surface, draw_x, draw_y + scale, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
					put_pixel_rgba(text_surface, draw_x + scale, draw_y + scale, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
				} else if (style.shadow_type == 1) {
					// Drop shadow
					put_pixel_rgba(text_surface, draw_x + so_x, draw_y + so_y, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
				} else if (style.shadow_type == 2) {
					// Full outline
					for (int ddx = -so_x; ddx <= so_x; ddx++) {
						for (int ddy = -so_y; ddy <= so_y; ddy++) {
							if (ddx != 0 || ddy != 0) {
								put_pixel_rgba(text_surface, draw_x + ddx, draw_y + ddy, bg_rgb.r, bg_rgb.g, bg_rgb.b, alpha);
							}
						}
					}
				}
			}
		}
	}

	// Draw foreground text
	for (unsigned int row = 0; row < bitmap.rows; ++row) {
		for (unsigned int col = 0; col < bitmap.width; ++col) {
			uint8_t alpha;
			if (is_grayscale) {
				alpha = bitmap.buffer[row * bitmap.pitch + col];
			} else {
				int byte_idx = row * bitmap.pitch + (col >> 3);
				int bit_idx  = 7 - (col & 7);
				alpha = (bitmap.buffer[byte_idx] & (1 << bit_idx)) ? 255 : 0;
			}
			if (alpha == 0) {
				continue;
			}

			int draw_x = left_x + col;
			int draw_y = top_y + row;

			put_pixel_rgba(text_surface, draw_x, draw_y, fg_rgb.r, fg_rgb.g, fg_rgb.b, alpha);

			// Boldness (weight)
			for (int w = 1; w <= style.weight * scale; ++w) {
				put_pixel_rgba(text_surface, draw_x + w, draw_y, fg_rgb.r, fg_rgb.g, fg_rgb.b, alpha);
			}
		}
	}
}

void Deferred_text_renderer::blit(SDL_Surface* inter_surface, int x, int y, int w, int h, int guard_band) {
	if (!active || !text_surface) {
		return;
	}

	int dx = (x + guard_band) * scale;
	int dy = (y + guard_band) * scale;
	int dw = w * scale;
	int dh = h * scale;

	SDL_Rect rect = { dx, dy, dw, dh };
	SDL_BlitSurface(text_surface, &rect, inter_surface, &rect);
}
