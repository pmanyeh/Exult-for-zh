import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'
files = [f'04{x:02X}.es' for x in range(0x33, 0x3B)]

replacements = {
    # 0433
    "Farmer's Market": "農夫市集",
    "buy": "買東西",
    "eggs": "雞蛋",
    "fruits and vegetables": "水果和蔬菜",
    
    # 0434
    "made bread": "做麵包",
    "sell flour": "賣麵粉",
    "baker": "烘焙師",
    "bread": "麵包",
    "secret recipes": "秘密食譜",
    "father and mother": "父母",
    "master baker": "大師級烘焙師",
    "doughnut": "甜甜圈",
    "why": "為什麼",
    "reason": "理由",
    "two women": "兩個女人",
    "hire": "僱用",
    
    # 0435
    "clothiers": "服飾店",
    "Fellowship": "兄弟會",
    
    # 0436
    "bows and arrows": "弓箭",
    "Iolo's Bows": "Iolo 弓箭店",
    "responsibility": "重任",
    "singing": "唱歌",
    "The Avatars": "聖者樂團",
    
    # 0437
    "armour": "防具",
    "weapons": "武器",
    "beneficial": "有益",
    "out of business": "破產",
    "changed": "改變",
    
    # 0438
    "stables": "馬廄",
    "carriage": "馬車",
    "people": "很多人",
    
    # 0439
    "sailor": "水手",
    "tame": "溫順",
    "buy ship deed": "買船契約",
    "buy sextant": "買六分儀",
    "Crown Jewel": "皇冠寶石號",
    
    # 043A
    "fish and chips": "炸魚薯條",
    "wagon": "餐車",
    "business": "生意",
    "Buccaneer's Den": "海盜穴",
    "pirate resort": "海盜勝地",
    "House of Games": "遊戲屋"
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
        # Also catch any missed UI_add_answer strings (like Crown Jewel)
        content = content.replace(f'UI_add_answer("{eng}")', f'UI_add_answer("{chi}")')
        
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Phase 5 cases fixed.")
