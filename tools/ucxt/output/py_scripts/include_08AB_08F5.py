import glob, os

files = glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\08AB~08F5\*.es')
files = [os.path.basename(f) for f in files if '重翻' not in f and not os.path.basename(f).startswith('main_')]

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\08AB~08F5\main_08AB_08F5.es', 'w', encoding='utf-8') as f:
    for file in files:
        f.write('#include "zh_script/08AB~08F5/' + file + '"\n')
        
# Remove from short
short_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_ShortScripts.es'
with open(short_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
lines = [l for l in lines if '08AE_zh.es' not in l and '08F4_zh.es' not in l]
with open(short_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

# Remove from 010
main_010_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\010\main_010.es'
if os.path.exists(main_010_path):
    with open(main_010_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    lines = [l for l in lines if '08C5_zh.es' not in l and '08C6_zh.es' not in l]
    with open(main_010_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

# Add to main.es
main_path = r'd:\git\exult-master\tools\ucxt\output\main.es'
with open(main_path, 'r', encoding='utf-8') as f:
    main_content = f.read()
if 'main_08AB_08F5.es' not in main_content:
    main_content += '#include "zh_script/08AB~08F5/main_08AB_08F5.es"\n'
    with open(main_path, 'w', encoding='utf-8') as f:
        f.write(main_content)
        
print('Done preparing main_08AB_08F5.es and updating main scripts.')
