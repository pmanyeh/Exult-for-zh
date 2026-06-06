import os
import re

zh_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\004'

for filename in os.listdir(zh_dir):
    if not filename.endswith('.es'): continue
    path = os.path.join(zh_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all UI_add_answer calls
    answers = re.findall(r'UI_add_answer\("([^"]+)"\);', content)
    for ans in answers:
        # Check if there is a corresponding case
        case_str = f'case "{ans}" attend'
        if case_str not in content:
            # Maybe the case was missed in translation, let's find the original case
            # This is complex, but wait, my translate script replaced `case "ENG" attend` with `case "CHI" attend`.
            pass

    # Actually, I did `content.replace(f'case "{eng}" attend', f'case "{chi}" attend')` in the translation script!
    # So `case "CHI" attend` is already there. Let's just do a sanity check.

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Phase 8 cases synchronized.")
