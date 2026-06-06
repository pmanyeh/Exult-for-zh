import glob
import re
import os

files = glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_09\*.es')
all_strings = set()
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We want to find message("...") calls and check if the string has [a-zA-Z]
    # But strings inside message might have \" escaped quotes.
    # So we parse message("...") properly.
    
    for m in re.finditer(r'message\("(.*?)"\);', content):
        s = m.group(1)
        # Check if s has english characters
        if re.search(r'[a-zA-Z]', s):
            # Ignore cases where it's just english names or simple placeholders
            # But wait, some sentences have english names, so we just add all.
            all_strings.add(s)
            
    # Also look at UI_add_answer and case "..." 
    for m in re.finditer(r'UI_add_answer\("(.*?)"\);', content):
        s = m.group(1)
        if re.search(r'[a-zA-Z]', s):
            all_strings.add(s)
            
    for m in re.finditer(r'case "(.*?)":', content):
        s = m.group(1)
        if re.search(r'[a-zA-Z]', s):
            all_strings.add(s)

with open(r'd:\git\exult-master\tools\ucxt\output\py_scripts\missing_strings.txt', 'w', encoding='utf-8') as file:
    for s in sorted(list(all_strings)):
        file.write(f'{s}\n')
        
print(f'Found {len(all_strings)} missing strings.')
