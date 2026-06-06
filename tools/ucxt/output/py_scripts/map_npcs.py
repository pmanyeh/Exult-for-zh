import glob
import re

out = open(r'd:\git\exult-master\tools\ucxt\output\npc_names.txt', 'w', encoding='utf-8')

for filepath in glob.glob(r'd:\git\exult-master\tools\ucxt\output\es_scripts\04*.es'):
    with open(filepath, 'r', encoding='latin-1') as f:
        content = f.read()
    
    # Try to find "name", "job", "bye" answers to confirm it's an NPC
    if 'UI_add_answer(["name"' in content or 'UI_add_answer("name"' in content or 'case "name" attend' in content:
        # It's an NPC script
        match = re.search(r'message\(\"[^\"]*(My name is|I am) ([A-Z][a-z]+)[\.\,\!]', content)
        if match:
            out.write(f'{filepath[-7:-3]}: {match.group(2)}\n')
        else:
            match2 = re.search(r'message\(\"[^\"]*name is ([A-Z][a-z]+)[\.\,\!]', content)
            if match2:
                out.write(f'{filepath[-7:-3]}: {match2.group(1)}\n')
            else:
                out.write(f'{filepath[-7:-3]}: ???\n')

out.close()
