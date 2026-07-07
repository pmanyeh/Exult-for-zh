import os
import shutil
import zipfile

# ==========================================
# 請在這裡設定您的路徑
# ==========================================
# 這是您已經整理好的「完美資料夾結構」範本 (包含 data, exult.cfg, Ultima_7 等)
TEMPLATE_DIR = r"D:\U7_project\Test_Portable"

# (選擇性) 從 GitHub Action 下載出來的最新 Exult.app 路徑。
# 如果您已經把最新版的 Exult.app 手動放到 Test_Portable 裡面了，這個可以留空 ""。
# 如果設定了這個路徑，腳本打包時會自動用它覆蓋掉範本裡的舊程式。
LATEST_EXULT_APP = "" # 例如: r"D:\U7_project\Exult-snapshot\Exult.app"

# 產出的 ZIP 檔與暫存資料夾名稱
OUTPUT_NAME = "Ultima7_BlackGate_zhTW_Portable_Mac"
OUTPUT_DIR = r"D:\U7_project\Ultima7_BlackGate_zhTW_Portable_Mac_Build"
OUTPUT_ZIP = r"D:\U7_project\Ultima7_BlackGate_zhTW_Portable_Mac.zip"

def inject_launcher(app_path):
    macos_dir = os.path.join(app_path, "Contents", "MacOS")
    launcher_path = os.path.join(macos_dir, "ExultLauncher")
    
    launcher_content = """#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_ROOT="$(dirname "$(dirname "$DIR")")"
PORTABLE_DIR="$(dirname "$APP_ROOT")"

cd "$PORTABLE_DIR"
exec "$DIR/exult" -c "exult.cfg"
"""
    # 寫入 launcher，並確保使用 LF 換行
    with open(launcher_path, 'w', newline='\n', encoding='utf-8') as f:
        f.write(launcher_content)
    print("已確保 ExultLauncher 啟動腳本植入成功。")

def modify_plist(app_path):
    plist_path = os.path.join(app_path, "Contents", "Info.plist")
    if not os.path.exists(plist_path):
        print(f"警告：找不到 {plist_path}")
        return

    with open(plist_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替換執行檔名稱 (如果已經被替換過就不影響)
    if "<string>exult</string>" in content:
        content = content.replace("<string>exult</string>", "<string>ExultLauncher</string>")
        with open(plist_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("已修改 Info.plist 指向 ExultLauncher。")
    else:
        print("Info.plist 已經是指向 ExultLauncher，無需修改。")

def zip_portable(source_dir, zip_filepath):
    print(f"開始打包 ZIP: {zip_filepath}")
    with zipfile.ZipFile(zip_filepath, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(source_dir):
            # 加入資料夾節點，賦予 755 權限
            for d in dirs:
                dir_path = os.path.join(root, d)
                arcname = os.path.join(OUTPUT_NAME, os.path.relpath(dir_path, source_dir)) + '/'
                dir_info = zipfile.ZipInfo(arcname)
                dir_info.external_attr = 0o40755 << 16 # 40000 = 目錄, 755 = rwxr-xr-x
                zf.writestr(dir_info, '')

            for file in files:
                file_path = os.path.join(root, file)
                
                # 略過 Mac 產生的暫存檔
                if file == '.DS_Store':
                    continue
                
                # 解壓縮後會包在 OUTPUT_NAME 這個主資料夾中
                arcname = os.path.join(OUTPUT_NAME, os.path.relpath(file_path, source_dir))
                
                info = zipfile.ZipInfo(arcname)
                
                # 賦予 Mac 執行權限 (不分大小寫)
                lower_file = file.lower()
                if lower_file == 'exult' or lower_file == 'exultlauncher' or lower_file.endswith('.command') or lower_file.endswith('.sh'):
                    info.external_attr = 0o100755 << 16 
                    print(f"[加入並賦予執行權限] {arcname}")
                else:
                    info.external_attr = 0o100644 << 16
                
                with open(file_path, 'rb') as f:
                    zf.writestr(info, f.read())
    print("打包完成！")

def main():
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    
    print(f"1. 複製範本資料夾結構 ({TEMPLATE_DIR})...")
    shutil.copytree(TEMPLATE_DIR, OUTPUT_DIR)

    if LATEST_EXULT_APP and os.path.exists(LATEST_EXULT_APP):
        print(f"2. 使用最新版 Exult.app 覆蓋...")
        target_app = os.path.join(OUTPUT_DIR, "Exult.app")
        if os.path.exists(target_app):
            shutil.rmtree(target_app)
        shutil.copytree(LATEST_EXULT_APP, target_app)

    print("3. 確保空資料夾 STATIC 存在...")
    static_dir = os.path.join(OUTPUT_DIR, "Ultima_7", "STATIC")
    os.makedirs(static_dir, exist_ok=True)

    print("4. 植入免安裝機制...")
    app_dir = os.path.join(OUTPUT_DIR, "Exult.app")
    inject_launcher(app_dir)
    modify_plist(app_dir)

    print("5. 進行 ZIP 打包...")
    zip_portable(OUTPUT_DIR, OUTPUT_ZIP)

    # 移除暫存資料夾
    shutil.rmtree(OUTPUT_DIR)

    print(f"\n全部完成！您的免安裝版壓縮包已生成在：{OUTPUT_ZIP}")

if __name__ == "__main__":
    main()
