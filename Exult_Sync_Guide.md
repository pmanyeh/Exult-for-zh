# Exult 中文化專案 — 與上游同步操作指南

> 本文件說明如何定期從 Exult 官方上游取得最新程式碼，並將我們的中文化修改合併進去，避免版本越差越遠。

---

## 背景說明：我們目前的問題

本專案的 git 歷史與 upstream 是**斷鏈**（orphan history）的——我們的初始 commit 沒有 parent，不是從 upstream 的某個 commit 分支出去的。這表示：

- `git rebase` 無法自動使用
- 需要改用 **`git merge --allow-unrelated-histories`** 策略

> [!IMPORTANT]
> **建議在進行下面任何操作前，先備份整個專案資料夾！**

---

## 第一部分：修復斷鏈並建立正確的 Fork 關係（只需做一次）

這是最重要的一步，做完之後往後同步就會輕鬆很多。

### 步驟 A：確認 remote 設定正確

```bash
git remote -v
```

應看到兩個 remote：
- `origin` → 你自己的 GitHub fork（`pmanyeh/Exult-for-zh`）
- `upstream` → 官方 Exult（`exult/exult`）

如果沒有 `upstream`，請加入：

```bash
git remote add upstream https://github.com/exult/exult.git
git fetch upstream
```

---

### 步驟 B：建立一個新的「接枝」分支（Grafting Branch）

目標：以 upstream 最新 master 為起點，把我們的修改移植過去。

```bash
# 1. 先確保 upstream 是最新的
git fetch upstream

# 2. 從 upstream master 建立一個新的工作分支
git checkout -b zh-sync upstream/master

# 3. 強制將我們修改過的所有程式檔案「複製」進這個分支
#    （每個我們修改過的檔案都執行一次）
git checkout main -- shapes/ttf_font.cc
git checkout main -- shapes/font.cc
git checkout main -- shapes/font.h
git checkout main -- usecode/conversation.cc
git checkout main -- usecode/conversation.h
git checkout main -- usecode/ucinternal.cc
git checkout main -- exult.cc
git checkout main -- exult.h
git checkout main -- gumps/Spellbook_gump.cc
git checkout main -- gumps/Spellbook_gump.h
git checkout main -- msvcstuff/vs2019/vcpkg.json
git checkout main -- msvcstuff/vs2019/Exult.sln

# 4. 複製我們全新新增的工具目錄
git checkout main -- tools/Magic_voices/
git checkout main -- build_tools.ps1
git checkout main -- msvcstuff/vs2019/textpack/textpack.vcxproj

# 5. 複製遊戲用的中文字型資源
git checkout main -- data/chinese00.ttf
git checkout main -- data/chinese_small00.ttf
```

### 步驟 C：建置並測試，確認修改正確移植

用 Visual Studio 開啟 `msvcstuff/vs2019/Exult.sln`，執行 Build，確認沒有錯誤後：

```bash
# 6. 確認無誤後，提交這個「接枝」commit
git add .
git commit -m "chore: graft Chinese localization patches onto upstream/master"
```

### 步驟 D：切換回主分支，並讓它指向新的歷史

```bash
# 7. 這一步讓我們的 main 分支從此與 upstream 共享同一個歷史根源
git checkout main
git reset --hard zh-sync
git push origin main --force-with-lease
```

> [!WARNING]
> `--force-with-lease` 會覆蓋 GitHub 上的歷史。如果團隊有其他人也 push 過，請先協調好再執行。

---

## 第二部分：往後如何定期同步（日常操作）

完成第一部分後，以後每次官方 Exult 有更新，就依照以下流程處理。

### 標準同步流程

```bash
# Step 1：取得官方最新的程式碼
git fetch upstream

# Step 2：確認上游有哪些新的 commit（查看差異）
git log HEAD..upstream/master --oneline

# Step 3：切換到主分支，執行 merge
git checkout main
git merge upstream/master
```

### 處理合併衝突（Conflict）

如果步驟 3 出現衝突（Conflict），git 會列出衝突的檔案。  
根據 [Exult_Changes_Summary.md](./Exult_Changes_Summary.md) 的記錄，**以下是最容易發生衝突的檔案**，以及處理方針：

| 衝突檔案 | 處理方針 |
|---|---|
| `shapes/ttf_font.cc` | **保留我們的版本**為主，若官方有 Bug Fix，手動加入 |
| `shapes/font.cc` / `font.h` | **保留我們的版本**為主，注意 `font_path` 相關程式碼 |
| `usecode/conversation.cc` | **謹慎合併**，確保「左靠齊排版」與「`get_choice_rect()`」相關修改不被覆蓋 |
| `usecode/conversation.h` | **保留我們的版本**，確保 `get_choice_rect()` 函式宣告保留 |
| `usecode/ucinternal.cc` | **謹慎合併**，確保鍵盤導覽功能（方向鍵 + Enter）相關程式碼不被覆蓋 |
| `exult.cc` / `exult.h` | **謹慎合併**，確保 `Get_click()` 的 `keycode` 參數仍然存在 |
| `gumps/Spellbook_gump.cc` | **謹慎合併**，確保中文法術名稱顯示相關程式碼不被覆蓋 |
| `msvcstuff/vs2019/vcpkg.json` | 若上游更新了依賴版本，同步更新即可，確保保留 `freetype` 和 `dirent` |

### 解決衝突的工具指令

```bash
# 查看所有衝突的檔案
git diff --name-only --diff-filter=U

# 用 VS Code 的合併工具開啟衝突檔案（推薦）
code .

# 解決完所有衝突後，標記為已解決並提交
git add <已解決的檔案>
git commit -m "merge: sync with upstream/master YYYY-MM-DD"

# 推送到自己的 GitHub
git push origin main
```

---

## 第三部分：建議的長期分支策略

為了讓版本管理更清晰，建議日後維持以下分支結構：

```
upstream/master ──────────────────────────────────── (官方)
                    ↘ merge
main ──────────────────────────────────────────────── (我們的穩定版，包含所有中文化修改)
                    ↘ feature branch
feature/XXX ──────────────────────────────────────── (開發新功能用)
```

| 分支名稱 | 用途 |
|---|---|
| `main` | 主分支，保持可編譯、可遊玩的穩定狀態 |
| `feature/keyboard-nav` | 開發鍵盤導覽等新功能時使用 |
| `feature/font-rendering` | 繼續調整字型渲染時使用 |

**每次開始新功能**：
```bash
git checkout -b feature/功能名稱 main
```

**功能完成後合併回 main**：
```bash
git checkout main
git merge --no-ff feature/功能名稱
git push origin main
```

---

## 第四部分：應該加入 .gitignore 的項目

確認以下內容已在 `.gitignore` 中，避免把不必要的建置輸出 commit 進去：

```gitignore
# Visual Studio 建置輸出
msvcstuff/vs2019/Debug/
msvcstuff/vs2019/Release/
msvcstuff/vs2019/x64/
msvcstuff/vs2019/vcpkg_installed/

# 建置產物（根目錄）
*.exe
*.dll
*.pdb
*.lib
*.exp

# 環境設定
.env
```

---

## 快速備忘（給團隊夥伴）

```bash
# === 日常同步三步驟 ===
git fetch upstream
git merge upstream/master
# → 若有 conflict，手動解決後 git add & git commit
git push origin main

# === 緊急還原到上一個安全狀態 ===
git log --oneline -10   # 找到上一個安全 commit 的 hash
git reset --hard <hash>
```
