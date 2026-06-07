# 統一「書本」與「卷軸」中英混合文字的渲染方式

本計畫將說明如何修改程式碼，讓「書本」與「卷軸」內部的英文字母與數字（ASCII 字元）在與中文混合出現時，也能強制使用 TrueType Font (TTF) 引擎來繪製。這將解決原版點陣字體與高解析度中文字體並排時，產生視覺不一致或對齊錯誤的問題。

## 需確認事項 (User Review Required)
> [!IMPORTANT]
> 我們的修改策略是，**只有**在同時滿足以下兩個條件時，才會強制使用 TTF 繪製英數字元：
> 1. 目前正在繪製「書本」或「卷軸」的文字（系統內的判斷標準為 `font_index >= 2`）。
> 2. 該段文字中確實包含中文字元（`has_cjk == true`）。
> 
> 這樣的做法可以確保純英文的書本、遊戲介面（UI）以及一般 NPC 對話，都會繼續保持《創世紀七》原汁原味的點陣字體。
> 請確認這樣的設計是否符合你的期待！

## 預計修改的程式碼

### `shapes/font.h` (標頭檔)
修改 `Font` 類別的宣告，允許將 `force_cjk`（強制使用 CJK 渲染）這個參數傳遞給計算文字寬度和繪製的函式。確保引擎在測量 ASCII 字元寬度時，也會預期它將由 TTF 繪製，從而算出正確的排版寬度。

#### [修改] [font.h](file:///d:/git/exult/shapes/font.h)
- 替 `get_text_width` 相關函式加上 `bool force_cjk = false` 參數：
  - `int get_text_width(const char* text, bool force_cjk = false);`
  - `int get_text_width(const char* text, int textlen, bool force_cjk = false);`
- 更新 `center_text` 的宣告。

### `shapes/font.cc` (實作檔)
實作「當遇到中英混合的書本文字時，跳過原版點陣字體判定，直接使用 TTF 繪製」的邏輯。

#### [修改] [font.cc](file:///d:/git/exult/shapes/font.cc)
- **`Font::paint_text_box`**：
  - 在呼叫 `get_text_width(...)` 來計算排版與換行時，將已經算好的 `has_cjk` 變數傳進去，讓空格和單字的寬度測量皆以 TTF 為準。
- **`Font::paint_text`**：
  - 確認目前是否為書本：`bool is_book = (font_index >= 2);`。
  - 將原本的點陣字觸發條件 `if (wch < 0x80 && wch != 127)` 改成 `if (wch < 0x80 && wch != 127 && !(is_book && force_cjk))`。這表示如果「是書本」且「該行有中文字」，就不會進入點陣字的繪製區塊，而是交給下方的 TTF 引擎處理。
- **`Font::get_text_width`**：
  - 加上 `bool force_cjk` 參數。
  - 實作與上述相同的判定跳過邏輯 `!(is_book && force_cjk)`，確保排版測量寬度與實際畫出來的寬度一致。
- **`Font::get_text_box_dims`**：
  - 偵測字串是否包含中文（`has_cjk`），並同樣套用跳過點陣字的邏輯，確保計算多行文字的外框大小時精準無誤。
- **`Font::center_text`**：
  - 更新計算置中寬度的邏輯，確保它也會傳遞 `has_cjk` 參數。

## 驗證計畫 (Verification Plan)
### 手動驗證步驟
1. 啟動 Exult，打開遊戲中任何一本包含「中英混合」的書本或卷軸（就像你截圖中那樣，數字與中文混雜）。
2. 確認英文數字與字母現在是否變得平滑（使用 TTF 字型），並且與中文字的基準線、高度對齊。
3. 打開一本「純英文」的書本，或觸發一般的 NPC 對話，確認它們依然正確顯示經典的點陣字體，沒有被意外影響。
