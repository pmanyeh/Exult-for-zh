with open(r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20\084F_zh.es", "r", encoding="utf-8") as f:
    lines = f.readlines()
line = lines[35]
print("Length of line:", len(line))
print("Count of double quotes:", line.count('"'))
print("Count of backslashes:", line.count('\\'))
print("Line ends with:", repr(line[-10:]))
