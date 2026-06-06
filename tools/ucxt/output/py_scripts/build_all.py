import os
import codecs
import subprocess
import shutil

BUILD_DIR = 'build_big5'
UCC_PATH = r'C:\Program Files\Exult\Tools\ucc.exe'
OUTPUT_UCO = 'usecode.uco'

def main():
    print("Starting build process...")
    
    if not os.path.exists(BUILD_DIR):
        os.makedirs(BUILD_DIR)
        
    for root, dirs, files in os.walk('.'):
        if BUILD_DIR in root or 'decompiled' in root or 'es_scripts' in root:
            continue
            
        for f in files:
            if f.endswith('.es'):
                src_path = os.path.join(root, f)
                rel_path = os.path.relpath(src_path, '.')
                dst_path = os.path.join(BUILD_DIR, rel_path)
                
                dst_dir = os.path.dirname(dst_path)
                if not os.path.exists(dst_dir):
                    os.makedirs(dst_dir)
                    
                # Try reading as UTF-8 first, fallback to Big5
                try:
                    with codecs.open(src_path, 'r', 'utf-8', errors='ignore') as fin:
                        text = fin.read()
                except UnicodeDecodeError:
                    with codecs.open(src_path, 'r', 'big5', errors='ignore') as fin:
                        text = fin.read()
                
                # Encode to Big5 and fix 0x5C
                big5_bytes = text.encode('big5', errors='replace')
                out_bytes = bytearray()
                i = 0
                while i < len(big5_bytes):
                    b = big5_bytes[i]
                    if b >= 0x81:
                        out_bytes.append(b)
                        if i + 1 < len(big5_bytes):
                            b2 = big5_bytes[i+1]
                            if b2 == 0x5C:
                                out_bytes.append(0x01)
                            else:
                                out_bytes.append(b2)
                            i += 2
                        else:
                            i += 1
                    else:
                        out_bytes.append(b)
                        i += 1
                
                with open(dst_path, 'wb') as fout:
                    fout.write(out_bytes)

    print("Running ucc.exe...")
    try:
        result = subprocess.run([UCC_PATH, '-o', OUTPUT_UCO, 'main.es'], 
                                cwd=BUILD_DIR, 
                                capture_output=True, text=True)
        
        if result.returncode == 0:
            print("Compile successful.")
            
            compiled_uco = os.path.join(BUILD_DIR, OUTPUT_UCO)
            if os.path.exists(compiled_uco):
                with open(compiled_uco, 'rb') as f:
                    uco_bytes = bytearray(f.read())
                    
                # Restore 0x01 -> 0x5C
                i = 0
                while i < len(uco_bytes) - 1:
                    if uco_bytes[i] >= 0x81 and uco_bytes[i+1] == 0x01:
                        uco_bytes[i+1] = 0x5C
                        i += 2
                    else:
                        i += 1
                
                # output one directory up (in the current directory)
                with open(OUTPUT_UCO, 'wb') as f:
                    f.write(uco_bytes)
                print(f"Success: {OUTPUT_UCO} created.")
        else:
            print("Compile failed:")
            print(result.stderr)
            print(result.stdout)
    except Exception as e:
        print(f"Error running ucc: {e}")

if __name__ == '__main__':
    main()
