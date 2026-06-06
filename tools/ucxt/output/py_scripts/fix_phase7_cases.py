import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'
files = [f'04{x:02X}.es' for x in range(0x43, 0x4A)]

replacements = {
    # 0443
    "name": "姓名", "job": "職業", "bye": "告辭",
    "mutton": "羊肉",
    "meals": "餐點",
    "breakfast": "早餐",
    "supper": "晚餐",
    "Bennie": "Bennie",
    "absent-minded": "健忘",
    "short": "缺貨",

    # 0444
    "Head Servant": "僕人總管",
    
    # 0445
    "prison": "監獄",
    "stealing apples": "偷蘋果",
    "circumstances": "情況",
    "Figg": "Figg",
    "admit": "承認",
    "Paws": "Paws",
    "town": "小鎮",
    "poverty": "貧窮",
    "family": "家人",
    "starving": "餓死",
    "fools": "愚人",
    "class system": "階級制度",

    # 0446
    "signed": "簽署",
    "Great Council": "大議會",
    "bill": "法案",
    "child": "小孩",
    "women": "女性",
    "improvement": "改進",
    "Cove": "Cove",

    # 0447
    "Inwisloklem": "Inwisloklem",
    "gargoyles": "石像鬼",
    "surviving": "倖存",
    "Terfin": "Terfin",
    "way of life": "生活方式",
    "those": "其中一人",
    "Fellowship": "兄弟會",
    "Miranda": "Miranda",
    "away": "不在",
    "law": "法律",

    # 0448
    "castle": "城堡",
    "servant": "僕人",
    "parents": "父母",
    "brother": "哥哥",
    "fiance": "未婚夫",

    # 0449
    "Nell": "Nell",
    "Jeanette": "Jeanette",
    "Thou art in luck": "你運氣真好",
    "wine": "酒",
    "sweetheart": "心上人"
}

for file in files:
    path = os.path.join(base_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    
    for eng, chi in replacements.items():
        # Handle cases
        content = content.replace(f'case "{eng}" attend', f'case "{chi}" attend')
        # Handle remove answer
        content = content.replace(f'UI_remove_answer("{eng}")', f'UI_remove_answer("{chi}")')
        # Handle add answer just in case
        content = content.replace(f'UI_add_answer("{eng}")', f'UI_add_answer("{chi}")')
        
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Phase 7 cases fixed.")
