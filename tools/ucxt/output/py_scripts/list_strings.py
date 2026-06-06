import os, re
folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\char200\01'
for fname in os.listdir(folder):
    if not fname.endswith('.es'): continue
    path = os.path.join(folder, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # match anything in double quotes except if it has \n
    strings = set(re.findall(r'"([^"\n]*?)"', content))
    # ignore game names, script paths etc
    strings = {s for s in strings if s not in ['blackgate', ''] and not s.startswith('zh_script')}
    if strings:
        print(f'{fname}: {strings}')
