import os, re
files = ['d:\\git\\exult-master\\tools\\ucxt\\output\\zh_script\\batch_04\\046A_zh.es',
         'd:\\git\\exult-master\\tools\\ucxt\\output\\zh_script\\batch_04\\046C_zh.es',
         'd:\\git\\exult-master\\tools\\ucxt\\output\\zh_script\\batch_04\\046D_zh.es']

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_lines = []
    for line in content.split('\n'):
        if line.strip().startswith('message(') and not line.strip().startswith('message("'):
            if 'var' not in line:
                # Replace the first message( with message("
                line = line.replace('message(', 'message("', 1)
        new_lines.append(line)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
print('Fixed files')
