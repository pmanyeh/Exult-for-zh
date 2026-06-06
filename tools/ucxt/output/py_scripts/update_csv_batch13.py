import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

updates = {
    '04DCH': 'Sullivan (冒充聖者的騙子)',
    '04DDH': 'Wench (Buccaneer\'s Den 澡堂女侍)',
    '04DEH': 'Glenno (Buccaneer\'s Den 澡堂經理)',
    '04DFH': 'Martine (Buccaneer\'s Den 澡堂女侍)',
    '04E0H': 'Roberto (Buccaneer\'s Den 澡堂男公關)',
    '04E1H': 'Sintag (Buccaneer\'s Den 遊戲之屋守衛)',
    '04E2H': 'Blacktooth (Buccaneer\'s Den 居民)',
    '04E3H': 'Mole (Buccaneer\'s Den 居民)',
    '04E4H': 'Lucky (Buccaneer\'s Den 訓練師)',
    '04E5H': 'Budo (Buccaneer\'s Den 物資商人/盜賊公會)'
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

print("CSV Updated for Batch 13!")
