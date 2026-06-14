# Exult 專案建置完整指南 (Visual Studio 環境)

這是一份為 Windows (使用 Visual Studio) 環境整理的 Exult 專案建置完整指南。這份指南可以讓團隊中的其他人順利從零開始建立開發環境。

## 1. 系統需求與開發工具準備

要順利編譯 Exult，請務必確認安裝了以下工具：

* **Visual Studio 2019 或 2022 (Community 版本即可)**：
  * 安裝時請務必勾選 **「使用 C++ 的桌面開發」 (Desktop development with C++)**。
  * 請確認有安裝 **MSVC v142 (VS 2019) 或 v143 (VS 2022) 的 C++ 建置工具**。
  * > [!WARNING]
    > **不支援 Visual Studio 2017**，因為其編譯器無法完全支援 Exult 所需的 C++17 語法。
* **Git**：用來取得原始碼與套件管理工具。

## 2. 取得 Exult 原始碼

使用 Git 將專案解包（Clone）到你想要的本機目錄下：

```bash
git clone https://github.com/exult/exult.git
cd exult
```

## 3. 安裝與設定 vcpkg (第三方函式庫管理器)

Exult 使用微軟官方的 **vcpkg** 來自動管理所有的 C++ 第三方函式庫。設定好之後，所有的套件安裝都會自動化。

如果你還沒有安裝過 vcpkg，請在終端機 (或 PowerShell) 執行以下指令來全域安裝：

```cmd
# 1. 將 vcpkg 原始碼 clone 到你的電腦上 (可以放在任意路徑，例如 C:\vcpkg)
git clone https://github.com/microsoft/vcpkg.git C:\vcpkg

# 2. 進入該目錄並執行安裝腳本
cd C:\vcpkg
.\bootstrap-vcpkg.bat

# 3. 將 vcpkg 整合進 Visual Studio (這一步很重要！)
.\vcpkg integrate install
```

> [!NOTE]
> 執行完 `integrate install` 後，Visual Studio 就具備自動辨識與下載專案套件的能力了。

## 4. 專案依賴的第三方函式庫 (會自動安裝)

有了 vcpkg 之後，**你不需要手動下指令安裝單一函式庫**。Exult 已經在專案裡的 `msvcstuff\vs2019\vcpkg.json` 定義了清單，包含：

* `sdl3` (核心的影音/視窗框架)
* `libpng`、`zlib`、`freetype` (圖片處理與字型)
* `libogg`、`libvorbis` (音訊格式)
* `libmt32emu`、`fluidsynth` (MIDI 聲音模擬)
* `dirent` (目錄操作)

當你第一次在 VS 啟動建置時，vcpkg 會自動在背景抓取這些函式庫的原始碼並進行編譯。

## 5. 使用 Visual Studio 編譯專案

1. 開啟 Visual Studio。
2. 點擊「開啟專案或方案」，選擇 Exult 原始碼目錄下的 `msvcstuff\vs2019\Exult.sln` 方案檔。
3. 在 VS 上方的工具列，選擇你要的建置組態：
   * 一般開發除錯選 **`Debug`**，要封裝釋出選 **`Release`**。
   * 平台可選擇 **`x64`** 或 **`x86`**。
4. 在右側的方案總管中，右鍵點擊整個方案，選擇 **「建置方案」(Build Solution)** (或按下 `Ctrl + Shift + B`)。

> [!WARNING]
> **第一次建置會花費非常長的時間**。因為 vcpkg 會在背後從零開始編譯 SDL3、Freetype 等所有相依套件。第二次以後建置就會非常快了。

## 6. 編譯結果與如何執行

建置成功後：

1. 產生的執行檔（如 `Exult.exe` 以及編輯器 `exult_studio.exe`）與所有用到的 DLL 檔案，都會被**自動輸出到 Exult 的專案根目錄下**。
2. 建置過程也會一併執行內部工具 (例如 expack)，自動幫你產生好遊戲需要的 `.flx` 資料檔。
3. **要測試遊戲的話**：
   你需要有原版 Ultima VII (黑月之門 或 巨蛇島) 的遊戲檔案。將原版遊戲資料夾內的 `STATIC` 目錄，複製到 Exult 根目錄下對應的 `blackgate` 或 `serpentisle` 資料夾中。
4. 雙擊根目錄的 `Exult.exe`，就可以成功啟動並享受遊戲了！
