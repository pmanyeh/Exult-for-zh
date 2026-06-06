import json, re, os
txt_lines = open(r'C:\Users\pmany\.gemini\antigravity\brain\8f2618cd-63f0-4435-ac9b-9f7e38d14f3d\.system_generated\logs\overview.txt', 'r', encoding='utf-8').readlines()
files = ['0481_zh.es', '0482_zh.es', '0483_zh.es', '0484_zh.es', '0485_zh.es', '0486_zh.es']
out_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\006\\'
count = 0
for file in files:
    for line in reversed(txt_lines):
        try:
            data = json.loads(line)
            if data.get('source') == 'TOOL':
                for res in data.get('tool_responses', []):
                    out = res.get('response', {}).get('output', '')
                    if 'The following code has been modified' in out and file in out and 'The above content shows the entire' in out:
                        pattern = r'The following code has been modified.*?\n(.*?)\nThe above content shows the entire'
                        matches = re.findall(pattern, out, re.DOTALL)
                        if matches:
                            lines = matches[0].split('\n')
                            clean_lines = []
                            for l in lines:
                                if re.match(r'^\d+:\s', l):
                                    clean_lines.append(l.split(': ', 1)[1])
                                else:
                                    clean_lines.append(l)
                            with open(out_dir + file, 'w', encoding='utf-8') as f:
                                f.write('\n'.join(clean_lines))
                            print('Restored', file)
                            count += 1
                            break
                if count > 0 and file in os.listdir(out_dir): break
        except Exception as e:
            pass
print('Total restored:', count)
