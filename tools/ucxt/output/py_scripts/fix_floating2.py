import os

base_dir = r'd:\git\exult-master\tools\ucxt\output\zh_script\003'

replacements = {
    '041F.es': {
        'var0003 = "@Tag! Thou art it!@";': 'var0003 = "@鬼抓人！當鬼囉！@";',
        'var0003 = "@Cannot catch me!@";': 'var0003 = "@抓不到我！@";',
        'var0003 = "@Nyah nyah! Thou art it!@";': 'var0003 = "@啦啦！當鬼囉！@";',
        'var0003 = "@Catch me if thou can!@";': 'var0003 = "@有本事來抓我呀！@";'
    },
    '0420.es': {
        'var0003 = "@Tag! Thou art it!@";': 'var0003 = "@鬼抓人！當鬼囉！@";',
        'var0003 = "@Cannot catch me!@";': 'var0003 = "@抓不到我！@";',
        'var0003 = "@Nyah nyah! Thou art it!@";': 'var0003 = "@啦啦！當鬼囉！@";',
        'var0003 = "@Catch me if thou can!@";': 'var0003 = "@有本事來抓我呀！@";'
    },
    '0421.es': {
        'var0003 = "@Tag! Thou it!@";': 'var0003 = "@抓！你當鬼！@";',
        'var0003 = "@Catch me! Catch me!@";': 'var0003 = "@抓我！抓我！@";',
        'var0003 = "@Nyah nyah!@";': 'var0003 = "@啦啦！@";',
        'var0003 = "@Tag! Whee!@";': 'var0003 = "@抓！咿！@";'
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

print("Floating texts translated again.")
