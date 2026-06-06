import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
batch = ['0401', '0403', '0404', '0405', '0406', '0407', '0408', '0409', '040A', '040B']

with open(r'd:\git\exult-master\tools\ucxt\output\batch_02_extract.txt', 'w', encoding='utf-8') as out:
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
