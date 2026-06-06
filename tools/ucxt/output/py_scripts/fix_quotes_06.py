import glob
import re

files = glob.glob(r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_06\048*.es')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_quote(m):
        inner = m.group(1)
        if not inner.startswith('"') and not inner.endswith('"') and not inner.startswith('var') and not inner.startswith('gflags') and not inner.startswith('Func') and not inner.startswith('UI_') and inner != '*':
            return f'message("{inner}");'
        return m.group(0)

    new_content = re.sub(r'message\((.*?)\);', replace_quote, content)
    
    # Also handle some missing start quotes directly if they were missed by the regex or improperly formatted.
    new_content = new_content.replace('message( 。~~「當他談到他的女兒時，有時會像那樣失控。但我相信你能理解。」*");', 'message("。~~「當他談到他的女兒時，有時會像那樣失控。但我相信你能理解。」*");')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed missing quotes in {filepath}')
