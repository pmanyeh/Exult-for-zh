import re, os
txt = open(r'C:\Users\pmany\.gemini\antigravity\brain\8f2618cd-63f0-4435-ac9b-9f7e38d14f3d\.system_generated\logs\overview.txt', 'r', encoding='utf-8').read()
files = ['0481_zh.es', '0482_zh.es', '0483_zh.es', '0484_zh.es', '0485_zh.es', '0486_zh.es']
out_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\006\\'
count = 0
for file in files:
    pattern = r'File Path: \ile:///d:/git/exult-master/tools/ucxt/output/zh_script/006/' + file + r'\.*?The following code has been modified.*?\n(.*?)\nThe above content shows the entire'
    matches = re.findall(pattern, txt, re.DOTALL)
    if matches:
        last_match = matches[-1]
        lines = last_match.split('\n')
        clean_lines = []
        for line in lines:
            if re.match(r'^\d+:\s', line):
                clean_lines.append(line.split(': ', 1)[1])
            else:
                clean_lines.append(line)
        content = '\n'.join(clean_lines)
        with open(out_dir + file, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Restored', file)
        count += 1
print('Total restored:', count)
