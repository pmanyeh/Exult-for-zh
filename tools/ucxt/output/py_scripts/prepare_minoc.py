import os
import shutil
import re

source_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
dest_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\005'
main_minoc_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_Minoc.es'

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

# IDs for Minoc: 0451 to 0465
start_id = 0x451
end_id = 0x465

includes = []

def replace_common(content):
    # UI_add_answer
    content = content.replace('"name"', '"姓名"')
    content = content.replace('"job"', '"職業"')
    content = content.replace('"bye"', '"告辭"')
    
    # case statements
    content = content.replace('case "name"', 'case "姓名"')
    content = content.replace('case "job"', 'case "職業"')
    content = content.replace('case "bye"', 'case "告辭"')
    
    # UI_remove_answer
    content = content.replace('UI_remove_answer("name")', 'UI_remove_answer("姓名")')
    content = content.replace('UI_remove_answer("job")', 'UI_remove_answer("職業")')
    content = content.replace('UI_remove_answer("bye")', 'UI_remove_answer("告辭")')
    return content

for i in range(start_id, end_id + 1):
    base_name = f'{i:04X}'
    src_file = os.path.join(source_dir, f'{base_name}.es')
    dst_file = os.path.join(dest_dir, f'{base_name}_zh.es')
    
    if os.path.exists(src_file):
        with open(src_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        content = replace_common(content)
        
        with open(dst_file, 'w', encoding='utf-8') as f:
            f.write(content)
            
        includes.append(f'#include "zh_script/005/{base_name}_zh.es"')
    else:
        print(f"Warning: {src_file} does not exist.")

with open(main_minoc_path, 'w', encoding='utf-8') as f:
    f.write("// Minoc 的腳本整合\n")
    f.write("\n".join(includes) + "\n")

print(f"Prepared {len(includes)} files for Minoc.")
print(f"Created {main_minoc_path}")
