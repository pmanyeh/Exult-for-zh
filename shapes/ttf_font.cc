#include "ibuf8.h"
#include "deferred_text.h"
#include <ft2build.h>
#include FT_FREETYPE_H
#include <string>

#ifdef _WIN32
#include <windows.h>
#endif

namespace TTF {
    FT_Library library = nullptr;
    FT_Face face = nullptr;
    static bool initialized = false;

    bool init() {
        if (initialized) return true;
        if (FT_Init_FreeType(&library)) {
            return false;
        }
        initialized = true;
        return true;
    }

    void cleanup() {
        if (face) {
            FT_Done_Face(face);
            face = nullptr;
        }
        if (library) {
            FT_Done_FreeType(library);
            library = nullptr;
        }
        initialized = false;
    }

    static std::string loaded_path = "";
    static int loaded_size = -1;

    bool load_font(const char* filepath, int pixel_size) {
        if (!initialized) init();
        if (face && loaded_path == filepath) {
            if (loaded_size != pixel_size) {
                FT_Set_Pixel_Sizes(face, 0, pixel_size);
                loaded_size = pixel_size;
            }
            return true;
        }
        if (face) {
            FT_Done_Face(face);
            face = nullptr;
        }
        if (FT_New_Face(library, filepath, 0, &face)) {
            loaded_path = "";
            loaded_size = -1;
            return false;
        }
        FT_Set_Pixel_Sizes(face, 0, pixel_size);
        loaded_path = filepath;
        loaded_size = pixel_size;
        return true;
    }

    int get_ascender() {
        if (!face) return 12;
        return face->size->metrics.ascender >> 6;
    }

    uint32_t decode_utf8(const char*& text) {
        unsigned char c1 = *text++;
        if (c1 == 0) return 0;
        if (c1 < 0x80) return c1;
        
        if ((c1 & 0xE0) == 0xC0) {
            if (*text == 0) return c1;
            unsigned char c2 = *text++;
            return ((c1 & 0x1F) << 6) | (c2 & 0x3F);
        } else if ((c1 & 0xF0) == 0xE0) {
            if (*text == 0 || *(text+1) == 0) {
                if (*text != 0) text++;
                return c1;
            }
            unsigned char c2 = *text++;
            unsigned char c3 = *text++;
            return ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
        } else if ((c1 & 0xF8) == 0xF0) {
            if (*text == 0 || *(text+1) == 0 || *(text+2) == 0) {
                while (*text != 0) text++;
                return c1;
            }
            unsigned char c2 = *text++;
            unsigned char c3 = *text++;
            unsigned char c4 = *text++;
            return ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) | ((c3 & 0x3F) << 6) | (c4 & 0x3F);
        }
        return c1;
    }

    uint32_t decode_utf8(const char*& text, int& textlen) {
        if (textlen <= 0) return 0;
        unsigned char c1 = *text++;
        textlen--;
        if (c1 == 0) return 0;
        if (c1 < 0x80) return c1;
        
        if ((c1 & 0xE0) == 0xC0) {
            if (textlen <= 0) return c1;
            unsigned char c2 = *text++; textlen--;
            return ((c1 & 0x1F) << 6) | (c2 & 0x3F);
        } else if ((c1 & 0xF0) == 0xE0) {
            if (textlen <= 1) {
                if (textlen == 1) { text++; textlen--; }
                return c1;
            }
            unsigned char c2 = *text++; textlen--;
            unsigned char c3 = *text++; textlen--;
            return ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
        } else if ((c1 & 0xF8) == 0xF0) {
            if (textlen <= 2) {
                while (textlen > 0) { text++; textlen--; }
                return c1;
            }
            unsigned char c2 = *text++; textlen--;
            unsigned char c3 = *text++; textlen--;
            unsigned char c4 = *text++; textlen--;
            return ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) | ((c3 & 0x3F) << 6) | (c4 & 0x3F);
        }
        return c1;
    }

    int get_char_width(uint32_t wch, const Render_Style& style) {
        if (wch == 127) return 8 + style.letter_spacing; // Custom bullet width
        if (!face) return 16;
        if (FT_Load_Char(face, wch, FT_LOAD_RENDER | FT_LOAD_TARGET_MONO)) {
            return 16;
        }
        
        int advance;
        if (wch > 32 && wch < 128) {
            int true_left = face->glyph->bitmap.width;
            int true_right = 0;
            for (unsigned int row = 0; row < face->glyph->bitmap.rows; ++row) {
                for (unsigned int col = 0; col < face->glyph->bitmap.width; ++col) {
                    int byte_idx = row * face->glyph->bitmap.pitch + (col >> 3);
                    int bit_idx = 7 - (col & 7);
                    if (face->glyph->bitmap.buffer[byte_idx] & (1 << bit_idx)) {
                        if ((int)col < true_left) true_left = col;
                        if ((int)col + 1 > true_right) true_right = col + 1;
                    }
                }
            }
            if (true_right > 0) {
                advance = (true_right - true_left) + style.weight + 2; // 絕對 2px 間距
            } else {
                advance = (face->glyph->advance.x >> 6) + style.weight + 2;
            }
        } else {
            int extra_spacing = (wch >= 0x80) ? 2 : 1;
            advance = (face->glyph->advance.x >> 6) + extra_spacing + style.weight;
        }
        return advance + style.letter_spacing;
    }

    static unsigned char cached_fg = 254;
    static unsigned char cached_bg = 255;
    static Shape_frame* last_sample = nullptr;

    static void update_colors(Shape_frame* sample_shape, bool is_book) {
        if (!sample_shape) return;
        if (sample_shape == last_sample) return; // Note: if is_book changes, we might miss an update, but usually a font is either book or not
        
        last_sample = sample_shape;
        
        int w = sample_shape->get_width();
        int h = sample_shape->get_height();
        if (w <= 0 || h <= 0 || w > 100 || h > 100) {
            // Default colors if invalid
            if (!is_book) { cached_fg = 254; cached_bg = 255; }
            else { cached_fg = 255; cached_bg = 0; }
            return;
        }
        
        Image_buffer8 temp_buf(w, h);
        temp_buf.fill8(0);
        sample_shape->paint_rle(&temp_buf, sample_shape->get_xleft(), sample_shape->get_yabove());
        
        int color_counts[256] = {0};
        unsigned char* bits = temp_buf.get_bits();
        for (int i = 0; i < w * h; ++i) {
            color_counts[bits[i]]++;
        }
        
        int best_color = 254;
        int best_count = -1;
        
        for (int i = 1; i < 255; ++i) { // Skip 0 (transparent) and 255 (black outline)
            if (color_counts[i] > best_count) {
                best_count = color_counts[i];
                best_color = i;
            }
        }
        
        int core_color = -1;
        for (int r = h / 4; r < (h * 3) / 4; ++r) {
            for (int c = w / 4; c < (w * 3) / 4; ++c) {
                unsigned char p = bits[r * w + c];
                if (p != 0 && p != 255) {
                    core_color = p;
                    break;
                }
            }
            if (core_color != -1) break;
        }
        
        int final_color = (core_color != -1) ? core_color : ((best_count > 0) ? best_color : 254);
        
        // Always update colors!
        if (!is_book) {
            cached_fg = final_color;
            cached_bg = 255;
        } else {
            if (core_color != -1) {
                cached_fg = final_color; // Colored book text (e.g. spell names if they use a colored book font)
            } else {
                cached_fg = 255; // Pure black font, force black
            }
            cached_bg = 0; // Standard book fonts have no outline
        }
    }

    int paint_char(Image_buffer8* win, uint32_t wch, int x, int yoff_original, Shape_frame* sample_shape, unsigned char* trans, bool is_book, const Render_Style& style) {
        if (!win) return 16;
        if (wch == 127) {
            update_colors(sample_shape, is_book);
            unsigned char fg_color = (style.fg_color >= 0 && style.fg_color <= 255) ? style.fg_color : cached_fg;
            unsigned char bg_color = cached_bg;
            if (style.shadow_color >= 0 && style.shadow_color <= 255) {
                bg_color = style.shadow_color;
            }
            if (trans) {
                fg_color = trans[fg_color];
                bg_color = trans[bg_color];
            }
            // Check if deferred mode is active — if so, draw the bullet
            auto& deferred = Deferred_text_renderer::instance();
            if (deferred.is_active()) {
                Deferred_glyph_style dgs = {style.letter_spacing, style.weight,
                                            style.shadow_type, style.shadow_offset_x,
                                            style.shadow_offset_y, style.shadow_color,
                                            style.fg_color, style.brightness_boost};
                deferred.draw_glyph(wch, x, yoff_original, fg_color, bg_color, (bg_color != 0), dgs, loaded_path, loaded_size, is_book, win);
                return 8;
            }
            int ascender = face ? (face->size->metrics.ascender >> 6) : 10;
            int dot_x = x + 3;
            // Center the bullet vertically around 2/3 of ascender height
            int dot_y = yoff_original + ascender - 5;
            
            // Draw 2x2 dot
            win->put_pixel8(fg_color, dot_x, dot_y);
            win->put_pixel8(fg_color, dot_x + 1, dot_y);
            win->put_pixel8(fg_color, dot_x, dot_y + 1);
            win->put_pixel8(fg_color, dot_x + 1, dot_y + 1);
            
            // Draw bottom-right shadow (1px offset)
            if (bg_color != 0) {
                win->put_pixel8(bg_color, dot_x + 2, dot_y);
                win->put_pixel8(bg_color, dot_x + 2, dot_y + 1);
                win->put_pixel8(bg_color, dot_x + 2, dot_y + 2);
                win->put_pixel8(bg_color, dot_x, dot_y + 2);
                win->put_pixel8(bg_color, dot_x + 1, dot_y + 2);
            }
            return 8;
        }
        if (!face) return 16;
        
        if (FT_Load_Char(face, wch, FT_LOAD_RENDER | FT_LOAD_TARGET_MONO)) {
            return 16;
        }

        update_colors(sample_shape, is_book);

        FT_Bitmap& bitmap = face->glyph->bitmap;
        
        int advance;
        int true_left = bitmap.width;
        int true_right = 0;
        if (wch > 32 && wch < 128) {
            for (unsigned int row = 0; row < bitmap.rows; ++row) {
                for (unsigned int col = 0; col < bitmap.width; ++col) {
                    int byte_idx = row * bitmap.pitch + (col >> 3);
                    int bit_idx = 7 - (col & 7);
                    if (bitmap.buffer[byte_idx] & (1 << bit_idx)) {
                        if ((int)col < true_left) true_left = col;
                        if ((int)col + 1 > true_right) true_right = col + 1;
                    }
                }
            }
            if (true_right > 0) {
                advance = (true_right - true_left) + style.weight + 2; // 絕對 2px 間距
            } else {
                advance = (face->glyph->advance.x >> 6) + style.weight + 2;
            }
        } else {
            int extra_spacing = (wch >= 0x80) ? 2 : 1;
            advance = (face->glyph->advance.x >> 6) + extra_spacing + style.weight;
        }
        
        int ascender = face->size->metrics.ascender >> 6;
        int top_y = yoff_original + ascender - face->glyph->bitmap_top;
        int left_x = x + face->glyph->bitmap_left;
        if (wch > 32 && wch < 128 && true_right > 0) {
            left_x = x - true_left;
        }

        unsigned char fg_color = (style.fg_color >= 0 && style.fg_color <= 255) ? style.fg_color : cached_fg;
        unsigned char bg_color = cached_bg;
        
        // Shadow color override
        if (style.shadow_color >= 0 && style.shadow_color <= 255) {
            bg_color = style.shadow_color;
        }

        if (trans) {
            fg_color = trans[fg_color];
            bg_color = trans[bg_color];
        }

        // Check if deferred mode is active — if so, draw the glyph
        auto& deferred = Deferred_text_renderer::instance();
        if (deferred.is_active()) {
            bool should_draw_shadow = false;
            if (style.shadow_type != 0) {
                if (style.shadow_color >= 0 && style.shadow_color <= 255) {
                    should_draw_shadow = true;
                } else if (cached_bg != 0 && bg_color != 0) {
                    should_draw_shadow = true;
                }
            }
            Deferred_glyph_style dgs = {style.letter_spacing, style.weight,
                                         style.shadow_type, style.shadow_offset_x,
                                         style.shadow_offset_y, style.shadow_color,
                                         style.fg_color, style.brightness_boost};
            deferred.draw_glyph(wch, x, yoff_original, fg_color, bg_color, should_draw_shadow, dgs, loaded_path, loaded_size, is_book, win);
            return advance + style.letter_spacing;
        }

            bool should_draw_shadow = false;
            if (style.shadow_type != 0) {
                if (style.shadow_color >= 0 && style.shadow_color <= 255) {
                    should_draw_shadow = true; // Always draw if user explicitly requested a shadow color (even 0)
                } else if (cached_bg != 0 && bg_color != 0) {
                    should_draw_shadow = true; // Legacy behavior
                }
            }

            // Draw outline/shadow first
            if (should_draw_shadow) {
                for (unsigned int row = 0; row < bitmap.rows; ++row) {
                    for (unsigned int col = 0; col < bitmap.width; ++col) {
                        int byte_idx = row * bitmap.pitch + (col >> 3);
                        int bit_idx = 7 - (col & 7);
                        if (bitmap.buffer[byte_idx] & (1 << bit_idx)) {
                            int draw_x = left_x + col;
                            int draw_y = top_y + row;
                            
                            if (style.shadow_type == -1) {
                                // Default legacy behavior
                                if (wch >= 0x80) {
                                    win->put_pixel8(bg_color, draw_x - 1, draw_y);
                                    win->put_pixel8(bg_color, draw_x, draw_y - 1);
                                }
                                win->put_pixel8(bg_color, draw_x + 1, draw_y);
                                win->put_pixel8(bg_color, draw_x, draw_y + 1);
                                win->put_pixel8(bg_color, draw_x + 1, draw_y + 1);
                            } else if (style.shadow_type == 1) {
                                // Bottom-Right Drop Shadow (configurable offset)
                                win->put_pixel8(bg_color, draw_x + style.shadow_offset_x, draw_y + style.shadow_offset_y);
                            } else if (style.shadow_type == 2) {
                                // Full Outline (configurable offset)
                                int ox = style.shadow_offset_x;
                                int oy = style.shadow_offset_y;
                                for (int dx = -ox; dx <= ox; dx++) {
                                    for (int dy = -oy; dy <= oy; dy++) {
                                        if (dx != 0 || dy != 0) {
                                            win->put_pixel8(bg_color, draw_x + dx, draw_y + dy);
                                        }
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
                int byte_idx = row * bitmap.pitch + (col >> 3);
                int bit_idx = 7 - (col & 7);
                if (bitmap.buffer[byte_idx] & (1 << bit_idx)) {
                    int draw_x = left_x + col;
                    int draw_y = top_y + row;
                    win->put_pixel8(fg_color, draw_x, draw_y);
                    // Boldness
                    for (int w = 1; w <= style.weight; ++w) {
                        win->put_pixel8(fg_color, draw_x + w, draw_y);
                    }
                }
            }
        }
        
        return advance + style.letter_spacing;
    }
}
