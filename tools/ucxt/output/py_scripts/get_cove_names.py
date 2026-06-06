import os

for x in range(0x44A, 0x451):
    path = f'es_scripts/{x:04X}.es'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for line in lines:
                if 'case "name"' in line or 'case "job"' in line:
                    print(f'{x:04X}: {line.strip()}')
                    break
