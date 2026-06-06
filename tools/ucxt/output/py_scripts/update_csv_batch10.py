import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

updates = {
    '04BEH': 'Betra (Terfin 物資商人)',
    '04BFH': 'Lord John-Paul (Serpent\'s Hold 領主)',
    '04C0H': 'Menion (Serpent\'s Hold 訓練師)',
    '04C1H': 'Lady Tory (Serpent\'s Hold 顧問)',
    '04C2H': 'Sir Richter (Serpent\'s Hold 騎士/副手)',
    '04C3H': 'Sir Pendaran (Serpent\'s Hold 騎士)',
    '04C4H': 'Lady Jehanne (Serpent\'s Hold 物資商人)',
    '04C5H': 'Sir Jordan (Serpent\'s Hold 盲眼騎士)',
    '04C6H': 'Sir Denton (Serpent\'s Hold 酒館老闆)',
    '04C7H': 'Sir Horffe (Serpent\'s Hold 衛兵隊長)'
}

rows = []
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        if len(row) > 0 and row[0] in updates:
            row[3] = 'Yes'
            # Assuming 5th column (index 4) is for NPC/Event info
            while len(row) < 5:
                row.append('')
            row[4] = updates[row[0]]
        rows.append(row)

with open(csv_file, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print("CSV Updated!")
