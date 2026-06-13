#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0853 0x853 ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["再看看", "火把", "油瓶", "袋子", "鏟子", "火藥桶", "水桶", "罐子", "水壺", "翅膀抓癢器", "指甲銼", "牛角亮光劑"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0322, 0x0271, 0x02C0, 0x032A, 0x02A9, 0x0006, 0x03A9, 0x03A9, 0x03A9];
	var0003 = [0x0000, 0x0004, 0x0048, 0x0006, 0x000E, 0x0023, 0x0003, 0x0003, 0x0002, 0x0005, 0x0005, 0x0002];
	var0004 = ["", "一個", "一瓶", "一個", "一把", "一桶", "一個", "一個", "一個", "一個", "一把", "一瓶"];
	var0005 = 0x0001;
	var0006 = ["", "", " 每打", "", "", "", "", "", "", "", "", " 每次"];
	var0007 = [0x0000, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0x0000, 0x0001, 0x0003];
	var0008 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「想買什麼？」");
	say();
labelFunc0853_0138:
	if (!var0000) goto labelFunc0853_0250;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0853_015C;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc0853_024D;
labelFunc0853_015C:
	var000A = Func091C(var0004[var0009], var0001[var0009], var0005, var0003[var0009], var0006[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message("。這價錢可以接受嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0853_0210;
	if (!((var0002[var0009] == 0x0253) || (var0002[var0009] == 0x030E))) goto labelFunc0853_01EE;
	if (!(var0002[var0009] == 0x030E)) goto labelFunc0853_01C5;
	message("「你想買幾打（12個）？」");
	say();
	goto labelFunc0853_01C9;
labelFunc0853_01C5:
	message("「你想要多少個？」");
	say();
labelFunc0853_01C9:
	var000B = Func08F8(var0002[var0009], var0007, var0008[var0009], var0003[var0009], 0x0014, 0x0001, false);
	goto labelFunc0853_0210;
labelFunc0853_01EE:
	var000B = Func08F8(var0002[var0009], var0007, var0008[var0009], var0003[var0009], 0x0000, 0x0001, false);
labelFunc0853_0210:
	if (!(var000B == 0x0001)) goto labelFunc0853_0221;
	message("「接受！」");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0221:
	if (!(var000B == 0x0002)) goto labelFunc0853_0232;
	message("「你拿不了這麼重的東西！」");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0232:
	if (!(var000B == 0x0003)) goto labelFunc0853_0243;
	message("「你沒有足夠的錢！」");
	say();
	goto labelFunc0853_0243;
labelFunc0853_0243:
	message("「還要買別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc0853_024D:
	goto labelFunc0853_0138;
labelFunc0853_0250:
	UI_pop_answers();
	return;
}


