# Exult 繁體中文版 - 字型進階設定指南

本專案針對 Exult 引擎的繁體中文顯示進行了深度客製化，玩家可以透過修改 `exult.cfg` 檔案，自由調整中文字型的顯示效果（包含大小、字距、粗細以及陰影）。

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

## 參數列表與說明

### 1. 基礎排版設定 (全域)

這些參數會影響遊戲中所有的中文排版：

*   `<baseline_adjust>`：**基線微調 (預設值: `0`)**
    *   說明：微調中文字串的整體垂直高度。正數將文字往下移，負數將文字往上移。
*   `<line_spacing>`：**行距設定 (預設值: 依字型大小自動判斷，約 `6` 到 `8`)**
    *   說明：控制對話與書本中，多行文字之間的垂直間距。
*   `<force_ttf_for_english>`：**強制英文使用 TTF (預設值: `false`)**
    *   說明：若設為 `yes`，純英文字串也會強制使用中文字型 (TTF) 進行渲染，統一視覺風格。預設為 `false`，以便未翻譯的英文劇本保留 Exult 原始點陣字型的懷舊感。

### 2. NPC 對話與介面字型設定

這些參數主要影響 **NPC 對話框** 以及 **系統選單** 的顯示效果：

*   `<font_size_dialog>`：**對話字型大小 (預設值: `15`)**
    *   說明：NPC 主要對話與選單的文字大小。
*   `<letter_spacing>`：**字元間距 (預設值: `0`)**
    *   說明：中文字元之間的水平間隔。可設定為負數（例如 `-1`）讓文字排列更緊密。
*   `<font_weight>`：**字體粗細 (預設值: `0`)**
    *   說明：增加字體的粗度。數值越高字體越粗（原理為增加像素重繪次數，建議值為 `0` 或 `1`）。
*   `<shadow_type>`：**陰影類型 (預設值: `-1`)**
    *   說明：控制對話文字的陰影效果。
        *   `-1`：Exult 預設風格（右下角 1 像素偏移的黑色/深灰色陰影）。
        *   `0`：無陰影。
        *   `1`：自訂偏移陰影（搭配下方 `shadow_offset` 使用）。
        *   `2`：全方位描邊（文字四周包覆外框）。
*   `<shadow_offset_x>` / `<shadow_offset_y>`：**陰影偏移量 (預設值: `1`)**
    *   說明：當 `<shadow_type>` 為 `1` 或 `2` 時，控制陰影在 X 軸與 Y 軸的偏移像素或描邊厚度。
*   `<shadow_color>`：**陰影顏色 (預設值: `-1`)**
    *   說明：自訂陰影顏色，數值需對應 Exult 的 8-bit 色票代碼（0~255）。`-1` 代表使用系統自動判斷的陰影色。

### 3. NPC 頭頂文字與物件標籤 (Bark / Labels)

*   `<font_size_bark>`：**頭頂與標籤字型大小 (預設值: `15`)**
    *   說明：專門控制點擊物件時浮現的名稱，以及 NPC 在地圖上走動時頭頂彈出的對話氣泡大小。若未設定，將繼承對話字型的大小。其餘陰影與間距參數則與上述「NPC 對話」共用。

### 4. 書本與卷軸字型設定 (Book / Scroll)

為了讓書本與卷軸呈現不同的閱讀體驗（例如移除陰影、縮小字體），你可以針對書本獨立設定參數。只需在原本的參數名稱後加上 `_book` 即可：

*   `<letter_spacing_book>`：書本字元間距 (預設值: `0`)
*   `<font_weight_book>`：書本字體粗細 (預設值: `0`)
*   `<shadow_type_book>`：書本陰影類型 (預設值: `-1`，建議可設為 `0` 移除陰影以符合原文書本風格)
*   `<shadow_offset_x_book>`：書本陰影 X 偏移 (預設值: `1`)
*   `<shadow_offset_y_book>`：書本陰影 Y 偏移 (預設值: `1`)
*   `<shadow_color_book>`：書本陰影顏色 (預設值: `-1`)

*(註：書本字型大小由系統根據版面自動演算，因此目前不提供手動覆寫的參數)*

---

## 設定範例

以下為一份完整的設定範例，可直接複製貼上至 `exult.cfg` 中進行微調：

```xml
<config>
  <video>
    <chinese>
      <!-- 全域設定 -->
      <baseline_adjust> 0 </baseline_adjust>
      <force_ttf_for_english> no </force_ttf_for_english>

      <!-- NPC 對話與介面 -->
      <font_size_dialog> 16 </font_size_dialog>
      <letter_spacing> 1 </letter_spacing>
      <font_weight> 1 </font_weight>
      <shadow_type> 2 </shadow_type>
      <shadow_offset_x> 1 </shadow_offset_x>
      <shadow_offset_y> 1 </shadow_offset_y>

      <!-- NPC 頭頂標籤 -->
      <font_size_bark> 14 </font_size_bark>

      <!-- 書本與卷軸 -->
      <letter_spacing_book> 0 </letter_spacing_book>
      <font_weight_book> 0 </font_weight_book>
      <shadow_type_book> 0 </shadow_type_book>
    </chinese>
  </video>
</config>
```
