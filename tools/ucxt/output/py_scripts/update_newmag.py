import os

filepath = r'd:\git\exult-master\tools\ucxt\output\zh_script\main_NewMagincia.es'

new_content = '''#include "zh_script/006/0481_zh.es"
#include "zh_script/006/0482_zh.es"
#include "zh_script/006/0483_zh.es"
#include "zh_script/006/0484_zh.es"
#include "zh_script/006/0485_zh.es"
#include "zh_script/009/0486_zh.es"
#include "zh_script/009/0487_zh.es"
#include "zh_script/009/0488_zh.es"
#include "zh_script/009/0489_zh.es"
#include "zh_script/009/048A_zh.es"
'''

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Updated main_NewMagincia.es')
