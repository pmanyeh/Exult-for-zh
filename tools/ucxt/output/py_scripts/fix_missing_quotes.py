import os

folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\010'
ids = ['08C3', '08C5', '08DB', '08C6', '08DC']

replacements = {
    '"\\"In which circle dost thou wish to study?\\""': '"「你想研究哪一環的法術？」"',
    '"\\"What spell wouldst thou like to buy?\\""': '"「你想買什麼法術？」"',
    '"\\"Fine.\\""': '"「好的。」"',
    '"\\"The "': '"「"',
    '"\\"Done!\\""': '"「完成！」"',
    '"\\"Thou dost not have a spellbook.\\""': '"「你沒有法術書。」"',
    '"\\"Thou dost not have enough gold for that!\\""': '"「你沒有足夠的金幣！」"',
    '"\\"Thou dost already have that spell!\\""': '"「你已經擁有那個法術了！」"',
    '"\\"Wouldst thou like another spell?\\""': '"「你還想要其他的法術嗎？」"',
    '"\\"Would you like another spell?\\""': '"「你還想要其他的法術嗎？」"',
    
    '"\\"What reagent wouldst thou like to buy?\\""': '"「你想買什麼魔法材料？」"',
    '"\\"How many wouldst thou like?\\""': '"「你想要多少個？」"',
    '"\\"Thou cannot possibly carry that much!\\""': '"「你不可能拿得了那麼多！」"',
    '"\\"Wouldst thou like something else?\\""': '"「你還想要點別的嗎？」"'
}

for fid in ids:
    path = os.path.join(folder, fid + '_zh.es')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed missing translations in {fid}')
