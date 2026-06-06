import os
import csv
import re

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'
out_csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'
zh_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script'

def has_chinese(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Check if there are any Chinese characters
            if re.search(r'[\u4e00-\u9fff]', content):
                return True
    except Exception:
        pass
    return False

# Collect all translated files
translated_funcs = set()
for root, dirs, files in os.walk(zh_dir):
    for filename in files:
        if filename.endswith('.es'):
            # Extract function ID from filename, e.g., 011C_zh.es or 0417.es
            base_name = filename.split('_')[0].split('.')[0]
            if len(base_name) == 4:
                filepath = os.path.join(root, filename)
                if has_chinese(filepath):
                    translated_funcs.add(base_name.upper())

updated_rows = []
total_with_strings = 0
translated_count = 0
newly_translated = 0

with open(csv_file, 'r', encoding='utf-8-sig', errors='ignore') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    if 'Translated' not in fieldnames:
        fieldnames.append('Translated')
        
    for row in reader:
        c = int(row.get('String Count', 0))
        func_hex = row.get('Function', '')
        
        if c > 0:
            total_with_strings += 1
            
            clean_id = func_hex[:-1].zfill(4).upper()
            is_translated = (row.get('Translated') == 'Yes')
            
            if clean_id in translated_funcs:
                if not is_translated:
                    newly_translated += 1
                row['Translated'] = 'Yes'
                translated_count += 1
            elif is_translated:
                translated_count += 1
                
        updated_rows.append(row)

with open(out_csv_file, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(updated_rows)

percentage = (translated_count / total_with_strings) * 100 if total_with_strings > 0 else 0

print(f"Update complete!")
print(f"Newly marked as translated: {newly_translated}")
print(f"Total functions with strings: {total_with_strings}")
print(f"Total translated: {translated_count}")
print(f"Current completion percentage: {percentage:.2f}%")
