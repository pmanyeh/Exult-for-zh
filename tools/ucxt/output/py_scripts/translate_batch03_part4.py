import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_041A = {
    '"Batlin\'s eyes narrow to red slits as he peers practically through you."': '"Batlin 的眼睛瞇成了紅色的細縫，幾乎要看穿你。"',
    '"\\"Thou hast the Cube! Thou cannot use it against -me-!\\""': '"「你有立方體 (Cube) ！你不能用它來對付『我』！」"',
    '"With that, Batlin turns with a flourish, and vanishes before your eyes!*"': '"說完， Batlin 華麗地轉身，並在你眼前消失了！*"',
    '"Batlin looks at you and his gaze returns to the Armageddon winter storm. \\"Many years ago, Avatar, I went to Skara Brae, the ghost city. The way the world is now reminds me of that dead place. In Skara Brae I had a spiritual experience so profound that I have never spoken of to another soul. I would like to share that experience with thee now, Avatar."': '"Batlin 看著你，他的目光又回到了末日的冬季風暴中。「多年前，聖者，我去了鬼城 Skara Brae 。現在這個世界的樣子讓我想起了那個死寂的地方。在 Skara Brae ，我有一段非常深刻的精神體驗，我從未向任何人提起過。我現在想與你分享那段體驗，聖者。"',
    '"\\"There at Skara Brae I saw a man who was called The Tortured One. I asked this dead man, pray tell, what is the answer to the question of Life and Death? He gave me no reply, and I asked him again. I beseeched him to impart some small parcel of wisdom upon me. What is the answer to the question of Life and Death?! He said nothing, but in his eyes... In his eyes I could see, Avatar, that he could not answer me for there was no answer to give. No answers to the question of Life and Death! It was then I understood. No meanings! No virtues! No values!!!... I commend thee, Avatar, for reaching that same liberating illumination!\\"*"': '"「在 Skara Brae 那裡，我看到了一個被稱為受盡折磨者 (The Tortured One) 的人。我問這個死人，請告訴我，生與死問題的答案是什麼？他沒有回答我，我又問了他一次。我懇求他傳授給我哪怕一丁點的智慧。生與死問題的答案是什麼？！他什麼也沒說，但在他的眼中……在他的眼中我可以看到，聖者，他無法回答我，因為根本沒有答案可以給。對生與死的問題沒有答案！那時我才明白。沒有意義！沒有美德！沒有價值！！！……我讚賞你，聖者，因為你達到了同樣解放人心的覺悟！」*"',
    '"\\"Art thou ready to answer questions from the Book of Fellowship?\\""': '"「你準備好回答《兄弟會之書》中的問題了嗎？」"',
    '"\\"Excellent, Avatar!\\""': '"「太棒了，聖者！」"',
    '"Fighting a tremble of hesitation you take a long deep drink from the goblet. Batlin steps up to you. \\"May the news spread far and wide that our newest member is none other than the Avatar!\\""': '"你強忍住一絲猶豫的顫抖，從高腳杯裡深深地喝了一大口。 Batlin 走向你。「願這個消息傳遍四方，我們最新的成員正是聖者！」"',
    '"The other Fellowship members cheer with pleasure."': '"其他兄弟會成員高興地歡呼。"',
    '"\\"Very good, Avatar.\\""': '"「非常好，聖者。」"',
    '"\\"Allow me to present thee with thy Fellowship medallion.\\" Batlin gives you the medallion. \\"Please -- wear thy medallion at all times for it shall be a symbol to all who see it that thou dost walk with the Fellowship. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\\"*"': '"「容我為你獻上你的兄弟會徽章。」 Batlin 把徽章交給你。「請——隨時佩戴你的徽章，因為對所有看到它的人來說，這將是與兄弟會同行的象徵。立刻把它戴到你的脖子上！喔，還有……歡迎加入兄弟會，聖者。」*"',
    '"\\"Thou art too encumbered to receive thy Fellowship medallion. Thou must lighten thy load.\\"*"': '"「你的負重太多，無法接收你的兄弟會徽章。你必須減輕負重。」*"',
    '"\\"My dear Avatar. Thou must realize that thou must know everything there is to know about The Fellowship before I can induct thee. Please study thy Book of Fellowship and return to me."': '"「我親愛的聖者。你必須明白，在我引導你入門之前，你必須了解關於兄弟會的一切。請研讀你的《兄弟會之書》後再來找我。"',
    '"Your mind seems unclear. I would not be surprised if thou dost not understand\\tanother soul with whom thou dost speak.\\""': '"你的思緒似乎不清楚。如果你不了解與你交談的另一個靈魂，我也不會感到驚訝。」"',
    '"\\"Come back when thou art ready.\\"*"': '"「等你準備好再來。」*"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"Elizabeth and Abraham"': '"Elizabeth 和 Abraham"',
    '"join"': '"加入"',
    '"package"': '"包裹"',
    '"delivered package"': '"送達的包裹"',
    '"package delivered"': '"包裹已送達"',
    '"chest"': '"箱子"',
    '"medallion"': '"徽章"',
    '"apples"': '"蘋果"',
    '"voice"': '"聲音"',
    '"Meditation Retreat"': '"冥想靜修處"',
    '"You see a rotund older gentleman, who is at once humble yet dignified. His gentle eyes exude caring for his fellow person."': '"你看到一位圓潤的年長紳士，他既謙遜又莊嚴。他溫柔的雙眼流露出對同胞的關懷。"',
    '"The man\'s eyes focus on the Fellowship medallion around your neck."': '"男人的目光集中在你脖子上的兄弟會徽章上。"',
    '"\\"My dear friend, thou art falsely impersonating a Fellowship member! Remove that medallion at once!\\"*"': '"「我親愛的朋友，你假冒兄弟會成員！立刻拿下那個徽章！」*"',
    '"\\"I shall not speak to thee unless thou dost remove that Fellowship medallion. Thou art falsely impersonating a Fellowship member!\\"*"': '"「除非你拿下那個兄弟會徽章，否則我不會跟你說話。你假冒兄弟會成員！」*"',
    '", my dear, dear friend! How wonderful to see thee again!\\" says Batlin."': '"，我親愛的朋友！能再次見到你真是太好了！」 Batlin 說。"',
    '"\\"My name, good friend, is Batlin. And indeed it is truly a privilege to meet the Avatar in the flesh.\\""': '"「好朋友，我的名字是 Batlin 。能親眼見到聖者本人，實在是莫大的榮幸。」"',
    '"\\"I was once a druid. Now I am the leader and the originator of The Fellowship. It is rapidly growing throughout Britannia and keeps me very busy, as thou canst well imagine. Ha! Ha! Ha!\\""': '"「我曾經是個德魯伊。現在我是兄弟會的領袖和創始人。它在整個 Britannia 迅速發展，讓我非常忙碌，你可以想像得到。哈！哈！哈！」"',
    '"Fellowship"': '"兄弟會"',
    '"\\"The Fellowship was formed twenty years ago with the full approval and support of Lord British. It is a society of spiritual seekers who strive to reach the highest levels of human potential and to share this knowledge freely with all people.\\""': '"「兄弟會是在二十年前，在 Lord British 的完全批准和支持下成立的。這是一個由精神探索者組成的協會，他們致力於達到人類潛能的最高水平，並與所有人自由分享這些知識。」"',
    '"spiritual"': '"精神"',
    '"\\"The Fellowship advances the philosophy of sanguine cognition, a way to apply a positive order of thought to one\'s life through what is called the Triad of Inner Strength.\\""': '"「兄弟會提倡樂觀認知 (sanguine cognition) 的理念，這是一種透過所謂的『內在力量三位一體 (Triad of Inner Strength) 』將積極的思考模式應用於生活的方法。」"',
    '"sanguine cognition"': '"樂觀認知"',
    '"Triad"': '"三位一體"',
    '"\\"We strive to avoid the mistakes made by mystics and sages since the dawn of time. They apply the standards of the past, such as the virtues, for example, to qualify the present, and thus they do not perceive it correctly. We seek to examine our present lives each on our own terms and see the world the way it is.\\""': '"「我們努力避免自古以來神秘主義者和智者所犯的錯誤。他們用過去的標準（例如美德）來衡量現在，因此他們無法正確地認知現在。我們尋求以自己的方式審視我們現在的生活，並看清這個世界真實的樣子。」"',
    '"virtues"': '"美德"',
    '"\\"They are perfectly adequate for those who feel that they still need them for whatever reason. But no one, not even thyself, thou must admit, Avatar, can fulfill them perfectly. Therefore they are a philosophy that is ultimately based upon failure. We have never claimed that our teachings are a substitute for the virtues. However, ours is a belief that is based upon success, not failure.\\""': '"「對於那些無論出於何種原因仍覺得需要它們的人來說，它們是完全足夠的。但沒有人，甚至連你自己，聖者，你也必須承認，沒有人能完美地實現它們。因此，它們最終是一種建立在失敗之上的哲學。我們從未聲稱我們的教義可以替代美德。然而，我們這是一種建立在成功而非失敗之上的信仰。」"',
    '"\\"The Triad of Inner Strength is simply three basic values that, when applied in unison, enable one to be more creative, satisfied and successful in life.\\""': '"「內在力量三位一體僅僅是三個基本價值觀，當它們結合應用時，能讓人更具創造力、更滿足，並在生活中獲得成功。」"',
    '"values"': '"價值觀"',
    '"\\"The three values of the Triad of Inner Strength are Strive For Unity, Trust Thy Brother and Worthiness Precedes Reward.\\""': '"「內在力量三位一體的三個價值觀是：為團結而奮鬥、信任你的兄弟，以及配得才有回報。」"',
    '"Unity"': '"團結"',
    '"Trust"': '"信任"',
    '"Worthiness"': '"配得"',
    '"\\"When we say Strive For Unity, it is simply our way of expressing how the people of Britannia should all cooperate and work together. A worthwhile sentiment, I am certain thou wouldst concur.\\""': '"「當我們說為團結而奮鬥時，這只是我們表達 Britannia 人民應該合作並共同努力的方式。這是一種有價值的理念，我確信你會同意的。」"',
    '"\\"What The Fellowship means by this is that people are all the same and the world is, generally speaking, a supportive, nurturing place. The trust we place in each other is like the pinions that hold our society together. Quite true, wouldst thou not say?\\""': '"「兄弟會對此的意思是，人都是一樣的，而世界，整體來說，是一個支持和孕育的地方。我們對彼此的信任就像是維繫我們社會的齒輪。很真實，難道你不同意嗎？」"',
    '"\\"Allow me to explain the meaning of Worthiness Precedes Reward. Each one of us seeks something which we desire from life and we must strive to be worthy of that which we seek. It would be difficult for thee to disagree I am quite sure.\\""': '"「請允許我解釋一下『配得才有回報』的含義。我們每個人都在生活中尋求我們渴望的東西，而我們必須努力讓自己配得上我們所尋求的東西。我很確定你很難反對這一點。」"',
    '"\\"Ah, my good colleagues Elizabeth and Abraham were just here. They left this morning for Minoc on Fellowship business. They deal with the distribution and collection of funds.\\""': '"「啊，我的好同事 Elizabeth 和 Abraham 剛才還在這裡。他們今早為了兄弟會的公務前往 Minoc 了。他們負責資金的分配和募集。」"',
    '"\\"I have not seen my colleagues since they were last here. They are busy folk.\\""': '"「自從他們上次來過之後，我就沒見過我的同事們了。他們是大忙人。」"',
    '"Batlin smiles and shakes his head. \\"Thou art not having much luck tracking them down, art thou? They were here, having done some work in Jhelom, but now they have gone to Vesper to see about starting a branch there.\\""': '"Batlin 笑了笑並搖頭。「你追蹤他們沒什麼運氣，對吧？他們來過這裡，在 Jhelom 做了一些工作，但現在他們去了 Vesper ，看看能不能在那裡設立分會。」"',
    '"\\"But thou art already a member, Avatar! One can only join once!\\""': '"「但你已經是成員了，聖者！一個人只能加入一次！」"',
    '"\\"Thou hast not completed thy tasks. Remember that Worthiness Precedes Reward. Once thou hast completed the missions, thou mayest join.\\""': '"「你還沒完成你的任務。記住，配得才有回報。一旦你完成了這些任務，你就可以加入。」"',
    '"\\"Ah! I do hope thine hands are not too full to take the package.\\""': '"「啊！我真希望你的手沒有滿到拿不下這個包裹。」"',
    '"\\"Excellent! Here it is. Thou must now be on thy way!\\"*"': '"「太好了！這就交給你了。你現在必須上路了！」*"',
    '"\\"Avatar! I am tired of this! Please make room in thine inventory for the package!\\"*"': '"「聖者！我厭倦了！請在你的物品欄騰出空間來放包裹！」*"',
    '"\\"Congratulations, Avatar, and our thanks to thee for successfully delivering our package to Elynor of Minoc. Now we have another task at hand before thou canst join The Fellowship. Because thou didst deliver the package thou hast proven thyself worthy of performing another mission.\\""': '"「恭喜，聖者，我們感謝你成功地將包裹送到 Minoc 的 Elynor 手中。現在，在你加入兄弟會之前，我們還有另一項任務要交給你。因為你成功送達了包裹，證明了你配得執行另一項任務。」"',
    '"mission"': '"任務"',
    '"\\"Avatar, didst thou deliver the package to Elynor of Minoc?\\""': '"「聖者，你把包裹交給 Minoc 的 Elynor 了嗎？」"',
    '"\\"Didst thou open the package?\\""': '"「你打開包裹了嗎？」"',
    '"\\"Thou knew that thou wast instructed not to open it. We put trust in thee to carry out our instructions to the letter and that trust was broken.\\""': '"「你知道你被指示不能打開它。我們信任你會嚴格遵守指示，但這份信任被打破了。」"',
    '"\\"That is not what Elynor of Minoc tells us. We put trust in thee to carry out our instructions to the letter and that trust was broken."': '"「Minoc 的 Elynor 可不是這麼跟我們說的。我們信任你會嚴格遵守指示，但這份信任被打破了。"',
    '"\\"I understand that the contents of the package were missing as well, and this is very serious indeed!"': '"「我了解到包裹裡的內容物也不見了，這確實非常嚴重！"',
    '"\\"I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\\""': '"「恐怕如果你要真正開始與兄弟會同行，你必須為我們執行一項任務作為信任的考驗。」"',
    '"Batlin\'s eyes open wide in surprise."': '"Batlin 驚訝地睜大了眼睛。"',
    '"\\"What has happened? Hast thou lost the package?\\""': '"「發生了什麼事？你把包裹弄丟了嗎？」"',
    '"\\"Tsk. Tsk. Tsk. That is most unfortunate. We put trust in thee to deliver the package and that trust was broken. I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\\""': '"「嘖，嘖，嘖。這太不幸了。我們信任你能送達包裹，但這份信任被打破了。恐怕如果你要真正開始與兄弟會同行，你必須為我們執行一項任務作為信任的考驗。」"',
    '"\\"Please deliver our package, Avatar. We have more business to discuss once thou art finished.\\"*"': '"「請送達我們的包裹，聖者。等你完成了，我們還有更多事要談。」*"',
    '"\\"Thou shalt visit the dungeon of Destard, which is in the mountains just west of Trinsic. Do not worry, it is completely deserted. There thou shalt find a chest of Fellowship funds which was hidden for safekeeping just a few days ago. Thou wilt know the chest because it will contain not only gold but two Fellowship medallions. The site is also most likely marked with a Fellowship staff. Bring these funds back to us without losing a single coin and thou wilt have successfully completed thy mission. No need to bring the chest, just the gold. Now, thou must be on thy way!\\"*"': '"「你要去 Destard 地城，它就在 Trinsic 西邊的山裡。別擔心，那裡完全荒廢了。在那裡你會找到一個裝有兄弟會資金的箱子，那是幾天前為了安全起見而藏起來的。你會認出這個箱子，因為裡面不僅有金幣，還有兩個兄弟會徽章。那個地點也很可能標有兄弟會的法杖。把這些資金帶回來給我們，一塊金幣都不能少，你就能成功完成你的任務。不用把箱子帶回來，只要帶金幣就好。現在，你該上路了！」*"',
    '"\\"Ah yes, thou hast returned from Dungeon Destard! But wait! I do not see the Fellowship funds that thou wast to bring back! What has happened?!\\""': '"「啊對，你從 Destard 地城回來了！等等！我沒看到你要帶回來的兄弟會資金！發生了什麼事？！」"',
    '"a highwayman"': '"攔路強盜"',
    '"monsters"': '"怪物"',
    '"pirates"': '"海盜"',
    '"ship sunk"': '"船沉了"',
    '"\\"Why, thy tale is outlandish! I refuse to believe it!\\" Batlin sniffs in irritation."': '"「哎呀，你的故事太荒誕了！我拒絕相信！」 Batlin 惱怒地嗤之以鼻。"',
    '"\\"Monsters! There are monsters lurking in dungeon Destard?! Well then, I do apologize for thine inconvenience.\\""': '"「怪物！ Destard 地城裡潛伏著怪物？！好吧，我對你遭遇的不便感到抱歉。」"',
    '"\\"Surely thou canst do better than that! If thou simply dost not wish to answer my question why dost thou not say so?\\""': '"「你肯定能編出更好的理由！如果你只是不想回答我的問題，你為什麼直說？」"',
    '"Batlin slowly rolls his eyes. \\"Thou ought to have been a bard, thou dost regale me with such stories!\\""': '"Batlin 慢慢地翻了個白眼。「你應該去當吟遊詩人，你總是拿這種故事來娛樂我！」"',
    '"\\"Allow me to present thee with thy Fellowship medallion.\\" Batlin gives you the medallion. \\"Please -- wear the medallion at all times. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\\""': '"「容我為你獻上你的兄弟會徽章。」 Batlin 把徽章交給你。「請——隨時佩戴徽章。立刻把它戴到你的脖子上！喔，還有……歡迎加入兄弟會，聖者。」"',
    '"\\"Thou cannot receive thy Fellowship medallion. Thou art too encumbered!\\"*"': '"「你無法接收兄弟會徽章。你負重太多了！」*"',
    '"\\"While thou art here, please feel free to enjoy an apple. The finest in all of Britannia, I am certain thou wilt find. They are provided to The Fellowship by the Royal Orchards.\\""': '"「既然你來了，請隨意享用蘋果。我確信你會發現這是全 Britannia 最棒的。它們是皇家果園提供給兄弟會的。」"',
    '"\\"Once a person has walked with The Fellowship long enough and applied the Triad of Inner Strength to his life, he has cleared his mind of all conflicting, counterproductive thoughts to the point where he may actually hear his internal voice of reason. This voice of reason is the core of thine inner mind which guides thee through pure instinct, wisdom and irreproachable logic. Once one starts to listen to it and follow its guidance, one has achieved the height of enlightenment. Perhaps thou shalt hear it one day.\\""': '"「一旦一個人與兄弟會同行夠久，並將內在力量三位一體應用於生活，他就能清除大腦中所有衝突、起反效果的思想，達到可以實際聽到內無理智聲音的程度。這個理智的聲音是你內心的核心，透過純粹的本能、智慧和無可挑剔的邏輯來引導你。一旦人開始傾聽它並跟隨它的引導，人就達到了啟迪的最高境界。也許有一天你也能聽到它。」"',
    '"\\"Only active or potential Fellowship members are privy to the concept of \'the voice\'. I can tell thee more when thou dost take the Fellowship test.\\""': '"「只有現任或潛在的兄弟會成員才能了解『聲音』的概念。當你參加兄弟會考驗時，我可以告訴你更多。」"',
    '"test"': '"考驗"',
    '"\\"Oh, art thou ready to join The Fellowship?\\""': '"「噢，你準備好加入兄弟會了嗎？」"',
    '"\\"Until thou art ready to join, I cannot tell thee any more about the test.\\""': '"「在你準備好加入之前，我不能告訴你更多關於考驗的事。」"',
    '"\\"It is a retreat from the pressures and distractions of everyday life where new members of The Fellowship may go and study the philosophies of The Fellowship. It is located on an island east of Serpent\'s Hold.\\""': '"「那裡是個遠離日常壓力與煩擾的靜修處，兄弟會的新成員可以去那裡學習兄弟會的理念。它位於巨蛇要塞 (Serpent\'s Hold) 東邊的一座島上。」"',
    '"\\"Until we meet again, Avatar.\\"*"': '"「後會有期，聖者。」*"'
}

all_trans = {
    '041A': trans_041A
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
