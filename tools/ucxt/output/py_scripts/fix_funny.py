import os

path = r'd:\git\exult-master\tools\ucxt\output\zh_script\004\044A_zh.es'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

eng = r'"\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent\'s Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\""'
chi = '"「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈附近。在失落之河周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」"'

content = content.replace(eng, chi)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
