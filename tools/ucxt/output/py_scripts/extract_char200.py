import csv
import math
import os
import shutil

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
src_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
dest_base = r'd:\git\exult-master\tools\ucxt\output\zh_script\char200'

files_to_translate = []

with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        row = {k.strip(): v for k, v in row.items() if k is not None}
        translated = row.get('Translated', '').strip()
        if translated.lower() != 'yes':
            try:
                total_chars = int(row.get('Total Characters', 0))
                if 0 < total_chars <= 200:
                    func_id = row['Function'].replace('H', '').strip()
                    files_to_translate.append((func_id, total_chars))
            except ValueError:
                pass
            except KeyError:
                pass

print(f"Found {len(files_to_translate)} files with Total Characters <= 200.")

folders_needed = math.ceil(len(files_to_translate) / 20)

for i in range(folders_needed):
    batch = files_to_translate[i*20 : (i+1)*20]
    folder_name = f"{i+1:02d}" # '01', '02', etc.
    dest_dir = os.path.join(dest_base, folder_name)
    os.makedirs(dest_dir, exist_ok=True)
    
    print(f"Creating folder {folder_name} with {len(batch)} files...")
    
    main_es_content = ""
    for func_id, _ in batch:
        src_file = os.path.join(src_dir, f"{func_id}.es")
        dest_file = os.path.join(dest_dir, f"{func_id}_zh.es")
        if os.path.exists(src_file):
            shutil.copy2(src_file, dest_file)
            main_es_content += f'#include "zh_script/char200/{folder_name}/{func_id}_zh.es"\n'
        else:
            print(f"Warning: {src_file} not found!")
    
    # create a main include file for this batch
    main_file = os.path.join(dest_base, f"main_char200_{folder_name}.es")
    with open(main_file, 'w', encoding='utf-8') as f:
        f.write(main_es_content)
