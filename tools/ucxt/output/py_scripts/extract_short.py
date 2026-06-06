import csv
import os
import re
import json

csv_path = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
es_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'

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

strings_to_translate = {}
file_to_strings = {}

for func_hex in files_to_process:
    func_id = func_hex.replace('H', '')
    es_file = os.path.join(es_dir, f'{func_id}.es')
    if not os.path.exists(es_file):
        continue
    
    with open(es_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = re.findall(r'\"(.*?)\"', content)
    file_to_strings[func_id] = []
    for m in matches:
        if len(m.strip()) > 0 and not re.match(r'^[a-zA-Z0-9_\.]+$', m) or ' ' in m:
            if m not in strings_to_translate:
                strings_to_translate[m] = ""
            file_to_strings[func_id].append(m)

print(f'Total files: {len(files_to_process)}')
print(f'Total unique strings to translate: {len(strings_to_translate)}')

with open(r'd:\git\exult-master\tools\ucxt\output\short_strings.json', 'w', encoding='utf-8') as f:
    json.dump(strings_to_translate, f, indent=4, ensure_ascii=False)
