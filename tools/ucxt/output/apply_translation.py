import sys
import json

def apply_translation(input_es, dict_json, output_es):
    try:
        with open(dict_json, 'r', encoding='utf-8') as f:
            translation_dict = json.load(f)
    except FileNotFoundError:
        print(f"Error: 找不到字典檔案 '{dict_json}'")
        return
    except json.JSONDecodeError:
        print(f"Error: 字典檔案 '{dict_json}' 格式錯誤，請確認它是標準的 JSON 格式。")
        return

    try:
        with open(input_es, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        with open(input_es, 'r') as f:
            content = f.read()

    # 計算替換次數
    replacement_count = 0

    # 執行文本替換
    for original, translated in translation_dict.items():
        # 只有當有實際翻譯時才進行替換
        if original != translated and translated.strip() != "":
            # 將前後加上雙引號以確保精確匹配（避免替換到變數名稱等非對話字串）
            old_str = f'"{original}"'
            new_str = f'"{translated}"'
            
            if old_str in content:
                content = content.replace(old_str, new_str)
                replacement_count += 1
            
    # 輸出成無 BOM 的 UTF-8 檔案 (ucc.exe 需求)
    with open(output_es, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"成功！共替換了 {replacement_count} 條字串，並已輸出至 '{output_es}'")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("【用法】: python apply_translation.py <輸入的腳本.es> <字典檔.json> <輸出的腳本.es>")
        print("【範例】: python apply_translation.py peter.es peter_dict.json peter_zh.es")
    else:
        apply_translation(sys.argv[1], sys.argv[2], sys.argv[3])
