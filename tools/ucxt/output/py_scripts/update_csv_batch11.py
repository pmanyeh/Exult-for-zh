import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

updates = {
    # Fixes for Batch 10
    '04BFH': 'Martingo (Spektran 蘇丹)',
    '04C0H': 'Menion (Serpent\'s Hold 訓練師)',
    '04C1H': 'Sir Pendaran (Serpent\'s Hold 騎士)',
    '04C2H': 'Lady Jehanne (Serpent\'s Hold 物資商人)',
    '04C3H': 'Lord John-Paul (Serpent\'s Hold 領主)',
    '04C4H': 'Sir Richter (Serpent\'s Hold 騎士/副手)',
    '04C5H': 'Sir Horffe (Serpent\'s Hold 衛兵隊長)',
    '04C6H': 'Sir Jordan (Serpent\'s Hold 盲眼騎士)',
    '04C7H': 'Sir Denton (Serpent\'s Hold 酒館老闆)',
    
    # Batch 11
    '04C8H': 'Lady Tory (Serpent\'s Hold 顧問)',
    '04C9H': 'Lady Leigh (Serpent\'s Hold 治療師)',
    '04CAH': 'Ian (Vesper 冥想靜修處主任)',
    '04CBH': 'Cador (Vesper 礦工)',
    '04CCH': 'Mara (Vesper 礦工)',
    '04CDH': 'Zaksam (Vesper 訓練師)',
    '04CEH': 'Eldroth (Vesper 物資商人/顧問)',
    '04CFH': 'Yongi (Vesper 鍍金蜥蜴酒館老闆)',
    '04D0H': 'Blorn (Vesper 居民)',
    '04D1H': 'Auston (Vesper 鎮長)'
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

print("CSV Updated for Batch 11 and fixes for Batch 10!")
