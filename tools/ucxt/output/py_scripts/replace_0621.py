import os

file_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\short\0621_zh.es'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '"Perhaps thou shouldst use the crystal ball."': '"或許你應該使用水晶球。"',
    '"Are we there yet?"': '"我們到了嗎？"',
    '"I could use a drink."': '"我需要喝一杯。"',
    '"I am too old for this."': '"我老了，受不了這個了。"',
    '"I heard something!"': '"我聽到了什麼聲音！"',
    '"Oh no! Not more rain!"': '"喔不！別再下雨了！"',
    '"We could use swamp boots!"': '"我們需要沼澤靴！"',
    '"When can we rest?"': '"我們什麼時候能休息？"',
    '"This is Dungeon Destard."': '"這裡是 Destard 地城。"',
    '"This is Dungeon Despise."': '"這裡是 Despise 地城。"',
    '"This is Dungeon Deceit."': '"這裡是 Deceit 地城。"',
    '"This is Bee Cave."': '"這裡是蜜蜂洞穴。"',
    '"This is the Minoc Mine."': '"這裡是 Minoc 礦坑。"',
    '"This is the Vesper Mine."': '"這裡是 Vesper 礦坑。"',
    '"This looks interesting."': '"這看起來很有趣。"',
    '"This place is creepy."': '"這個地方真讓人毛骨悚然。"',
    '"Wow...!"': '"哇...！"',
    '"Let\'s sing a sea shanty!"': '"我們來唱首船歌吧！"',
    '"Let us win some gold!"': '"讓我們贏點金幣吧！"',
    '"Avatar, they are doing a play about thee!"': '"聖者，他們在演一齣關於你的戲呢！"',
    '"Britain sure is big!"': '"Britain 真大！"',
    '"Be most careful. Who knows what may be lurking amongst the trees..."': '"千萬要小心。誰知道樹叢裡潛伏著什麼..."',
    '"Brushed up on thy Gargish?"': '"複習好你的石像鬼語了嗎？"',
    '"Real fighters live here!"': '"真正的戰士住在這裡！"',
    '"Thy old relics are here!"': '"你的舊遺物在這裡！"',
    '"That bread smells good..."': '"那麵包聞起來好香..."',
    '"That food smells good..."': '"那食物聞起來好香..."',
    '"That fruit looks good..."': '"那水果看起來很好吃..."',
    '"I am getting sleepy..."': '"我開始睏了..."',
    '"The Shrine of Compassion!"': '"慈悲（Compassion）神殿！"',
    '"The Shrine of Honesty!"': '"誠實（Honesty）神殿！"',
    '"The Shrine of Justice!"': '"正義（Justice）神殿！"',
    '"The Shrine of Spirituality!"': '"靈性（Spirituality）神殿！"',
    '"The Shrine of Honor!"': '"榮譽（Honor）神殿！"',
    '"The Shrine of Valor!"': '"勇氣（Valor）神殿！"',
    '"The Shrine of Sacrifice!"': '"犧牲（Sacrifice）神殿！"',
    '"The Shrine of Humility!"': '"謙卑（Humility）神殿！"',
    '"Watch for bridge trolls."': '"小心橋上的巨魔。"',
    '"Ah, home sweet home."': '"啊，甜蜜的家。"',
    '"The noise! Agh! It hurts!"': '"這噪音！啊！好痛！"',
    '"You left the small sphere!"': '"你留下了小圓球！"',
    '"You left the small cube!"': '"你留下了小方塊！"',
    '"You left the small tetrahedron!"': '"你留下了小四面體！"'
}

for old_str, new_str in replacements.items():
    content = content.replace(old_str, new_str)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("0621_zh.es replaced.")
