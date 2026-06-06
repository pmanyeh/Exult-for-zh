import os

trans_dict = {
    '"\\"Which circle art thou interested in?\\""': '"「你對哪一環的法術感興趣？」"',
    '"\\"In which circle dost thou wish to study?\\""': '"「你想研究哪一環的法術？」"',
    '"none"': '"再看看"',
    '"nothing"': '"再看看"',
    '"First"': '"第一環"',
    '"Second"': '"第二環"',
    '"Third"': '"第三環"',
    '"Fourth"': '"第四環"',
    '"Fifth"': '"第五環"',
    '"Sixth"': '"第六環"',
    '"Seventh"': '"第七環"',
    '"Eighth"': '"第八環"',
    '"\\"What spell wouldst thou like to buy?\\""': '"「你想購買什麼法術？」"',
    '"\\"Fine.\\""': '"「好吧。」"',
    '"\\"The "': '"「"',
    '" spell will cost "': '"，這法術要花費 "',
    '" gold.\\""': '" 個金幣。」"',
    '"\\"Done!\\""': '"「成交！」"',
    '"\\"Thou dost not have a spellbook.\\""': '"「你沒有法術書。」"',
    '"\\"Thou dost not have enough gold for that!\\""': '"「你的金幣不足以支付這個！」"',
    '"\\"Thou dost already have that spell!\\""': '"「你已經擁有那個法術了！」"',
    '"\\"Wouldst thou like another spell?\\""': '"「你還需要別的法術嗎？」"',
    '"\\"Would you like another spell?\\""': '"「你還需要別的法術嗎？」"',
    
    '"Light"': '"Light(亮光術)"',
    '"Create Food"': '"Create Food(製造食物)"',
    '"Cure"': '"Cure(醫療)"',
    '"Detect Trap"': '"Detect Trap(偵測陷阱)"',
    '"Great Douse"': '"Great Douse(大熄滅術)"',
    '"Locate"': '"Locate(定位術)"',

    '"Wizard Eye"': '"Wizard Eye(巫師眼)"',
    '"Telekinesis"': '"Telekinesis(遙控術)"',
    '"Protection"': '"Protection(保護術)"',
    '"Destroy Trap"': '"Destroy Trap(摧毀陷阱)"',
    '"Enchant"': '"Enchant(著魔術)"',
    '"Mass Cure"': '"Mass Cure(大治療術)"',

    '"Heal"': '"Heal(醫療術)"',
    '"Peer"': '"Peer(靈視術)"',
    '"Sleep"': '"Sleep(催眠術)"',
    '"Protect All"': '"Protect All(保護全體隊員)"',
    '"Swarm"': '"Swarm(招蟲術)"',

    '"Mark"': '"Mark(標記術)"',
    '"Recall"': '"Recall(喚回術)"',
    '"Seance"': '"Seance(降神術)"',
    '"Unlock Magic"': '"Unlock Magic(開鎖術)"',
    '"Conjure"': '"Conjure(招遣術)"',
    '"Mass Curse"': '"Mass Curse(大詛咒術)"',
    '"Reveal"': '"Reveal(現形術)"',

    '"Invisibility"': '"Invisibility(隱身術)"',
    '"Charm"': '"Charm(迷惑術)"',
    '"Fire Field"': '"Fire Field(火焰力場)"',
    '"Dance"': '"Dance(狂舞術)"',
    '"Dispel Field"': '"Dispel Field(祛除力場)"',
    '"Great Heal"': '"Great Heal(大治療術)"',

    '"Clone"': '"Clone(複製隊員)"',
    '"Sleep Field"': '"Sleep Field(催眠力場)"',
    '"Cause Fear"': '"Cause Fear(恐懼術)"',
    '"Magic Storm"': '"Magic Storm(魔法風暴)"',
    '"Fire Ring"': '"Fire Ring(火環術)"',
    '"Flame Strike"': '"Flame Strike(火焰之擊)"',

    '"Mass Might"': '"Mass Might(大力術)"',
    '"Energy Mist"': '"Energy Mist(能量之矢)"',
    '"Restoration"': '"Restoration(回複術)"',
    '"Energy Field"': '"Energy Field(能量力場)"',
    '"Death Bolt"': '"Death Bolt(死亡之矢)"',

    '"Resurrect"': '"Resurrect(復活術)"',
    '"Time Stop"': '"Time Stop(時間暫停)"',
    '"Sword Strike"': '"Sword Strike(劍擊術)"',
    '"Invisible All"': '"Invisible All(全體隱形)"',
    '"Death Vortex"': '"Death Vortex(死亡漩渦)"',
    '"Mass Death"': '"Mass Death(大死亡術)"'
}

es_files = ['08BB', '08C5']
base_dir = r'd:\git\exult-master\tools\ucxt\output'

for fid in es_files:
    in_path = os.path.join(base_dir, 'es_scripts', fid + '.es')
    if fid == '08BB':
        out_path = os.path.join(base_dir, 'zh_script', '08AB~08F5', fid + '_zh_重翻.es')
    else:
        out_path = os.path.join(base_dir, 'zh_script', '08AB~08F5', fid + '_zh.es')
    
    with open(in_path, 'r', encoding='latin-1') as f:
        content = f.read()
        
    for k, v in trans_dict.items():
        content = content.replace(k, v)
        
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Spell scripts translation done!")
