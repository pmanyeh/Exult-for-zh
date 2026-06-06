import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_041B = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"audition"': '"試鏡"',
    '"Miranda"': '"Miranda"',
    '"Max"': '"Max"',
    '"You can see the creativity literally flowing in abundance from this fellow. He looks at you with interest."': '"你可以看到這個傢伙身上洋溢著豐富的創造力。他饒有興趣地看著你。"',
    '"\\"Yes, yes?\\" Raymundo snaps. \\"What dost thou want? I\'m busy!\\""': '"「是，是？」 Raymundo 不耐煩地說。「你要做什麼？我很忙！」"',
    '"\\"I am Raymundo.\\""': '"「我是 Raymundo 。」"',
    '"\\"Why, I am famous throughout the land! Hast thou not heard of me?\\""': '"「哎呀，我在這片土地上可是很有名的！你沒聽過我嗎？」"',
    '"\\"I told thee so!"': '"「我告訴過你了！"',
    '"\\"-Really-!? I am surprised! But never mind..."': '"「『真的』！？我很驚訝！但沒關係……"',
    '"\\"I am the Director of the Royal Theatre here in Britain. I am also Playwright-in-Residence. I compose a tune now and then as well. I sometimes act, but it is not wise to act in something that one directs.~"': '"「我是 Britain 這裡皇家劇院的導演。我也是駐院劇作家。我偶爾也會作作小曲。我有時也演戲，但演自己導的戲是不明智的。~"',
    '"\\"We are working on a play at the moment.\\""': '"「我們目前正在排練一齣戲。」"',
    '"\\"Come by the theatre during the day and watch the rehearsals for our play.\\""': '"「白天來劇院看看我們排戲吧。」"',
    '"Royal Theatre"': '"皇家劇院"',
    '"play"': '"戲劇"',
    '"\\"It\'s a little something I wrote entitled \'The Trials of the Avatar\'. It\'s about a legendary figure in Britannian history.\\" The artist looks you up and down."': '"「這是我寫的一個小東西，名叫《聖者的試煉》。是關於 Britannia 歷史上的一位傳奇人物。」這位藝術家上下打量著你。"',
    '"\\"Hmmm. Thou dost have a certain quality... hast thou ever acted on stage?\\""': '"「嗯。你確實有一種特質……你有在舞台上表演過嗎？」"',
    '"\\"I thought so!"': '"「我就知道！"',
    '"\\"Well, it does not matter. I am sure thou couldst quickly adapt."': '"「嗯，這無所謂。我相信你很快就能適應。"',
    '"\\"Officially, auditions have closed and the play is already cast. However, we need someone to understudy the role of the Avatar. Wouldst thou like to audition?\\""': '"「官方說法是，試鏡已經結束，這齣戲的演員也已經決定了。然而，我們需要有人來做聖者這個角色的替補演員。你想試鏡嗎？」"',
    '"\\"Excellent! What thou needest to do is to visit Gaye\'s Clothier Shoppe and purchase an Avatar costume. I can audition thee once I see thee in -proper- attire. Run along and do that, quickly now, I\'m a busy man.\\"*"': '"「太好了！你需要做的是去 Gaye 的服裝店買一套聖者服裝。只要我看到你穿上『合適的』服裝，我就能為你試鏡。快去辦吧，快點，我是個大忙人。」*"',
    '"\\"No? Thou hast never dreamed of performing on the stage? Seeing thy name in torches? Donning the olde grease paint and wig? Bowing to thunderous applause? Well, begone then, I have not the time for chatting with the public.\\"*"': '"「不想？你從沒夢想過在舞台上表演？看到你的名字被火把照亮？塗上古老的油彩、戴上假髮？在雷鳴般的掌聲中鞠躬？好吧，那就走吧，我沒時間跟公眾聊天。」*"',
    '"\\"\'Tis a wonderful space, dost thou not think? \'Twas opened only last year, thanks to the sponsorship of a few wealthy citizens of our great city.\\""': '"「這是一個很棒的空間，你不覺得嗎？去年才剛開幕，這要感謝我們這座偉大城市裡幾位富有的公民的贊助。」"',
    '"sponsorship"': '"贊助"',
    '"citizens"': '"公民"',
    '"\\"The construction of the actual theatre building was paid for by the Royal Mint, but the theatre company relies solely on the support of individuals such as thyself. Wouldst thou like to make a modest contribution of, say, ten gold pieces to our theatre company?\\""': '"「實際劇院建築的建造費用是由皇家造幣廠支付的，但劇團完全依賴像你這樣的個人的支持。你願意為我們的劇團捐獻一點點，比如說，十枚金幣嗎？」"',
    '"\\"I thank thee. Thou hast shown thyself to be a true patron of the arts and a person of culture and refinement.\\""': '"「我感謝你。你證明了自己是藝術的真正贊助者，也是個有文化、有教養的人。」"',
    '"\\"Thine unconvincing performance gave thy game away! Thou dost not have ten gold pieces!\\""': '"「你不具說服力的表演洩露了你的底細！你根本沒有十枚金幣！」"',
    '"\\"Give a man a loaf of bread and thou hast fed him for a day, give a man a play and perhaps thou hast fed his soul for a lifetime! Once thou hast seen one of our productions I am certain thou shalt reconsider.\\""': '"「給人一條麵包，你只能餵飽他一天；給人一齣戲，也許你餵飽了他一生的靈魂！一旦你看過我們的一部作品，我確信你會重新考慮的。」"',
    '"\\"I see thou art ready? Very well. Take center stage, wouldst thou?\\""': '"「看來你準備好了？很好。請到舞台中央好嗎？」"',
    '"\\"Where is thy costume? Thou cannot audition without a costume!\\"*"': '"「你的服裝呢？沒有服裝你不能試鏡！」*"',
    '"\\"Come to the theatre during rehearsal hours, wouldst thou?\\"*"': '"「排練時間來劇院，好嗎？」*"',
    '"Raymundo takes a deep breath and smiles."': '"Raymundo 深吸了一口氣，微笑了起來。"',
    '"\\"Ah, lovely woman. \'Tis a pity she is more interested in politics than the stage. But I must say that we get along famously!\\""': '"「啊，可愛的女人。可惜她對政治比對舞台更感興趣。但我必須說，我們相處得非常融洽！」"',
    '"\\"He is quite a character, is he not?\\" Raymundo\'s face fills with pride."': '"「他真是個有個性的人，不是嗎？」 Raymundo 的臉上充滿了驕傲。"',
    '"\\"Takes after his old man, I must say. He is sure to be a great actor. Or writer. Or director. Or producer.\\""': '"「我必須說，這遺傳了他的老爸。他一定會成為一個偉大的演員。或是作家。或是導演。或是製作人。」"',
    '"\\"Well, I am really not at liberty to divulge the names of our patrons. But most of them belong to The Fellowship.\\""': '"「嗯，我真的不便透露我們贊助者的名字。但他們大多屬於兄弟會。」"',
    '"patrons"': '"贊助者"',
    '"Fellowship"': '"兄弟會"',
    '"\\"These are people who contribute to our theatre. They come from all walks of life and have little in common besides a love of fine theatre.\\""': '"「這些是為我們劇院做出貢獻的人。他們來自各行各業，除了熱愛優質戲劇之外，幾乎沒有什麼共同點。」"',
    '"\\"For non-artists, they have given generous contributions to the theatre. They are -fine- people in my book!\\" He rubs his hands with glee."': '"「對於非藝術家來說，他們對劇院給予了慷慨的貢獻。在我的字典裡，他們是『優秀』的人！」他高興地搓著雙手。"',
    '"\\"I am not a member, though.\\""': '"「不過我不是成員。」"',
    '"\\"Leaving? Sorry, I do not give autographs.\\"*"': '"「要走了？抱歉，我不給人簽名。」*"',
    '"@Louder! I can\'t hear thee!@"': '"@大聲點！我聽不見！@"',
    '"@Move stage right, please.@"': '"@請移到舞台右側。@"',
    '"@Try that scene again.@"': '"@再試一次那個場景。@"',
    '"@From the top, please.@"': '"@請從頭開始。@"'
}

trans_041C = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"This is a tall, skinny actor with knobby knees."': '"這是一個又高又瘦、膝蓋骨突出的男演員。"',
    '"He wears a woman\'s wig and is dressed in drag."': '"他戴著女人的假髮，男扮女裝。"',
    '" he says in falsetto."': '"他用假音說。"',
    '"Jesse clears his throat. \\"Hello again!\\""': '"Jesse 清了清喉嚨。「又見面了！」"',
    '"The actor speaks in falsetto."': '"這位男演員用假音說話。"',
    '"\\"I am Jesse and I am a star.\\""': '"「我是 Jesse ，我是一個明星。」"',
    '"He slaps his own face and speaks in a normal register, \\"Oops, sorry! I am so entrenched in the role that I sometimes forget that I am not a woman!\\""': '"他打了自己一巴掌，然後用正常的聲音說：「哎呀，抱歉！我太入戲了，有時會忘記我不是個女人！」"',
    '"\\"I work at the Royal Theatre as an actor. I have played -all- the great roles in my career. I now have the chance to play the part of a lifetime -- the Avatar!\\""': '"「我在皇家劇院當演員。在我的職業生涯中，我演過『所有』偉大的角色。我現在有機會扮演一生難求的角色——聖者！」"',
    '"Royal Theatre"': '"皇家劇院"',
    '"Avatar"': '"聖者"',
    '"\\"Because it must cater to the masses, we never have the opportunity to do experimental works -- only the traditional gruel of mediocrity. But \'tis a wonderful space and it has marvelous acoustics.\\""': '"「因為它必須迎合大眾，所以我們從來沒有機會做實驗性的作品——只有傳統平庸的雜碎。但這是一個很棒的空間，而且音響效果極佳。」"',
    '"masses"': '"大眾"',
    '"experimental works"': '"實驗性作品"',
    '"\\"People like to see tales of heroic adventures, knights in armour, beautiful princesses, wise kings, wizards, evil monsters. All that rot.\\""': '"「人們喜歡看英雄冒險的故事、穿著盔甲的騎士、美麗的公主、明智的國王、巫師、邪惡的怪物。所有這些爛東西。」"',
    '"\\"The role is very challenging. I have a plethora of lines and I had to work with a trainer for weeks to prepare for the enormous amount of activity required. This role will make \'Jesse\' a household name!\\""': '"「這個角色非常具挑戰性。我有大量的台詞，而且我必須和教練一起訓練好幾個星期，為所需的大量活動做準備。這個角色會讓『Jesse』這個名字家喻戶曉！」"',
    '"challenging"': '"具挑戰性"',
    '"lines"': '"台詞"',
    '"\\"It is easily the most ambitious theatrical production ever conceived. There is over a hundred hours of play time. That is a long time for an audience.\\""': '"「這絕對是有史以來構思最宏大的戲劇作品。有超過一百個小時的演出時間。對觀眾來說，這是一段很長的時間。」"',
    '"\\"My biggest lines are:~~\\"Name!\\"~~\\"Job!\\"~~\\"Bye!\\""': '"「我最大的台詞是：~~「姓名！」~~「職業！」~~「告辭！」」"',
    '"\\"My favorite piece is something Raymundo wrote for me entitled \'Three on a Codpiece\'. I stand on stage and invite the audience to join me in tearing an undergarment into tiny pieces, after which they are placed in funeral urns and mixed with wheat paste. The pieces of cloth, not the audience members. Then the audience may glue the pieces anywhere on my body that they wish.\\""': '"「我最喜歡的作品是 Raymundo 為我寫的，名為《三人共穿一件護襠》。我站在舞台上，邀請觀眾加入我，把一件內衣撕成碎片，然後把它們放進骨灰甕裡，與小麥糊混合。是碎布，不是觀眾。然後觀眾可以把碎片黏在我身上他們想要的任何地方。」"',
    '"\\"Goodbye. Be sure to come to the show when it opens!\\"*"': '"「再見。開演時一定要來看戲喔！」*"',
    '"@Name!@"': '"@姓名！@"',
    '"@Job!@"': '"@職業！@"',
    '"@Yes! Er, I mean No!@"': '"@是！呃，我是說不！@"',
    '"@Bye!@"': '"@告辭！@"'
}

trans_041D = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"This actor has much stage presence and a booming voice."': '"這個男演員很有舞台魅力，聲音也很宏亮。"',
    '"Stuart looks down his nose at you. \\"Yes?\\""': '"Stuart 傲慢地看著你。「有事嗎？」"',
    '"\\"My real name is Stuart. My stage name is Laurence.\\""': '"「我的本名是 Stuart 。我的藝名是 Laurence 。」"',
    '"Laurence"': '"Laurence"',
    '"\\"I am the greatest actor who ever lived,\\" he proclaims with absolutely no modesty. \\"I am playing the character \'Iolo\' in the new play.\\""': '"「我是有史以來最偉大的演員，」他毫不謙虛地宣告。「我在新戲裡扮演『Iolo』這個角色。」"',
    '"Iolo"': '"Iolo"',
    '"\\"\'Tis the name of a particular hero of mine.\\""': '"「這是我特別崇拜的一位英雄的名字。」"',
    '"Stuart\'s feathers are obviously ruffled. \\"Yes. I have been cast as second banana yet again! I am much more suited to play the Avatar, but did Raymundo cast me? Noooo!\\""': '"Stuart 顯然被激怒了。「是的。我又被分配演配角了！我明明更適合演聖者，但 Raymundo 有選我嗎？沒有！！」"',
    '"\\"But thou art nothing like me!\\"*"': '"「但你一點都不像我！」*"',
    '"\\"And who art thou, pray tell?\\"*"': '"「請問，你是誰？」*"',
    '"\\"Why, I am the -real- Iolo!\\"*"': '"「哎呀，我可是『貨真價實』的 Iolo ！」*"',
    '"\\"Of course thou art. And I am really Lord British. Thou must take me for an ass to think I would believe that.\\"*"': '"「你當然是。而我真的是 Lord British 。你一定是把我當成白痴了，以為我會相信那種話。」*"',
    '"Your friend whispers to you. \\"These actor types. A touchy bunch, eh?\\"*"': '"你的朋友對你低語。「這些當演員的。真是一群敏感的傢伙，是吧？」*"',
    '"Raymundo"': '"Raymundo"',
    '"Avatar"': '"聖者"',
    '"\\"I suppose he\'s a good director. He never casts me in the right roles, though. And to think I went to school with him! We were on our first stage crew together!\\""': '"「我想他是個好導演。但他從來不讓我演合適的角色。想想我還跟他同過校！我們還一起參加過我們第一次的舞台劇組！」"',
    '"Stuart whispers to you, \\"Jesse is all wrong! Why, -thou- wouldst make a better Avatar than he! And -thou- probably couldst not act thy way out of a reagent bag! That is not a reflection on thee, but on Jesse.\\""': '"Stuart 對你低語，「Jesse 完全不對！哎呀，『你』都會是個比他更好的聖者！而『你』的演技大概爛到連裝秘藥的袋子都演不好！這不是在說你，而是在說 Jesse 。」"',
    '"act"': '"演戲"',
    '"\\"Acting is the highest form of art. It allows one to step outside oneself and become another person. \'Tis like a game!\\""': '"「演戲是最高形式的藝術。它能讓人走出自我，成為另一個人。就像一場遊戲！」"',
    '"\\"Goodbye. Be sure to come to the show when it opens!\\"*"': '"「再見。開演時一定要來看戲喔！」*"',
    '"@I am Iolo, my liege!@"': '"@我是 Iolo ，我的君主！@"',
    '"@I hear something to the east!@"': '"@我聽到東邊有聲音！@"',
    '"@This is Dungeon Despise!@"': '"@這是 Despise 地城！@"',
    '"@Ready the bow to use it!@"': '"@準備好弓來使用它！@"'
}

trans_041E = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"Shamino"': '"Shamino"',
    '"This lovely actress is dressed in a mouse costume."': '"這位可愛的女演員穿著老鼠裝。"',
    '"\\"Hello, there!\\" Amber says."': '"「哈囉！」 Amber 說。"',
    '"\\"I am Amber.\\""': '"「我是 Amber 。」"',
    '"\\"I am an actress at the Royal Theatre. I am playing the role of Sherry the Mouse in the new play.\\""': '"「我是皇家劇院的女演員。我在新戲裡扮演老鼠 Sherry 的角色。」"',
    '"Royal Theatre"': '"皇家劇院"',
    '"Sherry"': '"Sherry"',
    '"play"': '"戲劇"',
    '"\\"\'Tis a lovely space in which to perform. I have dedicated my life to acting, thou knowest.\\""': '"「那是個很棒的表演空間。我已經將我的一生奉獻給演戲了，你知道的。」"',
    '"space"': '"空間"',
    '"dedicated"': '"奉獻"',
    '"\\"Raymundo himself had a hand in the design of the theatre.\\""': '"「Raymundo 本人參與了劇院的設計。」"',
    '"\\"Actually, this will be my debut theatrical performance. I have been working as a barmaid waiting for my first chance to be in the theatre.\\""': '"「實際上，這將是我第一次的戲劇演出。我一直在當酒吧女侍，等待我在劇院的第一個機會。」"',
    '"\\"Between thee and me, methinks the play stinks.\\" She winks at you."': '"「你知我知就好，我覺得這齣戲爛透了。」她對你眨了眨眼。"',
    '"\\"Canst thou imagine such drivel? I do not believe there ever was a Sherry the Mouse. Who ever heard of a mouse that could talk! Especially these lines! I would rather play a queen. Much more fitting for me, I would say.\\""': '"「你能想像這種廢話嗎？我不相信真的有老鼠 Sherry 。誰聽過會說話的老鼠！尤其是這些台詞！我寧願演女王。我會說，那對我來說合適多了。」"',
    '"lines"': '"台詞"',
    '"queen"': '"女王"',
    '"\\"I have to memorize this preposterous children\'s story called \'Hubert\'s Hair-Raising Adventure\'.\\""': '"「我必須背下這個叫《Hubert 驚險奇遇記》的荒謬兒童故事。」"',
    '"\\"I asked Raymundo about this and he threw a tantrum. He said that it would not be historically accurate. Ha! As if that were something of any significance!\\""': '"「我問了 Raymundo 這件事，他就發脾氣了。他說那樣不符合歷史。哈！說得好像那很重要一樣！」"',
    '"\\"Poo Poo Head!\\" she cries. She then rushes to him and kisses him full on the mouth. Shamino turns red and shuffles his feet.*"': '"「大便頭 (Poo Poo Head) ！」她大叫。然後她衝向他，重重地吻了他的嘴。 Shamino 臉紅了，不安地挪動著腳步。*"',
    '"\\"Not in front of the Avatar, Poo!\\"*"': '"「不要在聖者面前這樣，Poo！」*"',
    '"\\"To blazes with the Avatar!\\" She kisses him again. \\"The Avatar is the last one who will convince thee to settle down.\\""': '"「管他什麼聖者！」她又吻了他。「聖者是最不可能說服你安定下來的人。」"',
    '"\\"Dost thou know my beau? He is probably drowning his sorrows at the Blue Boar. The lazy knave! I will not let him go about adventuring. It is time for him to settle down. Thou canst tell him I said so!\\""': '"「你認識我的男朋友嗎？他大概在藍野豬酒館裡借酒澆愁。這個懶惰的無賴！我不會讓他去冒險的。他該安定下來了。你可以告訴他這是我說的！」"',
    '"\\"Adieu!\\"*"': '"「再見 (Adieu) ！」*"',
    '"@Hubert the Lion was...@"': '"@獅子 Hubert 是……@"',
    '"@Why do I say that?@"': '"@我為什麼這麼說？@"',
    '"@My costume is too big.@"': '"@我的戲服太大了。@"',
    '"@I -hate- my lines!@"': '"@我『討厭』我的台詞！@"'
}

all_trans = {
    '041B': trans_041B,
    '041C': trans_041C,
    '041D': trans_041D,
    '041E': trans_041E
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
