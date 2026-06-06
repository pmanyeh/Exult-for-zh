import os

csv_path = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

# Details for 04B4H~04BDH
details = {
    '04B4H': 'Yes,Draxinusom (Terfin 前任國王)',
    '04B5H': 'Yes,Inforlem (Terfin 訓練師)',
    '04B6H': 'Yes,Inmanilem (Terfin 治療師)',
    '04B7H': 'Yes,Teregus (Terfin 神殿守護者)',
    '04B8H': 'Yes,Runeb (Terfin 兄弟會陰謀家)',
    '04B9H': 'Yes,Quan (Terfin 兄弟會領袖)',
    '04BAH': 'Yes,Quaeven (Terfin 兄弟會成員)',
    '04BBH': 'Yes,Silamo (Terfin 守衛)',
    '04BCH': 'Yes,Sarpling (Terfin 魔法材料商人)',
    '04BDH': 'Yes,Forbrak (Terfin 酒保)'
}

with open(csv_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    row = line.rstrip('\r\n').split(',')
    if len(row) > 0 and row[0] in details:
        while len(row) < 5:
            row.append('')
        # split detail into translated and desc
        translated, desc = details[row[0]].split(',', 1)
        row[3] = translated
        row[4] = desc
    new_lines.append(','.join(row) + '\n')

with open(csv_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated CSV for 04B4H ~ 04BDH")
