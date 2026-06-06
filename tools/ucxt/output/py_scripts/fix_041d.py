import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements_041d = {
    'message("\\"My real name is Stuart. My stage name is Laurence.\\"");': 'message("「我的真名是 Stuart 。我的藝名是 Laurence 。」");',
    'message("\\"I am the greatest actor who ever lived,\\" he proclaims with absolutely no modesty. \\"I am playing the character \'Iolo\' in the new play.\\"");': 'message("「我是有史以來最偉大的演員，」他毫不謙虛地宣布。「我在新戲裡扮演『Iolo』這個角色。」");',
    'message("\\"\'Tis the name of a particular hero of mine.\\"");': 'message("「這是我心目中一位特定英雄的名字。」");',
    'message("Stuart\'s feathers are obviously ruffled. \\"Yes. I have been cast as second banana yet again! I am much more suited to play the Avatar, but did Raymundo cast me? Noooo!\\"");': 'message("Stuart 明顯被激怒了。「是的。我又被選為配角了！我更適合扮演聖者，但 Raymundo 有選我嗎？沒——有！」");',
    'message("\\"But thou art nothing like me!\\"*");': 'message("「但你一點都不像我！」*");',
    'message("\\"And who art thou, pray tell?\\"*");': 'message("「請問你是哪位？」*");',
    'message("\\"Why, I am the -real- Iolo!\\"*");': 'message("「哎呀，我是 -真正的- Iolo ！」*");',
    'message("\\"Of course thou art. And I am really Lord British. Thou must take me for an ass to think I would believe that.\\"*");': 'message("「你當然是。而我真的是 Lord British 。你一定把我當成笨蛋，以為我會相信那種事。」*");',
    'message("Your friend whispers to you. \\"These actor types. A touchy bunch, eh?\\"*");': 'message("你的朋友對你耳語。「這些演員類型。一群敏感的傢伙，對吧？」*");',
    'UI_add_answer(["Raymundo", "Avatar"]);': 'UI_add_answer(["Raymundo", "聖者"]);',
    'case "Avatar" attend labelFunc041D_012E:': 'case "聖者" attend labelFunc041D_012E:',
    'UI_remove_answer("Avatar");': 'UI_remove_answer("聖者");',
    'message("\\"I suppose he\'s a good director. He never casts me in the right roles, though. And to think I went to school with him! We were on our first stage crew together!\\"");': 'message("「我想他是個好導演。不過他從來沒讓我演過合適的角色。想想我還和他一起上過學呢！我們曾在同一個舞台幕後工作！」");',
    'message("Stuart whispers to you, \\"Jesse is all wrong! Why, -thou- wouldst make a better Avatar than he! And -thou- probably couldst not act thy way out of a reagent bag! That is not a reflection on thee, but on Jesse.\\"");': 'message("Stuart 對你耳語：「Jesse 完全不對！哎呀，-你- 都比他更適合演聖者！而 -你- 可能連演個裝藥材的袋子都不行！這不是在說你，而是在說 Jesse 。」");',
    'message("\\"Acting is the highest form of art. It allows one to step outside oneself and become another person. \'Tis like a game!\\"");': 'message("「演戲是最高形式的藝術。它讓人能夠走出自我，成為另一個人。就像一場遊戲！」");',
    'message("\\"Goodbye. Be sure to come to the show when it opens!\\"*");': 'message("「再見。開演時一定要來看戲喔！」*");'
}

filepath_041d = os.path.join(base_dir, '041D.es')
with open(filepath_041d, 'r', encoding='utf-8') as f:
    content = f.read()
for eng, chi in replacements_041d.items():
    content = content.replace(eng, chi)
with open(filepath_041d, 'w', encoding='utf-8') as f:
    f.write(content)

replacements_041e = {
    'message("\\"I am Amber.\\"");': 'message("「我是 Amber 。」");',
    'message("\\"I am an actress at the Royal Theatre. I am playing the role of Sherry the Mouse in the new play.\\"");': 'message("「我是皇家劇院的女演員。在新戲中我扮演老鼠 Sherry 的角色。」");'
}

filepath_041e = os.path.join(base_dir, '041E.es')
with open(filepath_041e, 'r', encoding='utf-8') as f:
    content = f.read()
for eng, chi in replacements_041e.items():
    content = content.replace(eng, chi)
with open(filepath_041e, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing.")
