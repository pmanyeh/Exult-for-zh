import os
import re

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    'Blue Boar': '藍野豬酒館',
    'The Avatars': 'The Avatars 樂團',
    'Fellowship': '兄弟會',
    'husband': '丈夫',
    'differences': '分歧',
    'works': '工作'
}

for filename in os.listdir(base_dir):
    if not filename.endswith('.es'):
        continue
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    # fix missing UI_add_answer for name/job/bye in 0429
    content = content.replace('UI_add_answer(["name", "job", "bye"]);', 'UI_add_answer(["姓名", "職業", "告辭"]);')
    
    for eng, chi in replacements.items():
        # Only replace exact strings inside UI_add_answer, UI_remove_answer, and case
        content = re.sub(rf'case "{eng}" attend', f'case "{chi}" attend', content)
        content = re.sub(rf'UI_remove_answer\("{eng}"\);', f'UI_remove_answer("{chi}");', content)
        content = re.sub(rf'UI_add_answer\("{eng}"\);', f'UI_add_answer("{chi}");', content)
        content = re.sub(rf'"{eng}"', f'"{chi}"', content) # general string fix inside arrays like ["Fellowship", "works"]
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
print("Fixed remaining mismatched cases.")
