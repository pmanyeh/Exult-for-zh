import glob
import re

for filepath in glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\001\047*.es'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_quote(m):
        inner = m.group(1)
        if not inner.startswith('"') and not inner.startswith('var') and not inner.startswith('gflags') and not inner.startswith('Func') and not inner.startswith('UI_'):
            return f'message("{inner}");'
        return m.group(0)

    new_content = re.sub(r'message\((.*?)\"\);', replace_quote, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed quotes in {filepath}')
