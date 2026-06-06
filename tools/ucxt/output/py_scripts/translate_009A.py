import os

src = r'd:\git\exult-master\tools\ucxt\output\es_scripts\009A.es'
dest = r'd:\git\exult-master\tools\ucxt\output\zh_script\010\009A_zh.es'

with open(src, 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    '"@Damn candles!@"': '"@該死的蠟燭！@"',
    '"@An Ailem!"': '"@An Ailem！"',
    '"@I\'m famished!@"': '"@我餓壞了！@"',
    '"@My door, at last.@"': '"@終於，我的門。@"',
    '"@Ah, a wall.@"': '"@啊，一堵牆。@"',
    '"@I\'ll follow it.@"': '"@我跟著它走。@"',
    '"@Where am I?@"': '"@我在哪裡？@"',

    '"\\"I\'ll speak to thee no more, Avatar!\\" He ignores you.*"': '"「我不會再跟你說話了，聖者！」他無視了你。*"',
    '"At your approach, the old man straightens and looking directly at you he says, \\"Well met, "': '"當你靠近時，老人挺直身子，直視著你說：「很高興見到你，"',
    '". I am called Erethian. Although thou dost not know me, I know thee well."': '"。我名叫 Erethian 。雖然你不認識我，但我卻對你非常了解。」"',
    '"I have seen thee destroy Mondain\'s power and so defeat that misguided mage, I have seen thee vanquish the enchantress Minax, I have also seen, in a very unique way, how thou brought low the hellspawn Exodus.\\""': '"「我曾見證你摧毀 Mondain 的力量，從而擊敗那誤入歧途的法師；我見證你征服了女巫 Minax ；我也曾以一種非常獨特的方式，看著你如何擊倒地獄魔物 Exodus 。」"',
    '"He falls silent here and you notice that the old man\'s eyes are milky white."': '"他在這裡沉默下來，你注意到這老人的雙眼呈現乳白色。"',
    
    '["name", "job", "Mondain", "Minax", "Exodus", "bye"]': '["姓名", "職業", "Mondain", "Minax", "Exodus", "告辭"]',
    '["name", "job", "bye"]': '["姓名", "職業", "告辭"]',
    
    '"\\"Greetings once again, "': '"「再次向你致意，"',
    '". How may I assist thee?\\" The blind old man looks unerringly in your direction."': '"。我有什麼能幫你的嗎？」盲眼老法師準確無誤地看向你的方向。"',
    '"\\"I\'ll never get any work done like this! What do you wish of me?\\" Erethian seems a little pevish at this point."': '"「這樣下去我什麼事都做不成！你想從我這裡得到什麼？」 Erethian 此刻顯得有些暴躁。"',
    
    '"black sword"': '"黑劍"',
    '"powerful artifact"': '"強大的神器"',
    '"daemon mirror"': '"惡魔之鏡"',
    '"daemon gem"': '"惡魔寶石"',
    '"daemon blade"': '"惡魔之刃"',
    '"the Psyche returns"': '"Psyche回來了"',
    '"great evil"': '"巨大的邪惡"',
    '"Talisman of Infinity"': '"無限護符"',
    
    '"\\"Could this possibly be true?\\" Erethian\'s blind eyes light up with unabashed glee. \\"What an opportunity I have here.\\""': '"「這可能是真的嗎？」 Erethian 盲目的雙眼閃爍著毫不掩飾的喜悅。「這對我來說是多麼好的一個機會啊。」"',
    '"He once again notices your presence. \\"Now, do not let any strange ideas of destruction enter thy mind, Avatar. I shan\'t let thee deprive me of this chance to experience a true wonder of the world. Run along now... Is there not a right to be wronged, somewhere else?"': '"他再次注意到你的存在。「現在，不要讓任何破壞的怪念頭進入你的腦袋，聖者。我絕不會讓你剝奪我體驗這世界真正奇蹟的機會。現在走開吧……難道在其他地方沒有你需要去伸張的正義嗎？」"',
    
    '"The elderly mage frowns. \\"I sense no great evil, but then I never did quite get the knack of cosmic awareness. Nevertheless, don\'t worry thyself over much. These things tend to work themselves out.\\" You feel as if you\'ve just been patted on the head and asked to go play elsewhere."': '"年邁的法師皺起眉頭。「我感覺不到任何巨大的邪惡，但話說回來，我從未完全掌握感知宇宙的訣竅。不過，你別太擔心了。這些事情往往會自己解決的。」你感覺就像是被人摸了摸頭，然後叫去別的地方玩一樣。"',
    
    '"\\"Ah, yes. I once had a scroll that told of a talisman by that name. If only I could remember where I put it. Dost thou by chance have the parchment entitled Scroll of Infinity with thee?"': '"「啊，是的。我曾經有一卷卷軸，上面記載著一個同名護符的事。要是我能想起把它放哪裡就好了。你剛好有帶著那張名為『無限卷軸』的羊皮紙嗎？」"',
    '"\\"If thou dost not have the scroll, I cannot help thee in this matter.\\""': '"「如果你沒有那卷軸，我這件事就幫不上忙了。」"',
    '"\\"Very well. I shall need the scroll to give thee further information.\\""': '"「很好。我需要那卷卷軸才能給你進一步的資訊。」"',
    '"\\"Dost thou have the Scroll of Infinity amongst thy possessions?\\""': '"「你的隨身物品中有無限卷軸嗎？」"',
    '"\\"I needs must touch the scroll to glean its meaning. Else I\'ll not be able to help thee in this matter.\\""': '"「我必須親自觸摸那卷軸才能了解它的含義。否則我無法在這件事上幫助你。」"',
    '"\\"If thou bringest the scroll to me I can aid the in finding the meaning of the archaic text.\\""': '"「如果你把卷軸帶來給我，我可以協助你找出那古老文本的含意。」"',
    
    '"\\"Here we are. Now then, it appears to be written in a strange format. One might even say a code of sorts... I have it! Apparently, the Talisman currently resides in the Great Void. A plane somewhat removed from ours. If thou wishest to gain access to this void, thou shalt need to craft two lenses: one concave, the other convex. Light focused through the properly enchanted lenses will open a conduit between our realm and the void. I believe this treatise speaks of three Talismans of Principle that send out a call to the Infinity Talisman and bring it here. Once here, it would seem that its sole purpose is to coerce a powerful force into the void.\\" A thought hits the mage like lightning strikes a tree. \\"Oh no, Avatar... Thou shan\'t gain any more aid from me. I may be blind, but I see through thy sham. I\'ll not help thee send the Core into the void.\\" Erethian falls silent, and it would appear that he\'ll speak no more."': '"「就在這裡。那麼，它似乎是以一種奇怪的格式寫成的。甚至可以說是一種密碼……我知道了！顯然，這個護符目前存在於大虛空（Great Void）之中。一個有些遠離我們的位面。如果你想進入這個虛空，你需要製作兩片透鏡：一片凹透鏡，另一片凸透鏡。光線透過適當附魔的透鏡聚焦，將會在我們的領域與虛空之間打開一條通道。我相信這篇論述提到了三個原則護符（Talismans of Principle），它們會向無限護符發出呼喚並將其帶到這裡。一旦它到了這裡，看起來它唯一的目的就是將一股強大的力量強行拉入虛空之中。」一個念頭如閃電劈中樹木般擊中這位法師。「噢，不，聖者……你別想再從我這裡得到任何幫助。我或許瞎了，但我看穿了你的把戲。我不會幫你把核心（Core）送進虛空的。」 Erethian 沉默了下來，看來他不會再開口了。"',
    '"Arcadion\'s voice whispers to you like ripple in still pond, \\"Fear not, my master. I have some knowledge of these matters.\\"*"': '"Arcadion 的聲音如靜止池塘中的漣漪般向你低語：「別怕，我的主人。我對這些事情略知一二。」*"',
    
    '"\\"I once attempted to create a sword of great power.\\" Erethian frowns in concentration then says, \\"if thou wishest to continue my work, thou shalt have need of some few pieces of forging equipment... And a place to put them... I know just the spot. Come with me and I\'ll see what I can do to help thee.\\"*"': '"「我曾試圖創造一把威力強大的劍。」 Erethian 專注地皺起眉頭，接著說：「如果你想接續我的工作，你需要一些鍛造設備……還有一個可以放置它們的地方……我知道一個絕佳地點。跟我來，我看看能幫你什麼忙。」*"',
    
    '"Erethian nods his head when you tell him of your dilemma with the black sword. \\"Yes, I can see how the blade would be too clumsy to swing in combat. However, if thou were to bind a magical source of power into the hilt of the blade, thou mightest be able to counteract the unwieldy nature of the sword.\\""': '"當你告訴 Erethian 你對那把黑劍的困擾時，他點了點頭。「是的，我可以理解這把劍在戰鬥中揮舞起來會有多笨重。不過，如果你能將一個魔法力量源綁定在劍柄上，你或許就能抵銷這把劍難以駕馭的特性。」"',
    '"The little gem sparks up at this turn of the conversation. \\"I believe that in my current form, I could serve perfectly well as the blade\'s stabilizing force. In truth, this would allow me to give thee access to some of my more dramatic powers.\\" The daemon sounds excited at this prospect, perhaps a little too excited."': '"話題一轉，那顆小寶石閃爍了起來。「我相信以我目前的型態，我可以完美地勝任這把劍的穩定力量。事實上，這將能讓我為你提供一些我更具戲劇性的力量。」這隻惡魔對這個前景聽起來很興奮，也許興奮過頭了。"',
    '"Erethian\'s voice is quiet as he says, \\"Consider well before thou bindest Arcadion into the sword. For it is true that he will be able to solve the sword\'s problem of balance, but will he be able to solve his own problems as well?\\""': '"Erethian 輕聲說道：「在你將 Arcadion 綁定到劍上之前請三思。因為他確實能解決劍的平衡問題，但他能解決他自己的問題嗎？」"',
    '"problems"': '"問題"',
    '"You wonder if perhaps Arcadion might be able to shed some light on this issue, and as if reading your thoughts, Erethian says, \\"Beware the daemon. His goals are not those of thine or mine. If he offers to help thee, it is to help himself. Of that thou canst be sure.\\""': '"你想知道也許 Arcadion 能夠釐清這個問題，彷彿讀懂了你的心思般， Erethian 說：「小心那隻惡魔。他的目標與你或我不同。如果他主動提出要幫忙，那是為了幫他自己。這點你可以肯定。」"',
    
    '"\\"This is thy choice to make. Apparently thou hast need to make this sword function, but if the daemon is thy only recourse, I pity thee. For as surely as Arcadion will be bound within the sword, thou wilt be bound to possess it. I can tell thee no more.\\""': '"「這是你的選擇。顯然你需要讓這把劍發揮作用，但如果這惡魔是你唯一的依靠，我同情你。因為就像 Arcadion 會被綁定在劍裡一樣肯定，你也會被綁定去持有它。我不能再多說什麼了。」"',
    
    '"The mage gives you a half smile, \\"\'Twould seem that thy memory is failing thee, "': '"法師對你微微一笑，「看來你的記憶力衰退了，"',
    '". As I have said, my name is Erethian.\\""': '"。正如我所說，我的名字是 Erethian 。」"',
    
    '"\\"I am a follower of the principle of Truth. But unlike those of the Lyceaum, I would prefer to seek out the knowledge instead of waiting for it to come to me."': '"「我是真理原則的追隨者。但與 Lyceaum 的那些人不同，我寧願主動去尋求知識，而不是等它自己找上門。"',
    '"It is this curiosity which has brought me to this island from which Exodus, the spawn of Mondain and Minax, sought to rule the world."': '"正是這種好奇心把我帶到了這座島嶼， Mondain 和 Minax 的子嗣 Exodus 曾經試圖從這裡統治世界。"',
    '"The books and scrolls here have taught me much of Britannia\'s\\thistory and other... interesting subjects.\\""': '"這裡的書籍和卷軸教會了我許多關於 Britannia 的歷史與其他……有趣的主題。」"',
    '"His clouded eyes sparkle with intelligence. But you can\'t help wondering how books and scrolls are of any use to a man afflicted with blindness."': '"他混濁的雙眼閃爍著智慧。但你忍不住好奇，書籍和卷軸對一個受失明之苦的人能有什麼用。"',
    '["Mondain", "Minax", "Exodus", "subjects", "blindness"]': '["Mondain", "Minax", "Exodus", "主題", "失明"]',
    
    '"subjects"': '"主題"',
    '"\\"If thou art interested, feel free to inspect them. This is no library.\\" As if regretting his gracious gesture, he adds, \\"However, I trust that thou wilt take utmost care with the older ones.\\" He stops, on the verge of saying more."': '"「如果你有興趣，請隨意查閱。這裡可不是圖書館。」彷彿對自己友善的舉動感到後悔，他補充道：「不過，我相信你會非常小心對待那些古老的書籍。」他停頓下來，似乎還想再說些什麼。"',
    '"blindness"': '"失明"',
    '"\\"Thou art a tiresome child. Leave me be!\\" He ignores your presence.*"': '"「你真是個煩人的小孩。別管我！」他無視你的存在。*"',
    
    '"Erethian scowls, \\"Now there was a mighty wizard. A bit twisted but then who knows what happens to the human mind when \'tis subjected to the powers he wielded."': '"Erethian 皺著眉頭，「那可是個強大的巫師。有點扭曲，但誰知道當人類的心智屈服於他所掌握的力量時會發生什麼事。"',
    '"\'Tis even said his skull alone had the power to destroy enemies... he must have locked a magical matrix upon it, I\'ll have to research that.\\" He nods his head, seemingly making a mental note, then continues with a wistful look on his aged features,"': '"甚至有傳言說光是他的頭骨就有摧毀敵人的力量……他一定在上面鎖定了一個魔法矩陣，我得好好研究一下。」他點點頭，似乎在心裡記下了一筆，然後帶著一絲渴望的神情繼續說道，"',
    '"\\"I\\twould have loved to study that fascinating Gem of Immortality, but alas, I was born in too late an era.\\""': '"「我本來會很想研究那顆迷人的不朽寶石，但可惜啊，我出生的時代太晚了。」"',
    '["Gem of Immortality", "skull"]': '["不朽寶石", "頭骨"]',
    
    '"A sad sweet smile comes to the wizard\'s face, \\"She was quite a comely lass at one time, with a mind forever searching.\\" His expression darkens, \\"But then Mondain forced all of the good sense from her."': '"巫師臉上露出一抹帶著感傷的甜美微笑，「她曾經是個相當清秀的少女，有著一顆永遠在探索的心。」他的表情暗了下來，「但是後來 Mondain 把她所有良知都給奪走了。"',
    '"She became a power unto herself, in time. I do not think she quite rivaled her former mentor, Mondain, but she was a force to be reckoned with, nevertheless."': '"隨著時間過去，她自己成為了一股勢力。我認為她並未能完全匹敵她的前導師 Mondain ，但無論如何，她仍是一股不容小覷的力量。"',
    '"And that thou didst, with the Quicksword, Enilno. That\\tact will most likely have tales sung about it for the next eon.\\" Under his breath he adds, \\"Even if Iolo\'s the only one who sings it.\\""': '"而你做到了，用那把快劍 Enilno 。這項壯舉很可能在下一個紀元裡都會被傳唱。」他低聲補充道：「即使 Iolo 是唯一一個在唱的人。」"',
    '"With a look of indignation Iolo says, \\"Pardon me, sir. But I\'ll have thee know that ballads of the Avatar still grace all of the finest drinking establishments of Britannia.\\""': '"Iolo 帶著憤慨的神情說道：「請原諒，先生。但我必須讓你知道，關於聖者的民謠仍然為 Britannia 所有最高級的酒館增添光彩。」"',
    '"\\"And what a dubious distinction that is.\\" The corners of the mage\'s mouth come up in a delicate smile."': '"「那真是種可疑的榮耀啊。」法師的嘴角泛起一絲微妙的微笑。"',
    '"An angry retort dies on Iolo\'s lips as the elderly mage lifts his hands in a gesture of peace."': '"當老法師舉起雙手做出和平的手勢時， Iolo 嘴邊憤怒的反駁便嚥了回去。"',
    '"\\"Please, forgive the offense I have given. Thou shouldst know that I have seen, almost first hand, the Avatar\'s bravery in the face of adversity."': '"「拜託，請原諒我的冒犯。你應該知道，我幾乎是親眼見證了聖者在逆境中展現的勇氣。"',
    '"I have nothing but the highest regard for the Destroyer of the Age of Darkness and Harbinger of the Age of Enlightenment."': '"我對這位黑暗時代的終結者及啟蒙時代的先驅，只有最高的敬意。"',
    '"Enilno"': '"快劍 Enilno"',
    
    '"\\"That being has become a passion of mine, lately.\\" He almost glows with excitement. \\"Indeed, \'tis what brought me here. While I\\twas at the Lyceaum, I happened upon a passage in a manuscript that described an Island of Fire."': '"「那傢伙最近成了我的狂熱所在。」他幾乎興奮得發光。「的確，這正是把我帶到這裡的原因。當我在 Lyceaum 的時候，我偶然在手稿中看到一段描述烈火島的文字。"',
    '"Upon further research, I found that the entity known as Exodus was not truly destroyed. The interface between its two parts and the world was merely severed.\\""': '"在進一步的研究後，我發現這個被稱為 Exodus 的實體並未真正被摧毀。牠的兩個部分與世界之間的介面只是被切斷了而已。」"',
    '["two parts", "interface"]': '["兩個部分", "介面"]',
    '"two parts"': '"兩個部分"',
    '"\\"One part, his psyche we shall call it, was taken by the gargoyles who live below us in a realm on the other side of the world. A truly fascinating culture they have, but I digress...\\" You begin to wonder just how long this old man has\\tbeen out of circulation."': '"「其中一個部分，我們稱之為牠的 Psyche (心靈)，被居住在我們下方、世界另一端領域的石像鬼帶走了。他們有著極其迷人的文化，但我離題了……」你開始納悶這個老人究竟已經與世隔絕多久了。"',
    '"He continues, \\"The other, I have here. I call it the Dark Core, because without the psyche, it is mostly lifeless.\\" His face appears to youthen, and you feel as if you\'re speaking to a child describing his new toy... or perhaps, pet."': '"他繼續說道：「另一個部分，我放在這裡。我稱它為黑暗核心，因為沒有了 Psyche ，它幾乎了無生氣。」他的臉龐看起來變年輕了，你感覺自己彷彿在和一個描述著新玩具……或者可能是新寵物的孩子說話。"',
    '"\\"I believe \'twas the removal of the psyche from the Core that caused this island to sink beneath the waves.\\""': '"「我相信正是從核心中移除了 Psyche ，才導致這座島沉沒在海浪之下。」"',
    '"gargoyles"': '"石像鬼"',
    '"psyche"': '"Psyche"',
    '"Dark Core"': '"黑暗核心"',
    '"interface"': '"介面"',
    '"His expression is unreadable, \\"The machine that thou destroyed was Exodus\' means of communication with and control of the world."': '"他面無表情，「你摧毀的那台機器是 Exodus 與世界溝通及控制世界的手段。"',
    '"When it was destroyed, his psyche could no longer retain its hold on the Dark Core."': '"當它被摧毀時，牠的 Psyche 再也無法保持對黑暗核心的控制。"',
    '"I have often wondered if another interface was implemented, would the psyche return, or possibly be regenerated...\\""': '"我經常在想，如果建立了另一個介面， Psyche 會不會回歸，或者是可能會重生……」"',
    '"As his\\tidle musings begin to run toward possibly dangerous conclusions, his mouth audibly snaps shut."': '"當他的閒散推論開始朝向可能危險的結論發展時，他清晰地閉上了嘴。"',
    '"\\"Interesting creatures, thou mightest call them balrons, but they are not the beasts that history has made of them."': '"「有趣的生物，你可能會叫牠們炎魔，但牠們並不是歷史上所描繪的野獸。"',
    '"The larger, winged ones are intelligent and magical by nature,\\twhile the smaller, wingless ones appear to be the work force for the species.\\""': '"那些體型較大、有翅膀的種類天生充滿智慧且具有魔力，而體型較小、無翅的種類似乎是該物種的勞動力。」"',
    '"He turns his head in your direction with a puzzled expression in his eyes, \\"I have the oddest feeling that thou hast heard all of this before...\\" Erethian falls silent."': '"他將頭轉向你，眼神中帶著困惑的表情。「我有一種最古怪的感覺，彷彿你已經聽過這一切了……」 Erethian 陷入了沉默。"',
    
    '"\\"Eventually, I shall turn my studies to that being. The gargoyles have placed it within a statue, in a shrine they dedicated to their principle of Diligence."': '"「最終，我會將我的研究轉向那個存在。石像鬼將它安置在一座雕像內，放在他們致力於『勤勉』原則的神殿中。"',
    '"\\"Yes, here it is. It is the cylinder sitting upon yon pedastal.\\" He motions in the direction of the Dark Core."': '"「是的，在這裡。它就是放置在那邊基座上的圓柱體。」他朝著黑暗核心的方向指了指。"',
    '"\\"I have found it to be quite a treasure trove of useful facts. Its sole purpose seems to be the storage of information."': '"「我發現它簡直是個充滿實用事實的寶庫。它唯一的目的似乎就是儲存資訊。"',
    '"Much of the information is trivial, such as the detailed description\\tof the color of the\\tsky on a particular day eons ago,"': '"大部分資訊都很瑣碎，像是詳細描述了億萬年前某一天天空的顏色，"',
    '"while other bits give instructions for the manipulation of the\\tworld."': '"而其他部分則提供了操控這個世界的指示。"',
    '"Within it I even found the knowledge to raise and sustain this island\\twe stand upon. It is truly a remarkable artifact.\\""': '"在裡面我甚至找到了升起並維持我們所站立的這座島嶼的知識。它真是一件非凡的神器。」"',
    '"He thinks for a moment, then looks nervously in your direction, \\"Please, do be careful around it. Artifacts seem to have a tendency to, shall we say, disappear around thee.\\""': '"他思考了片刻，然後緊張地看向你的方向。「拜託，在它附近千萬要小心。神器似乎有一種……該怎麼說呢，在你周圍就會消失的傾向。」"',
    
    '"\\"Ah, now there\'s a question. I\'ve heard naught of it\'s existence since the Age of Darkness ended. Would that I knew its location."': '"「啊，這是個好問題。自從黑暗時代結束後，我就再也沒聽過它的下落。但願我知道它在哪裡。"',
    '"It was reputedly a great item of magic. Didst thou find it so?\\" He cocks his head to one side as he asks the question."': '"據說它是一件強大的魔法物品。你覺得呢？」他在問這個問題時，將頭偏向了一側。"',
    '"\\"Yes, \'tis a pity to lose such an item of antiquity. Perhaps as time unfolds it will turn up. These things have a way of surfacing at the strangest times.\\""': '"「是的，失去這樣一件古物真是個遺憾。也許隨著時間流逝它會出現。這些東西總是有辦法在最奇怪的時候浮現。」"',
    '"\\"No? It didst seem to serve thee well enough to dispatch the enchantress Minax. But then I suppose only a poor bard blames his instrument.\\" He winks mischieviously in your general direction."': '"「沒有嗎？它似乎為你發揮了足夠的效用來除掉女巫 Minax 。不過話說回來，我想只有蹩腳的吟遊詩人才會怪罪自己的樂器。」他調皮地朝你的方向眨了眨眼。"',
    
    '"Milky eyes glitter up at you like twin marbles, \\"Ah, yes. But thou knowest all too well about that little bauble."': '"那雙如兩顆彈珠般的乳白眼珠閃閃發光地看著你，「啊，是的。但你對那個小玩意兒可太清楚了。"',
    '"After all, it was thee who smashed it into the shards which caused thee so much trouble during the regency of Lord Blackthorn."': '"畢竟，就是你把它打成了碎片，在 Lord Blackthorn 攝政期間給你惹了那麼多麻煩。"',
    '"So much power that even in a shattered state, its magic still flowed. \'Tis sad to lose such an artifact.\\" As if suddenly remembering with whom he is speaking, he ammends, \\"Much better than having Mondain running about mucking with things, I suppose.\\""': '"如此強大的力量，即使處於粉碎狀態，它的魔法仍然流動著。失去這樣一件神器真令人悲傷。」彷彿突然想起他是在和誰說話，他改口道：「總比讓 Mondain 到處亂搞要好得多，我想。」"',
    '"skull"': '"頭骨"',
    '"\\"\'Twould seem that someone,\\" he pauses dramatically, \\"let that slip into a volcano...\\" His wry smile belies his careless tone."': '"「看起來有人，」他戲劇性地停頓了一下，「讓那東西掉進了火山……」他苦澀的笑容與他漫不經心的語氣自相矛盾。"',
    
    '"\\"Ah, so thou hast met that old windbag. Truly, I feel that I would do better to free myself of that burdensome beast, but he sometimes proves to be useful. If it weren\'t for his whining, perhaps he and I would get along better.\\""': '"「啊，原來你見過那個老愛吹牛的傢伙了。老實說，我覺得我最好能擺脫那隻累人的野獸，但他有時候還是挺有用的。要不是他老愛抱怨，或許我和他能相處得更好。」"',
    '["whining", "free"]': '["抱怨", "釋放"]',
    '"whining"': '"抱怨"',
    '"\\"\'Tis his favorite passtime. He begs, pleads, and threatens me to free him from that stupid mirror. Believe me, if I could I would have done it long ago.\\" Erethian\'s lined face shows his chagrin."': '"「這是他最喜歡的消遣。他乞求、懇求、甚至威脅我，要我把他從那面愚蠢的鏡子裡放出來。相信我，如果我能做到，我早就做了。」 Erethian 滿佈皺紋的臉上露出懊惱的神情。"',
    '"free"': '"釋放"',
    '"\\"He wants this special bauble. I once possessed this gem he seeks, and I don\'t think he\'d be very happy once he gets it. I have tried to tell him that \'twould only imprison\\thim in a more mobile jail, but alas, his head is made of stone.\\""': '"「他想要這個特別的小玩意。我曾經擁有他尋找的這顆寶石，而且我認為一旦他得到它，他也不會高興到哪去。我試著告訴過他，這只會把他囚禁在一個更具機動性的監獄裡，但可惜，他的腦袋是石頭做的。」"',
    '"jail"': '"監獄"',
    '"\\"Quite. Arcadion seeks to have dominion over Britannia and believes that the gem will give him the ability to exert his power here. In truth, the Ether Gem works in the reverse, his power will become accessible to the one who possesses the gem.\\""': '"「確實如此。 Arcadion 試圖統治 Britannia ，並相信這顆寶石能讓他在此施展他的力量。事實上，乙太寶石的作用恰恰相反，擁有這顆寶石的人將能夠使用他的力量。」"',
    '"Ether Gem"': '"乙太寶石"',
    
    '"\\"The gem was pilfered from me by an ill tempered dragon. She blew her way into this castle, waylayed the golems that protect the Shrine of Principle, then destroyed a perfectly good secret door on her way to the Test of Courage. I\'d have liked to see her squeeze through the hole she made, \'tis hardly big enough for a creature of her bulk.\\" The mage\'s milky eyes twinkle with suppressed mirth."': '"「這顆寶石被一條脾氣暴躁的龍從我這裡偷走了。她硬闖進這座城堡，伏擊了保護原則神殿的魔像，然後在前往勇氣考驗的路上毀掉了一扇完好的密門。我倒真想看看她是如何擠過她弄出來的那個洞，那個洞對她那種體型的生物來說根本不夠大。」法師乳白的眼珠閃爍著壓抑不住的笑意。"',
    '["golems", "Shrine of Principle", "Test of Courage"]': '["魔像", "原則神殿", "勇氣考驗"]',
    '"golems"': '"魔像"',
    '"\\"Mmmm... Yes. This pair of manshaped, magical constucts used to guard the Shrine of Principle, but alas, one fell pray to falling rocks when the dragon assaulted the castle. The other picked up his, ah... brother, for lack of a better word, and carried him off through the portal to the Test of Love.\\""': '"「嗯……是的。這對人形魔法構造體曾經守護著原則神殿，但可惜的是，當龍襲擊城堡時，其中一個被落石擊中了。另一個撿起了他的，呃……兄弟，可以這麼說，並帶著他穿過傳送門前往了愛之考驗。」"',
    '"Test of Love"': '"愛之考驗"',
    '"Shrine of Principle"': '"原則神殿"',
    '"\\"The shrine lies through the doors at the rear of the main hall. There thou canst find three statues, each one dedicated to a Principle set forth by Lord Britsh at the beginning of the Age of Enlightenment.\\" Conspiratorially he adds, \\"A bit stuffy, but they make nice cloakracks.\\""': '"「神殿就在大廳後方的門外。在那裡你可以找到三尊雕像，每一尊都獻給 Lord British 在啟蒙時代初期所設立的某項原則。」他神祕兮兮地補充道：「是有點古板，不過當衣架倒是挺不錯的。」"',
    '"\\"I not had the chance to inspect that oddity yet, however, thou art welcome to peruse it at thy leisure.\\" He smiles like a grandfather giving a present to a child."': '"「我還沒機會去檢查那個奇特的地方，不過，歡迎你在閒暇時去仔細看看。」他像個爺爺給孩子禮物般微笑著。"',
    '"Test of Courage"': '"勇氣考驗"',
    '"heroine\'s"': '"女英雄的"',
    '"hero\'s"': '"英雄的"',
    '"\\"I believe \'twas set in motion by Lord British in order to test...\\" He gestures in your direction, \\"A virtuous "': '"「我相信這是由 Lord British 發起的，為了考驗……」他朝著你的方向比劃了一下，「一位具備美德的"',
    '" fighting ability and courage. The statues in the back of this castle can tell thee more about the tests, though.\\" Erethian grins mysteriously."': '"戰鬥能力和勇氣。不過，城堡後方的那些雕像可以告訴你更多關於考驗的事。」 Erethian 神秘地咧嘴笑了。"',
    
    '"\\"So... thou hast made a servant of Arcadion. \'Tis good to be rid of his incessant whining. I hope that thou findest him to be as useful as I didst.\\" You\'re not sure, but his words might be construed as a curse."': '"「所以……你已經讓 Arcadion 成為你的僕人了。能擺脫他無休止的抱怨真是太好了。希望你覺得他跟我一樣覺得有用。」你不確定，但他的話可能被解讀為一種詛咒。"',
    '"The gem glows brighter, \\"\'Tis good to see the last of thee, also, old man. Perhaps in another life, I shall be thy master, and thou the slave.\\" The daemon lets out a chilling little laugh."': '"寶石發出更亮的光芒，「終於不用再看到你了真好，老頭。也許在來生，我會是你的主人，而你是奴隸。」惡魔發出一聲令人毛骨悚然的輕笑。"',
    '"Erethian looks a little shaken at hearing the daemon\'s voice, but quickly recovers his composure. \\"I think not, daemon. I\'m not at all sure that there is a way for thou to get out of that little gem.\\" The elderly mage\'s expression is unreadable.*"': '"聽到惡魔的聲音， Erethian 看起來有些動搖，但很快恢復了平靜。「我不這麼認為，惡魔。我根本不確定你是否有辦法從那個小寶石裡逃出來。」這位年邁法師的表情難以捉摸。*"',
    '"\\"I see that thou didst not heed my warning. Alas, my pity shall be thine eternally. And so, what wouldst thou have of me, Master and Slave of the Shade Blade.\\""': '"「看來你沒有聽從我的警告。唉，我將永遠為你感到惋惜。那麼，暗影之刃的主人與奴隸，你想從我這裡得到什麼？」"',
    '"bye"': '"告辭"',
    '"\\"Goodbye and good luck... Thou\'lt need it.\\" The old mage snickers under his breath as if enjoying a personal joke, quite possibly at your expense.*"': '"「再見，祝你好運……你會需要它的。」老法師低聲竊笑著，彷彿在享受著一個私人的笑話，而且很可能是拿你開玩笑。*"',
    '"\\"Goodbye and good luck...\\" Erethian sounds truly sympathetic."': '"「再見，祝你好運……」 Erethian 的聲音聽起來真的充滿同情。"'
}

for k, v in replacements.items():
    text = text.replace(k, v)

with open(dest, 'w', encoding='utf-8') as f:
    f.write(text)

print(f"Generated {dest} successfully.")
