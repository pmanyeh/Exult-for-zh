import re
txt = open(r'C:\Users\pmany\.gemini\antigravity\brain\8f2618cd-63f0-4435-ac9b-9f7e38d14f3d\.system_generated\logs\overview.txt', 'r', encoding='utf-8').read()
# Get the last user message metadata
msg_start = txt.rfind('The following changes were made by the USER to:')
if msg_start != -1:
    content = txt[msg_start:]
    matches = re.findall(r'The following changes were made by the USER to: (.*?)\..*?\[diff_block_start\](.*?)\[diff_block_end\]', content, re.DOTALL)
    for file_path, diff in matches:
        if '0486_zh.es' in file_path: continue
        if file_path.endswith('_zh.es'):
            file_path = file_path # it's already full path
        else:
            file_path = file_path + '.es'
        print('Found diff for', file_path)
        try:
            orig_text = open(file_path, 'r', encoding='utf-8').read()
            chunks = re.split(r'@@ -.*? \+.*? @@', diff)
            for chunk in chunks[1:]:
                minus_lines = []
                plus_lines = []
                for line in chunk.split('\n'):
                    if line.startswith('-'): minus_lines.append(line[1:])
                    elif line.startswith('+'): plus_lines.append(line[1:])
                    elif line.strip() and not line.startswith(' '): continue
                    elif line.strip(): 
                        minus_lines.append(line[1:] if line.startswith(' ') else line)
                        plus_lines.append(line[1:] if line.startswith(' ') else line)
                if minus_lines and plus_lines:
                    minus_text = '\n'.join(minus_lines).strip()
                    plus_text = '\n'.join(plus_lines).strip()
                    # We want to replace English with Chinese! 
                    # Wait, orig_text has ENGLISH text now! Because I copied from es_scripts!
                    # And minus_text IS the Chinese translation! 
                    # But wait, minus_text might not exactly match the English text because minus_lines include unchanged lines which might be translated in some other blocks?
                    # No, the unchanged lines in the diff are usually code lines, which are identical in English and Chinese!
                    # What about the English text being replaced? The user's diff was against the CORRUPTED Chinese text!
                    # So minus_text is the GOOD Chinese text. 
                    pass
        except Exception as e:
            print('Error', e)

