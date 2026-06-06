import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_046D = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a monk wandering around apparently without direction."': '"你看到一個僧侶顯然漫無目的地在四處遊蕩。"',
    '"\\"Greetings, "': '"「你好， "',
    '". May I help thee?\\" asks Wayne."': '。需要我幫忙嗎？」 Wayne 問。"',
    '"\\"Thou mayest call me Brother Wayne, "': '"「你可以叫我 Wayne 兄弟， "',
    '"\\"My job? Well, I, er, do not truly have one at the moment.\\" He looks down at his feet."': '"「我的工作？嗯，我，呃，目前並沒有真正的工作。」他低頭看著自己的腳。"',
    '"at the moment"': '"目前"',
    '"\\"Yes, I am... Well, I am lost, "': '"「是的，我是……嗯，我迷路了， "',
    '". I am from the Abbey to the south of here... or to the north.... Mayhaps the northwest.\\" He cradles his chin and looks up.~~\\"Southeast?\\""': '。我來自這裡南邊的修道院……或者是北邊……也許是西北邊。」他托著下巴抬頭看。~~「東南邊？」"',
    '"lost"': '"迷路"',
    '"Abbey"': '"修道院"',
    '"\\"Well... I am sure it is not permanent.\\" He blushes. \\"I just need to get my bearings, that\'s all,\\" he says unconvincingly."': '"「嗯……我確定這不是永久的。」他臉紅了。「我只是需要確定一下方向，就這樣，」他缺乏說服力地說。"',
    '"\\"I am a monk of the Brotherhood of the Rose. I study geography and nature with a brother named Taylor.\\""': '"「我是玫瑰兄弟會的僧侶。我和一位名叫 Taylor 的弟兄一起研究地理和自然。」"',
    '"geography"': '"地理"',
    '"nature"': '"自然"',
    '"Taylor"': '"Taylor"',
    '"\\"Well,\\" he shrugs, \\"I suppose I should have studied a little bit better.\\" He smiles sheepishly."': '"「嗯，」他聳聳肩，「我想我應該學得好一點的。」他難為情地笑了。"',
    '"\\"There are so many beautiful things to see in Britannia. Both animals and plants alike offer excitement to the observer.\\""': '"「Britannia 有這麼多美麗的事物可看。動物和植物都給觀察者帶來了興奮感。」"',
    '"animals"': '"動物"',
    '"plants"': '"植物"',
    '"\\"Well, I haven\'t actually seen him for some time. I assume he is still continuing his studies.\\""': '"「嗯，我其實已經有一段時間沒見到他了。我假設他還在繼續他的研究。」"',
    '"\\"Ah, yes, "': '"「啊，是的， "',
    '", they are quite wondrous to see. I highly recommend to thee to always observe thy surroundings. Otherwise, "': '，它們看起來非常奇妙。我強烈建議你要隨時觀察你的周遭環境。否則， "',
    '", thou wilt miss much in life: flowers, trees, birds... landmarks!\\""': '，你會錯過生活中的很多東西：花朵、樹木、鳥類……地標！」"',
    '"flowers"': '"花朵"',
    '"trees"': '"樹木"',
    '"birds"': '"鳥類"',
    '"\\"Ah, my least favorite subject. I find the trees much less interesting than the birds.\\""': '"「啊，我最不喜歡的科目。我覺得樹木比鳥類無趣多了。」"',
    '"\\"My favorite type of animal! The birds are so free, able to fly vast distances. How I wish I could roam about the open skies... most especially considering my current situation. Thou canst see so much more from the air, I am certain of it!\\""': '"「我最喜歡的動物！鳥類如此自由，能夠飛行很遠的距離。我多麼希望能漫遊在廣闊的天空……特別是考慮到我目前的處境。從空中你可以看到更多東西，我敢肯定！」"',
    '"\\"Very, very lovely plants. All the colors of the rainbow, and then some. One of the monks at the Abbey had a lovely flower garden. She may still tend it for all that I know, "': '"「非常、非常可愛的植物。有彩虹所有的顏色，甚至更多。修道院裡有一位僧侶擁有一個美麗的花園。據我所知，她可能還在打理它， "',
    '"She still does."': '"她還在打理。"',
    '"\\"Excellent, "': '"「太好了， "',
    '". I am glad to hear it. \'Twould be a shame were Aimi to give that up for her other... pastime.\\""': '。我很高興聽到這件事。如果 Aimi 為了她的另一個……消遣而放棄那個花園，那就太可惜了。」"',
    '"other pastime"': '"另一個消遣"',
    '"\\"Aimi also paints. Or rather, makes a bold attempt. I must, of course, commend her for her efforts.\\""': '"「Aimi 也畫畫。或者說，做了大膽的嘗試。當然，我必須讚揚她的努力。」"',
    '"\\"My favorite ones are the birds, especially the Golden-Cheeked Warbler. I love to follow and watch them. They do not seem to have a very good sense of direction, however.\\" He sighs. \\"But there is a great variety of species in this land.\\""': '"「我最喜歡的是鳥類，尤其是金頰林鶯 (Golden-Cheeked Warbler) 。我喜歡跟隨並觀察牠們。不過，牠們的方向感似乎不太好。」他嘆了口氣。「但這片土地上有很多種類。」"',
    '"\\"May thy good fortune guide thee down the trail of life.\\"*"': '"「願你的好運指引你走過人生的道路。」*"'
}

trans_046E = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"Brother Wayne"': '"Wayne 兄弟"',
    '"You see a mage with a wild look in his eyes."': '"你看到一個眼神狂野的法師。"',
    '"You see a mage with a peaceful look in his eyes."': '"你看到一個眼神平靜的法師。"',
    '"\\"Thou art talking to me?\\" Garok asks, suspiciously."': '"「你在跟我說話？」 Garok 懷疑地問。"',
    '"The mage stares at you a moment. \\"Art thou from the Britannian Tax Council?\\""': '"法師盯著你看了一會兒。「你是 Britannia 稅務委員會 (Tax Council) 的人嗎？」"',
    '"\\"Then I am nobody!\\"*"': '"「那我就不是任何人！」*"',
    '"\\"Good for thee. I would have had to kill thee. I am Garok Al-Mat. At least, the last time I looked in the mirror, that was who I was!\\""': '"「算你好運。不然我就得殺了你。我是 Garok Al-Mat 。至少，我上次照鏡子時是這麼覺得的！」"',
    '"\\"I like thee already! I am Garok Al-Mat.\\""': '"「我已經喜歡上你了！我是 Garok Al-Mat 。」"',
    '"Tax Council"': '"稅務委員會"',
    '"Garok looks as if he might suddenly tear out his hair, but he restrains himself.~~\\"I am... -was-... a mage. Until it all went wrong. I am attempting to correct things.\\""': '"Garok 看起來好像會突然扯下自己的頭髮，但他克制住了。~~「我是……『曾經』是……一個法師。直到一切都出了差錯。我正在試圖糾正這些事。」"',
    '"mage"': '"法師"',
    '"correct"': '"糾正"',
    '"\\"I am, and always have been, a mage. I was down here trying to locate what was amiss with the ethereal waves, but they seem to be all right now.\\""': '"「我一直都是一個法師。我來到這裡試圖找出乙太波到底出了什麼問題，但現在它們似乎已經恢復正常了。」"',
    '"ethereal waves"': '"乙太波"',
    '"Garok suddenly hits himself on the side of the head.~~ \\"Get out! Damn thee! Out of there! No one invited thee into mine head! Away with thee!\\"~~Garok hits himself again, shakes his head like a wet dog and makes a blubbering sound with his lips.~~Garok looks at you and smiles. \\"That\'s better. Now, what was it... oh yes, I remember. Thou dost not believe I am a mage? Well, I am. I live in the mountains. But now I am lost in this wretched dungeon.\\""': '"Garok 突然打了自己的頭側。~~「出去！該死的你！從那裡出來！沒人邀請你進我的腦袋！滾開！」~~ Garok 又打了自己一下，像隻溼透的狗一樣搖著頭，並用嘴唇發出噗噗的聲音。~~ Garok 看著你並微笑了。「好多了。現在，我們說到哪裡了……喔對了，我想起來了。你不相信我是個法師？嗯，我是。我住在山裡。但現在我迷失在這個該死的地城裡了。」"',
    '"thine head"': '"你的腦袋"',
    '"lost"': '"迷路"',
    '"\\"I usually live in the mountains, but I am lost in this dungeon.\\""': '"「我通常住在山裡，但我迷失在這個地城裡了。」"',
    '"\\"My magic is not working!\\""': '"「我的魔法沒用了！」"',
    '"\\"My magic was not working!\\""': '"「我的魔法之前沒用了！」"',
    '"\\"I attributed it to a disturbance in the ethereal waves! I had to find out what was happening. So here I am!\\""': '"「我把它歸咎於乙太波的干擾！我必須查明發生了什麼事。所以我來到這裡！」"',
    '"\\"There is a voice in mine head. Some demon of some sort. It is always congratulating me on things. And then other times it scolds me for things. I -know- it is not my conscience. I -know- what -he- sounds like! This is... someone else.\\""': '"「我腦海裡有一個聲音。某種惡魔之類的。它總是祝賀我做了某些事。然後其他時候又因為某些事罵我。我『知道』那不是我的良心。我『知道』『他』聽起來像什麼！這是……另一個人。」"',
    '"voice"': '"聲音"',
    '"\\"I started hearing it around the time my magic began to fail. I do not find it amusing.\\""': '"「大約在我的魔法開始失效時，我開始聽到這個聲音。我覺得這不好玩。」"',
    '"\\"My crystal ball told me that the source of my problems was in a dungeon, but it did not say which one. This was the first dungeon I had ever explored. I have not found anything that might help me, and I cannot find my way out!\\""': '"「我的水晶球告訴我，問題的根源在一個地城裡，但沒說是哪一個。這是我探索的第一個地城。我還沒找到任何可以幫助我的東西，而且我找不到出路了！」"',
    '"\\"I came down here to find the source of my problems. My crystal ball told me that it was in a dungeon, but did not say which one. This is my first dungeon expedition, and now I am lost.\\""': '"「我下來這裡是為了尋找我問題的根源。我的水晶球告訴我它在一個地城裡，但沒說是哪一個。這是我第一次探險地城，現在我迷路了。」"',
    '"wrong dungeon"': '"錯的地城"',
    '"way out"': '"出路"',
    '"You explain to Garok that the Tetrahedron Generator is located in Dungeon Deceit.~~\\"Hmmmm. Correct idea. Wrong dungeon.\\""': '"你向 Garok 解釋四面體產生器位於 Deceit 地城。~~「嗯。方向正確。但走錯了地城。」"',
    '"\\"Dost thou know the way out?\\""': '"「你知道出路嗎？」"',
    '"You tell Garok how to get out of the dungeon.~~\\"Why, it sounds so simple! My marbles must be losing me!~~ \\"I thank thee! Now I must be on my way. In fact, now that I know the way, I can use what little magic I have going for me to teleport. One must know the direction thou art travelling if one wishes to teleport!~~\\"Say, for helping me, wouldst thou like to have some useless reagents? By useless, I mean they are useless to me. They are probably perfectly good reagents. Thou art welcome to have them. Dost thou want them?\\""': '"你告訴 Garok 如何離開地城。~~「哎呀，聽起來真簡單！我一定是腦袋不清楚了！~~我感謝你！現在我必須上路了。事實上，既然我知道了路，我就可以用我所剩無幾的魔法來傳送。如果想傳送，必須知道自己要前進的方向！~~對了，為了感謝你的幫助，你想要一些沒用的秘藥嗎？我說的沒用，是指對我來說沒用。它們很可能是非常好的秘藥。歡迎你拿走。你想要嗎？」"',
    '"\\"Good. One less thing I have to carry.\\""': '"「很好。我少帶一樣東西了。」"',
    '"\\"Oh. Thou dost not have the room. Too bad.\\""': '"「喔。你沒有空間。太可惜了。」"',
    '"Garok shrugs. \\"Suit thyself. Thanks anyway.\\""': '"Garok 聳聳肩。「隨你便。無論如何還是謝謝你。」"',
    '"You watch as Garok turns, intones a spell, and vanishes.*"': '"你看著 Garok 轉身，念了個法術，然後消失了。*"',
    '"\\"Oh. Thou art as lost as I, eh? Then we shall surely die in here.\\""': '"「喔。你跟我一樣迷路了，是吧？那我們肯定會死在這裡。」"',
    '"\\"Grrrr! They are a thorn in my side! They have been seeking me for the past three years! I neglected to report a certain amount of income for reagent distribution, and somehow they found me out. By the way, if thou shouldst ever care to visit me in the mountains, I can sell thee reagents at reduced prices!\\""': '"「哼！他們是我的眼中釘！過去三年他們一直在找我！我忘了申報一筆分配秘藥的收入，不知怎麼被他們發現了。順帶一提，如果你有興趣來山裡找我，我可以打折賣給你秘藥！」"',
    '"\\"Yes, I remember him! He is lost, too! Dost thou know if he found his way out? Give him my best when thou dost speak to him.\\""': '"「是的，我記得他！他也迷路了！你知道他找到出路了嗎？你跟他說話時代我向他問好。」"',
    '"\\"Goodbye.\\"*"': '"「再見。」*"'
}

trans_046F = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a troll, sulking in his cell. As he breathes, you can see his ribs protrude out from under his hide."': '"你看到一個巨魔 (troll) 在他的牢房裡生悶氣。當他呼吸時，你可以看到他的肋骨從皮下凸出來。"',
    '"\\"What you want?\\" growls Gharl."': '"「你要什麼？」 Gharl 咆哮著。"',
    '"\\"I Gharl.\\""': '"「我 Gharl 。」"',
    '"He shakes his head. \\"No job. Hunt. Eat. Sleep. Now,\\" he gestures around the cell, \\"no hunt, no eat, just sleep.\\""': '"他搖搖頭。「沒工作。打獵。吃。睡覺。現在，」他比了比牢房四周，「沒打獵，沒吃，只有睡覺。」"',
    '"hunt"': '"打獵"',
    '"eat"': '"吃"',
    '"sleep"': '"睡覺"',
    '"\\"I good hunter. Catch many things.\\""': '"「我好獵人。抓很多東西。」"',
    '"\\"I still do that,\\" he says, shrugging. \\"But not as good as when home.\\""': '"「我還是會做，」他聳聳肩說。「但不如在家好。」"',
    '"home"': '"家"',
    '"He stares at you oddly and says, \\"With other trolls, fleshface! Under bridges.\\""': '"他古怪地盯著你說，「和其他巨魔一起，肉臉 (fleshface) ！在橋底下。」"',
    '"\\"No eat.\\" He shakes his head. \\"Not feed. Hate jailer!\\" he growls."': '"「沒吃。」他搖搖頭。「沒餵。討厭獄卒！」他咆哮著。"',
    '"offer food"': '"提供食物"',
    '"\\"You give me food?\\" His face displays a mixture of surprise and hope. \\"You give me food, I tell you secret. Yes?\\""': '"「你給我食物？」他的臉上露出驚訝和希望交織的表情。「你給我食物，我告訴你秘密。好嗎？」"',
    '"He quickly devours the food.~~\\"I thank. You want secret?\\""': '"他迅速狼吞虎嚥地吃了食物。~~「我感謝。你要秘密？」"',
    '"secret"': '"秘密"',
    '"\\"You taunt me. I not like you.\\"*"': '"「你嘲弄我。我不喜歡你。」*"',
    '"\\"Go away.\\"*"': '"「走開。」*"',
    '"\\"Trolls have powerful ally. He warn us in head when trouble around corner.\\""': '"「巨魔有強大盟友。當麻煩在轉角，他在腦袋裡警告我們。」"',
    '"He grunts and turns away.*"': '"他咕噥了一聲，轉過身去。*"'
}

all_trans = {
    '046D': trans_046D,
    '046E': trans_046E,
    '046F': trans_046F
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
