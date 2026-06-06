import os
import re

for root, _, files in os.walk('zh_script'):
    for f in files:
        if f.endswith('.es'):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as fin:
                    lines = fin.readlines()
                fixed = False
                for i, line in enumerate(lines):
                    if 'message(' in line and ');' in line:
                        msg_content = line[line.find('message(')+8 : line.rfind(');')]
                        if msg_content.endswith('"') and not msg_content.startswith('"'):
                            # fix it
                            lines[i] = line.replace('message(', 'message("')
                            fixed = True
                            print(f'Fixed {path}:{i+1}: {lines[i].strip()}')
                
                if fixed:
                    with open(path, 'w', encoding='utf-8') as fout:
                        fout.writelines(lines)
            except Exception as e:
                pass
