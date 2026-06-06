import csv
import os

csv_path = r"d:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv"

updates = {
    "04AAH": "Merrick (Paws 乞丐)",
    "04ABH": "Garritt (Paws 屁孩)",
    "04ACH": "Morfin (Paws 屠宰場老闆)",
    "04ADH": "Beverlea (Paws 裁縫店老闆)",
    "04AEH": "Komor (Paws 乞丐)",
    "04AFH": "Fenn (Paws 乞丐)",
    "04B0H": "Andrew (Paws 乳製品廠老闆)",
    "04B1H": "Camille (Paws 農婦)",
    "04B2H": "Tobias (Paws 農婦之子)",
    "04B3H": "Polly (Paws 酒館老闆娘)"
}

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    rows = list(reader)

for i in range(1, len(rows)):
    func_id = rows[i][0]
    if func_id in updates:
        rows[i][3] = "是"
        rows[i][4] = updates[func_id]

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(rows)
