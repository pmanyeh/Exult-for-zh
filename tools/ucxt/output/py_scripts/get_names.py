import glob
import re
import os

files = sorted(glob.glob(r'd:\git\exult-master\tools\ucxt\output\es_scripts\04*.es'))

out_lines = []
for f in files:
    fid = os.path.basename(f)[:4]
    with open(f, 'r', encoding='latin-1') as f_in:
        content = f_in.read()
    
    if 'UI_add_answer' in content or 'case "name"' in content:
        match = re.search(r'message\(\"[^\"]*(?:My name is|I am) ([A-Z][a-z]+)[\.\,\!\"]', content)
        if match:
            name = match.group(1)
        else:
            match = re.search(r'message\(\"[^\"]*name is ([A-Z][a-z]+)[\.\,\!\"]', content)
            if match:
                name = match.group(1)
            else:
                if 'Lord British' in content and 'king' in content.lower():
                    name = 'Lord British (guess)'
                else:
                    name = '???'
        
        loc = ''
        if 'Britain' in content: loc = '(Britain)'
        
        out_lines.append(f'{fid}: {name} {loc}')

with open(r'd:\git\exult-master\tools\ucxt\output\britain_npcs.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines))
