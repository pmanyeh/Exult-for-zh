import csv
import subprocess
import os

def main():
    csv_file = 'blackgate_functions_report.csv'
    output_dir = 'es_scripts'
    ucxt_path = r'C:\Program Files\Exult\Tools\ucxt.exe'
    usecode_path = r'D:\U7_project\Ultima 7\STATIC\USECODE'

    # 建立存放提取出來的腳本的資料夾
    os.makedirs(output_dir, exist_ok=True)

    print(f"開始分析 {csv_file} ...")
    extract_count = 0

    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            func = row['Function']
            try:
                str_count = int(row['String Count'])
            except ValueError:
                continue
                
            # 只有字串數量大於 0 的 function 才提取
            if str_count > 0:
                # 將 '0096H' 轉換為 '0096'
                func_id = func[:-1] if func.endswith('H') else func
                out_file = os.path.join(output_dir, f"{func_id}.es")
                
                # 設定要執行的指令 (對應 ucxt 的語法)
                cmd = [ucxt_path, '-bg', '-fs', f'-i{usecode_path}', func_id]
                
                print(f"正在提取 Function {func_id} ({str_count} 個字串) ...", end=" ", flush=True)
                
                # 執行指令並擷取輸出
                try:
                    result = subprocess.run(cmd, capture_output=True)
                    if result.returncode == 0:
                        # 使用二進位模式(wb)寫入，原封不動保存 ucxt 的輸出，避免編碼與 BOM 問題
                        with open(out_file, 'wb') as out_f:
                            out_f.write(result.stdout)
                        print("OK")
                        extract_count += 1
                    else:
                        print("FAILED")
                        print(result.stderr.decode('utf-8', errors='ignore'))
                except Exception as e:
                    print(f"ERROR: {e}")

    print(f"\n批次提取完成！共提取了 {extract_count} 個腳本，已存放在 '{output_dir}' 資料夾中。")

if __name__ == '__main__':
    main()
