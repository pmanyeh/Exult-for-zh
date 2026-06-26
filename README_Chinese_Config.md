# Exult 繁體中文版 - 字型進階設定指南

本專案針對 Exult 引擎的繁體中文顯示進行了深度客製化，玩家可以透過修改 `exult.cfg` 檔案，自由調整中文字型的顯示效果（包含字型路徑、大小、字距、粗細以及陰影）。

## 設定檔位置

請開啟你的 `exult.cfg`，並在 `<video>` 標籤內找到（或自行新增）`<chinese>` 標籤。

```xml
<config>
  <video>
    <chinese>
      <!-- 在此處加入設定參數 -->
    </chinese>
  </video>
</config>
```

---

## 參數列表與說明

### 0. 字型檔案路徑設定

這些參數控制引擎使用哪些 TTF 字型檔案。**路徑不可使用 `<PATCH>` 等 Exult 路徑變數**，請填入完整的絕對路徑或相對路徑。

*   `<font_path>`：**主要 TTF 字型路徑 (預設值: `<PATCH>/chinese.ttf`)**
    *   說明：中文渲染所使用的主要字型檔案。若遊戲資料夾的 patch 目錄下有 `chinese.ttf`，通常不需要特別設定此項。
    *   範例：`C:\YourGame\static\patch\NotoSansTC.ttf`
*   `<small_font_path>`：**小字型路徑 (選填)**
    *   說明：當字型大小 ≤ 10px 時，優先使用此字型（適合用點陣小字替換 TTF）。若未設定或路徑無效，則 fallback 至 `font_path`。
    *   範例：`C:\YourGame\static\patch\small.ttf`
*   `<sign_font_path>`：**招牌專屬字型路徑 (選填)**
    *   說明：所有招牌（木牌、金屬牌、墓碑、蛇島牌）上的中文文字將使用此字型。若未設定或路徑無效，自動 fallback 至 `font_path`，不影響其他對話顯示。
    *   範例：`C:\YourGame\static\patch\sign.ttf`

---

### 1. 基礎排版設定 (全域)

這些參數會影響遊戲中所有場景的中文排版：

*   `<baseline_adjust>`：**基線微調 (預設值: `0`)**
    *   說明：微調中文字串的整體垂直位置。正數將文字往下移，負數往上移。
*   `<line_spacing>`：**行距設定 (預設值: 字型 ≥15px 時為 `8`，否則為 `6`)**
    *   說明：控制多行文字之間的垂直間距，影響對話框與書本。
*   `<force_ttf_for_english>`：**強制英文使用 TTF (預設值: `no`)**
    *   說明：若設為 `yes`，純英文字串也會強制使用 TTF 字型渲染，統一視覺風格。預設為 `no`，讓未翻譯的英文保留原始點陣字型。

---

### 1b. 高解析文字渲染 (Deferred Rendering)

*   `<post_scale_rendering>`：**高解析文字渲染開關 (預設值: 自動)**
    *   說明：控制是否啟用獨立的 32-bit RGBA 文字圖層進行中文渲染。
        *   `yes`：強制啟用高解析獨立文字渲染。若玩家在 Exult 顯示設定中啟用了畫面縮放濾鏡（如 HQ3x、xBR 等，即 `scale > 1`），此項會強制將 CJK 字體繪製於獨立的高解析圖層上，避免被縮放濾鏡扭曲或模糊，呈現極為細緻平滑的文字外觀。
        *   `no`：停用高解析文字渲染。文字會直接以低解析點陣形式寫入 8-bit 背景，並隨遊戲畫面一起被濾鏡放大。
        *   *(註：當 scale > 1 且有使用濾鏡時，系統預設即會自動開啟此功能，一般情況下無須手動指定)*

---

### 1c. 高解析度 UI 介面縮放 (UI Scaling)

*   `<scale_ui>`：**UI 介面動態放大開關 (預設值: `yes`)**
    *   說明：控制遊戲內的 UI 介面（包含法術書、地圖、點擊選單與各種按鈕）是否要隨著高解析度自動等比例放大。
        *   `yes`：自動縮放。只要遊戲視窗的解析度夠大，系統就會自動將 UI 放大（例如 2x、3x 等），以符合現代高畫質螢幕的視覺比例，且所有按鈕與背景均維持完美對齊。
        *   `no`：強制關閉縮放。所有的 UI 介面都會保持懷舊的 1x 原始像素大小，完全不進行任何放大處理。

---

### 2. NPC 對話與介面字型設定

這些參數主要影響 **NPC 對話框** 以及 **系統選單** 的顯示效果：

*   `<font_size_dialog>`：**對話字型大小 (預設值: `15`)**
*   `<font_color_dialog>`：**對話字體顏色 (預設值: `-1`)**
    *   說明：填寫 0~255 的 8-bit 色盤編號。`-1` 代表由系統自動選色。
*   `<letter_spacing>`：**字元間距 (預設值: `0`)**
    *   說明：中文字元之間的水平間隔（像素）。可設負數讓排版更緊密。
*   `<font_weight>`：**字體粗細 (預設值: `0`)**
    *   說明：模擬粗體效果，數值越高越粗（建議值 `0` 或 `1`）。
*   `<shadow_type>`：**陰影類型 (預設值: `-1`)**
    *   說明：控制文字陰影效果。
        *   `-1`：Exult 原廠風格（右下角 1px 偏移的深色陰影）。
        *   `0`：無陰影。
        *   `1`：自訂偏移陰影（搭配 `shadow_offset_x/y` 使用）。
        *   `2`：全方位描邊（文字四周包覆外框，厚度由 `shadow_offset_x/y` 控制）。
*   `<shadow_offset_x>` / `<shadow_offset_y>`：**陰影偏移量 (預設值: `1`)**
*   `<shadow_color>`：**陰影顏色 (預設值: `-1`，自動)**

---

### 3. NPC 頭頂文字與物件標籤 (Bark / Labels)

*   `<font_size_bark>`：**頭頂與標籤字型大小 (預設值: `15`)**
    *   說明：控制點擊物件時浮現的名稱標籤，以及 NPC 走動時彈出的頭頂對話氣泡大小。
    *   其餘陰影、字距、粗細參數與「NPC 對話」共用（即 `shadow_type`、`letter_spacing`、`font_weight`）。
*   `<font_color_bark>`：**飄字顏色 (預設值: `-1`，自動)**

---

### 4. 書本與卷軸字型設定 (Book / Scroll)

針對書本和卷軸可以完全獨立設定，以獲得不同的閱讀體驗：

*   `<font_size_book>`：書本字型大小 (預設值: `11`)
*   `<font_color_book>`：書本字體顏色 (預設值: `-1`)
*   `<letter_spacing_book>`：書本字元間距 (預設值: `0`)
*   `<font_weight_book>`：書本字體粗細 (預設值: `0`)
*   `<shadow_type_book>`：書本陰影類型 (預設值: `-1`，建議設為 `0` 移除陰影)
*   `<shadow_offset_x_book>`：書本陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_book>`：書本陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_book>`：書本陰影顏色 (預設值: `-1`)

---

### 5. 招牌、墓碑與金屬牌字型設定 (Signs / Tombstones / Plaques)

招牌系統分為三個優先級：**個別招牌設定 > 通用招牌設定 (`_sign`) > 對話設定**。

#### 5a. 通用招牌設定（盧恩符文招牌 / 其他未指定類型）

適用於盧恩符文招牌 (font 8/10) 以及未被下方個別設定覆蓋的招牌類型：

*   `<font_size_sign>`：通用招牌字型大小 (預設值: `14`)
*   `<font_color_sign>`：招牌字體顏色 (預設值: `-1`)
*   `<letter_spacing_sign>`：招牌字元間距 (預設值: `0`)
*   `<font_weight_sign>`：招牌字體粗細 (預設值: `0`)
*   `<shadow_type_sign>`：招牌陰影類型 (預設值: `-1`，設為 `1` 可模擬雕刻效果)
*   `<shadow_offset_x_sign>`：陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_sign>`：陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_sign>`：陰影顏色 (預設值: `-1`)

#### 5b. 木牌專屬設定 (Wood Sign，font index 1)

覆蓋通用招牌設定，僅影響普通木製路牌：

*   `<font_size_woodsign>`：木牌字型大小 (預設值: `14`)
*   `<font_color_woodsign>`：木牌字體顏色 (預設值: `-1`)
*   `<letter_spacing_woodsign>`：木牌字元間距 (預設值: `0`)
*   `<font_weight_woodsign>`：木牌字體粗細 (預設值: `0`)
*   `<shadow_type_woodsign>`：木牌陰影類型 (預設值: `-1`)
*   `<shadow_offset_x_woodsign>`：陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_woodsign>`：陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_woodsign>`：陰影顏色 (預設值: `-1`)

#### 5c. 墓碑專屬設定 (Tombstone，font index 3)

*   `<font_size_tombstone>`：墓碑字型大小 (預設值: `14`)
*   `<font_color_tombstone>`：墓碑字體顏色 (預設值: `-1`)
*   `<letter_spacing_tombstone>`：墓碑字元間距 (預設值: `0`)
*   `<font_weight_tombstone>`：墓碑字體粗細 (預設值: `0`)
*   `<shadow_type_tombstone>`：墓碑陰影類型 (預設值: `-1`)
*   `<shadow_offset_x_tombstone>`：陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_tombstone>`：陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_tombstone>`：陰影顏色 (預設值: `-1`)

#### 5d. 金屬牌/盧恩金牌專屬設定 (Gold Sign，font index 6)

*   `<font_size_goldsign>`：金屬牌字型大小 (預設值: `14`)
*   `<font_color_goldsign>`：金屬牌字體顏色 (預設值: `-1`)
*   `<letter_spacing_goldsign>`：金屬牌字元間距 (預設值: `0`)
*   `<font_weight_goldsign>`：金屬牌字體粗細 (預設值: `0`)
*   `<shadow_type_goldsign>`：金屬牌陰影類型 (預設值: `-1`)
*   `<shadow_offset_x_goldsign>`：陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_goldsign>`：陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_goldsign>`：陰影顏色 (預設值: `-1`)

---

### 6. 開場動畫 (Intro / Guardian) 專屬設定

針對遊戲開頭守護者字幕動畫，可完全獨立設定。其餘未設定的樣式（如字距、粗細）將繼承通用對話設定：

*   `<font_size_intro>`：開場文字大小 (預設值: 繼承 `font_size_dialog`)
*   `<font_color_intro>`：開場文字顏色 (預設值: `-1`)
*   `<letter_spacing_intro>`：開場字元間距（注意：目前程式碼繼承通用 `letter_spacing`，此欄位為保留說明）
*   `<font_weight_intro>`：開場字體粗細（同上，繼承通用 `font_weight`）
*   `<shadow_type_intro>`：開場陰影類型 (預設值: `-1`)
*   `<shadow_offset_x_intro>` / `<shadow_offset_y_intro>`：開場陰影偏移 (預設值: `1`)
*   `<shadow_color_intro>`：開場陰影顏色 (預設值: `-1`)
*   `<hires_brightness_boost_intro>`：高解析度渲染模式下的**字幕亮度預增強/預補償**。用以抵消抗鋸齒（Anti-aliasing）與深色背景混合產生的變暗現象。以 `100` 為基底代表 `1.0` 倍無補償，例如設為 `130` 代表 `1.30` 倍亮度增強。此值只對高解析模式有效，8-bit 模式不予理會。(預設值: `100`)

---

### 7. 結局動畫 (Ending) 專屬設定

結局的字體與顏色可以單獨設定，以配合結局特有的調色盤（Palette）：

*   `<font_size_ending>`：結局文字大小 (預設值: 繼承 `font_size_dialog`)
*   `<font_color_ending>`：結局文字顏色 (預設值: `-1`，可設為 `134` 使用亮橘色)
*   `<letter_spacing_ending>`：結局字元間距（繼承通用 `letter_spacing`）
*   `<font_weight_ending>`：結局字體粗細（繼承通用 `font_weight`）
*   `<shadow_type_ending>`：結局陰影類型 (預設值: `-1`)
*   `<shadow_offset_x_ending>` / `<shadow_offset_y_ending>`：結局陰影偏移 (預設值: `1`)
*   `<shadow_color_ending>`：結局陰影顏色 (預設值: `-1`)
*   `<hires_brightness_boost_ending>`：高解析度渲染模式下結局字幕的亮度增強。單位為整數百分比（例如 `130` 代表 `1.30` 倍，預設為 `100` 即無補正）。

---

### 8. 巨蛇之島 (Serpent Isle) OP/ED 專屬設定

為了解決巨蛇之島（SI）在字型索引重疊下的字幕控制問題，Exult 提供了一套獨立於黑月之門（BG）之外的巨蛇之島專屬樣式設定。若未設定，則會 fallback 至預設值：

*   **巨蛇之島 OP (SI Intro)**：
    *   `<font_size_si_intro>`：開場文字大小 (預設: `15`)
    *   `<font_color_si_intro>`：開場文字顏色 (預設: `-1`)
    *   `<shadow_type_si_intro>`：開場陰影類型 (預設: `-1`)
    *   `<shadow_offset_x_si_intro>` / `<shadow_offset_y_si_intro>`：開場陰影偏移 (預設: `1`)
    *   `<shadow_color_si_intro>`：開場陰影顏色 (預設: `-1`)
    *   `<hires_brightness_boost_si_intro>`：高解析度開場字幕亮度預補正倍率 (以 `100` 為基底，預設 `100`)
*   **巨蛇之島 ED (SI Ending)**：
    *   `<font_size_si_ending>`：結局文字大小 (預設: `15`)
    *   `<font_color_si_ending>`：結局文字顏色 (預設: `-1`)
    *   `<shadow_type_si_ending>`：結局陰影類型 (預設: `-1`)
    *   `<shadow_offset_x_si_ending>` / `<shadow_offset_y_si_ending>`：結局陰影偏移 (預設: `1`)
    *   `<shadow_color_si_ending>`：結局陰影顏色 (預設: `-1`)
    *   `<hires_brightness_boost_si_ending>`：高解析度結局字幕亮度預補正倍率 (以 `100` 為基底，預設 `100`)

---

## 設定範例

以下為一份完整的設定範例，涵蓋所有可用參數。可依需要複製使用：

```xml
<config>
  <video>
    <chinese>
      <!-- =============================== -->
      <!--   字型路徑 (使用完整絕對路徑)   -->
      <!-- =============================== -->
      <!-- 主要字型 (必要，路徑請依實際位置調整) -->
      <font_path> C:\YourGame\static\patch\NotoSansTC.ttf </font_path>
      <!-- 小字型 (選填) -->
      <small_font_path> C:\YourGame\static\patch\small.ttf </small_font_path>
      <!-- 招牌專屬字型 (選填，未設定則繼承 font_path)-->
      <sign_font_path> C:\YourGame\static\patch\sign.ttf </sign_font_path>

      <!-- =============================== -->
      <!--        全域排版設定              -->
      <!-- =============================== -->
      <baseline_adjust> 0 </baseline_adjust>
      <line_spacing> 8 </line_spacing>
      <force_ttf_for_english> no </force_ttf_for_english>
      <post_scale_rendering> yes </post_scale_rendering>

      <!-- =============================== -->
      <!--     NPC 對話與介面 (主字型)      -->
      <!-- =============================== -->
      <font_size_dialog> 15 </font_size_dialog>
      <font_color_dialog> -1 </font_color_dialog>
      <letter_spacing> 0 </letter_spacing>
      <font_weight> 0 </font_weight>
      <shadow_type> -1 </shadow_type>
      <shadow_offset_x> 1 </shadow_offset_x>
      <shadow_offset_y> 1 </shadow_offset_y>
      <shadow_color> -1 </shadow_color>

      <!-- =============================== -->
      <!--       NPC 頭頂標籤 (Bark)        -->
      <!-- =============================== -->
      <font_size_bark> 15 </font_size_bark>
      <font_color_bark> -1 </font_color_bark>
      <!-- 其餘陰影/字距沿用 NPC 對話設定 -->

      <!-- =============================== -->
      <!--        書本與卷軸               -->
      <!-- =============================== -->
      <font_size_book> 11 </font_size_book>
      <font_color_book> -1 </font_color_book>
      <letter_spacing_book> 0 </letter_spacing_book>
      <font_weight_book> 0 </font_weight_book>
      <shadow_type_book> 0 </shadow_type_book>
      <shadow_offset_x_book> 1 </shadow_offset_x_book>
      <shadow_offset_y_book> 1 </shadow_offset_y_book>
      <shadow_color_book> -1 </shadow_color_book>

      <!-- =============================== -->
      <!--    招牌 - 通用 (蛇島牌等)        -->
      <!-- =============================== -->
      <font_size_sign> 14 </font_size_sign>
      <font_color_sign> -1 </font_color_sign>
      <letter_spacing_sign> 0 </letter_spacing_sign>
      <font_weight_sign> 0 </font_weight_sign>
      <shadow_type_sign> 1 </shadow_type_sign>
      <shadow_offset_x_sign> 1 </shadow_offset_x_sign>
      <shadow_offset_y_sign> 1 </shadow_offset_y_sign>
      <shadow_color_sign> -1 </shadow_color_sign>

      <!-- 招牌 - 木牌 (Wood Sign) -->
      <font_size_woodsign> 14 </font_size_woodsign>
      <font_color_woodsign> -1 </font_color_woodsign>
      <letter_spacing_woodsign> 0 </letter_spacing_woodsign>
      <font_weight_woodsign> 0 </font_weight_woodsign>
      <shadow_type_woodsign> 1 </shadow_type_woodsign>
      <shadow_offset_x_woodsign> 1 </shadow_offset_x_woodsign>
      <shadow_offset_y_woodsign> 1 </shadow_offset_y_woodsign>
      <shadow_color_woodsign> -1 </shadow_color_woodsign>

      <!-- 招牌 - 墓碑 (Tombstone) -->
      <font_size_tombstone> 14 </font_size_tombstone>
      <font_color_tombstone> -1 </font_color_tombstone>
      <letter_spacing_tombstone> 0 </letter_spacing_tombstone>
      <font_weight_tombstone> 0 </font_weight_tombstone>
      <shadow_type_tombstone> 1 </shadow_type_tombstone>
      <shadow_offset_x_tombstone> 1 </shadow_offset_x_tombstone>
      <shadow_offset_y_tombstone> 1 </shadow_offset_y_tombstone>
      <shadow_color_tombstone> -1 </shadow_color_tombstone>

      <!-- 招牌 - 金屬牌/盧恩金牌 (Gold Sign) -->
      <font_size_goldsign> 14 </font_size_goldsign>
      <font_color_goldsign> -1 </font_color_goldsign>
      <letter_spacing_goldsign> 0 </letter_spacing_goldsign>
      <font_weight_goldsign> 0 </font_weight_goldsign>
      <shadow_type_goldsign> 1 </shadow_type_goldsign>
      <shadow_offset_x_goldsign> 1 </shadow_offset_x_goldsign>
      <shadow_offset_y_goldsign> 1 </shadow_offset_y_goldsign>
      <shadow_color_goldsign> -1 </shadow_color_goldsign>

      <!-- =============================== -->
      <!--    黑月之門 - 開場動畫 (BG Intro)   -->
      <!-- =============================== -->
      <font_size_intro> 15 </font_size_intro>
      <font_color_intro> -1 </font_color_intro>
      <shadow_type_intro> -1 </shadow_type_intro>
      <shadow_offset_x_intro> 1 </shadow_offset_x_intro>
      <shadow_offset_y_intro> 1 </shadow_offset_y_intro>
      <shadow_color_intro> -1 </shadow_color_intro>
      <hires_brightness_boost_intro> 130 </hires_brightness_boost_intro>

      <!-- =============================== -->
      <!--    黑月之門 - 結局動畫 (BG Ending)  -->
      <!-- =============================== -->
      <font_size_ending> 15 </font_size_ending>
      <font_color_ending> 134 </font_color_ending>
      <shadow_type_ending> -1 </shadow_type_ending>
      <shadow_offset_x_ending> 1 </shadow_offset_x_ending>
      <shadow_offset_y_ending> 1 </shadow_offset_y_ending>
      <shadow_color_ending> -1 </shadow_color_ending>
      <hires_brightness_boost_ending> 130 </hires_brightness_boost_ending>

      <!-- =============================== -->
      <!--    巨蛇之島 - 開場動畫 (SI Intro)   -->
      <!-- =============================== -->
      <font_size_si_intro> 15 </font_size_si_intro>
      <font_color_si_intro> -1 </font_color_si_intro>
      <shadow_type_si_intro> -1 </shadow_type_si_intro>
      <shadow_offset_x_si_intro> 1 </shadow_offset_x_si_intro>
      <shadow_offset_y_si_intro> 1 </shadow_offset_y_si_intro>
      <shadow_color_si_intro> -1 </shadow_color_si_intro>
      <hires_brightness_boost_si_intro> 130 </hires_brightness_boost_si_intro>

      <!-- =============================== -->
      <!--    巨蛇之島 - 結局動畫 (SI Ending)  -->
      <!-- =============================== -->
      <font_size_si_ending> 15 </font_size_si_ending>
      <font_color_si_ending> -1 </font_color_si_ending>
      <shadow_type_si_ending> -1 </shadow_type_si_ending>
      <shadow_offset_x_si_ending> 1 </shadow_offset_x_si_ending>
      <shadow_offset_y_si_ending> 1 </shadow_offset_y_si_ending>
      <shadow_color_si_ending> -1 </shadow_color_si_ending>
      <hires_brightness_boost_si_ending> 130 </hires_brightness_boost_si_ending>
    </chinese>
  </video>
</config>
```
