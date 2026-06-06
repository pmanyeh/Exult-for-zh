import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
for fid in ['0356', '03F7']:
    path = os.path.join(folder, fid + '.es')
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)
        print(f'--- {fid} ---')
        unique = []
        for s in strings:
            if any(c.isascii() and c.isalpha() for c in s) and s not in unique and not s.startswith('zh_'):
                unique.append(s)
        for i, s in enumerate(unique):
            print(f'{i}: {s}')
