import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_01'
os.makedirs(out_folder, exist_ok=True)

# Define dictionaries for each file
trans_009B = {
    '"The hooded figure in the boat ignores you completely.*"': '"船上戴著兜帽的人完全無視了你。*"',
    '"sacrifice"': '"犧牲"',
    '"Before you stands a tall, skeletal figure in a ghostly boat. He holds out his hand to you, and says in a sepulchral voice, \\"I am the Ferryman of Skara Brae... Thou must pay two coins... to cross the Misty Channel.\\""': '"站在你面前的是一個高大、骨瘦如柴的身影，身處一艘幽靈船中。他向你伸出手，用陰森的聲音說：「我是 Skara Brae 的渡船夫……你必須支付兩枚硬幣……才能渡過迷霧海峽。」"',
    '"The Ferryman of Skara Brae stands in his spectral boat, holding out his hand for any who would pay his price."': '"Skara Brae 的渡船夫站在他幽靈般的船上，向任何願意支付代價的人伸出手。"',
    '"The Ferryman of Skara Brae stands in his spectral boat, holding his pole across his chest. He notices your approach. \\"You need not pay... to return to the mainland.\\""': '"Skara Brae 的渡船夫站在他幽靈般的船上，將撐篙橫在胸前。他注意到了你的靠近。「要回到大陸……你不需要付費。」"',
    '"return"': '"返回"',
    '"He seems a bit disgruntled. \\"I told you I would be here... until the end of eternity.\\""': '"他似乎有點不滿。「我告訴過你我會在這裡……直到永恆的盡頭。」"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"Ferryman"': '"渡船夫"',
    '"Misty Channel"': '"迷霧海峽"',
    '"Skara Brae"': '"Skara Brae"',
    '"bye"': '"告辭"',
    '"pay"': '"付費"',
    '"\\"I am... the Ferryman.\\" His voice creaks like the rocking\\tof the boat."': '"「我是……渡船夫。」他的聲音像船的搖晃聲一樣嘎吱作響。"',
    '"The Ferryman doesn\'t respond at first, shaking his head from side to side in puzzlement. \\"I am... the Ferryman.\\""': '"渡船夫一開始沒有回應，困惑地搖了搖頭。「我是……渡船夫。」"',
    '"\\"Yes, if you pay me... I can take you across the Misty Channel.\\""': '"「是的，如果你付錢給我……我可以帶你渡過迷霧海峽。」"',
    '"He turns to the side and waves his skeletal hand in a sweeping gesture over the water upon which his boat rests. \\"This... is the Misty Channel.\\""': '"他轉向一側，揮動著他骨瘦如柴的手，在船停泊的水面上劃過。「這……就是迷霧海峽。」"',
    '"He turns all the way around and points across the water to the west. \\"There... \\""': '"他完全轉過身，指著西邊的水面。「那裡……」"',
    '"\\"Er... "': '"「呃……"',
    '", art thou sure we need to go over there?\\"*"': '"，你確定我們需要去那邊嗎？」*"',
    '"\\"What\'s the matter, Shamino? Art thou -afraid-?\\"*"': '"「怎麼了， Shamino ？你『害怕』了嗎？」*"',
    '"\\"Of course not! I just... well, I... oh, never mind! Let\'s go!\\"*"': '"「當然沒有！我只是……好吧，我……噢，算了！我們走吧！」*"',
    '"Iolo\'s eyes narrow as he adopts a patronizing look on his face.~~\\"And I suppose thou art without fear?\\" he says to Spark.*"': '"Iolo 瞇起眼睛，臉上帶著一種居高臨下的神情。~~「我想你應該一點都不怕吧？」他對 Spark 說。*"',
    '"\\"No, sir. I am not afraid of a skeleton,\\" he says. As he looks at the ferryman, however, he\\tgulps.*"': '"「不，先生。我不怕骷髏，」他說。然而，當他看著渡船夫時，卻嚥了一口口水。*"',
    '"The gaunt figure looks around as if perplexed. \\"This... is Skara Brae.\\""': '"這憔悴的身影環顧四周，彷彿感到困惑。「這裡……就是 Skara Brae 。」"',
    '"\\"Wilt thou pay my price... for passage to Skara Brae?\\""': '"「你願意支付我的代價……以獲得前往 Skara Brae 的通行權嗎？」"',
    '"You place the coins in the shade\'s palm and his bony fingers close over them. \\"Step aboard... if thou wouldst go... to the Isle of the Dead.\\""': '"你將硬幣放在這幽靈的手掌中，他骨瘦如柴的手指將它們握住。「上船吧……如果你想去……死者之島的話。」"',
    '"\\"I\'ll not cross... without proper payment.\\""': '"「沒有適當的報酬……我不會渡河。」"',
    '"\\"Very well.\\" He seems a little disappointed."': '"「那好吧。」他似乎有點失望。"',
    '"\\"Dost thou wish... to return to the mainland?\\""': '"「你希望……返回大陸嗎？」"',
    '"\\"I may not carry spirits to the mainland.\\" He holds his pole in front of himself, blocking your way onto the boat."': '"「我不能載運靈魂前往大陸。」他將撐篙擋在身前，阻擋了你上船的路。"',
    '"The Ferryman seems to smile beneath his hood as he motions for you to once more board his spectral boat."': '"渡船夫在兜帽下似乎笑了笑，示意你再次登上他那幽靈般的船。"',
    '"You think you see pale flames flicker in the depths of his cowl where his eyes should be. They fade as he sighs, \\"No matter...\\""': '"你覺得你看到在他兜帽深處，眼睛本該在的位置有蒼白的火焰閃爍。當他嘆息時，火焰消退了，「無妨……」"',
    '"Just for a moment you think you see a fleeting expression of hope cross the Ferryman\'s skeletal features, then it\'s gone. \\"I must perform my duty... until the end of eternity.\\""': '"就在那一瞬間，你覺得你看到渡船夫骷髏般的臉龐上閃過一絲短暫的希望神情，然後就消失了。「我必須履行我的職責……直到永恆的盡頭。」"',
    '"\\"Do not taunt me... with hopes of release. I must perform my duty... until the end of eternity.\\""': '"「不要用解脫的希望……來嘲弄我。我必須履行我的職責……直到永恆的盡頭。」"',
    '"Without acknowledging your goodbye, the Ferryman lowers his head and holds his pole across his chest.*"': '"渡船夫沒有回應你的告別，低下了頭，將撐篙橫在胸前。*"'
}

trans_01DF = {
    '"The creature ignores you.*"': '"這生物無視了你。*"',
    '"The ape-like creature approaches you cautiously. After a few minutes, it says, \\"You are greeted, human.\\""': '"這種類似猿猴的生物小心翼翼地靠近你。幾分鐘後，牠說：「向你致意，人類。」"',
    '"The emp approaches you cautiously. After a few minutes, it says, \\"You are greeted, human.\\""': '"這隻森靈小心翼翼地靠近你。幾分鐘後，牠說：「向你致意，人類。」"',
    '"\\"Is more honey had by you?\\" The Emp asks hopefully."': '"「你有更多的蜂蜜嗎？」這隻森靈滿懷希望地問。"',
    '"\\"No honey is had by you,\\" says the Emp, obviously disappointed."': '"「你沒有蜂蜜，」這隻森靈說道，顯然很失望。"',
    '"Obviously disappointed, the Emp says, \\"That is too bad. What is your wish?\\""': '"這隻森靈顯然很失望地說：「那太糟糕了。你有什麼願望？」"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"\\"Terandan is my name.\\""': '"「我的名字是 Terandan 。」"',
    '"he"': '"他"',
    '"\\"Sendala is my name.\\""': '"「我的名字是 Sendala 。」"',
    '"she"': '"她"',
    '"\\"Tvellum is my name.\\""': '"「我的名字是 Tvellum 。」"',
    '"\\"Simrek is my name.\\""': '"「我的名字是 Simrek 。」"',
    '"\\"No job is had by me. Food is gathered by me.\\""': '"「我沒有職業。我負責採集食物。」"',
    '"food"': '"食物"',
    '"\\"Fruit, milk, cheese are eaten by Emps."': '"「水果、牛奶、起司是森靈吃的。"',
    '"fruits"': '"水果"',
    '"milk"': '"牛奶"',
    '"cheese"': '"起司"',
    '"\\"Cheese and milk are liked by Emps, but they are hard to find. Only from humans can these foods be found.\\""': '"「森靈喜歡起司和牛奶，但它們很難找到。只有從人類那裡才能找到這些食物。」"',
    '"\\"Fruits are found easily in the forest,\\" "': '"「在森林裡很容易找到水果，」"',
    '" says. \\"They are what Emps use as food most often.\\""': '" 說道。「它們是森靈最常作為食物的東西。」"',
    '"\\"Farewell is said to you.\\"*"': '"「向你道別。」*"'
}

trans_01F8 = {
    '"\\"Well met, seeker. I am Dracothraxus. Thy test, and I fear, thy defeat lies before thee. For thou shouldst know that I am made immortal by the Keeper of Courage. \'Twould take a truly powerful artifact to destroy me... one that does not exist.\\" The great dragon paws the earth in expectation of your imminent battle."': '"「很高興見到你，追尋者。我是 Dracothraxus 。你的考驗，恐怕也是你的敗北就在你面前。因為你該知道，我是被勇氣守護者賦予了不朽之身的。要摧毀我，必須要有一件極其強大的神器……而這種神器根本不存在。」這頭巨龍用爪子刨著泥土，期待著你們即將展開的戰鬥。"',
    '"Dracothraxus sniffs the air distastefully, \\"I sense my doom nearby. Perhaps I am to be released at long last. I wish thee good luck mortal. Defend thyself!\\"  With that, the dragon leaps at you."': '"Dracothraxus 厭惡地嗅了嗅空氣，「我感覺到我的末日就在附近。也許我終於能得到解脫了。祝你好運，凡人。保護好你自己吧！」說罷，巨龍向你撲來。"',
    '"\\"Thou hast returned to test thy mettle, little one. Thy courage does thee honor, however, I think that thou shalt take thine honor to the grave with thee.\\"*"': '"「你回來測試你的能耐了，小傢伙。你的勇氣為你帶來了榮譽，不過，我想你將帶著你的榮譽一起進墳墓。」*"',
    '"The dragon lets out a searing sigh, \\"Released at last. I go now to seek my reward, for this has been a test of my courage as well as thine. Thy reward lies beyond the door to the north. Enter the blue gate and the Amulet of Courage will be thine.\\"*"': '"巨龍發出一聲灼熱的嘆息，「終於解脫了。我現在要去尋求我的獎賞，因為這不僅是對你的勇氣的考驗，也是對我的。你的獎賞就在北方的門後。進入藍色的傳送門，勇氣護身符就是你的了。」*"',
    '"\\"Well done, little human. Thou art as powerful as thou art courageous. Do not think that thou hast destroyed me, thou hast merely bested me. And for this wonderous feat, I think thou dost deserve a reward. I have a truly magnificent gem that I would give to thee, if thy courage can but continue for a bit.\\" Dracothraxus opens her mouth wide. Within, you can see a multitude of teeth, each one needle sharp. Also, near the back, you see a small but brilliant blue gem. Do you reach in and take it?"': '"「做得好，小小的人類。你強大且充滿勇氣。別以為你摧毀了我，你只是擊敗了我而已。為了這項驚人的壯舉，我想你配得上一份獎賞。我有一顆真正華麗的寶石可以給你，只要你的勇氣能再持續一會兒。」 Dracothraxus 張大嘴巴。在裡面，你可以看到滿口如針般尖銳的牙齒。同時，在靠近喉嚨深處，你看到一顆小巧但璀璨的藍色寶石。你要伸手進去拿嗎？」"',
    '"As you place your hand in the furnace that is the dragon\'s maw, you can\'t help but wonder if a small gem is worth the risk."': '"當你將手伸進巨龍那如熔爐般的血盆大口時，你忍不住懷疑，為了一顆小寶石冒這個險是否值得。"',
    '"Nevertheless, you persevere and retrieve the lovely little gem."': '"儘管如此，你還是堅持下來，並取回了這顆可愛的小寶石。"',
    '"Just as you are about to pluck the gem literally from the jaws of death, the dragon gently places it within her nest. Dracothraxus closes her mouth and winks at you. \\"\'Twas merely a test of thy courage, little one.\\""': '"就在你即將從死神之顎拔下這顆寶石時，巨龍輕輕地將它放在了她的巢穴中。 Dracothraxus 閉上嘴巴，對你眨了眨眼。「這只是對你勇氣的測試，小傢伙。」"',
    '"\\"Tis a pity thy courage goes only so far as bravery in battle, and not to trust of an honorable opponent. However, thou hast earned thy reward, and here it is.\\" The dragon pushes the gem forward with her tongue, and removes it from her mouth. She then places it gently within her nest."': '"「真可惜，你的勇氣僅止於戰鬥中的英勇，卻不足以信任一位值得尊敬的對手。不過，你還是贏得了你的獎賞，拿去吧。」巨龍用舌頭將寶石往前推，並將它從嘴裡吐了出來。然後她輕輕地將它放在巢穴中。"',
    '"\\"I go now to rest, but I shall return. The door will not open until thou hast found a way to best me for good and for all. Farewell, little mortal.*"': '"「我現在要去休息了，但我會回來的。在你找到一勞永逸擊敗我的方法之前，那扇門是不會打開的。別了，微小的凡人。*"'
}

all_trans = {
    '009B': trans_009B,
    '01DF': trans_01DF,
    '01F8': trans_01F8
}

for fid, rep in all_trans.items():
    src_path = os.path.join(folder, fid + '.es')
    dest_path = os.path.join(out_folder, fid + '_zh.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
        for k, v in rep.items():
            content = content.replace(k, v)
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Translated {fid}')
