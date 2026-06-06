import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_file = r'd:\git\exult-master\tools\ucxt\output\batch_07_extract.txt'
batch = [f'049{i}' for i in range(10)]

all_lines = []

for fid in batch:
    filepath = os.path.join(folder, fid + '.es')
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='latin-1') as f:
            content = f.read()
        
        matches = re.findall(r'(\bmessage|\bUI_add_answer|\bcase)\s*\(\[?(.*?)\]?\)', content)
        strings = set()
        for match in matches:
            text = match[1]
            if text.startswith('"') and text.endswith('"'):
                strings.add(text)
            elif '", "' in text:
                parts = text.split(', ')
                for p in parts:
                    if p.startswith('"') and p.endswith('"'):
                        strings.add(p)
                        
        all_lines.append(f"--- {fid} ---")
        for s in sorted(strings):
            all_lines.append(s)
        all_lines.append("\n")

with open(out_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(all_lines))
print('Extracted to batch_07_extract.txt')
