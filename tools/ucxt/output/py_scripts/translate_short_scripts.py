import os

es_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
zh_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script'

files_to_translate = {
    '011C.es': [
        ('\" o\'clock\"', '\" 點鐘\"'),
        ('\"Noon\"', '\"正午\"')
    ],
    '01EF.es': [
        ('"@Here kitty, kitty@"', '"@小貓咪，來這裡@"'),
        ('"@Meow@"', '"@喵@"')
    ],
    '01F0.es': [
        ('"@Good doggy.@"','"@乖狗狗。@"'),
        ('"@Arf@"', '"@汪@"'),
        ('"@Bark@"', '"@汪汪@"')
    ],
    '01F4.es': [
        ('"@Moo@"', '"@哞@"')
    ],
    '020A.es': [
        ('"Locked"', '"上鎖了"')
    ]
}

def get_zh_path(filename):
    # e.g. 011C.es -> 001/011C_zh.es
    hex_prefix = filename[:3] # '011'
    folder = hex_prefix
    if folder not in ['001', '002', '003', '004']:
        # fallback to 'other' if not 001..004
        folder = 'other'
    return os.path.join(zh_dir, folder, filename.replace('.es', '_zh.es'))

created_files = []

for filename, replacements in files_to_translate.items():
    in_path = os.path.join(es_dir, filename)
    out_path = get_zh_path(filename)
    
    with open(in_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for eng, chi in replacements:
        content = content.replace(eng, chi)
        
    # Ensure directory exists
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    created_files.append(out_path)

# Add to main_Other.es
main_other_path = r'd:\git\exult-master\tools\ucxt\output\main_Other.es'
with open(main_other_path, 'a', encoding='utf-8') as f:
    f.write('\n// 系統與動物短句腳本\n')
    for out_path in created_files:
        # Convert absolute path to relative include path: zh_script/xxx/xxx.es
        rel_path = out_path.split('output\\')[1].replace('\\', '/')
        f.write(f'#include "{rel_path}"\n')

print("Translated 5 short scripts.")
