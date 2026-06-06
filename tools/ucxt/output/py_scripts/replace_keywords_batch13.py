import os
import glob

folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_13'
files = glob.glob(os.path.join(folder, '*.es'))

replacements = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"yes"': '"是的"',
    '"no"': '"不"'
}

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Standard keywords replaced for Batch 13!")
