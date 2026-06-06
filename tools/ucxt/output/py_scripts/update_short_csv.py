import os
import csv

zh_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\short'
csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'
out_csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

# Get all short script IDs
short_ids = set()
for filename in os.listdir(zh_dir):
    if filename.endswith('_zh.es'):
        func_id = filename[:4]
        short_ids.add(func_id)

updated_rows = []
update_count = 0

with open(csv_file, 'r', encoding='utf-8-sig', errors='ignore') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    if 'Translated' not in fieldnames:
        fieldnames.append('Translated')
        
    for row in reader:
        func_hex = row.get('Function', '')
        if func_hex.endswith('H'):
            clean_id = func_hex[:-1].zfill(4)
            if clean_id in short_ids and row.get('Translated') != 'Yes':
                row['Translated'] = 'Yes'
                update_count += 1
        updated_rows.append(row)

with open(out_csv_file, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(updated_rows)

print(f"Updated {update_count} rows in {out_csv_file}.")
