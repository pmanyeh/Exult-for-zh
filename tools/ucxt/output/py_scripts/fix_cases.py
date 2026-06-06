import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

# We'll apply this to all files in 003 directory to ensure nothing is missed
for filename in os.listdir(base_dir):
    if filename.endswith('.es'):
        filepath = os.path.join(base_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        content = content.replace('case "name" attend', 'case "姓名" attend')
        content = content.replace('UI_remove_answer("name");', 'UI_remove_answer("姓名");')
        
        content = content.replace('case "job" attend', 'case "職業" attend')
        content = content.replace('UI_remove_answer("job");', 'UI_remove_answer("職業");')
        
        content = content.replace('case "bye" attend', 'case "告辭" attend')
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
                
print("Fixed case and UI_remove_answer for name, job, bye.")
