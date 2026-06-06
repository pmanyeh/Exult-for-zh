import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
batch = ['0466', '0467', '0468', '0469', '046A', '046B', '046C', '046D', '046E', '046F']

with open(r'd:\git\exult-master\tools\ucxt\output\batch_04_extract.txt', 'w', encoding='utf-8') as out:
    for fid in batch:
        path = os.path.join(folder, fid + '.es')
        if os.path.exists(path):
            with open(path, 'r', encoding='latin-1') as f:
                content = f.read()
            strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)
            unique = []
            for s in strings:
                if any(c.isascii() and c.isalpha() for c in s) and s not in unique:
                    if not s.startswith('zh_script') and s != 'blackgate' and not s.startswith('zh_'):
                        unique.append(s)
            
            out.write(f'--- {fid} ({len(unique)} unique strings) ---\n')
            for s in unique:
                out.write(f'{s}\n')
            out.write('\n')
