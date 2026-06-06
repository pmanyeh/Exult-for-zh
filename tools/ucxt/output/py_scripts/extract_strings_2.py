import os, re

def extract(filename):
    path = os.path.join('zh_script', '005', filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    strings = set(re.findall(r'"([^"]*)"', content))
    print(f'=== {filename} ===')
    for s in sorted(list(strings)):
        if s and not s.startswith('zh_script') and s not in ['姓名', '職業', '告辭']:
            print(s)

extract('045D_zh.es')
extract('045E_zh.es')
