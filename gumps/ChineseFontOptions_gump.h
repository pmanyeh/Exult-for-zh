/*
Copyright (C) 2025 The Exult Team (Exult-zh Chinese localization)

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

#ifndef CHINESEFONTOPTIONS_GUMP_H
#define CHINESEFONTOPTIONS_GUMP_H

#include "Modal_gump.h"
#include "Slider_widget.h"

#include <vector>
#include <memory>
#include <string>

class Gump_button;
class Image_window8;

class ChineseFontOptions_gump : public Modal_gump, public Slider_widget::ICallback {
public:
	enum Page {
		PAGE_MAIN,
		PAGE_DIALOG,
		PAGE_SMALL,
		PAGE_SIGN
	};

private:
	Page current_page;

	// Scanned TTF files
	std::vector<std::string> ttf_names;
	std::vector<std::string> ttf_paths;

	// ---- Current values of settings ----
	int font_path_idx;          // main font selection index in ttf_paths
	int small_font_path_idx;    // small font selection index (0 = default, index+1 in ttf_paths)
	int sign_font_path_idx;     // sign font selection index (0 = default, index+1 in ttf_paths)

	int dialog_font_size;       // config/video/chinese/font_size_dialog (9..72)
	int bark_font_size;         // config/video/chinese/font_size_bark (9..72)
	int book_font_size;         // config/video/chinese/font_size_book (9..72)
	int sign_font_size;         // config/video/chinese/font_size_sign (9..72)

	int shadow_type;            // config/video/chinese/shadow_type (0=none,1=offset,2=outline)
	int letter_spacing;         // config/video/chinese/letter_spacing (-5..+5)
	int letter_spacing_book;    // config/video/chinese/letter_spacing_book (-5..+5)
	int letter_spacing_sign;    // config/video/chinese/letter_spacing_sign (-5..+5)
	int baseline_adjust;        // config/video/chinese/baseline_adjust (-10..+15)
	int line_spacing;           // config/video/chinese/line_spacing (-10..+15)

	int post_scale_rendering;   // config/video/chinese/post_scale_rendering (0=no,1=yes)
	int force_ttf_for_english;  // config/video/chinese/force_ttf_for_english (0=no,1=yes)
	int scale_ui_val;           // config/video/scale_ui (0=no,1=yes)

	struct SettingsSnapshot {
		int font_path_idx;
		int small_font_path_idx;
		int sign_font_path_idx;
		int dialog_font_size;
		int bark_font_size;
		int book_font_size;
		int sign_font_size;
		int shadow_type;
		int letter_spacing;
		int letter_spacing_book;
		int letter_spacing_sign;
		int baseline_adjust;
		int line_spacing;
		int post_scale_rendering;
		int force_ttf_for_english;
		int scale_ui_val;
	} snapshot, initial_main_snapshot;

	void take_snapshot();
	void restore_snapshot();

	// ---- Widgets ----
	std::vector<std::unique_ptr<Gump_button>> buttons;

	// Sliders
	std::shared_ptr<Slider_widget> dialog_size_slider;
	std::shared_ptr<Slider_widget> bark_size_slider;
	std::shared_ptr<Slider_widget> dialog_spacing_slider;
	std::shared_ptr<Slider_widget> book_size_slider;
	std::shared_ptr<Slider_widget> book_spacing_slider;
	std::shared_ptr<Slider_widget> sign_size_slider;
	std::shared_ptr<Slider_widget> sign_spacing_slider;
	std::shared_ptr<Slider_widget> baseline_adjust_slider;
	std::shared_ptr<Slider_widget> line_spacing_slider;

	std::shared_ptr<Slider_widget> inputslider; // active dragging slider

	std::shared_ptr<Slider_widget> GetSlider(int sx, int sy);
	void PaintSlider(Image_window8* iwin, Slider_widget* slider, const char* label, int slider_width = 100);

	uint8 slider_track_color;
	int slider_height;

public:
	ChineseFontOptions_gump();

	void paint() override;
	void close() override;

	void build_buttons();
	void load_settings();
	void save_settings();
	void cancel();

	// Navigation & toggle callbacks
	void open_dialog_setup();
	void open_small_setup();
	void open_sign_setup();
	void go_back();

	void toggle_font_path(int state)          { font_path_idx = state; }
	void toggle_small_font_path(int state)    { small_font_path_idx = state; }
	void toggle_sign_font_path(int state)     { sign_font_path_idx = state; }
	void toggle_shadow_type(int state)        { shadow_type = state; }
	void toggle_post_scale_rendering(int state) { post_scale_rendering = state; }
	void toggle_force_ttf_for_english(int state) { force_ttf_for_english = state; }
	void toggle_scale_ui(int state)           { scale_ui_val = state; }

	// Slider_widget::ICallback
	void OnSliderValueChanged(Slider_widget* sender, int newvalue) override;

	Gump_button* on_button(int mx, int my) override;

	bool mouse_down(int mx, int my, MouseButton button) override;
	bool mouse_up(int mx, int my, MouseButton button) override;
	bool mouse_drag(int mx, int my) override;
	bool mousewheel_up(int mx, int my) override;
	bool mousewheel_down(int mx, int my) override;
	bool key_down(SDL_Keycode chr, SDL_Keycode unicode) override;
	bool run() override;
};

#endif
