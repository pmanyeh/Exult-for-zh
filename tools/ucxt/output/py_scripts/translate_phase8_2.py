import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
files = ['044E.es', '044F.es', '0450.es']

replacements = {
    # 044E.es - Pamela
    "You see a friendly woman in her thirties.": "你看到一位年約三十多歲、和藹可親的女性。",
    "\"Greetings, again!\" Pamela says.": "「再次問候！」 Pamela 說。",
    "\"I am Pamela!\"": "「我是 Pamela！」",
    "\"I am the Innkeeper at the Out'n'Inn.\"": "「我是外宿旅店（Out'n'Inn）的老闆。」",
    "\"If thou wouldst like a room, just say so!\"": "「如果你需要房間，儘管說！」",
    "\"Please come by if thou wouldst like to rest thy weary feet for the night!\"": "「如果今晚想讓疲憊的雙腳休息一下，請過來吧！」",
    "\"The room is quite inexpensive. Only 8 gold per person. Want one?\"": "「房間相當便宜。每人只需 8 枚金幣。要一間嗎？」",
    "\"Thou art carrying too much to take the room key!\"": "「你帶太多東西了，拿不下房間鑰匙！」",
    "\"Here is thy room key. It is good only until thou leavest.\"": "「這是你的房間鑰匙。效期只到你退房為止。」",
    "\"Thou dost not have enough gold, eh? Too bad.\"": "「你沒有足夠的金幣，是嗎？真可惜。」",
    "\"Another night, then.\"": "「那麼，改天吧。」",
    "\"Well... Cove is the city of Love and Passion, didst thou not know? Thou must be careful. If thou dost stay too long in Cove, thou wilt fall in love with someone! Mark my words!\"": "「嗯……Cove 可是愛與熱情之城，你不知道嗎？你得小心點。如果你在 Cove 待太久，你會愛上某個人的！記住我的話！」",
    "\"Oooh, he is such a wonderful man, dost thou not think? He is so intense and serious. Handsome, too! Oh, and\tI like Regal as well.\"": "「喔，他真是個很棒的男人，你不覺得嗎？他既專注又認真。而且也很英俊！喔，還有我也很喜歡 Regal。」",
    "\"As far as dogs go, he is handsome, too!\"": "「就狗而言，牠也很英俊！」",
    "\"See thee soon!\"*": "「待會見！」*",
    
    # 044F.es - Zinaida
    "This beautiful, earthy woman in her forties gives you a friendly smile.": "這位年約四十多歲、美麗而質樸的女性給了你一個友善的微笑。",
    "\"Hello,\" Zinaida says.": "「你好，」 Zinaida 說。",
    "\"I am Zinaida,\" she says with a curtsey.": "「我是 Zinaida，」她屈膝行禮說道。",
    "\"I am the owner and manager of The Emerald.\"": "「我是翡翠酒館（The Emerald）的老闆兼經理。」",
    "\"If I can help thee with food or drink, please say so. I have never had a dissatisfied customer.\"": "「如果需要餐點或飲料，請告訴我。我從未有過不滿意的客人。」",
    "\"Please come to the pub when it is open and I shall be happy to serve thee!\"": "「請在酒館營業時過來，我很樂意為你服務！」",
    "\"The Emerald is pleased to serve thee the finest cuisine this side of Britain. Thou mightest wish to try the special -- Silverleaf.\"": "「翡翠酒館很高興能為你提供 Britain 這一帶最美味的佳餚。你也許會想嚐嚐我們的特餐——銀葉（Silverleaf）。」",
    "She winks at you. \"Some say it is a powerful aphrodisiac... It is delicious, regardless. It comes from the root of an exotic tree growing somewhere in Britannia.\"": "她對你眨了眨眼。「有人說它是一種強效的催情劑……不管怎樣，它非常美味。它來自生長在 Britannia 某處一種奇特樹木的根部。」",
    "\"The Emerald serves only the best wine and ale. I cannot recommend the water, however. Thanks to Lock Lake.\"": "「翡翠酒館只提供最好的葡萄酒和麥酒。不過，我不推薦這裡的水。這都拜洛克湖（Lock Lake）所賜。」",
    "\"He is the light of my life. A finer man does not exist.\" She beams.": "「他是我生命中的光。再也沒有比他更好的男人了。」她笑得合不攏嘴。",
    "\"The stench has made our water taste terrible. That mining company must cease pouring their sewage into what was once a fine lake!\"": "「那股惡臭讓我們的水變得很難喝。那家礦業公司必須停止把他們的污水倒進這個曾經美麗的湖泊裡！」",
    "\"Come again soon!\"*": "「歡迎下次再來！」*",

    # 0450.es - De Maria
    "This flamboyant bard exudes a festive aura.": "這位華麗的吟遊詩人散發著一種歡樂的氣息。",
    "\"I have sung about thee in many a song! And here thou art in the flesh! I recognized thee immediately.\" The man bows. \"Welcome, Avatar!\"": "「我在許多歌曲中都歌頌過你！而你竟然活生生地出現在這裡！我立刻就認出你了。」男人鞠躬。「歡迎，聖者！」",
    "\"Greetings again, Avatar!\" De Maria bows.": "「再次問候，聖者！」 De Maria 鞠躬。",
    "\"I am De Maria, the Bard.\"": "「我是 De Maria，吟遊詩人。」",
    "\"I spin tales and sing songs!\"": "「我編織故事，也高唱歌曲！」",
    "\"I also know a good deal about the folks in Cove.\"": "「我對 Cove 的鎮民也瞭若指掌。」",
    "\"What if I combine all three? Shall I sing a song which is a tale about the people of Cove?\"": "「如果我把這三者結合起來呢？要我唱一首關於 Cove 鎮民故事的歌嗎？」",
    "\"Very well, then!\"": "「非常好！」",
    "\"'Tis thy choice... and thy mistake!\"": "「這是你的選擇……而且是個錯誤的選擇！」",
    "\"Ah, dear Nastassia. Wouldst thou like to hear her tale?\"": "「啊，親愛的 Nastassia。你想聽聽她的故事嗎？」",
    "\"Oh. I thought thou wert curious. Never mind then.\"": "「喔。我以為你會好奇。那就算了。」",
    "\"My love! My flower! Mine angel! The provider of the sweetest nectar my mouth has ever known! She is the light of my day! The notes of my songs! The flesh of my...\"~~": "「我的愛！我的花朵！我的天使！她提供了我嘗過最甜美的甘露！她是我白晝的光芒！我歌曲的音符！我的肉體……」~~",
    "\"Enough, my love. I think the Avatar dost know thy meaning!\"*": "「夠了，親愛的。我想聖者已經明白你的意思了！」*",
    "De Maria stops his reverie, sighs, and smiles at you. \"Thou dost apprehend my meaning...\"": "De Maria 停止了他的幻想，嘆了口氣，對著你微笑。「你明白我的意思了……」",
    "\"Do take care of thyself!\"*": "「請多保重！」*",

    # Case Labels
    "room": "房間", "Out'n Inn": "外宿旅店", "Rayburt": "Rayburt",
    "food": "餐點", "Silverleaf": "銀葉", "drink": "飲料", "buy": "購買",
    "De Maria": "De Maria", "Lock Lake": "洛克湖",
    "tale": "故事", "Zinaida": "Zinaida",
}

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

print("Phase 8 part 2 translated.")
