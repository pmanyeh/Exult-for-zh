import os

filepath = r'd:\git\exult-master\tools\ucxt\output\zh_script\003\041C.es'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'var0001 = " he says in falsetto.";': 'var0001 = " 他用假音說。";',
    'message("Jesse clears his throat. \\"Hello again!\\"");': 'message("Jesse 清了清喉嚨。「哈囉，又見面了！」");',
    'message("The actor speaks in falsetto.");': 'message("男演員用假音說話。");',
    'message("\\"I am Jesse and I am a star.\\"");': 'message("「我是 Jesse ，我是一顆明星。」");',
    'message("He slaps his own face and speaks in a normal register, \\"Oops, sorry! I am so entrenched in the role that I sometimes forget that I am not a woman!\\"");': 'message("他拍了拍自己的臉，用正常的聲音說：「哎呀，抱歉！我太入戲了，有時會忘記我不是女人！」");',
    'message("\\"I work at the Royal Theatre as an actor. I have played -all- the great roles in my career. I now have the chance to play the part of a lifetime -- the Avatar!\\"");': 'message("「我在皇家劇院當演員。我在我的職業生涯中扮演過 -所有- 偉大的角色。我現在有機會扮演一生難得的角色——聖者！」");',
    'UI_add_answer(["masses", "experimental works"]);': 'UI_add_answer(["大眾", "實驗性作品"]);',
    'message("\\"Because it must cater to the masses, we never have the opportunity to do experimental works -- only the traditional gruel of mediocrity. But \'tis a wonderful space and it has marvelous acoustics.\\"");': 'message("「因為它必須迎合大眾，我們從來沒有機會做實驗性作品——只有傳統平庸的大雜燴。但這是一個很棒的空間，而且音響效果極佳。」");',
    'message("\\"People like to see tales of heroic adventures, knights in armour, beautiful princesses, wise kings, wizards, evil monsters. All that rot.\\"");': 'message("「人們喜歡看英雄冒險的故事，穿著盔甲的騎士、美麗的公主、明智的國王、巫師、邪惡的怪物。全是那一套。」");',
    'message("\\"The role is very challenging. I have a plethora of lines and I had to work with a trainer for weeks to prepare for the enormous amount of activity required. This role will make \'Jesse\' a household name!\\"");': 'message("「這個角色極具挑戰性。我有過多的台詞，而且我必須和訓練員一起工作好幾週，為所需的大量活動做準備。這個角色會讓『Jesse』家喻戶曉！」");',
    'message("\\"It is easily the most ambitious theatrical production ever conceived. There is over a hundred hours of play time. That is a long time for an audience.\\"");': 'message("「這絕對是史上構思過最具野心的戲劇製作。有超過一百個小時的演出時間。對觀眾來說那是一段很長的時間。」");',
    'message("\\"My biggest lines are:~~\\"Name!\\"~~\\"Job!\\"~~\\"Bye!\\"");': 'message("「我最重要的台詞是：~~『姓名！』~~『職業！』~~『告辭！』」");',
    'message("\\"My favorite piece is something Raymundo wrote for me entitled \'Three on a Codpiece\'. I stand on stage and invite the audience to join me in tearing an undergarment into tiny pieces, after which they are placed in funeral urns and mixed with wheat paste. The pieces of cloth, not the audience members. Then the audience may glue the pieces anywhere on my body that they wish.\\"");': 'message("「我最喜歡的作品是 Raymundo 為我寫的，名為『遮陰布上的三個（Three on a Codpiece）』。我站在舞台上，邀請觀眾加入我，把一件內衣撕成碎片，然後將它們放入骨灰罈中並與小麥糊混合。是布料的碎片，不是觀眾。然後觀眾可以把這些碎片黏在我身上他們想要的任何地方。」");',
    'message("\\"Goodbye. Be sure to come to the show when it opens!\\"*");': 'message("「再見。開演時一定要來看戲喔！」*");',
    'UI_add_answer(["challenging", "x"]);': 'UI_add_answer(["具挑戰性", "台詞"]);'
}

for eng, chi in replacements.items():
    content = content.replace(eng, chi)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

