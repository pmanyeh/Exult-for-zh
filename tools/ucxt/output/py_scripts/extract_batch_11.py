import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_file = r'd:\git\exult-master\tools\ucxt\output\py_scripts\batch_11_strings.txt'

files_to_extract = [f'04{hex(i)[2:].upper()}' for i in range(0xC8, 0xD1+1)]

all_strings = set()
for fid in files_to_extract:
    src_path = os.path.join(folder, fid + '.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='latin-1') as f:
            content = f.read()
            
        for m in re.finditer(r'message\("(.*?)"\);', content):
            s = m.group(1)
            if re.search(r'[a-zA-Z]', s):
                all_strings.add(s)
                
        for m in re.finditer(r'UI_add_answer\("(.*?)"\);', content):
            s = m.group(1)
            if re.search(r'[a-zA-Z]', s):
                all_strings.add(s)
                
        for m in re.finditer(r'case "(.*?)":', content):
            s = m.group(1)
            if re.search(r'[a-zA-Z]', s):
                all_strings.add(s)

with open(out_file, 'w', encoding='utf-8') as file:
    for s in sorted(list(all_strings)):
        file.write(f'{s}\n')

print(f'Extracted {len(all_strings)} strings for Batch 11.')
