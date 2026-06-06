import re, os

files = [
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0487_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0488_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0489_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\048A_zh.es',
]

# English terms that need spaces around them when adjacent to CJK
english_terms = [
    "New Magincia",
    "Buccaneer's Den",
    "House of Games",
    "Modest Damsel",
    "Balema",
    "Britannia",
    "Brom",
    "Flower Man",
]

cjk = r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef\u300c\u300d\u3001\u3002\uff01\uff0c\uff1f\uff1b\uff1a]'

def add_spaces(text):
    for term in english_terms:
        escaped = re.escape(term)
        # Add space BEFORE term if preceded by CJK char
        text = re.sub(r'(' + cjk + r')(' + escaped + r')', r'\1 \2', text)
        # Add space AFTER term if followed by CJK char
        text = re.sub(r'(' + escaped + r')(' + cjk + r')', r'\1 \2', text)
    return text

for filepath in files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    changed = False
    for line in lines:
        if 'message(' in line:
            new_line = add_spaces(line)
            if new_line != line:
                changed = True
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f'Updated: {fname}')
    else:
        print(f'No changes: {fname}')
