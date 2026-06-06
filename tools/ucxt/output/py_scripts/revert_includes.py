import os

# 1. Add back to main_ShortScripts.es
short_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_ShortScripts.es'
with open(short_path, 'r', encoding='utf-8') as f:
    short_content = f.read()
if '08AE_zh.es' not in short_content:
    short_content += '#include "zh_script/short/08AE_zh.es"\n'
if '08F4_zh.es' not in short_content:
    short_content += '#include "zh_script/short/08F4_zh.es"\n'
with open(short_path, 'w', encoding='utf-8') as f:
    f.write(short_content)

# 2. Add back to 010\main_010.es
main_010_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\010\main_010.es'
with open(main_010_path, 'r', encoding='utf-8') as f:
    main_010_content = f.read()
if '08C5_zh.es' not in main_010_content:
    main_010_content += '#include "zh_script/010/08C5_zh.es"\n'
if '08C6_zh.es' not in main_010_content:
    main_010_content += '#include "zh_script/010/08C6_zh.es"\n'
with open(main_010_path, 'w', encoding='utf-8') as f:
    f.write(main_010_content)

# 3. Remove from main_08AB_08F5.es
main_08AB_08F5_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\08AB~08F5\main_08AB_08F5.es'
with open(main_08AB_08F5_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
lines = [l for l in lines if '08AE_zh.es' not in l and '08F4_zh.es' not in l and '08C5_zh.es' not in l and '08C6_zh.es' not in l]
with open(main_08AB_08F5_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Reverted compilation lists to use the old versions of 08AE, 08F4, 08C5, 08C6.')
