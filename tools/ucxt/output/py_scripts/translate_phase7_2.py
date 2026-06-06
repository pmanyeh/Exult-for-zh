import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '0448.es': {
        'message("Nell will not speak to you.*");': 'message("Nell 不想和你說話。*");',
        'message("You see a servant girl who looks at you in wonder. \\"Thou dost look familiar. Who art thou?\\"");': 'message("你看見一個驚奇地看著你的女僕。「你看起來很面熟。你是誰？」");',
        'message("\\"Oh. Hello. I am Nell.\\"");': 'message("「喔。你好。我是 Nell 。」");',
        'message("\\"I thought so! I have seen thy portrait before. And I had heard that thou wouldst be visiting! I\'m Nell.\\"");': 'message("「我就知道！我以前看過你的畫像。而且我聽說你會來拜訪！我是 Nell 。」");',
        'message("\\"Hello, ");': 'message("「你好，");',
        'message(".\\"");': 'message("。」");',
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'message("\\"I told thee my name is Nell.\\"");': 'message("「我告訴過你我的名字是 Nell 了。」");',
        'message("\\"I am a chambermaid. I am responsible for keeping the castle tidy. Just a servant girl, really.\\"");': 'message("「我是個女僕。我負責保持城堡的整潔。說真的，就只個女僕罷了。」");',
        'UI_add_answer(["castle", "servant"]);': 'UI_add_answer(["城堡", "僕人"]);',
        'message("\\"It is very large. Keeps me very busy. Thou wouldst not believe how dusty it gets.\\"");': 'message("「它非常大。讓我非常忙碌。你不會相信它有多容易積灰塵。」");',
        'message("\\"I suppose I\'ll always be a servant. My parents are servants. My brother is a servant. My fiance is a servant. My child will probably be a servant.\\"");': 'message("「我想我這輩子都會是個僕人了。我的父母是僕人。我的哥哥是僕人。我的未婚夫是僕人。我的孩子可能也會是僕人。」");',
        'UI_add_answer(["parents", "brother", "fiance", "child"]);': 'UI_add_answer(["父母", "哥哥", "未婚夫", "孩子"]);',
        'message("\\"They work in the castle as well. Boots is my mother. Bennie is my father. They have been here for years. I was born in this castle and played in the nursery.\\"");': 'message("「他們也在城堡裡工作。 Boots 是我母親。 Bennie 是我父親。他們在這裡已經很多年了。我在這座城堡出生，並在育嬰室裡玩耍長大。」");',
        'message("\\"Thou mightest run into him. He is also a servant in the castle. Charles. Other than not being as smart as I am, he is all right. For a bumbling ass, that is!\\" She laughs.");': 'message("「你可能會碰到他。他也是城堡裡的僕人。 Charles 。除了沒有我聰明之外，他還算不錯。就一個笨蛋而言，已經算不錯了！」她笑了。");',
        'message("\\"That would be Carrocio, that dear man who runs the Punch and Judy Show. He writes the loveliest love poetry. We are getting married as soon as Carrocio can afford a wedding ring.\\"");': 'message("「那會是 Carrocio ，那個經營潘趣與茱蒂秀（Punch and Judy Show）的親愛男人。他寫了最可愛的情詩。只要 Carrocio 買得起婚戒，我們就會結婚。」");',
        'message("Nell looks worried. \\"Shhh! I do not want anyone to know. \'Tis not showing yet, is it? Carrocio and I are getting married as soon as possible. He -is- the father. I think. Then again, it could be... no, probably not him. Or could it be...? Hmmm. That would be interesting! Wait! What am I saying? The father is most definitely Carrocio! Please do not tell anyone. \'Twould be embarrassing. All right?\\"");': 'message("Nell 看起來很擔心。「噓！我不想讓任何人知道。現在還看不出來，對吧？ Carrocio 和我會盡快結婚。他『是』孩子的父親。我想。不過，也可能是……不，應該不是他。還是說可能是……？嗯。那就有趣了！等等！我在說什麼？父親絕對是 Carrocio ！請不要告訴任何人。那會很尷尬。好嗎？」");',
        'message("\\"I know I can trust thee, ");': 'message("「我知道我可以信任你，");',
        'message("\\"But thou wouldst ruin my reputation! Please -- a servant girl needs all the self-esteem she can get without that burden!\\" Nell turns away from you.*");': 'message("「但你會毀了我的名聲！拜託——一個女僕需要她所能得到的所有自尊，而不需要那種負擔！」 Nell 轉身背對你。*");',
        'message("\\"Goodbye, ");': 'message("「再見，");',
        'message(".\\"*");': 'message("。」*");'
    },
    '0449.es': {
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'UI_add_answer("Nell");': 'UI_add_answer("Nell");',
        'UI_add_answer("Jeanette");': 'UI_add_answer("Jeanette");',
        'UI_add_answer("Thou art in luck");': 'UI_add_answer("你運氣真好");',
        'message("You see a young peasant with a tray of wine glasses.");': 'message("你看見一個端著酒杯托盤的年輕農民。");',
        'message("\\"Hello, Avatar.\\"");': 'message("「你好，聖者。」");',
        'message("\\"I am Charles.\\"");': 'message("「我是 Charles 。」");',
        'message("\\"I am a servant in Lord British\'s castle. I serve as a gentleman\'s gentleman, among other things. Right now I am serving wine.\\"");': 'message("「我是 Lord British 城堡裡的僕人。我是貼身男僕，當然還有做其他事。現在我正在端酒。」");',
        'UI_add_answer(["servant", "wine"]);': 'UI_add_answer(["僕人", "酒"]);',
        'message("\\"My family has been employed by Lord British for many years. My father, Bennie, once held the position I now hold. He is the head servant. I shall be head servant one day, I suppose. Then perhaps my sweetheart will love me.\\"");': 'message("「我的家族已經被 Lord British 僱用很多年了。我的父親 Bennie 曾經擔任我現在的職位。他是僕人總管。我想，總有一天我也會成為僕人總管。到那時，也許我的心上人就會愛我了。」");',
        'UI_add_answer(["family", "sweetheart"]);': 'UI_add_answer(["家族", "心上人"]);',
        'message("\\"Thou wilt encounter them. My mother cooks in the kitchen. My prudish sister is the chambermaid.\\"");': 'message("「你會遇到他們的。我母親在廚房做飯。我那古板的妹妹是女僕。」");',
        'message("Charles sighs. He is clearly smitten. \\"She is Jeanette. She works in the Blue Boar. But I am afraid I am not \'up to her standards\'. I believe she has her eye set on someone else. I do not know what to do about it.\\"");': 'message("Charles 嘆了口氣。他顯然是被迷住了。「她是 Jeanette 。她在藍野豬酒館工作。但我恐怕『達不到她的標準』。我相信她看上別人了。我不知道該怎麼辦。」");',
        'message("\\"She does not love me, I know. She would rather marry a rich man. I have not a chance.\\"");': 'message("「她不愛我，我知道。她寧願嫁個有錢人。我沒有機會。」");',
        'message("You tell Charles what Jeanette said.");': 'message("你告訴 Charles Jeanette 說了什麼。");',
        'message("\\"Really? Thou dost mean I have a chance?\\" Charles becomes so excited he nearly drops his tray. \\"Oh, I thank thee, Avatar, for giving me this hopeful news! I must run and send her flowers or some gift! I must declare my love!\\" He turns away from you, obviously walking on clouds.*");': 'message("「真的嗎？你是說我有機會了？」 Charles 興奮得差點把托盤弄掉。「喔，感謝你，聖者，給了我這個充滿希望的消息！我得趕快去送她花或什麼禮物！我必須表達我的愛！」他轉身背對著你，顯然已經樂得飄飄然了。*");',
        'message("\\"She is engaged to the carousel manager. It is hard to get used to. I have always been overly protective of my little sister. I would wager she has never even been kissed! Not even by Carrocio! That is mainly because I have looked after her all this time. I would smite anyone who laid a hand on her! Besides, Nell has always been chaste and prudish. She would never think to allow a man to kiss her.\\"");': 'message("「她和旋轉木馬經理訂婚了。這很難讓人習慣。我一直對我的小妹過度保護。我敢打賭她甚至從來沒有被親吻過！即使是 Carrocio 也沒有！這主要是因為我一直照顧著她。要是誰敢碰她一下，我絕對會痛扁他！再說， Nell 一直都很貞潔古板。她絕不會允許男人親她的。」");',
        'UI_add_answer("child");': 'UI_add_answer("孩子");',
        'message("You remember what Nell told you about her \'condition\'. Do you mention it to Charles?");': 'message("你回想起 Nell 告訴你關於她的『狀況』。你要跟 Charles 提這件事嗎？");',
        'message("You tell Charles what Nell revealed in confidence.");': 'message("你將 Nell 私下透露的事告訴了 Charles 。");',
        'message("Charles is wide-eyed and shocked. \\"Why, that hussy! My sister! She is nothing more than a tramp! And wait until I get mine hands on Carrocio!\\"");': 'message("Charles 瞪大了眼睛，感到震驚。「什麼，那個蕩婦！我的妹妹！她根本就是個水性楊花的女人！等我抓到 Carrocio 就知道了！」");',
        'message("Charles turns away. There is murder in his eyes.*");': 'message("Charles 轉過身去。他的眼中充滿了殺氣。*");',
        'message("Your conscience rests easy, knowing that you resisted the temptation to carry tales.");': 'message("你的良心感到安寧，因為你知道你抵擋住了搬弄是非的誘惑。");',
        'message("\\"Wouldst thou like some wine?\\"");': 'message("「你想來點酒嗎？」");',
        'message("\\"\'Tis on the house.\\" Charles hands you and your friends glasses of wine.");': 'message("「算我請客。」 Charles 遞給你和你的朋友們幾杯酒。");',
        'message("\\"Oops. Thou art carrying too much. Ask me again when thou dost not have thine hands full!\\"");': 'message("「哎呀。你身上拿太多東西了。等你雙手空出來再來跟我要吧！」");',
        'message("\\"Some other time, then.\\"");': 'message("「那麼下次吧。」");',
        'message("Charles nods his head at you, then goes about his business.*");': 'message("Charles 向你點點頭，然後繼續忙他的事。*");'
    }
}

for filename, reps in replacements.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for eng, chi in reps.items():
        content = content.replace(eng, chi)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Phase 7 part 2 translated.")
