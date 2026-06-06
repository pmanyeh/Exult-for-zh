import os, re

folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\char200\01'

translations = {
    # 009F_zh.es (Pocket Watch)
    '"pm"': '"下午"',
    '"am"': '"上午"',
    
    # 0273_zh.es (Lockpicks)
    '"Unlocked"': '"解鎖"',
    '"Pick broke"': '"開鎖器斷了"',
    '"@Try those on a locked chest or door.@"': '"@試著用在鎖住的箱子或門上。@"',
    '"@Strange that did not work.@"': '"@奇怪，沒用。@"',

    # 0284_zh.es (Coin toss)
    '"@It is tails.@"': '"@是反面。@"',
    '"@Tails.@"': '"@反面。@"',
    '"@Heads.@"': '"@正面。@"',
    '"@It is heads.@"': '"@是正面。@"',
    '"@Again!@"': '"@再來！@"',
    '"@Call it.@"': '"@猜吧。@"',

    # 0296_zh.es (Fishing pole)
    '"@I\'ve lost my bait.@"': '"@誘餌沒了。@"',
    '"@I have seen bigger.@"': '"@我看過更大的。@"',
    '"@Indded, a whopper!@"': '"@真的是條大魚！@"',
    '"@That fish does not"': '"@那條魚看起來"',
    '"look right.@"': '"不對勁。@"',
    '"@I felt a nibble.@"': '"@我感覺到魚咬餌了。@"',
    '"@It got away!@"': '"@牠跑了！@"',
    '"@Not even a bite!@"': '"@連咬都不咬！@"',
    '"@It was the Big One!@"': '"@是條大魚！@"',
    '"@What a meal!@"': '"@真是一頓大餐！@"',

    # 060A_zh.es (Roulette/Wheel)
    '"Black"': '"黑色"',
    '"Orange"': '"橘色"',
    '"Red"': '"紅色"',
    '"Purple"': '"紫色"',
    '"White"': '"白色"',
    '"Green"': '"綠色"',
    '"Yellow"': '"黃色"',
    '"Blue"': '"藍色"',
    '"@Didst thou win?@"': '"@你贏了嗎？@"',
    '"@A winner on "': '"@贏在 "',
    '"@It is "': '"@是 "',
    '".@"': '"。@"',

    # 0631_zh.es (Password)
    '"@What\'s the password?@"': '"@密碼是什麼？@"',
    '"@Blackbird@"': '"@Blackbird@"',  # keep English
    '"@Pass.@"': '"@通過。@"',

    # 083D_zh.es (Dice / Chuck-a-Luck)
    '"@Too bad...@"': '"@真可惜...@"',
    '"@Sum of 5!@"': '"@總和 5！@"',
    '"@Big eight!@"': '"@大 8！@"',
    '"@Triples! On the one!@"': '"@三個一！@"',
    '"@Full wheel!@"': '"@全輪！@"',
    '"@Triples! On the two!@"': '"@三個二！@"',
    '"@Triples! On the three!@"': '"@三個三！@"',
    '"@Sum of 4!@"': '"@總和 4！@"',
    '"@Seven!@"': '"@七！@"',

    # 0865_zh.es
    '"soup"': '"湯"',
    '"eruption"': '"爆發"',
    '"quagmire"': '"泥沼"',
    '"bureaucracy"': '"官僚"',
    '"bureaucracies"': '"官僚"',
    '"tractor"': '"拖拉機"',
    '"Socialism"': '"社會主義"',
    '"Capitalism"': '"資本主義"',
    '"hammer"': '"鐵鎚"',
    '"sickle"': '"鐮刀"',
    '"imperialism"': '"帝國主義"',
    '"crankshaft"': '"曲軸"',
    '"carbuerator"': '"化油器"',
    '"Gump"': '"阿甘"',
    '"lenticular cloud"': '"莢狀雲"',
    '"clock"': '"時鐘"',
    '"sloop"': '"單桅帆船"',
    '"barge"': '"駁船"',

    # 086A_zh.es
    '"with a melon"': '"和一顆瓜"',
    '"below the ground"': '"在地下"',
    '"with much consternation"': '"驚恐地"',
    '"throughout the universe"': '"穿越宇宙"',
    '"between the sheets"': '"在床單間"',
    '"assuredly"': '"確信地"',
    '"similarilly"': '"相似地"',
    '"above your house"': '"在你家上方"',
    '"fiscally"': '"在財政上"',
    '"Gumpily"': '"阿甘地"',

    # 086B_zh.es
    '"anxiously"': '"焦慮地"',
    '"explicitly"': '"明確地"',
    '"though the ages"': '"穿越時代"',
    '"with your mother"': '"和你媽媽"',
    '"in a roundabout manner"': '"拐彎抹角地"',
    '"without the proper documentation"': '"在沒有適當文件的情況下"',
    '"against all odds"': '"排除萬難"',
    '"without my knowledge"': '"在我不知情的情況下"',
    '"implicitly"': '"含蓄地"',

    # 086C_zh.es
    '"no-see-um"': '"小黑蚊"',
    '"reptile"': '"爬蟲類"',
    '"armadillo"': '"犰狳"',
    '"platypus"': '"鴨嘴獸"',
    '"platypuses"': '"鴨嘴獸"',
    '"mammal"': '"哺乳動物"',
    '"llama"': '"大羊駝"',
    '"mooncow"': '"月亮牛"',
    '"bassalope"': '"鱸魚羚羊"',
    '"amphibian"': '"兩棲動物"',
    '"octopus"': '"章魚"',
    '"octopi"': '"章魚"',
    '"invertebrate"': '"無脊椎動物"',
    '"ungulate"': '"有蹄類"',
    '"iguana"': '"鬣蜥"',
    '"alpaca"': '"羊駝"',
    '"thundermoose"': '"雷霆駝鹿"',
    '"ferret"': '"雪貂"',
    '"weasel"': '"黃鼠狼"',
    '"cockatoo"': '"鳳頭鸚鵡"',

    # 086D_zh.es
    '"pod-people"': '"豆莢人"',
    '"pod-person"': '"豆莢人"',
    '"Slav"': '"斯拉夫人"',
    '"slug"': '"蛞蝓"',
    '"Basque"': '"巴斯克人"',
    '"mole-people"': '"鼴鼠人"',
    '"mole-person"': '"鼴鼠人"',
    '"Dominican"': '"多明尼加人"',
    '"Christian Scientist"': '"基督教科學派"',
    '"Hindu"': '"印度教徒"',
    '"rock critic"': '"搖滾樂評"',
    '"Mongol"': '"蒙古人"',
    '"Gypsy"': '"吉普賽人"',
    '"Gypsies"': '"吉普賽人"',
    '"sloth"': '"樹懶"',
    '"conifer"': '"針葉樹"',
    '"cephalopod"': '"頭足類"',
    '"Canadian"': '"加拿大人"',
    '"Serb"': '"塞爾維亞人"',
    '"Christian"': '"基督徒"',
    '"Croat"': '"克羅埃西亞人"',
    '"dicot"': '"雙子葉植物"',

    # 086E_zh.es
    '"oinker"': '"豬頭"',
    '"four-eyes"': '"四眼田雞"',
    '"creampuff"': '"奶油泡芙"',
    '"foreskin"': '"包皮"',
    '"prepuce"': '"包皮"',
    '"shmuck"': '"笨蛋"',
    '"homeboy"': '"老鄉"',
    '"homes"': '"老鄉"',
    '"studmuffin"': '"猛男"',
    '"Spankamiah"': '"史潘卡米亞"',
    '"smegma-breath"': '"口臭鬼"',
    '"Comrade"': '"同志"',
    '"smart-guy"': '"聰明鬼"',
    '"whitey"': '"白佬"',
    '"smartypants"': '"自作聰明的人"',
    '"goofball"': '"傻瓜"',
    '"badycakes"': '"寶貝蛋糕"',

    # 08F1_zh.es
    '"viper"': '"毒蛇"',
    '"coward"': '"懦夫"',
    '"scoundrel"': '"惡棍"',
    '"toad"': '"癩蛤蟆"',
    '"snake"': '"蛇"',
    '"wretch"': '"可憐蟲"',
    '"deceiver"': '"騙子"'
}

for fname in os.listdir(folder):
    if not fname.endswith('.es'): continue
    path = os.path.join(folder, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for en, zh in translations.items():
        content = content.replace(en, zh)
    
    # Fix the plural appending logic for 0865, 086C, 086D (var0003 = (var0002 + "s");)
    # Chinese doesn't use "s" for plural like this, it looks bad in game.
    content = content.replace('var0003 = (var0002 + "s");', 'var0003 = var0002;')
    content = content.replace("var0003 = (var0002 + 's');", 'var0003 = var0002;')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Translation applied.")
