import os
import re
import glob

def process_string(s):
    # 1. Replace terms
    s = s.replace('The Fellowship', '兄弟會')
    s = s.replace('Fellowship', '兄弟會')
    s = s.replace('Avatar', '聖者')
    s = s.replace('Triad of Inner Strength', '內在力量的三位一體 (Triad of Inner Strength)')
    s = re.sub(r'(?<!內在力量的)Triad(?! of Inner Strength)', '三位一體 (Triad)', s)
    
    # 2. Fix spaces between Chinese characters
    # \u4e00-\u9fa5 covers Chinese characters. 
    s = re.sub(r'(?<=[\u4e00-\u9fa5])\s+(?=[\u4e00-\u9fa5])', '', s)
    
    # 3. Ensure single space between Chinese and English
    s = re.sub(r'(?<=[\u4e00-\u9fa5])\s*(?=[a-zA-Z])', ' ', s)
    s = re.sub(r'(?<=[a-zA-Z])\s*(?=[\u4e00-\u9fa5])', ' ', s)
    
    # 4. Remove space between English and full-width punctuation
    puncts = r'，。！？：「」『』、…《》〈〉（）'
    s = re.sub(rf'(?<=[a-zA-Z])\s+(?=[{puncts}])', '', s)
    s = re.sub(rf'(?<=[{puncts}])\s+(?=[a-zA-Z])', '', s)
    
    # 5. Remove space between Chinese and full-width punctuation
    s = re.sub(rf'(?<=[\u4e00-\u9fa5])\s+(?=[{puncts}])', '', s)
    s = re.sub(rf'(?<=[{puncts}])\s+(?=[\u4e00-\u9fa5])', '', s)
    
    # 6. Normalize multiple spaces between English words to single space
    s = re.sub(r'(?<=[a-zA-Z]) {2,}(?=[a-zA-Z])', ' ', s)
    
    return s

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replacer(match):
        inner = match.group(1)
        processed = process_string(inner)
        return f'"{processed}"'
        
    new_content = re.sub(r'"((?:[^"\\]|\\.)*)"', replacer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

files = glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\08AB~08F5\*.es')
for file in files:
    process_file(file)
print(f'Processed {len(files)} files.')
