import zipfile
import os

# 您要打包的資料夾路徑
source_dir = r"D:\U7_project\Test_Portable"
# 產出的壓縮檔路徑
output_zip = r"D:\U7_project\Ultima7_BlackGate_zhTW_v1.1_for_Mac.zip"

def create_mac_zip():
    print(f"開始打包: {output_zip}")
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                file_path = os.path.join(root, file)
                # 取得相對路徑，並讓解壓縮後有一個主資料夾包住內容
                arcname = os.path.join("Ultima7_BlackGate_zhTW_for_Mac", os.path.relpath(file_path, source_dir))
                
                # 建立 Zip 檔案資訊
                info = zipfile.ZipInfo(arcname)
                
                # 核心關鍵：判斷是否為需要執行的檔案
                if file == 'exult' or file == 'ExultLauncher' or file.endswith('.command'):
                    # 賦予 755 (rwxr-xr-x) 權限，Mac 上即可執行
                    info.external_attr = 0o100755 << 16
                    print(f"[加入並賦予執行權限] {arcname}")
                else:
                    # 一般檔案 644 (rw-r--r--)
                    info.external_attr = 0o100644 << 16
                    print(f"[一般加入] {arcname}")
                
                # 將檔案內容寫入壓縮檔
                with open(file_path, 'rb') as f:
                    zf.writestr(info, f.read())
                    
    print("\n打包完成！這個 Zip 檔案給 Mac 玩家解壓縮後，不需打指令就可以直接雙擊遊玩了。")

if __name__ == "__main__":
    create_mac_zip()
