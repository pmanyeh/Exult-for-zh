# Exult 繁體中文化專案

> 修改 [Exult](https://exult.info/) 引擎，讓 Ultima VII: The Black Gate 能正確顯示繁體中文，
> 並進行對話腳本的中文翻譯工程。

---

## 專案目標

Exult 是開源的 Ultima VII 遊戲引擎，原版僅支援英文字元顯示。  
本專案的目標是：

1. **字型支援**：讓 Exult 能夠正確渲染 CJK（中日韓）字元
2. **介面修正**：修正對話視窗、卷軸、書本等 UI 元件在顯示中文時的排版問題
3. **腳本翻譯**：將遊戲中的 Usecode 對話腳本翻譯為繁體中文

---

## 主要修改內容

### 字型與渲染
- 從 `patch/` 目錄載入自訂中文字型 (`chinese.ttf`)
- 支援獨立設定小字級（<=10）專用中文字型（透過設定檔 `<small_font_path>`），以搭配點陣字體解決微小文字糊成一團的問題
- 修正 Exult 引擎在渲染小字體時錯誤套用全包圍外框陰影的 Bug
- 修正 `get_text_width()` 在 CJK 字元的計算邏輯
- 修正 CJK 字元的垂直間距與陰影偏移
- 修正對話選項文字自動換行與版面排列

### UI 修正
- 對話框 Avatar 對齊修正
- 卷軸（Scroll）文字截斷問題修正
- 書本（Books）文字渲染修正

### 開發工具支援
- 支援 Exult Studio 的中文字型與 UI 顯示（包含圖形與文字繪製）

### 翻譯進度
對話腳本翻譯存放於 `tools/ucxt/output/zh_script/`，依批次分批進行翻譯。

---

## 如何使用

### 環境需求
- Exult 原始碼（本 repo）
- Visual Studio（Windows）或 GCC（Linux/Mac）
- Ultima VII: The Black Gate 遊戲資料

### 建置方式
請參考 [Exult 官方建置說明](https://exult.info/docs.php)。

### 安裝中文字型
將主要中文字型命名為 `chinese.ttf` 放入遊戲的 `patch/` 資料夾，Exult 啟動時會自動載入。
也可在 `exult.cfg` 中透過 `<font_path>` 參數指定其路徑。
若想在書本與卷軸等微小文字（<= 10 級）獲得最佳顯示效果，可額外準備專用的點陣字型放入 `patch/` 資料夾，並在 `exult.cfg` 中透過 `<small_font_path>` 參數指定其路徑（詳見下方進階設定指南）。

---

## 設定與客製化

關於如何透過 `exult.cfg` 自訂中文字型的大小、間距、粗細與陰影效果，
請參閱：[字型進階設定指南 (README_Chinese_Config.md)](README_Chinese_Config.md)

---

## 授權

本專案基於 [Exult](https://github.com/exult/exult) 修改而來，遵循原專案的 **GPL-2.0** 授權。  
翻譯腳本內容版權屬 Origin Systems，僅供個人研究與非商業用途。

---

## 相關連結

- [Exult 官方網站](https://exult.info/)
- [Exult GitHub](https://github.com/exult/exult)
- [Ultima VII: The Black Gate](https://en.wikipedia.org/wiki/Ultima_VII:_The_Black_Gate)
