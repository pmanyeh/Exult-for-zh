import os
import re

es_dir = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
zh_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\short'
main_scripts_path = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_ShortScripts.es'

replacements = {
    '" o\'clock"': '" 點鐘"',
    '"Noon"': '"正午"',
    '"Locked"': '"上鎖了"',
    '"Key inside"': '"鑰匙在裡面"',
    '"ptui!"': '"呸！"',
    '" dost thou notice the unique Iolo trademark on these bolts?  They are designed for maximum performance with genuine IOLO crossbows, available at a location near Yew.\\"': '" 注意到這些十字弓箭上獨特的 Iolo 商標了嗎？它們是專為真正的 IOLO 十字弓提供最大效能而設計的，在 Yew 附近有售。\\"',
    '" glares. \\"': '" 怒視著。\\"',
    '" into you, restoring your magical reserves, \\"': '" 注入你的體內，恢復了你的魔法儲備，\\"',
    '" is already healthy!\\"': '" 已經很健康了！\\"',
    "\"'I'm ruined,' he shouted, 'oh what'll I do! ~I'd rather be dead or go live in a zoo! ~And if anyone sees me, oh what a disgrace, ~So I'd better discover a good hiding place!'\"": "\"'我毀了，'他大喊，'喔我該怎麼辦！~我寧可死掉或去動物園裡住！~如果有人看到我，喔那多丟臉，~所以我最好找個好地方躲起來！'\"",
    '", I am sure that some brave soul will eventually come this way. After all, most of the spirits can wait for all eternity if need be, even if they are in excruciating pain.\\"': '"，我確定最終會有勇敢的靈魂來到這裡。畢竟，如有必要，大多數的靈體都能等待永恆，即使他們正處於極度的痛苦之中。\\"',
    '", I have weighed thine actions against thy former conduct. Now that I am travelling with "': '"，我已經將你現在的行為與過去的品行做了衡量。既然我正與 "',
    '", forgive me, I am not feeling very well right now. Come back later and mayhaps I\'ll feel more disposed to conversation.\\"': '"，原諒我，我現在感覺不是很舒服。晚點再來，也許我會更有心情聊天。\\"',
    '", she must needs be taken to her husband, swiftly. I trust that thou wilt do so.\\"': '"，她必須迅速被帶去見她的丈夫。我相信你會這麼做的。\\"',
    '". Time to continue the quest.\\"': '"。是時候繼續任務了。\\"',
    '"@Here kitty, kitty@"': '"@小貓咪，來這裡@"',
    '"@Meow@"': '"@喵@"',
    '"@Good doggy.@"': '"@乖狗狗。@"',
    '"@Arf@"': '"@汪@"',
    '"@Bark@"': '"@汪汪@"',
    '"@Moo@"': '"@哞@"',
    '"@Oink@"': '"@嘓@"',
    '"@Help! Help!@"': '"@救命！救命！@"',
    '"@I am leaving!@"': '"@我要走了！@"',
    '"@I am sorry, truly!@"': '"@我真的很抱歉！@"',
    '"@I can\'t pick it up.@"': '"@我拿不起來。@"',
    '"@I thought thou had it!@"': '"@我還以為你有拿！@"',
    '"@Come view the Passion Play!@"': '"@快來看受難劇！@"',
    '"@Do not quit your day job.@"': '"@別辭去你的正職啊。@"',
    '"@Everybody DANCE now!@"': '"@大家現在跳起來！@"',
    '"@Gee, is that neat.@"': '"@哇，真俐落。@"',
    '"@Looks great!@"': '"@看起來很棒！@"',
    '"@Love will show the way.@"': '"@愛會指引方向。@"',
    '"@Love. Hah!@"': '"@愛。哈！@"',
    '"@Me? Thou brought it!@"': '"@我？是你帶來的！@"',
    '"@See the Passion Play!@"': '"@來看受難劇！@"',
    '"@Stay within the lines.@"': '"@待在線內。@"',
    '"@That is perfectly good beer!@"': '"@那可是絕佳的啤酒啊！@"',
    '"@The Fellowship presents...@"': '"@兄弟會為您呈現...。@"',
    '"@The sword\'s not hot.@"': '"@劍不夠熱。@"',
    '"@There\'s not enough water.@"': '"@水不夠了。@"',
    '"@To be glad to help.@"': '"@很高興能幫忙。@"',
    '"@To have found it yet?@"': '"@找到了嗎？@"',
    '"@To have no torch.@"': '"@沒有火把。@"',
    '"@To wonder about love.@"': '"@對愛感到好奇。@"',
    '"@We shall entertain thee!@"': '"@我們將為您帶來娛樂！@"',
    '"@We\'ll never find it!@"': '"@我們永遠找不到它的！@"',
    '"@Welcome, Avatar.@"': '"@歡迎，聖者。@"',
    '"@What is it?@"': '"@那是什麼？@"',
    '"@Why dost thou not spin that wool into thread?@"': '"@你為什麼不把那些羊毛紡成線呢？@"',
    '"@Why dost thou not weave cloth with that thread on the loom?@"': '"@你為什麼不在織布機上用那條線織布呢？@"',
    '"@Why me?@"': '"@為什麼是我？@"',
    '"A look of grim determination comes to Erethian\'s lined features. He pushes up his sleeves like a blacksmith about to shoe a high strung horse,"': '"Erethian 佈滿皺紋的臉上露出冷酷堅決的神情。他捲起袖子，就像個準備為容易緊張的馬匹釘馬蹄鐵的鐵匠，"',
    '"Adjhar appears to have resumed the stance of a more traditional golem guardian -- staunch and distant. However, it is impossible to miss the glimmer of intelligence in his eyes."': '"Adjhar 似乎恢復了傳統魔像守衛的姿態——堅定而疏遠。然而，你不可能錯過他眼中閃爍的智慧光芒。"',
    '"After a short while you notice that the edge has definitely improved."': '"過了一會兒，你注意到刀刃明顯變利了。"',
    '"After learning that none of the townsfolk are willing to sacrifice themselves for a greater good, an odd light comes into Forsythe\'s eyes. His chin firms and his shoulders square.~~\\"': '"在得知沒有鎮民願意為了更大的利益犧牲自己後，Forsythe 的眼中閃爍著奇異的光芒。他下巴緊繃，肩膀挺直。~~\\"',
    '"Amidst muttered curses detailing the uselessness of ether and bothersome inter-dimensional beings, Erethian intones the magical words,"': '"在抱怨乙太的無用和討厭的跨次元生物的低聲咒罵中，Erethian 吟唱起魔法咒語，"',
    '"As the Soul Cage dissolves into dust, a great transformation comes upon the Liche. Where the evil spirit was caged you see the form of a familiar person. It\'s Horance! He\'s a ghost, but he much more resembles a man than an undead terror. "': '"隨著靈魂囚籠化為塵土，巫妖發生了巨大的轉變。在邪靈被囚禁的地方，你看到了一個熟悉的身影。是 Horance！他是個鬼魂，但他看起來更像個人類，而不是不死生物。"',
    '"At first he just stared with a wide-open mouth ~At the cloud of black smoke drifting off to the south. ~Then he felt with his paws just in back of his ears ~And he suddenly realized the worst of his fears."': '"一開始他只是張大嘴巴盯著看~看著那團飄向南方的黑煙。~然後他用爪子摸了摸耳朵後面~他突然意識到他最害怕的事情發生了。"',
    '"Batlin watches Hook\'s death with icy resignation. Time seems to slow as he turns to you. \\"': '"Batlin 以冰冷的無奈看著 Hook 死亡。當他轉向你時，時間似乎變慢了。\\"',
    '"Before you is the vile form of a liche. It remains motionless and its eyes stare straight ahead.*"': '"在你面前是巫妖邪惡的身軀。它一動也不動，眼睛直視前方。*"',
    '"Busted, you thieving scoundrel bastard! Perhaps the only thing more ridiculous than your pathetic attempt to destroy the black gate without paying proper dues is your inevitably embarassing explanation\\tto the friend to whom you are, no doubt, showing this!"': '"抓到了，你這個偷竊的無賴混蛋！也許唯一比你這不付應付代價就想摧毀黑門的可悲企圖更可笑的，就是你無可避免地要向你那位朋友做出令人尷尬的解釋，毫無疑問，你正在向他展示這個！"',
    '"Energy courses from "': '"能量湧自 "',
    '"Erethian\'s face begins to take on an ashen palor, but he looks contented with a job well done. \\"': '"Erethian 的臉色開始變得死灰，但他看起來對自己完成的工作感到滿意。\\"',
    '"For a moment Horance looks downcast. \\"': '"有一瞬間，Horance 看起來很沮喪。\\"',
    '"For the atrocious crime of cheating against the virtues of Britannia, I find you guilty.*"': '"因你違背 Britannia 美德的作弊暴行，我判你有罪。*"',
    '"Gargan coughs, wheezes, and then lights his pipe. On inhaling, he has a coughing spasm until he finally catches his breath."': '"Gargan 咳嗽、喘息，然後點燃了他的煙斗。一吸氣，他就開始痙攣性地咳嗽，直到最後才喘過氣來。"',
    '"He hands the sword to you and wearily turns away.*"': '"他把劍交給你，然後疲倦地轉過身去。*"',
    '"He hands you his personal staff. It appears to be magical."': '"他把他的個人法杖交給你。它似乎具有魔力。"',
    '"He places his personal staff on the ground. It appears to be magical.~\\"': '"他把他的個人法杖放在地上。它似乎具有魔力。~\\"',
    '"He places the sword upon the firepit and wearily turns away.\\"': '"他把劍放在火坑上，然後疲倦地轉過身去。\\"',
    '"He pulls forth a heart-shape stone and, with a final flurry of action, drops the stone upon Adjhar\'s chest as he falls dead to the ground."': '"他拿出一塊心形的石頭，在一陣最後的慌亂動作中，將石頭扔在 Adjhar 的胸膛上，然後倒地而死。"',
    '"He steps in line and motions for you to lead on.*"': '"他排進隊伍，示意你帶路。*"',
    '"He stops himself for a moment and says, \\"': '"他停頓了一下，然後說，\\"',
    '"He stops mid-spell and begins another, pointing towards the Talisman of Infinity."': '"他在咒語念到一半時停了下來，開始念另一個咒語，並指向無限護身符。"',
    '"He tilts his head and stares at you quizzicaly.~ \\"': '"他歪著頭，疑惑地盯著你。~ \\"',
    '"Horance looks as if he expected your response. \\"': '"Horance 看起來似乎早就料到你的反應。\\"',
    '"I forgive thy misrepresentation at our first meeting.\\"': '"我原諒你在我們初次見面時的誤導。\\"',
    '"It does.*"': '"的確如此。*"',
    '"Judgement rendered.* Sentence selected:* Death.*"': '"判決已定。* 選擇刑罰：* 死刑。*"',
    '"Little beads of sweat appear on the elderly mage\'s furrowed brow. \\"': '"年邁法師佈滿皺紋的眉頭上出現了小汗珠。\\"',
    '"One day as he sharpened his claws on a rock ~He received a most horrible, terrible shock. ~A flaming hot spark flew up into the air, ~Came down on his head and ignited his hair."': '"有一天，當他在岩石上磨爪子時~他受到了一個最可怕、最糟糕的驚嚇。~一顆熾熱的火星飛到半空中，~掉到他的頭上，點燃了他的頭髮。"',
    '"Rowena appears to be incapable of responding to you at the current time, or in fact anyone else for that matter.*"': '"Rowena 目前似乎無法回應你，甚至也無法回應任何其他人。*"',
    '"That last blow was perhaps a bit too hard, It\'ll take a while to hammer out the flaws."': '"最後一擊可能太重了，需要一段時間才能敲平瑕疵。"',
    '"The Liche remains motionless and seemingly unaware of your presence.*"': '"巫妖一動也不動，似乎沒有察覺到你的存在。*"',
    '"The ape-like creature slowly and cautiously walks up to you. He, or she, sniffs for a moment, and then points to the honey you are carrying."': '"像猿猴一樣的生物緩慢而小心地走向你。牠嗅了一會兒，然後指著你帶著的蜂蜜。"',
    '"The beautiful ghost appears to be incapable of responding to you at the current time, or in fact anyone else for that matter.*"': '"這個美麗的鬼魂目前似乎無法回應你，甚至也無法回應任何其他人。*"',
    '"The blade has been worked as well as it can be. It will take some form of magic to make this sword blank into a usable weapon."': '"刀刃已經被打磨得非常好了。需要某種魔法才能將這把劍胚變成可用的武器。"',
    '"The golem seems to have regained his staid composure. However, life is still evident within his gem-like eyes."': '"魔像似乎恢復了牠穩重的鎮定。然而，牠寶石般的眼睛裡依然閃爍著生命的光芒。"',
    '"The lovely ghost holds up her hand as you begin to speak, \\"': '"當你開始說話時，可愛的鬼魂舉起她的手，\\"',
    '"The wand glows faintly. Batlin smirks. \\"': '"法杖發出微弱的光芒。Batlin 假笑著。\\"',
    '"This scroll will permit thee to perform the ritual necessary to either create, or reconstruct, stone creatures and instill within them the power of thought. First, gather the materials discussed in the previous chapters. After thou hast performed said task, thou shouldst refer back to this scroll and begin..."': '"這份卷軸將允許你執行必要的儀式，以創造或重建石頭生物，並賦予它們思想的能力。首先，收集前面章節中討論的材料。完成上述任務後，你應該參考這份卷軸並開始..."',
    '"With a roar of surprise he took off like a streak, ~Away through the jungle to Zamboozi Creek. ~He leaped in kersplash! with a shower of bubbles, ~And came bobbing up with a head full of stubbles."': '"伴隨著驚訝的吼聲，他像一道閃電般飛奔而去，~穿過叢林直奔 Zamboozi 溪流。~他撲通一聲跳進水裡！濺起一陣水花，~然後頂著滿頭短毛浮出水面。"',
    '"You feel a great surge in the ether as the mage draws power from his surroundings.*"': '"當法師從周圍汲取力量時，你感覺到乙太的一陣強烈湧動。*"',
    '"You feel a great surge in the ether, which seems to temporarily stabilize it in this area.*"': '"你感覺到乙太的一陣強烈湧動，這似乎暫時穩定了這個區域的乙太。*"',
    '"You feel as if your mind is being probed, delicately at first, then with more insistance. Images of long past memories flit before your eyes and old emotions resurface. At one point, the images pause as you remember the words Love, Sol, Moons, and Death then a strange sense of deja vu comes over you as the vision comes up to the current time. The images cease and a vast wave of power overwhelms you. A wall of darkness falls..."': '"你感覺自己的大腦正在被探測，起初很輕柔，然後越來越強烈。久遠回憶的畫面在你眼前掠過，舊有的情緒重新湧上心頭。在某個時刻，畫面暫停了，你想起了愛、太陽、雙月和死亡這些詞，然後一種奇怪的既視感襲來，幻象來到了現在。畫面停止，一股巨大的力量淹沒了你。一道黑暗之牆落下..."',
    '"You feel that you\'ve done the best job that you can, but the sword doesn\'t feel quite right. It\'s much too heavy and cumbersome to wield as a weapon."': '"你覺得自己已經盡力了，但這把劍感覺還是不太對勁。作為一把武器，它太重、太笨拙了。"',
    '"You immediately recognize the resonance of a spell gone awry, and apparently so does Erethian. A look of horror comes to his wrinkled features which appear to become more lined by the second.*"': '"你立刻認出這是法術出錯的共鳴，顯然 Erethian 也察覺到了。恐懼的神色出現在他佈滿皺紋的臉上，他的皺紋似乎每一秒都在加深。*"',
    '"You see a middle-aged actress with a very serious expression. She is unable to speak with you because she is concentrating on her part in the Passion Play. Perhaps you should speak to Paul.*"': '"你看到一位表情非常嚴肅的中年女演員。她無法和你說話，因為她正專注於受難劇中她扮演的角色。也許你該去和 Paul 談談。*"',
    '"You see a short, stocky actor in his mid- to late forties. He cannot speak to you now because he is concentrating on his lines for the Passion Play. Perhaps you should speak to Paul."': '"你看到一位四十多歲、矮胖結實的男演員。他現在無法和你說話，因為他正專注於記誦受難劇的台詞。也許你該去和 Paul 談談。"',
    '"You watch in stunned horror as Bollux pierces his chest open with his fingers."': '"你驚恐地看著 Bollux 用手指刺穿自己的胸膛。"',
    '"Your mind is quickly probed, then cast aside, leaving you feeling slightly ill and filled with an irrational sense of forboding."': '"你的大腦被快速探測了一下，然後被拋開，讓你感到有些不適，並充滿了一種不理性的不祥預感。"',
    '"Now is the time for the young and the old to dig in their pockets and give up the gold. * Dost thou wish to donate a gold piece?"': '"現在是男女老少掏掏口袋，貢獻金幣的時候了。* 你願意捐獻一枚金幣嗎？"',
    '"As for me, I shall begone! Thou shalt never find me! Farewell, Avatar!"': '"至於我，我該走了！你永遠也找不到我！永別了，聖者！"'
}

import csv
import glob

csv_file = 'd:/git/exult-master/tools/ucxt/output/blackgate_functions_report_updated.csv'

# 1. Find already translated functions from CSV
translated_funcs = set()
if os.path.exists(csv_file):
    with open(csv_file, 'r', encoding='utf-8-sig', errors='ignore') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get('Translated') == 'Yes':
                func_hex = row.get('Function', '')
                if func_hex.endswith('H'):
                    func_hex = func_hex[:-1].zfill(4)
                    translated_funcs.add(func_hex)

# 2. Find scripts already included in main_*.es
included_scripts = set()
main_files = glob.glob('d:/git/exult-master/tools/ucxt/output/main_*.es')
for mfile in main_files:
    with open(mfile, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            if '#include' in line:
                match = re.search(r'([0-9A-Fa-f]{4})_zh\.es', line)
                if match:
                    included_scripts.add(match.group(1))

os.makedirs(zh_dir, exist_ok=True)

processed_files = []

for filename in sorted(os.listdir(es_dir)):
    if not filename.endswith('.es'): continue
    func_id = filename[:4]
    
    if func_id in translated_funcs or func_id in included_scripts:
        continue
    
    path = os.path.join(es_dir, filename)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    msgs = re.findall(r'(UI_item_say\(.*?\);|message\([\s\S]*?\);|var\d+ = \x22@(?:[\s\S]*?)@?\x22;)', content)
    valid_msgs = []
    for m in msgs:
        if 'message(var' not in m and 'message(\x22\x22)' not in m and not m.startswith('UI_item_say(var'):
            if re.search(r'\x22.*[a-zA-Z].*\x22', m):
                valid_msgs.append(m)
            
    if 0 < len(valid_msgs) <= 5:
        # Translate it
        original_content = content
        for eng, chi in replacements.items():
            content = content.replace(eng, chi)
        
        # Save to short/
        out_name = f"{func_id}_zh.es"
        out_path = os.path.join(zh_dir, out_name)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        processed_files.append(out_name)

# Generate main_ShortScripts.es
with open(main_scripts_path, 'w', encoding='utf-8') as f:
    f.write('// Auto-generated batch translations for short scripts (<= 5 sentences)\n')
    for script in processed_files:
        f.write(f'#include "zh_script/short/{script}"\n')

print(f"Processed {len(processed_files)} files.")
