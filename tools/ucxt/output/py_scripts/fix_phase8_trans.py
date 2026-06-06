import os

base_dir = r'es_scripts'
files = ['044A.es', '044B.es', '044C.es', '044D.es', '044E.es', '044F.es', '0450.es']

replacements = {
    # 044A.es
    r'\"Who art thou?\" Rudyom asks. \"Oh -- I remember.\"': r'「你是誰？」 Rudyom 問道。「喔——我想起來了。」',
    r'\"Hello again, Avatar!\" Rudyom says, beaming.': r'「又見面了，聖者！」 Rudyom 喜笑顏開地說。',
    r'\"That I know. My name is Rudyom.\"': r'「這我知道。我的名字叫 Rudyom。」',
    r'\"I am not sure anymore. I was a powerful mage at one time! Now nothing works. Magic is afoul! I suppose I could sell thee some reagents and spells if thou dost want. And mind the carpet -- it does not work!\"': r'「我也不確定了。我曾經是個強大的法師！現在什麼都不管用了。魔法出錯了！如果你需要的話，我想我可以賣你一些藥材和法術。還有，注意那張地毯——它壞掉了！」',
    r'\"I am a powerful mage! Magic is my milieu! I can sell thee spells or reagents.\"': r'「我是一位強大的法師！魔法是我的專長！我可以賣你法術或藥材。」',
    r'\"I do not understand what is wrong. My magic does not work so well anymore.\"': r'「我不明白哪裡出了問題。我的魔法不再那麼靈光了。」',
    r'\"The ether is flowing freely! Magic is with us once again!\"': r'「乙太正自由地流動！魔法再次與我們同在了！」',
    r'\"The big blue carpet. \'Tis a flying carpet. It does not work like it should.\"': r'「那張藍色大地毯。那是一張飛行魔毯。它沒有發揮應有的功用。」',
    r'\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent\'s Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\"': r'「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈附近。在失落之河周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」',
    r'\"Dost thou wish to buy some spells?\"': r'「你想買些法術嗎？」',
    r'\"Oh. Never mind, then.\"': r'「喔。那就算了。」',
    r'\"Dost thou wish to buy some reagents?\"': r'「你想買些藥材嗎？」',
    r'\"Do not mention that foul mineral\'s name to me! It hast caused me much frustration! Before my mind lost me I was conducting experiments with the infernal material. But now I cannot for the life of me remember what it was I was trying to do.\"': r'「別跟我提那個骯髒礦物的名字！它讓我感到非常挫折！在我喪失記憶之前，我正用那種地獄般的材料進行實驗。但現在我怎麼也想不起我當時想做什麼了。」',
    r'\"They are a nuisance, are they not? I do believe that blackrock is the solution to the problem. I wish my mind had not lost me, or I could continue my work...\"': r'「它們很煩人，不是嗎？我確實相信黑石是解決問題的方法。我希望我沒有失憶，這樣我就可以繼續我的工作了……」',
    r'\"I understand they are gone for good. Do not blame thyself, Avatar. The disaster will only pave the way for a new era in experimentation and discovery. I hope.\"': r'「我明白它們永遠消失了。別怪你自己，聖者。這場災難只會為實驗與發現的新時代鋪平道路。我希望如此。」',
    r'\"I wrote them all down in my notebook, which is somewhere around here. Thou art welcome to look at it. But stay away from that damned transmuter -- \'tis dangerous!\"': r'「我都把它們寫在我的筆記本裡了，就在這附近的某處。歡迎你隨便看。但遠離那個該死的轉換器——那很危險！」',
    r'\"As I recall, I wrote them all down in my notebook, which is somewhere around here. My memory fails me. Perhaps thou canst look at it.\"': r'「我記得，我都把它們寫在我的筆記本裡了，就在這附近的某處。我的記憶力衰退了。也許你可以看看它。」',
    r'\"Now I remember! \'Twas a wand! It took almost all my money to build it. I made a wand out of blackrock! Unfortunately, it never did quite what I expected it to do. It would only make blackrock explode. I used it on some pieces of blackrock that I had lying around. The resulting explosion destroyed my blackrock! I wanted to try it out on one of the moongates, but I forgot what I did with the wand.\"': r'「現在我想起來了！那是一根法杖！我幾乎花了所有的錢來打造它。我用黑石做了一根法杖！不幸的是，它從未達到我預期的效果。它只會讓黑石爆炸。我把它用在我手邊的一些黑石碎片上。結果爆炸把我的黑石炸毀了！我本來想在其中一個月之門上試試看，但我忘了我把法杖放哪了。」',
    r'\"I remember. I gave it to thee! I hope thou hast found a good use for it. It did me no good whatsoever!\"': r'「我想起來了。我把它給了你！我希望你能派上用場。這對我一點好處也沒有！」',
    r'\"Oh, no! Now I remember. I dropped it on the floor somewhere! Oh, my mind is going! Yes, thou art welcome to the thing. Take it if thou dost find it. It did me no good whatsoever!\"': r'「喔，不！現在我想起來了。我把它掉在地上某處了！喔，我的腦袋不中用了！是的，歡迎你拿走它。如果你找到就拿去吧。這對我一點好處也沒有！」',
    r'\"Good day!\"': r'「日安！」',
    r'\"I am surprised thy transmuter was able to cure thee, Avatar! Do be careful with it in the future!\"': r'「我很驚訝你的轉換器治好了你，聖者！以後使用時一定要小心！」',
    r'\"I used it to record mine experiments with blackrock and the blackrock transmuter.\"': r'「我用它來記錄我對黑石和黑石轉換器的實驗。」',
    r'\"\'Tis that wand-like thing. It was supposed to magnetize and magically transmute blackrock, but it doth not work correctly. Try pointing it at a piece of blackrock and thou wilt see what I mean. But do not stand too close! Thou art welcome to take it if thou dost want a piece of garbage!\"': r'「就是那個像法杖的東西。它本應該能磁化並神奇地轉換黑石，但它無法正常運作。試著把它指向一塊黑石，你就會明白我的意思。但別站得太近！如果你想要一件垃圾，歡迎你拿走！」',
    r'\"Leaving so soon? Deary me. I hope I remember thee if thou dost come back.\"*': r'「這麼快就走？哎呀。希望你回來時我還能認得你。」*',
    r'\"Goodbye, Avatar.\"*': r'「再見，聖者。」*',
    
    # 044B.es
    r'\"Thou art the Avatar?\" she says, seemingly not surprised by the fact.': r'「你就是聖者？」她說，似乎對這個事實並不驚訝。',
    r'\"It is an honor to meet thee. I have heard stories about thee from childhood. However, I thought thou wert a man!\"': r'「很榮幸能見到你。我從小就聽過關於你的故事。不過，我以為你是個男的！」',
    r'\"It is an honor to meet thee. I have heard stories about thee from childhood. However, somehow I thought thou wert taller.\"': r'「很榮幸能見到你。我從小就聽過關於你的故事。不過，不知為何我以為你更高大一些。」',
    r'\"My name is Nastassia.\"': r'「我的名字叫 Nastassia。」',
    r'\"I care for the Shrine here at Cove.\"': r'「我負責照料 Cove 這裡的神殿。」',
    r'\"This is the Shrine of Compassion.\"': r'「這是慈悲神殿。」',
    r'\"Yes, this is the Shrine of Compassion!\"': r'「是的，這是慈悲神殿！」',
    r'\"Do I care for all the shrines? I wish I could! But unfortunately I can barely take care of this one by myself. And I must do so in secret.\"': r'「我有照料所有的神殿嗎？我希望我可以！但不幸的是，光是照料這一座我就快忙不過來了。而且我必須偷偷地做。」',
    r'\"The Fellowship does not wish to see the Shrines maintained. Yet they do not tear them down, for that would bring the wrath of the people down upon them.\"': r'「兄弟會不希望看到神殿被維護。但他們也不敢將其拆除，因為那會招致人民的憤怒。」',
    r'\"When I first began to care for the shrine, I was harassed constantly by the townspeople. Someone was always stopping me on my way here from Cove or from Britain to discourage me from my activity.\"': r'「當我剛開始照料神殿時，就不斷受到鎮民的騷擾。總有人在我從 Cove 或 Britain 來這裡的路上攔住我，試圖勸阻我的行為。」',
    r'\"Finally I told Lord Heather about it, and he helped to put a stop to it. Now I merely get some odd looks from people, but no one hinders me.\"': r'「最後我把這件事告訴了 Lord Heather，他幫忙制止了這種情況。現在我只會收到一些異樣的眼光，但沒人會阻撓我了。」',
    r'\"As a child I was taught to believe in the ways of the Avatar. Even though these traditions seem to have been abandoned by everyone else in Britannia, I could not bear to see the Shrine of Compassion go to ruins.\"': r'「小時候我被教導要相信聖者之道。即使這些傳統似乎已被 Britannia 的其他所有人拋棄，我也無法忍受看著慈悲神殿淪為廢墟。」',
    r'\"For as long as I can remember I wanted to dedicate my life to the shrines. After my mother died I realized that I had to care for the Shrine of Compassion, as my mother had...\"': r'「從我記事起，我就想把一生奉獻給神殿。在我母親去世後，我意識到我必須像我母親一樣，照料慈悲神殿……」',
    r'\"And as her father had. My family has cared for this shrine for generations.\"': r'「就像她的父親一樣。我們家族世世代代都在照料這座神殿。」',
    r'\"Ariana died of a broken heart soon after I was born. My grandmother never told my mother about my grandfather. My mother just assumed that he was a bad man and had deserted Ariana. Perhaps he did.\"': r'「Ariana 在我出生後不久就因為心碎而死。我祖母從未向我母親提起過我祖父。我母親只是以為他是個壞人，並拋棄了 Ariana。也許他真的是。」',
    r'\"I have never seen my father. My mother said that he was a soldier who rode off on an important mission the day they were to be married. And she never saw him again.\"': r'「我從未見過我父親。我母親說他是個士兵，在他們準備結婚的那天騎著馬去執行一項重要任務。然後她就再也沒見過他了。」',
    r'\"He could still be alive out there, somewhere... but perhaps I am only being an idealistic fool. I wish I knew for sure.\"': r'「他可能還活在某處……但也許我只是個愛幻想的傻瓜。我希望能確定他的下落。」',
    r'\"I would like to know if my father is dead or alive. It would set my mind at ease.\"': r'「我想知道我父親是死是活。這能讓我安心。」',
    r'\"Canst thou please tell me what thou hast found out?\"': r'「你能告訴我你發現了什麼嗎？」',
    r'\"Oh, please return if thou dost learn anything. Do not leave me in suspense!\"': r'「喔，如果你得知任何消息，請務必回來告訴我。別讓我懸著一顆心！」',
    r'\"My mother was Nadia. She spent her entire life waiting for my father to return.\"': r'「我母親是 Nadia。她花了一生的時間等待我父親歸來。」',
    r'\"You may have known her grandmother. Her name was Ariana.\"': r'「你可能認識她的祖母。她名叫 Ariana。」',
    r'\"She was a very famous child in Yew. They say that the Avatar met her once. Sometimes I think I would like to live in Yew.\"': r'「她在 Yew 是個非常出名的孩子。他們說聖者曾經見過她。有時候我想我可能會想住在 Yew。」',
    r'\"A city of trees. \'Twould be nice.\"': r'「一座樹之城。那一定很美。」',
    r'\"Then it must be true... he is dead.\"': r'「那麼這一定是真的……他死了。」',
    r'\"All my life I have hoped against hope that somehow he was still alive. Perhaps he was imprisoned by evil beings, or lost far away, trying to make his way back to me and my mother...\"': r'「我一生都抱著一絲希望，希望他能活著。也許他被邪惡的生物囚禁，或是迷失在遙遠的地方，正努力想回到我和我母親身邊……」',
    r'\"To know that he has been dead all these years... Oh, Father, where art thou!\"': r'「知道他這些年來已經死了……喔，父親，你在哪裡！」',
    r'\"Please forgive my outburst. I feel a tremendous weight has been lifted from me, knowing the truth at last.\"': r'「請原諒我的失態。終於知道真相後，我感覺卸下了一個巨大的重擔。」',
    r'\"I feel closer to thee now, knowing that thou hast found my father\'s true resting place.\"': r'「知道你找到了我父親真正的安息之地，我現在覺得與你更親近了。」',
    r'\"I hope that I shall see thee again.\"': r'「希望我能再次見到你。」',
    r'\"Thou hast freed my spirit, and given me comfort. I do not think I can live without thee.\"': r'「你釋放了我的靈魂，給了我安慰。我想我已經無法沒有你了。」',
    r'\"I shall miss thee. Farewell.\"': r'「我會想念你的。再會。」',

    # 044C.es
    r'\"Nice to see thee again.\"': r'「很高興再次見到你。」',
    r'\"As thou knowest, my name is Rayburt.\"': r'「如你所知，我的名字叫 Rayburt。」',
    r'\"I was just resting from my journey. My wife, Pamela, runs the Inn here.\"': r'「我只是在旅途中稍作休息。我妻子 Pamela 在這裡經營旅店。」',
    r'\"And of course there is Regal. My dog.\"': r'「當然還有 Regal。我的狗。」',
    r'\"He\'s a very fine animal. My best friend! Except for my wife, naturally.\"': r'「牠是隻非常棒的動物。我最好的朋友！當然，除了我妻子之外。」',
    r'\"She treats me well. She loves to let me help out at the Inn.\"': r'「她對我很好。她很喜歡讓我在旅店裡幫忙。」',
    r'\"Farewell.\"': r'「再會。」',

    # 044D.es
    r'\"Good day to thee. Is there something thou dost need?\"': r'「日安。你有什麼需要嗎？」',
    r'\"Ah! Back to see me, eh? What can I do for thee?\"': r'「啊！又來找我了，是嗎？有什麼我可以為你效勞的嗎？」',
    r'\"I am Lord Heather.\"': r'「我是 Lord Heather。」',
    r'\"I am the Mayor of Cove.\"': r'「我是 Cove 的鎮長。」',
    r'\"Yes, Mayor of Cove! Canst thou believe it? In my younger days I never thought I would do anything important with my life, and now... Look at me! Lord Heather, Mayor of Cove! Ha!\"': r'「是的，Cove 鎮長！你敢相信嗎？在我年輕的時候，我從沒想過我這輩子能做什麼重要的事，而現在……看看我！Lord Heather，Cove 鎮長！哈！」',
    r'\"Yes, \'tis quite impressive, is it not? I have to do something while awaiting my impending death by assassination!\"': r'「是的，相當了不起，不是嗎？在等待我即將被暗殺的死期時，我總得做點什麼！」',
    r'\"I like to pretend to be Mayor. No one else has wanted the job in twenty years. They humor me here. I do not think that the people of Cove realize how sick I truly am.\"': r'「我喜歡假裝自己是鎮長。二十年來都沒人想要這份工作。他們在這裡只是在迎合我。我不認為 Cove 的鎮民意識到我病得有多重。」',
    r'\"Is that a dagger beneath thy tunic? Do not draw it! I yield! Take whatever thou dost want!\"': r'「你長袍底下藏著匕首嗎？別拔出來！我投降！你想要什麼就拿走吧！」',
    r'\"Take my money! Just do not kill me! What is my life worth to thee? Nothing! My life is not worth the blood thou wouldst spill taking it! Let me live, so that I might tell others to fear thy name!\"': r'「拿走我的錢！只要別殺我就好！我的命對你來說值多少？一文不值！我的命不值得你為了它而流血！讓我活下去，這樣我才能告訴別人要敬畏你的名字！」',
    r'\"Wait!\"': r'「等等！」',
    r'\"Thou art the Avatar! Please, strike me dead and release me from this torture I call a life! My existence is a mockery. A fraud!\"': r'「你是聖者！拜託，殺了我，讓我從這名為生活的折磨中解脫吧！我的存在就是個笑話。一場騙局！」',
    r'\"I am nothing. Nothing!\"': r'「我什麼都不是。什麼都不是！」',
    r'\"Thou hast been talking to my brother, hasn\'t thou? My own brother wishes to have me assassinated so that he can claim the family fortunes for himself. \'Tis true!\"': r'「你跟我兄弟談過話了，對吧？我親生兄弟想暗殺我，這樣他就能獨吞家族財產。這是真的！」',
    r'\"That looks like my handwriting. Someone must have forged this and now thou hast come to kill me so thou canst deliver it to Lord British! Help! Help!\"': r'「這看起來像我的筆跡。一定有人偽造了這個，現在你來殺我，這樣你就能把它交給 Lord British 了！救命！救命啊！」',
    r'\"Ah, the Tax bill. Why dost Miranda worry so over it? Lord British seems to have lost interest in any matters of state. Let me sign it for thee, and thou canst return it to the Great Council.\"': r'「啊，稅務法案。Miranda 為什麼這麼操心這個？Lord British 似乎對任何國家大事都失去興趣了。讓我為你簽名吧，然後你可以把它還給大議會。」',
    r'\"The answer is no! And no amount of threatening or pleading will change my mind! This bill will never pass, no matter what Miranda says.\"': r'「答案是不！無論你怎麼威脅或懇求都不會改變我的心意！這項法案永遠不會通過，不管 Miranda 怎麼說。」',
    r'\"I do believe we have exhausted our business, yes?\"': r'「我相信我們的事情已經談完了，是吧？」',
    r'\"Well, let\'s see... I am in love with Jaana, our healer.\tAnd she is in love with me, of course. Then there is Zinaida, who runs the Emerald. She has an interest in De Maria, our local bard. And vice versa. Rayburt, our trainer, is courting Pamela, the innkeeper.\"': r'「嗯，讓我想想……我愛上了我們的治療師 Jaana。當然，她也愛我。然後是經營翡翠酒館的 Zinaida。她對我們當地的吟遊詩人 De Maria 有好感。反之亦然。我們的訓練師 Rayburt 正在追求旅店老闆 Pamela。」',
    r'\"Sounds like bad theatre to me!\"': r'「這聽起來就像一齣糟糕的戲劇！」',
    r'\"Any wenches mine own age around here?\"*': r'「這附近有跟我同年紀的女孩嗎？」*',
    r'\"I see that thou art leaving Cove for a while, my dear?\"*': r'「親愛的，我看你要暫時離開 Cove 了？」*',
    r'\"Yes, milord. But I shall return. I promise thee.\"*': r'「是的，大人。但我會回來的。我向你保證。」*',
    r'\"I shall try not to worry about thee, but it will be difficult.\"*': r'「我會盡量不為你擔心，但這很難。」*',
    r'\"Do not worry. I shall be safe with the Avatar.\"*': r'「別擔心。我和聖者在一起會很安全的。」*',
    r'\"I do hope so.\" The Mayor embraces Jaana.*': r'「我希望如此。」鎮長擁抱了 Jaana。*',
    r'\"Except for Nastassia.\"': r'「除了 Nastassia。」',
    r'\"She is a lovely young woman who is always melancholy. De Maria can tell thee more about her. I suggest thou seekest him at the Emerald. \'Tis a sad but compelling tale.\"': r'「她是一位可愛的年輕女子，但總是憂鬱。De Maria 可以告訴你更多關於她的事。我建議你去翡翠酒館找他。那是一個悲傷但引人入勝的故事。」',
    r'\"I do hope thou canst help her. She needs \"': r'「我真的希望你能幫她。她需要」',
    r'\" to bring her out of her depression.\"': r'「將她從憂鬱中帶出來。」',
    r'\"\'Tis about time that the government did something about the awful stench coming from that lake! I shall be happy to sign thy bill of law! Take it back to the Great Council post haste!\" Lord Heather signs the bill and hands it back to you.': r'「政府早該對那座湖傳出的惡臭採取行動了！我很樂意簽署你的法案！快把它帶回大議會！」Lord Heather 簽署了法案並交還給你。',
    r'\"But thou dost not have a bill of law!\"': r'「但你沒有法案！」',
    r'\"I thought I already signed that bill!\"': r'「我以為我已經簽過那法案了！」',
    r'\"It has gotten so putrid that on hot summer days the stink is suffocating. I believe that the Britannian Mining Company in Minoc is the source of the problem. Mining waste is being deposited in the Lake. Thou shouldst be glad it is nearly winter!\"': r'「它變得如此腐臭，在炎熱的夏日裡，臭味令人窒息。我相信 Minoc 的不列顛尼亞礦業公司是問題的根源。採礦廢料被倒進了湖裡。你應該慶幸現在快冬天了！」',
    r'\"Do come and visit again, Avatar!\"*': r'「歡迎再次來訪，聖者！」*',
    
    # 044E.es
    r'\"Greetings, again!\" Pamela says.': r'「再次問候！」 Pamela 說。',
    r'\"I am Pamela!\"': r'「我是 Pamela！」',
    r'\"I am the Innkeeper at the Out\'n\'Inn.\"': r'「我是外宿旅店的老闆。」',
    r'\"If thou wouldst like a room, just say so!\"': r'「如果你需要房間，儘管說！」',
    r'\"Please come by if thou wouldst like to rest thy weary feet for the night!\"': r'「如果今晚想讓疲憊的雙腳休息一下，請過來吧！」',
    r'\"The room is quite inexpensive. Only 8 gold per person. Want one?\"': r'「房間相當便宜。每人只需 8 枚金幣。要一間嗎？」',
    r'\"Thou art carrying too much to take the room key!\"': r'「你帶太多東西了，拿不下房間鑰匙！」',
    r'\"Here is thy room key. It is good only until thou leavest.\"': r'「這是你的房間鑰匙。效期只到你退房為止。」',
    r'\"Thou dost not have enough gold, eh? Too bad.\"': r'「你沒有足夠的金幣，是嗎？真可惜。」',
    r'\"Another night, then.\"': r'「那麼，改天吧。」',
    r'\"Well... Cove is the city of Love and Passion, didst thou not know? Thou must be careful. If thou dost stay too long in Cove, thou wilt fall in love with someone! Mark my words!\"': r'「嗯……Cove 可是愛與熱情之城，你不知道嗎？你得小心點。如果你在 Cove 待太久，你會愛上某個人的！記住我的話！」',
    r'\"Oooh, he is such a wonderful man, dost thou not think? He is so intense and serious. Handsome, too! Oh, and\tI like Regal as well.\"': r'「喔，他真是個很棒的男人，你不覺得嗎？他既專注又認真。而且也很英俊！喔，還有我也很喜歡 Regal。」',
    r'\"As far as dogs go, he is handsome, too!\"': r'「就狗而言，牠也很英俊！」',
    r'\"See thee soon!\"*': r'「待會見！」*',
    
    # 044F.es
    r'\"Hello,\" Zinaida says.': r'「你好，」 Zinaida 說。',
    r'\"I am Zinaida,\" she says with a curtsey.': r'「我是 Zinaida，」她屈膝行禮說道。',
    r'\"I am the owner and manager of The Emerald.\"': r'「我是翡翠酒館的老闆兼經理。」',
    r'\"If I can help thee with food or drink, please say so. I have never had a dissatisfied customer.\"': r'「如果需要餐點或飲料，請告訴我。我從未有過不滿意的客人。」',
    r'\"Please come to the pub when it is open and I shall be happy to serve thee!\"': r'「請在酒館營業時過來，我很樂意為你服務！」',
    r'\"The Emerald is pleased to serve thee the finest cuisine this side of Britain. Thou mightest wish to try the special -- Silverleaf.\"': r'「翡翠酒館很高興能為你提供 Britain 這一帶最美味的佳餚。你也許會想嚐嚐我們的特餐——銀葉。」',
    r'She winks at you. \"Some say it is a powerful aphrodisiac... It is delicious, regardless. It comes from the root of an exotic tree growing somewhere in Britannia.\"': r'她對你眨了眨眼。「有人說它是一種強效的催情劑……不管怎樣，它非常美味。它來自生長在 Britannia 某處一種奇特樹木的根部。」',
    r'\"The Emerald serves only the best wine and ale. I cannot recommend the water, however. Thanks to Lock Lake.\"': r'「翡翠酒館只提供最好的葡萄酒和麥酒。不過，我不推薦這裡的水。這都拜洛克湖所賜。」',
    r'\"He is the light of my life. A finer man does not exist.\" She beams.': r'「他是我生命中的光。再也沒有比他更好的男人了。」她笑得合不攏嘴。',
    r'\"The stench has made our water taste terrible. That mining company must cease pouring their sewage into what was once a fine lake!\"': r'「那股惡臭讓我們的水變得很難喝。那家礦業公司必須停止把他們的污水倒進這個曾經美麗的湖泊裡！」',
    r'\"Come again soon!\"*': r'「歡迎下次再來！」*',
    
    # 0450.es
    r'\"I have sung about thee in many a song! And here thou art in the flesh! I recognized thee immediately.\" The man bows. \"Welcome, Avatar!\"': r'「我在許多歌曲中都歌頌過你！而你竟然活生生地出現在這裡！我立刻就認出你了。」男人鞠躬。「歡迎，聖者！」',
    r'\"Greetings again, Avatar!\" De Maria bows.': r'「再次問候，聖者！」 De Maria 鞠躬。',
    r'\"I am De Maria, the Bard.\"': r'「我是 De Maria，吟遊詩人。」',
    r'\"I spin tales and sing songs!\"': r'「我編織故事，也高唱歌曲！」',
    r'\"I also know a good deal about the folks in Cove.\"': r'「我對 Cove 的鎮民也瞭若指掌。」',
    r'\"What if I combine all three? Shall I sing a song which is a tale about the people of Cove?\"': r'「如果我把這三者結合起來呢？要我唱一首關於 Cove 鎮民故事的歌嗎？」',
    r'\"Very well, then!\"': r'「非常好！」',
    r'\"\'Tis thy choice... and thy mistake!\"': r'「這是你的選擇……而且是個錯誤的選擇！」',
    r'\"Ah, dear Nastassia. Wouldst thou like to hear her tale?\"': r'「啊，親愛的 Nastassia。你想聽聽她的故事嗎？」',
    r'\"Oh. I thought thou wert curious. Never mind then.\"': r'「喔。我以為你會好奇。那就算了。」',
    r'\"My love! My flower! Mine angel! The provider of the sweetest nectar my mouth has ever known! She is the light of my day! The notes of my songs! The flesh of my...\"~~': r'「我的愛！我的花朵！我的天使！她提供了我嘗過最甜美的甘露！她是我白晝的光芒！我歌曲的音符！我的肉體……」~~',
    r'\"Enough, my love. I think the Avatar dost know thy meaning!\"*': r'「夠了，親愛的。我想聖者已經明白你的意思了！」*',
    r'De Maria stops his reverie, sighs, and smiles at you. \"Thou dost apprehend my meaning...\"': r'De Maria 停止了他的幻想，嘆了口氣，對著你微笑。「你明白我的意思了……」',
    r'\"Do take care of thyself!\"*': r'「請多保重！」*'
}

for file in files:
    zh_path = os.path.join('zh_script/004', file.replace('.es', '_zh.es'))
    if os.path.exists(zh_path):
        with open(zh_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for eng, chi in replacements.items():
            content = content.replace(f'message("{eng}");', f'message("{chi}");')
            
        with open(zh_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Phase 8 strings properly replaced.")
