import os
import re
import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
batch = []
with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        if len(row) >= 5:
            fid = row[0].replace('H', '').strip()
            count = int(row[1]) if row[1].isdigit() else 0
            translated = row[3].strip()
            if not translated and count > 0:
                batch.append(fid)
                if len(batch) >= 10: break

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'

with open(r'd:\git\exult-master\tools\ucxt\output\batch_01_extract.txt', 'w', encoding='utf-8') as out:
    for fid in batch:
        path = os.path.join(folder, fid + '.es')
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)
            unique = []
            for s in strings:
                if any(c.isascii() and c.isalpha() for c in s) and s not in unique:
                    if not s.startswith('zh_script') and s != 'blackgate' and not s.startswith('zh_'):
                        unique.append(s)
            
            out.write(f'--- {fid} ({len(unique)} unique strings) ---\n')
            for s in unique:
                out.write(f'{s}\n')
            out.write('\n')
