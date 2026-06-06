import os
import re

with open(r'd:\git\exult-master\tools\ucxt\output\es_scripts\009A.es', 'r', encoding='utf-8') as f:
    content = f.read()

strings = re.findall(r'"([^"\n]*?)"', content)

with open(r'd:\git\exult-master\tools\ucxt\output\009A_strings.txt', 'w', encoding='utf-8') as f:
    for i, s in enumerate(dict.fromkeys(strings)):
        if s.strip() and s not in ['blackgate']:
            f.write(f'{i}: {s}\n')
