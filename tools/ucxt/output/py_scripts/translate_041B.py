import re
import shutil

# Copy original file to reset
shutil.copyfile(r'd:\git\exult-master\tools\ucxt\output\es_scripts\041B.es', r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041B.es')

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041B.es', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # UI Answers
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"audition"': '"試鏡"',
    '"Miranda"': '"Miranda"',
    '"Max"': '"Max"',
    
    # Dialogues
    '"You can see the creativity literally flowing in abundance from this fellow. He looks at you with interest."':
    '"你可以看到這個人的創造力簡直源源不絕地湧現出來。他饒富興味地看著你。"',
    
    '"\\"Yes, yes?\\" Raymundo snaps. \\"What dost thou want? I\'m busy!\\""':
    '"「是，是？」 Raymundo 沒好氣地說。「你要什麼？我很忙！」"',
    
    '"\\"I am Raymundo.\\""':
    '"「我是 Raymundo 。」"',
    
    '"\\"Why, I am famous throughout the land! Hast thou not heard of me?\\""':
    '"「哎呀，我可是全國聞名的！你難道沒聽說過我嗎？」"',
    
    '"\\"I told thee so!\\"':
    '"「我早說過了吧！」',
    
    '"\\"-Really-!? I am surprised! But never mind...\\"':
    '"「-真的嗎-！？我很驚訝！不過算了...」',
    
    '"\\"I am the Director of the Royal Theatre here in Britain. I am also Playwright-in-Residence. I compose a tune now and then as well. I sometimes act, but it is not wise to act in something that one directs.~\\"':
    '"「我是 Britain 這裡皇家劇院的導演。我也是駐院劇作家。我偶爾也會作些曲子。我有時也會演戲，但演自己導的戲可不是明智之舉。~」',
    
    '"\\"We are working on a play at the moment.\\""':
    '"「我們目前正在排練一齣戲。」"',
    
    '"\\"Come by the theatre during the day and watch the rehearsals for our play.\\""':
    '"「白天來劇院看看我們排戲吧。」"',
    
    '"\\"It\'s a little something I wrote entitled \'The Trials of the Avatar\'. It\'s about a legendary figure in Britannian history.\\" The artist looks you up and down."':
    '"「這是我寫的一點小東西，名為『聖者的試煉（The Trials of the Avatar）』。這是關於 Britannia 歷史上一位傳奇人物的故事。」這位藝術家上下打量著你。"',
    
    '"\\"Hmmm. Thou dost have a certain quality... hast thou ever acted on stage?\\""':
    '"「嗯...你的確有一種特質...你曾經在舞台上演過戲嗎？」"',
    
    '"\\"I thought so!\\"':
    '"「我就知道！」',
    
    '"\\"Well, it does not matter. I am sure thou couldst quickly adapt.\\"':
    '"「嗯，沒關係。我相信你能很快適應的。」',
    
    '"\\"Officially, auditions have closed and the play is already cast. However, we need someone to understudy the role of the Avatar. Wouldst thou like to audition?\\""':
    '"「官方說法是試鏡已經結束，而且選角也完成了。然而，我們需要一個人來作為聖者這個角色的替補演員。你想要試鏡嗎？」"',
    
    '"\\"Excellent! What thou needest to do is to visit Gaye\'s Clothier Shoppe and purchase an Avatar costume. I can audition thee once I see thee in -proper- attire. Run along and do that, quickly now, I\'m a busy man.\\"*”':
    '"「太棒了！你需要做的是去 Gaye 的服裝店買一套聖者的服裝。等我看到你穿著 -合適的- 服裝後，我就可以幫你試鏡。快去辦吧，快點，我是個大忙人。」*"',
    
    '"\\"Excellent! What thou needest to do is to visit Gaye\'s Clothier Shoppe and purchase an Avatar costume. I can audition thee once I see thee in -proper- attire. Run along and do that, quickly now, I\'m a busy man.\\"*':
    '「太棒了！你需要做的是去 Gaye 的服裝店買一套聖者的服裝。等我看到你穿著 -合適的- 服裝後，我就可以幫你試鏡。快去辦吧，快點，我是個大忙人。」*',
    
    '"\\"No? Thou hast never dreamed of performing on the stage? Seeing thy name in torches? Donning the olde grease paint and wig? Bowing to thunderous applause? Well, begone then, I have not the time for chatting with the public.\\"*”':
    '"「不？你從未夢想過在舞台上表演嗎？看到你的名字在火炬下閃耀？畫上傳統的油彩妝和戴上假髮？在雷鳴般的掌聲中鞠躬？好吧，那就走吧，我沒時間和民眾閒聊。」*"',
    
    '"\\"No? Thou hast never dreamed of performing on the stage? Seeing thy name in torches? Donning the olde grease paint and wig? Bowing to thunderous applause? Well, begone then, I have not the time for chatting with the public.\\"*':
    '「不？你從未夢想過在舞台上表演嗎？看到你的名字在火炬下閃耀？畫上傳統的油彩妝和戴上假髮？在雷鳴般的掌聲中鞠躬？好吧，那就走吧，我沒時間和民眾閒聊。」*',
    
    '"\\"\'Tis a wonderful space, dost thou not think? \'Twas opened only last year, thanks to the sponsorship of a few wealthy citizens of our great city.\\""':
    '"「這是個很棒的空間，你不覺得嗎？它去年才剛開幕，這多虧了我們這座偉大城市幾位富有的市民的贊助。」"',
    
    '"\\"The construction of the actual theatre building was paid for by the Royal Mint, but the theatre company relies solely on the support of individuals such as thyself. Wouldst thou like to make a modest contribution of, say, ten gold pieces to our theatre company?\\""':
    '"「劇院建築的實際建設費用是由皇家鑄幣局支付的，但劇團完全依賴像你這樣的人的個人支持。你願意為我們的劇團做出一點微薄的貢獻，比如說，十枚金幣嗎？」"',
    
    '"\\"I thank thee. Thou hast shown thyself to be a true patron of the arts and a person of culture and refinement.\\""':
    '"「我感謝你。你已經證明了自己是一位真正的藝術贊助者，一個有教養和有品味的人。」"',
    
    '"\\"Thine unconvincing performance gave thy game away! Thou dost not have ten gold pieces!\\""':
    '"「你不具說服力的表演暴露了你的底細！你根本沒有十枚金幣！」"',
    
    '"\\"Give a man a loaf of bread and thou hast fed him for a day, give a man a play and perhaps thou hast fed his soul for a lifetime! Once thou hast seen one of our productions I am certain thou shalt reconsider.\\""':
    '"「給一個人一條麵包，你只能餵飽他一天；給一個人一齣戲，或許你已經餵飽了他的靈魂一輩子！一旦你看過我們的一部作品，我相信你一定會重新考慮的。」"',
    
    '"\\"I see thou art ready? Very well. Take center stage, wouldst thou?\\""':
    '"「我看你準備好了？很好。請走到舞台中央好嗎？」"',
    
    '"\\"Where is thy costume? Thou cannot audition without a costume!\\"*”':
    '"「你的服裝在哪裡？沒有服裝你不能試鏡！」*"',
    
    '"\\"Where is thy costume? Thou cannot audition without a costume!\\"*':
    '「你的服裝在哪裡？沒有服裝你不能試鏡！」*',
    
    '"\\"Come to the theatre during rehearsal hours, wouldst thou?\\"*”':
    '"「請在排練時間來劇院好嗎？」*"',
    
    '"\\"Come to the theatre during rehearsal hours, wouldst thou?\\"*':
    '「請在排練時間來劇院好嗎？」*',
    
    '"Raymundo takes a deep breath and smiles."':
    '"Raymundo 深吸了一口氣，笑了起來。"',
    
    '"\\"Ah, lovely woman. \'Tis a pity she is more interested in politics than the stage. But I must say that we get along famously!\\""':
    '"「啊，可愛的女人。可惜她對政治比對舞台更感興趣。但我得說，我們相處得極好！」"',
    
    '"\\"He is quite a character, is he not?\\" Raymundo\'s face fills with pride."':
    '"「他可是個很有個性的人，不是嗎？」 Raymundo 的臉上洋溢著驕傲。"',
    
    '"\\"Takes after his old man, I must say. He is sure to be a great actor. Or writer. Or director. Or producer.\\""':
    '"「得說，他真像他老爸。他肯定會成為一個偉大的演員。或者作家。或者導演。或者製作人。」"',
    
    '"\\"Well, I am really not at liberty to divulge the names of our patrons. But most of them belong to The Fellowship.\\""':
    '"「嗯，我真的無權透露我們贊助者的名字。但他們大多數都屬於兄弟會。」"',
    
    '"\\"These are people who contribute to our theatre. They come from all walks of life and have little in common besides a love of fine theatre.\\""':
    '"「這些是為我們劇院做出貢獻的人。他們來自各行各業，除了對優秀戲劇的熱愛之外，幾乎沒有什麼共同點。」"',
    
    '"\\"For non-artists, they have given generous contributions to the theatre. They are -fine- people in my book!\\" He rubs his hands with glee."':
    '"「對於非藝術家來說，他們對劇院做出了慷慨的貢獻。在我的標準裡，他們是 -好- 人！」他高興地搓著手。"',
    
    '"\\"I am not a member, though.\\""':
    '"「不過，我不是會員。」"',
    
    '"\\"Leaving? Sorry, I do not give autographs.\\"*”':
    '"「要走了？抱歉，我不簽名。」*"',
    
    '"\\"Leaving? Sorry, I do not give autographs.\\"*':
    '「要走了？抱歉，我不簽名。」*',
}

for eng, chi in replacements.items():
    content = content.replace(eng, chi)

with open(r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041B.es', 'w', encoding='utf-8') as f:
    f.write(content)
