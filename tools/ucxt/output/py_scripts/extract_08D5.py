import os
import re

path = r'd:\git\exult-master\tools\ucxt\output\es_scripts\08D5.es'

if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)
    unique = []
    for s in strings:
        if any(c.isascii() and c.isalpha() for c in s) and s not in unique:
            if not s.startswith('zh_script') and s != 'blackgate':
                unique.append(s)

    with open(r'd:\git\exult-master\tools\ucxt\output\08D5_extract.txt', 'w', encoding='utf-8') as f:
        for i, s in enumerate(unique):
            f.write(f'{i}: {s}\n')
