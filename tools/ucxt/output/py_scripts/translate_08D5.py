import os

src = r'd:\git\exult-master\tools\ucxt\output\es_scripts\08D5.es'
dest = r'd:\git\exult-master\tools\ucxt\output\zh_script\006\08D5_zh.es'

os.makedirs(os.path.dirname(dest), exist_ok=True)

with open(src, 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    'It is most fortunate that thou fell so near our shelter. Thou must have a protector watching over thee.@': '你倒下的地方離我們的庇護所這麼近真是太幸運了。你一定有位守護者在照看著你。@',
    'It was Elizabeth and Abraham who found thee and delivered thee to us.': '是 Elizabeth 和 Abraham 發現了你，並把你送到我們這裡來的。',
    '"\\"Thank goodness thou art with us again! We were all very worried over thy condition.~~\\"Thou hast been unconscious for so long that we thought thou hadst lost thy life!~~"': '"「謝天謝地，你又回到我們身邊了！我們都非常擔心你的狀況。~~」「你昏迷了這麼久，我們還以為你沒命了呢！~~"',
    '"\\"They brought thee here along their way to Britain.\\""': '"「他們在前往 Britain 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to Minoc.\\""': '"「他們在前往 Minoc 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee to us as they were on their way here to Paws, but they have since left for Jhelom.\\""': '"「他們在來 Paws 的路上把你帶來給我們，但他們之後已經離開前往 Jhelom 了。」"',
    '"\\"They brought thee here along their way to Jhelom.\\""': '"「他們在前往 Jhelom 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to Vesper.\\""': '"「他們在前往 Vesper 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to Moonglow.\\""': '"「他們在前往 Moonglow 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to Terfin.\\""': '"「他們在前往 Terfin 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to the Fellowship meditation retreat near Serpent\'s Hold.\\""': '"「他們在前往 Serpent\'s Hold 附近的兄弟會冥想營的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here along their way to Buccaneer\'s Den.\\""': '"「他們在前往 Buccaneer\'s Den 的路上順道把你帶來這裡。」"',
    '"\\"They brought thee here and then returned to Buccaneer\'s Den.\\""': '"「他們把你帶來這裡，然後就返回 Buccaneer\'s Den 了。」"',
    '"\\"It is truly mysterious how this continues to happen to thee!\\""': '"「這事怎麼會不斷發生在你身上，真是太不可思議了！」"'
}

for k, v in replacements.items():
    text = text.replace(k, v)

with open(dest, 'w', encoding='utf-8') as f:
    f.write(text)

print(f"Generated {dest} successfully.")
