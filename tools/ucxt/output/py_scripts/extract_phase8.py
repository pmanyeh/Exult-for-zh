import os
import re

out_file = 'phase8_msgs.txt'
scripts = [f'04{x:02X}.es' for x in range(0x4A, 0x51)]

with open(out_file, 'w', encoding='utf-8') as fout:
    for script in scripts:
        path = f'es_scripts/{script}'
        if os.path.exists(path):
            fout.write(f'--- {script} ---\n')
            with open(path, 'r', encoding='utf-8') as fin:
                content = fin.read()
                
                # Extract message("")
                msgs = re.findall(r'message\("([^"]+)"\);', content)
                for m in msgs:
                    fout.write(f'{m}\n')
                    
                # Extract case ""
                cases = re.findall(r'case "([^"]+)"', content)
                for c in cases:
                    fout.write(f'CASE: {c}\n')
                
                # Extract varXXX = "@...@"
                vars = re.findall(r'var\d+ = "(@[^"]+@?)";', content)
                for v in vars:
                    fout.write(f'VAR: {v}\n')
                    
            fout.write('\n')
