import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_0473 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"The woman you see in front of you has a concerned expression on her face, as if her thoughts were far away."': '"你面前的這位女性臉上帶著擔憂的表情，彷彿她的思緒飄到了很遠的地方。"',
    '"\\"Hail, "': '"「嗨， "',
    '". Might I assist thee?\\" asks Penni."': '。我能幫你什麼忙嗎？」 Penni 問。"',
    '"\\"My name is Penni, "': '"「我的名字是 Penni ， "',
    '"\\"I have no occupation, "': '"「我沒有職業， "',
    '". At least not one I would call work. I do, however, teach skills in close quarter combat.~~She thinks for a moment. \\"I suppose a better way to answer thy question would have been to say `Yes, I do have a job.\' I\'m a trainer. But,\\" she smiles, \\"I enjoy it too much to call it work.\\""': '。至少沒有我會稱之為『工作』的事。不過，我確實有教導近身戰鬥的技巧。~~她想了一會兒。「我想更好的回答方式應該是說『是的，我有工作』。我是一名訓練師。但是，」她笑了笑，「我太享受這份工作了，以至於不想稱之為工作。」"',
    '"enjoy"': '"享受"',
    '"train"': '"訓練"',
    '"\\"I have loved close-quarter fighting since I was old enough to grasp my first spear. That\'s why I moved to Yew.\\""': '"「從我大到能握住第一把長矛開始，我就愛上了近身戰鬥。這就是我搬到 Yew 的原因。」"',
    '"spear"': '"長矛"',
    '"Yew"': '"Yew"',
    '"\\"It is my choice in arms. The spear combines the best of both range and power. It is the perfect hunting weapon.\\""': '"「這是我選擇的武器。長矛結合了距離和力量的優勢。它是完美的狩獵武器。」"',
    '"\\"I moved here to hunt, of course. The forest is full of game. I would not think of living anywhere else!\\""': '"「當然，我搬到這裡是為了打獵。這片森林充滿了獵物。我不想住在其他任何地方！」"',
    '"\\"Art thou interested in training? My price is 35 gold for each training session.\\""': '"「你有興趣接受訓練嗎？我的收費是每次訓練 35 個金幣。」"',
    '"\\"I am sorry, "': '"「抱歉， "',
    '", but I am not training at this moment. Perhaps if thou wert to return between 9 in the morning and 6 in the evening, I will be able to help thee.\\""': '，但我現在不進行訓練。或許如果你在早上 9 點到晚上 6 點之間回來，我就能幫你了。」"',
    '"\\"Perhaps next time.\\""': '"「或許下次吧。」"',
    '"Bradman"': '"Bradman"',
    '"\\"Yes,\\" she nods her head, grinning, \\"I know Bradman. We go hunting together. Of course, he rarely catches anything with that toothpick shooter of his.\\""': '"「是的，」她點點頭，咧嘴笑著說，「我認識 Bradman 。我們會一起去打獵。當然，他用那把『牙籤發射器』很少能抓到什麼東西。」"',
    '"\\"I resent that, my friend. Bows and crossbows can be wielded with deadly effect.\\""': '"「我對這句話感到不滿，我的朋友。弓和十字弓也是能發揮致命效果的。」"',
    '"She smiles, nodding to Iolo. \\"Perhaps thou art correct, friend archer, but I prefer more physical challenges.\\""': '"她笑著對 Iolo 點點頭。「或許你說得對，弓箭手朋友，但我更喜歡肢體上的挑戰。」"',
    '"Addom"': '"Addom"',
    '"\\"Addom is mine husband. But how did...?\\" She appears confused, but suddenly directs her gaze at you. \\"Hast thou seen him?\\""': '"「Addom 是我丈夫。但你怎麼會……？」她顯得很困惑，但突然盯著你看。「你見過他嗎？」"',
    '"\\"Is he in good health?\\""': '"「他身體好嗎？」"',
    '"\\"Thank goodness!\\" she sighs in relief."': '"「謝天謝地！」她鬆了一口氣。"',
    '"\\"I knew he should not have left this time! I hate it when he leaves!\\" She chokes back her tears.*"': '"「我就知道他這次不該離開的！我討厭他離開！」她強忍著淚水。*"',
    '"\\"I do hate it so when he travels so far away for such a long time. I can only hope he returns to mine arms quickly!\\" She peers off in the distance, as if searching for Addom."': '"「我真的好討厭他旅行到那麼遠的地方，去那麼長的時間。我只希望他能快點回到我的懷抱！」她望向遠方，彷彿在尋找 Addom 。"',
    '"\\"Good journeying, "': '"「旅途愉快， "',
}

trans_0474 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"Resting an axe on his shoulder, a tall, broad-chested man smiles and nods at you."': '"一個將斧頭扛在肩上、身材高大、胸膛寬闊的男人笑著對你點頭。"',
    '"\\"\'ello, "': '"「你好， "',
    '". Good day, ay?\\""': '。日安，對吧？」"',
    '"\\"Thou kin call me Ben, "': '"「你可以叫我 Ben ， "',
    '"\\"I be a logger, "': '"「我是一個伐木工， "',
    '". \'Tis what I have done all my life. In fact, "': '。這是我一輩子都在做的事。事實上， "',
    '", \'tis what my father did. And \'is father before \'im. And so on. We have been doin\' this for more than ten generations.\\""': '，我父親也是做這個的。他父親之前也是。以此類推。我們做這行已經超過十代了。」"',
    '"\\"Why, yes, "': '"「哎呀，是的， "',
    '", I cut down Silverleaf trees. They only grow in one area, so I \'afta travel quite a distance when I needs some of their wood. Why dost thou ask, "': '，我砍伐銀葉樹 (Silverleaf trees) 。它們只生長在一個區域，所以我需要它們的木材時，得走很長一段路。你為什麼問這個， "',
    '"?~~\\"Oh, I see,\\" he grins, \\"Thou wants some for thyself, ay?\\""': '？~~「喔，我懂了，」他咧嘴一笑，「你想要一些給自己用，對吧？」"',
    '"\\"I am sorry, "': '"「抱歉， "',
    '", I do not know \'ow to prepare it. Perhaps thou shouldst try a pub.\\""': '，我不知道怎麼料理它。或許你該去酒館試試。」"',
    '"\\"Thou\'st got another reason for askin\'?\\""': '"「你有其他原因問這個嗎？」"',
    '"Silverleaf"': '"銀葉樹"',
    '"one area"': '"一個區域"',
    '"Yew"': '"Yew"',
    '"forest"': '"森林"',
    '"\\"They mainly populate the east part o\' the Great Forest, way on the other side.\\""': '"「它們主要分布在大森林的東部，在很遠的另一邊。」"',
    '"\\"It was once a large town, but now, \'tis but a smattering of cottages livin\' throughout the woods.\\""': '"「它曾經是個大城鎮，但現在，只剩下散布在森林各處的一些小屋了。」"',
    '"\\"I am afraid, "': '"「恐怕， "',
    '", that I know no one in this area. But,\\" he adds proudly, \\"I do know \'oo runs the sawmill in Minoc. I also know that monks reside in the abbey, next to the high court.\\""': '，我在這個區域不認識任何人。但，」他驕傲地補充說，「我確實認識在 Minoc 經營鋸木廠的人。我也知道有僧侶住在高等法院旁邊的修道院裡。」"',
    '"sawmill"': '"鋸木廠"',
    '"high court"': '"高等法院"',
    '"\\"The sawyer there is named William.\\""': '"「那裡的鋸木工叫 William 。」"',
    '"\\"\'Tis in the building just northeast of the Brotherhood. I know they keep prisoners there.\\""': '"「就在兄弟會東北邊的建築裡。我知道他們把囚犯關在那裡。」"',
    '"Emps"': '"Emps"',
    '"\\"What in the bloody \'ell are emps?\\"~~After you quickly explain the Silverleaf Tree situation to him, he exclaims, \\"Oh, well, that\'s \'orrible. I did not realize anyone -- er -- any other creature used the Silverleaf trees. What\\tkin I do about it?\\""': '"「那見鬼的 Emps 是什麼東西？」~~在你快速向他解釋了銀葉樹的情況後，他驚呼道，「喔，那太可怕了。我不知道有任何人——呃——任何其他生物在使用銀葉樹。我能怎麼做呢？」"',
    '"sign contract"': '"簽署合約"',
    '"\\"Why, o\' course I\'ll sign. No more Silverleaf trees for me.\\""': '"「哎呀，我當然會簽。我不會再砍銀葉樹了。」"',
    '"He takes the contract from you and signs it."': '"他從你手中接過合約並簽了名。"',
    '"\\"And please apologize to the Emps for me, "': '"「請替我向 Emps 道歉， "',
    '". I never meant to destroy their \'omes.\\""': '。我從來無意破壞他們的家園。」"',
    '"\\"Well, I would sign it, but it seems thou hast lost it. If thou dost find it again I will be more than happy to help thee and the Emps.\\""': '"「嗯，我很樂意簽，但看來你把它弄丟了。如果你再找到它，我會非常樂意幫助你和 Emps 。」"',
    '"\\"All right, "': '"「好吧， "',
    '",\\" he shrugs."': '，」他聳聳肩。"',
    '"He turns to Trellek. \\"Please apologize to thy kindred for me. I never meant to destroy thine \'omes. Friends, ay?\\"~~ Trellek smiles and nods."': '"他轉向 Trellek 。「請代我向你的同胞道歉。我從來無意破壞你們的家園。當個朋友，好嗎？」~~ Trellek 微笑著點點頭。"',
    '"\\"G\'bye, "': '"「再見， "',
    '". Pleasant journeys, ay.\\"*"': '。旅途愉快，對吧。」*"'
}

trans_0475 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"The beady-eyed man sneers at you."': '"這個小眼睛的男人對你冷笑。"',
    '"\\"What dost thou want now?\\" Goth spits."': '"「你現在又想要什麼？」 Goth 啐了一口。"',
    '"\\"Goth. Not that it is any of thy business!\\""': '"「Goth 。雖然這不關你的事！」"',
    '"\\"What does it look like I do?\\" he says, holding up a ring of keys. \\"Gardening?\\""': '"「你看我像在做什麼？」他舉起一串鑰匙說。「園藝嗎？」"',
    '"keys"': '"鑰匙"',
    '"gardening"': '"園藝"',
    '"\\"These? They are for the prisoner\'s cells, witless knave!\\""': '"「這些？這是牢房的鑰匙，無腦的惡棍！」"',
    '"\\"What? Art thou daft?\\" He shakes his head. \\"Well, at least thou art in the right area for gardening.\\""': '"「什麼？你瘋了嗎？」他搖搖頭。「嗯，至少你來對了適合園藝的地方。」"',
    '"area"': '"區域"',
    '"\\"Empath Abbey, dolt!\\""': '"「共情修道院，笨蛋！」"',
    '"Empath Abbey"': '"共情修道院"',
    '"\\"As a matter of fact,  know quite a bit about the people who live here. And I just might even tell thee. What is it worth to thee in gold?\\""': '"「事實上，我對住在這的人了解不少。而且我說不定會告訴你。對你來說這值多少金幣？」"',
    '"nothing"': '"什麼都不給"',
    '"2"': '"2"',
    '"3"': '"3"',
    '"4"': '"4"',
    '"5"': '"5"',
    '"\\"I will tell thee for 5 gold. Interested?\\""': '"「給我 5 個金幣我就告訴你。有興趣嗎？」"',
    '"He glowers at you. \\"Thou must do better than that, fool!\\""': '"他對你怒目而視。「你得多給點才行，蠢貨！」"',
    '"\\"Thou dost not have enough money, stonehead.\\""': '"「你沒有足夠的錢，石頭腦袋。」"',
    '"\\"I will tell thee what I know: Sir Jeff is in charge of the High Court. \'E\'s a real mean bastard, so I would stay away from \'im. The monks nearby make excellent wine, and Aimi doth warm a man\'s... heart. And whatever thou dost, do not waste time talking to the undertaker -- \'e\'s daft in the head.\\""': '"「我會告訴你我所知道的： Jeff 爵士掌管高等法院。他是個真正的惡棍，所以我建議你離他遠點。附近的僧侶釀的酒很棒，而且 Aimi 能溫暖男人的……心。還有不管你做什麼，別浪費時間跟那個棺材佬說話——他腦袋有問題。」"',
    '"\\"Another, eh. Hast thou 5 more gold for me?\\""': '"「還要另一個消息，嗯。你還有 5 個金幣給我嗎？」"',
    '"\\"Thou canst not fool me, brainless dolt. Thou dost not have enough gold!\\""': '"「你騙不了我，無腦的笨蛋。你沒有足夠的金幣！」"',
    '"\\"Fine, slug!\\"*"': '"「很好，鼻涕蟲！」*"',
    '"prisoners"': '"囚犯"',
    '"buy keys"': '"買鑰匙"',
    '"\\"One of them is named D\'Rel. E\'s a pirate, from Buccaneer\'s Den.\\""': '"「其中一個叫 D\'Rel 。他是個海盜，來自海盜巢穴。」"',
    '"another prisoner"': '"另一個囚犯"',
    '"\\"The other one is a troll. \'E don\'t talk much, but\\t\'e\'s the first troll prisoner I have ever seen.\\""': '"「另一個是個巨魔 (troll) 。他不怎麼說話，但這是我第一次見到巨魔囚犯。」"',
    '"\\"Thou dost want these, eh?\\" he asks, holding up keys. \\"\'Twill cost thee... 20 gold. Still want them?\\""': '"「你想要這些，嗯？」他舉起鑰匙問。「這要花你…… 20 個金幣。還想要嗎？」"',
    '"\\"Done!\\""': '"「成交！」"',
    '"He smiles cruelly. \\"I am afraid thou dost not have enough gold.\\""': '"他殘忍地笑了笑。「恐怕你沒有足夠的金幣。」"',
    '"\\"Thou dost not have enough gold, toad.\\""': '"「你沒有足夠的金幣，癩蛤蟆。」"',
    '"\\"Pinchpenny!\\"*"': '"「小氣鬼！」*"',
    '"\\"Fine by me!\\""': '"「我沒意見！」"',
    '"\\"Fine. Rot for all I care!*\\"': '"「很好。去死吧，我才不在乎！*」"',
    '"\\"Indeed, knave. Get thee gone!\\"*"': '"「的確，惡棍。快滾吧！」*"'
}

all_trans = {
    '0473': trans_0473,
    '0474': trans_0474,
    '0475': trans_0475
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
