import os

def translate_file(filename, rep_dict):
    path = os.path.join(r'd:\git\exult-master\tools\ucxt\output\zh_script\005', filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for eng, chi in rep_dict.items():
        if eng not in content:
            print(f"WARNING: String not found in {filename}: {eng}")
        content = content.replace(eng, chi)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

rep_045D = {
    '"William does not want to avert his attention from the Fellowship meeting.*"': '"William 不想將注意力從兄弟會集會上移開。*"',
    '"\\"I must not stop to speak with thee now! I am late for the Fellowship meeting at the hall!\\"*"': '"「我現在不能停下來跟你說話！我去大廳參加兄弟會集會已經遲到了！」*"',
    '"You see a man with a very worried look on his face."': '"你看到一個臉上帶著非常擔憂神情的男人。"',
    '"\\"Avatar! What is it? Why dost thou want to talk to me again? What is wrong now?!\\" says William."': '"「聖者！怎麼了？為什麼你又想和我說話？現在又出什麼事了？！」William 說。"',
    '"\\"I am called William, "': '"「我叫 William，"',
    '".\\""': '"。」"',
    '"\\"I work in the sawmill here in Minoc.\\""': '"「我在 Minoc 這裡的鋸木廠工作。」"',
    '["sawmill", "Minoc"]': '["鋸木廠", "Minoc"]',
    '"sawmill"': '"鋸木廠"',
    '"\\"What a ludicrous question at a time like this! Why, I have just been given the fright of my life when I entered my sawmill and saw those two who have not only been killed quite dead, but torn apart nearly beyond recognition!\\""': '"「在這種時候問這個問題真是太荒謬了！天啊，當我走進我的鋸木廠，看到那兩個人不僅死透了，還被撕裂得幾乎無法辨認時，我簡直嚇得魂飛魄散！」"',
    '"murders"': '"謀殺"',
    '"\\"I take the logs that are made from all the trees that are cut down by the logger in Yew, and cut them into planks in the local sawmill. Then I sell the planks - mostly to Owen the shipwright, and some to the Artist\'s Guild as well.\\""': '"「我接收在 Yew 被伐木工砍下所有樹木製成的圓木，然後在當地的鋸木廠將它們切成木板。接著我出售木板——大部分賣給造船匠 Owen，也賣一些給藝術家公會。」"',
    '"\\"It was such a quiet town until these murders happened. I cannot believe it.\\""': '"「在這些謀殺案發生之前，這是一個如此安靜的城鎮。我無法相信。」"',
    '"\\"I found the bodies first thing this morning when I went to open the sawmill. It took all of the discipline I have gained from the Triad of Inner Strength and the teachings of The Fellowship to keep from going mad at the sight of it. It must have happened sometime last night but I swear to thee I never heard a thing!\\""': '"「今天早上我一去開鋸木廠的門就發現了屍體。我靠著從內在力量三位一體（Triad of Inner Strength）和兄弟會教誨中獲得的所有自律，才沒在看到那一幕時發瘋。這一定發生在昨晚某個時候，但我向你發誓我什麼都沒聽到！」"',
    '"\\"I swear by The Fellowship I have already told thee all I know concerning the murders!\\""': '"「我以兄弟會的名義發誓，我已經把我知道關於謀殺案的一切都告訴你了！」"',
    '"Fellowship"': '"兄弟會"',
    '"\\"I have been a member of The Fellowship for only a short time. I have only of late begun attending Elynor\'s meetings. Only since they announced the monument was to be built.\\""': '"「我成為兄弟會成員的時間還不長。我最近才開始參加 Elynor 的集會。就在他們宣布要建造紀念碑之後。」"',
    '"\\"I am so glad thou art my brother in The Fellowship; I know I may trust thee. It is all of the others in this town that I worry about.\\""': '"「我真高興你是我在兄弟會裡的兄弟；我知道我可以信任你。我擔心的是這鎮上的其他人。」"',
    '"\\"Wouldst thou like to know more of The Fellowship?\\""': '"「你想多了解一些兄弟會的事嗎？」"',
    '"\\"Trust me, thou canst not possibly understand how cruel and terrible life can be! Thou dost need The Fellowship! I am lucky to have found it in time to face mine own moment of truth! I hope thou dost realize that thou dost need The Fellowship before it is too late!\\""': '"「相信我，你不可能了解生活有多麼殘酷和可怕！你需要兄弟會！我很幸運能及時找到它來面對我自己的關鍵時刻！我希望你能在太遲之前意識到你需要兄弟會！」"',
    '"monument"': '"紀念碑"',
    '"\\"Thou dost know! The monument of Owen the shipwright standing on the bow of a tall ship. Everyone in town doth know of it!\\""': '"「你知道的！造船匠 Owen 站在高大船首上的紀念碑。鎮上每個人都知道！」"',
    '"As soon as he has dismissed you, the overwrought William hides his face in his hands.*"': '"一旦他打發了你，過度勞累的 William 隨即用雙手掩面。*"'
}

rep_045E = {
    '"murders"': '"謀殺"',
    '"gypsies"': '"吉普賽人"',
    '"attractive"': '"有魅力"',
    '"You see a stealthy-looking woman, dressed all in green. There is a wicked grin on her face."': '"你看到一個神情鬼祟的女人，全身穿著綠色。她臉上帶著邪惡的笑容。"',
    '"\\"How good to see thee again,\\" says Karenna."': '"「再次見到你真好，」Karenna 說。"',
    '"\\"I answer to Karenna, and to nothing else.\\""': '"「我只回應 Karenna 這個名字，其他一概不理。」"',
    '"\\"I am a teacher in Minoc, along with Jakher.\\""': '"「我是 Minoc 的教師，和 Jakher 一起。」"',
    '["teacher", "Minoc", "Jakher"]': '["教師", "Minoc", "Jakher"]',
    '"teacher"': '"教師"',
    '"\\"An odd question to ask at such a time as this, "': '"「在這種時候問這個問題真是奇怪，"',
    '". Dost thou know that two people lie dead in that sawmill and they are dead from the hand of perpetrator or perpetrators unknown?\\""': '。你知道有兩個人死在那座鋸木廠裡，而且他們死於身分不明的兇手或兇手們的手中嗎？」"',
    '"\\"Minoc was usually busy, but quiet. Then our town was bothered by this nonsense over Owen\'s monument, and now these murders.\\""': '"「Minoc 通常很忙碌，但很安靜。然後我們的城鎮就被 Owen 紀念碑這些無稽之談給困擾，現在又發生了這些謀殺案。」"',
    '["monument", "murders"]': '["紀念碑", "謀殺"]',
    '"monument"': '"紀念碑"',
    '"\\"Shocking! Such things do not normally happen here. It well proves the value of knowing how to defend oneself.\\""': '"「令人震驚！這種事通常不會發生在這裡。這充分證明了懂得如何自衛的價值。」"',
    '"\\"He is quite an able trainer in his own right. Not as skilled as myself, obviously. But I do think he is cute, though I bid thee, do not tell him that I spoke of this. It will only encourage him.\\""': '"「他本身是個相當能幹的訓練師。當然沒有我這麼熟練。但我確實覺得他很可愛，不過我求你，別告訴他我說過這事。那只會助長他的氣焰。」"',
    '"\\"Art thou speaking about me? Mine ears are burning!\\"*"': '"「你是在說我嗎？我的耳朵在發燙呢！」*"',
    '"\\"Nothing thou shouldst be concerned about, Jakher.\\" She winks at you.*"': '"「沒什麼你需要擔心的事，Jakher。」她對你眨了眨眼。*"',
    '"\\"I teach that singular skill which enables one to learn all the lessons of life without losing it in the process. Combat!~~\\"I would charge thee 20 gold for each training session. Art thou still interested?\\""': '"「我教授那種能讓人在過程中不致喪命、從而學習所有人生課題的奇特技能。戰鬥！~~「我每次訓練將向你收取 20 枚金幣。你還有興趣嗎？」"',
    '"\\"Very well. If thou art fortunate thou wilt not have cause to regret it.\\""': '"「很好。如果你運氣好，你將不會有後悔的理由。」"',
    '"\\"Our establishment is now closed. Please come by during business hours.\\""': '"「我們的店現在已經打烊了。請在營業時間過來。」"',
    '"\\"I understand it is to be thirty feet high and will display our local shipwright as he holds aloft a sextant. Thou wouldst not believe a thing as benign as this could create such trouble.\\""': '"「我聽說它會有三十英尺高，並展示我們當地的造船匠高舉六分儀的樣子。你不會相信這麼無害的東西竟然能惹出這麼大麻煩。」"',
    '"trouble"': '"麻煩"',
    '"\\"It would seem the increase in hostilities amongst the fair citizenry over our shipwright\'s monument has filled much of the local populace with a burning desire to acquire combative skills. Business has never been better!\\""': '"「看來良好市民之間對我們造船匠紀念碑日益增加的敵意，讓許多當地民眾充滿了學習戰鬥技能的強烈渴望。生意從來沒這麼好過！」"',
    '"hostilities"': '"敵意"',
    '"\\"Everyone in town is all up in arms about this and that. But surely others would know more of these local politics. I care not.\\""': '"「鎮上每個人都為了這事那事大動肝火。但其他人肯定比我更了解這些地方政治。我才不在乎。」"',
    '"\\"Jakher told thee he doth find me attractive? He denies it, of course, but I have known for years that he doth have feelings for me.\\""': '"「Jakher 告訴你他覺得我有魅力？他當然否認，但我很多年前就知道他對我有感覺。」"',
    '"\\"What? What didst thou say?\\"*"': '"「什麼？你說什麼？」*"',
    '"\\"Nothing, Jakher. Go away.\\" She giggles conspiratorally at you.*"': '"「沒事，Jakher。走開。」她對你發出心照不宣的咯咯笑聲。*"',
    '"\\"Frederico, the leader of the Gypsies, and his wife, Tania, were good people. Why, the worst thing I ever knew either of them to do was a simple prank.\\""': '"「吉普賽人的首領 Frederico 和他妻子 Tania 都是好人。哎，我所知道他們做過最糟糕的事，也不過是個簡單的惡作劇罷了。」"',
    '"prank"': '"惡作劇"',
    '"\\"Once Frederico threw a rock through the window of the local Fellowship branch... Oh, well, I thought it was amusing!\\""': '"「有一次 Frederico 丟石頭砸破了當地兄弟會分會的窗戶……喔，好吧，我覺得那滿有趣的！」"',
    '"\\"Farewell. May all thy journeys be interesting ones.\\"*"': '"「再會。願你所有的旅程都充滿樂趣。」*"'
}

translate_file('045D_zh.es', rep_045D)
translate_file('045E_zh.es', rep_045E)
print("Finished!")
