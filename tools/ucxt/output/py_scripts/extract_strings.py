import os, re
for f in ['045B_zh.es', '045C_zh.es']:
    path = os.path.join('zh_script', '005', f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    # match all strings in double quotes
    strings = set(re.findall(r'"([^"]*)"', content))
    print(f'=== {f} ===')
    for s in sorted(list(strings)):
        if s and not s.startswith('zh_script') and s not in ['姓名', '職業', '告辭']:
            print(s)
