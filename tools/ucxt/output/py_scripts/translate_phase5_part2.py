import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '0433.es': {
        'message(".\\"*");': 'message("。」*");',
    },
    '0434.es': {
        'message("\\"Good day to thee, ");': 'message("「祝你有美好的一天，");',
    },
    '0435.es': {
        'message("\\"Good day, ");': 'message("「祝你有美好的一天，");',
        'message(".\\"*");': 'message("。」*");',
    },
    '0436.es': {
        'message(".\\"*");': 'message("。」*");',
    },
    '0437.es': {
        'message("\\"Goodbye and farewell, ");': 'message("「再會了，");',
        'message(".\\"*");': 'message("。」*");',
    },
    '0438.es': {
        'message("\\"Good day to thee, ");': 'message("「祝你有美好的一天，");',
        'message(".\\"*");': 'message("。」*");',
    },
    '0439.es': {
        'message(".\\"");': 'message("。」");',
    },
    '043A.es': {
        'message(".\\" *");': 'message("。」*");',
    }
}

for filename, reps in replacements.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for eng, chi in reps.items():
        content = content.replace(eng, chi)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Phase 5 remaining strings translated.")
