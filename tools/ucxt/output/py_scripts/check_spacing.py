import re, os

files = [
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0487_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0488_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0489_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\048A_zh.es',
]

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

cjk = r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]'

for filepath in files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for i, line in enumerate(lines, 1):
        if 'message(' not in line:
            continue
        for term in english_terms:
            pattern1 = cjk + re.escape(term)
            pattern2 = re.escape(term) + cjk
            if re.search(pattern1, line) or re.search(pattern2, line):
                print(f'{fname}:{i}: {line.rstrip()}')
