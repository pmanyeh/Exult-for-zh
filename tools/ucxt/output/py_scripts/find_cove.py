import csv
with open('blackgate_functions_report.csv', 'r', encoding='utf-8-sig', errors='ignore') as f:
    reader = csv.DictReader(f)
    names = ['Heather', 'Maria', 'Jaana', 'Magda', 'Pamela', 'Rayburt', 'Rudyom']
    for row in reader:
        npc = row.get('NPC/Event', '')
        for name in names:
            if name.lower() in npc.lower():
                print(f"{row['Function']}: {npc}")
