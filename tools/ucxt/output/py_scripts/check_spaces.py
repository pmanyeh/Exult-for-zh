import re, glob

for file in glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\002\04[A-B]*.es'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    # 1. Punctuation then space then English word
    new_content = re.sub(r'([，。！？；：「」『』、])\s+([a-zA-Z]+)', r'\1\2', new_content)
    # 2. English word then space then punctuation
    new_content = re.sub(r'([a-zA-Z]+)\s+([，。！？；：「」『』、])', r'\1\2', new_content)
    
    # Handle the cases in message() where we have "「請原諒， " and " ，」" 
    # message("「請原諒， "); -> message("「請原諒，");
    new_content = re.sub(r'([，。！？；：「」『』、])\s+"\);', r'\1");', new_content)
    # message(" ，」 Fenn 說。"); -> message("，」 Fenn 說。");
    new_content = re.sub(r'message\("\s+([，。！？；：「」『』、])', r'message("\1', new_content)
    
    if new_content != content:
        print(f'Changes in {file[-7:]}:')
        for l1, l2 in zip(content.splitlines(), new_content.splitlines()):
            if l1 != l2:
                print(f'- {l1.strip()}')
                print(f'+ {l2.strip()}')
