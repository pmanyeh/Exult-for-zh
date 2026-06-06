import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\001'

trans_040F = {
    '"You see a stunningly attractive oriental woman. She is armed to the teeth."': '"你看到一位非常有魅力的東方女子。她全副武裝。"',
    '"\\"Thou dost wish to speak with me again?\\" asks Eiko."': '"「你想再跟我說話嗎？」 Eiko 問道。"',
    '"Stay thine hand!"': '"住手！"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"\\"My name is Eiko.\\""': '"「我的名字是 Eiko 。」"',
    '"\\"I have no job. I have a quest. My quest is shared with mine half-sister, Amanda.\\""': '"「我沒有職業。我有一個任務。我的任務是和我的同父異母妹妹 Amanda 一起進行的。」"',
    '"quest"': '"任務"',
    '"\\"We are leaving this dungeon now that our quest is over.\\""': '"「既然我們的任務結束了，我們現在要離開這個地城了。」"',
    '"Amanda"': '"Amanda"',
    '"\\"Eighteen years ago my father was murdered by a cyclops called Iskander Ironheart. Mine half-sister Amanda and I are his only surviving kin and we have vowed to avenge him.\\""': '"「十八年前，我的父親被一個名叫 Iskander Ironheart 的獨眼巨人謀殺了。我的同父異母妹妹 Amanda 和我是他僅存的親人，我們發誓要為他報仇。」"',
    '"father"': '"父親"',
    '"Iskander"': '"Iskander"',
    '"\\"Our father was a mage named Kalideth. He was working to find a cause of the disturbances of the ethereal waves that have been preventing magic from working for the past twenty years and more, as well as the madness that has afflicted all mages since then.\\""': '"「我們的父親是一位名叫 Kalideth 的法師。他致力於尋找引起乙太波動的原因，這些波動在過去二十多年裡一直阻礙著魔法的運作，以及自那時起折磨著所有法師的瘋狂。」"',
    '"\\"Our father was a wise and kind man. His death was a loss for all of Britannia.\\" She sniffs."': '"「我們的父親是個明智又善良的人。他的死對整個 Britannia 來說都是損失。」她抽泣著。"',
    '"\\"His killer deserves to die.\\""': '"「殺他的兇手該死。」"',
    '"\\"Neither one of us knew that the other existed until after the death of our father.\\""': '"「在我們父親去世之前，我們兩人都不知道對方的存在。」"',
    '"\\"I had always felt like I had a sister somewhere. But I attributed those feelings to the natural loneliness a child feels upon losing a father. Learning about each other has been the only good thing that has happened to me since father\'s death.\\""': '"「我總覺得我在某個地方有個妹妹。但我把這種感覺歸咎於一個孩子失去父親後感到的自然孤獨。自從父親死後，了解彼此是發生在我身上唯一的好事。」"',
    '"\\"Yes, I know I am not pronouncing it correctly. I understand he has a more human nickname that is actually a translation from the ancient cyclops language. But I do not know what it is.\\""': '"「是的，我知道我發音不正確。我了解他有一個更像人類的綽號，那實際上是從古代獨眼巨人語言翻譯過來的。但我不知道那是什麼。」"',
    '"You explain to Eiko what you have learned. Kalideth had gone mad when he fought with Iskander and the source of what is causing the problems with magic and the mage\'s minds was the thing that really killed Kalideth!"': '"你向 Eiko 解釋了你所了解到的事。 Kalideth 在和 Iskander 戰鬥時已經瘋了，而造成魔法和法師心智問題的根源才是真正殺死 Kalideth 的東西！"',
    '"\\"Then if thou hast discovered the true force that killed my father, my vengeance against Kalideth would be unjust.\\""': '"「那麼，如果你已經發現了殺死我父親的真正力量，我對 Kalideth 的復仇就是不公正的了。」"',
    '"\\"How canst thou say that? I thought that thou wert my sister? Thou art a traitor!\\""': '"「你怎麼能這麼說？我以為你是我妹妹？你是個叛徒！」"',
    '"\\"Farewell.\\""': '"「再會。」"'
}

trans_0416 = {
    '"Caroline asks you to keep your voice down. The Fellowship meeting is in progress.*"': '"Caroline 要求你壓低聲音。兄弟會的集會正在進行中。*"',
    '"\\"Oh! I cannot stop to speak with thee now! I am late for the Fellowship meeting!\\"*"': '"「噢！我現在不能停下來跟你說話！我參加兄弟會集會要遲到了！」*"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"murder"': '"謀殺案"',
    '"bye"': '"告辭"',
    '"You see a young woman with a bright smile."': '"你看到一位有著燦爛笑容的年輕女子。"',
    '"\\"Hello again!\\" Caroline says brightly."': '"「又見面了！」 Caroline 開朗地說。"',
    '"\\"My parents named me Caroline,\\" she says proudly."': '"「我父母給我取名 Caroline ，」她驕傲地說。"',
    '"\\"I have no \'job\' per se. I have devoted mine energies to helping The Fellowship. I hope to recruit new members.\\""': '"「我本身沒有『職業』。我把精力奉獻在幫助兄弟會上。我希望能招募新成員。」"',
    '"Fellowship"': '"兄弟會"',
    '"She looks concerned. \\"\'Tis awful! Christopher was a nice man. Didst thou know he was one of our members? I cannot believe he is dead...\\""': '"她看起來很擔心。「太可怕了！ Christopher 是個好人。你知道他是我們的成員之一嗎？我不敢相信他死了……」"',
    '"members"': '"成員"',
    '"\\"Of The Fellowship. We meet every night at the hall. Thou shouldst visit!\\""': '"「兄弟會的成員。我們每晚都在大廳集會。你應該來看看！」"',
    '"society"': '"協會"',
    '"philosophy"': '"理念"',
    '"\\"Every night at nine o\'clock we have a meeting in the Fellowship hall. Thou mayest consider thyself invited to attend.\\""': '"「每天晚上九點我們在兄弟會大廳都有集會。你可以當作自己受邀參加了。」"',
    '"\\"Goodbye!\\"*"': '"「再見！」*"',
    '"@Come to Fellowship Hall!@"': '"@來兄弟會大廳吧！@"',
    '"@Strive For Unity!@"': '"@為團結而奮鬥！@"',
    '"@Trust Thy Brother!@"': '"@信任你的兄弟！@"',
    '"@Worthiness Precedes Reward!@"': '"@配得才有回報！@"'
}

all_trans = {
    '040F': trans_040F,
    '0416': trans_0416
}

for fid, rep in all_trans.items():
    src_path = os.path.join(folder, fid + '.es')
    dest_path = os.path.join(out_folder, fid + '_zh.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='latin-1') as f:
            content = f.read()
        for k, v in rep.items():
            content = content.replace(k, v)
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Translated {fid}')
