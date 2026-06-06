import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_0418 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see your old friend Nystul, now a decrepit old man in mage\'s robes. He seems lost in thought, far away."': '"你看到了你的老朋友 Nystul ，現在是個穿著法師長袍、衰老的老人。他似乎陷入了沉思，神遊太虛。"',
    '"\\"Do I know thee?\\" Nystul asks."': '"「我認識你嗎？」 Nystul 問。"',
    '"\\"Yes, Avatar?\\" Nystul asks."': '"「怎麼了，聖者？」 Nystul 問。"',
    '"The mage looks confused a moment. \\"My name is Nystul? Yes, that is it!\\""': '"法師困惑了一會兒。「我的名字是 Nystul ？對，就是這個！」"',
    '"\\"Why, \'tis Nystul!\\""': '"「哎呀，是 Nystul 啊！」"',
    '"\\"Well, I used to perform quite a bit of magic,\\" he says apologetically. \\"At least... I -think- I used to do so. There is a man named Lord British, I think. I work for him.\\""': '"「嗯，我以前經常施展魔法，」他帶著歉意說。「至少……我『認為』我以前是這樣的。我想，有一個叫 Lord British 的人。我為他工作。」"',
    '"\\"I am Lord British\'s personal mage!\\""': '"「我是 Lord British 的私人法師！」"',
    '"magic"': '"魔法"',
    '"Lord British"': '"Lord British"',
    '"\\"Sometimes the magic works, sometimes it doth not.\\" He waves his hand, and drops his wand. \\"Oops!\\" he cries, as he bends to pick it up."': '"「有時魔法有用，有時沒用。」他揮了揮手，結果魔杖掉在地上。「哎呀！」他叫著，彎下腰去撿。"',
    '"\\"Art thou sure this man is not really the jester?\\""': '"「你確定這個人真的不是小丑嗎？」"',
    '"\\"Anyway, as I was saying, uhm, what was I saying? Oh yes. Magic. I can still sell thee some spells or reagents if thou wouldst like.\\""': '"「總之，正如我所說的，呃，我在說什麼？喔對了。魔法。如果你想的話，我還是可以賣給你一些法術或秘藥。」"',
    '"\\"The magic is much better now. My spells all work very nicely. I thank thee, Avatar, for clearing the ether. Interested in any spells or reagents?\\""': '"「魔法現在好多了。我的法術都能順利運作了。我感謝你，聖者，清理了乙太。對任何法術或秘藥有興趣嗎？」"',
    '"spells"': '"法術"',
    '"reagents"': '"秘藥"',
    '"\\"Dost thou wish to buy some spells?\\""': '"「你想買些法術嗎？」"',
    '"\\"Oh. Never mind, then.\\""': '"「噢。那就算了。」"',
    '"\\"Dost thou wish to buy some reagents?\\""': '"「你想買些秘藥嗎？」"',
    '"\\"Lord who? Dost thou mean that old man who sometimes sits on the throne?\\""': '"「Lord 什麼？你是說那個有時坐在王座上的老頭嗎？」"',
    '"\\"He is the greatest ruler this land has ever known and I am proud to serve him.\\""': '"「他是這片土地上最偉大的統治者，我很自豪能為他服務。」"',
    '"\\"Are we going somewhere?\\"*"': '"「我們要去哪裡嗎？」*"',
    '"\\"Goodbye, Avatar. Do come see us again soon.\\"*"': '"「再見，聖者。一定要盡快再來看我們。」*"'
}

trans_0419 = {
    '"You are wary of conversing with that trickster Chuckles, but decide to anyway."': '"你對跟那個騙子 Chuckles 交談感到很謹慎，但還是決定這麼做。"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"\\"I will speak if thou dost play The Game, friend,\\" Chuckles says."': '"「如果你玩『遊戲 (The Game) 』的話我就會說話，朋友，」 Chuckles 說。"',
    '"Game"': '"遊戲"',
    '"\\"I must not say my name, lest I break the rule of The Game!\\""': '"「我不能說我的名字，以免我打破了『遊戲』的規則！」"',
    '"\\"I was, am, and shall be the Court...Fool! I could give thee a clue if I wish, but for now my job is to play The Game.\\""': '"「我過去是，現在是，將來也會是宮廷……小丑！如果我願意的話可以給你一個線索，但現在我的工作是玩『遊戲』。」"',
    '"clue"': '"線索"',
    '"\\"Art thou sure thou canst play The Game?\\""': '"「你確定你會玩『遊戲』嗎？」"',
    '"\\"Thou must play The Game to get the clue!\\""': '"「你必須玩『遊戲』才能得到線索！」"',
    '"\\"Oops. I did give thee one!\\""': '"「哎呀。我確實給了你一個！」"',
    '"\\"Thou must play The Game if thou dost want to speak with me.\\""': '"「如果你想跟我說話，你就必須玩『遊戲』。」"',
    '"I don\'t understand"': '"我不懂"',
    '"What are the rules?"': '"規則是什麼？"',
    '"I know The Game"': '"我知道『遊戲』"',
    '"Explain it"': '"解釋一下"',
    '"\\"Thou must just learn The Game and then jump in and play it!\\""': '"「你只要學會『遊戲』，然後跳進來玩就對了！」"',
    '"\\"Then just play it!\\""': '"「那就玩啊！」"',
    '"I know the Game"': '"我知道『遊戲』"',
    '"What do we converse about?"': '"我們來聊什麼呢？"',
    '"About what do we talk?"': '"我們談論關於什麼？"',
    '"Of what do we speak?"': '"我們說些什麼呢？"',
    '"\\"Of what thou wouldst like.\\""': '"「說你想說的。」"',
    '"the weather"': '"天氣"',
    '"Lord British"': '"Lord British"',
    '"thou"': '"你"',
    '"a joke"': '"笑話"',
    '"weather"': '"天氣"',
    '"\\"Why dost thou want to speak of me? Canst thou not think of a thing much more fun of which to speak?\\""': '"「你為什麼想談論我？你難道想不到比這個更有趣的話題嗎？」"',
    '"women"': '"女人"',
    '"girls"': '"女孩"',
    '"food"': '"食物"',
    '"supper"': '"晚餐"',
    '"\\"I do not think I can tell a good joke whilst I play The Game! \'Twould be hard! Hmm. Ah! I have one! Why did the hen cross the road? To get to the side she was not on!\\""': '"「我不認為我在玩『遊戲』的時候還能講出好笑的笑話！這太難了！嗯。啊！我想到一個了！母雞為什麼要過馬路？為了到她不在的那一邊去！」"',
    '"\\"There be a lot of fine girls in our fair town! Or is it \'fair girls in our fine town\'?\\" Chuckles shrugs his shoulders."': '"「在我們美麗的小鎮上有很多好女孩！還是『我們好小鎮上的美麗女孩』？」 Chuckles 聳聳肩。"',
    '"\\"There is good food at the pub! As for me, I like to eat on the floor of my room!\\""': '"「酒吧裡有美食！至於我，我喜歡在我的房間地板上吃！」"',
    '"Where is the tavern?"': '"酒館在哪裡？"',
    '"Where is the Blue Boar?"': '"藍野豬酒館在哪裡？"',
    '"The pub serves mutton?"': '"酒吧有賣羊肉嗎？"',
    '"Is there liquor?"': '"有酒嗎？"',
    '"\\"Thou canst get a good meal there! But I could give thee a good -clue-!\\""': '"「你可以在那裡飽餐一頓！但我可以給你一個好『線索』！」"',
    '"\\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\\"*"': '"「再會，我的朋友！別忘……我是說，別輸了『遊戲』！」*"',
    '"\\"Bye for now!\\"*"': '"「暫時再見！」*"',
    '"@Hi!@"': '"@嗨！@"',
    '"@Want to play The Game?@"': '"@想玩『遊戲』嗎？@"',
    '"@Let us play The Game!@"': '"@我們來玩『遊戲』吧！@"',
    '"Shall we dance?@"': '"我們跳支舞好嗎？@"'
}

all_trans = {
    '0418': trans_0418,
    '0419': trans_0419
}

for fid, rep in all_trans.items():
    src_path = os.path.join(folder, fid + '.es')
    dest_path = os.path.join(out_folder, fid + '_zh.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='latin-1') as f:
            content = f.read()
        for k, v in rep.items():
            content = content.replace(k, v)
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Translated {fid}')
