# Ultima VII 在地化流程指南

本指南涵蓋了將 Ultima VII (黑門) 翻譯成繁體中文的主要流程，分為「USECODE (腳本與對話)」以及「TEXT.FLX (物品與環境物件文本)」兩個部分。

---

## 第一部分：物品文本 (TEXT.FLX) 在地化流程

在 Ultima VII 中，絕大多數的「物品名稱」與「環境物件名稱」（例如：地毯、藥水、月門等）統一封裝在遊戲資料夾 `STATIC\` 底下的 `TEXT.FLX` 檔案裡。我們需要使用 Exult 內建的 `textpack.exe` 工具來處理。

### 1. 解包 (Unpack)
將遊戲原版的 `TEXT.FLX` 轉換為可以直接閱讀與編輯的純文字檔（`strings.list`）。

打開終端機（PowerShell），執行以下指令：
```powershell
& "C:\Program Files\Exult\Tools\textpack.exe" -x "D:\U7_project\Ultima 7\STATIC\TEXT.FLX" strings.list
```
執行成功後，會在當前目錄下產出 `strings.list`。

### 2. 翻譯 (Translate)
使用文字編輯器打開 `strings.list`，每一行都是 `<ID>:<字串>`：
```text
0:carpet
340:/potion//s
766:The Moon Trammel
```
**翻譯注意事項**：
1. **保留 ID 與冒號**：只翻譯冒號後面的文字。例如改為 `0:地毯`。
2. **複數標籤語法 (`/...//s`)**：這是遊戲引擎用來處理英文單複數的特殊語法。
   * 完整格式為：**`/字根/單數結尾/複數結尾`**。例如 `340:/potion//s` 中，`potion` 是字根，單數沒有結尾，複數結尾是 `s`。拿 1 瓶顯示 `potion`，2 瓶顯示 `potions`。
   * **中文處理建議**：因為中文不分單複數，為了避免引擎在數量大於 1 時自動補上英文字母 `s`（變成「2 藥水s」），建議翻譯時**保留斜線，並將單複數結尾都清空**。
   * **正確範例**：將 `340:/potion//s` 改為 `340:/藥水//`。這代表單數和複數都不要加任何後綴字，是最萬無一失的做法。

### 3. 重新封裝 (Repack)
翻譯完成並儲存 `strings.list` 後，將它打包回 `TEXT.FLX` 供遊戲讀取。

> **⚠️ 警告**：在執行打包前，**請務必先備份原版的 `TEXT.FLX`**，以免檔案損毀！

執行以下指令：
```powershell
& "C:\Program Files\Exult\Tools\textpack.exe" -c "D:\U7_project\Ultima 7\STATIC\TEXT.FLX" strings.list
```
這個指令會讀取你改好的 `strings.list`，並覆寫 `TEXT.FLX`。

### 4. 導入遊戲驗證 (Test in Game)
因為 `TEXT.FLX` 檔案本來就在遊戲的 `STATIC\` 資料夾內，完成第 3 步的封裝後：
1. 直接啟動 Exult 進入遊戲。
2. 用滑鼠點擊或打開背包查看你剛翻譯的物品（例如地毯或藥水），確認畫面顯示的文字是否已經變更為中文。

---

## 第二部分：腳本與對話 (USECODE) 在地化流程

遊戲內 NPC 的對話與邏輯判定都封裝在 `USECODE` 檔案中，這需要透過 `ucxt.exe` (反編譯) 與 `ucc.exe` (編譯) 來處理。

### 1. 解包與萃取 (Extract)
使用 `ucxt` 將 `USECODE` 拆解為 `.uc` 腳本檔案。
* 為了避免 Windows 檔案句柄報錯，建議透過標準輸出 (`stdout`) 將結果導向到檔案：
```powershell
& "C:\Program Files\Exult\Tools\ucxt.exe" -b -n 0401 > 0401.uc
```

### 2. 轉換格式與翻譯 (Translate)
利用 Python 腳本（例如之前開發的 `extract_text.py`），將 `.uc` 檔案中包含 `message()` 或 `UI_add_answer()` 的對話文本萃取出來，轉成獨立的 `.es` 檔案（例如 `iolo.es`）或是 `JSON` 格式，方便翻譯人員對照處理。

**翻譯注意事項**：
* 必須嚴格保留控制字元，例如 `@` (對話結尾)、`*` (星號)、`~~` (停頓符號) 等等。

### 3. 編譯封裝 (Compile)
使用 `ucc.exe` 將翻譯好的 `.es` 檔案編譯成可被遊戲讀取的 `.uco` 補丁檔案。
建議建立一個 `main.es` 將所有翻譯好的對話檔 `include` 進來：
```powershell
& "C:\Program Files\Exult\Tools\ucc.exe" -o usecode.uco main.es
```

### 4. 導入遊戲 (Test in Game)
將編譯出來的 `usecode.uco` 放入遊戲的 `PATCH` 目錄，Exult 在啟動時會優先讀取 `.uco` 裡的新腳本，藉此覆蓋遊戲原版的對話。
