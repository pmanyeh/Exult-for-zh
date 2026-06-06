with open(r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20\084F_zh.es", "rb") as f:
    lines = f.readlines()
line = lines[35]
print("Text up to 85:", line[:85].decode("utf-8", errors="replace"))
