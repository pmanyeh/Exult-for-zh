import csv
import re
import os

csv_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'

with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

spell_words = set(['Vas', 'Rel', 'Por', 'Ort', 'Flam', 'Grav', 'Nox', 'Mani', 'Corp', 'Wis', 'In', 'Sanct', 'Ylem', 'An', 'Bet', 'Tym', 'Kal', 'Zu', 'Quas', 'Hur', 'Jux', 'Uus', 'Des', 'Ex', 'Lor'])

for row in rows:
    func_hex = row.get('Function', '')
    if func_hex.endswith('H'):
        clean_id = func_hex[:-1].zfill(4).upper()
        # Find the .es file
        es_file = None
        for path in [
            f'd:/git/exult-master/tools/ucxt/output/zh_script/short/{clean_id}_zh.es',
            f'd:/git/exult-master/tools/ucxt/output/zh_script/short/{clean_id}.es',
        ]:
            if os.path.exists(path):
                es_file = path
                break
        if es_file:
            with open(es_file, 'r', encoding='utf-8') as ef:
                content = ef.read()
                matches = re.findall(r'(?:message|UI_item_say|UI_npc_say)\(.*?"(.*?)"', content)
                if matches:
                    first_str = matches[0]
                    # check if spell
                    words = set(re.findall(r'[a-zA-Z]+', first_str))
                    # check if spell: at least 1 word, and all words are in spell_words
                    if words and words.issubset(spell_words):
                        row['NPC/Event'] = '咒語'
                    elif not row.get('NPC/Event'):
                        row['NPC/Event'] = first_str[:30].replace('\n', ' ').strip()
        
with open(csv_file, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=reader.fieldnames)
    writer.writeheader()
    writer.writerows(rows)

# also check if the user wanted blackgate_functions_report_updated.csv
updated_file = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
if os.path.exists(updated_file):
    with open(updated_file, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=reader.fieldnames)
        writer.writeheader()
        writer.writerows(rows)

print('Done!')
