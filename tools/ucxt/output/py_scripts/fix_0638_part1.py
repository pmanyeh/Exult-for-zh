import os

file_path = r"d:\git\exult-master\tools\ucxt\output\zh_script\Books\0638.es"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    # 0x0090
    "@Odd. The page is smudged with dirt here. I cannot make out this text.@": "@奇怪。這頁沾滿了污垢。我看不出這段文字。@",
    "@Why, a page has fallen out of the book!@": "@咦，書裡掉出了一頁！@",
    "This is @not a @valid book": "這@不是@一本有效的書",

    # 0x0064 The Dragon Compendium
    "~~ ~~THE DRAGON COMPENDIUM~~ ~~by Perrin*": "~~ ~~龍類圖鑑~~ ~~Perrin 著*",
    "     Found almost exclusively in the dungeon Destard, dragons are an ancient race of large reptiles. They possess great intelligence, and a few also use magic, sometimes summoning other creatures to fight with -- or for -- them in battle.~": "     幾乎只在 Destard 地城中被發現，龍是一種古老的大型爬蟲類種族。牠們擁有極高的智商，其中少數還會使用魔法，有時會召喚其他生物與牠們一同戰鬥——或是為牠們戰鬥。~",
    "     However, in combat, they are quite formidable without any aid, for in addition to their sharp claws and the rows of razor-like teeth that fill their maws, they are capable of producing large clouds of fiery death. That, combined with their ability to become invisible makes them more than a match for any foolish enough to cross one.~": "     然而，在戰鬥中，即使沒有任何援助，牠們也相當難以對付。因為除了鋒利的爪子和滿口如剃刀般的牙齒外，牠們還能噴吐出大片致命的火焰。這點，再加上牠們隱形的能力，讓牠們足以應付任何愚蠢到敢於招惹牠們的人。~",
    "     Shouldst one ever be found that is willing to bargain with thee, I strongly suggest doing so, for very few can survive a battle with one of these terrible lizards, and even fewer can emerge victorious.": "     如果你能找到一隻願意與你談判的龍，我強烈建議你這麼做，因為很少有人能在與這些可怕蜥蜴的戰鬥中倖存下來，更不用說取得勝利了。",

    # 0x0065 The Journal of Garret Moore
    "~~ ~~THE JOURNAL OF GARRET MOORE*": "~~ ~~Garret Moore 日記*",
    "Day 1: I arrived upon this forsaken isle.~~": "第 1 天：我抵達了這座被遺棄的島嶼。~~",
    "Day 3: Found the ruins of an edifice. A tower?~~": "第 3 天：發現了一座建築的廢墟。是座塔？~~",
    "Day 4: Need shelter. Beginning to rebuild the tower.~~": "第 4 天：需要庇護所。開始重建這座塔。~~",
    "Day 7: Tower.~~": "第 7 天：塔。~~",
    "Day 12: Tower.~~": "第 12 天：塔。~~",
    "Day 21: Basic support foundation almost completed. Moving from temporary shelter tomorrow.~~": "第 21 天：基礎支撐幾乎完成。明天從臨時庇護所搬離。~~",
    "Day 29: Expanding tower. Began research and experiments to produce livestock breeds for food.~~": "第 29 天：擴建塔樓。開始研究與實驗，以繁殖作為食物的家畜品種。~~",
    "Day 45: Tower complete. Near miss with experiments. Life soon, I am sure of it!~~": "第 45 天：塔樓完工。實驗差點就成功了。很快就會有生命誕生，我確信！~~",
    "Day 73: I have done it! A combination of cells that reproduce without my assistance! Self-sustaining life is not far away!~~": "第 73 天：我成功了！一種不需我協助就能繁殖的細胞組合！自給自足的生命不遠了！~~",
    "Day 97: I am near the answer, there is no doubt. But there are others who would see me fail! They change the sky to purple and hurl bolts of lightning towards me.~~": "第 97 天：我接近答案了，毫無疑問。但還有其他人想看我失敗！他們把天空變成紫色，並向我投擲閃電。~~",
    "Day 111: The others still seek to thwart me! I hear their voices commanding me to cease. I will never rest until I am done!~~": "第 111 天：其他人仍在試圖阻撓我！我聽到他們的聲音命令我停止。在我完成之前，我絕不休息！~~",
    "Day 101: Again they come. They have sent a succubus to tempt me. \"Kiss me, kiss me,\" is all she would say. \"Nay\" was my reply. I will be strong!~~": "第 101 天：他們又來了。他們派出了一個魅魔來誘惑我。「吻我，吻我，」這是她唯一會說的話。「不，」是我的回答。我會堅強的！~~",
    "Day 40232: Hah! The voices now beg, but I will not finish until he is gone. The night is my haven and the dogs will bark!~~": "第 40232 天：哈！那些聲音現在在乞求，但在他離開之前我不會結束。夜晚是我的避風港，狗兒會吠叫！~~",

    # 0x0066 The Transitive Vampire
    "~~ ~~THE TRANSITIVE VAMPIRE, by Karen Elizabeth Gordon*": "~~ ~~變形吸血鬼，Karen Elizabeth Gordon 著*",
    "     This richly-detailed tome is a \"handbook of grammar for the Innocent, the Eager, and the Doomed.\"": "     這本細節豐富的厚書是「一本為無辜者、渴望者與在劫難逃者準備的文法手冊。」",

    # 0x0067 The Tome of the Dead
    "~~ ~~THE TOME OF THE DEAD~~ ~~by Suvol Shadowface*": "~~ ~~亡者之書~~ ~~Suvol Shadowface 著*",
    "     The crinkled pages of this book appear to be made of an odd sort of leather. It contains various essays concerning the treatment of the deceased, especially the bodily remains.": "     這本書皺巴巴的書頁似乎是由一種奇特的皮革製成的。它包含了各種關於如何處理死者，特別是遺體的文章。",
    "     One chapter is entitled 101 uses for the human heart. Another passage describes the method by which human skin is tanned and pressed for use as writing material...": "     其中一章名為《人類心臟的 101 種用途》。另一段落描述了如何將人皮揉製並壓實，作為書寫材料的方法……",

    # 0x0068 Artifacts of Darkness
    "~~ ~~ARTIFACTS OF DARKNESS~~ ~~by Mordra Morgaelin*": "~~ ~~黑暗神器~~ ~~Mordra Morgaelin 著*",
    "     Within the pages of this handwritten book are many references to devices of destructive power. Amongst them are Mondain's Skull and Gem of Immortality, Minax's Crystal Ring, and the Dark Core of Exodus' memories.": "     在這本手抄書的書頁中，有許多關於具有毀滅性力量裝置的參考。其中包括了 Mondain 的頭骨與不朽寶石、Minax 的水晶戒指，以及 Exodus 記憶的黑暗核心。",
    "     More recent entries describe the Crown of the Liche King, the Well of Souls, and a mysterious Blackrock Sword which apparently has the power to slay even one so powerful as Lord British.": "     較近期的條目描述了巫妖王之冠、靈魂之井，以及一把神秘的黑岩劍，顯然這把劍擁有能夠殺死像 Lord British 這樣強大人物的力量。",
    "     A short essay, involving a metal plate hung above a door, explains what seems to be a far simpler method of dispatching the noble monarch.": "     一篇簡短的文章提到一塊掛在門上方的金屬板，解釋了一種似乎更簡單的方法來解決這位高貴的君主。",

    # 0x0069 The Light Until Dawn
    "~~ ~~THE LIGHT UNTIL DAWN~~ ~~by Drennal*": "~~ ~~黎明之光~~ ~~Drennal 著*",
    "     Herein is the short book that discusses both moons of Britannia, Trammel and Felucca, in detail, explaining their orbits, approximate sizes, and expected compositions. In addition, there is a short essay about the possibility of people who live on these moons, and how to contact them. The work also includes a short story about a sorceress who discovers a way to change the color of Felucca. After testing her observations, she quickly learns that the changes have little affect on anything or anyone.": "     這是一本簡短的書，詳細探討了不列顛尼亞的兩顆月亮：Trammel 和 Felucca，解釋了它們的軌道、大致大小及預期的成分。此外，還有一篇短文討論了這些月球上是否可能有人居住，以及如何聯繫他們。這部作品還包含了一個關於一位女巫發現改變 Felucca 顏色方法的短篇故事。在測試了她的觀察後，她很快就了解到這些改變對任何人或事物都沒有什麼影響。",

    # 0x006A Codavar
    "~~ ~~CODAVAR~~ ~~by Nexa*": "~~ ~~Codavar~~ ~~Nexa 著*",
    "     Within the pages of this novel is the parable of an usurping lord seemingly inspired by Blackthorn's tyrranical rule during Lord British's disappearance more than two hundred years ago.": "     這本小說的書頁中包含了一個關於篡位領主的故事，似乎是受到兩百多年前 Lord British 失蹤期間 Blackthorn 暴虐統治的啟發。",

    # 0x006B Ritual Magic
    "~~ ~~RITUAL MAGIC~~ ~~by Nicodemus*": "~~ ~~儀式魔法~~ ~~Nicodemus 著*",
    "     The ability to combine one's power with that of another mage's is fundamental to the casting of enchantments. While standing in an outer triangle of a pentagram, up to five wizards may enhance the effects of their spells. The bloodletting from either a goat, sheep, or cat -- one per mage -- is necessary, in addition to the consumption of the secretion of a type three acid slug.~": "     將自身力量與另一位法師力量結合的能力，是施展結界的基礎。站在五芒星外圍的三角形中，最多五名巫師可以增強他們法術的效果。必須從山羊、綿羊或貓中放血——每位法師一隻——此外還要消耗第三型酸性蛞蝓的分泌物。~",
    "     Once all the materials are gathered, each mage must stand within one of the five corners of a pentagram drawn from the dust of a dragon's thigh bone...": "     一旦所有材料收集齊全，每位法師必須站在由龍腿骨粉末畫成的五芒星的五個角落之一……",

    # 0x006C Pathways of Planar Travel
    "~~ ~~PATHWAYS OF PLANAR TRAVEL~~ ~~by Nicodemus*": "~~ ~~位面旅行途徑~~ ~~Nicodemus 著*",
    "     Herein are the many complex formulae necessary for travel between and through the many diverse planes of existence. Each plane is accessed by a moongate, and even our very own Lord British came to Britannia from one of these planes via a moongate.~": "     這裡有許多在眾多不同存在位面之間旅行和穿越所需的複雜公式。每個位面都由月門進入，甚至我們自己的 Lord British 也是通過月門從這些位面之一來到不列顛尼亞的。~",
    "     However, this also leads to some concern. To this point, every individual who has entered Britannia from another plane has been benevolent (most notably Lord British and the Avatar). But if they have the ability to employ these gates, is there not the chance that other, evil beings might, too, be able to venture into our fair lands at their whimsy? A thought to be considered for the future.": "     然而，這也引發了一些擔憂。到目前為止，每一個從其他位面進入不列顛尼亞的人都是仁慈的（最著名的是 Lord British 和聖者）。但如果他們有能力使用這些傳送門，難道就沒有其他邪惡的生物也可能隨意闖入我們這片美好土地的機會嗎？這是一個未來必須考慮的問題。",

    # 0x006D Enchanting Items for Household Use
    "~~ ~~ENCHANTING ITEMS FOR HOUSEHOLD USE~~ ~~by Nicodemus*": "~~ ~~家用物品附魔~~ ~~Nicodemus 著*",
    "     Found upon the pages of this tome are many a recipe for the creation of \"mundane\" magic utensils and apparatuses, including such items as the SELF-PROPELLED BROOM, the GHOST WRITING QUILL, and the ALARM GEM.": "     在這本書中，可以找到許多創造「日常」魔法用具和儀器的配方，包括自動掃帚、幽靈書寫羽毛筆和警報寶石等物品。",
    "Toward the unfinished end of the book, the entries become erratic and almost unreadable, as if written down in a hurry. Many of the latter items seem a little demented: the GIANT OBSIDIAN FLYSWATTER, the EXPLODING CORNCOB HOLDER, and the COMB OF MANY BLADES. It would seem that this mage was not conjuring with all of his reagents.": "在書本未完成的結尾部分，內容變得不穩定且幾乎難以辨認，彷彿是匆忙寫下的。後面的許多物品似乎有些瘋狂：巨大的黑曜石蒼蠅拍、會爆炸的玉米棒架，以及多刃梳子。看來這位法師在施法時可能並沒有準備好他所有的施法材料。",

    # 0x006E Miscellaneous Cantrips
    "~~ ~~MISCELLANEOUS CANTRIPS~~ ~~Anonymous*": "~~ ~~雜項小戲法~~ ~~佚名*",
    "     As the title says, this book describes the minor spells that fall into the bailiwick of charlatans and prestidigitators.": "     如標題所示，這本書描述了屬於江湖騙子和魔術師職責範圍內的小法術。",

    # 0x006F Modern Necromancy
    "~~ ~~MODERN NECROMANCY~~ ~~by Horance*": "~~ ~~現代死靈法術~~ ~~Horance 著*",
    "     The author of this poetic treatise attempts to show how necromancy has been maligned throughout the years and explains the beneficial knowledge that can be garnered by studying the effects of magic on a lifeless corpse, including the more recent art of returning life to a dead companion, known as resurrection.": "     這本充滿詩意的論文作者試圖展示死靈法術多年來是如何被污名化的，並解釋了透過研究魔法對無生命屍體的影響可以獲得的有益知識，其中包括最近一種將生命歸還給已死同伴的技藝，也就是所謂的復活。",

    # 0x0070 The Symbology of Runes
    "~~ ~~THE SYMBOLOGY OF RUNES~~ ~~by Smidgeon the Green*": "~~ ~~符文符號學~~ ~~Smidgeon the Green 著*",
    "     Found within is the complete dictionary of terms for understanding and translating runes. In addition, the work discusses in depth the relation between runes and magic. Based on the intense text within, it would seem that the author is either a profound dolt or a simple genius.": "     裡面可以找到用於理解和翻譯符文的完整術語詞典。此外，這部作品深入探討了符文與魔法之間的關係。從裡面強烈的文字來看，作者要麼是個徹頭徹尾的笨蛋，要麼就是個單純的天才。",

    # Inns
    "~~ ~~THE BUNK AND STOOL": "~~ ~~THE BUNK AND STOOL",
    "~~ ~~Register*": "~~ ~~登記簿*",
    "~ ~Dosklin of Vesper~~Lord Shamino~~Erstran of Moonglow~~Aaron of Britain~~Karman of Buccaneer's Den~~The Avatar...": "~ ~來自 Vesper 的 Dosklin~~Shamino 領主~~來自 Moonglow 的 Erstran~~來自 Britain 的 Aaron~~來自 Buccaneer's Den 的 Karman~~聖者……",

    "~~ ~~THE MODEST DAMSEL": "~~ ~~THE MODEST DAMSEL",
    "~ ~Sir Dupre~~Lord Iolo~~Rasmereng of Britain~~Hetteth of Paws~~Dukat of New Magincia~~Newon of Britain...": "~ ~Dupre 爵士~~Iolo 領主~~來自 Britain 的 Rasmereng~~來自 Paws 的 Hetteth~~來自 New Magincia 的 Dukat~~來自 Britain 的 Newon……",

    "~~ ~~THE CHECQUERED CORK": "~~ ~~THE CHECQUERED CORK",
    "~ ~Sars of Yew~~Lord Shamino~~Sir Dupre~~Keth of Moonglow~~Darek~~ Vinder of Jhelom...": "~ ~來自 Yew 的 Sars~~Shamino 領主~~Dupre 爵士~~來自 Moonglow 的 Keth~~Darek~~來自 Jhelom 的 Vinder……",

    "~~ ~~THE HONORABLE HOUND": "~~ ~~THE HONORABLE HOUND",
    "~ ~Walter of Britain~~Jaffe of Yew~~Jaana~~Atans of Serpent's Hold...": "~ ~來自 Britain 的 Walter~~來自 Yew 的 Jaffe~~Jaana~~來自 Serpent's Hold 的 Atans……",

    "~~ ~~THE OUT'N'INN": "~~ ~~THE OUT'N'INN",
    "~ ~Tyors of Britain~~Kellin of Buccaneer's Den~~Sir Dupre~~Wentok of Trinsic~~Uberak of Minok...": "~ ~來自 Britain 的 Tyors~~來自 Buccaneer's Den 的 Kellin~~Dupre 爵士~~來自 Trinsic 的 Wentok~~來自 Minoc 的 Uberak……",

    "~~ ~~THE WAYFARERER'S INN": "~~ ~~THE WAYFARERER'S INN",
    "~ ~John-Paul of Serpent's Hold~~Horffe of Serpent's Hold~~Featherbank of Moonglow~~Tervis of Buccaneer's Den~~Lord Shamino...": "~ ~來自 Serpent's Hold 的 John-Paul~~來自 Serpent's Hold 的 Horffe~~來自 Moonglow 的 Featherbank~~來自 Buccaneer's Den 的 Tervis~~Shamino 領主……",

    "~~ ~~THE FALLEN VIRGIN": "~~ ~~THE FALLEN VIRGIN",
    "~ ~Carson of Minoc~~Lord Iolo~~Lady Gwenno~~Yethrod of Britain~~Addom of Yew...": "~ ~來自 Minoc 的 Carson~~Iolo 領主~~Gwenno 女士~~來自 Britain 的 Yethrod~~來自 Yew 的 Addom……",

    "~~ ~~THE SALTY DOG": "~~ ~~THE SALTY DOG",
    "~ ~Addom of Yew~~The Avatar~~Jalal of Britain~~Tim of Yew~~Blorn of Vesper~~Sir Dupre~~Penelope of Cove...": "~ ~來自 Yew 的 Addom~~聖者~~來自 Britain 的 Jalal~~來自 Yew 的 Tim~~來自 Vesper 的 Blorn~~Dupre 爵士~~來自 Cove 的 Penelope……",

    # 0x0078 Mining log
    "BRITANNIAN MINING COMPANY ~~ ~~log.": "不列顛尼亞礦業公司 ~~ ~~日誌。",
    "... Iron Ore -- 30 tons~~Lead -- 24 tons~~Iron Ore -- 27 tons~~ B.R. -- 2 tons~~Lead -- 14 tons~~Lead -- 37 tons~~Iron Ore -- 26 tons ~~B.R. -- 3 tons~~Iron Ore -- 31 tons...": "……鐵礦——30 噸~~鉛礦——24 噸~~鐵礦——27 噸~~黑岩——2 噸~~鉛礦——14 噸~~鉛礦——37 噸~~鐵礦——26 噸~~黑岩——3 噸~~鐵礦——31 噸……",

}

for old, new in replacements.items():
    content = content.replace(f'message("{old}");', f'message("{new}");')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

