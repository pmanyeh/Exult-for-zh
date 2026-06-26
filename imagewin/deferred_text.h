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

#ifndef DEFERRED_TEXT_H
#define DEFERRED_TEXT_H

#include <cstdint>
#include <string>

struct SDL_Surface;

/*
 *  Style parameters for deferred glyph rendering.
 */
struct Deferred_glyph_style {
	int   letter_spacing;
	int   weight;
	int   shadow_type;
	int   shadow_offset_x;
	int   shadow_offset_y;
	int   shadow_color;        // palette index, -1 = auto
	int   fg_color;            // palette index, -1 = auto
	float brightness_boost;    // Pre-compensation for anti-aliasing darkening.
	                           // 1.0 = no boost (default). Only set > 1.0 for
	                           // intro/ending scenes on dark backgrounds.
};

#if __has_include(<SDL3/SDL.h>)

/*
 *  Global deferred text rendering system.
 *  Thread-unsafe — called only from main rendering thread.
 */
class Deferred_text_renderer {
private:
	SDL_Surface*                text_surface = nullptr;
	bool                        active = false;    // Is deferred mode enabled?
	int                         scale  = 1;        // Current scale factor

public:
	static Deferred_text_renderer& instance();

	// Enable/disable deferred rendering and allocate surface
	void set_active(bool enable, int scale_factor = 1, int w = 0, int h = 0);
	bool is_active() const { return active; }
	int  get_scale() const { return scale; }
	SDL_Surface* get_surface() const { return text_surface; }

	// Clear a specific region of text_surface (relative to draw_surface coordinates)
	void clear_region(int x, int y, int w, int h);

	// Draw a glyph directly to text_surface
	void draw_glyph(uint32_t wch, int x, int y,
	                unsigned char fg_palette, unsigned char bg_palette,
	                bool has_shadow, const Deferred_glyph_style& style,
	                const std::string& font_path, int pixel_size,
	                bool is_book, class Image_buffer8* win);

	// Blit the dirty rect of text_surface onto inter_surface
	void blit(SDL_Surface* inter_surface, int x, int y, int w, int h, int guard_band);

	// Clear the entire text_surface
	void clear();
};

#else // !__has_include(<SDL3/SDL.h>) - Stub implementation for Exult Studio

class Deferred_text_renderer {
public:
	static Deferred_text_renderer& instance() {
		static Deferred_text_renderer inst;
		return inst;
	}
	void set_active(bool enable, int scale_factor = 1, int w = 0, int h = 0) {}
	bool is_active() const { return false; }
	int  get_scale() const { return 1; }
	SDL_Surface* get_surface() const { return nullptr; }
	void clear_region(int x, int y, int w, int h) {}
	void draw_glyph(uint32_t wch, int x, int y,
	                unsigned char fg_palette, unsigned char bg_palette,
	                bool has_shadow, const Deferred_glyph_style& style,
	                const std::string& font_path, int pixel_size,
	                bool is_book, class Image_buffer8* win) {}
	void blit(SDL_Surface* inter_surface, int x, int y, int w, int h, int guard_band) {}
	void clear() {}
};

#endif // __has_include(<SDL3/SDL.h>)

#endif    // DEFERRED_TEXT_H
