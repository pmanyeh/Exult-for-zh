import json

file_path = 'iolo.es'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '"A rather large, familiar man looks up and sees you. The shock that is evident from his dumbfounded expression quickly evolves into delight. He smiles broadly.~~\\""': '"一位身材高大且熟悉的人抬起頭看見了你。他目瞪口呆的表情很快地轉變成了喜悅。他咧嘴大笑著。~~\\""',
    '"! If I did not trust the infallibility of mine own eyes, I would not believe it! I was just thinking to myself, \'If only the Avatar were here!\' Then...~~\\"Lo and behold! Who says that magic is dying! Here is living proof that it is not!~~ \\"Dost thou realize, "': '"！如果不是我相信自己的雙眼，我真不敢相信！我正心想：『要是聖者在這裡就好了！』然後...~~\\"你看看！誰說魔法正在消亡！這就是活生生的證明！~~ \\"你可知道，"',
    '", that it hath been 200 Britannian years since we last met? Why, thou hast not aged at all!\\""': '"，距離我們上次見面已經過了兩百個不列顛年了？為什麼你一點都沒老！\\""',
    '"Iolo winks conspiratorially. He whispers, \\"Due no doubt to the difference in the structure of time in our original homeland and that of Britannia?\\"~~He resumes speaking aloud. \\"I have aged a little, as thou canst see. But of course, I have stayed here in Britannia all this time.~~\\"Oh, but Avatar! Wait until I tell the others! They will be happy to see thee! Welcome to Trinsic!\\"*\\"': '"Iolo 眨了眨眼，神秘地低語：\\"這無疑是因為我們原本的家鄉與不列顛尼亞的時間結構不同吧？\\"~~他恢復了正常的音量。\\"如你所見，我稍微老了點。不過當然，我這段時間一直待在不列顛尼亞。~~\\"噢，不過聖者！等我告訴其他人！他們見到你一定會很高興的！歡迎來到 Trinsic！\\"*\\"',
    '"The distraught peasant interrupts Iolo. \\"Show "': '"心急如焚的農夫打斷了 Iolo 的話。\\"請帶"',
    '" the stables, milord. \'Tis horrible!\\"*\\"': '"去馬廄看看吧，大人。那裡太可怕了！\\"*\\"',
    '"Iolo nods, his joy fading quickly as he is reminded of the reason he was standing there in the first place.~~ \\"Ah, yes. Our friend Petre here discovered something truly ghastly this morning. Take a look inside the stables. I shall accompany thee.\\""': '"Iolo 點了點頭，因為想起了他站在這裡的初衷，臉上的喜悅迅速褪去。~~ \\"啊，是的。我們的朋友 Petre 今天早上發現了一些非常可怕的東西。去馬廄裡面看看吧。我會陪你一起去。\\""',
    '"Iolo takes you aside and whispers, \\"Avatar, for the sake of our mutual sanity, I strongly suggest that thou shouldst purchase a mouse.\\""': '"Iolo 把你拉到一旁低聲說：\\"聖者，為了我們共同的理智著想，我強烈建議你該去買隻滑鼠。\\""',
    '"\\"I am sorry, I do not join thieves.\\""': '"\\"很抱歉，我不會與小偷為伍。\\""',
    '"\\"All right, I suppose thou hast learned thy lesson. I shall rejoin.\\""': '"\\"好吧，我想你已經學到教訓了。我會重新加入隊伍。\\""',
    '"\\"Yes, my friend?\\" Iolo asks."': '"\\"怎麼了，我的朋友？\\" Iolo 問道。"',
    '"Your friend snorts. \\"What, art thou joking, "': '"你的朋友哼了一聲。\\"什麼，你在開玩笑嗎，"',
    '"? Thou dost not know thine old friend Iolo?\\""': '"？你認不出你的老朋友 Iolo 了嗎？\\""',
    '"\\"Thou must see for thyself, "': '"\\"你必須親自去看看，"',
    '". Brace thyself, my friend. \'Tis truly a horrible sight.\\"*\\"': '"。做好心理準備，我的朋友。那景象真的很可怕。\\"*\\"',
    '"\\"Why, right now \'tis adventuring with that most courageous of all legendary heroes, the Avatar!\\""': '"\\"當然是和傳說中最勇敢的英雄——聖者一起冒險啊！\\""',
    '"\\"Why, there is no doubt -thou- art the Avatar, "': '"\\"毫無疑問，-你- 就是聖者，"',
    '"! However, thou mayest have some trouble convincing those who do not know thy face.~~\\"Of course, thou -shouldst- be safe around thy friends!\\""': '"！不過，你可能很難說服那些不認識你長相的人。~~\\"當然，和朋友們在一起，你-絕對是-安全的！\\""',
    '"\\"Well, after all, thou hast been gone for 200 years! Most of those who would recognize thee are long gone! Sorry to be blunt and all, my friend, but there it is.\\""': '"\\"嗯，畢竟你已經離開兩百年了！大多數認得你的人早就不在了！很抱歉我說話這麼直白，我的朋友，但事實就是如此。\\""',
    '"\\"Ugly, is it not? From what I have heard, neither Christopher nor Inamo deserved so grisly a death. Thou shouldst certainly ask everyone in town about it.\\""': '"\\"很慘，對吧？據我所知，Christopher 和 Inamo 都不應該死得這麼慘。你絕對應該向鎮上的每個人打聽一下。\\""',
    '"\\"I wish thee luck in determining what is going on. I haven\'t a clue!\\" Iolo grins broadly, patting you on the back."': '"\\"祝你順利弄清楚到底發生了什麼事。我是一點頭緒都沒有！\\" Iolo 咧著嘴笑，拍了拍你的背。"',
    '"\\"Well, between thee and me, I think that he hath aged much more than I!\\""': '"\\"嗯，我們私底下說說，我覺得他看起來比我老多了！\\""',
    '"\\"Full of information, that chap. But he never seems to leave Britain anymore.\\""': '"\\"那傢伙知道很多情報。但他似乎再也不離開不列顛 (Britain) 了。\\""',
    '"\\"My liege will be enormously pleased to see thee. We should travel to Britain post haste. I am sure he can give thee some valuable information and update thee on much of what thou hast missed in the 200 years of thine absence.\\""': '"\\"陛下見到你一定會非常高興。我們應該火速前往不列顛 (Britain)。我肯定他能為你提供一些有價值的情報，並告訴你這消失的兩百年來發生了什麼事。\\""',
    '"\\"Certainly. LB is always a repository of the most amazing facts, eh? Probably something to do with listening and not always talking.\\""': '"\\"當然。LB (不列顛王) 總是有許多驚人的情報，對吧？這可能與他善於傾聽而不是總是滔滔不絕有關。\\""',
    '"\\"Right, Shamino?\\"~~Shamino grunts and turns away as Iolo grins mischievously."': '"\\"對吧，Shamino？\\"~~Shamino 咕噥了一聲轉過頭去，而 Iolo 則調皮地笑著。"',
    '"\\"Speaking of information, reminds me of something! I have a little item which might be useful to thee. \'Tis an abacus. Use it to tally up all of our gold.\\""': '"\\"說到情報，倒是提醒了我一件事！我有一個小東西可能對你有用。這是一個算盤。用它來清點我們所有的金幣吧。\\""',
    '"\\"Thou must mean Shamino and Dupre.\\""': '"\\"你一定是指 Shamino 和 Dupre。\\""',
    '"\\"Why, he is right there, "': '"\\"哎呀，他就在那裡，"',
    '".\\"*\\"': '"。\\"*\\"',
    '"\\"I am right here, "': '"\\"我就在這裡，"',
    '"\\"See? I told thee!\\""': '"\\"看吧？我早就告訴過你了！\\""',
    '"\\"I am sure we shall find him somewhere. Last I heard, he was in Jhelom. Didst thou know he was knighted?\\""': '"\\"我肯定我們會在某個地方找到他的。我最後一次聽說他是在 Jhelom。你知道他被封為騎士了嗎？\\""',
    '"\\"Hard to believe, is it not?\\""': '"\\"很難以置信，對吧？\\""',
    '"\\"It\'s true! Lord British knighted him recently. Why he did so, I cannot imagine!\\""': '"\\"這是真的！不列顛王最近封他為騎士。我真想像不到他為什麼要這麼做！\\""',
    '"\\"Thy best bet in finding that rascal is to look in Britain. He has a girlfriend employed as an actress at the Royal Theatre.\\""': '"\\"你要找那個無賴，最好去不列顛 (Britain) 看看。他有一個在皇家劇院當女演員的女朋友。\\""',
    '"\\"The town has changed little, has it not? Everyone seems a little defensive, though. When we ran into each other, I was passing through and had stopped to visit my friend Finnigan.\\""': '"\\"這城鎮變化不大，不是嗎？不過每個人似乎都有點戒備。當我們遇到彼此時，我只是路過，順道來拜訪我的朋友 Finnigan。\\""',
    '"\\"I think it best for thee to speak with them thyself. There have been many changes since last thou didst visit, Avatar. I think thou wilt feel at times a bit... well, old-fashioned.\\""': '"\\"我想最好還是你自己去和他們談談。自從你上次造訪以來，已經發生了很多變化，聖者。我想有時你會覺得自己有點... 嗯，過時了。\\""',
    '"\\"It has grown since thou last saw it. Paws is now a virtual township of Britain! It dominates the east coast of Britannia.~~\\"Lord British\'s castle is still the overwhelming feature.\\""': '"\\"自從你上次見到它之後，它又變大了。Paws 現在已經是不列顛 (Britain) 實質上的附屬城鎮了！它主宰了不列顛尼亞的東海岸。~~\\"不過不列顛王的城堡仍然是最引人注目的地標。\\""',
    '"\\"It still lies between Britain and Trinsic, but it has grown further into Britain itself.\\""': '"\\"它仍然位於不列顛 (Britain) 和 Trinsic 之間，但它已經進一步擴張到了不列顛內部。\\""',
    '"\\"He is a good man. The Mayor of Trinsic, he is. I have known him for years.\\""': '"\\"他是個好人。身為 Trinsic 的鎮長，我認識他好幾年了。\\""',
    '"\\"I did not know him, "': '"\\"我不認識他，"',
    '".\\""': '"。\\""',
    '"\\"I never spoke with him. It is truly a shame. There are not many gargoyles living amongst the humans. This will only discourage the practice even more.\\""': '"\\"我從沒跟他說過話。這真是太遺憾了。生活在人類之中的石像鬼 (Gargoyles) 本來就不多。這只會讓這種情況更加罕見。\\""',
    'Iolo looks hurt. \\"Thou dost really want me to leave?\\"': 'Iolo 看起來很受傷。\\"你真的要我離開嗎？\\"',
    '"\\"Dost thou want me to wait here or dost thou want me to go home to Yew?\\""': '"\\"你是要我留在這裡等你，還是要我回 Yew 的家？\\""',
    '"\\"Very well. I shall wait here until thou dost return and ask me to rejoin.\\"*\\"': '"\\"那好吧。我會在這裡等你，直到你回來請我重新加入。\\"*\\"',
    '"\\"Farewell, then. I shall always rejoin if thou dost so desire.\\" Iolo turns away from you.*"': '"\\"那麼，再會了。只要你希望，我隨時都願意重新加入。\\" Iolo 轉過身去。*"',
    '"\\"Whew. Thou didst frighten me!\\""': '"\\"呼，你可嚇死我了！\\""',
    '"\\"I was waiting until thou didst ask me!\\""': '"\\"我一直在等你開口呢！\\""',
    '"\\"It seems that thou hast enough members travelling with thee already! I shall wait until someone leaves the group.\\""': '"\\"看來與你同行的成員已經夠多了！我會等到有人離開隊伍時再加入。\\""',
    '"\\"Since thou wert last in Britannia, the Gargoyles have begun to integrate with the humans. Most of them live on Sutek\'s old island, which was renamed \'Terfin\'. However, thou mayest see one here and there throughout the land.\\""': '"\\"自從你上次離開不列顛尼亞後，石像鬼 (Gargoyles) 已經開始與人類融合。他們大多住在 Sutek 的舊島上，現在改名為 \'Terfin\'。不過，你偶爾還是會在各地看到一兩個。\\""',
    '"\\"I do not know much about them, except that they originated about twenty Britannian years ago. They seem to do good deeds and are looked at with favor by most everyone. They have branch offices all over Britannia. I have not personally had any dealings with them.\\""': '"\\"我對他們了解不多，只知道他們大約起源於二十個不列顛年前。他們似乎在做善事，也受到大多數人的青睞。他們在整個不列顛尼亞都有分會。不過我個人沒有和他們打過交道。\\""',
    '"\\"He is just an acquaintance.\\""': '"\\"他只是個泛泛之交。\\""',
    '"\\"\'Tis always a pleasure to speak with thee, my friend.\\"*\\"': '"\\"能和你交談總是件樂事，我的朋友。\\"*\\"',
    '"@There, there...@"': '"@別怕，別怕...@" ',
    '"@\'Tis horrible!@"': '"@這太可怕了！@"',
    '"@I know, \'tis shocking!@"': '"@我知道，這太令人震驚了！@"',
    '"@Who could have done it?@"': '"@會是誰幹的？@"',
    '"@I know not...@"': '"@我不知道...@" ',
    '"@He had no enemies...@"': '"@他沒有仇人啊...@" ',
    '"@Poor man.@"': '"@可憐的人。@" ',
    '"@What is to be done?@"': '"@該怎麼辦？@"'
}

for k, v in replacements.items():
    content = content.replace(k, v)

# Ensure the file is saved as UTF-8 without BOM, required by ucc
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
