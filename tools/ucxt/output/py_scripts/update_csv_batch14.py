import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

updates = {
    '04E6H': 'Gordy (Buccaneer\'s Den 遊戲之屋老闆)',
    '04E7H': 'Paul (Buccaneer\'s Den 受難劇演員)',
    '04E8H': 'Meryl (Buccaneer\'s Den 受難劇女演員)',
    '04E9H': 'Dustin (Buccaneer\'s Den 受難劇演員)',
    '04EDH': 'Owings (Minoc 礦工)',
    '04EEH': 'Malloy (Minoc 礦工)',
    '04EFH': 'Smithy (Buccaneer\'s Den 旅館老闆 Mandy)'
}

rows = []
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        if len(row) > 0 and row[0] in updates:
            row[3] = 'Yes'
            while len(row) < 5:
                row.append('')
            row[4] = updates[row[0]]
        rows.append(row)

with open(csv_file, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print("CSV Updated for Batch 14!")
