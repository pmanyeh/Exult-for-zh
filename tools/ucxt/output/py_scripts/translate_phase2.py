import os
import shutil

scripts = ['041C.es', '041D.es', '041E.es', '041F.es', '0420.es', '0421.es', '0422.es']
base_dir = r'd:\git\exult-master\tools\ucxt\output'

for script in scripts:
    src = os.path.join(base_dir, 'es_scripts', script)
    dst = os.path.join(base_dir, 'zh_script', '003', script)
    shutil.copyfile(src, dst)

replacements = {
    # Common UI
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"join"': '"加入"',

    # 041C
    '"This is a tall, skinny actor with knobby knees."': '"這是一位高瘦、膝蓋骨節突出的男演員。"',
    '"He wears a woman\'s wig and is dressed in drag."': '"他戴著女用假髮，穿著女裝。"',
    '"Laurence"': '"Laurence"',
    '"Iolo"': '"Iolo"',
    '"act"': '"演戲"',
    '"\\"I am Laurence, at thy service.\\""': '"「我是 Laurence ，為您服務。」"',
    '"\\"Why, I am an actor of course! Hast thou not heard of me?\\""': '"「哎呀，我當然是個演員！你難道沒聽說過我嗎？」"',
    '"\\"I am the finest actor in all of Britannia!\\""': '"「我是全 Britannia 最優秀的演員！」"',
    '"\\"Do not feel so badly. Not everyone in Britannia attends the theatre.\\""': '"「別覺得難過。不是每個 Britannia 的人都會去劇院。」"',
    '"\\"I am afraid we are busy rehearsing.\\""': '"「恐怕我們正忙著排練。」"',
    '"\\"Right now we are in rehearsals for \'The Trials of the Avatar\'. \'Tis a new play.\\""': '"「現在我們正在排練『聖者的試煉（The Trials of the Avatar）』。這是一齣新戲。」"',
    '"\\"I will be portraying Iolo, the famous bard! \'Tis a demanding role, indeed. I must sing and dance and play the lute. And shoot the crossbow, of course.\\""': '"「我將扮演 Iolo ，那位著名的吟遊詩人！這確實是個要求很高的角色。我必須唱歌、跳舞、彈奏魯特琴。當然還要射十字弓。」"',
    '"\\"I am certain that if Iolo saw me, he would be moved to tears.\\""': '"「我敢肯定，如果 Iolo 看到我，他會感動得流下眼淚。」"',
    '"\\"Hullo! Who art thou?\\""': '"「哈囉！你是誰？」"',
    '"\\"Oh! Pleased to meet thee! Thine acting doth bring tears to mine eyes!\\""': '"「喔！很高興認識你！你的演技讓我的眼眶充滿了淚水！」"',
    '"\\"They tell me I am quite good! I must get back to work now.\\"*”': '"「他們說我演得相當好！我現在必須回去工作了。」*"',
    '"\\"They tell me I am quite good! I must get back to work now.\\"*': '「他們說我演得相當好！我現在必須回去工作了。」*',

    # 041D
    '"This actor has much stage presence and a booming voice."': '"這位男演員極具舞台魅力，聲音宏亮。"',
    '"Stuart looks down his nose at you. \\"Yes?\\""': '"Stuart 傲慢地看著你。「是？」"',
    '"Stuart"': '"Stuart"',
    '"acting"': '"演戲"',
    '"Royal Theatre"': '"皇家劇院"',
    '"play"': '"戲劇"',
    '"\\"I am Stuart! The stage actor!\\""': '"「我是 Stuart ！舞台劇演員！」"',
    '"\\"I am an actor.\\""': '"「我是一名演員。」"',
    '"\\"If thou dost wish to see me act thou mayest come to the Royal Theatre. We are in rehearsals for a play.\\""': '"「如果你想看我演戲，你可以來皇家劇院。我們正在為一齣戲排練。」"',
    '"\\"\'Tis a lovely space in which to perform. I have dedicated my life to acting, thou knowest.\\""': '"「這是一個很棒的表演空間。你知道的，我把我的一生都奉獻給了演戲。」"',
    '"space"': '"空間"',
    '"dedicated"': '"奉獻"',
    '"\\"Raymundo himself had a hand in the design of the theatre.\\""': '"「Raymundo 本人參與了這座劇院的設計。」"',
    '"\\"Actually, this will be my debut theatrical performance. I have been working as a barmaid waiting for my first chance to be in the theatre.\\""': '"「其實，這將是我的劇場處女作。我一直擔任酒吧女侍，等待我第一次參與劇院演出的機會。」"',
    '"\\"Between thee and me, methinks the play stinks.\\" She winks at you."': '"「在你我之間，我覺得這齣戲爛透了。」她對你眨了眨眼。"',
    '"\\"Canst thou imagine such drivel? I do not believe there ever was a Sherry the Mouse. Who ever heard of a mouse that could talk! Especially these lines! I would rather play a queen. Much more fitting for me, I would say.\\""': '"「你能想像這種胡言亂語嗎？我不相信曾經有過一隻叫 Sherry 的老鼠。誰聽說過會說話的老鼠！尤其是這些台詞！我寧願演個女王。我得說，那對我來說合適多了。」"',
    '"lines"': '"台詞"',
    '"queen"': '"女王"',
    '"\\"I have to memorize this preposterous children\'s story called \'Hubert\'s Hair-Raising Adventure\'."': '"「我必須背誦這個名為『Hubert 令人毛骨悚然的冒險（Hubert\'s Hair-Raising Adventure）』的荒謬童話故事。"',
    '"\\"I asked Raymundo about this and he threw a tantrum. He said that it would not be historically accurate. Ha! As if that were something of any significance!\\""': '"「我問了 Raymundo 這件事，他大發脾氣。他說那不符合歷史的準確性。哈！說得好像那有什麼重要意義似的！」"',
    '"\\"Poo Poo Head!\\" she cries. She then rushes to him and kisses him full on the mouth. Shamino turns red and shuffles his feet.*"': '"「Poo Poo 頭！」她大喊。然後她衝向他，在他的嘴上深深地吻了一下。 Shamino 臉紅了，不安地挪動著雙腳。*"',
    '"\\"Poo Poo Head!\\" she cries. She then rushes to him and kisses him full on the mouth. Shamino turns red and shuffles his feet.*': '「Poo Poo 頭！」她大喊。然後她衝向他，在他的嘴上深深地吻了一下。 Shamino 臉紅了，不安地挪動著雙腳。*',
    '"\\"Not in front of the Avatar, Poo!\\"*”': '"「別在聖者面前這樣，Poo！」*"',
    '"\\"Not in front of the Avatar, Poo!\\"*': '「別在聖者面前這樣，Poo！」*',
    '"\\"To blazes with the Avatar!\\" She kisses him again. \\"The Avatar is the last one who will convince thee to settle down.\\""': '"「去他的聖者！」她又吻了他一次。「聖者是最後一個能說服你安定下來的人。」"',
    '"\\"Dost thou know my beau? He is probably drowning his sorrows at the Blue Boar. The lazy knave! I will not let him go about adventuring. It is time for him to settle down. Thou canst tell him I said so!\\""': '"「你認識我的男朋友嗎？他大概正在藍野豬酒館（Blue Boar）借酒澆愁。這個懶骨頭！我不會讓他去冒險的。是時候讓他安定下來了。你可以去告訴他我說的！」"',
    '"\\"Adieu!\\"*”': '"「再會！」*"',
    '"\\"Adieu!\\"*': '「再會！」*',

    # 041E
    '"This lovely actress is dressed in a mouse costume."': '"這位可愛的女演員穿著老鼠裝。"',
    '"\\"Hello, there!\\" Amber says."': '"「嗨，你好！」 Amber 說。"',
    '"Amber"': '"Amber"',
    '"mouse costume"': '"老鼠裝"',
    '"acting"': '"演戲"',
    '"\\"I am Amber. I suppose it is a little difficult to tell with this costume.\\""': '"「我是 Amber 。我想穿著這套服裝有點難認出來。」"',
    '"\\"Oh, I am an actress at the Royal Theatre. We are in rehearsal now!\\""': '"「喔，我是皇家劇院的女演員。我們現在正在排練！」"',
    '"\\"I play Sherry the Mouse in our new play!\\""': '"「在我們的新戲中，我扮演老鼠 Sherry ！」"',
    '"Sherry the Mouse"': '"老鼠 Sherry"',

    # 041F
    '"This is a cute toddler holding a baby doll."': '"這是一個可愛的蹣跚學步幼童，手裡抱著一個洋娃娃。"',
    '"\\"Hi!\\" Kristy exclaims."': '"「嗨！」 Kristy 歡呼道。"',
    '"Kristy"': '"Kristy"',
    '"Kwisty"': '"Kwisty"',
    '"orphan"': '"孤兒"',
    '"\\"Kwisty.\\""': '"「Kwisty 。」"',
    '"\\"Kristy, like Nicholas, is one of our orphans. She was found in an abandoned home in Paws by one of the Great Council members.\\""': '"「Kristy ，和 Nicholas 一樣，是我們的孤兒之一。她是被一位大法師議會（Great Council）成員在 Paws 的一間廢棄房屋裡發現的。」"',
    '"\\"Tag! Playing tag!\\""': '"「鬼抓人！玩鬼抓人！」"',
    '"The toddler runs off in search of a nursery-mate.*"': '"幼童跑開去尋找育兒室的玩伴了。*"',
    '"The toddler runs off in search of a nursery-mate.*': '幼童跑開去尋找育兒室的玩伴了。*',
    '"Kristy looks confused. \\"Sing. Horsey. Rosa. Winner.\\""': '"Kristy 看起來很困惑。「唱歌。馬馬。 Rosa 。贏家。」"',
    '"sing"': '"唱歌"',
    '"horsey"': '"馬馬"',
    '"Rosa"': '"Rosa"',
    '"winner"': '"贏家"',
    '"Kristy is more than happy to do so. \\"A-B-C-D-E-F-G! H-I-K-M-M-M-O-P! Q-T-W-Y-X-Z!\\" She is proud of her song, although she didn\'t get it quite right."': '"Kristy 非常樂意這麼做。「A-B-C-D-E-F-G！H-I-K-M-M-M-O-P！Q-T-W-Y-X-Z！」她對自己的歌感到自豪，儘管她唱得不太對。"',
    '"\\"I love horsey!\\" She rocks hard on the rocking horse."': '"「我愛馬馬！」她用力搖著搖搖馬。"',
    '"Kristy hugs her baby doll tight. \\"Rosa!\\""': '"Kristy 緊緊抱住她的洋娃娃。「Rosa ！」"',
    '"\\"I am winner!\\" she proclaims loudly."': '"「我是贏家！」她大聲宣布。"',
    '"\\"She keeps saying that. I am not sure what it means. Something to do with a competition.\\""': '"「她一直這麼說。我不確定那是什麼意思。可能跟某種比賽有關。」"',
    '"\\"Bye bye!\\"*”': '"「掰掰！」*"',
    '"\\"Bye bye!\\"*': '「掰掰！」*',

    # 0420
    '"This toddler is full of energy and is playing hard when he sees you. He stops what he is doing."': '"這個蹣跚學步的孩子充滿活力，當他看到你時正玩得很起勁。他停下了手邊的動作。"',
    '"\\"Hi!\\" Max grins at you."': '"「嗨！」 Max 對你咧嘴一笑。"',
    '"Max"': '"Max"',
    '"Makth"': '"Makth"',
    '"\\"Makth.\\""': '"「Makth 。」"',
    '"\\"He says his name is Max.\\""': '"「他說他的名字叫 Max 。」"',
    '"\\"Playing tag!\\""': '"「玩鬼抓人！」"',
    '"The boy runs away from you to catch another child.*"': '"男孩從你身邊跑開去抓另一個孩子。*"',
    '"The boy runs away from you to catch another child.*': '男孩從你身邊跑開去抓另一個孩子。*',
    '"\\"I\'m a funny boy!\\" Max laughs hysterically. \\"Makth sing too!\\""': '"「我是個搞笑的男孩！」 Max 歇斯底里地大笑。「Makth 也會唱歌！」"',
    '"funny boy"': '"搞笑的男孩"',
    '"\\"Thou funny boy, -too-!\\" Max laughs madly as he throws his pacifier at you. He points at it and says, \\"Binky!\\""': '"「你也是，搞笑的男孩，-也- 是！」 Max 瘋狂地笑著，把他的奶嘴丟向你。他指著奶嘴說：「Binky ！」"',
    '"Binky"': '"Binky"',
    '"Max nods furiously. \\"Binky! Get Binky! Get Binky!\\" ~~You realize that the boy wants you to pick it up. Apparently it is some kind of game that only toddlers understand. You pick it up and hand it to him. He immediately plugs it into his mouth."': '"Max 拼命地點頭。「Binky ！拿 Binky ！拿 Binky ！」~~你意識到這個男孩想讓你把它撿起來。顯然這是一種只有幼童才懂的遊戲。你撿起奶嘴遞給他。他立刻把它塞進嘴裡。"',
    '"Max stands upright and bellows, \\"Old Lord British had a farm, -e-i-e-i-o-! On this farm he had a drake, -e-i-e-i-o-! With a -roar- -roar- here, a -roar- -roar- there, here a -roar-, there a -roar-, everywhere a -roar- -roar-!    Old Lord British had a farm, -e-i-e-i-o-!\\""': '"Max 站得筆直，大聲吼道：「老 Lord British 有個農場，-e-i-e-i-o-！在這個農場裡他有一隻公鴨，-e-i-e-i-o-！這裡 -嘎- -嘎-，那裡 -嘎- -嘎-，到處都是 -嘎- -嘎-！老 Lord British 有個農場，-e-i-e-i-o-！」"',

    # 0421
    '"You see a child that has recently grown into toddlerhood."': '"你看到一個最近剛長成蹣跚學步階段的孩子。"',
    '"\\"Whee! Yoooo!\\" intones Nicholas."': '"「咿！呀！」 Nicholas 拉長音說道。"',
    '"Nicholas"': '"Nicholas"',
    '"Nick-las"': '"Nick-las"',
    '"\\"His name is Nicholas.\\""': '"「他的名字是 Nicholas 。」"',
    '"\\"Nick-las\\"."': '"「Nick-las 」。"',
    '"The toddler is obviously deeply engaged in a game of tag and will not stop to speak.*"': '"這孩子顯然深深投入在鬼抓人的遊戲中，不願停下來說話。*"',
    '"The toddler is obviously deeply engaged in a game of tag and will not stop to speak.*': '這孩子顯然深深投入在鬼抓人的遊戲中，不願停下來說話。*',
    '"\\"Why, his job is to wet his diaper! Is that not right, Nicholas?\\" Nanna says in baby-talk."': '"「哎呀，他的工作就是尿濕他的尿布！對不對呀，Nicholas ？」 Nanna 用疊字語氣說道。"',
    '"\\"Whee! Dia-per!\\""': '"「咿！尿-布！」"',
    '"\\"Nicholas is one of our orphans. He was left in front of the castle one morning. \'Tis a sad state of affairs when this kind of thing happens.\\""': '"「Nicholas 是我們的孤兒之一。某天早上他被遺棄在城堡前。發生這種事真是令人悲傷的狀況。」"',
    '"wet"': '"尿濕"',
    '"diaper"': '"尿布"',
    '"You notice that Nicholas\' diaper is wet."': '"你注意到 Nicholas 的尿布濕了。"',
    '"\\"Oh, my. He\'s wet, is he not? Couldst thou be a dear and change him for me? I would appreciate it!\\""': '"「喔，天啊。他濕了，不是嗎？你能幫我個忙替他換一下嗎？我會很感激的！」"',
    '"\\"Yeeee! Dia-per! Geeee!\\" Nicholas says happily."': '"「咿——！尿-布！嘰——！」 Nicholas 高興地說。"',
    '"\\"The diapers are there on that table. If thou wouldst just use one\\ton Nicholas....\\""': '"「尿布就在那張桌子上。如果你能拿一塊\\t用在 Nicholas 身上的話……」"',
    '"Nicholas points to the diapers on the table."': '"Nicholas 指著桌上的尿布。"',

    # 0422
    '"Nanna gives you a stern look for bothering her during The Fellowship meeting, much like the look of an elementary school teacher you once had.*"': '"Nanna 因為你在兄弟會集會時打擾她而給了你一個嚴厲的眼神，就像你曾經遇到過的小學老師那樣。*"',
    '"Nanna gives you a stern look for bothering her during The Fellowship meeting, much like the look of an elementary school teacher you once had.*': 'Nanna 因為你在兄弟會集會時打擾她而給了你一個嚴厲的眼神，就像你曾經遇到過的小學老師那樣。*',
    '"\\"I cannot imagine where Batlin may be. He has never missed a Fellowship meeting!\\""': '"「我無法想像 Batlin 在哪裡。他從未缺席過兄弟會的集會！」"',
    '"\\"Oh! Hello! I must not stop to speak now. I am on my way to The Fellowship meeting!\\"*”': '"「喔！哈囉！我現在不能停下來說話。我正在去兄弟會集會的路上！」*"',
    '"\\"Oh! Hello! I must not stop to speak now. I am on my way to The Fellowship meeting!\\"*': '「喔！哈囉！我現在不能停下來說話。我正在去兄弟會集會的路上！」*',
    '"You see a working-class elderly woman who exudes sweetness."': '"你看到一位散發著和藹氣息的勞工階級年長婦女。"',
    '"\\"Yes, may I help thee?\\" Nanna asks."': '"「是的，我能幫你嗎？」 Nanna 問。"',
    '"Nanna"': '"Nanna"',
    '"\\"Oh, everyone simply calls me \'Nanna\'.\\""': '"「喔，大家只叫我『Nanna』。」"',
    '"\\"I watch over the Royal Nursery. I am the nanny of these wonderful children.\\""': '"「我負責看管皇家育兒室。我是這些棒孩子們的保母。」"',
    '"Royal Nursery"': '"皇家育兒室"',
    '"nanny"': '"保母"',
    '"children"': '"孩子們"',
    '"\\"There have been a great number of babies born in Britannia in recent years, so Lord British established this nursery. It is nice that the noblemen and noblewomen have this luxury so that they may attend to their daily duties.\\""': '"「近年來 Britannia 出生了許多嬰兒，所以 Lord British 建立了這個育兒室。貴族男女能有這種奢侈的服務真是不錯，這樣他們就能專心處理日常職務了。」"',
    '"luxury"': '"奢侈"',
    '"\\"Whew! Dost thou smell what I smell, Avatar?\\"*”': '"「呼！你有聞到我聞到的味道嗎，聖者？」*"',
    '"\\"Whew! Dost thou smell what I smell, Avatar?\\"*': '「呼！你有聞到我聞到的味道嗎，聖者？」*',
    '"\\"I believe that is the smell of diapers, boy. When thou art a father one day, thou wilt come to know that smell quite well.\\"*”': '"「我相信那是尿布的味道，孩子。當有一天你成為父親時，你就會很熟悉那個味道了。」*"',
    '"\\"I believe that is the smell of diapers, boy. When thou art a father one day, thou wilt come to know that smell quite well.\\"*': '「我相信那是尿布的味道，孩子。當有一天你成為父親時，你就會很熟悉那個味道了。」*',
    '"\\"Well, I feed them and change their diapers and read aloud all the books thou dost see lying around. Luckily, I have Sherry to help me.\\""': '"「嗯，我餵他們吃飯、幫他們換尿布，並大聲朗讀你看到散落在一旁的所有書籍。幸運的是，我有 Sherry 來幫我。」"',
    '"books"': '"書籍"',
    '"Sherry"': '"Sherry"',
    '"\\"Lord British brought them from his homeland. They are very foreign to us here in Britannia, but the children enjoy them just the same.\\""': '"「Lord British 把這些書從他的家鄉帶來的。這些對我們 Britannia 來說非常陌生，但孩子們一樣很喜歡。」"',
    '"\\"Sherry is a special mouse who has lived here in the castle for many, many years. She recites stories for the children.\\""': '"「Sherry 是一隻特別的老鼠，她在城堡裡住了很多、許多年了。她會為孩子們朗誦故事。」"',
    '"\\"They are lovely, are they not? Every day they seem to learn more and more. Most of the time they are a joy.\\" Nanna whispers to you conspiratorially, \\"And other times I could happily throw them out with the bathwater!\\""': '"「他們很可愛，不是嗎？每一天他們似乎都學得越來越多。大部分時間他們都是一種快樂。」 Nanna 神秘兮兮地對你耳語，「而在其他時候，我真想把他們連同洗澡水一起倒掉！」"',
    '"\\"The children must be outside playing with Sherry now.\\""': '"「孩子們現在一定在外面和 Sherry 玩。」"',
    '"\\"Yes, I suppose it really is a luxury. The poorer people in Britannia certainly do not have such a service for caring for their children. The rich do have an advantage.\\" You detect a hint of bitterness in her voice."': '"「是的，我想這真的是一種奢侈。Britannia 較貧窮的人當然沒有這種照顧他們孩子的服務。富人確實有優勢。」你從她的聲音中聽出了一絲苦澀。"',
    '"advantage"': '"優勢"',
    '"\\"I do not mean to complain by any means. I adore my work. But contrary to the thinking of many of the noblemen and women, a class structure exists in Britannia more than ever before. Taxes are unbearable. The rich get richer, and the poor get poorer, as the saying goes.\\""': '"「我絕不是要抱怨。我很熱愛我的工作。但與許多貴族男女的想法相反，Britannia 的階級結構比以往任何時候都存在。稅收令人難以承受。俗話說，富人越來越富，窮人越來越窮。」"',
    '"class structure"': '"階級結構"',
    '"taxes"': '"稅收"',
    '"\\"The Britannian Tax Council drains us all dry. Especially the lower and middle classes.\\""': '"「Britannia 稅務委員會把我們都榨乾了。尤其是中下階層。」"',
    '"\\"Well, look around! There are rich men who live in opulent castles. And right outside are poor people who live in hovels. Thou dost know how there are winged gargoyles and wingless gargoyles? Well, it seems the human race is getting to be just as divided. There is no unity in the land anymore. It is why I have joined The Fellowship.\\""': '"「嗯，你看看周圍！有錢人住在富麗堂皇的城堡裡。而就在外面，窮人住在破屋裡。你知道石像鬼（gargoyles）有分有翅膀和沒翅膀的嗎？嗯，看來人類也變得同樣分裂了。這片土地上不再有團結了。這就是為什麼我加入了兄弟會。」"',
    '"Fellowship"': '"兄弟會"',
    '"philosophy"': '"哲學"',
    '"She notices your medallion. \\"But thou dost know all that already!"': '"她注意到了你的徽章。「但你已經知道這一切了！"',
    '"\\"Thou shouldst really come to a meeting. Thou wouldst learn a lot!\\""': '"「你真的應該來參加集會。你會學到很多！」"',
    '"\\"Good day! Do come back and visit again soon!\\"*”': '"「祝你有個美好的一天！一定要快點再回來拜訪喔！」*"',
    '"\\"Good day! Do come back and visit again soon!\\"*': '「祝你有個美好的一天！一定要快點再回來拜訪喔！」*'
}

for script in scripts:
    filepath = os.path.join(base_dir, 'zh_script', '003', script)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for eng, chi in replacements.items():
        content = content.replace(eng, chi)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
