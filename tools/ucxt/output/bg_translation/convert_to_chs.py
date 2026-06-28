#!/usr/bin/env python3
"""
convert_to_chs.py
將 zh_scripts 目錄下的 .es 檔案中的繁體中文轉換成簡體中文，
輸出到 chs_scripts 目錄，保留原始目錄結構與檔名。

使用方式：
    python convert_to_chs.py
"""

import os
import re
import shutil
import opencc

# 來源 / 目的目錄（相對於本腳本）
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
SRC_DIR    = os.path.join(BASE_DIR, "zh_scripts")
DST_DIR    = os.path.join(BASE_DIR, "chs_scripts")

# 使用 tw2sp：台灣繁體 → 大陸簡體（含詞語轉換，如「軟體」→「软件」）
converter = opencc.OpenCC("tw2sp")


def convert_quoted_strings(text: str) -> str:
    """只轉換雙引號內的中文文字，其餘程式碼保持不變。"""
    def replacer(m):
        inner = m.group(1)
        converted = converter.convert(inner)
        return f'"{converted}"'

    # 匹配 "..." 但不跨行（避免誤抓程式碼結構）
    return re.sub(r'"([^"\n]*)"', replacer, text)


def process_file(src_path: str, dst_path: str):
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    with open(src_path, "r", encoding="utf-8") as f:
        content = f.read()
    converted = convert_quoted_strings(content)
    with open(dst_path, "w", encoding="utf-8") as f:
        f.write(converted)


def main():
    if not os.path.isdir(SRC_DIR):
        print(f"[錯誤] 找不到來源目錄：{SRC_DIR}")
        return

    # 統計
    total = 0
    skipped = 0

    for root, dirs, files in os.walk(SRC_DIR):
        # 計算對應的目的目錄
        rel_root = os.path.relpath(root, SRC_DIR)
        dst_root = os.path.join(DST_DIR, rel_root)

        for filename in files:
            src_path = os.path.join(root, filename)
            dst_path = os.path.join(dst_root, filename)

            if filename.endswith(".es"):
                process_file(src_path, dst_path)
                print(f"[轉換] {os.path.join(rel_root, filename)}")
                total += 1
            else:
                # 非 .es 檔（如 main.es 等也是 .es，其他附帶檔案直接複製）
                os.makedirs(dst_root, exist_ok=True)
                shutil.copy2(src_path, dst_path)
                print(f"[複製] {os.path.join(rel_root, filename)}")
                skipped += 1

    print(f"\n完成！共轉換 {total} 個 .es 檔，複製 {skipped} 個其他檔案。")
    print(f"輸出目錄：{DST_DIR}")


if __name__ == "__main__":
    main()
