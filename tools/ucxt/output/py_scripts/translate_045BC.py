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

rep_045B = {
    '"The Fellowship meeting is in progress, and Burnside will not speak with you now.*"': '"兄弟會集會正在進行中，Burnside 現在不會和你說話。*"',
    '"\\"I cannot speak now! I am late for the Fellowship meeting!\\"*"': '"「我現在不能說話！我參加兄弟會集會遲到了！」*"',
    '"plans"': '"設計圖"',
    '"You see an elderly man struggling to maintain a regal posture."': '"你看到一位努力維持威嚴姿態的年邁男子。"',
    '"His eyes widen at the sight of you."': '"他一看到你就睜大了眼睛。"',
    '"\\"I had heard thou were travelling in Britannia again, but it took mine own eyes to believe it! Welcome, Avatar!\\""': '"「我聽說你又在不列顛尼亞旅行了，但我親眼看到才敢相信！歡迎，聖者！」"',
    '"\\"Ahh, Avatar. Good to see thee again.\\" says Burnside."': '"「啊，聖者。很高興再次見到你。」Burnside 說。"',
    '"\\"Burnside is my name.\\""': '"「我叫 Burnside。」"',
    '"\\"I am Mayor of Minoc and have been lo these past twenty years and more.\\""': '"「我是 Minoc 的鎮長，這二十多年來一直都是。」"',
    '"\\"I beseech thee, "': '"「我懇求你，"',
    '", do show some respect for the two poor souls who have been found murdered there in William\'s sawmill.\\""': '"，請對在 William 的鋸木廠裡被謀殺的兩個可憐靈魂表現出一些尊重。」"',
    '"murders"': '"謀殺"',
    '"\\"Apart from this business of the murders we are a town run by commerce. Gold runs this town. As goes the money, so goes Minoc. Take this monument affair, for instance.\\""': '"「除了這些謀殺案，我們是一個由商業運作的城鎮。金幣驅動著這個城鎮。金錢流向哪裡，Minoc 就跟著走向哪裡。以這件紀念碑的事為例。」"',
    '["murders", "monument"]': '["謀殺", "紀念碑"]',
    '"monument"': '"紀念碑"',
    '"\\"As Frederico and Tania were not actually residents of Minoc there is little I can do as Mayor other than increase the town guard. The investigation falls somewhat beyond my jurisdiction. It would appear the killer or killers were from out of town and are probably long gone by now. Thank goodness.\\""': '"「由於 Frederico 和 Tania 實際上並非 Minoc 的居民，身為鎮長除了增加鎮守衛之外，我能做的不多。這項調查多少超出了我的管轄範圍。看來兇手是外地人，而且現在可能早就逃之夭夭了。謝天謝地。」"',
    '"\\"I am sure thou art aware of the plans for a monument of Owen, the shipwright. He is paying for it himself. I am usually against such public vanity but The Fellowship is very much in favor of it.\\""': '"「我相信你已經知道為造船匠 Owen 建立紀念碑的計畫了。他自己出錢。我通常反對這種公開的虛榮行為，但兄弟會非常贊成。」"',
    '["vanity", "Fellowship"]': '["虛榮", "兄弟會"]',
    '"vanity"': '"虛榮"',
    '"Fellowship"': '"兄弟會"',
    '"\\"This town would have been ruined if I had allowed that monument to be built, so I immediately forbade it, of course.\\""': '"「如果我允許建造那座紀念碑，這個城鎮就毀了，所以我當然立刻禁止了它。」"',
    '"\\"But in this special case it does immeasurable good for the town. It increases our prestige. People will come from all over Britannia for the unveiling.\\""': '"「但在這個特殊情況下，這對城鎮有無可估量的好處。它提升了我們的聲望。人們會從不列顛尼亞各地來參加揭幕典禮。」"',
    '"unveiling"': '"揭幕"',
    '"\\"Why, even Lord British himself will be in attendance! It is a special opportunity when one gets a private audience.\\""': '"「哎呀，就連 Lord British 本人也會出席！能獲得私下覲見是個難得的機會。」"',
    '"\\"Ah, I see thou art wearing thy Fellowship medallion. I received mine from Elynor when The Fellowship branch was first opened here a few years ago.\\""': '"「啊，我看到你戴著兄弟會的獎章了。幾年前這裡的兄弟會分會剛成立時，我是從 Elynor 那裡拿到我的獎章的。」"',
    '"\\"Yes, I wear the Fellowship medallion, given to me by Elynor. Do not worry thyself. I shall not try to make thee join!\\" He laughs nervously at his own little joke."': '"「是的，我戴著兄弟會獎章，是 Elynor 給我的。別擔心。我不會試著要你加入的！」他為了自己開的小玩笑緊張地笑了笑。"',
    '"Elynor"': '"Elynor"',
    '"\\"Elynor tells me The Fellowship will be doing good works here in the future. I am proud to be a member of thy society although I must confess to being fairly ignorant concerning thy, umm, our philosophy.\\""': '"「Elynor 告訴我兄弟會未來會在這裡做很多善事。我很自豪能成為你們協會的成員，雖然我必須承認對你們的，呃，我們的哲學相當無知。」"',
    '"member"': '"成員"',
    '"\\"Elynor says The Fellowship could bring much money into Minoc. It would be wonderful for trade. I could never let my personal feelings get in the way of the good of this town.\\""': '"「Elynor 說兄弟會能為 Minoc 帶來很多錢。這對貿易會很棒。我絕不能讓我的個人感情阻礙這個城鎮的利益。」"',
    '"feelings"': '"感情"',
    '"\\"I was given an honorary membership when the Fellowship branch was first opened in Minoc. I do not attend regular meetings. I hope thou\'rt not disappointed in me?\\""': '"「當兄弟會分會首次在 Minoc 成立時，我被授予了榮譽會員。我沒有參加定期集會。希望你對我不會太失望？」"',
    '"\\"I am sorry, Avatar. I will try to do well and be a more valuable member of the Fellowship. I beg thee, do not speak of this to Elynor.\\""': '"「我很抱歉，聖者。我會努力表現，成為兄弟會更有價值的成員。我求你，別把這件事告訴 Elynor。」"',
    '"\\"Thank heaven! I wear this medallion mainly for ceremonial purposes, as I suspect thou dost. We both see that support of The Fellowship is currently the wisest course of action politically, no matter our personal feelings.\\""': '"「感謝老天！我戴這個獎章主要是為了儀式目的，我猜你也是。我們都明白，無論個人感情如何，支持兄弟會是目前政治上最明智的做法。」"',
    '"\\"Avatar, may I tell thee a secret?\\""': '"「聖者，我可以告訴你一個秘密嗎？」"',
    '"\\"Avatar, I must confess to thee that I feel The Fellowship promotes a philosophy that is dubious at best, and its membership seems to be comprised chiefly of fools and emotional weaklings.\\""': '"「聖者，我必須向你承認，我覺得兄弟會提倡的哲學充其量只是可疑的，而且它的成員似乎主要由傻子和情感脆弱的人組成。」"',
    '"\\"Hrmph! Well, then, kindly forget mine ill-considered words!\\""': '"「哼！那麼，請忘掉我這些欠缺考慮的話吧！」"',
    '"You show the Mayor the plans Owen had drawn, making sure to carefully point out the flaws discovered by Julia. The Mayor is aghast.~~\\"This is terrible! No one must see this! It would ruin Owen and cause irreparable damage to our town if it became known that our shipwright caused those deaths!\\""': '"你向鎮長展示了 Owen 畫的設計圖，確保仔細指出 Julia 發現的缺陷。鎮長驚駭萬分。~~「這太可怕了！絕對不能讓任何人看到這個！如果大家知道我們的造船匠導致了那些人的死亡，這會毀了 Owen，並對我們的城鎮造成無法彌補的損害！」"',
    '["damage", "deaths"]': '["損害", "死亡"]',
    '"damage"': '"損害"',
    '"deaths"': '"死亡"',
    '"\\"But very few suspect the deaths are attributable to Owen\'s shipbuilding! We can destroy the plans and the truth would never get out! It would save the town from disgrace and possible ruin!\\""': '"「但很少有人懷疑那些死亡是 Owen 的造船造成的！我們可以銷毀設計圖，真相就永遠不會曝光！這能拯救城鎮免於恥辱和可能的毀滅！」"',
    '"\\"Then again, the ships Owen builds will continue to sink. It would harm Minoc even more if it were to become known as the place where the \\"death ships\\" are made. A town that built a monument to an incompetent.\\""': '"「話說回來，Owen 建造的船會繼續沉沒。如果這裡被稱為製造『死亡之船』的地方，對 Minoc 的傷害會更大。一個為無能之人建立紀念碑的城鎮。」"',
    '["deaths", "damage"]': '["死亡", "損害"]',
    '"statue"': '"雕像"',
    '"\\"There are no two ways about it. The statue must be stopped. I am hereby cancelling the erection of the statue.\\""': '"「這沒有其他辦法了。雕像必須停止。我在此宣布取消雕像的建立。」"',
    '"\\"Oh, and...er, Avatar... couldst thou please go inform Owen of this bad news for me? I am a bit busy at the moment. Besides, I think he will take it much better hearing it from thee.\\""': '"「喔，還有……呃，聖者……你能幫我去通知 Owen 這個壞消息嗎？我現在有點忙。而且，我想他從你口中聽到這件事，會比較能接受。」"',
    '"\\"A pleasure, friend Avatar. A pleasure.\\"*"': '"「這是我的榮幸，聖者朋友。這是我的榮幸。」*"'
}

rep_045C = {
    '"You see a weary-looking man who is missing his right arm. With his one hand he scratches his head and squints in your general direction."': '"你看到一個神情疲憊、失去右臂的男人。他用單手抓了抓頭，朝你的方向瞇起眼睛。"',
    '"\\"Oy, how ye been, "': '"「喂，你過得怎樣，"',
    '"?\\" Rutherford calls out to you."': '"？」Rutherford 呼喚著你。"',
    '"He lets out a sharp cough to clear his throat. \\"Rutherford\'s me name. Pleased ta meet \'chur.\\"~~ He extends his greasy hand for you to shake and does not retract it until it is clasped."': '"他發出一聲尖銳的咳嗽來清喉嚨。「我的名字是 Rutherford。很高興認識你。」~~ 他伸出油膩的手要和你握手，直到你握住他才縮回。"',
    '"\\"Why I be the barkeep of The Checquered Cork. No better place in Minoc to discuss the events of the day.\\""': '"「我可是 The Checquered Cork 的酒保。在 Minoc 討論每天發生事件的最佳去處。」"',
    '"He coughs into the rag he had just been using to polish the bar."': '"他對著剛才用來擦拭吧檯的抹布咳嗽。"',
    '"\\"Hello again, Sir Dupre! Didst thou enjoy mine establishment so much that thou hast returned?\\"*"': '"「又見面了，Dupre 爵士！你這麼喜歡我的店，所以又回來了嗎？」*"',
    '"\\"My dear Rutherford, this is not a reflection on The Checquered Cork, but I simply like a good drink!\\"*"': '"「我親愛的 Rutherford，這並不是在影射 The Checquered Cork，我只是單純喜歡好酒！」*"',
    '["Minoc", "events", "buy", "room"]': '["Minoc", "事件", "購買", "房間"]',
    '"events"': '"事件"',
    '"buy"': '"購買"',
    '"room"': '"房間"',
    '"\\"\'Tis no time for idle chatter! There have been two people murdered over at William\'s sawmill!\\""': '"「現在可不是閒聊的時候！William 的鋸木廠有兩個人被謀殺了！」"',
    '"\\"We have a cornucopian variety of elixirs to quench thy tongue and gourmet dishes to appease thy palate.\\""': '"「我們有各種豐富的靈藥可以為你解渴，還有美食可以滿足你的味蕾。」"',
    '"\\"As I have finished my workday, I ask thee to come back another time. Thou dost have my thanks.\\""': '"「因為我今天的工作已經結束了，請你下次再來吧。非常感謝你。」"',
    '"\\"A room for the night is quite reasonable. Only 8 gold per person. Want one?\\""': '"「住一晚的房間非常合理。每人只要 8 枚金幣。要一間嗎？」"',
    '"\\"Thou art carrying too much to take the room key, "': '"「你帶太多東西了，拿不了房間鑰匙，"',
    '"!\\""': '"！」"',
    '"\\"Here is thy room key. It is good only until thou dost leave.\\""': '"「這是你的房間鑰匙。這只在你離開前有效。」"',
    '"\\"Thou dost not have enough gold, eh? That be right bad.\\""': '"「你沒有足夠的金幣，是吧？那可真糟糕。」"',
    '"\\"Mayhaps another night, then.\\""': '"「也許改天晚上吧。」"',
    '"\\"If thou wouldst please make thy request at a time that was during my normal business hours, I would be most grateful.\\""': '"「如果你能在我的正常營業時間內提出請求，我會非常感激的。」"',
    '"\\"Yep, this town\'s usually bloody quiet. That was until recently!\\" His squinting eye suddenly opens wide and stares straight at you."': '"「是的，這城鎮通常非常安靜。直到最近！」他瞇著的眼睛突然睜大，直直地盯著你。"',
    '"\\"Say, when exackly again didst thou say thou didst arrive in town, stranger?\\"~~After a moment of carefully observing you, he shrugs his shoulders and goes back to wiping off the bar."': '"「話說，陌生人，你剛才是說你什麼時候抵達鎮上的？」~~在仔細觀察了你一會兒之後，他聳了聳肩，又回去擦拭吧檯了。"',
    '"\\"Before all this evil at the sawmill, the buzz were all about the monument.\\""': '"「在鋸木廠發生這些邪惡的事情之前，大家都在談論紀念碑。」"',
    '["monument", "sawmill"]': '["紀念碑", "鋸木廠"]',
    '"monument"': '"紀念碑"',
    '"sawmill"': '"鋸木廠"',
    '"\\"Well, I suppose that clears thee from the list o\' possible murderers. If\'n thou wert the murderer, thou wouldst not have to be askin\' questions o\'people about wha\' \'appened regardin\' the murders. Thou wouldst already know, havin\' been there.\\""': '"「好吧，我想這就排除了你是可能兇手的嫌疑。如果你是兇手，你就不必到處問人關於謀殺案發生了什麼事。你早就在那裡，早就知道了。」"',
    '"\\"Say, thou be not from around here?\\" He looks at you skeptically. \\"Thou art not from the Fellowship by any chance, art thou?\\""': '"「喂，你不是本地人吧？」他懷疑地看著你。「你該不會是兄弟會的人吧？」"',
    '"\\"I thought so!\\""': '"「我就知道！」"',
    '["murders", "Fellowship"]': '["謀殺", "兄弟會"]',
    '"murders"': '"謀殺"',
    '"Fellowship"': '"兄弟會"',
    '"\\"Just askin\'! Thou dost not have to take any offense!\\""': '"「只是問問！你不需要覺得被冒犯！」"',
    '"\\"I know him! He be a pirate who lives in Buccaneer\'s Den. They say Hook is so mean he\'d kill his own mudder for the right price, an\' I would wager they\'s right.~~\\"Why, I got into a fight with this Hook once. I was lucky and I escaped losin\' only my right arm and still with one good eye left. It was somewhere around that time that I started having second thoughts about my career as a pirate and now here I be."': '"「我認識他！他是個住在 Buccaneer\'s Den 的海盜。他們說 Hook 很卑鄙，只要價錢對，他連自己的親娘都會殺，我打賭他們是對的。~~「為什麼呢，我有一次和這個 Hook 打了一架。我很幸運，只失去了一條右臂，還留下一隻好眼睛。差不多就是那時候，我開始重新考慮我當海盜的職涯，然後現在我就在這裡了。」"',
    '"\\"I have not seen him recently, but the description of the murder scene certainly sounds like his handiwork!\\""': '"「我最近沒見過他，但對謀殺現場的描述聽起來絕對是他的傑作！」"',
    '"\\"That ship was, indeed, here of late. In fact, \'twas the night of the murders! Could there be a connection? Hmmm...\\""': '"「那艘船最近的確在這裡。事實上，就是謀殺案發生的那晚！這之間會有什麼關聯嗎？嗯……」"',
    '"\\"Thank goodness that with all the town at each others\' throats in recent weeks we have the Fellowship tryin\' to hold the town together. I be no member or nothin\', but I just a\'heared of all the good things they done. Feedin\' the poor an\' such.\\""': '"「謝天謝地，最近這幾週整個鎮上的人都吵得不可開交，還好有兄弟會試圖把城鎮團結起來。我不是成員什麼的，但我聽說了他們做的所有好事。像是救濟窮人等等。」"',
    '"\\"Oh, thou must mean thet statuer they are goin\' ta build of our shipwright. His name is Owen, a local boy. I understan\' it is to be as tall as a man on horseback and shows Owen gazin\' through a telerscope or some such thing like that.\\""': '"「喔，你一定是指他們要為我們的造船匠建造的那座雕像。他叫 Owen，是個本地男孩。我聽說它會有一個騎在馬上的人那麼高，並且展示 Owen 透過望遠鏡凝視之類的樣子。」"',
    '"\\"I shall see thee later... At least I will if thou dost stay in the front o\' me good eye.\\"*"': '"「晚點見……至少如果你待在我好的這隻眼睛前面，我就看得到你。」*"',
    '"Crown Jewel"': '"皇冠寶石號（Crown Jewel）"'
}

translate_file('045B_zh.es', rep_045B)
translate_file('045C_zh.es', rep_045C)
print("Finished!")
