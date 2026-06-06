import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '041E.es': {
        'var0004 = "@Hubert the Lion was...@";': 'var0004 = "@獅子 Hubert 是……@";',
        'var0004 = "@Why do I say that?@";': 'var0004 = "@我為什麼要那樣說？@";',
        'var0004 = "@My costume is too big.@";': 'var0004 = "@我的戲服太大了。@";',
        'var0004 = "@I -hate- my lines!@";': 'var0004 = "@我 -討厭- 我的台詞！@";'
    },
    '041F.es': {
        'var0002 = "@Tag! Thou art it!@";': 'var0002 = "@鬼抓人！當鬼囉！@";',
        'var0002 = "@Cannot catch me!@";': 'var0002 = "@抓不到我！@";',
        'var0002 = "@Nyah nyah! Thou art it!@";': 'var0002 = "@啦啦！當鬼囉！@";',
        'var0002 = "@Catch me if thou can!@";': 'var0002 = "@有本事來抓我呀！@";'
    },
    '0420.es': {
        'var0004 = "@Tag! Thou art it!@";': 'var0004 = "@鬼抓人！當鬼囉！@";',
        'var0004 = "@Cannot catch me!@";': 'var0004 = "@抓不到我！@";',
        'var0004 = "@Nyah nyah! Thou art it!@";': 'var0004 = "@啦啦！當鬼囉！@";',
        'var0004 = "@Catch me if thou can!@";': 'var0004 = "@有本事來抓我呀！@";'
    },
    '0421.es': {
        'var0004 = "@Tag! Thou it!@";': 'var0004 = "@抓！你當鬼！@";',
        'var0004 = "@Catch me! Catch me!@";': 'var0004 = "@抓我！抓我！@";',
        'var0004 = "@Nyah nyah!@";': 'var0004 = "@啦啦！@";',
        'var0004 = "@Tag! Whee!@";': 'var0004 = "@抓！咿！@";'
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

print("Floating texts translated.")
