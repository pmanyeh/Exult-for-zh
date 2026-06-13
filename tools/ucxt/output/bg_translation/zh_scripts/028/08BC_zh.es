#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08BC 0x8BC (var var0000)
{
	var var0001;
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

	UI_push_answers();
	var0001 = true;
	if (!(var0000 == "Reagents")) goto labelFunc08BC_0093;
	var0002 = ["無", "大蒜", "人參", "曼陀羅根", "龍葵", "黑珍珠"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0004 = [0xFE99, 0x0004, 0x0005, 0x0003, 0x0002, 0x0000];
	var0005 = [0x0000, 0x0001, 0x0002, 0x0007, 0x0006, 0x0008];
	var0006 = "";
	var0007 = ["", " 一瓣", " 一份", " 每個", " 一顆", " 每個"];
	goto labelFunc08BC_00ED;
labelFunc08BC_0093:
	var0002 = ["無", "橙色藥水", "黑色藥水"];
	var0003 = [0x0000, 0x0154, 0x0154];
	var0004 = [0xFE99, 0x0004, 0x0007];
	var0005 = [0x0000, 0x000F, 0x005A];
	var0008 = ["", "一瓶 ", "一瓶 "];
	var0007 = ["", " 一瓶", " 一瓶"];
labelFunc08BC_00ED:
	var0009 = 0x0000;
	var000A = 0x0001;
	var000B = 0xFF67;
	message("「你想買些什麼？」");
	say();
labelFunc08BC_0103:
	if (!var0001) goto labelFunc08BC_01F6;
	var000C = Func090C(var0002);
	if (!(var000C == 0x0001)) goto labelFunc08BC_0127;
	message("「好吧。」");
	say();
	var0001 = false;
	goto labelFunc08BC_01F3;
labelFunc08BC_0127:
	var000D = Func091B(var0006, var0002[var000C], var0009, var0005[var000C], var0007[var000C]);
	var000E = 0x0000;
	message("「");
	message(var000D);
	message(" 你覺得這個價格如何？」");
	say();
	var000F = Func090A();
	if (!var000F) goto labelFunc08BC_01B6;
	if (!(var0000 == "Reagents")) goto labelFunc08BC_0194;
	message("「你要多少？」");
	say();
	var000E = Func08F8(var0003[var000C], var0004[var000C], var000A, var0005[var000C], 0x0014, 0x0001, false);
	goto labelFunc08BC_01B6;
labelFunc08BC_0194:
	var000E = Func08F8(var0003[var000C], var0004[var000C], var000A, var0005[var000C], 0x0000, 0x0001, false);
labelFunc08BC_01B6:
	if (!(var000E == 0x0001)) goto labelFunc08BC_01C7;
	message("「成交！」");
	say();
	goto labelFunc08BC_01E9;
labelFunc08BC_01C7:
	if (!(var000E == 0x0002)) goto labelFunc08BC_01D8;
	message("「你不可能帶得走那麼多！」");
	say();
	goto labelFunc08BC_01E9;
labelFunc08BC_01D8:
	if (!(var000E == 0x0003)) goto labelFunc08BC_01E9;
	message("「你的金幣不足以支付這個！」");
	say();
	goto labelFunc08BC_01E9;
labelFunc08BC_01E9:
	message("「你還需要別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08BC_01F3:
	goto labelFunc08BC_0103;
labelFunc08BC_01F6:
	UI_pop_answers();
	return;
}