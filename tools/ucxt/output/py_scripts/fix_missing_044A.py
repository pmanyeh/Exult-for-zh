import os

path = r'd:\git\exult-master\tools\ucxt\output\zh_script\004\044A_zh.es'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        '"\\"The big blue carpet. \'Tis a flying carpet. It does not work like it should.\\""',
        '"「那張藍色大地毯。那是一張飛行魔毯。它沒有發揮應有的功用。」"'
    ),
    (
        '"\\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent\'s Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\\""',
        '"「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈附近。在失落之河周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」"'
    ),
    (
        '"\\"Do not mention that foul mineral\'s name to me! It hast caused me much frustration! Before my mind lost me I was conducting experiments with the infernal material. But now I cannot for the life of me remember what it was I was trying to do.\\""',
        '"「別跟我提那個骯髒礦物的名字！它讓我感到非常挫折！在我喪失記憶之前，我正用那種地獄般的材料進行實驗。但現在我怎麼也想不起我當時想做什麼了。」"'
    ),
    (
        '"\\"I wrote them all down in my notebook, which is somewhere around here. Thou art welcome to look at it. But stay away from that damned transmuter -- \'tis dangerous!\\""',
        '"「我都把它們寫在我的筆記本裡了，就在這附近的某處。歡迎你隨便看。但遠離那個該死的轉換器——那很危險！」"'
    ),
    (
        '"\\"\'Tis that wand-like thing. It was supposed to magnetize and magically transmute blackrock, but it doth not work correctly. Try pointing it at a piece of blackrock and thou wilt see what I mean. But do not stand too close! Thou art welcome to take it if thou dost want a piece of garbage!\\""',
        '"「就是那個像法杖的東西。它本應該能磁化並神奇地轉換黑石，但它無法正常運作。試著把它指向一塊黑石，你就會明白我的意思。但別站得太近！如果你想要一件垃圾，歡迎你拿走！」"'
    )
]

for eng, chi in replacements:
    content = content.replace(eng, chi)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed 044A.es")
