import glob

files = glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_07\*.es')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('message( 看起來有點不高興。*");', 'message(" 看起來有點不高興。*");')
    new_content = new_content.replace('message( 靠近你並低聲說：「原諒他， ");', 'message(" 靠近你並低聲說：「原諒他， ");')
    new_content = new_content.replace('message( 用力點頭：「沒錯，我看到了，我確實看到了。」*");', 'message(" 用力點頭：「沒錯，我看到了，我確實看到了。」*");')
    new_content = new_content.replace('message(他轉回去與 ");', 'message("他轉回去與 ");')
    new_content = new_content.replace('message(。*");', 'message("。*");')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed missing start quotes in {filepath}')
