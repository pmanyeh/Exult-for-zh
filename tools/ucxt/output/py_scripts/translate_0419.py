import re
import shutil

# Copy original file to reset
shutil.copyfile(r'd:\git\exult-master\tools\ucxt\output\es_scripts\0419.es', r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0419.es')

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0419.es', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # UI Answers
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"Game"': '"遊戲"',
    '"I don\'t understand"': '"我不明白"',
    '"What are the rules?"': '"規則是什麼？"',
    '"I know The Game"': '"我知道遊戲"',
    '"Explain it"': '"解釋一下"',
    '"the weather"': '"天氣"',
    '"Lord British"': '"Lord British"',
    '"thou"': '"你"',
    '"a joke"': '"一個笑話"',
    '"women"': '"女人"',
    '"girls"': '"女孩們"',
    '"food"': '"食物"',
    '"supper"': '"晚餐"',
    '"clue"': '"線索"',

    # Dialogues
    '"You are wary of conversing with that trickster Chuckles, but decide to anyway."':
    '"你對與那個愛惡作劇的 Chuckles 交談感到警惕，但還是決定這麼做。"',

    '"\\"I will speak if thou dost play The Game, friend,\\" Chuckles says."':
    '"「如果你玩遊戲（The Game），我就會開口，朋友，」 Chuckles 說。"',

    '"\\"I must not say my name, lest I break the rule of The Game!\\""':
    '"「我不能說出我的名字，以免打破了遊戲規則！」"',

    '"\\"I was, am, and shall be the Court...Fool! I could give thee a clue if I wish, but for now my job is to play The Game.\\""':
    '"「我過去是，現在是，將來也會是宮廷...小丑！如果我願意，我可以給你一個線索，但現在我的工作是玩遊戲。」"',

    '"\\"Art thou sure thou canst play The Game?\\""':
    '"「你確定你會玩遊戲嗎？」"',

    '"\\"Thou must play The Game to get the clue!\\""':
    '"「你必須玩遊戲才能得到線索！」"',

    '"\\"Oops. I did give thee one!\\""':
    '"「哎呀。我確實給了你一個！」"',

    '"\\"Thou must play The Game if thou dost want to speak with me.\\""':
    '"「如果你想和我說話，就必須玩遊戲。」"',

    '"\\"Thou must just learn The Game and then jump in and play it!\\""':
    '"「你只需要學會遊戲規則，然後直接加入玩！」"',

    '"\\"Then just play it!\\""':
    '"「那就玩吧！」"',

    '"\\"Of what thou wouldst like.\\""':
    '"「關於你喜歡什麼。」"',

    '"\\"Why dost thou want to speak of me? Canst thou not think of a thing much more fun of which to speak?\\""':
    '"「你為什麼想談論我？你難道想不到更有趣的話題嗎？」"',

    '"\\"I do not think I can tell a good joke whilst I play The Game! \'Twould be hard! Hmm. Ah! I have one! Why did the hen cross the road? To get to the side she was not on!\\""':
    '"「我不認為我在玩遊戲的同時還能講個好笑話！這太難了！嗯。啊！我想到一個！母雞為什麼要過馬路？為了走到她不在的那一邊！」"',

    '"\\"There be a lot of fine girls in our fair town! Or is it \'fair girls in our fine town\'?\\" Chuckles shrugs his shoulders."':
    '"「我們美麗的城鎮裡有很多好女孩！還是『我們好城鎮裡的美麗女孩』？」 Chuckles 聳了聳肩。"',

    '"\\"There is good food at the pub! As for me, I like to eat on the floor of my room!\\""':
    '"「酒館裡有美味的食物！至於我，我喜歡在我的房間地板上吃！」"',

    '"\\"Thou canst get a good meal there! But I could give thee a good -clue-!\\""':
    '"「你在那裡可以吃到一頓好飯！但我可以給你一個很棒的 -線索- ！」"',

    '"\\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\\"*”':
    '"「再會了，我的朋友！不要忘...我是說，不要忘記怎麼玩遊戲！」*"',
    
    '"\\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\\"*':
    '「再會了，我的朋友！不要忘...我是說，不要忘記怎麼玩遊戲！」*',

    '"\\"Bye for now!\\"*”':
    '"「先告辭了！」*"',
    
    '"\\"Bye for now!\\"*':
    '「先告辭了！」*',
}

for eng, chi in replacements.items():
    content = content.replace(eng, chi)

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\0419.es', 'w', encoding='utf-8') as f:
    f.write(content)
