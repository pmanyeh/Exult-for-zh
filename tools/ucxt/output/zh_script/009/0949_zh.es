#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func094B 0x94B (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0949 0x949 ()
{
	var var0000;
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["再看看", "藍色藥水", "紫色藥水", "紅色藥水", "橘色藥水"];
	var0002 = [0x0000, 0x0154, 0x0154, 0x0154, 0x0154];
	var0003 = [0xFE99, 0x0000, 0x0005, 0x0002, 0x0004];
	var0004 = [0x0000, 0x001E, 0x0096, 0x0096, 0x000A];
	var0005 = [0x0000, 0x0078, 0x0258, 0x0258, 0x002D];
	var0006 = ["", "一瓶", "一瓶", "一瓶", "一瓶"];
	var0007 = 0x0000;
	var0008 = "";
	var0009 = 0x0001;
	message("「想要什麼物品？」");
	say();
labelFunc0949_009C:
	if (!var0000) goto labelFunc0949_01B2;
	var000A = Func090C(var0001);
	if (!(var000A == 0x0001)) goto labelFunc0949_00CD;
	if (!gflags[0x0003]) goto labelFunc0949_00C2;
	message("「明白。」");
	say();
	goto labelFunc0949_00C6;
labelFunc0949_00C2:
	message("「很好。不想賣給你任何東西。」");
	say();
labelFunc0949_00C6:
	var0000 = false;
	goto labelFunc0949_01AF;
labelFunc0949_00CD:
	if (!gflags[0x0003]) goto labelFunc0949_00FA;
	var000B = var0004[var000A];
	var000C = Func091C(var0006[var000A], var0001[var000A], var0007, var000B, var0008);
	goto labelFunc0949_0137;
labelFunc0949_00FA:
	var000B = var0005[var000A];
	var000B = Func094B(var000B, 0xFF28);
	var000C = Func091C(var0006[var000A], var0001[var000A], var0007, var000B, var0008);
	if (!(var000B == 0x0000)) goto labelFunc0949_0137;
	goto labelFunc0949_01A5;
labelFunc0949_0137:
	var000D = 0x0000;
	message("「");
	message(var000C);
	message(" 接受這個價格嗎？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc0949_0172;
	var000D = Func08F8(var0002[var000A], var0003[var000A], var0009, var000B, 0x0000, 0x0001, false);
labelFunc0949_0172:
	if (!(var000D == 0x0001)) goto labelFunc0949_0183;
	message("「同意！」");
	say();
	goto labelFunc0949_01A5;
labelFunc0949_0183:
	if (!(var000D == 0x0002)) goto labelFunc0949_0194;
	message("「人類，拿不下那麼多！」");
	say();
	goto labelFunc0949_01A5;
labelFunc0949_0194:
	if (!(var000D == 0x0003)) goto labelFunc0949_01A5;
	message("「金幣不夠買那個！」");
	say();
	goto labelFunc0949_01A5;
labelFunc0949_01A5:
	message("「想要別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc0949_01AF:
	goto labelFunc0949_009C;
labelFunc0949_01B2:
	UI_pop_answers();
	return;
}


