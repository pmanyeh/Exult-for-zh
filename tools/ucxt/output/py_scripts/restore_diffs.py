import re
txt = open(r'C:\Users\pmany\.gemini\antigravity\brain\8f2618cd-63f0-4435-ac9b-9f7e38d14f3d\.system_generated\logs\overview.txt', 'r', encoding='utf-8').read()
matches = re.findall(r'The following changes were made by the USER to: (.*?)\..*?\[diff_block_start\](.*?)\[diff_block_end\]', txt, re.DOTALL)
for file_path, diff in matches:
    if '0486_zh.es' in file_path: continue
    print('Found diff for', file_path)
    try:
        orig_text = open(file_path, 'r', encoding='utf-8').read()
        chunks = re.split(r'@@ -.*? \+.*? @@', diff)
        if len(chunks) > 1:
            print('Applying to', file_path)
            # We actually want to replace the whole file using just the original es file and re-translating, but wait!
            # If we just extract the '-' lines, we can get the old translated lines!
            # Actually, the user's diff is AGAINST the corrupted file!
            # No! The diff is: '-' is the GOOD text, '+' is the CORRUPTED text!
            # So we can just replace the '+' text with the '-' text!
            for chunk in chunks[1:]:
                minus_lines = []
                plus_lines = []
                for line in chunk.split('\n'):
                    if line.startswith('-'): minus_lines.append(line[1:])
                    elif line.startswith('+'): plus_lines.append(line[1:])
                    elif line.strip(): 
                        minus_lines.append(line[1:] if line.startswith(' ') else line)
                        plus_lines.append(line[1:] if line.startswith(' ') else line)
                if minus_lines and plus_lines:
                    minus_text = '\n'.join(minus_lines).strip()
                    plus_text = '\n'.join(plus_lines).strip()
                    orig_text = orig_text.replace(plus_text, minus_text)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(orig_text)
            print('Restored', file_path)
    except Exception as e:
        print('Error', e)

