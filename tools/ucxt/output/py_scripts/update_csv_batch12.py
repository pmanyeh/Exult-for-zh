import csv

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'

updates = {
    '04D2H': 'Liana (Vesper 鎮長書記員)',
    '04D3H': 'Lap-Lem (Vesper 礦工 - 石像鬼)',
    '04D4H': 'Yvella (Vesper 居民 - Cador 的妻子)',
    '04D5H': 'Catherine (Vesper 居民 - Cador 的女兒)',
    '04D6H': 'For-Lem (Vesper 居民 - 石像鬼)',
    '04D7H': 'Ansikart (Vesper 礦業公會領袖 - 石像鬼)',
    '04D8H': 'Wis-Sur (Vesper 賢者 - 石像鬼)',
    '04D9H': 'Anmanivas (Vesper 酒客 - 石像鬼)',
    '04DAH': 'Foranamo (Vesper 酒客 - 石像鬼)',
    '04DBH': 'Aurvidlem (Vesper 居民 - 石像鬼)'
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

print("CSV Updated for Batch 12!")
