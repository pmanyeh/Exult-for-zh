import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '0426.es': {
        'message("\\"Why, I run the Provisioner\'s Shop here in Britain. A second home to the intrepid, it is.\\"");': 'message("「哎呀，我在 Britain 這裡經營雜貨店。這是無畏勇者的第二個家。」");',
        'message("\\"Why, thou dost look to be a person to whom adventure is no stranger. Whether thou art climbing a mountain, sailing the ocean, crossing a desert, exploring a dungeon or sleeping under the stars I have just what thou mayest need.\\"");': 'message("「哎呀，你看起來像是一個對冒險毫不陌生的人。無論你是在爬山、航行在海洋、穿越沙漠、探索地城或在星空下露宿，我都有你可能需要的東西。」");',
        'message("\\"I have moved my store here as a service to Lord British, who uses me exclusively to outfit all of his various expeditions. It is true!\\"");': 'message("「我把我的店搬到這裡，是為了服務 Lord British ，他專門委託我為他的各種探險隊提供裝備。這是真的！」");'
    },
    '0428.es': {
        'message("\\"Thou mightest know him. He is Patterson, the Town Mayor. He is an intelligent and honest man, but we have our differences.~~\\"I do not know why I am telling thee all of this!\\"");': 'message("「你可能認識他。他是城鎮市長 Patterson 。他是個聰明誠實的人，但我們之間存在分歧。~~「我不知道我為什麼要告訴你這些！」");',
        'message("\\"Well, for one thing, he is a member of that group, The Fellowship. Another thing is that he does not spend too much time at home. I cannot believe he works so much.\\"");': 'message("「嗯，首先，他是那個團體『兄弟會』的成員。另一件事是他很少待在家裡。我真不敢相信他工作那麼辛苦。」");',
        'message("\\"They seem to have taken over our lives. They seem to have taken over our country!\\"");': 'message("「他們似乎已經接管了我們的生活。他們似乎已經接管了我們的國家！」");',
        'message("\\"He is always saying he has to work late. Some nights he comes home before dawn. Other nights he is out the entire night.~~\\"Well, I must not think about it. I only become saddened. I must concentrate on my music.\\"");': 'message("「他總是說他得工作到很晚。有些晚上他在黎明前回家。其他晚上他整夜都在外面。~~「嗯，我不能去想這件事。我只會感到難過。我必須專心於我的音樂。」");',
        'message("Judith goes back to her instrument after a smile and a wave.*");': 'message("Judith 帶著微笑並揮了揮手後，回到了她的樂器旁。*");'
    },
    '0429.es': {
        'message("\\"Oh! I must not stop to speak with thee! I am late for a Fellowship meeting!\\"*");': 'message("「喔！我不能停下來跟你說話！我去參加兄弟會聚會要遲到了！」*");'
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

print("Missed translations complete.")
