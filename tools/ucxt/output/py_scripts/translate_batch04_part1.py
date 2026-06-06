import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_0466 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"hourglass"': '"沙漏"',
    '"Time Lord"': '"時間領主"',
    '"enchant"': '"附魔"',
    '"Your old friend Nicodemus has a far away look in his eyes."': '"你的老朋友 Nicodemus 的眼神顯得很遙遠。"',
    '"\\"Who art thou?\\" Nicodemus asks. \\"Oh, I remember. Remember demember! Ha ha ha!\\""': '"「你是誰？」 Nicodemus 問。「噢，我記得了。記得 (Remember) 皮得 (demember) ！哈 哈 哈！」"',
    '"\\"Hello again, "': '"「又見面了， "',
    '",\\" says Nicodemus."': '"，」 Nicodemus 說。"',
    '"\\"That is a very good question. Some days I can actually remember. Let\'s see... today... Yes! I am Nicodemus! Nicodomus! Nicodimus! Nico-nico-kukodamus! Ha ha ha!\\""': '"「這是一個非常好的問題。有些日子我真的能記得。讓我想想……今天……對！我是 Nicodemus ！ Nicodomus ！ Nicodimus ！ Nico-nico-kukodamus ！哈 哈 哈！」"',
    '"\\"Thou art addressing Nicodemus.\\""': '"「你在跟 Nicodemus 說話。」"',
    '"\\"To go absolutely mad! For that is indeed what is happening! My magic no longer works! Every time I attempt to change something into a drake, it only becomes a newt! Oh, newty-wewty scooty-booty!\\" He speaks to an imaginary creature beside him. \\"Who asked thee? Away with thee!\\" He turns to you. \\"Sorry. That bloody newt keeps trying to undermine my conversation. Anyway... I suppose I can sell thee some reagents, potions, or spells. I must make a living somecow. I mean somehow! That was Some Cow! Ha ha ha!\\""': '"「絕對是瘋了！因為那確實正在發生！我的魔法失效了！每次我試圖把東西變成龍 (drake) ，牠就只會變成蠑螈 (newt) ！喔，蠑螈-蠑螈 蹦蹦-跳跳！ (newty-wewty scooty-booty!) 」他對著身旁一個想像中的生物說話。「誰問你了？走開！」他轉向你。「抱歉。那隻該死的蠑螈一直試圖破壞我的談話。總之……我想我可以賣給你一些秘藥、藥水或法術。我必須『某牛』 (somecow) 維生。我是說『設法』 (somehow) 維生！那是『一些牛』 (Some Cow) ！哈 哈 哈！」"',
    '"magic"': '"魔法"',
    '"potions"': '"藥水"',
    '"\\"Why, to perform magic! It seems that the disturbance in the ether has been repaired! I can also sell thee some reagents or spells.\\""': '"「哎呀，為了施展魔法啊！看來乙太的干擾已經修復了！我也能賣給你一些秘藥或法術。」"',
    '"spells"': '"法術"',
    '"reagents"': '"秘藥"',
    '"\\"Magic? What magic!? All the magic in the world has gone completely topsy-turvy! Oh, blurpsy-flurpsy! Ha ha ha! Those are silly words, are they not? \'Tis a pity they are not magical! Ha ha ha!\\""': '"「魔法？什麼魔法！？世界上所有的魔法都已經完全亂套了！喔，糊裡糊塗！哈 哈 哈！這些字很蠢，不是嗎？可惜它們沒有魔力！哈 哈 哈！」"',
    '"\\"The ether is repaired. The mages of the world are indebted to thee.\\""': '"「乙太修復了。全世界的法師都欠你一個人情。」"',
    '"\\"Dost thou wish to buy some spells?\\""': '"「你想買些法術嗎？」"',
    '"\\"Never mind, then!\\""': '"「那就算了！」"',
    '"\\"Dost thou wish to buy some reagents?\\""': '"「你想買些秘藥嗎？」"',
    '"\\"Potions? What makes thee think I have potions? Art thou sure thou dost not want Lotions? I certainly have lotions! Otions, slotions, motions, votions! Ha ha ha! Wait! Oh, yes! I do have potions! I told thee so, didn\'t I! Let us see... I have this black potion here. I am not sure what it does exactly, but I am quite sure it turns one invisible."': '"「藥水 (Potions) ？你怎麼會覺得我有藥水？你確定你不想要乳液 (Lotions) ？我絕對有乳液！ Otions, slotions, motions, votions ！哈 哈 哈！等等！喔，對了！我確實有藥水！我告訴過你的，不是嗎！讓我們看看……我這裡有這瓶黑色的藥水。我不太確定它具體的作用，但我很確定它能讓人隱形。"',
    '"\\"Yes, I have potions. Well, I have this black one. It is an invisibility potion."': '"「是的，我有藥水。嗯，我有這瓶黑色的。這是一瓶隱形藥水。"',
    '"\\"Dost thou want it for, say, 75 gold?\\""': '"「你想要它嗎，比方說，75 個金幣？」"',
    '"\\"Here is the potion.\\""': '"「這是藥水。」"',
    '"\\"Thou dost not have enough room to carry the potion!\\""': '"「你沒有足夠的空間來攜帶藥水！」"',
    '"\\"Art thou trying to cheat me? Thou dost not have enough gold!\\""': '"「你想騙我嗎？你沒有足夠的金幣！」"',
    '"\\"Then why didst thou mention it? Leave me alone!\\""': '"「那你為什麼要提？別煩我！」"',
    '"\\"Timey Limey Lord? Hmmm. I don\'t know him. Wait! Yes I do. Does he have a big black mustache and three pairs of pants? No! I know who he is. He\'s the fellow who came to fix my sundial the other day, right?\\""': '"「滴答滴答領主 (Timey Limey Lord) ？嗯。我不認識他。等等！對，我認識。他是不是留著黑色大鬍子，還穿著三條褲子？不！我知道他是誰了。他是前幾天來修我日晷的傢伙，對吧？」"',
    '"\\"I thought so! Tell him that bloody thing still doesn\'t work! It gives me three shadows! Dadows badows whoopeee! Ha ha ha!\\""': '"「我就知道！告訴他那該死的東西還是壞的！它給了我三個影子！ Dadows badows whoopeee ！哈 哈 哈！」"',
    '"\\"He\'s not? Hmmm. Then he must be the man I am not thinking of!\\""': '"「他不是嗎？嗯。那他一定是我沒想到的那個人！」"',
    '"\\"Wait! I remember! He is my Knight\'s Bridge opponent! We play on my Knight\'s Bridge court just north of mine house.\\""': '"「等等！我記起來了！他是我的騎士橋 (Knight\'s Bridge) 對手！我們在我家北邊的騎士橋場地玩。」"',
    '"\\"I have not spoken to the Time Lord in months! How is the old codger? Give him my regards. Tell him I miss our Knight\'s Bridge games!\\""': '"「我好幾個月沒跟時間領主說過話了！那老傢伙好嗎？代我向他問好。告訴他我很想念我們的騎士橋遊戲！」"',
    '"Knight\'s Bridge"': '"騎士橋"',
    '"\\"\'Tis a life-size board game. I have a book around here somewhere which contains the rules.\\""': '"「這是一種真人大小的棋盤遊戲。我這附近應該有一本書裡面寫著規則。」"',
    '"\\"Yes, I just enchanted it.\\""': '"「是的，我剛剛給它附了魔。」"',
    '"\\"This Time Lord told thee what? An hourglass! I have no blinking hourglass! Glassy wassy hoursplassy! Ha ha ha! Wait! An enchanted hourglass? That does ring a bell. Clang Clang Clang! Ha ha ha! Wait! I remember. I had an hourglass. I sold it. To a gypsy. Or was it an antique dealer? I think I might have sold it to a gypsy antique dealer in Britain. Or Paws. Somewhere on that side of the land. But if my memory serves me correctly, that hourglass used up its enchantment, which is why I sold it. I suppose if the ether is repaired, I could possibly re-enchant it. Bring it to me and we\'ll see what we can do. I know! We can play a rousing game of chess! But only if I can deal at all times. I do not trust thee.\\""': '"「這個時間領主告訴你什麼？一個沙漏！我沒有什麼見鬼的沙漏！玻璃-玻璃 沙漏-沙漏！ (Glassy wassy hoursplassy!) 哈 哈 哈！等等！一個附魔的沙漏？這聽起來很耳熟。叮叮噹噹！哈 哈 哈！等等！我記得了。我以前有一個沙漏。我把它賣了。賣給了一個吉普賽人。還是一個古董商？我想我可能把它賣給了 Britain 的一個吉普賽古董商。或是 Paws 。在那片土地上的某個地方。但如果我沒記錯的話，那個沙漏的魔力已經用光了，這就是我賣掉它的原因。我想如果乙太修復了，我或許可以重新給它附魔。把它帶來給我，我們看看能做些什麼。我知道了！我們可以來一場激烈的西洋棋！但前提是必須總是由我發牌。我不信任你。」"',
    '"\\"Mine old hourglass! Of course I remember it! I believe I sold it to an antique dealer in Paws. I might be able to re-enchant it if thou wouldst bring it to me.\\""': '"「我的舊沙漏！我當然記得它！我相信我把它賣給了 Paws 的一個古董商。如果你能把它帶來給我，我或許可以重新給它附魔。」"',
    '"\\"What\'s this? An hourglass of some kind? Wait! It looks vaguely familiar! Thief!! This is mine hourglass! I have been looking for it for years! Where didst thou get it, scoundrel? I shall turn thee into a duck!\\"~~Nicodemus intones some spell and points at you, but nothing happens.~~\\"Zounds! Thou art no more a quacker than I am. Nothing works anymore. Quacker slacker wacker flacker! Ha ha ha!\\""': '"「這是什麼？某種沙漏？等等！它看起來有點眼熟！小偷！！這是我的沙漏！我找它找了好幾年了！你從哪裡弄來的，無賴？我要把你變成一隻鴨子！」~~Nicodemus 念了個法術並指著你，但什麼事也沒發生。~~「天啊！你跟我一樣不是隻會嘎嘎叫的鴨子。什麼都沒用了。嘎嘎 懶鬼 哇哇 飛飛！ (Quacker slacker wacker flacker!) 哈 哈 哈！」"',
    '"\\"Mine old hourglass! I suppose I could revitalize the enchantment upon it.\\""': '"「我的舊沙漏！我想我可以重新恢復它的魔力。」"',
    '"\\"Enchant? Thou dost want me to enchant this wretched thing? Thou must have the brain of a toad! Toady woady bloady coady! Ha ha ha!~~\\"Do me a favor, Mister Avatar. Repair the blinking ether, wilt thou? Do that and I can enchant thy glourblass. I mean floursass. I mean hourglass. Tell that to thy \'Time Lord\'. Thou canst also tell him he needs a bath.\\""': '"「附魔？你想要我給這件破東西附魔？你一定是有個蟾蜍腦袋！蟾蜍 蟾蜍 蟾蜍！ (Toady woady bloady coady!) 哈 哈 哈！~~幫我個忙，聖者先生。修好那該死的乙太，好嗎？做到了我就能給你的玻璃沙漏 (glourblass) 附魔。我是說麵粉沙漏 (floursass) 。我是說沙漏 (hourglass) 。把這告訴你的『時間領主』。你還可以告訴他，他需要洗個澡了。」"',
    '"\\"I would be most happy to enchant the hourglass. After freeing the ether, I am most indebted to thee. Let me see it...\\""': '"「我很樂意為沙漏附魔。在解放乙太之後，我欠你一個天大的人情。讓我看看它……」"',
    '"Nicodemus takes the hourglass and studies it a moment. He sets it on a table and closes his eyes, concentrating. He intones a few words, throws some reagents into the air, and passes his hand over the artifact.~~\\"That should do it.\\" He hands the hourglass back to you."': '"Nicodemus 拿過沙漏，研究了一會兒。他把它放在桌上，閉上眼睛集中精神。他念了幾個字，向空中撒了一些秘藥，然後把手拂過這件神器。~~「這樣應該就行了。」他把沙漏交還給你。"',
    '"\\"Where is it? Thou dost not have the hourglass!\\""': '"「它在哪裡？你沒有沙漏！」"',
    '"\\"Bye bye booby booby bye bye! Ha ha ha!\\""*': '"「拜拜 笨蛋 笨蛋 拜拜！哈 哈 哈！」*"',
    '"\\"Goodbye, "': '"「再見， "',
}

trans_0467 = {
    '"The man scowls at you. \\"Thou wearest the symbol of that most foul of groups, The Fellowship. Prepare to die!\\"*"': '"這個男人對你怒目而視。「你戴著那個最邪惡組織的標誌，兄弟會。準備受死吧！」*"',
    '"Eyeing you carefully, the man before you takes an aggressive stance."': '"你面前的男人仔細地打量著你，擺出了一個充滿攻擊性的姿勢。"',
    '"\\"Good day, "': '"「日安， "',
    '",\\" Thad says coolly."': '"，」 Thad 冷冷地說。"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"He stares at you for a moment. \\"Thad is my name, "': '"他盯著你看了一會兒。「我的名字是 Thad ，"',
    '"\\"Job? I have not the time for a job. I am on a quest to rid this land of that which plagues it!\\""': '"「職業？我沒時間做什麼工作。我的使命是為這片土地剷除那些為非作歹的瘟疫！」"',
    '"quest"': '"使命"',
    '"plague"': '"瘟疫"',
    '"\\"I have devoted mine entire life to this, nothing will get in my way, not even Batlin.\\""': '"「我為此奉獻了我的一生，沒有什麼能阻擋我，連 Batlin 也不能。」"',
    '"Batlin"': '"Batlin"',
    '"\\"He is the leader of the cursed organization, The Fellowship!\\""': '"「他是那個被詛咒的組織，兄弟會的首領！」"',
    '"The Fellowship"': '"兄弟會"',
    '"\\"Surely thou hast heard of The Fellowship, a most foul and evil organization. It has even infested the lovely forest of Yew!\\""': '"「你肯定聽過兄弟會，一個最齷齪邪惡的組織。它甚至已經入侵了美麗的 Yew 森林！」"',
    '"Yew"': '"Yew"',
    '"\\"I know little about their practices, but I do know they live outside the bounds of moral decency. They have kidnapped my beloved sister, Millie, and have cast a spell of enchantment. Now she lives as they do. I have vowed to remove this wicked spell and will slay the entire organization should that prove necessary!~~ \\"Thou, also, hast taken up a similar cause, I expect. Yes?\\""': '"「我對他們的做法所知甚少，但我知道他們的行為超越了道德倫理的底線。他們綁架了我親愛的妹妹， Millie ，並對她施了某種蠱惑的法術。現在她過著和他們一樣的生活。我發誓要解除這個邪惡的法術，如果有必要，我會殺光整個組織！~~我想，你也肩負著類似的使命吧。是嗎？」"',
    '"\\"Excellent.\\" He shakes your hand. \\"Thou art indeed a worthy warrior, "': '"「太好了。」他握了握你的手。「你確實是一位值得尊敬的戰士，"',
    '"\\"No?\\" He seems genuinely surprised. \\"Then perhaps thou wilt consider taking up my quest in thine own manner.\\""': '"「不是？」他似乎真的很驚訝。「那麼或許你會考慮以你自己的方式接下我的使命。」"',
    '"\\"I expected as much. Thou art truly an honorable warrior.\\""': '"「這在我的意料之中。你真的是一位光榮的戰士。」"',
    '"\\"What manner of scoundrel art thou? Remove thyself from my presence before I decide to smite thee from thy wretched life!\\"*"': '"「你算是哪門子的無賴？在我決定結束你這可悲的生命之前，快從我眼前滾開！」*"',
    '"\\"I know the land, but not the people. There is nothing useful I have to tell thee.\\" He appears thoughtful for a moment. \\"Perhaps I can aid thee a bit. I do know that there are two hunters who sometimes frequent this area. One, a woman, carries a spear. The other is an archer. That is all I can tell thee.\\""': '"「我了解這片土地，但不了解這裡的人。我沒有什麼有用的消息可以告訴你。」他沉思了一會兒。「或許我可以幫你一點忙。我確實知道有兩個獵人有時會出沒在這個區域。其中一個是女人，帶著長矛。另一個是弓箭手。這是我能告訴你的全部了。」"',
    '"\\"May thine endeavors reach fruition, "': '"「願你的努力能結出豐碩的果實，"'
}

trans_0468 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a man leaning on a longbow."': '"你看到一個男人倚著一把長弓。"',
    '"Bradman greets you. \\"Hail, "': '"Bradman 向你打招呼。「嗨，"',
    '"\\"I am Bradman.\\""': '"「我是 Bradman 。」"',
    '"\\"Why, \'tis my job to train the many who visit Yew to become more agile.\\""': '"「哎呀，我的工作就是訓練許多來 Yew 的人變得更加敏捷。」"',
    '"Yew"': '"Yew"',
    '"train"': '"訓練"',
    '"many"': '"許多"',
    '"Penni"': '"Penni"',
    '"\\"The forest attracts a lot of people who want to spend some time away from the larger towns like Minoc and Britain. So they come to Yew.~~\\"And, something about the woods makes most people want to explore.\\" He pats his bow.~~\\"That is where this comes in. The bow is the tool of survival in the forest. And I,\\" he jerks his thumb to his chest, \\"teach proficiency with the bow.\\""': '"「森林吸引了許多想遠離 Minoc 和 Britain 這樣的大城鎮的人。所以他們來到 Yew 。~~而且，這片森林的某些特質讓大多數人想要探索。」他拍了拍他的弓。~~「這就是它派上用場的時候了。弓是森林裡的生存工具。而我，」他用大拇指指著自己的胸口，「負責教導使用弓的技巧。」"',
    '"explore"': '"探索"',
    '"bow"': '"弓"',
    '"\\"There are many exciting things to see in the forest. Not a day goes by when I do not see something interesting: a new type of bird, a beautiful butterfly, or, best of all -- a deer.\\""': '"「森林裡有許多令人興奮的事物可以看。我每天都會看到有趣的東西：一種新鳥、一隻美麗的蝴蝶，或者最棒的——一隻鹿。」"',
    '"\\"\'Tis my weapon of choice. It takes a keen eye and a steady arm to shoot accurately. I think it has more finesse than a sword or a spear, for example.\\""': '"「這是我首選的武器。它需要敏銳的眼睛和穩定的手臂才能準確射擊。我認為它比劍或長矛等武器更需要技巧。」"',
    '"\\"I love the forest. It is very beautiful. Also,\\" he raises his bow, \\"I moved out here to be near the two great archers, Iolo and Tseramed.\\"*"': '"「我愛這片森林。它非常美麗。而且，」他舉起弓，「我搬到這裡來是為了靠近兩位偉大的弓箭手， Iolo 和 Tseramed 。」*"',
    '"Iolo blushes. \\"I am honored, my friend. I was not aware I had an admirer in this part of the land.\\" He bows to Bradman, who returns the gesture.*"': '"Iolo 臉紅了。「這是我的榮幸，我的朋友。我都不知道在這片土地上有我的崇拜者。」他向 Bradman 鞠躬， Bradman 也鞠躬回禮。*"',
    '"\\"Thank you for thy kind words, good sir. Perhaps we may practice sometime in the future.\\"*"': '"「謝謝你的讚美，好先生。或許我們未來可以找個時間切磋一下。」*"',
    '"\\"I would be greatly honored, milord!\\""': '"「這將是我莫大的榮幸，大人！」"',
    '"Tseramed"': '"Tseramed"',
    '"\\"He is a great archer who resides in the forest. He moved here to get away from the far-too-quickly growing towns.\\""': '"「他是一位居住在森林裡的偉大弓箭手。他搬到這裡來是為了遠離發展過快的城鎮。」"',
    '"\\"If thou wantest to train, my charge is 30 gold. Art thou still interested?\\""': '"「如果你想訓練，我的收費是 30 個金幣。你還有興趣嗎？」"',
    '"\\"I understand, "': '"「我了解，"',
    '"\\"Thou hast met Penni? I hope thou hast not trained with her,\\" he winks. \\"She is a valuable friend, but she hunts as well as a weed and she is as clumsy as an ox. I am afraid she knows nothing about fighting.\\""': '"「你見過 Penni 了？我希望你沒有跟她一起訓練，」他眨了眨眼。「她是一個珍貴的朋友，但她打獵的技術就像根雜草，而且笨拙得像頭牛。我恐怕她對戰鬥一無所知。」"',
    '"\\"May the trees part around thee, "': '"「願樹木為你讓路，"'
}

all_trans = {
    '0466': trans_0466,
    '0467': trans_0467,
    '0468': trans_0468
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
