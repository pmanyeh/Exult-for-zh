import csv
import math

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

files_to_translate = []

with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # handle possible whitespace in keys
        row = {k.strip(): v for k, v in row.items() if k is not None}
        
        translated = row.get('Translated', '').strip()
        if translated.lower() != 'yes':
            try:
                total_chars = int(row.get('Total Characters', 0))
                if 0 < total_chars <= 200:
                    func_id = row['Function'].replace('H', '').strip()
                    files_to_translate.append((func_id, total_chars))
            except ValueError:
                pass
            except KeyError:
                pass

print(f"Total files with Total Characters <= 200 (and > 0) to translate: {len(files_to_translate)}")
folders_needed = math.ceil(len(files_to_translate) / 20)
print(f"Will create {folders_needed} folders.")

for i in range(folders_needed):
    batch = files_to_translate[i*20 : (i+1)*20]
    print(f"Folder {i+1}: {len(batch)} files ({batch[0][0]} ... {batch[-1][0]})")
