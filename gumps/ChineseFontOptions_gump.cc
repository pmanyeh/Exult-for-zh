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

#ifdef HAVE_CONFIG_H
#	include <config.h>
#endif

#ifdef __GNUC__
#	pragma GCC diagnostic push
#	pragma GCC diagnostic ignored "-Wold-style-cast"
#	pragma GCC diagnostic ignored "-Wzero-as-null-pointer-constant"
#	if !defined(__llvm__) && !defined(__clang__)
#		pragma GCC diagnostic ignored "-Wuseless-cast"
#	endif
#endif    // __GNUC__
#include <SDL3/SDL.h>
#ifdef __GNUC__
#	pragma GCC diagnostic pop
#endif    // __GNUC__

#include "ChineseFontOptions_gump.h"
#include "exult_flx.h"

#include "Configuration.h"
#include "Gump_ToggleButton.h"
#include "Gump_button.h"
#include "Gump_manager.h"
#include "Text_button.h"
#include "gamewin.h"
#include "imagewin.h"
#include "gameclk.h"
#include "items.h"
#include "listfiles.h"
#include "utils.h"

#include <algorithm>
#include <string>
#include <vector>

using std::string;
using std::vector;

namespace {
	class Strings : public GumpStrings {};
}    // namespace

using ChineseFontOptions_button = CallbackTextButton<ChineseFontOptions_gump>;
using ChineseFontTextToggle     = CallbackToggleTextButton<ChineseFontOptions_gump>;

template <typename T>
class RAIIPointerClearer {
	T* pointer = nullptr;

public:
	~RAIIPointerClearer() {
		if (pointer) {
			*pointer = nullptr;
		}
	}

	RAIIPointerClearer<T>& operator=(T& ref) {
		pointer = &ref;
		return *this;
	}
};

std::shared_ptr<Slider_widget> ChineseFontOptions_gump::GetSlider(int sx, int sy) {
	if (dialog_size_slider && dialog_size_slider->get_rect().has_point(sx, sy)) return dialog_size_slider;
	if (bark_size_slider && bark_size_slider->get_rect().has_point(sx, sy)) return bark_size_slider;
	if (dialog_spacing_slider && dialog_spacing_slider->get_rect().has_point(sx, sy)) return dialog_spacing_slider;
	if (book_size_slider && book_size_slider->get_rect().has_point(sx, sy)) return book_size_slider;
	if (book_spacing_slider && book_spacing_slider->get_rect().has_point(sx, sy)) return book_spacing_slider;
	if (sign_size_slider && sign_size_slider->get_rect().has_point(sx, sy)) return sign_size_slider;
	if (sign_spacing_slider && sign_spacing_slider->get_rect().has_point(sx, sy)) return sign_spacing_slider;
	if (baseline_adjust_slider && baseline_adjust_slider->get_rect().has_point(sx, sy)) return baseline_adjust_slider;
	if (line_spacing_slider && line_spacing_slider->get_rect().has_point(sx, sy)) return line_spacing_slider;
	return nullptr;
}

void ChineseFontOptions_gump::PaintSlider(Image_window8* iwin, Slider_widget* slider, const char* label, int slider_width) {
	auto rect = slider->get_rect();
	font->paint_text(iwin->get_ib8(), label, x + label_margin, rect.y + 2);

	iwin->get_ib8()->draw_beveled_box(
			rect.x + 12, rect.y + 2, slider_width, slider_height, 1, slider_track_color, slider_track_color + 2,
			slider_track_color + 4, slider_track_color - 2, slider_track_color - 4);

	slider->paint();

	gumpman->paint_num(slider->getselection(), rect.x + rect.w + 24, rect.y + 2, font);
}

ChineseFontOptions_gump::ChineseFontOptions_gump() : Modal_gump(nullptr, -1), current_page(PAGE_MAIN) {
	SetProceduralBackground(TileRect(0, 0, 100, yForRow(14)), -1);

	slider_track_color = procedural_colours.Background + 1;
	auto shiddiamond = ShapeID(EXULT_FLX_SAV_SLIDER_SHP, 0, SF_EXULT_FLX);
	auto Shapediamond = shiddiamond.get_shape();
	if (Shapediamond) {
		slider_height = Shapediamond->get_height();
	} else {
		slider_height = 7;
	}

	load_settings();
	
	initial_main_snapshot.shadow_type = shadow_type;
	initial_main_snapshot.baseline_adjust = baseline_adjust;
	initial_main_snapshot.line_spacing = line_spacing;
	initial_main_snapshot.post_scale_rendering = post_scale_rendering;
	initial_main_snapshot.force_ttf_for_english = force_ttf_for_english;
	initial_main_snapshot.scale_ui_val = scale_ui_val;

	build_buttons();
}

void ChineseFontOptions_gump::load_settings() {
	// Dynamically scan for fonts
	ttf_names.clear();
	ttf_paths.clear();
	FileList files;
	U7ListFiles("<PATCH>/*.ttf", files, true);
	U7ListFiles("<DATA>/*.ttf", files, true);

	for (const auto& file : files) {
		string filename(get_filename_from_path(file));
		if (std::find(ttf_names.begin(), ttf_names.end(), filename) == ttf_names.end()) {
			ttf_names.push_back(filename);
			ttf_paths.push_back(file);
		}
	}

	if (!config) {
		return;
	}

	// 1. Load main font path index
	string main_font_path;
	config->value("config/video/chinese/font_path", main_font_path, "<PATCH>/chinese.ttf");
	font_path_idx = 0;
	for (size_t i = 0; i < ttf_paths.size(); i++) {
		if (ttf_paths[i] == main_font_path) {
			font_path_idx = i;
			break;
		}
	}

	// 2. Load small font path index
	string small_font_path;
	config->value("config/video/chinese/small_font_path", small_font_path, "");
	small_font_path_idx = 0; // Default
	if (!small_font_path.empty()) {
		for (size_t i = 0; i < ttf_paths.size(); i++) {
			if (ttf_paths[i] == small_font_path) {
				small_font_path_idx = i + 1;
				break;
			}
		}
	}

	// 3. Load sign font path index
	string sign_font_path;
	config->value("config/video/chinese/sign_font_path", sign_font_path, "");
	sign_font_path_idx = 0; // Default
	if (!sign_font_path.empty()) {
		for (size_t i = 0; i < ttf_paths.size(); i++) {
			if (ttf_paths[i] == sign_font_path) {
				sign_font_path_idx = i + 1;
				break;
			}
		}
	}

	// 4. Other numeric and toggle settings
	config->value("config/video/chinese/font_size_dialog", dialog_font_size, 15);
	dialog_font_size = std::clamp(dialog_font_size, 9, 72);

	config->value("config/video/chinese/font_size_bark", bark_font_size, 12);
	bark_font_size = std::clamp(bark_font_size, 9, 72);

	config->value("config/video/chinese/font_size_book", book_font_size, 11);
	book_font_size = std::clamp(book_font_size, 9, 72);

	int sign_sz = 0;
	config->value("config/video/chinese/font_size_sign", sign_sz, 0);
	if (sign_sz <= 0) {
		config->value("config/video/chinese/font_size_woodsign", sign_sz, 0);
	}
	if (sign_sz <= 0) {
		sign_sz = 14;
	}
	sign_font_size = std::clamp(sign_sz, 9, 72);

	config->value("config/video/chinese/shadow_type", shadow_type, -1);
	if (shadow_type < 0) {
		shadow_type = 1; // default to offset
	}
	shadow_type = std::clamp(shadow_type, 0, 2);

	config->value("config/video/chinese/letter_spacing", letter_spacing, 0);
	letter_spacing = std::clamp(letter_spacing, -5, 5);

	config->value("config/video/chinese/letter_spacing_book", letter_spacing_book, 0);
	letter_spacing_book = std::clamp(letter_spacing_book, -5, 5);

	int sign_ls = 0;
	config->value("config/video/chinese/letter_spacing_sign", sign_ls, 0);
	if (sign_ls == 0) {
		config->value("config/video/chinese/letter_spacing_woodsign", sign_ls, 0);
	}
	letter_spacing_sign = std::clamp(sign_ls, -5, 5);

	config->value("config/video/chinese/baseline_adjust", baseline_adjust, 0);
	baseline_adjust = std::clamp(baseline_adjust, -10, 15);

	config->value("config/video/chinese/line_spacing", line_spacing, 4);
	line_spacing = std::clamp(line_spacing, -10, 15);

	string val;
	config->value("config/video/chinese/post_scale_rendering", val, "yes");
	post_scale_rendering = (val != "no") ? 1 : 0;

	config->value("config/video/chinese/force_ttf_for_english", val, "no");
	force_ttf_for_english = (val == "yes") ? 1 : 0;

	bool scale_ui = true;
	config->value("config/video/scale_ui", scale_ui, true);
	scale_ui_val = scale_ui ? 1 : 0;
}

void ChineseFontOptions_gump::save_settings() {
	if (!config) {
		return;
	}

	// 1. Write Font paths
	if (font_path_idx >= 0 && font_path_idx < static_cast<int>(ttf_paths.size())) {
		config->set("config/video/chinese/font_path", ttf_paths[font_path_idx], false);
	}

	if (small_font_path_idx == 0) {
		config->set("config/video/chinese/small_font_path", "", false);
	} else {
		int idx = small_font_path_idx - 1;
		if (idx >= 0 && idx < static_cast<int>(ttf_paths.size())) {
			config->set("config/video/chinese/small_font_path", ttf_paths[idx], false);
		}
	}

	if (sign_font_path_idx == 0) {
		config->set("config/video/chinese/sign_font_path", "", false);
	} else {
		int idx = sign_font_path_idx - 1;
		if (idx >= 0 && idx < static_cast<int>(ttf_paths.size())) {
			config->set("config/video/chinese/sign_font_path", ttf_paths[idx], false);
		}
	}

	// 2. Write numeric/toggle settings
	config->set("config/video/chinese/font_size_dialog", dialog_font_size, false);
	config->set("config/video/chinese/font_size_bark", bark_font_size, false);
	config->set("config/video/chinese/font_size_book", book_font_size, false);

	// Synchronize all sign font sizes
	config->set("config/video/chinese/font_size_sign", sign_font_size, false);
	config->set("config/video/chinese/font_size_woodsign", sign_font_size, false);
	config->set("config/video/chinese/font_size_tombstone", sign_font_size, false);
	config->set("config/video/chinese/font_size_goldsign", sign_font_size, false);

	config->set("config/video/chinese/shadow_type", shadow_type, false);
	config->set("config/video/chinese/letter_spacing", letter_spacing, false);
	config->set("config/video/chinese/letter_spacing_book", letter_spacing_book, false);

	// Synchronize all sign spacings
	config->set("config/video/chinese/letter_spacing_sign", letter_spacing_sign, false);
	config->set("config/video/chinese/letter_spacing_woodsign", letter_spacing_sign, false);
	config->set("config/video/chinese/letter_spacing_tombstone", letter_spacing_sign, false);
	config->set("config/video/chinese/letter_spacing_goldsign", letter_spacing_sign, false);

	config->set("config/video/chinese/baseline_adjust", baseline_adjust, false);
	config->set("config/video/chinese/line_spacing", line_spacing, false);

	config->set("config/video/chinese/post_scale_rendering", post_scale_rendering ? "yes" : "no", false);
	config->set("config/video/chinese/force_ttf_for_english", force_ttf_for_english ? "yes" : "no", false);
	config->set("config/video/scale_ui", scale_ui_val ? "yes" : "no", false);

	config->write_back();

	// Settings take effect automatically on the next frame because
	// get_chinese_ttf_style() reads config directly on every draw call.
	// However, post_scale_rendering requires the scaler surfaces to be re-evaluated.
	Image_window8* iwin = gwin->get_win();
	gwin->resized(
			iwin->get_display_width(), iwin->get_display_height(), iwin->is_fullscreen(),
			iwin->get_game_width(), iwin->get_game_height(), iwin->get_scale_factor(),
			iwin->get_scaler(), iwin->get_fill_mode(), iwin->get_fill_scaler()
	);
	gclock->reset_palette();
	gwin->set_all_dirty();
}

void ChineseFontOptions_gump::take_snapshot() {
	snapshot.font_path_idx = font_path_idx;
	snapshot.small_font_path_idx = small_font_path_idx;
	snapshot.sign_font_path_idx = sign_font_path_idx;
	snapshot.dialog_font_size = dialog_font_size;
	snapshot.bark_font_size = bark_font_size;
	snapshot.book_font_size = book_font_size;
	snapshot.sign_font_size = sign_font_size;
	snapshot.shadow_type = shadow_type;
	snapshot.letter_spacing = letter_spacing;
	snapshot.letter_spacing_book = letter_spacing_book;
	snapshot.letter_spacing_sign = letter_spacing_sign;
	snapshot.baseline_adjust = baseline_adjust;
	snapshot.line_spacing = line_spacing;
	snapshot.post_scale_rendering = post_scale_rendering;
	snapshot.force_ttf_for_english = force_ttf_for_english;
	snapshot.scale_ui_val = scale_ui_val;
}

void ChineseFontOptions_gump::restore_snapshot() {
	font_path_idx = snapshot.font_path_idx;
	small_font_path_idx = snapshot.small_font_path_idx;
	sign_font_path_idx = snapshot.sign_font_path_idx;
	dialog_font_size = snapshot.dialog_font_size;
	bark_font_size = snapshot.bark_font_size;
	book_font_size = snapshot.book_font_size;
	sign_font_size = snapshot.sign_font_size;
	shadow_type = snapshot.shadow_type;
	letter_spacing = snapshot.letter_spacing;
	letter_spacing_book = snapshot.letter_spacing_book;
	letter_spacing_sign = snapshot.letter_spacing_sign;
	baseline_adjust = snapshot.baseline_adjust;
	line_spacing = snapshot.line_spacing;
	post_scale_rendering = snapshot.post_scale_rendering;
	force_ttf_for_english = snapshot.force_ttf_for_english;
	scale_ui_val = snapshot.scale_ui_val;
	gwin->set_all_dirty();
}

void ChineseFontOptions_gump::cancel() {
	if (current_page == PAGE_MAIN) {
		// Revert only main page settings, keep confirmed subpage settings
		shadow_type = initial_main_snapshot.shadow_type;
		baseline_adjust = initial_main_snapshot.baseline_adjust;
		line_spacing = initial_main_snapshot.line_spacing;
		post_scale_rendering = initial_main_snapshot.post_scale_rendering;
		force_ttf_for_english = initial_main_snapshot.force_ttf_for_english;
		scale_ui_val = initial_main_snapshot.scale_ui_val;
		
		save_settings();
		done = true;
	} else {
		restore_snapshot();
		go_back();
	}
}

void ChineseFontOptions_gump::close() {
	save_settings();
	if (current_page == PAGE_MAIN) {
		done = true;
	} else {
		go_back();
	}
}

void ChineseFontOptions_gump::open_dialog_setup() {
	take_snapshot();
	current_page = PAGE_DIALOG;
	build_buttons();
	gwin->set_all_dirty();
}

void ChineseFontOptions_gump::open_small_setup() {
	take_snapshot();
	current_page = PAGE_SMALL;
	build_buttons();
	gwin->set_all_dirty();
}

void ChineseFontOptions_gump::open_sign_setup() {
	take_snapshot();
	current_page = PAGE_SIGN;
	build_buttons();
	gwin->set_all_dirty();
}

void ChineseFontOptions_gump::go_back() {
	current_page = PAGE_MAIN;
	build_buttons();
	gwin->set_all_dirty();
}

std::vector<std::string> get_choices_helper(const std::vector<std::string>& ttf_names, bool allow_default) {
	if (allow_default) {
		std::vector<std::string> choices = {"Default"};
		choices.insert(choices.end(), ttf_names.begin(), ttf_names.end());
		return choices;
	}
	return ttf_names;
}

void ChineseFontOptions_gump::build_buttons() {
	buttons.clear();
	dialog_size_slider.reset();
	bark_size_slider.reset();
	dialog_spacing_slider.reset();
	book_size_slider.reset();
	sign_size_slider.reset();
	sign_spacing_slider.reset();
	baseline_adjust_slider.reset();
	line_spacing_slider.reset();
	inputslider.reset();

	auto shiddiamond = ShapeID(EXULT_FLX_SAV_SLIDER_SHP, 0, SF_EXULT_FLX);
	auto shidleft    = ShapeID(EXULT_FLX_SCROLL_LEFT_SHP, 0, SF_EXULT_FLX);
	auto shidright   = ShapeID(EXULT_FLX_SCROLL_RIGHT_SHP, 0, SF_EXULT_FLX);

	int small_size = 50;
	int large_size = 85;

	static const vector<string> kYesNo = {"No", "Yes"};
	static const vector<string> kShadowTypes = {"None", "Offset", "Outline"};

	std::vector<Gump_widget*> setting_widgets;

	if (current_page == PAGE_MAIN) {
		// Row 0: Dialog Text Setup
		buttons.push_back(std::make_unique<ChineseFontOptions_button>(
				this, &ChineseFontOptions_gump::open_dialog_setup, "Dialog Text Setup", 0, yForRow(0), 120));
		// Row 1: Small Text Setup
		buttons.push_back(std::make_unique<ChineseFontOptions_button>(
				this, &ChineseFontOptions_gump::open_small_setup, "Small Text Setup", 0, yForRow(1), 120));
		// Row 2: Sign Text Setup
		buttons.push_back(std::make_unique<ChineseFontOptions_button>(
				this, &ChineseFontOptions_gump::open_sign_setup, "Sign Text Setup", 0, yForRow(2), 120));

		// Row 4: Shadow Type
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_shadow_type, kShadowTypes, shadow_type, get_button_pos_for_label("Shadow Type:"), yForRow(4), large_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 5: Baseline Adjust
		baseline_adjust_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Baseline Adjust:"), yForRow(5) - 13, shidleft, shidright, shiddiamond, -10, 15, 1, baseline_adjust, 60);
		setting_widgets.push_back(baseline_adjust_slider.get());

		// Row 6: Line Spacing
		line_spacing_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Line Spacing:"), yForRow(6) - 13, shidleft, shidright, shiddiamond, -10, 15, 1, line_spacing, 60);
		setting_widgets.push_back(line_spacing_slider.get());

		// Row 8: HiRes Text Draw
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_post_scale_rendering, kYesNo, post_scale_rendering, get_button_pos_for_label("HiRes Text Draw:"), yForRow(8), small_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 9: Force TTF English
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_force_ttf_for_english, kYesNo, force_ttf_for_english, get_button_pos_for_label("Force TTF English:"), yForRow(9), small_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 10: Scale UI
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_scale_ui, kYesNo, scale_ui_val, get_button_pos_for_label("Scale UI:"), yForRow(10), small_size));
		setting_widgets.push_back(buttons.back().get());

	} else if (current_page == PAGE_DIALOG) {
		// Row 0: Font Type
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_font_path, ttf_names, font_path_idx, get_button_pos_for_label("Font Type:"), yForRow(0), large_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 2: Dialog Font Size
		dialog_size_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Dialog Font Size:"), yForRow(2) - 13, shidleft, shidright, shiddiamond, 9, 72, 1, dialog_font_size, 60);
		setting_widgets.push_back(dialog_size_slider.get());

		// Row 4: Overhead Font Size
		bark_size_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Overhead Font Size:"), yForRow(4) - 13, shidleft, shidright, shiddiamond, 9, 72, 1, bark_font_size, 60);
		setting_widgets.push_back(bark_size_slider.get());

		// Row 6: Letter Spacing
		dialog_spacing_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Letter Spacing:"), yForRow(6) - 13, shidleft, shidright, shiddiamond, -5, 5, 1, letter_spacing, 60);
		setting_widgets.push_back(dialog_spacing_slider.get());

	} else if (current_page == PAGE_SMALL) {
		// Row 0: Font Type
		auto choices = get_choices_helper(ttf_names, true);
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_small_font_path, choices, small_font_path_idx, get_button_pos_for_label("Font Type:"), yForRow(0), large_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 2: Book/Scroll Font Size
		book_size_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Book/Scroll Font Size:"), yForRow(2) - 13, shidleft, shidright, shiddiamond, 9, 72, 1, book_font_size, 60);
		setting_widgets.push_back(book_size_slider.get());

		// Row 4: Letter Spacing
		book_spacing_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Letter Spacing:"), yForRow(4) - 13, shidleft, shidright, shiddiamond, -5, 5, 1, letter_spacing_book, 60);
		setting_widgets.push_back(book_spacing_slider.get());

	} else if (current_page == PAGE_SIGN) {
		// Row 0: Font Type
		auto choices = get_choices_helper(ttf_names, true);
		buttons.push_back(std::make_unique<ChineseFontTextToggle>(
				this, &ChineseFontOptions_gump::toggle_sign_font_path, choices, sign_font_path_idx, get_button_pos_for_label("Font Type:"), yForRow(0), large_size));
		setting_widgets.push_back(buttons.back().get());

		// Row 2: Sign Font Size
		sign_size_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Sign Font Size:"), yForRow(2) - 13, shidleft, shidright, shiddiamond, 9, 72, 1, sign_font_size, 60);
		setting_widgets.push_back(sign_size_slider.get());

		// Row 4: Letter Spacing
		sign_spacing_slider = std::make_shared<Slider_widget>(
				this, get_button_pos_for_label("Letter Spacing:"), yForRow(4) - 13, shidleft, shidright, shiddiamond, -5, 5, 1, letter_spacing_sign, 60);
		setting_widgets.push_back(sign_spacing_slider.get());

		// Row 11: Removed Back button, we only use OK/Cancel now.
	}

	// OK, Cancel buttons for all pages
	buttons.push_back(std::make_unique<ChineseFontOptions_button>(
			this, &ChineseFontOptions_gump::close, Strings::OK(), 25, yForRow(12), 50));
	buttons.push_back(std::make_unique<ChineseFontOptions_button>(
			this, &ChineseFontOptions_gump::cancel, Strings::CANCEL(), 75, yForRow(12), 50));

	// Layout alignment
	std::vector<Gump_widget*> all_widgets;
	for (auto& btn : buttons) {
		all_widgets.push_back(btn.get());
	}
	if (dialog_size_slider) all_widgets.push_back(dialog_size_slider.get());
	if (bark_size_slider) all_widgets.push_back(bark_size_slider.get());
	if (dialog_spacing_slider) all_widgets.push_back(dialog_spacing_slider.get());
	if (book_size_slider) all_widgets.push_back(book_size_slider.get());
	if (book_spacing_slider) all_widgets.push_back(book_spacing_slider.get());
	if (sign_size_slider) all_widgets.push_back(sign_size_slider.get());
	if (sign_spacing_slider) all_widgets.push_back(sign_spacing_slider.get());
	if (baseline_adjust_slider) all_widgets.push_back(baseline_adjust_slider.get());
	if (line_spacing_slider) all_widgets.push_back(line_spacing_slider.get());

	ResizeWidthToFitWidgets(tcb::span(all_widgets.data(), all_widgets.size()), 28);

	size_t num_btns = buttons.size();
	if (num_btns >= 2) {
		Gump_button* ok_cancel_btns[] = { buttons[num_btns - 2].get(), buttons[num_btns - 1].get() };
		HorizontalArrangeWidgets(tcb::span(ok_cancel_btns, 2));
	}

	if (current_page == PAGE_MAIN && num_btns >= 5) {
		for (int i = 0; i < 3; i++) {
			Gump_button* sub_btn[] = { buttons[i].get() };
			HorizontalArrangeWidgets(tcb::span(sub_btn, 1));
		}
	}

	if (!setting_widgets.empty()) {
		RightAlignWidgets(tcb::span(setting_widgets.data(), setting_widgets.size()), 28);
	}

	set_pos();
}

void ChineseFontOptions_gump::paint() {
	Modal_gump::paint();
	for (auto& btn : buttons) {
		if (btn) {
			btn->paint();
		}
	}

	Image_window8* iwin = gwin->get_win();

	if (current_page == PAGE_MAIN) {
		font->paint_text(iwin->get_ib8(), "Shadow Type:", x + label_margin, y + yForRow(4) + 1);
		if (baseline_adjust_slider) {
			PaintSlider(iwin, baseline_adjust_slider.get(), "Baseline Adjust:");
		}
		if (line_spacing_slider) {
			PaintSlider(iwin, line_spacing_slider.get(), "Line Spacing:");
		}
		font->paint_text(iwin->get_ib8(), "HiRes Text Draw:", x + label_margin, y + yForRow(8) + 1);
		font->paint_text(iwin->get_ib8(), "Force TTF English:", x + label_margin, y + yForRow(9) + 1);
		font->paint_text(iwin->get_ib8(), "Scale UI:", x + label_margin, y + yForRow(10) + 1);

	} else if (current_page == PAGE_DIALOG) {
		font->paint_text(iwin->get_ib8(), "Font Type:", x + label_margin, y + yForRow(0) + 1);
		if (dialog_size_slider) {
			PaintSlider(iwin, dialog_size_slider.get(), "Dialog Font Size:");
		}
		if (bark_size_slider) {
			PaintSlider(iwin, bark_size_slider.get(), "Overhead Font Size:");
		}
		if (dialog_spacing_slider) {
			PaintSlider(iwin, dialog_spacing_slider.get(), "Letter Spacing:");
		}

	} else if (current_page == PAGE_SMALL) {
		font->paint_text(iwin->get_ib8(), "Font Type:", x + label_margin, y + yForRow(0) + 1);
		if (book_size_slider) {
			PaintSlider(iwin, book_size_slider.get(), "Book/Scroll Font Size:");
		}
		if (book_spacing_slider) {
			PaintSlider(iwin, book_spacing_slider.get(), "Letter Spacing:");
		}

	} else if (current_page == PAGE_SIGN) {
		font->paint_text(iwin->get_ib8(), "Font Type:", x + label_margin, y + yForRow(0) + 1);
		if (sign_size_slider) {
			PaintSlider(iwin, sign_size_slider.get(), "Sign Font Size:");
		}
		if (sign_spacing_slider) {
			PaintSlider(iwin, sign_spacing_slider.get(), "Letter Spacing:");
		}
	}

	gwin->set_painted();
}

void ChineseFontOptions_gump::OnSliderValueChanged(Slider_widget* sender, int newvalue) {
	gwin->add_dirty(get_rect());

	if (sender == dialog_size_slider.get()) {
		dialog_font_size = newvalue;
	} else if (sender == bark_size_slider.get()) {
		bark_font_size = newvalue;
	} else if (sender == dialog_spacing_slider.get()) {
		letter_spacing = newvalue;
	} else if (sender == book_size_slider.get()) {
		book_font_size = newvalue;
	} else if (sender == book_spacing_slider.get()) {
		letter_spacing_book = newvalue;
	} else if (sender == sign_size_slider.get()) {
		sign_font_size = newvalue;
	} else if (sender == sign_spacing_slider.get()) {
		letter_spacing_sign = newvalue;
	} else if (sender == baseline_adjust_slider.get()) {
		baseline_adjust = newvalue;
	} else if (sender == line_spacing_slider.get()) {
		line_spacing = newvalue;
	}
}

Gump_button* ChineseFontOptions_gump::on_button(int mx, int my) {
	for (auto& btn : buttons) {
		auto found = btn ? btn->on_button(mx, my) : nullptr;
		if (found) {
			return found;
		}
	}
	return Modal_gump::on_button(mx, my);
}

bool ChineseFontOptions_gump::mouse_down(int mx, int my, MouseButton button) {
	if (button != MouseButton::Left && button != MouseButton::Right) {
		return false;
	}

	if (inputslider == nullptr) {
		inputslider = GetSlider(mx, my);
	}

	if (inputslider && inputslider->mouse_down(mx, my, button)) {
		return true;
	}

	return Modal_gump::mouse_down(mx, my, button);
}

bool ChineseFontOptions_gump::mouse_up(int mx, int my, MouseButton button) {
	if (inputslider && inputslider->mouse_up(mx, my, button)) {
		inputslider = nullptr;
		return true;
	}

	return Modal_gump::mouse_up(mx, my, button);
}

bool ChineseFontOptions_gump::mouse_drag(int mx, int my) {
	if (inputslider && inputslider->mouse_drag(mx, my)) {
		return true;
	}

	return Modal_gump::mouse_drag(mx, my);
}

bool ChineseFontOptions_gump::mousewheel_up(int mx, int my) {
	RAIIPointerClearer<decltype(inputslider)> clearer;
	if (inputslider == nullptr) {
		inputslider = GetSlider(mx, my);
		clearer     = inputslider;
	}
	if (inputslider && inputslider->mousewheel_up(mx, my)) {
		return true;
	}

	return Modal_gump::mousewheel_up(mx, my);
}

bool ChineseFontOptions_gump::mousewheel_down(int mx, int my) {
	RAIIPointerClearer<decltype(inputslider)> clearer;
	if (inputslider == nullptr) {
		inputslider = GetSlider(mx, my);
		clearer     = inputslider;
	}
	if (inputslider && inputslider->mousewheel_down(mx, my)) {
		return true;
	}

	return Modal_gump::mousewheel_down(mx, my);
}

bool ChineseFontOptions_gump::key_down(SDL_Keycode chr, SDL_Keycode unicode) {
	switch (chr) {
	case SDLK_RETURN:
		close();
		return true;
	default:
		RAIIPointerClearer<decltype(inputslider)> clearer;

		if (!inputslider) {
			inputslider = GetSlider(Mouse::mouse()->get_mousex(), Mouse::mouse()->get_mousey());
			clearer     = inputslider;
		}
		if (inputslider && inputslider->key_down(chr, unicode)) {
			return true;
		}

		break;
	}
	return Modal_gump::key_down(chr, unicode);
}

bool ChineseFontOptions_gump::run() {
	bool res = Modal_gump::run();

	if (dialog_size_slider) {
		res |= dialog_size_slider->run();
	}
	if (bark_size_slider) {
		res |= bark_size_slider->run();
	}
	if (dialog_spacing_slider) {
		res |= dialog_spacing_slider->run();
	}
	if (book_size_slider) {
		res |= book_size_slider->run();
	}
	if (sign_size_slider) {
		res |= sign_size_slider->run();
	}
	if (sign_spacing_slider) {
		res |= sign_spacing_slider->run();
	}
	if (baseline_adjust_slider) {
		res |= baseline_adjust_slider->run();
	}
	if (line_spacing_slider) {
		res |= line_spacing_slider->run();
	}

	return res;
}
