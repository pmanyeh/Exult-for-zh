import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\004'

replacements_044A = {
    '"\\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent\'s Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\\""':
    '"「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈附近。在失落之河周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」"'
}

replacements_044B = {
    '"\\"Hello again, "': '"「再次問候，"',
    '"!\\" Nastassia says."': '"！」Nastassia 說。"',
    '"\\"I am Nastassia.\\""': '"「我是 Nastassia。」"',
    '"She thinks a moment. \\"I suppose my job is to keep the Shrine of Compassion pristine, though it is not an official position.\\""': '"她想了一會兒。「我想我的工作是保持慈悲神殿的整潔，雖然這不是個正式的職位。」"',
    '"\\"The Shrine of Compassion has been here for many generations, as have all the shrines in Britannia. My great-great-grandmother Ariana made a request in her will that her family line take care of this particular shrine.\\""': '"「慈悲神殿和 Britannia 的所有神殿一樣，已經存在好幾代了。我的高祖母 Ariana 在遺囑中要求她的家族世世代代照料這座神殿。」"',
    '"\\"Many of the shrines have fallen into disuse or have been overgrown to the point of being lost. It is sad.\\""': '"「許多神殿已經荒廢，或者被雜草淹沒到幾乎消失的地步。這很可悲。」"',
    '"\\"I am afraid that thou mightest find the other shrines in poor condition. I keep this one... well, nice. And I do it not only to keep alive my great-great-grandmother\'s tradition, but... for other reasons, too.\\""': '"「恐怕你會發現其他神殿的狀況很糟。我把這座保持得……很好。我這麼做不僅是為了延續我高祖母的傳統，還有……其他原因。」"',
    '"\\"Some people may think it odd that a young person would cling to the old ways so. But it is something that gives me great comfort. It gives me the feeling that there is something in this world that I belong to.\\""': '"「有些人可能會覺得一個年輕人如此堅持舊習很奇怪。但這給了我極大的安慰。這讓我覺得在這個世界上有我所歸屬的東西。」"',
    '"\\"I... I\'d rather not say. Please do not ask.\\""': '"「我……我寧願不說。請別問。」"',
    '"\\"Thou dost know the reasons.\\""': '"「你知道原因的。」"',
    '"\\"Yes, she was my great-great-grandmother. I understand that she actually met the Avatar and "': '"「是的，她是我的高祖母。我聽說她曾見過聖者，而且」"',
    '" made a profound impact on her life.~~\\"It is odd, but thou dost resemble the portraits I have seen of the Avatar.\\""': '"對她的一生產生了深遠的影響。~~「說來奇怪，但你長得很像我看過的聖者畫像。」"',
    '"\\"Thou dost know of my father? I suppose the townsfolk have been talking again. I wish I had known him. There is something within me that yearns for some news of him. Anything at all.\\""': '"「你知道我父親？我想鎮民們又在談論了。我希望我認識他。我內心深處渴望得到他的消息。任何消息都好。」"',
    '"\\"My mother. She died horribly, and by her own hand. That is the true reason I pay homage to this Shrine. I hope someday to provide her with the means to rest in peace.\\""': '"「我母親。她死得很慘，而且是死在自己手裡。這才是我向這座神殿致敬的真正原因。我希望有一天能讓她安息。」"',
    '"\\"My father died in the Great Forest there. Some wild animal or something killed him. Art thou perhaps travelling to Yew?\\""': '"「我父親死在那裡的巨大森林裡。被野獸或什麼東西殺死了。你也許要去 Yew 嗎？」"',
    '"\\"Oh, "': '"「喔，"',
    '", I do wish thou wouldst try to find out something about my father. How did he die? What happened? Please! Wilt thou search for the truth and come back and tell me?\\""': '", 我真的希望你能試著找出關於我父親的事。他是怎麼死的？發生了什麼事？拜託！你願意尋找真相並回來告訴我嗎？」"',
    '"\\"Bless thee! I shall be waiting here for thee.\\""': '"「祝福你！我會在這裡等你。」"',
    '"\\"I know we have a strong kinship now. We shall be like sisters.\\""': '"「我知道我們現在有著強烈的親切感。我們將會像姐妹一樣。」"',
    '"Nastassia turns away and looks as if she might cry. \\"Very well. Please leave me alone.\\"*': '"Nastassia 轉過身去，看起來好像快哭了。「好吧。請讓我一個人靜一靜。」*"',
    '"\\"No? Well, let me know if thou art in the future. Perhaps thou couldst help me.\\""': '"「不嗎？好吧，如果未來有機會請讓我知道。也許你可以幫我。」"',
    '"You kiss Nastassia\'s lovely mouth again. She responds.~~\\"No man hath done that as well as thee.\\"~~ She looks at you with wide eyes.~~\\"Do it again, milord.\\""': '"你再次親吻 Nastassia 迷人的嘴唇。她回應了。~~「沒有男人能做得像你這麼好。」~~她睜大眼睛看著你。~~「再來一次，大人。」"',
    '"Nastassia studies your features.~~\\"Somehow I knew it. It hath been said that thou wouldst return.\\""': '"Nastassia 仔細端詳你的五官。~~「不知怎麼地，我就知道。傳說你會回來的。」"',
    '"You tell Nastassia what you learned from Trellek. She closes her eyes and it seems a great weight has lifted from her shoulders.~~The woman raises her arms to the sky and cries out, \\"Didst thou hear that, mother? Thine husband was only trying to provide for his family! And he died... a hero! He was not a vagabond! Dost thou hear? Thou canst rest thy tortured soul now. Please, mother, forgive him. Do so, so that I can now forgive thee.\\"~~She wipes the tears from her face and looks at you."': '"你把從 Trellek 那裡得知的消息告訴 Nastassia。她閉上雙眼，似乎卸下了肩上的重擔。~~這名女子向天空舉起雙臂，大喊道：「妳聽到了嗎，母親？妳的丈夫只是想養活他的家人！而他死得……像個英雄！他不是流浪漢！妳聽到了嗎？妳受盡折磨的靈魂現在可以安息了。拜託，母親，原諒他。這樣一來，我現在也能原諒妳了。」~~她擦去臉上的淚水，看著你。"',
    '"\\"I thank thee, "': '"「我感謝你，"',
    '". Thou hast made me very happy. I shall always remember thee.\\""': '”。你讓我非常快樂。我會永遠記住你。」"',
    '"She kisses you once lightly. \\"Thank thee, "': '"她輕輕吻了你一下。「謝謝你，"',
    '". Thou hast made me very happy. Shouldst thou become weary of adventuring, I shall be waiting here for thee. Thou art welcome to live and share thy life with me. Go now. Finish the job thou must needs do. But keep me in thy thoughts.\\""': '”。你讓我非常快樂。如果你厭倦了冒險，我會在這裡等你。歡迎你來和我一起生活，分享你的人生。現在去吧。完成你必須完成的工作。但請把我留在你的心中。」"',
    '"\\"Goodbye.\\" She kisses you again, and then turns so that she will not see you leave.*"': '"「再見。」她再次吻了你，然後轉過身去，以免看到你離開。*"',
    '"\\"Goodbye, "': '"「再見，"',
    '."*"': '”。*"',
    '"!\\""': '"！」"'
}

replacements_044C = {
    '"\\"Hello again,\\" Rayburt says."': '"「再次問候，」Rayburt 說。"',
    '"\\"I am Rayburt.\\""': '"「我是 Rayburt。」"',
    '"He turns to the dog. \\"And this is Regal.\\""': '"他轉向那隻狗。「這是 Regal。」"',
    '"\\"I am a trainer. I specialize in a style of combat that relies on concentration and meditation. It shall boost thy dexterity and intelligence, as well as thy combat skill.\\""': '"「我是一名訓練師。我專精於一種依賴專注和冥想的戰鬥風格。它能提升你的敏捷和智力，以及你的戰鬥技巧。」"',
    '"\\"He is an exceptionally smart animal. He understands the meditative way of life.\\"~~Rayburt throws the dog a cookie, which is snarfed up in the blink of an eye. \\"He is cute, too,\\" Rayburt says with complete seriousness."': '"「牠是非常聰明的動物。牠了解冥想的生活方式。」~~Rayburt 丟給狗一塊餅乾，狗眨眼間就把它吞了。「牠也很可愛，」Rayburt 一臉嚴肅地說。"',
    '"You see a hint of a smile on Rayburt\'s face. \\"She and I are one person.\\""': '"你看到 Rayburt 臉上閃過一絲微笑。「她和我是一體的。」"',
    '"\\"Most of all combat occurs in the mind before the first blow is ever struck. The key to victory is to first win the inner battle in the mind. Winning that inner battle is what I help my students to learn.\\""': '"「在揮出第一擊之前，大部分的戰鬥都發生在心智中。勝利的關鍵是首先在心中贏得內在的戰鬥。贏得那場內在的戰鬥就是我幫助學生學習的。」"',
    '"\\"I charge 60 gold for a session, but thou wilt benefit greatly. Is this agreeable?\\""': '"「我每堂課收費 60 枚金幣，但你會獲益良多。你能接受嗎？」"',
    '"\\"It is not the first time I have been accused of being too expensive.\\""': '"「這不是我第一次被指控收費太貴了。」"',
    '"\\"Please come to my studio during business hours if thou wishest to train.\\""': '"「如果你想訓練，請在營業時間來我的工作室。」"'
}

replacements_044D = {
    '"This regal gentleman epitomizes a well-liked politician."': '"這位充滿王者風範的紳士完美詮釋了一位受歡迎的政治家。"',
    '"\\"Hello! Lord British sent word that thou might come to visit us. Welcome to Cove, Avatar!\\""': '"「你好！Lord British 傳話說你也許會來拜訪我們。歡迎來到 Cove，聖者！」"',
    '"\\"Hello again, Avatar!\\" Lord Heather proclaims."': '"「再次問候，聖者！」Lord Heather 宣告著。"',
    '"\\"I am Lord Heather. And I recognize thee, Avatar!\\""': '"「我是 Lord Heather。我認得你，聖者！」"',
    '"\\"I am the Town Mayor of Cove, home of the Shrine of Compassion.\\""': '"「我是 Cove 的鎮長，慈悲神殿的所在地。」"',
    '"\\"It\'s a small place, I know. Many of our residents have moved away to the larger towns, especially Britain. But we have maintained a small core of loyal Covites.\\""': '"「我知道這是個小地方。我們許多居民都搬到較大的城鎮去了，尤其是 Britain。但我們保留了一小群忠誠的 Cove 鎮民。」"',
    '"\\"We are proud of our Shrine. One of our residents takes good care of it. Thou must try and visit the Shrine if thou hast not already. It is a monument to all the lovers in town.\\""': '"「我們為我們的神殿感到驕傲。我們的一位居民把它照顧得很好。如果你還沒去過，一定要去看看神殿。它是鎮上所有戀人的紀念碑。」"',
    '"\\"Britain may be the city of Compassion, but Cove has become the city of Passion. Everyone here seems to fall in love rather easily. Thou wilt find that everyone loves someone. Almost everyone, that is.\\""': '"「Britain 也許是慈悲之城，但 Cove 已經成為熱情之城。這裡的每個人似乎都很容易墜入愛河。你會發現每個人都愛著某個人。幾乎每個人都是如此。」"',
    '"\\"Well, let\'s see... I am in love with Jaana, our healer.\\tAnd she is in love with me, of course. Then there is Zinaida, who runs the Emerald. She has an interest in De Maria, our local bard. And vice versa. Rayburt, our trainer, is courting Pamela, the innkeeper.\\""': '"「嗯，讓我想想……我愛上了我們的治療師 Jaana。當然，她也愛我。然後是經營翡翠酒館的 Zinaida。她對我們當地的吟遊詩人 De Maria 有好感。反之亦然。我們的訓練師 Rayburt 正在追求旅店老闆 Pamela。」"',
    '"\\"She is a lovely young woman who is always melancholy. De Maria can tell thee more about her. I suggest thou seekest him at the Emerald. \'Tis a sad but compelling tale.\\""': '"「她是一位可愛的年輕女子，但總是憂鬱。De Maria 可以告訴你更多關於她的事。我建議你去翡翠酒館找他。那是一個悲傷但引人入勝的故事。」"',
    '"\\"I do hope thou canst help her. She needs "': '"「我真的希望你能幫她。她需要」',
    '" to bring her out of her depression.\\""': '"「將她從憂鬱中帶出來。」"',
    '"\\"\'Tis about time that the government did something about the awful stench coming from that lake! I shall be happy to sign thy bill of law! Take it back to the Great Council post haste!\\" Lord Heather signs the bill and hands it back to you."': '"「政府早該對那座湖傳出的惡臭採取行動了！我很樂意簽署你的法案！快把它帶回大議會！」Lord Heather 簽署了法案並交還給你。"'
}

replacements_044E = {
    '"\\"I am the Innkeeper at the Out\'n\'Inn.\\""': '"「我是外宿旅店的老闆。」"'
}

replacements_0450 = {
    '"\\"\'Tis thy choice... and thy mistake!\\""': '"「這是你的選擇……而且是個錯誤的選擇！」"'
}

files_and_dicts = [
    ('044A_zh.es', replacements_044A),
    ('044B_zh.es', replacements_044B),
    ('044C_zh.es', replacements_044C),
    ('044D_zh.es', replacements_044D),
    ('044E_zh.es', replacements_044E),
    ('0450_zh.es', replacements_0450),
]

for filename, replacements in files_and_dicts:
    path = os.path.join(base_dir, filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for eng, chi in replacements.items():
            content = content.replace(eng, chi)
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Fixed all missing strings in Phase 8")
