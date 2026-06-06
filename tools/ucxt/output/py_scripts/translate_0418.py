import re
import shutil

# Copy original file to reset
shutil.copyfile(r'd:\git\exult-master\tools\ucxt\output\es_scripts\0418.es', r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0418.es')

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0418.es', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # UI Answers
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"magic"': '"魔法"',
    '"Lord British"': '"Lord British"',
    '"spells"': '"法術"',
    '"reagents"': '"藥材"',

    # Dialogues
    '"You see your old friend Nystul, now a decrepit old man in mage\'s robes. He seems lost in thought, far away."':
    '"你看到你的老朋友 Nystul ，現在是一位穿著法師長袍、衰老的長者。他似乎陷入了沉思，神遊物外。"',

    '"\\"Do I know thee?\\" Nystul asks."':
    '"「我認識你嗎？」 Nystul 問道。"',

    '"\\"Yes, Avatar?\\" Nystul asks."':
    '"「什麼事，聖者？」 Nystul 問道。"',

    '"The mage looks confused a moment. \\"My name is Nystul? Yes, that is it!\\""':
    '"法師看起來困惑了一會兒。「我的名字是 Nystul ？是的，就是這樣！」"',

    '"\\"Why, \'tis Nystul!\\""':
    '"「哎呀，是 Nystul 啦！」"',

    '"\\"Well, I used to perform quite a bit of magic,\\" he says apologetically. \\"At least... I -think- I used to do so. There is a man named Lord British, I think. I work for him.\\""':
    '"「嗯，我以前經常施展魔法，」他帶著歉意說。「至少... 我『認為』我以前是這麼做的。我想，有一個叫 Lord British 的人。我為他工作。」"',

    '"\\"I am Lord British\'s personal mage!\\""':
    '"「我是 Lord British 的皇家法師！」"',

    '"\\"Sometimes the magic works, sometimes it doth not.\\" He waves his hand, and drops his wand. \\"Oops!\\" he cries, as he bends to pick it up."':
    '"「有時候魔法有效，有時候則不然。」他揮了揮手，結果魔杖掉了下來。「哎呀！」他叫了出來，彎下腰去撿。"',

    '"\\"Art thou sure this man is not really the jester?\\""':
    '"「你確定這個人其實不是小丑嗎？」"',

    '"\\"Anyway, as I was saying, uhm, what was I saying? Oh yes. Magic. I can still sell thee some spells or reagents if thou wouldst like.\\""':
    '"「總之，正如我所說的，嗯，我剛說到哪了？喔對。魔法。如果你想要的話，我還是可以賣給你一些法術或藥材。」"',

    '"\\"The magic is much better now. My spells all work very nicely. I thank thee, Avatar, for clearing the ether. Interested in any spells or reagents?\\""':
    '"「魔法現在好多了。我的法術都能順利運作了。我感謝你，聖者，感謝你淨化了乙太。對任何法術或藥材感興趣嗎？」"',

    '"\\"Dost thou wish to buy some spells?\\""':
    '"「你想要買一些法術嗎？」"',

    '"\\"Oh. Never mind, then.\\""':
    '"「喔。那就算了。」"',

    '"\\"Dost thou wish to buy some reagents?\\""':
    '"「你想要買一些藥材嗎？」"',

    '"\\"Lord who? Dost thou mean that old man who sometimes sits on the throne?\\""':
    '"「什麼王？你是說那個有時候會坐在王座上的老頭子嗎？」"',

    '"\\"He is the greatest ruler this land has ever known and I am proud to serve him.\\""':
    '"「他是這片土地上有史以來最偉大的統治者，我為能侍奉他而感到自豪。」"',

    '"\\"Are we going somewhere?\\"*”':
    '"「我們要去哪裡嗎？」*"',
    
    '"\\"Are we going somewhere?\\"*':
    '「我們要去哪裡嗎？」*',

    '"\\"Goodbye, Avatar. Do come see us again soon.\\"*”':
    '"「告辭了，聖者。請務必盡快再來找我們。」*"',
    
    '"\\"Goodbye, Avatar. Do come see us again soon.\\"*':
    '「告辭了，聖者。請務必盡快再來找我們。」*',
}

for eng, chi in replacements.items():
    content = content.replace(eng, chi)

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0418.es', 'w', encoding='utf-8') as f:
    f.write(content)
