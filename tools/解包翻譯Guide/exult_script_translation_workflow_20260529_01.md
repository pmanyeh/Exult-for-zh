# 創世紀 7 (Ultima 7) 現代化漢化工作流指南：Exult Script (.es) 篇

這份文件記錄了為《創世紀 7》進行對話文本修改與漢化時，最安全、標準的現代化開發流程。

過去我們嘗試修改 `ucxt` 反編譯出來的組合語言腳本 (`.uc`)，但發現只要**翻譯後的字串長度與原文不一致**，就會導致所有程式碼的記憶體位址 (Offset) 發生位移。這會造成編譯後遊戲引擎在執行跳轉 (Jump/Branch) 時跳錯位址，導致對話閃退、無法繼續等嚴重 Bug。

為了解決這個問題，我們必須全面改用 **Exult Script (`.es`)** 高階腳本，並使用 **UCC (Usecode C Compiler)** 進行編譯。這套流程由編譯器自動計算所有位移，讓你可以自由修改文本，無須擔心長度限制。

---

## 核心工具鏈
確保你的 `C:\Program Files\Exult\Tools` 目錄下有以下兩個核心工具：
1. **`ucxt.exe`**：反編譯工具，負責將原版 `USECODE` 提取成高階腳本。
2. **`ucc.exe`**：編譯工具，負責將修改後的腳本重新編譯為遊戲可讀的二進位檔。

---

## ⚠️ 執行前必做：解決 ucxt 崩潰與輸出重導向 Bug

在開始反編譯之前，必須先設定環境並避開 `ucxt.exe` 的兩個底層 Bug，否則執行反編譯指令會直接崩潰。

### 1. 解決數據目錄找不到導致的崩潰 (Assertion failed)
`ucxt.exe` 執行時需要讀取指令對照表（如 `u7opcodes.data`），Exult 安裝程式預設將這些檔案裝在 `C:\Program Files\Exult\Tools\data`。然而 `ucxt.exe` 預設會去 `C:\Program Files\Exult\data` 尋找，找不到就會因為指令表空白而崩潰。

**解決方案**：
打開你的系統設定檔 `C:\Users\pmany\AppData\Local\Exult\exult.cfg`，並在倒數第二行的 `</config>` 之前，加入以下 XML 區塊：
```xml
  <ucxt>
    <root>C:\Program Files\Exult\Tools\data</root>
  </ucxt>
```

### 2. 避開 -o 參數的記憶體生命週期 Bug
`ucxt.exe` 內部處理 `-o` (輸出檔案) 參數的 C++ 變數生命週期有 Bug，會導致檔案流的緩衝區在寫入前就被釋放，引發記憶體存取違規 (Access Violation) 崩潰，並留下一個 `0 bytes` 的空檔案。此外，PowerShell 會將 `-oiolo.es` 中的 `.` 誤判為物件屬性呼叫，將參數割裂。

**解決方案**：
**完全不要使用 `-o` 參數！** 讓 `ucxt` 直接輸出到終端機 stdout，再使用 PowerShell 的管道符號將輸出存成 utf8 檔案。
注意：輸入參數 `-i` 緊接路徑時**不能有空白**。

---

## 完整工作流 4 步驟 SOP

假設我們要修改 Iolo 的對話（函數編號 `0401`），請在終端機中依序執行以下步驟：

### 步驟 1：提取高階腳本 (.es)
我們需要將遊戲的二進位 `USECODE` 反編譯成易讀的 C 語言風格腳本 (`.es`)。
*   `-bg` 代表黑門 (Black Gate)
*   `-fs` 代表輸出 Exult Script 格式
*   最後使用 `| Out-File -FilePath [檔名] -Encoding utf8` 導出

請在 PowerShell 執行以下指令：
```powershell
& "C:\Program Files\Exult\Tools\ucxt.exe" -bg -fs -i"D:\U7_project\Ultima 7\STATIC\USECODE" 0401 | Out-File -FilePath iolo.es -Encoding ascii
```
*(注意：這裡必須使用 `-Encoding ascii` 而不是 `utf8`，因為 Windows 內建的 PowerShell 預設會在 UTF-8 檔案開頭加入 BOM (位元組順序記號 `\xEF\xBB\xBF`)，這會導致 `ucc.exe` 編譯器在第一行報錯 `Invalid character found in source file: '\xEF'`。輸出為 ASCII 後，在 VS Code 中加上中文並存檔時，VS Code 會自動以標準無 BOM 的 UTF-8 保存。)*
*(執行成功後，工作目錄會產生擁有完整程式碼的 `iolo.es` 檔案，且無任何錯誤。)*

### 步驟 2：修改文本
使用 VS Code 打開 `iolo.es`，找到對話字串：
```c
message("\"Yes, my friend?\" Iolo asks.");
say();
```
這時你可以**無視字節長度限制**，將引號內的文字改成任何翻譯：
```c
message("\"是的，我的老朋友，你需要什麼？\" Iolo 這麼問道。");
say();
```
*(注意：對話字串內若有雙引號，請使用 `\"` 來進行跳脫。)*

### 步驟 3：重新編譯 (.uco)
修改完成並存檔後，使用 `ucc.exe` 進行編譯。它會自動處理所有的底層標籤與記憶體位移。
```powershell
& "C:\Program Files\Exult\Tools\ucc.exe" -o usecode.uco iolo.es
```
*(注意：編譯時若跳出 `warning: You *really* shouldn't use goto statements...` 屬於正常現象，只要最後顯示 `Usecode successfully compiled to usecode.uco!` 即代表編譯成功。)*

### 步驟 4：佈署與測試 (Patch)
1. 將新生成的 `usecode.uco` 複製到你的遊戲 Patch 目錄：`D:\U7_project\Ultima 7\patch\`。
2. **非常重要：** 將檔案重新命名為 `usecode`（刪除所有的副檔名）。
3. 開啟 Exult 引擎進入遊戲，與該 NPC 對話，驗證修改是否成功。

---

## 進階：大型漢化專案管理（總控腳本）

當你翻譯了越來越多的 NPC，將所有角色混合在一個大檔案會非常難以管理，且在 DOS/Windows 命令列中串接上百個檔案名稱會導致「命令列長度超限」錯誤。

最佳實踐方式是：**為每個角色建立獨立的 `.es` 腳本，並使用一個「總控腳本 (Master Script)」來統整編譯。**

1.  **建立獨立腳本**：例如 `iolo.es`, `spark.es`, `shamino.es`。
2.  **建立總控腳本**：建立一個名為 `main.es`（或 `build.es`）的文字檔，內容如下：
    ```c
    // 漢化進度清單：將翻譯完的腳本全部引入
    #include "iolo.es"
    #include "spark.es"
    #include "shamino.es"
    #include "lord_british.es"
    // 未來有新的 NPC 翻譯完，就加一行進來
    ```
3.  **極簡編譯指令**：未來你只需要編譯 `main.es`，編譯器會自動合併所有引入的檔案，並產出一個完整的 `usecode.uco` 更新檔：
    ```powershell
    & "C:\Program Files\Exult\Tools\ucc.exe" -o usecode.uco main.es
    ```

這套架構讓指令永遠保持簡短，同時能清晰地追蹤翻譯進度，若編譯出錯也能藉由註解掉特定的 `#include` 來快速除錯，完全符合現代軟體工程的管理方式。

---

## 檔案管理與翻譯對照
為了方便團隊合作與後續的對照、校正，強烈建議採用**「原版與翻譯版分離」**的方式進行存檔：
- 保留反編譯出來的原始腳本（如 `peter.es`）。
- 將翻譯後的腳本另存新檔（如 `peter_zh.es`）。
只需在總控腳本 `main.es` 中將 `#include` 指向翻譯版，就能在隨時比對原文的同時完成編譯。

---

## UI 函式注意事項與進階控制字元

### 1. UI 函式的翻譯原則
- **`message("...")`**：代表「正式對話框」，通常會在畫面下方出現頭像並暫停遊戲時間。引號內的文字請直接翻譯。
- **`UI_add_answer(["名字", "工作"])`**：這些字串是直接顯示在畫面上的對話選項，**必須**翻譯成中文。
- **`case "名字":` 與 `UI_remove_answer("名字")`**：為確保腳本邏輯正確跳轉，這裡的字串必須與 `UI_add_answer` 設定的中文完全一致。
- **頭頂飄字 (Floating Text) / 排程演出**：若遇到 `UI_delayed_execute_usecode_array(..., ["@文字@"])`，這代表直接在遊戲畫面上角色頭頂顯示文字的背景動畫。翻譯時只需更改 `@` 中間的文字，並**務必保留前後的 `@` 符號**（例如 `"@救命啊！@"`），否則引擎會無法辨識渲染邊界而報錯。

### 2. USECODE 控制字元 (Control Characters)
對話字串 `message("...")` 內常包含控制字元，翻譯時**強烈建議原封不動保留在對應位置**：
- **`*` (Wait/Click)**：暫停字串顯示，等待玩家點擊或按鍵後繼續。通常位於句尾。
- **`~~` (Pause/Delay)**：短暫停頓。創造時間上的小延遲，營造角色說話的節奏感。
- **`^` (Capitalize)**：強制將緊接在後面的「第一個英文字母」轉為大寫。常放在變數（如主角名字 `var0000`）之前。中文中無實質作用但建議保留。
- **`@` (Runic Font Toggle)**：常用於切換為「盧恩字母 (Runic)」字體，或是標記特殊物品邊界。刪除可能導致字體排版崩潰。
- **`~` (Break/Line)**：單單出現時通常代表強制換行或斷句符號。

---

## 常見問題與除錯 (FAQ)

*   **Q: 編譯時如果出現 Syntax Error 怎麼辦？**
    *   A: 請檢查你的翻譯文本中是否包含了未跳脫的雙引號 (`"`)。腳本中的字串必須使用 `\"` 來表示對話中的引號。
