import os
import codecs
import subprocess

# 設定
BUILD_DIR = 'build_big5'
UCC_PATH = r'C:\Program Files\Exult\Tools\ucc.exe'
OUTPUT_UCO = 'usecode.uco'

def main():
    print("開始編譯 USECODE (UTF-8 -> Big5)...")
    
    # 建立暫存資料夾
    if not os.path.exists(BUILD_DIR):
        os.makedirs(BUILD_DIR)
        
    # 找到所有的 .es 檔案，讀取 UTF-8 並以 Big5 寫入 build_big5 資料夾
    es_files = [f for f in os.listdir('.') if f.endswith('.es')]
    for f in es_files:
        try:
            with codecs.open(f, 'r', 'utf-8') as fin:
                text = fin.read()
            
            # 解決「許功蓋」的終極解法：將結尾的 0x5C 暫時替換為 0x01，避免干擾 ucc.exe 的編譯器
            big5_bytes = text.encode('big5', errors='replace')
            out_bytes = bytearray()
            i = 0
            while i < len(big5_bytes):
                b = big5_bytes[i]
                if b >= 0x81:  # 雙位元組字元起頭
                    out_bytes.append(b)
                    if i + 1 < len(big5_bytes):
                        b2 = big5_bytes[i+1]
                        if b2 == 0x5C:
                            out_bytes.append(0x01)  # 替換為 0x01
                        else:
                            out_bytes.append(b2)
                        i += 2
                    else:
                        i += 1
                else:
                    out_bytes.append(b)
                    i += 1
            
            with open(os.path.join(BUILD_DIR, f), 'wb') as fout:
                fout.write(out_bytes)
            print(f"轉換編碼: {f} -> Big5 (暫存許功蓋字元為 0x01)")
        except Exception as e:
            # 有些檔案可能已經是 big5 或有其他編碼問題，這邊簡單略過
            print(f"略過 {f}: {e}")
            
    # 切換到 build_big5 資料夾執行 ucc.exe
    print("\n執行 ucc.exe 編譯...")
    try:
        # 在 build_big5 目錄底下編譯 main.es
        result = subprocess.run([UCC_PATH, '-o', OUTPUT_UCO, 'main.es'], 
                                cwd=BUILD_DIR, 
                                capture_output=True, text=True)
        
        if result.returncode == 0:
            print("OK! Compile successful.")
            
            # 把編譯好的 uco 搬回上一層，並進行二進位還原 (0x01 -> 0x5C)
            compiled_uco = os.path.join(BUILD_DIR, OUTPUT_UCO)
            if os.path.exists(compiled_uco):
                with open(compiled_uco, 'rb') as f:
                    uco_bytes = bytearray(f.read())
                    
                # 掃描並還原 [>=0x81] + [0x01] -> [>=0x81] + [0x5C]
                i = 0
                while i < len(uco_bytes) - 1:
                    if uco_bytes[i] >= 0x81 and uco_bytes[i+1] == 0x01:
                        uco_bytes[i+1] = 0x5C
                        i += 2
                    else:
                        i += 1
                
                with open(OUTPUT_UCO, 'wb') as f:
                    f.write(uco_bytes)
                print(f"Success: {OUTPUT_UCO} created and Big5 characters restored.")
        else:
            print("Compile failed:")
            print(result.stderr)
    except Exception as e:
        print(f"Error running ucc: {e}")

if __name__ == '__main__':
    main()
