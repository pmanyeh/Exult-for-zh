# Exult `ucxt` (Usecode Extractor) 解包與翻譯指南

這是一份寫給 Ultima VII (創世紀 7) 漢化與改版專案團隊的技術參考文件。內容涵蓋了如何正確避開 `ucxt` 的長年 Bug 來萃取遊戲腳本 (Usecode)，以及後續如何打包翻譯內容。

---

## 1. 什麼是 `ucxt`？
`ucxt` 是 Exult 專案中用來**反組譯 (Disassemble)** 與**解包** U7 核心邏輯檔 `USECODE` 的工具。遊戲中所有的劇情、對話、事件觸發條件，全部都寫在 `USECODE` 這個龐大的二進位檔案中。

---

## 2. 正確的解包指令 (避開 Bug)

由於 `ucxt` 內部處理輸出檔案 (`-ofile`) 的程式碼存在記憶體生命週期錯誤 (Lifetime bug)，直接使用 `-ofile` 參數會導致產出 `0 bytes` 的空檔案。

為了解決這個問題，我們必須使用終端機原生的資料流導向功能（`>`）來接收輸出。

### 解包標準指令 (以 Black Gate 黑門為例)：
請開啟 Windows 命令提示字元 (cmd) 或 PowerShell，並切換至 `ucxt.exe` 所在的目錄（例如 `C:\Program Files\Exult\Tools`），然後執行：

```bash
ucxt -bg -i"D:\U7_project\Ultima 7\STATIC\USECODE" -a -ftt > "D:\U7_project\Ultima 7\STATIC\blackgate_translation.xml"
```

### 參數解說：
*   `-bg`：指定遊戲為 Black Gate (若是 Serpent Isle 請改成 `-si`)，這能讓工具正確載入該版本的指令集 (Opcodes)。
*   `-i"絕對路徑"`：指定來源的 `USECODE` 檔案。注意 `-i` 後面**不能有空白**。
*   `-a`：(All) 提取所有的函數 (Functions)。
*   `-ftt`：(Format: Translation Table) 指定輸出為適合翻譯的 XML 格式。
*   `> "絕對路徑"`：將螢幕上的輸出攔截並存成 XML 檔案，這完美繞過了 `ucxt` 本身的寫檔 Bug。

> [!NOTE]
> 執行時若出現 `Warning: configuration file 'data/u7misc.data' is being ignored...` 等警告，請安心忽略。這代表工具成功讀取了 Exult 安裝目錄下的正確對照檔。

---

## 3. 檔案結構與翻譯方式

產出的 XML 檔案結構如下：

```xml
<trans>
    <0x0096>
        <0x0000>
        `@The sails must be furled before the planks are raised.@`
        </>
    </>
</trans>
```

*   **`<0x0096>`**：這是 **Function ID (函數編號)**。U7 中每個 NPC、物品或事件都有對應的函數編號。
*   **`<0x0000>`**：字串在此函數中的偏移量/識別碼。
*   **字串內容**：被 `@` 或反引號包圍的英文即為原文。翻譯時，請**直接修改英文部分**，並保留 `@` 符號與 XML 標籤不動。

---

## 4. 如何打包回遊戲？

這是在 Exult 專案中最常遇到的技術門檻。`ucxt -ftt` 產生的 XML 主要是為了方便「外部翻譯工具」處理而設計的，**Exult 官方並沒有提供直接將這個 XML 轉回 `USECODE` 的內建打包工具**。

若要將翻譯好的文字放回遊戲，通常有以下幾種做法，團隊可依據技術能力選擇：

### 做法一：使用社群翻譯工具 (推薦給純文字漢化團隊)
在海外的 Ultima 改版社群中，有開發者製作了專門讀取這個 XML 並 Patch (覆寫) 回原始 `USECODE` 的外部腳本 (通常以 Python 或 C# 撰寫，如 `U7TT` - Ultima 7 Translation Tool)。
*   **優點**：不需接觸程式碼，專心修改 XML 即可。
*   **缺點**：需要去各大論壇或 GitHub 尋找並測試社群提供的腳本。

### 做法二：使用 Assembly (彙編) 模式重新組譯 (適合深度改版)
如果你們不僅要漢化，還要修改遊戲邏輯，建議不要匯出 XML。
1. 將匯出指令的 `-ftt` 改為 **`-fa`** (Assembler Format)。
2. 工具會導出一份包含所有對話與邏輯的彙編腳本 (`.uc` 檔)。
3. 在腳本中進行翻譯或邏輯修改。
4. 使用 Exult 提供的 `wuc` (Write Usecode) 工具，將修改後的彙編腳本重新編譯成二進位的 `USECODE`。

### 做法三：使用 `ucc` 重寫特定函數
Exult 提供了強大的 `ucc` (Usecode Compiler) 工具。如果只需要修改幾個特定人物的對話，可以自己寫一份簡單的 `.uc` (C 語言風格) 腳本，透過 `ucc` 編譯並掛載為 Patch。遊戲在讀取時，Patch 資料夾裡的函數會優先取代 `STATIC\USECODE` 裡面的同名函數。

---

## 5. 系統文本 (非對話文字)
請注意，`USECODE` 裡面主要是「對話」與「劇情文本」。
遊戲中的「UI 介面」、「物品名稱」、「系統提示」等，通常存在於 `text.flx` 之中。
針對這部分，需要使用 Exult 的另一套工具：
*   解包：`textpack -x text.flx strings.list`
*   打包：`textpack -c text.flx strings.list`
