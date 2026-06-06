import os
import re
import json

files = ["084D", "084E", "084F", "0850", "0852", "0853", "0854", "0855", "0856", "0857"]
base_dir = r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20"
strings = {}

for f in files:
    path = os.path.join(base_dir, f + "_zh.es")
    with open(path, "r", encoding="utf-8") as file:
        content = file.read()
    
    matches = re.findall(r'message\("(.*?)"\);|UI_add_answer\(\["(.*?)"\]\);|UI_add_answer\("(.*?)"\);|case "(.*?)" attend|UI_item_say\([^,]+, "(.*?)"\);', content)
    strings[f] = []
    for match in matches:
        for m in match:
            if m and m not in strings[f]:
                strings[f].append(m)

with open(r"d:\git\exult-master\tools\ucxt\output\py_scripts\batch20_strings.json", "w", encoding="utf-8") as out:
    json.dump(strings, out, ensure_ascii=False, indent=2)

print("Strings extracted to batch20_strings.json")
