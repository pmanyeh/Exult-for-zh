# Ultima VII 盧恩符文字型：特殊字元編碼說明

本文件說明在翻譯招牌腳本（`0334.es`、`017B.es`、`02CB.es`）時，
原版英文字串中會出現的**特殊縮寫字元（Ligature）**，以及各輔助函式的用途。

---

## 一、盧恩符文特殊字元對照表

原版引擎在渲染符文時，會將常見的英文字母組合壓縮成**單一特殊符號**，
以節省牌子空間、讓符文排版更緊湊。翻譯時遇到這些字元，請按下表還原原意：

| 字元 | 代表字母組合 | 範例原文 | 還原後 |
|:---:|:---:|---|---|
| `(` | **th** | `(e` | **the** |
| `)` | **ee** | `k)p` | **keep** |
| `*` | **ng** | `goi*` | **going** |
| `+` | **er** | `gr+t` | **great** |
| `,` | **st** | `tru,` | **trust** |
| `\|` | **空格** | `pick\|item` | **pick item** |

### 完整範例解析

```
var000A = ["pick|item", "carefully", "to|k)p", "goi*"];
```

逐段還原：

| 原文 | 還原 |
|---|---|
| `pick\|item` | pick item |
| `carefully` | carefully |
| `to\|k)p` | to keep |
| `goi*` | going |

完整意義：**"Pick item carefully to keep going"**（仔細選擇物品才能繼續前進）

---

## 二、常見函式說明

### `UI_display_runes(shape_id, text_array)`

核心渲染函式。將文字陣列繪製到指定的招牌 Gump（形狀）上。

- `shape_id`：指定招牌的形狀 ID
  - `0x0031` / `0x0032` / `0x0033` → 各類招牌與金屬牌
- `text_array`：要顯示的文字，每個元素是一行

```javascript
UI_display_runes(0x0033, var000A);
```

---

### `Func08FF(text)`

**化身的內心獨白 / 旁白函式。**
讓玩家角色說出心中的想法，或觸發環境描述訊息，常見於：

- 解謎提示
- 道具互動反應
- 環境觀察描述
- 劇情推進旁白

```javascript
// 範例：謎題招牌觸發化身旁白
Func08FF(["天哪，我想你走對方向了！", "這符號似乎改變了！", "快看！"]);
```

> **注意**：`Func08FF` 的訊息屬於「化身（Avatar）旁白」，
> **不是** `UI_display_runes` 渲染在招牌上的文字，兩者是獨立的。

---

## 三、中文翻譯注入格式

自本地化版本起，各招牌腳本使用 `var_chinese` 變數儲存中文翻譯，
並在確認玩家持有「翻譯寶典」（Quality 149）後，以中文覆蓋原版符文顯示。

### 單行（直接字串）

```javascript
var_chinese = "藍野豬酒館";
```

### 多行（字串陣列）

```javascript
var_chinese = ["藍野豬", "酒館"];
```

每個陣列元素對應招牌上的一行文字，引擎會自動做垂直均分排版。

### 底部注入邏輯（0334.es 尾端）

```javascript
if (has_magic_book > 0 && var_chinese != "") {
    var000A = var_chinese;   // 字串→單行，陣列→多行
}
UI_display_runes(0x0033, var000A);
```

---

## 四、招牌字型 Font Index 對照

| Font Index | 招牌種類 | 材質 |
|:---:|---|---|
| 1 | woodsign | 木牌 |
| 3 | tombstone | 墓碑 |
| 6 | goldsign | 金屬牌（浮雕） |
| 8 | serpentine sign | 蛇語木牌（SI） |
| 10 | serpentine goldsign | 蛇語金屬牌（SI） |

每種招牌可在 `exult.cfg` 的 `<chinese>` 區塊中，
以對應的後綴（`_woodsign`、`_goldsign`、`_tombstone`）
**獨立設定字型大小、顏色與陰影效果**。

---

*本文件由 Exult 繁體中文本地化專案整理，2026年6月*
