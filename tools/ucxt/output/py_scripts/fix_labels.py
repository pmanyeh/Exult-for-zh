import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\004'
files = ['044E_zh.es', '044F_zh.es', '0450_zh.es']

replacements = {
    "name": "姓名",
    "job": "職業",
    "bye": "告辭"
}

for file in files:
    path = os.path.join(base_dir, file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for eng, chi in replacements.items():
            content = content.replace(f'"{eng}"', f'"{chi}"')
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Fixed labels")
