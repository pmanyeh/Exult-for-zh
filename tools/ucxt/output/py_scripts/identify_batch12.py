import os
import glob

folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_12'
files = glob.glob(os.path.join(folder, '*.es'))

with open('names12.txt', 'w', encoding='utf-8') as out:
    for path in sorted(files):
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        for i, line in enumerate(lines):
            if 'case "姓名"' in line:
                out.write(f"{os.path.basename(path)}:\n")
                out.write(f"  {lines[i+1].strip()}\n")
                break
