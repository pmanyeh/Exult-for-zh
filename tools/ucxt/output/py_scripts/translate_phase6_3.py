import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '043C.es': {
        'message(".\\"*");': 'message("。」*");',
    },
    '043D.es': {
        'message("\\"It said two words. \\"Kill Wrathy.\\" I do not know who this Wrathy person is, or why the tigerlion wanted me to kill him. But I do know I sure get worried now whenever I see moving lights in the night sky.\\"");': 'message("「它說了兩個字。『殺了 Wrathy。』我不知道這個 Wrathy 是誰，也不知道為什麼虎獅獸要我殺了他。但我知道現在每當我看到夜空中移動的光芒時，我就會感到很擔心。」");',
        'message("\\"I am sure thou dost know about the plague of looniness that has come to afflict all of the mages in the world. It was several years ago that I brought my broken hoe to a mage called Mumb. Fixing things was all he was good for anymore. There was also some fighter who wanted Mumb to enchant his sword, turning it into \\"The Sword of Death\\". It appears poor Mumb got confused and that fighter came back and killed him because the man wound up with a sword that was only good for cutting weeds. I could never figure out exactly what happened. It appears that old Mumb made mine hoe into the Hoe of Destruction! Unfortunately, the hoe is lost.\\"");': 'message("「我相信你一定知道那場折磨了世界上所有法師的瘋狂瘟疫。幾年前，我把我弄壞的鋤頭帶給一個叫 Mumb 的法師。修東西是他唯一還擅長的事。那時還有個戰士想要 Mumb 附魔他的劍，把它變成『死亡之劍』。看來可憐的 Mumb 搞混了，那個戰士回來殺了他，因為那個人最後拿到了一把只能用來除草的劍。我一直搞不清楚到底發生了什麼事。看來老 Mumb 把我的鋤頭變成了毀滅之鋤！不幸的是，這把鋤頭不見了。」");'
    },
    '0442.es': {
        'var0008 = "@Catch me if thou can!@";': 'var0008 = "@有本事就來抓我啊！@";'
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

print("Phase 6 part 3 translated.")
