import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'
files = [f'04{x:02X}.es' for x in range(0x3B, 0x43)]

replacements = {
    # 043B
    "name": "姓名", "job": "職業", "bye": "告辭",
    "Fellowship": "兄弟會",
    "jeweller": "珠寶商",
    "buy": "買東西",
    "precious materials": "珍貴材料",
    "finest craftsmen": "最優秀的工匠",
    "gems": "寶石",
    "philosophy": "哲學",

    # 043C
    "pumpkins": "南瓜",
    "Mayor": "市長",
    "farm": "農場",
    "Patterson": "Patterson", # No change but still mapped
    "election": "選舉",
    "losing": "輸家",
    "information": "情報",
    "secret": "秘密",
    "vegetables": "蔬菜",
    "Mack": "Mack",
    "bind": "麻煩",
    "help": "幫忙",

    # 043D
    "proof": "證據",
    "picked eggs": "撿雞蛋",
    "farmer": "農夫",
    "lunatic": "瘋子",
    "work": "工作",
    "creatures": "生物",
    "another place": "另一個地方",
    "seen them": "親眼見過",
    "story": "故事",
    "bright lights": "明亮光芒",
    "lands": "降落",
    "machine": "機器",
    "open": "打開",
    "tigerlion": "虎獅獸",
    "hunger": "飢餓",
    "died": "死了",
    "spoke": "說話",
    "hoe": "鋤頭",
    "Kill Wrathy": "殺了 Wrathy",
    "lost": "不見了",

    # 043E
    "beggar": "乞丐",
    "tell a joke": "說個笑話",
    "Fellowship joke": "兄弟會笑話",
    "Lord British joke": "Lord British 笑話",
    "Weston joke": "Weston 笑話",
    "mage joke": "法師笑話",
    "mages": "法師們",
    "Sullivan joke": "Sullivan 笑話",
    "Sullivan": "Sullivan",
    "gold joke": "黃金笑話",
    "Lord British": "Lord British",
    "Weston": "Weston",

    # 043F
    "Thad": "Thad",
    "talk": "談談",
    "Meditation Retreat": "冥想營",
    "the voice": "那聲音",

    # 0440
    "Nystul": "Nystul",
    "adventuring": "冒險",
    "aged": "老了",
    "assistance": "協助",
    "experience": "經驗",
    "shape": "狀態",

    # 0441
    "Wislem": "Wislem",
    "advisor": "顧問",
    "integration": "融合",
    "society": "社會",
    "Inamo": "Inamo",

    # 0442
    "Royal Nursery": "皇家育嬰室",
    "castle": "城堡",
    "mouse food": "老鼠食物",
    "children": "孩子們"
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

print("Phase 6 cases fixed.")
