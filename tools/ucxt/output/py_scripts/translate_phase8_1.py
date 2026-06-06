import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
files = ['044A.es', '044B.es', '044C.es', '044D.es']

replacements = {
    # 044A.es - Rudyom
    "This elderly mage looks older and more senile than when you last saw him.": "這位年邁的法師看起來比你上次見到他時還要衰老且更加健忘。",
    "\"Who art thou?\" Rudyom asks. \"Oh -- I remember.\"": "「你是誰？」 Rudyom 問道。「喔——我想起來了。」",
    "\"Hello again, Avatar!\" Rudyom says, beaming.": "「又見面了，聖者！」 Rudyom 喜笑顏開地說。",
    "\"That I know. My name is Rudyom.\"": "「這我知道。我的名字叫 Rudyom。」",
    "\"I am not sure anymore. I was a powerful mage at one time! Now nothing works. Magic is afoul! I suppose I could sell thee some reagents and spells if thou dost want. And mind the carpet -- it does not work!\"": "「我也不確定了。我曾經是個強大的法師！現在什麼都不管用了。魔法出錯了！如果你需要的話，我想我可以賣你一些藥材和法術。還有，注意那張地毯——它壞掉了！」",
    "\"I am a powerful mage! Magic is my milieu! I can sell thee spells or reagents.\"": "「我是一位強大的法師！魔法是我的專長！我可以賣你法術或藥材。」",
    "\"I do not understand what is wrong. My magic does not work so well anymore.\"": "「我不明白哪裡出了問題。我的魔法不再那麼靈光了。」",
    "\"The ether is flowing freely! Magic is with us once again!\"": "「乙太正自由地流動！魔法再次與我們同在了！」",
    "\"The big blue carpet. 'Tis a flying carpet. It does not work like it should.\"": "「那張藍色大地毯。那是一張飛行魔毯。它沒有發揮應有的功用。」",
    "Rudyom looks around and scratches his head.": "Rudyom 四處張望並抓了抓頭。",
    "\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent's Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\"": "「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈（Serpent's Spine）附近。在失落之河（Lost River）周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」",
    "\"Dost thou wish to buy some spells?\"": "「你想買些法術嗎？」",
    "\"Oh. Never mind, then.\"": "「喔。那就算了。」",
    "\"Dost thou wish to buy some reagents?\"": "「你想買些藥材嗎？」",
    "\"Do not mention that foul mineral's name to me! It hast caused me much frustration! Before my mind lost me I was conducting experiments with the infernal material. But now I cannot for the life of me remember what it was I was trying to do.\"": "「別跟我提那個骯髒礦物的名字！它讓我感到非常挫折！在我喪失記憶之前，我正用那種地獄般的材料進行實驗。但現在我怎麼也想不起我當時想做什麼了。」",
    "\"They are a nuisance, are they not? I do believe that blackrock is the solution to the problem. I wish my mind had not lost me, or I could continue my work...\"": "「它們很煩人，不是嗎？我確實相信黑石是解決問題的方法。我希望我沒有失憶，這樣我就可以繼續我的工作了……」",
    "\"I understand they are gone for good. Do not blame thyself, Avatar. The disaster will only pave the way for a new era in experimentation and discovery. I hope.\"": "「我明白它們永遠消失了。別怪你自己，聖者。這場災難只會為實驗與發現的新時代鋪平道路。我希望如此。」",
    "\"I wrote them all down in my notebook, which is somewhere around here. Thou art welcome to look at it. But stay away from that damned transmuter -- 'tis dangerous!\"": "「我都把它們寫在我的筆記本裡了，就在這附近的某處。歡迎你隨便看。但遠離那個該死的轉換器（transmuter）——那很危險！」",
    "\"As I recall, I wrote them all down in my notebook, which is somewhere around here. My memory fails me. Perhaps thou canst look at it.\"": "「我記得，我都把它們寫在我的筆記本裡了，就在這附近的某處。我的記憶力衰退了。也許你可以看看它。」",
    "\"Now I remember! 'Twas a wand! It took almost all my money to build it. I made a wand out of blackrock! Unfortunately, it never did quite what I expected it to do. It would only make blackrock explode. I used it on some pieces of blackrock that I had lying around. The resulting explosion destroyed my blackrock! I wanted to try it out on one of the moongates, but I forgot what I did with the wand.\"": "「現在我想起來了！那是一根法杖！我幾乎花了所有的錢來打造它。我用黑石做了一根法杖！不幸的是，它從未達到我預期的效果。它只會讓黑石爆炸。我把它用在我手邊的一些黑石碎片上。結果爆炸把我的黑石炸毀了！我本來想在其中一個月之門上試試看，但我忘了我把法杖放哪了。」",
    "\"I remember. I gave it to thee! I hope thou hast found a good use for it. It did me no good whatsoever!\"": "「我想起來了。我把它給了你！我希望你能派上用場。這對我一點好處也沒有！」",
    "\"Oh, no! Now I remember. I dropped it on the floor somewhere! Oh, my mind is going! Yes, thou art welcome to the thing. Take it if thou dost find it. It did me no good whatsoever!\"": "「喔，不！現在我想起來了。我把它掉在地上某處了！喔，我的腦袋不中用了！是的，歡迎你拿走它。如果你找到就拿去吧。這對我一點好處也沒有！」",
    "\"Good day!\"": "「日安！」",
    "\"I am surprised thy transmuter was able to cure thee, Avatar! Do be careful with it in the future!\"": "「我很驚訝你的轉換器治好了你，聖者！以後使用時一定要小心！」",
    
    # 044B.es - Nastassia
    "This is an attractive young woman who seems sad.": "這是一位年輕迷人的女性，但神情似乎有些哀傷。",
    "Emotion immediately grips your heart to see such a beautiful young woman seem so sad.": "看到如此美麗的年輕女子顯得如此悲傷，你的心立刻揪了一下。",
    "She looks up as you introduce yourself.": "當你介紹自己時，她抬起了頭。",
    "Unexpectedly, Nastassia pulls your head down to hers and kisses you on the mouth.": "出乎意料地，Nastassia 把你的頭拉向她，親吻了你的嘴唇。",
    "You kiss Nastassia and she moans.": "你親吻了 Nastassia，她發出了輕聲呻吟。",
    "The two of you rush into each other's arms and your mouths meet. You had forgotten how good her lips felt against yours.": "你們衝進彼此的懷抱，雙唇交會。你都忘了她的雙唇貼著你的感覺有多好。",
    "You kiss Nastassia yet again. This time your bodies press together tightly, and you know this promises to be more than a fleeting fling with some tavern wench.": "你再次親吻了 Nastassia。這次你們的身體緊緊貼在一起，你知道這絕不是與某個酒館女孩短暫的逢場作戲。",
    "\"Thou art the Avatar?\" she says, seemingly not surprised by the fact.": "「你就是聖者？」她說，似乎對這個事實並不驚訝。",
    "\"It is an honor to meet thee. I have heard stories about thee from childhood. However, I thought thou wert a man!\"": "「很榮幸能見到你。我從小就聽過關於你的故事。不過，我以為你是個男的！」",
    "\"It is an honor to meet thee. I have heard stories about thee from childhood. However, somehow I thought thou wert taller.\"": "「很榮幸能見到你。我從小就聽過關於你的故事。不過，不知為何我以為你更高大一些。」",
    "\"My name is Nastassia.\"": "「我的名字叫 Nastassia。」",
    "\"I care for the Shrine here at Cove.\"": "「我負責照料 Cove 這裡的神殿。」",
    "\"This is the Shrine of Compassion.\"": "「這是慈悲神殿。」",
    "\"Yes, this is the Shrine of Compassion!\"": "「是的，這是慈悲神殿！」",
    "\"Do I care for all the shrines? I wish I could! But unfortunately I can barely take care of this one by myself. And I must do so in secret.\"": "「我有照料所有的神殿嗎？我希望我可以！但不幸的是，光是照料這一座我就快忙不過來了。而且我必須偷偷地做。」",
    "\"The Fellowship does not wish to see the Shrines maintained. Yet they do not tear them down, for that would bring the wrath of the people down upon them.\"": "「兄弟會不希望看到神殿被維護。但他們也不敢將其拆除，因為那會招致人民的憤怒。」",
    "\"When I first began to care for the shrine, I was harassed constantly by the townspeople. Someone was always stopping me on my way here from Cove or from Britain to discourage me from my activity.\"": "「當我剛開始照料神殿時，就不斷受到鎮民的騷擾。總有人在我從 Cove 或 Britain 來這裡的路上攔住我，試圖勸阻我的行為。」",
    "\"Finally I told Lord Heather about it, and he helped to put a stop to it. Now I merely get some odd looks from people, but no one hinders me.\"": "「最後我把這件事告訴了 Lord Heather，他幫忙制止了這種情況。現在我只會收到一些異樣的眼光，但沒人會阻撓我了。」",
    "\"As a child I was taught to believe in the ways of the Avatar. Even though these traditions seem to have been abandoned by everyone else in Britannia, I could not bear to see the Shrine of Compassion go to ruins.\"": "「小時候我被教導要相信聖者之道。即使這些傳統似乎已被 Britannia 的其他所有人拋棄，我也無法忍受看著慈悲神殿淪為廢墟。」",
    "\"For as long as I can remember I wanted to dedicate my life to the shrines. After my mother died I realized that I had to care for the Shrine of Compassion, as my mother had...\"": "「從我記事起，我就想把一生奉獻給神殿。在我母親去世後，我意識到我必須像我母親一樣，照料慈悲神殿……」",
    "\"And as her father had. My family has cared for this shrine for generations.\"": "「就像她的父親一樣。我們家族世世代代都在照料這座神殿。」",
    "Nastassia seems to have tears in her eyes.": "Nastassia 的眼中似乎泛著淚光。",
    "\"Ariana died of a broken heart soon after I was born. My grandmother never told my mother about my grandfather. My mother just assumed that he was a bad man and had deserted Ariana. Perhaps he did.\"": "「Ariana 在我出生後不久就因為心碎而死。我祖母從未向我母親提起過我祖父。我母親只是以為他是個壞人，並拋棄了 Ariana。也許他真的是。」",
    "\"I have never seen my father. My mother said that he was a soldier who rode off on an important mission the day they were to be married. And she never saw him again.\"": "「我從未見過我父親。我母親說他是個士兵，在他們準備結婚的那天騎著馬去執行一項重要任務。然後她就再也沒見過他了。」",
    "\"He could still be alive out there, somewhere... but perhaps I am only being an idealistic fool. I wish I knew for sure.\"": "「他可能還活在某處……但也許我只是個愛幻想的傻瓜。我希望能確定他的下落。」",
    "\"I would like to know if my father is dead or alive. It would set my mind at ease.\"": "「我想知道我父親是死是活。這能讓我安心。」",
    "\"Canst thou please tell me what thou hast found out?\"": "「你能告訴我你發現了什麼嗎？」",
    "\"Oh, please return if thou dost learn anything. Do not leave me in suspense!\"": "「喔，如果你得知任何消息，請務必回來告訴我。別讓我懸著一顆心！」",
    "\"My mother was Nadia. She spent her entire life waiting for my father to return.\"": "「我母親是 Nadia。她花了一生的時間等待我父親歸來。」",
    "\"You may have known her grandmother. Her name was Ariana.\"": "「你可能認識她的祖母。她名叫 Ariana。」",
    "\"She was a very famous child in Yew. They say that the Avatar met her once. Sometimes I think I would like to live in Yew.\"": "「她在 Yew 是個非常出名的孩子。他們說聖者曾經見過她。有時候我想我可能會想住在 Yew。」",
    "\"A city of trees. 'Twould be nice.\"": "「一座樹之城。那一定很美。」",
    "\"Then it must be true... he is dead.\"": "「那麼這一定是真的……他死了。」",
    "Nastassia begins to cry.": "Nastassia 開始哭泣。",
    "\"All my life I have hoped against hope that somehow he was still alive. Perhaps he was imprisoned by evil beings, or lost far away, trying to make his way back to me and my mother...\"": "「我一生都抱著一絲希望，希望他能活著。也許他被邪惡的生物囚禁，或是迷失在遙遠的地方，正努力想回到我和我母親身邊……」",
    "\"To know that he has been dead all these years... Oh, Father, where art thou!\"": "「知道他這些年來已經死了……喔，父親，你在哪裡！」",
    "After crying heavily on your shoulder for some time, she regains her composure.": "在你肩膀上痛哭了一陣子後，她恢復了平靜。",
    "\"Please forgive my outburst. I feel a tremendous weight has been lifted from me, knowing the truth at last.\"": "「請原諒我的失態。終於知道真相後，我感覺卸下了一個巨大的重擔。」",
    "\"I feel closer to thee now, knowing that thou hast found my father's true resting place.\"": "「知道你找到了我父親真正的安息之地，我現在覺得與你更親近了。」",
    "Nastassia pulls your head down to hers and kisses you deeply on the mouth.": "Nastassia 把你的頭拉向她，深深地吻了你的嘴唇。",
    "\"I hope that I shall see thee again.\"": "「希望我能再次見到你。」",
    "Nastassia pauses and looks deeply into your eyes.": "Nastassia 停頓了一下，深情地凝視著你的雙眼。",
    "\"Thou hast freed my spirit, and given me comfort. I do not think I can live without thee.\"": "「你釋放了我的靈魂，給了我安慰。我想我已經無法沒有你了。」",
    "Nastassia smiles.": "Nastassia 笑了。",
    "\"I shall miss thee. Farewell.\"": "「我會想念你的。再會。」",

    # 044C.es - Rayburt
    "You startle a fighter who seems lost in thought.": "你驚動了一位似乎正陷入沉思的戰士。",
    "His dog seemed to be meditating as well.": "他的狗似乎也在冥想。",
    "Rayburt bows.*": "Rayburt 鞠了個躬。*",
    "\"Nice to see thee again.\"": "「很高興再次見到你。」",
    "\"As thou knowest, my name is Rayburt.\"": "「如你所知，我的名字叫 Rayburt。」",
    "\"I was just resting from my journey. My wife, Pamela, runs the Inn here.\"": "「我只是在旅途中稍作休息。我妻子 Pamela 在這裡經營旅店。」",
    "\"And of course there is Regal. My dog.\"": "「當然還有 Regal。我的狗。」",
    "\"He's a very fine animal. My best friend! Except for my wife, naturally.\"": "「牠是隻非常棒的動物。我最好的朋友！當然，除了我妻子之外。」",
    "\"She treats me well. She loves to let me help out at the Inn.\"": "「她對我很好。她很喜歡讓我在旅店裡幫忙。」",
    "\"Farewell.\"": "「再會。」",

    # 044D.es - Lord Heather
    "You see the pudgy mayor of Cove.": "你看到 Cove 那位圓潤的鎮長。",
    "Lord Heather smiles.*": "Lord Heather 微笑著。*",
    "\"Good day to thee. Is there something thou dost need?\"": "「日安。你有什麼需要嗎？」",
    "\"Ah! Back to see me, eh? What can I do for thee?\"": "「啊！又來找我了，是嗎？有什麼我可以為你效勞的嗎？」",
    "\"I am Lord Heather.\"": "「我是 Lord Heather。」",
    "\"I am the Mayor of Cove.\"": "「我是 Cove 的鎮長。」",
    "\"Yes, Mayor of Cove! Canst thou believe it? In my younger days I never thought I would do anything important with my life, and now... Look at me! Lord Heather, Mayor of Cove! Ha!\"": "「是的，Cove 鎮長！你敢相信嗎？在我年輕的時候，我從沒想過我這輩子能做什麼重要的事，而現在……看看我！Lord Heather，Cove 鎮長！哈！」",
    "\"Yes, 'tis quite impressive, is it not? I have to do something while awaiting my impending death by assassination!\"": "「是的，相當了不起，不是嗎？在等待我即將被暗殺的死期時，我總得做點什麼！」",
    "\"I like to pretend to be Mayor. No one else has wanted the job in twenty years. They humor me here. I do not think that the people of Cove realize how sick I truly am.\"": "「我喜歡假裝自己是鎮長。二十年來都沒人想要這份工作。他們在這裡只是在迎合我。我不認為 Cove 的鎮民意識到我病得有多重。」",
    "Lord Heather gives you a wild, frenzied look.": "Lord Heather 給了你一個狂野而瘋狂的眼神。",
    "\"Is that a dagger beneath thy tunic? Do not draw it! I yield! Take whatever thou dost want!\"": "「你長袍底下藏著匕首嗎？別拔出來！我投降！你想要什麼就拿走吧！」",
    "\"Take my money! Just do not kill me! What is my life worth to thee? Nothing! My life is not worth the blood thou wouldst spill taking it! Let me live, so that I might tell others to fear thy name!\"": "「拿走我的錢！只要別殺我就好！我的命對你來說值多少？一文不值！我的命不值得你為了它而流血！讓我活下去，這樣我才能告訴別人要敬畏你的名字！」",
    "\"Wait!\"": "「等等！」",
    "\"Thou art the Avatar! Please, strike me dead and release me from this torture I call a life! My existence is a mockery. A fraud!\"": "「你是聖者！拜託，殺了我，讓我從這名為生活的折磨中解脫吧！我的存在就是個笑話。一場騙局！」",
    "\"I am nothing. Nothing!\"": "「我什麼都不是。什麼都不是！」",
    "\"Thou hast been talking to my brother, hasn't thou? My own brother wishes to have me assassinated so that he can claim the family fortunes for himself. 'Tis true!\"": "「你跟我兄弟談過話了，對吧？我親生兄弟想暗殺我，這樣他就能獨吞家族財產。這是真的！」",
    "\"That looks like my handwriting. Someone must have forged this and now thou hast come to kill me so thou canst deliver it to Lord British! Help! Help!\"": "「這看起來像我的筆跡。一定有人偽造了這個，現在你來殺我，這樣你就能把它交給 Lord British 了！救命！救命啊！」",
    "\"Ah, the Tax bill. Why dost Miranda worry so over it? Lord British seems to have lost interest in any matters of state. Let me sign it for thee, and thou canst return it to the Great Council.\"": "「啊，稅務法案。Miranda 為什麼這麼操心這個？Lord British 似乎對任何國家大事都失去興趣了。讓我為你簽名吧，然後你可以把它還給大議會。」",
    "\"The answer is no! And no amount of threatening or pleading will change my mind! This bill will never pass, no matter what Miranda says.\"": "「答案是不！無論你怎麼威脅或懇求都不會改變我的心意！這項法案永遠不會通過，不管 Miranda 怎麼說。」",
    "Lord Heather hands you back the newly signed bill.": "Lord Heather 把簽好名的法案還給你。",
    "\"I do believe we have exhausted our business, yes?\"": "「我相信我們的事情已經談完了，是吧？」",
    "Lord Heather glares at you silently.": "Lord Heather 默默地瞪著你。",
    "\"Farewell.\"": "「再會。」",

    # Case Labels
    "name": "姓名", "job": "職業", "magic": "魔法", "carpet": "魔毯",
    "spells": "法術", "reagents": "藥材", "blackrock": "黑石",
    "Moongates": "月之門", "experiments": "實驗", "notebook": "筆記本",
    "transmuter": "轉換器", "bye": "告辭",
    
    "Shrine": "神殿", "all shrines": "所有神殿", "take care": "照料",
    "tradition": "傳統", "reasons": "原因", "Ariana": "Ariana",
    "Julius": "Julius", "Nadia": "Nadia", "Yew": "Yew",
    "kiss": "親吻", "kiss again": "再次親吻", "I am the Avatar": "我是聖者",
    "News of your father": "你父親的消息",
    
    "Regal": "Regal", "Pamela": "Pamela",
    "Mayor": "鎮長", "brother": "兄弟", "assassination": "暗殺",
    "bill": "法案"
}

os.makedirs('zh_script/004', exist_ok=True)

for file in files:
    path = os.path.join(base_dir, file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for eng, chi in replacements.items():
            content = content.replace(f'"{eng}"', f'"{chi}"')
            content = content.replace(f'UI_add_answer("{eng}")', f'UI_add_answer("{chi}")')
            content = content.replace(f'UI_remove_answer("{eng}")', f'UI_remove_answer("{chi}")')
            content = content.replace(f'case "{eng}" attend', f'case "{chi}" attend')

        out_path = os.path.join('zh_script/004', file.replace('.es', '_zh.es'))
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Phase 8 part 1 translated.")
