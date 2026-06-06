import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
ids = ['08C6', '08DC']
strings_dict = {}

for fid in ids:
    path = os.path.join(folder, fid + '.es')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    strings = re.findall(r'"([^"\n]*?)"', content)
    unique_strings = list(dict.fromkeys(strings))
    strings_dict[fid] = [s for s in unique_strings if s.strip() and s not in ['blackgate']]

with open(r'd:\git\exult-master\tools\ucxt\output\extract_08C6_08DC.txt', 'w', encoding='utf-8') as f:
    for fid, st in strings_dict.items():
        f.write(f'--- {fid} ---\n')
        for i, s in enumerate(st):
            f.write(f'{i}: {s}\n')
