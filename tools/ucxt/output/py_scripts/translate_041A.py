import re
import shutil

# Copy original file to reset
shutil.copyfile(r'd:\git\exult-master\tools\ucxt\output\es_scripts\041A.es', r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041A.es')

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041A.es', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # UI Answers
    '"spiritual"': '"精神上的"',
    '"sanguine cognition"': '"樂觀認知"',
    '"Triad"': '"三原則"',
    '"virtues"': '"美德"',
    '"values"': '"價值觀"',
    '"Unity"': '"團結"',
    '"Trust"': '"信任"',
    '"Worthiness"': '"價值"',
    '"join"': '"加入"',
    '"mission"': '"任務"',
    '"a highwayman"': '"攔路強盜"',
    '"monsters"': '"怪物"',
    '"pirates"': '"海盜"',
    '"ship sunk"': '"船沉了"',
    '"test"': '"測試"',

    # Dialogues
    '"Batlin\'s eyes narrow to red slits as he peers practically through you."':
    '"Batlin 雙眼瞇成紅色的細縫，目光彷彿要將你看穿。"',
    
    '"\\"Thou hast the Cube! Thou cannot use it against -me-!\\""':
    '"「你有立方體（Cube）！你不能用它來對付 -我- ！」"',
    
    '"With that, Batlin turns with a flourish, and vanishes before your eyes!*"':
    '"說完， Batlin 猛然轉身，在你的眼前消失了！*"',
    
    '"Batlin looks at you and his gaze returns to the Armageddon winter storm. \\"Many years ago, Avatar, I went to Skara Brae, the ghost city. The way the world is now reminds me of that dead place. In Skara Brae I had a spiritual experience so profound that I have never spoken of to another soul. I would like to share that experience with thee now, Avatar."':
    '"Batlin 看著你，他的目光又回到了末日（Armageddon）的冬季風暴中。「多年前，聖者，我去了幽靈之城 Skara Brae 。現在世界的樣子讓我想起了那個死寂的地方。在 Skara Brae ，我有過一次非常深刻的精神體驗，深刻到我從未對任何人提起過。我現在想與你分享那個體驗，聖者。"',
    
    '"\\"There at Skara Brae I saw a man who was called The Tortured One. I asked this dead man, pray tell, what is the answer to the question of Life and Death? He gave me no reply, and I asked him again. I beseeched him to impart some small parcel of wisdom upon me. What is the answer to the question of Life and Death?! He said nothing, but in his eyes... In his eyes I could see, Avatar, that he could not answer me for there was no answer to give. No answers to the question of Life and Death! It was then I understood. No meanings! No virtues! No values!!!... I commend thee, Avatar, for reaching that same liberating illumination!\\"*”':
    '"「在那裡，在 Skara Brae ，我看到一個被稱為『受折磨者（The Tortured One）』的人。我問這個死人，請告訴我，生與死的問題的答案是什麼？他沒有回答我，我又問了他一次。我懇求他傳授我一些微小的智慧。生與死的問題的答案是什麼？！他什麼也沒說，但在他的眼中... 在他的眼中，我能看到，聖者，他無法回答我，因為根本沒有答案可以給。沒有生與死問題的答案！就在那時，我明白了。沒有意義！沒有美德！沒有價值觀！！！...我讚賞你，聖者，因為你達到了同樣令人解脫的啟蒙！」*"',
    
    '"\\"There at Skara Brae I saw a man who was called The Tortured One. I asked this dead man, pray tell, what is the answer to the question of Life and Death? He gave me no reply, and I asked him again. I beseeched him to impart some small parcel of wisdom upon me. What is the answer to the question of Life and Death?! He said nothing, but in his eyes... In his eyes I could see, Avatar, that he could not answer me for there was no answer to give. No answers to the question of Life and Death! It was then I understood. No meanings! No virtues! No values!!!... I commend thee, Avatar, for reaching that same liberating illumination!\\"*':
    '「在那裡，在 Skara Brae ，我看到一個被稱為『受折磨者（The Tortured One）』的人。我問這個死人，請告訴我，生與死的問題的答案是什麼？他沒有回答我，我又問了他一次。我懇求他傳授我一些微小的智慧。生與死的問題的答案是什麼？！他什麼也沒說，但在他的眼中... 在他的眼中，我能看到，聖者，他無法回答我，因為根本沒有答案可以給。沒有生與死問題的答案！就在那時，我明白了。沒有意義！沒有美德！沒有價值觀！！！...我讚賞你，聖者，因為你達到了同樣令人解脫的啟蒙！」*',
    
    '"\\"Art thou ready to answer questions from the Book of Fellowship?\\""':
    '"「你準備好回答《兄弟會之書》裡的問題了嗎？」"',
    
    '"\\"Excellent, Avatar!\\""':
    '"「太棒了，聖者！」"',
    
    '"Fighting a tremble of hesitation you take a long deep drink from the goblet. Batlin steps up to you. \\"May the news spread far and wide that our newest member is none other than the Avatar!\\""':
    '"你壓抑著猶豫的顫抖，從高腳杯中深深地喝了一大口。 Batlin 走向你。「願這個消息傳遍四方，我們最新的成員正是聖者！」"',
    
    '"The other Fellowship members cheer with pleasure."':
    '"其他的兄弟會成員高興地歡呼起來。"',
    
    '"\\"Very good, Avatar.\\""':
    '"「很好，聖者。」"',
    
    '"\\"Allow me to present thee with thy Fellowship medallion.\\" Batlin gives you the medallion. \\"Please -- wear thy medallion at all times for it shall be a symbol to all who see it that thou dost walk with the Fellowship. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\\"*”':
    '"「請容我為你獻上你的兄弟會徽章。」 Batlin 將徽章交給你。「請——隨時戴著你的徽章，因為它將向所有看到它的人象徵著你與兄弟會同行。立刻把它戴在脖子上吧！喔，還有... 歡迎加入兄弟會，聖者。」*"',
    
    '"\\"Allow me to present thee with thy Fellowship medallion.\\" Batlin gives you the medallion. \\"Please -- wear thy medallion at all times for it shall be a symbol to all who see it that thou dost walk with the Fellowship. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\\"*':
    '「請容我為你獻上你的兄弟會徽章。」 Batlin 將徽章交給你。「請——隨時戴著你的徽章，因為它將向所有看到它的人象徵著你與兄弟會同行。立刻把它戴在脖子上吧！喔，還有... 歡迎加入兄弟會，聖者。」*',
    
    '"\\"Thou art too encumbered to receive thy Fellowship medallion. Thou must lighten thy load.\\"*”':
    '"「你的負載太重了，無法接受兄弟會徽章。你必須減輕你的負擔。」*"',
    
    '"\\"Thou art too encumbered to receive thy Fellowship medallion. Thou must lighten thy load.\\"*':
    '「你的負載太重了，無法接受兄弟會徽章。你必須減輕你的負擔。」*',
    
    '"\\"My dear Avatar. Thou must realize that thou must know everything there is to know about The Fellowship before I can induct thee. Please study thy Book of Fellowship and return to me."':
    '"「我親愛的聖者。你必須明白，在我引導你入會之前，你必須了解關於兄弟會的所有知識。請研讀你的《兄弟會之書》然後再來找我。"',
    
    '"Your mind seems unclear. I would not be surprised if thou dost not understand\\tanother soul with whom thou dost speak.\\""':
    '"你的思緒似乎不太清晰。如果你無法理解\\t與你交談的另一個靈魂，我也不會感到驚訝。」"',
    
    '"\\"Come back when thou art ready.\\"*”':
    '"「準備好了再來吧。」*"',
    
    '"\\"Come back when thou art ready.\\"*':
    '「準備好了再來吧。」*',
    
    '"\\"The Fellowship advances the philosophy of sanguine cognition, a way to apply a positive order of thought to one\'s life through what is called the Triad of Inner Strength.\\""':
    '"「兄弟會推廣『樂觀認知（sanguine cognition）』的哲學，這是一種透過所謂的『內在力量三原則（Triad of Inner Strength）』，將積極的思維秩序應用於個人生活的方式。」"',
    
    '"\\"We strive to avoid the mistakes made by mystics and sages since the dawn of time. They apply the standards of the past, such as the virtues, for example, to qualify the present, and thus they do not perceive it correctly. We seek to examine our present lives each on our own terms and see the world the way it is.\\""':
    '"「我們努力避免自古以來神秘主義者和賢哲所犯的錯誤。他們將過去的標準（例如美德）應用於衡量現在，因此他們無法正確地感知現在。我們尋求以我們自己的方式來審視我們現在的生活，並看清世界本來的面目。」"',
    
    '"\\"They are perfectly adequate for those who feel that they still need them for whatever reason. But no one, not even thyself, thou must admit, Avatar, can fulfill them perfectly. Therefore they are a philosophy that is ultimately based upon failure. We have never claimed that our teachings are a substitute for the virtues. However, ours is a belief that is based upon success, not failure.\\""':
    '"「對於那些出於某種原因覺得自己仍然需要它們的人來說，它們非常合適。但沒有人，甚至連你自己，聖者，你也必須承認，沒有人能完美地實踐它們。因此，它們最終是一種建立在失敗之上的哲學。我們從未聲稱我們的教義可以替代美德。然而，我們的信仰是建立在成功而非失敗之上的。」"',
    
    '"\\"The Triad of Inner Strength is simply three basic values that, when applied in unison, enable one to be more creative, satisfied and successful in life.\\""':
    '"「『內在力量三原則』簡單來說就是三個基本的價值觀，當它們被統一起來應用時，就能使一個人在生活中更具創造力、更滿足、更成功。」"',
    
    '"\\"The three values of the Triad of Inner Strength are Strive For Unity, Trust Thy Brother and Worthiness Precedes Reward.\\""':
    '"「內在力量三原則的三個價值觀是：『追求團結（Strive For Unity）』、『信任弟兄（Trust Thy Brother）』和『價值先於回報（Worthiness Precedes Reward）』。」"',
    
    '"\\"When we say Strive For Unity, it is simply our way of expressing how the people of Britannia should all cooperate and work together. A worthwhile sentiment, I am certain thou wouldst concur.\\""':
    '"「當我們說『追求團結』時，這只是我們表達 Britannia 人民應該如何合作與共同努力的方式。這是一種非常有價值的觀念，我相信你也會同意。」"',
    
    '"\\"What The Fellowship means by this is that people are all the same and the world is, generally speaking, a supportive, nurturing place. The trust we place in each other is like the pinions that hold our society together. Quite true, wouldst thou not say?\\""':
    '"「兄弟會的意思是，人人都是一樣的，而世界大體上是一個支持與孕育生命的地方。我們對彼此的信任就像是將我們社會維繫在一起的樞紐。相當真實，難道你不同意嗎？」"',
    
    '"\\"Allow me to explain the meaning of Worthiness Precedes Reward. Each one of us seeks something which we desire from life and we must strive to be worthy of that which we seek. It would be difficult for thee to disagree I am quite sure.\\""':
    '"「請允許我解釋『價值先於回報』的含義。我們每個人都在尋求我們在生活中所渴望的東西，而我們必須努力讓自己配得上我們所追求的東西。我很確定你很難反對這一點。」"',
    
    '"\\"Ah, my good colleagues Elizabeth and Abraham were just here. They left this morning for Minoc on Fellowship business. They deal with the distribution and collection of funds.\\""':
    '"「啊，我的好同事 Elizabeth 和 Abraham 剛才還在這裡。他們今天早上為兄弟會的事務前往 Minoc 了。他們負責資金的分配和收集。」"',
    
    '"\\"I have not seen my colleagues since they were last here. They are busy folk.\\""':
    '"「自從他們上次來過之後，我就沒見過我的同事們了。他們都是大忙人。」"',
    
    '"Batlin smiles and shakes his head. \\"Thou art not having much luck tracking them down, art thou? They were here, having done some work in Jhelom, but now they have gone to Vesper to see about starting a branch there.\\""':
    '"Batlin 笑了笑，搖了搖頭。「你追蹤他們的運氣不太好，是吧？他們來過這裡，在 Jhelom 處理了一些工作，但現在他們已經去了 Vesper ，看看能不能在那裡成立分會。」"',
    
    '"\\"But thou art already a member, Avatar! One can only join once!\\""':
    '"「但你已經是會員了，聖者！一個人只能加入一次！」"',
    
    '"\\"Thou hast not completed thy tasks. Remember that Worthiness Precedes Reward. Once thou hast completed the missions, thou mayest join.\\""':
    '"「你還沒完成你的任務。記住『價值先於回報』。一旦你完成了任務，你就可以加入。」"',
    
    '"\\"Ah! I do hope thine hands are not too full to take the package.\\""':
    '"「啊！我真希望你的雙手沒有滿到拿不下這個包裹。」"',
    
    '"\\"Excellent! Here it is. Thou must now be on thy way!\\"*”':
    '"「太棒了！這就是了。你現在必須上路了！」*"',
    
    '"\\"Excellent! Here it is. Thou must now be on thy way!\\"*':
    '「太棒了！這就是了。你現在必須上路了！」*',
    
    '"\\"Avatar! I am tired of this! Please make room in thine inventory for the package!\\"*”':
    '"「聖者！我對此感到厭煩了！請在你的物品欄中騰出空間來裝包裹！」*"',
    
    '"\\"Avatar! I am tired of this! Please make room in thine inventory for the package!\\"*':
    '「聖者！我對此感到厭煩了！請在你的物品欄中騰出空間來裝包裹！」*',
    
    '"\\"Congratulations, Avatar, and our thanks to thee for successfully delivering our package to Elynor of Minoc. Now we have another task at hand before thou canst join The Fellowship. Because thou didst deliver the package thou hast proven thyself worthy of performing another mission.\\""':
    '"「恭喜，聖者，我們感謝你成功地將我們的包裹送交給 Minoc 的 Elynor 。現在，在你加入兄弟會之前，我們還有另一個任務要處理。因為你送達了包裹，你已經證明自己有資格執行另一個任務。」"',
    
    '"\\"Avatar, didst thou deliver the package to Elynor of Minoc?\\""':
    '"「聖者，你有把包裹送交給 Minoc 的 Elynor 嗎？」"',
    
    '"\\"Didst thou open the package?\\""':
    '"「你打開了包裹嗎？」"',
    
    '"\\"Thou knew that thou wast instructed not to open it. We put trust in thee to carry out our instructions to the letter and that trust was broken.\\""':
    '"「你明知道我們指示過你不要打開它。我們信任你能一字不差地執行我們的指示，但這份信任被打破了。」"',
    
    '"\\"That is not what Elynor of Minoc tells us. We put trust in thee to carry out our instructions to the letter and that trust was broken."':
    '"「Minoc 的 Elynor 可不是這麼告訴我們的。我們信任你能一字不差地執行我們的指示，但這份信任被打破了。"',
    
    '"\\"I understand that the contents of the package were missing as well, and this is very serious indeed!"':
    '"「據我了解，包裹裡的內容物也不見了，這確實非常嚴重！"',
    
    '"\\"I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\\""':
    '"「恐怕你必須為我們執行一項任務作為信任的測試，這樣你才能開始真正與兄弟會同行。」"',
    
    '"Batlin\'s eyes open wide in surprise."':
    '"Batlin 驚訝地睜大了眼睛。"',
    
    '"\\"What has happened? Hast thou lost the package?\\""':
    '"「發生了什麼事？你把包裹弄丟了嗎？」"',
    
    '"\\"Tsk. Tsk. Tsk. That is most unfortunate. We put trust in thee to deliver the package and that trust was broken. I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\\""':
    '"「嘖。嘖。嘖。這真是不幸。我們信任你能送達包裹，但這份信任被打破了。恐怕你必須為我們執行一項任務作為信任的測試，這樣你才能開始真正與兄弟會同行。」"',
    
    '"\\"Please deliver our package, Avatar. We have more business to discuss once thou art finished.\\"*”':
    '"「請去送我們的包裹，聖者。等你完成後，我們還有更多事情要談。」*"',
    
    '"\\"Please deliver our package, Avatar. We have more business to discuss once thou art finished.\\"*':
    '「請去送我們的包裹，聖者。等你完成後，我們還有更多事情要談。」*',
    
    '"\\"Thou shalt visit the dungeon of Destard, which is in the mountains just west of Trinsic. Do not worry, it is completely deserted. There thou shalt find a chest of Fellowship funds which was hidden for safekeeping just a few days ago. Thou wilt know the chest because it will contain not only gold but two Fellowship medallions. The site is also most likely marked with a Fellowship staff. Bring these funds back to us without losing a single coin and thou wilt have successfully completed thy mission. No need to bring the chest, just the gold. Now, thou must be on thy way!\\"*”':
    '"「你將前往 Destard 地城，它位於 Trinsic 以西的群山中。別擔心，那裡已經完全廢棄了。在那裡，你會找到一個裝有兄弟會資金的箱子，這是幾天前為了安全起見藏起來的。你會認出這個箱子，因為它不僅裝有黃金，還有兩枚兄弟會徽章。那個地點也很可能標有兄弟會的法杖。將這些資金帶回給我們，不要遺失任何一枚硬幣，你將成功完成你的任務。不需要帶回箱子，只要帶回黃金。現在，你必須上路了！」*"',
    
    '"\\"Thou shalt visit the dungeon of Destard, which is in the mountains just west of Trinsic. Do not worry, it is completely deserted. There thou shalt find a chest of Fellowship funds which was hidden for safekeeping just a few days ago. Thou wilt know the chest because it will contain not only gold but two Fellowship medallions. The site is also most likely marked with a Fellowship staff. Bring these funds back to us without losing a single coin and thou wilt have successfully completed thy mission. No need to bring the chest, just the gold. Now, thou must be on thy way!\\"*':
    '「你將前往 Destard 地城，它位於 Trinsic 以西的群山中。別擔心，那裡已經完全廢棄了。在那裡，你會找到一個裝有兄弟會資金的箱子，這是幾天前為了安全起見藏起來的。你會認出這個箱子，因為它不僅裝有黃金，還有兩枚兄弟會徽章。那個地點也很可能標有兄弟會的法杖。將這些資金帶回給我們，不要遺失任何一枚硬幣，你將成功完成你的任務。不需要帶回箱子，只要帶回黃金。現在，你必須上路了！」*',
    
    '"\\"Ah yes, thou hast returned from Dungeon Destard! But wait! I do not see the Fellowship funds that thou wast to bring back! What has happened?!\\""':
    '"「啊，是的，你從 Destard 地城回來了！但等等！我沒有看到你要帶回來的兄弟會資金！發生了什麼事？！」"',
    
    '"\\"Why, thy tale is outlandish! I refuse to believe it!\\" Batlin sniffs in irritation."':
    '"「哎呀，你的故事太離譜了！我拒絕相信！」 Batlin 惱火地嗤之以鼻。"',
    
    '"\\"Monsters! There are monsters lurking in dungeon Destard?! Well then, I do apologize for thine inconvenience.\\""':
    '"「怪物！ Destard 地城裡潛伏著怪物？！好吧，那我為你的不便道歉。」"',
    
    '"\\"Surely thou canst do better than that! If thou simply dost not wish to answer my question why dost thou not say so?\\""':
    '"「你肯定能找到更好的藉口！如果你只是不想回答我的問題，你為什麼不直說呢？」"',
    
    '"Batlin slowly rolls his eyes. \\"Thou ought to have been a bard, thou dost regale me with such stories!\\""':
    '"Batlin 緩慢地翻了個白眼。「你應該去當個吟遊詩人，你用這種故事來款待我！」"',
    
    '"\\"Allow me to present thee with thy Fellowship medallion.\\" Batlin gives you the medallion. \\"Please -- wear the medallion at all times. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\\""':
    '"「請容我為你獻上你的兄弟會徽章。」 Batlin 將徽章交給你。「請——隨時戴著這枚徽章。立刻把它戴在脖子上吧！喔，還有... 歡迎加入兄弟會，聖者。」"',
    
    '"\\"Thou cannot receive thy Fellowship medallion. Thou art too encumbered!\\"*”':
    '"「你無法接受你的兄弟會徽章。你的負載太重了！」*"',
    
    '"\\"Thou cannot receive thy Fellowship medallion. Thou art too encumbered!\\"*':
    '「你無法接受你的兄弟會徽章。你的負載太重了！」*',
    
    '"\\"While thou art here, please feel free to enjoy an apple. The finest in all of Britannia, I am certain thou wilt find. They are provided to The Fellowship by the Royal Orchards.\\""':
    '"「當你在這裡的時候，請隨意享用蘋果。我敢肯定你會發現這是全 Britannia 最好的蘋果。它們是由皇家果園提供給兄弟會的。」"',
    
    '"\\"Once a person has walked with The Fellowship long enough and applied the Triad of Inner Strength to his life, he has cleared his mind of all conflicting, counterproductive thoughts to the point where he may actually hear his internal voice of reason. This voice of reason is the core of thine inner mind which guides thee through pure instinct, wisdom and irreproachable logic. Once one starts to listen to it and follow its guidance, one has achieved the height of enlightenment. Perhaps thou shalt hear it one day.\\""':
    '"「一旦一個人與兄弟會同行夠久，並將『內在力量三原則』應用於他的生活，他就能清除腦海中所有衝突、適得其反的念頭，達到他能實際聽到他內在理智聲音的地步。這個理智的聲音是你內心的核心，透過純粹的本能、智慧和無懈可擊的邏輯引導著你。一旦有人開始聆聽它並遵循它的指引，他就達到了啟蒙的最高境界。也許有一天你也會聽到它。」"',
    
    '"\\"Only active or potential Fellowship members are privy to the concept of \'the voice\'. I can tell thee more when thou dost take the Fellowship test.\\""':
    '"「只有活躍的或潛在的兄弟會成員才能接觸到『聲音』的概念。當你接受兄弟會的測試時，我可以告訴你更多。」"',
    
    '"\\"Oh, art thou ready to join The Fellowship?\\""':
    '"「喔，你準備好加入兄弟會了嗎？」"',
    
    '"\\"Until thou art ready to join, I cannot tell thee any more about the test.\\""':
    '"「除非你準備好加入，否則我不能再告訴你關於測試的更多細節。」"',
    
    '"\\"It is a retreat from the pressures and distractions of everyday life where new members of The Fellowship may go and study the philosophies of The Fellowship. It is located on an island east of Serpent\'s Hold.\\""':
    '"「那是一個遠離日常生活壓力和干擾的靜修之處，兄弟會的新成員可以去那裡學習兄弟會的哲學。它位於 Serpent\'s Hold 東方的一個島上。」"',
    
    '"\\"Until we meet again, Avatar.\\"*”':
    '"「直到我們再次相會，聖者。」*"',

    '"\\"Until we meet again, Avatar.\\"*':
    '「直到我們再次相會，聖者。」*',
}

for eng, chi in replacements.items():
    content = content.replace(eng, chi)

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041A.es', 'w', encoding='utf-8') as f:
    f.write(content)
