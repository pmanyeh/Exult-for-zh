import os
import glob

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script'
main_es_path = r'd:\git\exult-master\tools\ucxt\output\main.es'

batches = [f'batch_{i:02d}' for i in range(8, 14)]

main_lines_to_add = []

for b in batches:
    b_dir = os.path.join(base_dir, b)
    es_files = glob.glob(os.path.join(b_dir, '*_zh.es'))
    es_files = sorted([os.path.basename(f) for f in es_files])
    
    main_b_path = os.path.join(b_dir, f'main_{b}.es')
    with open(main_b_path, 'w', encoding='utf-8') as f:
        for es in es_files:
            f.write(f'#include "zh_script/{b}/{es}"\n')
            
    main_lines_to_add.append(f'#include "zh_script/{b}/main_{b}.es"')

# update main.es
with open(main_es_path, 'r', encoding='utf-8') as f:
    content = f.read()

for line in main_lines_to_add:
    if line not in content:
        content += f'\n{line}'

with open(main_es_path, 'w', encoding='utf-8') as f:
    f.write(content.strip() + '\n')

print("main.es updated for batches 08-13!")
