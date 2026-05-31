import re
import csv

input_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_script.uc'
output_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'

funcs = []
current_func = None
in_data_segment = False

with open(input_file, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        line = line.strip()
        if line.startswith('.funcnumber'):
            parts = line.split()
            if len(parts) >= 2:
                func_hex = parts[1]
                current_func = {'func': func_hex, 'string_count': 0, 'char_count': 0}
                funcs.append(current_func)
                in_data_segment = True
        elif line.startswith('.code'):
            in_data_segment = False
        elif in_data_segment and current_func is not None:
            match = re.search(r"db\s+'(.*)'", line)
            if match:
                text = match.group(1)
                current_func['char_count'] += len(text)
                if re.match(r"^L[0-9A-Fa-f]+:", line):
                    current_func['string_count'] += 1

funcs.sort(key=lambda x: int(x['func'].replace('H',''), 16) if x['func'].replace('H','').isalnum() else 0)

with open(output_file, 'w', newline='', encoding='utf-8-sig') as csvfile:
    fieldnames = ['Function', 'String Count', 'Total Characters']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for f in funcs:
        writer.writerow({'Function': f['func'], 'String Count': f['string_count'], 'Total Characters': f['char_count']})

print(f'Successfully parsed {len(funcs)} functions.')
valid_funcs = [f for f in funcs if f['string_count'] > 0]
print(f'Functions with text: {len(valid_funcs)}')
