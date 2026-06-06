import os
import re

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\batch_07'

os.makedirs(out_folder, exist_ok=True)

dict_0490 = {
    '". How may the lady of the tower be of assistance to thee?\""': '。這座高塔的女主人能為你提供什麼協助嗎？」"',
    '". I am Rowena, lady of this wondrous tower.\" She gestures around the room, indicating the moldering walls and cobwebbed rafters."': '。我是 Rowena ，這座奇妙高塔的女主人。」她對著房間比劃，指著腐朽的牆壁和佈滿蜘蛛網的屋樑。',
    '". I hope thou hast enjoyed thy visit to our glorious tower. Please, return whenever thou wishest.\" You feel as if you\'ve been speaking to a statue.*"': '。希望你喜歡我們這座輝煌的高塔。請隨時再來。」你覺得自己彷彿在對著一尊雕像說話。*"',
    '"After a moment, \"This is a lovely tower, dost thou not agree?\" Before you can answer, she continues.~~ \"Dost thou see the lovely rays of light playing across the flagstones of the floor? Water sparkles in the fountain. This is truly a beautiful place in which to live.\" Her eyes fix upon the floor."': '過了一會兒，「這是一座美麗的高塔，你不同意嗎？」在你回答之前，她繼續說道。~~「你看到美麗的光芒在地板的石板上閃爍嗎？噴泉裡的水閃閃發光。這真是一個適合居住的美麗地方。」她的眼睛盯著地板。',
    '"Horance"': '"Horance"',
    '"Rowena smiles in an abstract manner as you approach. \"Ah, thou hast returned, "': '當你靠近時， Rowena 露出抽象的微笑。「啊，你回來了， "',
    '"She blinks once, then, \"Horance... What a wonderful name. He found me lost and lonely and brought me here to be a lady. Is he not truly the most magnificent of Lords?\""': '她眨了一下眼睛，然後說：「 Horance ……多麼美妙的名字。他發現了迷失又孤單的我，把我帶到這裡當一位淑女。他難道不是最偉大的領主嗎？」"',
    '"She pauses. \"Goodbye, "': '她停頓了一下。「再見， "',
    '"She stares blankly for a second, then, as if on cue, \"I am the Mistress of the Tower. I tend to my Lord Horance\'s needs and keep our place looking respectable.\" It would appear that she\'s been falling behind in the latter duty."': '她茫然地盯著看了一秒鐘，然後彷彿得到提示般說：「我是高塔的女主人。我照顧 Horance 領主的需求，並保持我們的地方看起來體面。」看來她在後一項職責上有些落後。',
    '"The beautiful ghost looks through you with a slack look. Nothing\tyou do seems to attract her attention.*"': '美麗的幽靈用呆滯的目光穿過你。你做的任何事似乎都無法引起她的注意。*',
    '"You see a ghostly lady wearing a long, black gown. Something is a bit strange about the way she looks, but you can\'t quite place it. After a pause, she says, \"Greetings, "': '你看到一位穿著黑色長袍的幽靈女子。她的樣子有些奇怪，但你說不上來。停頓了一下後，她說：「你好， "',
    '"\"I am called... Rowena\""': '"「我叫…… Rowena 」"',
    '"name", "job", "tower", "bye"': '"姓名", "職業", "高塔", "告辭"',
    '"sacrifice"': '"犧牲"'
}

dict_0491 = {
    '", before the fire,\" she shudders, \"I used to be the barmaid here.\""': '，在大火之前，」她不寒而慄，「我曾經是這裡的酒館女侍。」"',
    '", hast thou forgotten already? I am Paulette.\""': '，你已經忘了嗎？我是 Paulette 。」"',
    '",\" she giggles, \"but all we serve here are... spirits!\"*"': '，」她咯咯笑著，「但我們這裡只供應……靈體 (spirits)！」*"',
    '". I am called Paulette. How may I help thee?\""': '。我叫 Paulette 。我能為你效勞嗎？」"',
    '". I used to clean tables here...\" As she says this, she bends over and pretends to wipe a table clean. You notice how low the cut of her bodice really is.~~\"...and serve people, like thyself. Of course, none so handsome.\" Her ghostly features blush prettily.~~\"But that was before,\" she shudders, \"the fire.\""': '。我以前在這裡擦桌子……」她一邊說，一邊彎下腰假裝把桌子擦乾淨。你注意到她的馬甲領口真的很低。~~「……還有服務像你這樣的人。當然，沒有人像你這麼英俊。」她幽靈般的面容泛起美麗的紅暈。~~「但那是在，」她不寒而慄，「大火之前。」"',
    '"."': '"。"',
    '".\" She traces the line of your bicep.~~\"I\'d wager thou couldst lift me over thine head.\" She smiles enticingly. However, you doubt that you could even touch her in her ghostly state.~~\"Thou mayest call me Paulette, gorgeous. What can I do for thee?\" She winks at you."': '。」她撫摸著你二頭肌的線條。~~「我敢打賭你能把我舉過頭頂。」她誘人地微笑著。然而，你懷疑在她幽靈的狀態下，你甚至碰不到她。~~「你可以叫我 Paulette ，帥哥。我能為你做什麼？」她對你眨眼。"',
    '".\" The pretty ghost turns away.*"': '。」美麗的幽靈轉身離開。*"',
    '".\""': '。"',
    '"?\", she asks sweetly."': '？」她甜甜地問。',
    '"Paulette perks up as she sees Rowena.~~\"Hello, milady. \'Tis good to see thee again. How art thou?\"*"': 'Paulette 看到 Rowena 時精神一振。~~「妳好，夫人。很高興再次見到妳。妳好嗎？」*"',
    '"Paulette rushes up to you as you say goodbye and gives you a little kiss on the cheek. She backs away slowly, \"Farewell, handsome.\"*"': '當你說再見時，Paulette 衝向你並在你的臉頰上輕吻了一下。她慢慢退後，「再會了，帥哥。」*"',
    '"Paulette turns to face you and smiles coquettishly, \"I had thought that thou might return.\" Her eyes sparkle up at you mischievously."': 'Paulette 轉向你，嬌媚地笑著：「我以為你可能會回來。」她的眼睛調皮地對著你閃爍。"',
    '"She appears puzzled for an instant, but then she nods her head.~~\"Oh, thou must be referring to Caine. He was the alchemist who was responsible for the fire.\""': '她似乎困惑了一瞬間，但隨後點點頭。~~「哦，你一定是指 Caine 。他是對這場大火負責的煉金術士。」"',
    '"She recovers her composure, \"Oh. For a moment there, I thought that thou wouldst have me be thy... sacrifice.\""': '她恢復了鎮定，「哦。有那麼一瞬間，我以為你想讓我成為你的……犧牲品。」"',
    '"Standing before you, with a hand on her hip, is a lovely, young woman with long black hair. \"Ooooh... Thou art a big one, "': '站在你面前，一隻手插在腰上的是位有著黑色長髮的可愛年輕女子。「哦……你真高大， "',
    '"The lovely apparition goes about her tasks without offering any response.*"': '美麗的幻影繼續她的工作，沒有提供任何回應。*',
    '"The lovely barmaid stares off into oblivion, completely unaware of her location and position.*"': '美麗的酒館女侍凝視著虛無，完全沒有意識到她的位置和狀態。*',
    '"The mayor becomes quickly embarrassed as he tries to quiet the rather friendly Paulette.~~\"I, er, used to be a wine connoisseur of sorts,\" he says to you.*"': '市長變得非常尷尬，他試圖讓相當友善的 Paulette 安靜下來。~~「我，呃，以前算是個品酒專家，」他對你說。*',
    '"The pretty barmaid looks as if she\'s about to fall over for a moment, then quickly rights herself. \"Oh, I feel a bit... faint.\" She turns away, distracted.*"': '美麗的酒館女侍看起來好像快要跌倒了，然後迅速站穩。「哦，我覺得有點……頭暈。」她轉過身，心不在焉。*',
    '"Tortured One"': '"受折磨的人 (Tortured One)"',
    '"You see a pretty, ghostly girl with long black hair. \"Hello, "': '你看到一個留著黑色長髮的漂亮幽靈女孩。「你好， "',
    '"\"\'Tis good news indeed, milady.\""': '"「這真是個好消息，夫人。」"',
    '"\"\'Tis not all thou wert a connoisseur of,\" adds Paulette, eyes twinkling. \"I seem to remember thou had quite a taste for redheads.\""': '"「你不只對酒有品味，」Paulette 補充道，眼睛閃爍著光芒。「我似乎記得你對紅髮女子也很有品味。」"',
    '"\"Go away! Thou art cruel and mean-hearted.\" She turns away, but not before you see the tears in her eyes.*"': '"「走開！你殘忍又惡毒。」她轉過身去，但在那之前你看到了她眼中的淚水。*"',
    '"\"Goodbye, "': '"「再見， "',
    '"\"Hello, Mayor. It has been quite a while since we\'ve seen thee in our tavern. There was a time, I remember, when we couldn\'t keep thee away.\"*"': '"「你好，市長。我們已經很久沒在酒館裡看到你了。我記得曾經有段時間，我們根本無法讓你離開這裡。」*"',
    '"\"I am fine, Paulette. I thank thee for thy concern.\"*"': '"「我很好， Paulette 。謝謝妳的關心。」*"',
    '"\"I am sorry, "': '"「我很抱歉， "',
    '"\"Oh, yes. It was horrible! The tavern caught on fire. I ran to my room, hoping to escape the flames. But then I started coughing. I couldn\'t breathe.\" Her chest rises and falls quickly as if she\'s reliving the experience.~~\"Finally, I could take it no longer.\" She brings the back of her hand to her forehead, dramatically. \"I fainted. Then I was here again, just like thou dost see me now.\" Her smile is like that of a child."': '"「哦，對。那太可怕了！酒館起火了。我跑到我的房間，希望能逃離火焰。但後來我開始咳嗽。我無法呼吸。」她的胸口快速起伏，彷彿正在重溫那段經歷。~~「最後，我再也受不了了。」她戲劇性地將手背放在額頭上。「我暈倒了。然後我又在這裡了，就像你現在看到我這樣。」她的笑容像個孩子。"',
    '"\"Please, just leave me alone!\" she looks as if she\'s about to cry.*"': '"「拜託，讓我一個人靜一靜！」她看起來快哭了。*"',
    '"\"That\'s a good one, wench,\" laughs the portly ghost.*"': '"「這笑話不錯，丫頭，」胖幽靈笑著說。*"',
    '"\"Thou dost wish to purchase something?\""': '"「你想買點什麼嗎？」"',
    '"\"Thou wantest me to... to jump in a well?\" Her eyes widen with astonishment."': '"「你要我……跳進井裡？」她驚訝地睜大眼睛。"',
    '"\"Very well, "': '"「很好， "',
    '"\"Well, "': '"「嗯， "',
    '"\"Well, thou canst go jump in a lake!\" She crosses her arms on her buxom chest and turns away from you angrily.*"': '"「好吧，那你可以去跳湖了！」她將雙臂交叉在豐滿的胸前，生氣地轉過身去。*"',
    '"\"Why, "': '"「哎呀， "',
    '"\"Why, \'tis called the Keg O\' Spirits. That\'s a fine name for a tavern, dost thou not agree?\" She smiles "': '"「哎呀，這家店叫靈魂酒桶 (Keg O\' Spirits) 。這對酒館來說是個好名字，你不覺得嗎？」她微笑著 "',
    '"\"Yes, "': '"「對， "',
    '"\"Yes, \'twas quite odd. When I awoke, it was as if I had never left when the fire began. In fact, were it not for the scorch marks everywhere, I would doubt the fire ever happened.\""': '"「是的，相當奇怪。當我醒來時，就好像大火發生時我從未離開過一樣。事實上，如果不是到處都有燒焦的痕跡，我會懷疑那場火災是否真的發生過。」"',
    '"buy"': '"買"',
    '"fire"': '"大火"',
    '"here again"': '"又在這裡"',
    '"here"': '"這裡"',
    '"name", "job", "bye"': '"姓名", "職業", "告辭"',
    '"sacrifice"': '"犧牲"',
    '"tavern"': '"酒館"'
}

dict_0492 = {
    '" looks a bit disgruntled.*"': ' 看起來有點不高興。*"',
    '" moves closer to you and whispers, \"Fergive him, "': ' 靠近你並低聲說：「原諒他， "',
    '" nods his head emphatically, \"\'At\'s right, I seen it, I did.\"*"': ' 用力點頭：「沒錯，我看到了，我確實看到了。」*"',
    '". Come, take rest from thy travels and sit a while with me. I am but a simple shade, but I may have information useful to thee.\""': '。來吧，從你的旅途中休息一下，和我坐一會兒。我只是一個簡單的幽影，但我可能有對你有用的情報。」"',
    '". I truly wish that I had that kind of Courage. But I cannot risk doing anything that might destroy Marney. Remember, her spirit is kept in that well, along with all of the dead of the graveyard.\""': '。我真心希望能有那種勇氣。但我不能冒任何可能摧毀 Marney 的風險。記住，她的靈魂就保存在那口井裡，和墓地裡所有死者的靈魂在一起。」"',
    '". I\'ve no right to inflict my woes upon thee. It hurts to think of my sweet Marney in the power of that... creature.\""': '。我無權把我的痛苦加諸於你。一想到我甜美的 Marney 在那個……怪物的力量之下，我就心痛。」"',
    '".*"': '。*"',
    '".\" The wan ghost looks more pale than usual.*"': '。」蒼白的幽靈看起來比平時更加蒼白。*"',
    '".\""': '。"',
    '".\"*"': '。」*"',
    '".~~\"He sometimes loses control like that when he talks about his daughter. Sure\'n ya can understand, tho\'.\"*"': '。~~「當他談到他的女兒時，他有時會像那樣失去控制。不過，我相信你能理解的。」*"',
    '"?\" You see recognition in his eyes, then it fades.~~\"Forgive me.\" He shakes his head, then smiles. \"I am the shade of Quenton.\""': '？」你看到他眼中的認可，然後消退了。~~「原諒我。」他搖搖頭，然後笑了。「我是 Quenton 的幽影。」"',
    '"As you start to speak to the pale ghost, you notice that he seems to be looking through you, as if you don\'t exist at all. You wave your hand in front of his face, but there is no response.*"': '當你開始與蒼白的幽靈說話時，你注意到他似乎看穿了你，彷彿你根本不存在。你在他面前揮手，但沒有任何反應。*',
    '"Forsythe seems taken aback by Quenton\'s sincere sounding query. \"Why, I fare well, Quenton. I thank thee for thy concern.\"*"': 'Forsythe 似乎對 Quenton 聽起來真誠的詢問感到驚訝。「哎呀，我過得很好， Quenton 。感謝你的關心。」*"',
    '"He looks as if he expected your question. \"Alas, Caine, in his attempt to free us of the Liche, instead damned us to become slaves of the selfsame Liche.\""': '他看起來似乎預料到了你的問題。「唉， Caine 試圖將我們從巫妖 (Liche) 手中解放出來，卻反而詛咒我們成為同一個巫妖的奴隸。」"',
    '"He smiles at your question, \"I once roamed the sea, for days at a time, gathering mine harvest of fish.\""': '他對你的問題微笑著，「我曾經在海上漫遊，一次好幾天，收穫我的魚獲。」"',
    '"He smiles in acknowledgement of the Mayor\'s thanks.*"': '他微笑著承認了市長的感謝。*',
    '"He turns back to his conversation with "': '他轉回去與 "',
    '"Marney", "fire"': '"Marney", "大火"',
    '"Mistress Mordra", "Liche", "Mayor", "Trent", "Caine"': '"Mordra 女士", "巫妖", "市長", "Trent", "Caine"',
    '"Quenton looks hopeful, \"If thou wouldst like to assist us, she is the best one to speak to. She seems to know the way to rid us of the Liche, at the least.\""': 'Quenton 看起來充滿希望，「如果你想幫助我們，她是最好的交談對象。至少，她似乎知道擺脫巫妖的方法。」"',
    '"Quenton regains control of himself. \"Forgive me, "': 'Quenton 恢復了控制。「原諒我， "',
    '"Quenton turns in your direction. \"Greetings, "': 'Quenton 轉向你的方向。「你好， "',
    '"The pale ghost seems to see you but cannot speak to you for some reason. In frustration the ghost turns away.*"': '蒼白的幽靈似乎看到了你，但出於某種原因無法對你說話。幽靈沮喪地轉過身去。*',
    '"The pale-looking ghost turns in your direction and gives you a wan smile. \"Hello, could it be that we have met somewhere before, "': '看起來蒼白的幽靈轉向你的方向，給了你一個蒼白的微笑。「你好，我們以前是不是在哪裡見過面， "',
    '"Tortured One"': '"受折磨的人"',
    '"You explain that you need a spirit to volunteer to freely enter the Well of Souls in order to bring about its destruction. Quenton considers for a while, and then responds, \"Please understand, "': '你解釋說你需要一個靈魂自願自由地進入靈魂之井 (Well of Souls) 以帶來它的毀滅。 Quenton 考慮了一會兒，然後回答：「請理解， "',
    '"\"After I was murdered, my good friend, Yorl, cared for her as his own. He tried his best, but her sickness only worsened. After several months she weakened, and died.\" He stops here, tears filling his ghostly eyes, then, angrily, he says, \"And now her spirit is held by Horance the Liche. Thou must rescue her from that foul beast!\" He attempts to grab you, but his hands pass through without resistance.*"': '"「我被謀殺後，我的好朋友 Yorl 把她當作自己的孩子一樣照顧。他盡了最大努力，但她的病情只是惡化了。幾個月後，她虛弱並死去了。」他停在這裡，幽靈般的眼睛裡充滿了淚水，然後憤怒地說：「現在她的靈魂被巫妖 Horance 掌握著。你必須把她從那頭邪惡的野獸手中救出來！」他試圖抓住你，但他的手毫無阻力地穿過了。*"',
    '"\"Ah, the poor man knows the spirit-wrenching feeling of loss almost as well as I. His wife, Rowena, was killed by the walking dead. And Mistress Mordra claims that she saw her sitting on a throne next to the Liche\'s own. I believe this has driven Trent somewhat mad. He works night and day upon some oddly formed cage. Strange, though, he never seems to finish it. He doth not seem to recall that he died in the fire, either, but a great hatred for Horance still burns in his heart.\""': '"「啊，那個可憐的人幾乎和我一樣了解失去的撕心裂肺之痛。他的妻子 Rowena 被行屍走肉殺死了。而 Mordra 女士聲稱她看到她坐在巫妖旁邊的王座上。我相信這讓 Trent 有點發瘋了。他日以繼夜地製作某種形狀奇特的籠子。奇怪的是，他似乎永遠無法完成它。他似乎也不記得自己死於大火，但對 Horance 的強烈仇恨仍在他心中燃燒。」"',
    '"\"Alas, no. This kind person is taking me to him.\" She indicates you.*"': '"「唉，沒有。這位善良的人正帶我去找他。」她指著你。*"',
    '"\"Caine? He was an alchemist here on Skara Brae. Now he spends his days in eternal pain caused by his guilt from causing the fire that destroyed this town.\""': '"「 Caine ？他是我們 Skara Brae 的煉金術士。現在他每天都在無盡的痛苦中度過，因為他為引起摧毀這個城鎮的大火而感到內疚。」"',
    '"\"Goodbye, "': '"「再見， "',
    '"\"Hello, Mayor. How dost thou fare, milord?\"*"': '"「你好，市長。你過得好嗎，大人？」*"',
    '"\"Hello, Quenton. I hope thou art doing well.\" Rowena gives the pale ghost a winning smile.*"': '"「你好， Quenton 。希望你過得好。」 Rowena 對蒼白的幽靈露出迷人的微笑。*"',
    '"\"I am called Quenton, "': '"「我叫 Quenton ， "',
    '"\"I have been around for many, many years. And,\" he smiles, \"I have seen many, many things in that time.\""': '"「我已經存在很多很多年了。而且，」他笑著說，「在那段時間裡，我看到了很多很多事情。」"',
    '"\"It be gettin\' so\'s a ghost cannot make an honest livin\' no more. Hmph.\" "': '"「現在連幽靈都無法誠實地謀生了。哼。」 "',
    '"\"It seems that Mistress Mordra, the town healer, thought she had a plan to stop the Liche, Horance, which she told to the Mayor. I am not sure exactly what she planned, but it involved Trent, the town smith, and Caine, the alchemist. Not long after Caine began his work, a maelstrom of fire tore over the island, destroying everything. Skara Brae burned for days.\""': '"「看來鎮上的治療師 Mordra 女士認為她有一個計畫來阻止巫妖 Horance ，她告訴了市長。我不確定她究竟計畫了什麼，但它涉及鎮上的鐵匠 Trent 和煉金術士 Caine 。在 Caine 開始他的工作後不久，一場猛烈的火災席捲了島嶼，摧毀了一切。 Skara Brae 燒了好幾天。」"',
    '"\"My story is a long and a sad one. I hope thou hast some time.\" He appears thoughtful for a moment, and then begins.~~ [\"When I was a young man, I met a lovely woman by the name of Gwen. I made her my wife, and we lived for a time, happy and carefree. She brought a light into the world and we called her Marney, which means the cool breeze after a storm.\" He smiles to himself at some memory, then continues with a furrowed brow."': '"「我的故事既長又悲傷。希望你有些時間。」他似乎沉思了一會兒，然後開始。~~「當我還是個年輕人時，我遇到了一位名叫 Gwen 的可愛女子。我娶她為妻，我們過了一段快樂無憂的時光。她為世界帶來了一道光芒，我們叫她 Marney ，意思是風暴過後的涼風。」他對著某些回憶獨自微笑，然後皺著眉頭繼續說。"',
    '"\"No, I am sorry. I cannot risk it.\" He looks very weary."': '"「不，我很抱歉。我不能冒這個險。」他看起來非常疲憊。"',
    '"\"Now, now, Quen. Settle down.\" "': '"「好了，好了， Quen 。冷靜下來。」 "',
    '"\"Once, over two centuries ago, I knew a gifted mage named Horance. His two loves in life were the study of magic, and writing lovely poetry. The people of Skara Brae felt safe in the knowledge that this sort of mage protected the town. Then he began to change.~~\"First his beautiful sonnets became a rhyming doggerel. It became the only way in which he would speak. His spells, which he displayed before the townsfolk, became destructive and violent. People began to fear him. My death occurred at about this time. Not long after that, he became reclusive. He had a tower built on the northern point and never removed himself from it.~~ \"Then, one night, the graves in the graveyard opened and the dead began to walk.\"*"': '"「曾經，在兩個多世紀前，我認識一位名叫 Horance 的天賦異稟法師。他一生中的兩大摯愛是研究魔法和寫作美麗的詩歌。 Skara Brae 的人們因為有這樣的法師保護城鎮而感到安全。然後他開始改變。~~首先，他美麗的十四行詩變成了押韻的打油詩。這成了他唯一說話的方式。他在鎮民面前展示的法術變得具破壞性和暴力。人們開始害怕他。我的死就發生在大約這個時候。在那之後不久，他變得隱遁。他在北端建了一座高塔，並從未離開過。~~然後，有一天晚上，墓地裡的墳墓被打開，死人開始行走。」*"',
    '"\"Please, please. I... cannot speak with thee right now. I am not sure what has come over me. Please forgive me, "': '"「拜託，拜託。我……現在無法和你說話。我不確定我怎麼了。請原諒我， "',
    '"\"The mayor...,\" Quenton selects his words carefully. \"...well, he believes that discretion is the better part of Valor. So, he may be able to offer thee some aid, but thou art likely first to need convince him that thou\'rt not here to hurt him.\""': '"「市長……」Quenton 謹慎地選擇用詞。「……嗯，他認為謹慎是勇氣的最好部分。所以，他或許能為你提供一些幫助，但你可能首先需要說服他你不是來傷害他的。」"',
    '"\"Then, one day, my wife was taken from me. I know not where, or by whom, save that they were evil men. Soon after, my sweet Marney became sick at heart and I feared for her health. I could not take time from my fishing to care for her, but I needed gold. So I made a deal with a man who was not to be trifled with. This was mine undoing, for when I failed to repay his loan, he came to me one night and slew me. I had not a chance to fight back or call for help.\" He falls silent.~~\"But that was long before the fire that turned this whole island into the land of the dead.\""': '"「然後有一天，我的妻子被人從我身邊帶走。我不知道在哪裡，也不知道是誰，只知道他們是壞人。不久之後，我甜美的 Marney 傷心欲絕而病倒了，我為她的健康感到擔憂。我無法從捕魚中抽出時間來照顧她，但我需要金幣。所以我與一個不好惹的人做了一筆交易。這成了我的毀滅，因為當我未能償還他的貸款時，他有一天晚上來找我，殺了我。我連還擊或呼救的機會都沒有。」他陷入沉默。~~「但那是在將這整個島嶼變成死亡之地的火災發生很久以前的事了。」"',
    '"\"These are glad tidings, for he misses thee so.\"*"': '"「這是個好消息，因為他非常想念妳。」*"',
    '"\"They marched to his tower, and now they roam all over the island, performing his bidding.\"*"': '"「他們遊行到他的塔樓，現在他們在島上四處遊蕩，執行他的命令。」*"',
    '"\"Well met, Quenton.\" The Mayor\'s mustache spreads as he smiles.*"': '"「很高興見到你， Quenton 。」市長笑著時鬍鬚向兩側展開。*"',
    '"\"Yes, milady. I am doing as well as can be expected. It gladdens mine heart to see that thou art once again free. Hast thou been to see Trent yet?\"*"': '"「是的，夫人。我過得還算可以。看到妳再次獲得自由，我心裡很高興。妳去見 Trent 了嗎？」*"',
    '"\"Yes, we are his slaves. Every night at midnight, we must go to the Dark Tower and become servants of his Black Mass. I only know this because Mordra tells us it is so. I have no recollection of ever having been to the Dark Tower at all.\" His expression betrays his fear."': '"「是的，我們是他的奴隸。每天午夜，我們必須去黑塔 (Dark Tower) 並成為他黑彌撒的僕人。我之所以知道這些，只是因為 Mordra 告訴我們是這樣的。我根本不記得曾經去過黑塔。」他的表情流露出他的恐懼。"',
    '"information"': '"情報"',
    '"name", "job", "shade", "bye"': '"姓名", "職業", "幽影", "告辭"',
    '"sacrifice"': '"犧牲"',
    '"slaves"': '"奴隸"'
}

dict_0493 = {
    '". May I be off assistance to thee?\""': '。我能為你效勞嗎？」"',
    '". Then come back and we\'ll see.\" Spectral sweat drips from his ghostly forehead."': '。然後再回來，我們再看看。」幽靈般的汗水從他幽靈的額頭上滴下來。"',
    '".\" The mayor smiles at you half-heartedly."': '。」市長半心半意地對你微笑。"',
    '"He looks into the well, at the swirling pool of trapped souls and his newfound resolve seems to diminish. \"Perhaps this was not such a good idea. Art thou sure that I must go through with this?\"~~You nod. His resolve firms once again.~~\"Yes, thou art quite right. No time for speeches. No time for a wavering will. No time for...\" He sees that you\'re not buying his attempt to stall.~~\"Well then, this is it.\" He moves toward the well. \"I suppose I didn\'t make a very good Mayor in life.\" Forsythe\'s jowls droop.~~\"Well, at least in death, I\'ll make a name for myself and do the job right.\" With that, he\'s gone.~~The souls of the well rush out of their confinement, leaving the blackened remains of the powerful artifact.*"': '他看著井裡那漩渦般受困靈魂的池子，他新建立的決心似乎開始減弱。「或許這不是個好主意。你確定我必須這樣做嗎？」~~你點點頭。他的決心再次堅定起來。~~「是的，你說得對。沒時間演講了。沒時間動搖意志了。沒時間……」他看出你不吃他拖延時間的這一套。~~「那麼，就是現在了。」他走向水井。「我想我活著的時候並沒有當個好市長。」Forsythe 的雙頰下垂。~~「嗯，至少在死後，我會為自己建立名聲，並把工作做好。」說完，他便消失了。~~水井裡的靈魂衝出他們的禁錮，只留下這個強大神器燒焦的殘骸。*"',
    '"He puts his arm around your shoulders and whispers, \"Mistress Mordra, our healer, thought she found a way to get rid of Horance once and for all. All we have to do is make a gold cage, or was it an old cage. Well, no matter.~~\"We make this cage, and someone...\" He smiles at you, \"...lowers it into the Well of Souls to do something or other to it. When this is done, thou shalt catch the Liche off guard late at night and snap it tight around him. Sounds easy thus far, yes?~~ \"Well, now. After that, thou needest only pour on him the magic liquid that the alchemist was making.\" He pauses here as if a little embarrassed.~~"': '他把手臂搭在你的肩膀上，低聲說：「我們的治療師 Mordra 女士，以為她找到了一勞永逸擺脫 Horance 的方法。我們所要做的就是打造一個金籠子，還是一個舊籠子。嗯，沒差啦。~~我們打造這個籠子，然後某人……」他對你微笑，「……把它降入靈魂之井 (Well of Souls) 裡對它做些什麼。完成後，你必須在深夜趁巫妖不備時，把它緊緊地扣在他身上。到目前為止聽起來很簡單，對吧？~~嗯，現在。那之後，你只需要把煉金術士正在製作的魔法液體倒在他身上。」他在這裡停頓了一下，似乎有點尷尬。~~"',
    '"He seems confused by your question. \"Did I not already reveal that? I am the mayor.\""': '他似乎對你的問題感到困惑。「我不是已經透露過了嗎？我是市長。」"',
    '"Horance", "Mistress Mordra", "proportions"': '"Horance", "Mordra 女士", "比例"',
    '"Liche"': '"巫妖 (Liche)"',
    '"Of what service can I be to one so great as thee?\" He bows."': '我能為像你這樣偉大的人提供什麼服務呢？」他鞠躬。"',
    '"The Mayor\'s eyes dart back and forth as you ask him to sacrifice himself for the good of his people. \"There is still one thou hast neglected to ask. Go and find "': '當你要求市長為了他人民的利益而犧牲自己時，他的目光來回游移。「還有一個你忽略沒問的。去找 "',
    '"The man looks strangely relaxed, almost too relaxed. He also ignores your attempt to converse with him. It would seem that he is not in control of his actions.*"': '這個男人看起來異常放鬆，幾乎太放鬆了。他也忽略了你與他交談的嘗試。看來他無法控制自己的行動。*',
    '"Tortured One"': '"受折磨的人"',
    '"You see a ghostly man cowering in the corner. Holding up an ankh in a protective fashion, he looks around the room frantically, but takes no notice of you.*"': '你看到一個幽靈般的男人蜷縮在角落裡。他以防禦的姿勢舉著十字聖號 (ankh)，瘋狂地環顧房間，但沒有注意到你。*',
    '"You see a middle-aged ghost cowering in the corner of this burned-out room. He\'s shaking from head to toe, and, as you approach, he jumps out, waving an ankh in your face.~~ \"Thou\'lt not have me, foul beast! Back, back I say! In the name of the Virtues, back!\" He slowly notices that this is having no effect other than to surprise you and looks more closely in your direction. He looks from you to a picture of you on the wall. Back and forth he looks, squinting his eyes until they go wide with relief.~~\"Oh, thank thee for coming. Lord British finally called thee to help us.\" He\'s obviously suffering from some delusion. \"I am Mayor Forsythe. Dost thou think it will take long for thee to defeat the Liche?\""': '你看到一個中年的幽靈蜷縮在這個燒毀房間的角落裡。他全身發抖，當你靠近時，他跳了出來，在你面前揮舞著十字聖號。~~「你別想抓到我，邪惡的野獸！退後，我說退後！以美德之名，退後！」他慢慢注意到這除了讓你驚訝之外沒有任何效果，並更仔細地看著你的方向。他看看你，又看看牆上你的畫像。他來回看著，瞇著眼睛，直到他鬆了一口氣地睜大眼睛。~~「哦，謝謝你的到來。不列顛王終於叫你來幫助我們了。」他顯然患有某種妄想。「我是 Forsythe 市長。你覺得你需要很長時間才能擊敗巫妖嗎？」"',
    '"\"\'Twas so long ago that I barely remember. A smattering of curing, a dash of a potion of invisibility, and... that\'s right, a -ton- of the essence of mandrake root!\""': '"「那太久以前了，我幾乎不記得了。少許治療藥水，一點隱形藥水，還有……對了，『一大噸』的曼德拉草根精華 (essence of mandrake root)！」"',
    '"\"Ah yes, good Avatar. \'Tis good to see thee again. "': '"「啊是的，優秀的聖者。很高興再次見到你。 "',
    '"\"Ah, hello, "': '"「啊，你好， "',
    '"\"Ah, that lovely girl is the barmaid of the Keg Of Spirits tavern, down by the ferry dock.\""': '"「啊，那個可愛的女孩是靈魂酒桶酒館的女侍，就在渡輪碼頭附近。」"',
    '"\"As I told thee, my name is Forsythe.\""': '"「就像我告訴過你的，我的名字是 Forsythe 。」"',
    '"\"As thou wishest!\""': '"「如你所願！」"',
    '"\"Greetings, "': '"「你好， "',
    '"\"I apparently got the proportions a bit off when I told the alchemist about the formula. Anyway, it should be as easy as falling off a log, for thee. I guess thou hadst better be running along now, Mistress Mordra can tell thee ever so much more about this than can I. Be careful though, she is a dangerous old wench.\""': '"「當我告訴煉金術士配方時，我顯然把比例弄錯了一點。總之，對你來說，這應該就像從原木上掉下來一樣簡單。我想你現在最好快點去， Mordra 女士能告訴你的事比我多太多了。不過要小心，她是個危險的老太婆。」"',
    '"\"Just look for the crater near the northeast coast. Thou shalt find him there.\""': '"「只要在東北海岸附近尋找火山口。你就會在那裡找到他。」"',
    '"\"No! Back! Please, leave me alone!\" The Mayor looks terrified. It seems that you must give up trying to get anything useful out of him for the time being.*"': '"「不！退後！拜託，讓我一個人靜一靜！」市長看起來很害怕。看來你暫時必須放棄從他身上獲取任何有用的情報了。*"',
    '"\"Of course, now thou hast already taken care of all that!\" He smile gracioulsy."': '"「當然，現在你已經處理好所有那些事了！」他優雅地微笑著。"',
    '"\"Oh, goodness no. I do not think I\'m the one thou wantest for that job. No, I should think not. Maybe thou shouldst ask all of the townsfolk first. If none of them will do it, I might just think about it. Yes, that\'s right, thou shouldst just ask the others, then come back here to tell me who the poor soul is.\" He smiles at his own cleverness."': '"「哦，天哪，不。我不認為我是你要找的那個人。不，我不這麼認為。也許你應該先問問所有的鎮民。如果他們都不願意做，我或許會考慮一下。對，沒錯，你應該先去問其他人，然後再回到這裡告訴我那個可憐的靈魂是誰。」他對自己的聰明感到滿意地笑著。"',
    '"\"Oh, yes, right. If I have forgotten to tell thee something, thou mayest come back and ask, all right.\" He sighs heavily as you start to leave, then returns to his vigil in the corner.*"': '"「哦，是的，對。如果我忘了告訴你什麼，你可以回來問我，好嗎？」當你準備離開時，他重重地嘆了口氣，然後回到角落繼續守夜。*"',
    '"\"Quen spends just about all of his time in the Keg Of Spirits tavern, near the ferry dock.\""': '"「Quen 幾乎把他所有的時間都花在靈魂酒桶酒館裡，就在渡輪碼頭附近。」"',
    '"\"She can be found in her house, right across the road.\""': '"「她可以在她位於馬路對面的房子裡找到。」"',
    '"\"She resides just across the way, and can help thee with everything thou mightest need to rid us of the Liche. Thank thee ever so much. It has been nice talking with thee. Goodbye.\" He scurries back into his corner and holds his ankh in a protective fashion.*"': '"「她就住在對面，可以幫助你獲得擺脫巫妖可能需要的一切。非常感謝你。很高興和你說話。再見。」他匆忙跑回他的角落，並以防禦的姿勢握著他的十字聖號。*"',
    '"\"That cantankerous man runs the tavern, the Keg Of Spirits. Thou canst find it near the ferry dock.\""': '"「那個脾氣暴躁的男人經營靈魂酒桶酒館。你可以在渡輪碼頭附近找到它。」"',
    '"\"That is what we call Caine. He is the alchemist who created the fire.\""': '"「那就是我們對 Caine 的稱呼。他是引發這場大火的煉金術士。」"',
    '"\"The town healer said something about Rowena sitting on a throne in the Dark Tower on the northwestern point.\""': '"「鎮上的治療師說 Rowena 坐在西北端黑塔裡的王座上。」"',
    '"\"Thou must merely lead me to the well, and I shall do my duty.\" He seems quite resigned to his fate.*"': '"「你只需引導我到井邊，我就會盡我的責任。」他似乎已經屈服於自己的命運了。*"',
    '"\"Trent is in the smithy, not far from here, across the road.\""': '"「Trent 在鐵匠鋪裡，離這裡不遠，就在馬路對面。」"',
    '"\"Well, if I\'ve got all this Liche lore straight, then, Horance, who used to be a good and kindly mage, has become a nasty, horrible, undead mage.\" He smiles patronizingly. \"Now run along. Thou canst ask Mordra if thou needest more information.\""': '"「嗯，如果我把這些關於巫妖的傳說都搞清楚了的話，那麼，過去是一位善良和藹的法師的 Horance ，已經變成了一個討厭、可怕的不死法師。」他以一種屈尊俯就的態度微笑著。「現在快走吧。如果你需要更多情報，你可以去問 Mordra 。」"',
    '"\"Well, now. Just how didst thou come to this island? That is right. -That- ferryman. He is on the ferry of Skara Brae, to the southeast.\""': '"「嗯，現在。你到底是如何來到這座島的？沒錯。就是『那個』渡輪夫。他在東南方的 Skara Brae 渡輪上。」"',
    '"\"Well, the alchemist is the one who started the fire!\""': '"「嗯，煉金術士就是引發大火的人！」"',
    '"\"Why yes, the Liche has been a horrible scourge on my poor town. First he drives away all visitors by raising the dead. Then, in an attempt to stop him, the town is destroyed in a terrible fire. Well, I suppose that is not strictly his fault, but, well, something had to be done about him.\" Forsythe looks a little flustered."': '"「哎呀是的，巫妖對我可憐的城鎮來說是一場可怕的災難。首先，他喚醒死者趕走了所有的訪客。然後，在試圖阻止他的過程中，城鎮在一場可怕的火災中被摧毀了。嗯，我想這嚴格來說不是他的錯，但是，嗯，總得有人對他採取點行動。」 Forsythe 看起來有點慌張。"',
    '"fire"': '"大火"',
    '"his fault"': '"他的錯"',
    '"leave"': '"離開"',
    '"name", "job", "bye"': '"姓名", "職業", "告辭"',
    '"sacrifice"': '"犧牲"'
}

dicts = {
    '0490': dict_0490,
    '0491': dict_0491,
    '0492': dict_0492,
    '0493': dict_0493
}

for fid, d in dicts.items():
    filepath = os.path.join(folder, f'{fid}.es')
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='latin-1') as f:
            content = f.read()
        for k, v in d.items():
            content = content.replace(k, v)
        with open(os.path.join(out_folder, f'{fid}_zh.es'), 'w', encoding='utf-8') as f:
            f.write(content)

print("Translated 0490-0493")
