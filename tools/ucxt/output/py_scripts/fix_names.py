import os

files = [
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0486_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0487_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0488_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0489_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\048A_zh.es',
]

# Map Chinese translations back to English originals
# Format: (Chinese text, English replacement in strings, English replacement in answer/case options)
replacements = [
    # Place names
    ('新馬金西亞', 'New Magincia', 'New Magincia'),
    # Buccaneer's Den - already have bracket version
    ('海盜巢（Buccaneer\'s Den）', "Buccaneer's Den", "Buccaneer's Den"),
    ('海盜巢', "Buccaneer's Den", "Buccaneer's Den"),
    # House of Games
    ('賭局之家（House of Games）', 'House of Games', 'House of Games'),
    ('賭局之家', 'House of Games', 'House of Games'),
    # Modest Damsel
    ('謙遜貴婦（Modest Damsel）', 'Modest Damsel', 'Modest Damsel'),
    ('謙遜貴婦', 'Modest Damsel', 'Modest Damsel'),
    # Balema - place name in Gorn's script
    ('巴雷馬（Balema）', 'Balema', 'Balema'),
    ('巴雷馬', 'Balema', 'Balema'),
    # Britannia - from translation guide, Britain stays in English
    ('不列顛尼亞（Britannia）', 'Britannia', 'Britannia'),
    ('不列顛尼亞', 'Britannia', 'Britannia'),
    # Brom - person name
    ('布羅姆（Brom）', 'Brom', 'Brom'),
    ('布羅姆', 'Brom', 'Brom'),
    # Flower Man - Sam's title (keep English)
    ('花之人（Flower Man）', 'Flower Man', 'Flower Man'),
    ('花之人', 'Flower Man', 'Flower Man'),
]

# UI_add_answer and case answers must stay as a key string - we replace those too
# For case/UI_add_answer, the replacement in the string must match what the answer key is

answer_replacements = [
    ('"新馬金西亞"', '"New Magincia"'),
    ('"巴雷馬"', '"Balema"'),
    ('"不列顛尼亞"', '"Britannia"'),
    ('"布羅姆"', '"Brom"'),
    ('"找到布羅姆"', '"find Brom"'),
    ('"繼續找布羅姆"', '"look for Brom"'),
    ('"這是把戲"', '"it\'s a trick"'),
    ('"下一件奇怪的事"', '"next strange thing"'),
    ('"另一件奇怪的事"', '"something else strange"'),
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Apply message-text replacements (in message() strings)
    for zh, en, _ in replacements:
        content = content.replace(zh, en)
    
    # Apply answer-key replacements 
    for zh_ans, en_ans in answer_replacements:
        content = content.replace(zh_ans, en_ans)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated: {os.path.basename(filepath)}')
    else:
        print(f'No changes: {os.path.basename(filepath)}')
