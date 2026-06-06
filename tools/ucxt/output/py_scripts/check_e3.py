with open(r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20\084F_zh.es", "rb") as f:
    lines = f.readlines()
line = lines[35]
idx = line.find(b'\xE3')
print("Index of first \\xE3:", idx)
idx2 = line.find(b'\xE3', idx+1)
print("Index of second \\xE3:", idx2)
idx3 = line.find(b'\xE3', idx2+1)
print("Index of third \\xE3:", idx3)
