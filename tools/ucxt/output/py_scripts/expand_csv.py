import csv
import os

csv_path = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report.csv'
new_csv_path = r'd:\git\exult-master\tools\ucxt\output\blackgate_functions_report_updated.csv'
zh_script_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script'

# Collect translated files from zh_script directory (including subdirectories like 001, 002)
translated_files = set()
for root, dirs, files in os.walk(zh_script_dir):
    for f in files:
        if f.endswith('.es'):
            # Extract ID, handling files like 04A0.es, 04A0_zh.es, etc.
            base = f.split('_')[0].split('.')[0]
            translated_files.add(base.upper())

with open(csv_path, 'r', encoding='utf-8-sig') as f_in, open(new_csv_path, 'w', encoding='utf-8-sig', newline='') as f_out:
    reader = csv.reader(f_in)
    writer = csv.writer(f_out)
    
    headers = next(reader)
    if len(headers) < 5:
        if 'Translated' not in headers:
            headers.append('Translated')
        if 'NPC/Event' not in headers:
            headers.append('NPC/Event')
    writer.writerow(headers)
    
    for row in reader:
        func_id_raw = row[0]
        func_id = func_id_raw.replace('H', '').upper()
        
        # Check if we have translated this file
        is_translated = '是' if func_id in translated_files else ''
        
        # Auto-fill some basic NPC names if we know them from our session
        npc_name = ''
        if func_id == '04A0': npc_name = 'Effrem (Moonglow)'
        elif func_id == '04A1': npc_name = 'Chad (Moonglow)'
        elif func_id == '04A2': npc_name = 'Elad (Moonglow 治療師)'
        elif func_id == '04A3': npc_name = 'Phearcy (Moonglow 酒保)'
        elif func_id == '04A4': npc_name = 'Addom (旅行商人)'
        elif func_id == '04A5': npc_name = 'Frank (誠實狐狸)'
        elif func_id == '04A6': npc_name = 'Thurston (Paws 磨坊老闆)'
        elif func_id == '04A7': npc_name = 'Feridwyn (Paws 庇護所負責人)'
        elif func_id == '04A8': npc_name = 'Brita (庇護所負責人妻子)'
        elif func_id == '04A9': npc_name = 'Alina (尋夫農婦)'
        elif func_id == '06FA': npc_name = '島嶼地震對話'
        elif func_id == '0883': npc_name = 'Petre (Trinsic 市長辦公室)'
        elif func_id == '0885': npc_name = '案件調查 (Trinsic)'
        elif func_id == '089E': npc_name = '復活與治療服務'
        elif func_id == '0909': npc_name = '性別尊稱處理 (milord/milady)'
        
        # Pad row to match headers
        while len(row) < len(headers):
            row.append('')
            
        # Update columns
        col_translated = headers.index('Translated')
        col_npc = headers.index('NPC/Event')
        
        row[col_translated] = is_translated
        if not row[col_npc] and npc_name:
            row[col_npc] = npc_name
            
        writer.writerow(row)

# Replace the old file with the new one safely
os.replace(new_csv_path, csv_path)
print("CSV successfully updated with 'Translated' and 'NPC/Event' columns.")
