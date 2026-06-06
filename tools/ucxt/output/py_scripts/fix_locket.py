import os

files = [
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0486_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0487_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0488_zh.es',
    r'd:\git\exult-master\tools\ucxt\output\zh_script\009\0489_zh.es',
]

# Replacements:
# 1. Answer/case keys: "項鍊" -> "locket", "出示項鍊" -> "show locket"
# 2. In message() text: "項鍊" -> "吊墬盒"
for filepath in files:
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changed = False
    for line in lines:
        new_line = line
        # Fix answer/case keys (these are NOT inside message() calls)
        if 'message(' not in line:
            new_line = new_line.replace('"出示項鍊"', '"show locket"')
            new_line = new_line.replace('"項鍊"', '"locket"')
        else:
            # Inside message() text: use the correct Chinese term
            new_line = new_line.replace('出示項鍊', '展示吊墬盒')
            new_line = new_line.replace('項鍊', '吊墬盒')

        if new_line != line:
            changed = True
        new_lines.append(new_line)

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f'Updated: {fname}')
    else:
        print(f'No changes: {fname}')
