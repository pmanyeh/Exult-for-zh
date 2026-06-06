import sys
import re
import json

def extract_text(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: 找不到檔案 '{input_file}'")
        return
    except UnicodeDecodeError:
        # 萬一是 ascii 或其他編碼，嘗試使用預設讀取
        with open(input_file, 'r') as f:
            content = f.read()

    # 使用正規表示式提取所有雙引號內的字串 (支援跳脫字元 \")
    # 說明: 匹配雙引號，接著是(非雙引號與非斜線)或(斜線加任意字元)的無限次重複，最後是雙引號
    matches = re.findall(r'"((?:[^"\\]|\\.)*)"', content)
    
    # 移除重複字串，並保持出現順序
    unique_strings = list(dict.fromkeys(matches))
    
    # 排除清單 (引擎關鍵字，不需要翻譯)
    exclude_list = ["blackgate", "serpentisle"]
    
    translation_dict = {}
    for s in unique_strings:
        if s not in exclude_list and s.strip() != "":
            # 將提取到的字串作為 key，預設的 value 也是原本的字串
            translation_dict[s] = s
            
    # 將結果輸出為 JSON 格式，方便對照翻譯
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translation_dict, f, ensure_ascii=False, indent=4)
        
    print(f"成功！已提取 {len(translation_dict)} 條字串，並儲存至 '{output_file}'")
    print(f"請打開 '{output_file}' 進行翻譯，完成後使用 apply_translation.py 導入。")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("【用法】: python extract_text.py <輸入的腳本.es> <輸出的字典檔.json>")
        print("【範例】: python extract_text.py peter.es peter_dict.json")
    else:
        extract_text(sys.argv[1], sys.argv[2])
