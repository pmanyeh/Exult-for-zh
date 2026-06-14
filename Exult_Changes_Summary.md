# Exult 中文化專案 — 功能性修改與新增彙整

> 本文件記錄自專案啟動至今，所有「功能性」的程式修改與新增。  
> 純文本翻譯（`tools/ucxt/output/` 下的內容）與說明文件不在此記錄範圍內。

---

## 一、修改過的原版程式

### 🖋️ 字型渲染核心 (Font Rendering)

#### `shapes/ttf_font.cc`
- **類型**：修改
- **目的**：
  - 加入讀取 TrueType（`.ttf`）中文字型的完整支援
  - 修正中文字符在渲染時邊緣被裁切（Clipping）的問題
  - 實作「小字型」獨立載入機制，讓書本、卷軸等小尺寸文字可使用指定的點陣字型
  - 修正字型大小計算邏輯（`get_text_width`），確保中英文混排時換行位置正確

#### `shapes/font.cc` / `shapes/font.h`
- **類型**：修改
- **目的**：
  - 修改字型管理系統，使其支援從 `exult.cfg` 設定檔中讀取自訂字型路徑參數（`<font_path>` 與 `<small_font_path>`）
  - 修正中英文混排時，行高（Line Height）與垂直間距（Vertical Spacing）的計算邏輯，解決 CJK 文字的行距異常問題

---

### 💬 對話系統 (Conversation / Dialogue)

#### `usecode/conversation.cc`
- **類型**：修改
- **目的**：
  - 修正對話框中，NPC 頭像出現時文字超出邊界的排版問題（將頭像與文字的碰撞判斷改為動態左靠齊）
  - 修正中文選項文字換行失敗，導致內容超出對話選項框的問題
  - 新增 `get_choice_rect()` 公開方法，回傳指定選項的螢幕位置矩形（供鍵盤導覽功能使用）

#### `usecode/conversation.h`
- **類型**：修改
- **目的**：
  - 新增 `get_choice_rect(int index)` 公開方法宣告，讓外部模組（`ucinternal.cc`）可以查詢對話選項的螢幕座標

#### `usecode/ucinternal.cc`
- **類型**：修改
- **目的**：
  - 修改 Usecode 腳本引擎的字串比對邏輯，確保中文對話選項能被正確辨識與觸發
  - 在 `get_user_choice_num()` 函式中，加入鍵盤導覽支援：
    - `↑` / `←`：切換至上一個對話選項
    - `↓` / `→`：切換至下一個對話選項
    - `Enter` / `Space`：確認目前選中的選項
    - 游標移動時，同步呼叫 `SDL_WarpMouseInWindow` 將滑鼠游標移至對應選項的中心位置

---

### ✨ 介面顯示 (UI / Gump)

#### `gumps/Spellbook_gump.cc` / `gumps/Spellbook_gump.h`
- **類型**：修改
- **目的**：
  - 修改法術書介面（Spellbook）的法術名稱渲染邏輯，改為讀取翻譯後的中文名稱字串，讓法術書能正確顯示中文法術名

---

### 🎛️ 事件與輸入系統 (Input / Event Handling)

#### `exult.cc`
- **類型**：修改
- **目的**：
  - 擴充 `Get_click()` 函式，新增 `keycode` 輸出參數（`int* keycode = nullptr`）
  - 當 `keycode` 不為 `nullptr` 時，允許方向鍵等「移動鍵」也能觸發按鍵回傳，而不再被遊戲的移動鍵綁定（`IsMotionEvent`）所過濾
  - 這是「對話鍵盤導覽」功能的底層基礎修改

#### `exult.h`
- **類型**：修改
- **目的**：
  - 更新 `Get_click()` 的公開函式宣告，加入 `int* keycode = nullptr` 選用參數，讓 `ucinternal.cc` 等外部模組可以正確呼叫

---

### 🔧 建置系統 (Build System)

#### `msvcstuff/vs2019/vcpkg.json`
- **類型**：修改
- **目的**：
  - 加入 `freetype` 為 Exult 的 vcpkg 依賴套件（原版清單未包含），解決 Visual Studio 建置時找不到 Freetype 函式庫的錯誤

#### `msvcstuff/vs2019/Exult.sln`
- **類型**：修改
- **目的**：
  - 在方案檔中加入 `textpack` 專案的參照，使 `textpack.exe`（文本打包工具）能被納入 Visual Studio 的統一建置流程

#### `msvcstuff/vs2019/textpack/textpack.vcxproj`
- **類型**：新增
- **目的**：
  - 為 `textpack` 工具新增 Visual Studio 專案設定檔，使其可在 VS 2019/2022 環境下直接建置

---

## 二、新增的程式與工具

### 🔨 建置輔助腳本

#### `build_tools.ps1` *(新增)*
- **目的**：一鍵自動化建置腳本（PowerShell），用於在 Windows 環境下快速完成工具鏈的打包流程。

---

### 🔊 音效處理工具

#### `tools/Magic_voices/` *(新增目錄)*
- **目的**：整個目錄是全新建立，用於處理遊戲內的法術語音音效。包含：
  - 解包後的原始音效檔（`.u7o` 格式）
  - 重新打包後的自訂音效庫（`.flx` 格式）
  - 供程式引用的 C++ Header 定義檔：
    - **`tools/Magic_voices/sfx_unpacked/new_jmsfx_flx.h`** *(新增)*：定義黑月之門遊戲的自訂法術語音 FLX 索引表
    - **`tools/Magic_voices/sqsfx_unpacked/sqsfxbg_custom_flx.h`** *(新增)*：定義巨蛇之島遊戲的自訂法術語音 FLX 索引表

---

## 三、程式檔案快速索引

| 狀態 | 檔案路徑 | 功能類別 |
|:---:|---|---|
| 修改 | `shapes/ttf_font.cc` | 字型渲染 |
| 修改 | `shapes/font.cc` | 字型管理 |
| 修改 | `shapes/font.h` | 字型管理 |
| 修改 | `usecode/conversation.cc` | 對話系統 |
| 修改 | `usecode/conversation.h` | 對話系統 |
| 修改 | `usecode/ucinternal.cc` | Usecode 引擎 / 鍵盤導覽 |
| 修改 | `exult.cc` | 輸入事件系統 |
| 修改 | `exult.h` | 輸入事件系統 |
| 修改 | `gumps/Spellbook_gump.cc` | 法術書介面 |
| 修改 | `gumps/Spellbook_gump.h` | 法術書介面 |
| 修改 | `msvcstuff/vs2019/vcpkg.json` | 建置系統 |
| 修改 | `msvcstuff/vs2019/Exult.sln` | 建置系統 |
| **新增** | `msvcstuff/vs2019/textpack/textpack.vcxproj` | 建置系統 |
| **新增** | `build_tools.ps1` | 建置輔助 |
| **新增** | `tools/Magic_voices/sfx_unpacked/new_jmsfx_flx.h` | 音效工具 |
| **新增** | `tools/Magic_voices/sqsfx_unpacked/sqsfxbg_custom_flx.h` | 音效工具 |
