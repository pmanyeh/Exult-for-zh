import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '042B.es': {
        'message("\\"Why, she doth not need to know! It does not matter! \'Tis nothing, really!\\"~~The Mayor is sweating profusely. He looks at you with beady eyes. He knows he has been found out. His body slumps. He is mortified and ashamed.~~\\"Thou hast discovered my... our secret. Please do not tell Judith. I... will end this. I swear. Candice -- we must stop meeting. I... I\'m sorry.\\"~~You decide to leave Patterson and Candice to work out what has happened, and you hope that the Mayor has learned something about honesty.*");': 'message("「哎呀，她不需要知道！這不重要！真的沒什麼！」~~市長滿頭大汗。他用豆子般的小眼睛看著你。他知道自己被發現了。他的身體癱軟下來。他感到羞愧難當。~~「你發現了我的……我們的秘密。請不要告訴 Judith 。我……會結束這一切的。我發誓。 Candice ——我們必須停止見面。我……對不起。」~~你決定留下 Patterson 和 Candice 去解決發生的事情，並希望市長學到了關於誠實的一課。*");',
        'message("\\"How may I help thee?\\" Patterson asks.");': 'message("「有什麼我能幫你的嗎？」 Patterson 問。");',
        'message("\\"I am Patterson. Named after my father.\\" He holds his hand out, takes yours, and shakes it firmly. \\"It is such a pleasure to meet the Avatar!\\"");': 'message("「我是 Patterson 。以我父親的名字命名。」他伸出手，握住你的手，並堅定地搖了搖。「能見到聖者真是太榮幸了！」");',
        'message("\\"Why, I am the Town Mayor! The Town Mayor of Britain, that is! I would have thee know that mine election was an overwhelming victory! Mine opponent never had a chance!~~ \\"I am also President of the Britannian Tax Council.\\"");': 'message("「哎呀，我是城鎮市長！也就是 Britain 的城鎮市長！我想讓你知道，我的選舉是一場壓倒性的勝利！我的對手根本沒有機會！~~ 「我也是 Britannia 稅務委員會的主席。」");',
        'message("\\"It was held two years ago. I received 84 percent of the votes. It was an impressive victory, I must admit.~~ \\"Of course, when one has a group like The Fellowship behind them...\\"");': 'message("「那是在兩年前舉行的。我獲得了 84% 的選票。我必須承認，這是一場令人印象深刻的勝利。~~ 「當然，當一個人背後有像兄弟會這樣的團體支持時……」");'
    },
    '042C.es': {
        'message("He looks at you awaiting some sort of indication. Will you keep his secret?");': 'message("你看著他，等待某種指示。你會為他保守秘密嗎？");',
        'message("\\"Thou dost walk with honor,~\\"I know thou wilt not tell,~\\"Of dignity\'s stains I do not bother,~\\"My concerns are none save for Nell.\\"");': 'message("「你與榮耀同行，~\\"我知道你不會說出去，~\\"我不介意尊嚴受損，~\\"我唯一關心的是 Nell 。」");',
        'message("\\"Reconsider, I must insist of thee, Thou art too thin of hide,~\\"If he knew, Nell\'s brother would murder me,~\\"And I would not see Nell widowed before having the chance to become a bride.\\"");': 'message("「重新考慮吧，我必須堅持，你太不顧及別人了，~\\"如果他知道， Nell 的哥哥會殺了我，~\\"而我不願看到 Nell 在有機會成為新娘前就成了寡婦。」");',
        'message("\\"I am grateful for thine honesty about thy lack of care,~\\"But why hast thou placed thyself in the center of our affair?~\\"For Nell\'s sake I could not bring myself to cause harm to her brother,~\\"I shall convince him of mine intentions,~\\"I love Nell and no other.~\\"Leave me now for I must use this time to properly prepare.\\"");': 'message("「我很感激你誠實地表達了你的不在乎，~\\"但你為何要把自己置於我們這段感情的中心？~\\"為了 Nell 的緣故，我無法忍心傷害她的哥哥，~\\"我會說服他我的意圖，~\\"我只愛 Nell ，別無他人。~\\"現在請離開，我必須利用這段時間好好準備。」");',
        'message("\\"I am sorry to say~\\"I have called it a day.~\\"Come to the grounds at daybreak~\\"when the puppets are, yea verily, up and awake.\\"");': 'message("「很抱歉地說~\\"我今天已經打烊。~\\"請在破曉時分來到場地~\\"當木偶們，是的的確，已經起床並清醒時。」");',
        'message("\\"See foolish pride and love, brutality and sin, Carrocio\'s tiny world of moving dolls,~\\"Enough to make thee gasp, or cry or grin,~\\"All who wish to see \'tis time to hear my calls,~\\"For now the puppet show is about to begin!\\"*");': 'message("「來看看愚蠢的驕傲與愛、殘暴與罪惡， Carrocio 的微小木偶世界，~\\"足以讓你倒抽一口氣、哭泣或咧嘴笑，~\\"所有想看的人，現在是聽我呼喚的時候了，~\\"因為現在木偶戲即將開始！」*");',
        'message("\\"Perchance to find in mercy\'s ear, A voice to know as gentle friend,~\\"I bid thee well, but hark return, If thou wouldst see the puppet\'s play or test thy strength again.\\"");': 'message("「或許能在慈悲之耳中，找到一個如溫柔朋友般的聲音，~\\"祝你一切順利，但也請記得回來，如果你想再次觀賞木偶戲或測試你的力量。」");',
        'var0009 = "@See the puppets!@";': 'var0009 = "@來看看木偶！@";',
        'var0009 = "@Canst thou ring the bell?@";': 'var0009 = "@你能敲響鐘嗎？@";',
        'var0009 = "@Next show starts soon!@";': 'var0009 = "@下場表演即將開始！@";',
        'var0009 = "@Measure thy might!@";': 'var0009 = "@來衡量你的力量！@";'
    },
    '042E.es': {
        'message("James wipes his brow. \\"Phew! That was a close call!\\"");': 'message("James 擦了擦額頭。「呼！好險！」");',
        'message("\\"Please, ");': 'message("「拜託，");',
        'message(". Do allow me some time to myself! Presently I am not doing the business of the inn and I do wish to keep it that way. Thou must attend to the inn during business hours.\\"");': 'message("。請給我一些自己的時間！目前我沒有在處理旅店的生意，而且我希望能保持這樣。你必須在營業時間來光顧旅店。」");',
        'message("You repeat the words that Cynthia had said to you about him. A smile comes across his face. \\"Aww, who wants to be a pirate anyway? I would hate that!\\" With that he goes back to wiping the bar, but you notice that the smile is still there.");': 'message("你向他轉述 Cynthia 對你說過關於他的話。他臉上露出了笑容。「噢，反正誰想當海盜？我會討厭那樣的！」說完他又回去擦拭吧檯，但你注意到那笑容依然掛在臉上。");',
        'message("\\"Oh, thou shalt just come back again wanting something else from me! I just know it!\\"*");': 'message("「喔，你肯定還會再回來找我要別的東西！我就知道！」*");'
    },
    '042F.es': {
        'message("\\"I work during the day and evening hours. Thou shouldst come by the pub then and we shall talk more!\\"");': 'message("「我在白天和晚上工作。你到時候應該來酒館，我們再多聊聊！」");',
        'message("\\"Lucy is a good cook. I recommend everything. Especially Silverleaf.\\"");': 'message("「Lucy 是個好廚師。我推薦所有的東西。特別是銀葉草 (Silverleaf) 。」");',
        'message("\\"Wonderful dish. Try it!\\"");': 'message("「很棒的一道菜。嚐嚐看吧！」");'
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

print("Phase 4 remaining strings translated.")
