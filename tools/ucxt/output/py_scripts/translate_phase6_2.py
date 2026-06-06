import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '043F.es': {
        'message("Millie ignores your attempts to get her attention and goes back to intently watching the Fellowship ceremony.*");': 'message("Millie 無視你想引起她注意的舉動，並回去全神貫注地觀看兄弟會儀式。*");',
        'message("Millie looks perturbed. \\"Batlin has never missed a meeting before. What does he expect? Does he want -me- to run the meeting?\\"");': 'message("Millie 看起來有些不安。「Batlin 以前從未錯過任何一次集會。他想怎樣？難道他想要『我』來主持這場集會嗎？」");',
        'message("\\"Sorry, I cannot speak with thee now! I am late for the Fellowship meeting!\\"*");': 'message("「抱歉，我現在不能和你說話！我參加兄弟會集會要遲到了！」*");',
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'UI_add_answer("Thad");': 'UI_add_answer("Thad");',
        'message("You see a cute-looking woman who beams with a huge smile when she notices you looking at her.");': 'message("你看見一位長相可愛的女人，當她注意到你在看她時，她綻放出了燦爛的笑容。");',
        'message("\\"It is good to speak with thee, again,\\" says Millie.");': 'message("「很高興能再次與你交談，」 Millie 說。");',
        'message("\\"My name is Millie,\\" she giggles coyly.");': 'message("「我的名字是 Millie，」她靦腆地咯咯笑著。");',
        'message("\\"I suppose I have no job, but is that really so bad? I am a member of The Fellowship and I talk to people about them all day long.\\"");': 'message("「我想我沒有工作，但這真的很糟嗎？我是兄弟會的成員，我整天都在跟別人談論他們。」");',
        'UI_add_answer(["Fellowship", "talk"]);': 'UI_add_answer(["兄弟會", "談談"]);',
        'message("\\"I see we have the same job!\\" She laughs at her own joke. \\"Dost thou spend all thy time talking to people about The Fellowship? For if that is what thou dost do, thou must get thyself another corner!\\" Millie\'s face wrinkles in displeasure.");': 'message("「看來我們有同樣的工作！」她為自己開的玩笑笑了起來。「你也把所有的時間都花在跟別人談論兄弟會嗎？如果你真的是做這行的，那你得給自己找另外一個角落去！」 Millie 不悅地皺起眉頭。");',
        'message("\\"Dost thou know what The Fellowship is?\\"");': 'message("「你知道兄弟會是什麼嗎？」");',
        'message("\\"Oh, I think thou dost not really know!\\"");': 'message("「喔，我想你其實並不知道！」");',
        'UI_add_answer("philosophy");': 'UI_add_answer("哲學");',
        'message("\\"If thou dost wish, thou mayest attend tonight\'s meeting at the Fellowship Hall. It begins at nine o\'clock sharp. Just tell them that thou art my guest. I shall see thee there, I hope.\\" Millie giggles and looks away shyly.");': 'message("「如果你願意的話，你可以參加今晚在兄弟會堂的集會。九點準時開始。只要告訴他們你是我的客人就行了。希望我能在那裡見到你。」 Millie 咯咯笑著，害羞地別過頭去。");',
        'message("\\"I spend all my time trying to recruit, er... spread the word of The Fellowship. It is better than having a job! I learned how to do this at the Meditation Retreat.\\"");': 'message("「我把所有的時間都花在試圖招募，呃……傳播兄弟會的福音上。這比擁有一份工作好多了！我是在冥想營學會怎麼做這些的。」");',
        'UI_add_answer("Meditation Retreat");': 'UI_add_answer("冥想營");',
        'message("\\"\'Tis located on an island in south Britannia near Serpent\'s Hold. Most new Fellowship members spend some time down there learning the tenets of the group. One can also learn to hear \'the voice\' at the retreat.\\"");': 'message("「它位於南 Britannia 靠近巨蛇據點（Serpent\'s Hold）的一座島上。大多數新加入的兄弟會成員都會花些時間在那裡學習這個團體的教義。在營隊裡還可以學習如何聆聽『那聲音』。」");',
        'UI_add_answer("the voice");': 'UI_add_answer("那聲音");',
        'message("\\"Fellowship members have an inner voice which speaks to them. I have not heard it yet, but I am working toward it. I may need to spend another few days at the Meditation Retreat in order to do so. Batlin tells me not to be discouraged, though. He says I will hear it when I have made myself worthy.\\"");': 'message("「兄弟會成員有一種會對他們說話的內在聲音。我還沒聽見過，但我正在努力。為了達到這點，我可能需要再去冥想營待個幾天。不過，Batlin 告訴我不要灰心。他說當我證明了自己的價值時，我就會聽見它了。」");',
        'message("Millie rolls her eyes. \\"Thou hast met my brother? Thou poor thing! He is really a candidate for the asylum, I wouldst say! He believes The Fellowship kidnapped me and charmed me into following them. Well, I joined of mine own free will, without a second thought, and it was a pure lark! No one coerced me! Thad can go hang! Mama always said he was the impulsive one in the family!\\"");': 'message("Millie 翻了個白眼。「你見過我哥哥了？真可憐！要我說，他真的該被送進瘋人院！他認為是兄弟會綁架了我，並用魔法迷惑我追隨他們。聽著，我是出於自由意志加入的，連想都沒想，而且這純粹是件好玩的事！沒有人強迫我！去他的 Thad ！媽媽總是說他是家裡最衝動的人！」");',
        'message("\\"I shall see thee later! Maybe even at tonight\'s Fellowship meeting!\\"*");': 'message("「我們晚點見！也許在今晚的兄弟會集會上見！」*");',
        'var0007 = "@Strive For Unity!@";': 'var0007 = "@追求團結！@";',
        'var0007 = "@Trust Thy Brother!@";': 'var0007 = "@信任你的兄弟！@";',
        'var0007 = "@Worthiness Precedes Reward!@";': 'var0007 = "@有價值才有回報！@";'
    },
    '0440.es': {
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'UI_add_answer("Nystul");': 'UI_add_answer("Nystul");',
        'message("You see your former companion and friend, Geoffrey, Captain of the Guard.");': 'message("你看見你從前的同伴和朋友，皇家守衛隊長 Geoffrey 。");',
        'message("\\"Yes, ");': 'message("「什麼事，");',
        'message("?\\" Geoffrey asks.");': 'message("？」 Geoffrey 問道。");',
        'message("Geoffrey chuckles. \\"Art thou joking? I am Geoffrey!\\"");': 'message("Geoffrey 輕笑著。「你在開玩笑嗎？我是 Geoffrey 啊！」");',
        'message("\\"These days I remain in my position as Captain of the Guard. I am Lord British\'s personal bodyguard, and I am in charge of security at the castle. I do not have much time or use for adventuring now.\\"");': 'message("「這些日子以來，我仍然擔任皇家守衛隊長的職位。我是 Lord British 的私人貼身侍衛，而且我負責城堡的安全。我現在沒有太多時間，也沒必要去冒險了。」");',
        'UI_add_answer("adventuring");': 'UI_add_answer("冒險");',
        'message("\\"I have aged a bit over the last 200 years. I am afraid I shall not be joining thee this time. But my thoughts are with thee, and if I may offer some assistance, I shall be glad to do so.\\"");': 'message("「在過去這兩百年間，我老了一些。恐怕我這次不能與你同行了。但我的心與你同在，如果我能提供一些協助，我很樂意幫忙。」");',
        'UI_add_answer(["aged", "assistance"]);': 'UI_add_answer(["老了", "協助"]);',
        'message("\\"Yes, it has been a long time by Britannian reckoning since I have seen mine homeland. When thou hast finished with thy business, do come back and tell me news of what is happening in our homeworld.\\"");': 'message("「是的，以 Britannia 的曆法來算，我已經很久沒見過我的故鄉了。當你完成你的事情後，一定要回來告訴我我們家鄉發生的新聞。」");',
        'message("\\"Mine advice to thee is to build up thine experience and skills as soon as possible. Thou hast been away from Britannia for a long time. Thou mightest not be in the same shape thou wert in at the end of thy last adventure here.\\"");': 'message("「我給你的建議是，盡快累積你的經驗和技能。你已經離開 Britannia 很長一段時間了。你可能不再處於你上次在這裡冒險結束時的最佳狀態。」");',
        'UI_add_answer(["experience", "shape"]);': 'UI_add_answer(["經驗", "狀態"]);',
        'message("\\"It is apparently another difference in our two worlds. Whenever thou shalt return it is as if thy physical body has arrived here for the first time. It is the reason why many of\\tthine own companions have chosen to stay here even though they have aged in Britannian time.\\"");': 'message("「這顯然是我們兩個世界的另一個不同之處。每當你回來時，就好像你的肉體是第一次來到這裡一樣。這也是為什麼你許多同伴選擇留在這裡，儘管他們在 Britannia 的時間流逝中已經變老了。」");',
        'message("\\"Go and search for monsters. Vanquish them. Take their gold! Gain experience! Use that experience when thou dost visit trainers. Increase thy strength, dexterity, and intelligence, as well as thy combat skill and ability to perform magic. Thou wilt be lost without this necessary evolution of experience!\\"");': 'message("「去找怪物吧。擊敗他們。拿走他們的黃金！獲取經驗！當你去拜訪訓練師時，使用那些經驗。增加你的力量、敏捷度和智力，以及你的戰鬥技能和施法能力。如果沒有這種必要的經驗進化，你會迷失的！」");',
        'message("\\"He is quite looney. If thou dost ask me, I believe all the mages in the land are afflicted. Take a look and find out for thyself.\\"");': 'message("「他相當瘋癲。如果你問我，我相信這片土地上所有的法師都遭殃了。你自己去看看並找出答案吧。」");',
        'message("\\"He is much better now!\\"");': 'message("「他現在好多了！」");',
        'message("\\"Have courage. Have faith. Be strong. Be wise.\\"*");': 'message("「要有勇氣。要有信念。要堅強。要明智。」*");'
    },
    '0441.es': {
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'message("You see an impressive winged gargoyle with a stately demeanor.");': 'message("你看見一隻令人印象深刻，舉止莊嚴的有翼石像鬼。");',
        'message("\\"To greet thee again,\\" Wislem says.");': 'message("「再次向你問好，」 Wislem 說。");',
        'message("\\"To be known as Wislem.\\"");': 'message("「我是 Wislem 。」");',
        'UI_add_answer("Wislem");': 'UI_add_answer("Wislem");',
        'message("To be the word for `wise man.\'\\"");': 'message("這是『智者』的意思。」");',
        'message("\\"To be advisor to Lord British, and act as representative for my race here in Britain. To be honored to be in long line of advisors to the king.\\"");': 'message("「擔任 Lord British 的顧問，並作為我們種族在 Britain 這裡的代表。很榮幸能成為國王漫長的顧問名單中的一員。」");',
        'UI_add_answer("advisor");': 'UI_add_answer("顧問");',
        'message("\\"To make sure the gargoyle race is heard in the castle. To have been a long road to acceptance and integration into Britannian society.\\"");': 'message("「為了確保石像鬼種族的聲音在城堡裡被聽見。要被 Britannia 社會接受和融合，是一條漫長的路。」");',
        'UI_add_answer(["integration", "society"]);': 'UI_add_answer(["融合", "社會"]);',
        'message("\\"To tell you that, not long after your last visit, the gargoyles settled upon Terfin, an island to the southeast. To have moved, little by little, onto the mainland.\\"");': 'message("「告訴你，在你上次拜訪後不久，石像鬼定居在東南方的 Terfin 島上。然後逐漸地，一點一點地搬到了大陸上。」");',
        'message("\\"To be accepted in most places. To feel sad, however, that there are still towns that do not accept us. But our Lord and King, Draxinusom, is still alive and is doing a magnificent job. To know and help all gargoyles who are alive.\\"");': 'message("「在大多數地方被接受了。然而，仍然有一些城鎮不接受我們，這讓人感到難過。但我們的國王，Draxinusom ，仍然活著，而且做得非常出色。去了解並幫助所有還活著的石像鬼。」");',
        'UI_add_answer("Inamo");': 'UI_add_answer("Inamo");',
        'message("Wislem listens to your story about the murders in Trinsic. \\"To be sad to hear this. To suggest that you visit Lord Draxinusom in Terfin and tell him about Inamo. He will know who Inamo\'s parent gargoyle is. To recommend you relay this news as soon as possible.~~\\"To go soon and tell Draxinusom about Inamo?\\"");': 'message("Wislem 聽了你關於 Trinsic 謀殺案的故事。「聽到這個很難過。建議你去 Terfin 拜訪 Draxinusom 國王，並告訴他關於 Inamo 的事。他會知道誰是 Inamo 的父母。建議你盡快傳達這個消息。~~「很快就去告訴 Draxinusom 關於 Inamo 的事嗎？」");',
        'message("\\"To know you are reliable.\\"");': 'message("「知道你是可靠的。」");',
        'message("\\"To be concerned that Inamo\'s parent shall never know what happened.\\" He appears saddened.");': 'message("「擔心 Inamo 的父母永遠不會知道發生了什麼事。」他看起來很悲傷。");',
        'message("\\"To bid farewell.\\"*");': 'message("「告辭。」*");'
    },
    '0442.es': {
        'UI_add_answer(["name", "job", "bye"]);': 'UI_add_answer(["姓名", "職業", "告辭"]);',
        'message("You see a very large mouse with an air of superior intelligence.~~\\"Avatar!\\" she exclaims. \\"I cannot believe thou art here, ");': 'message("你看見一隻非常巨大的老鼠，散發出一種卓越智慧的氣息。~~「聖者！」她驚呼道。「我不敢相信你在這裡，");',
        'message("!\\"");': 'message("！」");',
        'message("\\"Hello, ");': 'message("「你好，");',
        'message("!\\" Sherry the Mouse exclaims.");': 'message("！」老鼠 Sherry 驚呼道。");',
        'message("\\"Why, dost thou not remember Sherry, ");': 'message("「怎麼，你不記得 Sherry 了嗎，");',
        'message("?\\"");': 'message("？」");',
        'message("\\"I am trying to keep up with these children! We are playing tag through the castle! I must run! Talk to me later in the nursery!\\"*");': 'message("「我正努力跟上這些孩子！我們在城堡裡玩鬼抓人！我得跑了！晚點在育嬰室跟我說話！」*");',
        'message("\\"I mainly assist Nanna in the Royal Nursery during the day. I watch the children alone in the evenings while Nanna has dinner and goes to her Fellowship meeting. Other times I run around the castle looking for mouse food!\\"");': 'message("「白天我主要在皇家育嬰室協助 Nanna。晚上當 Nanna 去吃晚餐並參加她的兄弟會集會時，我會單獨看顧孩子們。其他時間我則在城堡裡跑來跑去尋找老鼠食物！」");',
        'UI_add_answer(["Royal Nursery", "castle", "mouse food"]);': 'UI_add_answer(["皇家育嬰室", "城堡", "老鼠食物"]);',
        'message("\\"The children are so much fun. I like to read them their favorite story. It happens to be Lord British\'s favorite children\'s story, too! He read it to me oh, those many years ago.\\"");': 'message("「孩子們太有趣了。我喜歡讀他們最喜歡的故事給他們聽。碰巧那也是 Lord British 最喜歡的童話故事！很多很多年前，他也曾讀給我聽過。」");',
        'UI_add_answer(["children", "story"]);': 'UI_add_answer(["孩子們", "故事"]);',
        'message("\\"If thou hast not had the chance yet, do look around and meet them. They are most wonderful and amusing.\\"");': 'message("「如果你還沒有機會，請務必四處看看並見見他們。他們非常棒，也很逗趣。」");',
        'message("\\"It is much the same as it was when thou wert last here. There has been a bit of remodeling. After all, it has been 200 years since thou wert last here! I believe Lord British has a storeroom with quite a bit of equipment inside.\\"");': 'message("「這跟妳上次來的時候差不多。有稍微改建了一下。畢竟，距離你上次來已經兩百年了！我相信 Lord British 有一個裡面裝了不少裝備的儲藏室。」");',
        'message("\\"Well, cheese is my favorite. If thou dost ever have cheese to give away, I will gladly eat it. But I will generally eat most anything. Dost thou have any cheese for me?\\"");': 'message("「嗯，起司是我的最愛。如果你有起司可以給我的話，我會很樂意吃掉它的。但我通常什麼都吃。你有帶起司給我嗎？」");',
        'message("\\"Want to give me some?\\"");': 'message("「想給我一些嗎？」");',
        'message("\\"Thank thee, ");': 'message("「謝謝你，");',
        'message("\\"I am unable to take thy cheese at the moment, ");': 'message("「我現在拿不下你的起司，");',
        'message(".\\"");': 'message("。」");',
        'message("\\"Well! I thought thou wert my friend!\\"");': 'message("「哼！我還以為我們是朋友呢！」");',
        'message("\\"But thou hast not got any cheese!\\"");': 'message("「但你根本沒有起司啊！」");',
        'message("\\"Too bad! If thou dost find any, please keep me in mind!\\"");': 'message("「太可惜了！如果你找到了，請隨時想到我！」");',
        'message("\\"Dost thou want to hear the story? It is called \'Hubert\'s Hair-Raising Adventure\'.\\"");': 'message("「你想聽這個故事嗎？它叫做『Hubert 的驚悚冒險』。」");',
        'message("Sherry stands on her hind legs, takes a deep breath, and then recites -- from memory -- very, very fast:");': 'message("Sherry 用後腿站立，深吸了一口氣，然後憑著記憶——非常、非常快地背誦了起來：");',
        'message("\\"Some other time, then!\\"");': 'message("「那就下次吧！」");',
        'message("\\"Farewell, ");': 'message("「再見，");',
        'message("!\\"*");': 'message("！」*");',
        'var0008 = "@Tag! Thou art it!@";': 'var0008 = "@抓到了！當鬼！@";',
        'var0008 = "@Cannot catch me!@";': 'var0008 = "@抓不到我！@";',
        'var0008 = "@Nyah nyah! Thou art it!@";': 'var0008 = "@捏捏！當鬼！@";'
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

print("Phase 6 part 2 translated.")
