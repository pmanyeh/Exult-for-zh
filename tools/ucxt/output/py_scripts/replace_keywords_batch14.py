import os
import glob
import re

folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_14'
files = glob.glob(os.path.join(folder, '*.es'))

replacements = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"heal"': '"治療"',
    '"cure poison"': '"解毒"',
    '"resurrect"': '"復活"'
}

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Standard keywords replaced for Batch 14!")
