import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_0470 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a rough-looking man with a bitter expression on his face."': '"你看到一個滿臉苦澀、外表粗獷的男人。"',
    '"D\'Rel scowls at you. \\"What in the blazes do ye want?\\""': '"D\'Rel 對你怒目而視。「你到底想要什麼？」"',
    '"\\"Ye care, do ye? All right, then. I\'ll tell ye my name if ye tell me thine, deal?\\""': '"「你在乎是吧？好吧。如果你告訴我你的名字，我就告訴你我的名字，成交嗎？」"',
    '"\\"Aye, get thy face from my sight!\\""*': '"「對，從我眼前消失！」"*',
    '"\\"What do ye care about the name of a wretch?\\""': '"「你在乎一個可憐蟲的名字做什麼？」"',
    '"wretch"': '"可憐蟲"',
    '"care"': '"在乎"',
    '", eh. Very well, a deal\'s a deal. I\'m D\'Rel.\\""': '，嗯。很好，一言為定。我是 D\'Rel 。」"',
    '"\\"None now. But \'til I made this mine home, I was a sailor, a... privateer, out of Buccaneer\'s Den.\\""': '"「現在沒有。但在我把這裡當成家之前，我是一名水手，一個……私掠者，來自海盜巢穴 (Buccaneer\'s Den) 。」"',
    '"thine home"': '"你的家"',
    '"Buccaneer\'s Den"': '"海盜巢穴"',
    '"\\"They\'ve put me in here to rot, they have!\\""': '"「他們把我關在這裡等死，真的！」"',
    '"they"': '"他們"',
    '"rot"': '"等死"',
    '"\\"The Britannian Tax Council done it. They and the two here -- Sir Jeff and Goth.\\""': '"「是 Britannia 稅務委員會幹的。他們和這裡的兩個人—— Jeff 爵士和 Goth 。」"',
    '"Britannian Tax Council"': '"Britannia 稅務委員會"',
    '"Sir Jeff"': '"Jeff 爵士"',
    '"Goth"': '"Goth"',
    '"\\"Well, actually I am in here for not paying my taxes. After all, I... earned the money, why should I give it to the Britannian Tax Council?\\""': '"「嗯，其實我是因為沒繳稅被關進來的。畢竟，那錢是我……賺來的，為什麼我要交給 Britannia 稅務委員會？」"',
    '"\\"Thieves, the whole lot of \'em! Tryin\' to take a person\'s hard-earned gold. Mayhaps they wouldn\'t need to take all of our money if they would go out and earn their own!\\""': '"「全都是些小偷！想拿走別人辛苦賺來的金幣。如果他們自己出去賺錢，也許就不需要拿走我們所有的錢了！」"',
    '"\\"They told me I\'d be here for the rest of my life. I have no reason to doubt them either!\\""': '"「他們告訴我餘生都要待在這裡。我也沒有理由懷疑他們！」"',
    '"\\"Thou hast heard of Buccaneer\'s Den, hast thou not? \'Tis the island due east of the mainland. Home of the sort of men who walk with peg-legs, have hooks for hands, and carry parrots on their shoulders! Har! Har!\\""': '"「你聽過海盜巢穴，不是嗎？就在大陸正東方的那座島。那裡住著一些裝木腿、手是鐵鉤、肩膀上還停著鸚鵡的男人！哈！哈！」"',
    '"Hook"': '"Hook"',
    '"\\"Yeah, I know Hook. Lookin\' for him, are ye? He be from Buccaneer\'s Den. He usually travels with some gargoyle named Forskis or something like that. If ye see him, give him my... hello, for me.\\" He gestures to his clenched fist."': '"「對，我認識 Hook 。你在找他嗎？他來自海盜巢穴。他通常跟一個叫 Forskis 什麼的石像鬼一起行動。如果你見到他，替我向他……『問好』。」他揮了揮緊握的拳頭。"',
    '"\\"That stuffed cock believes he\'s above everyone in Britannia. Just because he presides over the High Court he thinks he can pass judgement over any and everyone.\\""': '"「那隻驕傲的公雞以為自己高於 Britannia 的所有人。只因為他主持高等法院，他就以為可以對任何人進行審判。」"',
    '"\\"That thieving scoundrel belongs in here more than I do! Don\'t trust him if ye\'ve gotta choice.\\""': '"「那個偷雞摸狗的無賴比我更該被關在這裡！如果有選擇的話，別相信他。」"',
    '"\\"I thought as much.\\""': '"「我就知道。」"'
}

trans_0471 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a horse. \\"What else did you expect to see?\\""': '"你看到一匹馬。「你還期待看到什麼？」"',
    '"\\"Yes, I have a name.\\""': '"「是的，我有名字。」"',
    '"\\"My name? You can call\\tme what you want, but I will only respond to Smith.\\""': '"「我的名字？你想怎麼叫我都行，但我只會回應 Smith 。」"',
    '"Smith"': '"Smith"',
    '"\\"Job? -Job-? I\'m a horse, what kind of job could I have?\\" He looks off in the distance. \\"I can see it now: Smith -- Baker extraordinaire.~~\\"Actually, I have gotten quite good at interior decorating. See how I arranged my abode? You like it, don\'t you?\\""': '"「職業？『職業』？我是一匹馬，我能有什麼工作？」他望向遠方。「我現在都能想像了： Smith ——非凡的麵包師傅。~~其實，我在室內裝潢方面變得相當不錯了。看到我怎麼佈置我的住所了嗎？你很喜歡吧？」"',
    '"living room"': '"客廳"',
    '"bedroom"': '"臥室"',
    '"\\"Good. I will let you continue talking to me then! Which do you prefer, my living room or my bedroom?\\""': '"「很好。那我就讓你繼續跟我說話吧！你比較喜歡哪個，我的客廳還是臥室？」"',
    '"\\"You always did have bad taste!\\""': '"「你的品味還是一樣差！」"',
    '"\\"What now, "': '"「現在又怎麼了， "',
    '" something from me, don\'t you?"': '，你想從我這裡得到什麼，對吧？」"',
    '"money"': '"金錢"',
    '"advice"': '"建議"',
    '"a clue"': '"線索"',
    '"happiness"': '"幸福"',
    '"to save Britannia"': '"拯救 Britannia"',
    '"\\"I thought as much. You\'ve always been a selfish one. What do you want? Now, let\'s see... Money? Advice?\\tHappiness? No, you usually want a clue of some sort, don\'t you. Of course, you may have become altruistic over the past 200 years....~~\\"I know! You want to save Britannia!\\""': '"「我就知道。你一直都是個自私的人。你想要什麼？讓我想想……金錢？建議？幸福？不，你通常想要某種線索，對吧。當然，在過去兩百年間你也許變得無私了……~~我知道了！你想要拯救 Britannia ！」"',
    '"\\"From a horse? Right! Like I\'ve got some to give you.\\""': '"「從一匹馬身上？對！說得好像我有錢給你一樣。」"',
    '"\\"Now we\'re getting to the nitty-gritty. O.K., I\'ll give you a clue, but what\'s in it for me? Let me guess. Money? Love? No, knowing you it\'s probably nothing. With any luck, you\'ll go away and leave me alone.\\""': '"「現在我們進入正題了。好吧，我給你一個線索，但我能得到什麼好處？讓我猜猜。金錢？愛情？不，以我對你的了解，大概什麼都沒有。如果我運氣好，你會走開別煩我。」"',
    '"love"': '"愛情"',
    '"nothing"': '"什麼都沒有"',
    '"will not make you glue"': '"不會把你做成膠水"',
    '"\\"Sure! Like I have a use for that!\\"*"': '"「當然！好像我用得著那個一樣！」*"',
    '"\\"You really expect me to believe that? You\'re just in this for the money.\\""': '"「你真的以為我會相信嗎？你做這些只是為了錢。」"',
    '"\\"Now we\'re talking! Done deal. Here we go.\\" He checks around to make sure no else is within earshot. \\"The gargoyles,\\" he pauses, \\"are not evil.~~\\"And Rasputin is a mean Martian. There, that\'s it! Now get!\\"*"': '"「這才像話！成交。聽好。」他環顧四周，確保沒人偷聽。「石像鬼 (gargoyles) ，」他停頓了一下，「並不邪惡。~~還有， Rasputin 是個卑鄙的火星人。好了，就這樣！現在滾！」*"',
    '"\\"That\'s just fine. I was getting tired of you anyway.\\""': '"「那正好。反正我也開始厭煩你了。」"',
    '"\\"I\'ve already got that!\\"*"': '"「我已經有了！」*"',
    '"\\"Who doesn\'t?\\""': '"「誰不想？」"',
    '"\\"Why, as a matter of fact...\\""': '"「哎呀，事實上……」"',
    '"\\"Scoundrel! When thou art asked thy name, thou shouldst respond politely and accurately! The Avatar has just asked thee for -thy- name.\\""': '"「無賴！當別人問你名字時，你應該禮貌且準確地回答！聖者剛剛問的是『你的』名字。」"',
    '"\\"And who are you? My master?\\""': '"「你又是誰？我的主人嗎？」"',
    '"\\"Why, how dare thou speakest to the Avatar in that manner, Smith!\\""': '"「哎呀，你怎麼敢用這種態度跟聖者說話， Smith ！」"',
    '"\\"Yep, that\'s what I told you to call me. Oh, I get it! You "': '"「對，這就是我告訴你怎麼叫我的名字。喔，我懂了！你」"',
    '"\\"Don\'t talk to horses!\\"*"': '"「別跟馬說話！」*"',
    '"\\"Sorry, I don\'t get into that.\\"*"': '"「抱歉，我不搞那一套。」*"',
    '"\\"Sure, whatever.\\""': '"「好喔，隨便。」"',
    '"\\"That\'s funny, I feel the same way about you!\\"*"': '"「真有趣，我對你也有同感！」*"',
    '"\\"Then what are you talking to me for?\\"*"': '"「那你跟我說話做什麼？」*"',
    '"\\"Threats, huh? And how do you expect me to respond to that? With courtesy and open hooves?~~ \\"Tell you what: you go away and leave me alone, and I\'ll tell you a clue. Fair?\\""': '"「威脅，是嗎？你期望我怎麼回應？彬彬有禮地張開蹄子歡迎你？~~這樣吧：你走開別煩我，我就告訴你一個線索。公平吧？」"',
    '"-thy- name"': '"你的名字"',
    '"?\\" asks Smith."': '"？」 Smith 問。"',
    '"\\"Fine. I\'m not going to talk to you anyway!\\"*"': '"「很好。反正我也不打算跟你說話！」*"'
}

trans_0472 = {
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"The monk pulls back her cowl far enough for you to see her face."': '"這位僧侶將風帽向後拉，足以讓你看到她的臉。"',
    '"\\"Greetings, "': '"「你好， "',
    '". I hope thy days are full of beauty.\\""': '。我希望你的每一天都充滿美好。」"',
    '"\\"Thou mayest call me Aimi, "': '"「你可以叫我 Aimi ， "',
    '"\\"As a monk, I am not sure how to answer thy question. I often help to make wine. However, "': '"「身為僧侶，我不太確定該怎麼回答你的問題。我經常幫忙釀酒。然而， "',
    '", in my spare time I paint or tend my garden here at the Abbey.\\""': '，在閒暇時間，我會在修道院這裡畫畫或打理我的花園。」"',
    '"paint"': '"畫畫"',
    '"garden"': '"花園"',
    '"Abbey"': '"修道院"',
    '"\\"Yes,\\" she blushes, \\"I have long admired those who are able to express themselves visually. Sadly,\\" she says, laughing, \\"I am not very good. However, I also collect art. In fact, I have an original Sterling hanging in my room. Perhaps thou couldst see it sometime.\\""': '"「是的，」她臉紅了，「我一直很欣賞那些能夠用視覺表達自己的人。遺憾的是，」她笑著說，「我畫得不是很好。不過，我也收藏藝術品。事實上，我房間裡掛著一幅 Sterling 的原畫。或許你哪天可以去看看。」"',
    '"\\"My garden? I have been tending it for years now. I am a firm believer in the value of aesthetics, so I plant only flowers. Sometimes I sell them in bouquets when people want them, but I do that very rarely.\\""': '"「我的花園？我已經打理它好幾年了。我堅信美學 (aesthetics) 的價值，所以我只種花。有時當人們需要時，我會把它們做成花束出售，但我很少這麼做。」"',
    '"aesthetics"': '"美學"',
    '"buy"': '"買"',
    '"\\"It refers to the practice or study of all things beautiful.\\""': '"「它指的是實踐或研究所有美麗的事物。」"',
    '"\\"Thou wishest to buy a bouquet?\\""': '"「你想買一束花嗎？」"',
    '"\\"Dost thou have anyone to give these flowers to?\\""': '"「你有要送花的人嗎？」"',
    '"Reyna\'s mother"': '"Reyna 的母親"',
    '"You tell her about the passing away of Reyna\'s mother.~\\"Ah, yes. I had heard of Reyna\'s loss. That is a noble reason. Please take these flowers and give them to her.\\""': '"你告訴她 Reyna 母親過世的事。~「啊，是的。我聽說過 Reyna 的喪母之痛。那是一個高尚的理由。請收下這些花並轉交給她。」"',
    '"\\"Good. \'Tis always best to have someone to receive flowers. The flowers will cost 10 gold. Dost thou still want them?\\""': '"「很好。送花給某人總是最好的。花束要 10 個金幣。你還想要嗎？」"',
    '"\\"I think thou wilt find these to be exceptionally beautiful.\\""': '"「我想你會發現這些花非常漂亮。」"',
    '"\\"It appears thou dost not have room for my flowers. A pity.\\""': '"「看來你沒有空間拿我的花。真可惜。」"',
    '"\\"I am sorry, "': '"「很抱歉， "',
    '". Thou dost not have the gold.\\""': '。你沒有足夠的金幣。」"',
    '"\\"I understand, "': '"「我了解， "',
    '". \'Tis always best to have someone to receive flowers.\\""': '。送花給某人總是最好的。」"',
    '"\\"Perhaps next time, thou mightest be interested. For now, "': '"「或許下次你會有興趣。現在， "',
    '", do no more than promise me thou wilt take the time to enjoy my garden.\\""': '，只要答應我你會花時間欣賞我的花園就好。」"',
    '"\\"I have spent little time with others in the area. Thou mayest wish to speak with Taylor, for he knows much more about the people, animals, and sights in this area than I do.\\""': '"「我很少跟這個區域的其他人相處。你或許可以跟 Taylor 談談，因為他對這個區域的人、動物和風景的了解比我多得多。」"',
    '"Taylor"': '"Taylor"',
    '"\\"He is a fellow monk. He spends his time studying the plants, animals, and geography of Britannia.\\""': '"「他也是位僧侶。他把時間花在研究 Britannia 的植物、動物和地理上。」"',
    '"Kreg"': '"Kreg"',
    '"\\"I am afraid I do not know of such a person.\\""': '"「恐怕我不認識這個人。」"',
    '"\\"That is indeed unfortunate, "': '"「那真是不幸， "',
    '". Free flowers are indeed the best. And wild flowers are quite free. For now, "': '。免費的花確實是最好的。而野花相當自由。現在， "',
    '"\\"Fare thee well, "': '"「再會了， "',
    '". May the sweet scent of beauty never pass thee by.\\"*"': '。願美麗的甜美氣息永遠伴隨著你。」*"',
}

all_trans = {
    '0470': trans_0470,
    '0471': trans_0471,
    '0472': trans_0472
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
