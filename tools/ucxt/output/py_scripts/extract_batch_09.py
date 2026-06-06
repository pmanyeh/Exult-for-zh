import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_file = r'd:\git\exult-master\tools\ucxt\output\txt_outputs\batch_09_extract.txt'
files_to_extract = [f'04{hex(i)[2:].upper()}' for i in range(0xB4, 0xBD+1)]

result = []
for fid in files_to_extract:
    src_path = os.path.join(folder, fid + '.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='latin-1') as f:
            content = f.read()
        
        strings = []
        for m in re.finditer(r'"(.*?)"', content):
            strings.append('"' + m.group(1) + '"')
        
        # Deduplicate while preserving order
        seen = set()
        dedup = []
        for s in strings:
            if s not in seen:
                seen.add(s)
                dedup.append(s)
                
        result.append(f'\ntrans_{fid} = {{')
        for s in dedup:
            # Escape single quotes and backslashes for python dictionary
            s_escaped = s.replace('\\', '\\\\').replace("'", "\\'")
            result.append(f"    '{s_escaped}': '{s_escaped}',")
        result.append('}')

with open(out_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(result))

print(f'Extracted {len(files_to_extract)} files to {out_file}')
