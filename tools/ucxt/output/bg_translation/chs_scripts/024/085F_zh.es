#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func085F 0x85F (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "圣者";
	if (!gflags[0x01F1]) goto labelFunc085F_001E;
	var0005 = var0002;
labelFunc085F_001E:
	if (!gflags[0x01F3]) goto labelFunc085F_002A;
	var0005 = var0004;
labelFunc085F_002A:
	if (!gflags[0x01F2]) goto labelFunc085F_0036;
	var0005 = var0003;
labelFunc085F_0036:
	var0006 = Func0920();
	var0007 = UI_get_npc_name(var0006);
	if (!(var0006 == 0x0000)) goto labelFunc085F_0053;
	goto labelFunc085F_0166;
labelFunc085F_0053:
	var0008 = 0x0003;
	var0009 = Func0922(var0000, var0001, var0006, var0008);
	if (!(var0009 == 0x0000)) goto labelFunc085F_007C;
	message("「看来你需要多一点时间来磨练你的反应。如果你希望以后再来，当你有更多经验时，我很乐意训练你。」");
	say();
	goto labelFunc085F_0166;
labelFunc085F_007C:
	if (!(var0009 == 0x0001)) goto labelFunc085F_00B4;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集你的金币并数了数，发现你总共有 ");
	message(var000A);
	message(" 枚金币。");
	say();
	if (!(var000A < var0001)) goto labelFunc085F_00B4;
	message("「你没有足够的金币付给我。很抱歉，我现在无法训练你。」");
	say();
	goto labelFunc085F_0166;
labelFunc085F_00B4:
	if (!(var0009 == 0x0002)) goto labelFunc085F_00CB;
	message("「天哪！你真快。事实上，快到我无法帮你变得更快。我很抱歉，");
	message(var0005);
	message("。」");
	say();
	goto labelFunc085F_0166;
labelFunc085F_00CB:
	var000B = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你付了 ");
	message(var0001);
	message(" 枚金币，训练课程开始了。");
	say();
	if (!(var0006 == 0xFE9C)) goto labelFunc085F_00FC;
	var000C = "你";
	goto labelFunc085F_0102;
labelFunc085F_00FC:
	var000C = var0007;
labelFunc085F_0102:
	if (!(var0006 == 0xFE9C)) goto labelFunc085F_0115;
	var000D = "你";
	goto labelFunc085F_011B;
labelFunc085F_0115:
	var000D = var0007;
labelFunc085F_011B:
	message(var000C);
	message("和 Chad 对练了几分钟。他教了");
	message(var000D);
	message("几个能更好地利用速度和敏捷性的战斗专门技巧。");
	say();
	var000E = Func0910(var0006, 0x0001);
	if (!(var000E < 0x001E)) goto labelFunc085F_0147;
	Func0917(var0006, 0x0001);
labelFunc085F_0147:
	var000F = Func0910(var0006, 0x0004);
	if (!(var000F < 0x001E)) goto labelFunc085F_0166;
	Func0915(var0006, 0x0002);
labelFunc085F_0166:
	return;
}


