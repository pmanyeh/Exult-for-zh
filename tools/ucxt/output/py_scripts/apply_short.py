import os
import json
import csv
import re

csv_path = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
es_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
zh_short_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\short'
json_path = r'd:\git\exult-master\tools\ucxt\output\short_strings.json'
main_short_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_ShortScripts.es'

if not os.path.exists(zh_short_dir):
    os.makedirs(zh_short_dir)

with open(json_path, 'r', encoding='utf-8') as f:
    translations = json.load(f)

# Collect files to process
files_to_process = []
with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        if len(row) > 1 and row[1].isdigit():
            count = int(row[1])
            if 0 < count <= 5:
                if len(row) <= 3 or row[3].strip() != 'Yes':
                    files_to_process.append(row[0])

# Keep track of updated files to update CSV
updated_files = set()
new_includes = []

for func_hex in files_to_process:
    func_id = func_hex.replace('H', '')
    es_file = os.path.join(es_dir, f'{func_id}.es')
    if not os.path.exists(es_file):
        continue
        
    with open(es_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace strings safely
    for eng, zh in translations.items():
        if zh and eng != zh:
            content = content.replace('"' + eng + '"', '"' + zh + '"')
            
    zh_file_name = f'{func_id}_zh.es'
    zh_file_path = os.path.join(zh_short_dir, zh_file_name)
    
    with open(zh_file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    updated_files.add(func_hex)
    new_includes.append(f'#include "zh_script/short/{zh_file_name}"')

# Update main_ShortScripts.es
if new_includes:
    with open(main_short_path, 'r', encoding='utf-8') as f:
        existing_lines = set(line.strip() for line in f)
        
    with open(main_short_path, 'a', encoding='utf-8') as f:
        for inc in new_includes:
            if inc not in existing_lines:
                f.write(inc + '\n')

# Update CSV
temp_csv_path = csv_path + '.tmp'
with open(csv_path, 'r', encoding='utf-8') as infile, open(temp_csv_path, 'w', encoding='utf-8', newline='') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    for row in reader:
        if len(row) > 0 and row[0] in updated_files:
            while len(row) < 5:
                row.append('')
            row[3] = 'Yes'
            if not row[4]:
                row[4] = 'Done'
        writer.writerow(row)

os.replace(temp_csv_path, csv_path)

print(f"Successfully processed {len(updated_files)} short scripts.")
