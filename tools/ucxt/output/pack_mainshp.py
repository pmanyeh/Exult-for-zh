import os
import subprocess
import shutil

expack_exe = r"D:\U7_project\Ultima 7 - Serpent Isle\mods\glimmerscape\usecode\tools\expack.exe"
orig_flx = r"D:\U7_project\Ultima 7\STATIC\MAINSHP.FLX"
edited_13 = r"d:\git\exult-master\tools\ucxt\output\13.u7o"
work_dir = r"d:\git\exult-master\tools\ucxt\output\flx_tmp"
output_flx = r"d:\git\exult-master\tools\ucxt\output\MAINSHP_ZH.FLX"

if os.path.exists(work_dir):
    shutil.rmtree(work_dir)
os.makedirs(work_dir)

print("Extracting original MAINSHP.FLX...")
subprocess.run([expack_exe, "-x", orig_flx], cwd=work_dir, check=True)

print("Replacing 13.u7o...")
shutil.copy2(edited_13, os.path.join(work_dir, "13.u7o"))

print("Generating manifest for repacking...")
files_to_pack = []
for i in range(30):
    files_to_pack.append(f"{i}.u7o")

manifest_path = os.path.join(work_dir, "manifest.txt")
with open(manifest_path, 'w', encoding='utf-8') as f:
    f.write(output_flx + "\n")
    for file in files_to_pack:
        f.write(file + "\n")

print("Repacking to MAINSHP_ZH.FLX...")
if os.path.exists(output_flx):
    os.remove(output_flx)

subprocess.run([expack_exe, "-i", "manifest.txt"], cwd=work_dir, check=True)

print("Cleaning up...")
shutil.rmtree(work_dir)

print(f"Done! New packed file is at: {output_flx}")
