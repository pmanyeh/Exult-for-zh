import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\010'
ids = ['08C6', '08DC']

os.makedirs(out_folder, exist_ok=True)

replacements = {
    '"nothing"': '"沒什麼"',
    '"Ginseng"': '"人參(Ginseng)"',
    '"Blood Moss"': '"血苔(Blood Moss)"',
    '"Sulfurous Ash"': '"硫磺灰(Sulfurous Ash)"',
    '"Mandrake Root"': '"曼德拉草根(Mandrake Root)"',
    '"Black Pearl"': '"黑珍珠(Black Pearl)"',
    '" Art thou willing to pay that much?\\\\""': '" 你願意付這麼多錢嗎？\\\\""',
    '" Art thou willing to pay that much?\\""': '" 你願意付這麼多錢嗎？\\""'
}

for fid in ids:
    src_path = os.path.join(folder, fid + '.es')
    dest_path = os.path.join(out_folder, fid + '_zh.es')
    
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Translated {fid}')
