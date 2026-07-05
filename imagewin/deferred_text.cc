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
#include "iwin8.h"
#include "ignore_unused_variable_warning.h"
#include "mouse.h"
#include "palette.h"

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
		std::memset(text_surface->pixels, 0, text_surface->pitch * text_surface->h);
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
	
	// Clip rect to surface bounds to avoid out-of-bounds memset
	if (rect.x < 0) { rect.w += rect.x; rect.x = 0; }
	if (rect.y < 0) { rect.h += rect.y; rect.y = 0; }
	if (rect.x + rect.w > text_surface->w) { rect.w = text_surface->w - rect.x; }
	if (rect.y + rect.h > text_surface->h) { rect.h = text_surface->h - rect.y; }

	if (rect.w > 0 && rect.h > 0) {
		auto* pixels = static_cast<uint8_t*>(text_surface->pixels);
		int pitch = text_surface->pitch;
		for (int r = 0; r < rect.h; ++r) {
			std::memset(pixels + (rect.y + r) * pitch + rect.x * 4, 0, rect.w * 4);
		}
	}
}

/*
 *  Helper: put a single pixel onto a 32-bit transparent RGBA surface at (px, py).
 *  Blends with destination alpha using Source Over.
 */
static inline void put_pixel_rgba(SDL_Surface* surf, int px, int py, uint8_t r, uint8_t g, uint8_t b, uint8_t a) {
	if (px < 0 || py < 0 || px >= surf->w || py >= surf->h) {
		return;
	}
	auto* pixels = static_cast<uint8_t*>(surf->pixels);
	uint32_t* p = reinterpret_cast<uint32_t*>(pixels + py * surf->pitch + px * 4);

	const SDL_PixelFormatDetails* fmt = SDL_GetPixelFormatDetails(surf->format);
	const SDL_Palette* pal = SDL_GetSurfacePalette(surf);

	uint8_t dr, dg, db, da;
	SDL_GetRGBA(*p, fmt, pal, &dr, &dg, &db, &da);

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

	*p = SDL_MapRGBA(fmt, pal, out_r, out_g, out_b, out_a);
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
	if (wch >= 0x80) {
		static int draw_glyph_enter_log = 0;
		if (draw_glyph_enter_log++ < 5) {
			std::cout << "draw_glyph ENTRANCE: wch=" << wch << ", raw_x=" << x << ", raw_y=" << y 
			          << ", active=" << active << ", text_surf=" << (void*)text_surface << std::endl;
		}
	}

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
		int ppem = 15;
		if (TTF::load_font(font_path.c_str(), pixel_size)) {
			ascender = TTF::face->size->metrics.ascender >> 6;
			ppem = TTF::face->size->metrics.y_ppem;
		}
		int gb = (image_win->get_inter_surface() != image_win->get_display_surface()) ? image_win->get_guard_band() : 0;
		
		int base_dot_w = std::max(8, ppem / 2 + 1);
		int base_dot_size = std::max(2, ppem / 7);
		
		int scaled_dot_x = (x + win->get_offset_x() + gb + base_dot_w / 2 - base_dot_size / 2) * scale;
		int scaled_dot_y = (y + win->get_offset_y() + gb + ascender - ppem / 3 - base_dot_size / 2) * scale;
		int dot_size = base_dot_size * scale;

		SDL_Color fg_rgb;
		SDL_Color bg_rgb;
		Palette* exult_pal = gwin->get_pal();
		if (exult_pal) {
			if (fg_palette == 255 && exult_pal->get_border_index() == 255) {
				unsigned char br, bg, bb;
				Palette::get_border(br, bg, bb);
				fg_rgb.r = br;
				fg_rgb.g = bg;
				fg_rgb.b = bb;
			} else {
				fg_rgb.r = exult_pal->get_red(fg_palette) * 4;
				fg_rgb.g = exult_pal->get_green(fg_palette) * 4;
				fg_rgb.b = exult_pal->get_blue(fg_palette) * 4;
			}
			if (bg_palette == 255 && exult_pal->get_border_index() == 255) {
				unsigned char br, bg, bb;
				Palette::get_border(br, bg, bb);
				bg_rgb.r = br;
				bg_rgb.g = bg;
				bg_rgb.b = bb;
			} else {
				bg_rgb.r = exult_pal->get_red(bg_palette) * 4;
				bg_rgb.g = exult_pal->get_green(bg_palette) * 4;
				bg_rgb.b = exult_pal->get_blue(bg_palette) * 4;
			}
		} else {
			fg_rgb = palette[fg_palette];
			bg_rgb = palette[bg_palette];
		}
		// Apply brightness boost for intro/ending scenes to compensate for
		// anti-aliasing darkening effect on dark backgrounds.
		if (style.brightness_boost > 1.0f) {
			auto boost = [](uint8_t v, float f) -> uint8_t {
				int r = static_cast<int>(v * f);
				return r > 255 ? 255 : static_cast<uint8_t>(r);
			};
			const float b = style.brightness_boost;
			fg_rgb.r = boost(fg_rgb.r, b);
			fg_rgb.g = boost(fg_rgb.g, b);
			fg_rgb.b = boost(fg_rgb.b, b);
			bg_rgb.r = boost(bg_rgb.r, b);
			bg_rgb.g = boost(bg_rgb.g, b);
			bg_rgb.b = boost(bg_rgb.b, b);
		}

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

	// Get RGB colors from palette (use base colors to avoid capturing black during a fade out)
	SDL_Color fg_rgb;
	SDL_Color bg_rgb;
	Palette* exult_pal = gwin->get_pal();
	if (exult_pal) {
		if (fg_palette == 255 && exult_pal->get_border_index() == 255) {
			unsigned char br, bg, bb;
			Palette::get_border(br, bg, bb);
			fg_rgb.r = br;
			fg_rgb.g = bg;
			fg_rgb.b = bb;
		} else {
			fg_rgb.r = exult_pal->get_red(fg_palette) * 4;
			fg_rgb.g = exult_pal->get_green(fg_palette) * 4;
			fg_rgb.b = exult_pal->get_blue(fg_palette) * 4;
		}
		if (bg_palette == 255 && exult_pal->get_border_index() == 255) {
			unsigned char br, bg, bb;
			Palette::get_border(br, bg, bb);
			bg_rgb.r = br;
			bg_rgb.g = bg;
			bg_rgb.b = bb;
		} else {
			bg_rgb.r = exult_pal->get_red(bg_palette) * 4;
			bg_rgb.g = exult_pal->get_green(bg_palette) * 4;
			bg_rgb.b = exult_pal->get_blue(bg_palette) * 4;
		}
	} else {
		fg_rgb = palette[fg_palette];
		bg_rgb = palette[bg_palette];
	}
	// Apply brightness boost for intro/ending scenes to compensate for
	// anti-aliasing darkening effect on dark backgrounds.
	if (style.brightness_boost > 1.0f) {
		auto boost = [](uint8_t v, float f) -> uint8_t {
			int r = static_cast<int>(v * f);
			return r > 255 ? 255 : static_cast<uint8_t>(r);
		};
		const float b = style.brightness_boost;
		fg_rgb.r = boost(fg_rgb.r, b);
		fg_rgb.g = boost(fg_rgb.g, b);
		fg_rgb.b = boost(fg_rgb.b, b);
		bg_rgb.r = boost(bg_rgb.r, b);
		bg_rgb.g = boost(bg_rgb.g, b);
		bg_rgb.b = boost(bg_rgb.b, b);
	}

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

			if (alpha > 0) {
				static int glyph_log_cnt = 0;
				if (glyph_log_cnt++ < 5) {
					std::cout << "draw_glyph WRITE: draw_x=" << draw_x << ", draw_y=" << draw_y 
					          << ", font_alpha=" << alpha << ", surface_w=" << text_surface->w 
					          << ", surface_h=" << text_surface->h << std::endl;
				}
			}

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

	auto* gwin = Game_window::get_instance();
	if (!gwin) return;
	auto* image_win = gwin->get_win();
	if (!image_win) return;
	auto* ibuf = image_win->get_ibuf();
	if (!ibuf) return;

	int ox = ibuf->get_offset_x();
	int oy = ibuf->get_offset_y();

	// x, y here are already in ibuf-offset-adjusted coordinates (from show()).
	// draw_glyph uses sx = (x + offset_x + gb) * scale to draw onto text_surface.
	// So src coords on text_surface MUST include ox and oy.
	int src_x = (x + ox + guard_band) * scale;
	int src_y = (y + oy + guard_band) * scale;
	// dst coords on inter_surface MUST NOT include ox and oy, because inter_surface 
	// is scaled directly from draw_surface which handles its own offset.
	int dst_x = (x + guard_band) * scale;
	int dst_y = (y + guard_band) * scale;
	
	int dw = w * scale;
	int dh = h * scale;

	// Check for mouse to mask out
	auto* mouse_obj = Mouse::mouse();
	Shape_frame* cur_frame = nullptr;
	int cx_start = 0, cy_start = 0;
	if (mouse_obj && mouse_obj->is_onscreen() && image_win) {
		cur_frame = mouse_obj->get_current_frame();
		if (cur_frame) {
			// Get mouse coordinates relative to the visible screen area
			int screen_mouse_x = mouse_obj->get_mousex() - image_win->get_start_x();
			int screen_mouse_y = mouse_obj->get_mousey() - image_win->get_start_y();
			cx_start = screen_mouse_x - cur_frame->get_xleft();
			cy_start = screen_mouse_y - cur_frame->get_yabove();
		}
	}

	// Clamp to inter_surface bounds
	if (dst_x < 0) { dw += dst_x; src_x -= dst_x; dst_x = 0; }
	if (dst_y < 0) { dh += dst_y; src_y -= dst_y; dst_y = 0; }
	if (dst_x + dw > inter_surface->w) { dw = inter_surface->w - dst_x; }
	if (dst_y + dh > inter_surface->h) { dh = inter_surface->h - dst_y; }

	// Clamp to text_surface bounds
	if (src_x < 0) { dw += src_x; dst_x -= src_x; src_x = 0; }
	if (src_y < 0) { dh += src_y; dst_y -= src_y; src_y = 0; }
	if (src_x + dw > text_surface->w) { dw = text_surface->w - src_x; }
	if (src_y + dh > text_surface->h) { dh = text_surface->h - src_y; }

	if (dw <= 0 || dh <= 0) {
		static int blit_skip_log = 0;
		if (blit_skip_log++ < 5) {
			std::cout << "blit SKIPPED: src_x=" << src_x << ", src_y=" << src_y 
			          << ", dst_x=" << dst_x << ", dst_y=" << dst_y 
			          << ", dw=" << dw << ", dh=" << dh << std::endl;
		}
		return;
	}

	static int blit_bounds_log = 0;
	if (blit_bounds_log++ < 5) {
		std::cout << "blit BOUNDS: src_x=" << src_x << ", src_y=" << src_y 
		          << ", dst_x=" << dst_x << ", dst_y=" << dst_y 
		          << ", dw=" << dw << ", dh=" << dh << " | inter_w=" << inter_surface->w 
		          << ", inter_h=" << inter_surface->h << std::endl;
	}

	const SDL_PixelFormatDetails* src_fmt = SDL_GetPixelFormatDetails(text_surface->format);
	const SDL_PixelFormatDetails* dst_fmt = SDL_GetPixelFormatDetails(inter_surface->format);
	if (!src_fmt || !dst_fmt) return;

	const SDL_Palette* src_pal = SDL_GetSurfacePalette(text_surface);
	const SDL_Palette* dst_pal = SDL_GetSurfacePalette(inter_surface);

	uint8_t* src_pixels = static_cast<uint8_t*>(text_surface->pixels);
	uint8_t* dst_pixels = static_cast<uint8_t*>(inter_surface->pixels);
	int src_pitch = text_surface->pitch;
	int dst_pitch = inter_surface->pitch;

	for (int r = 0; r < dh; ++r) {
		uint8_t* src_row = src_pixels + (src_y + r) * src_pitch + src_x * src_fmt->bytes_per_pixel;
		uint8_t* dst_row = dst_pixels + (dst_y + r) * dst_pitch + dst_x * dst_fmt->bytes_per_pixel;
		
		for (int c = 0; c < dw; ++c) {
			uint32_t sp = *reinterpret_cast<uint32_t*>(src_row + c * 4);
			uint8_t sr, sg, sb, sa;
			SDL_GetRGBA(sp, src_fmt, src_pal, &sr, &sg, &sb, &sa);
			
			if (sa > 0) {
				if (cur_frame && mouse_obj->is_onscreen()) {
					int buffer_x = x + (c / scale);
					int buffer_y = y + (r / scale);
					
					// Convert buffer coordinates to actual screen pixels
					int sx_pixel = buffer_x + image_win->get_start_x();
					int sy_pixel = buffer_y + image_win->get_start_y();

					if (sx_pixel >= cx_start && sx_pixel < cx_start + cur_frame->get_width() &&
						sy_pixel >= cy_start && sy_pixel < cy_start + cur_frame->get_height()) {
						
						int mx = sx_pixel - cx_start;
						int my = sy_pixel - cy_start;
						if (cur_frame->has_point(mx - cur_frame->get_xleft(), my - cur_frame->get_yabove())) {
							continue; // Skip drawing text here, let mouse show through
						}
					}
				}

				static int blit_log_cnt = 0;
				if (blit_log_cnt++ < 10) {
					std::cout << "blit BLEND: dst[" << dst_x + c << "," << dst_y + r << "], "
					          << "src_RGBA(" << (int)sr << "," << (int)sg << "," << (int)sb << "," << (int)sa << "), "
					          << "dst_bpp=" << (int)dst_fmt->bytes_per_pixel << std::endl;
				}

				uint32_t dp = 0;
				if (dst_fmt->bytes_per_pixel == 4) dp = *reinterpret_cast<uint32_t*>(dst_row + c * 4);
				else if (dst_fmt->bytes_per_pixel == 2) dp = *reinterpret_cast<uint16_t*>(dst_row + c * 2);
				else if (dst_fmt->bytes_per_pixel == 1) dp = *(dst_row + c);
				else if (dst_fmt->bytes_per_pixel == 3) {
					dp = dst_row[c*3] | (dst_row[c*3+1] << 8) | (dst_row[c*3+2] << 16);
				}

				uint8_t dr, dg, db, da;
				SDL_GetRGBA(dp, dst_fmt, dst_pal, &dr, &dg, &db, &da);

				// Apply global palette brightness to text color to sync with fades
				Palette* exult_pal = image_win ? Game_window::get_instance()->get_pal() : nullptr;
				int brightness = exult_pal ? exult_pal->get_brightness() : 100;
				uint8_t br = (sr * brightness) / 100;
				uint8_t bg = (sg * brightness) / 100;
				uint8_t bb = (sb * brightness) / 100;

				// Source over blending
				uint8_t out_r = (br * sa + dr * (255 - sa)) / 255;
				uint8_t out_g = (bg * sa + dg * (255 - sa)) / 255;
				uint8_t out_b = (bb * sa + db * (255 - sa)) / 255;
				uint8_t out_a = sa + da * (255 - sa) / 255;

				uint32_t out_p = SDL_MapRGBA(dst_fmt, dst_pal, out_r, out_g, out_b, out_a);

				if (dst_fmt->bytes_per_pixel == 4) *reinterpret_cast<uint32_t*>(dst_row + c * 4) = out_p;
				else if (dst_fmt->bytes_per_pixel == 2) *reinterpret_cast<uint16_t*>(dst_row + c * 2) = static_cast<uint16_t>(out_p);
				else if (dst_fmt->bytes_per_pixel == 1) *(dst_row + c) = static_cast<uint8_t>(out_p);
				else if (dst_fmt->bytes_per_pixel == 3) {
					dst_row[c*3] = out_p & 0xFF;
					dst_row[c*3+1] = (out_p >> 8) & 0xFF;
					dst_row[c*3+2] = (out_p >> 16) & 0xFF;
				}
			}
		}
	}
}
