#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0872 0x872 ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["再看看", "匕首", "權杖", "劍", "雙手鎚", "雙手劍", "棍棒", "投石索", "弓", "箭", "弩箭"];
	var0002 = [0x0000, 0x0252, 0x0293, 0x0257, 0x0258, 0x025A, 0x024E, 0x01DA, 0x0255, 0x02D2, 0x02D3];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x000A, 0x000F, 0x0032, 0x003C, 0x0050, 0x000F, 0x000A, 0x001E, 0x000A, 0x000F];
	var0005 = ["", "a ", "a ", "a ", "a ", "a ", "a ", "a ", "a ", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", "", "", "", "", "", " (每打)", " (每打)"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x000C, 0x000C];
	message("「你想買些什麼？」");
	say();
labelFunc0872_0123:
	if (!var0000) goto labelFunc0872_0236;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0872_0147;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc0872_0233;
labelFunc0872_0147:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" 這樣可以接受嗎？」");
	say();
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0872_01C8;
	var000C = Func090A();
	if (!var000C) goto labelFunc0872_01C5;
	message("「你想要多少組？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc0872_01C5:
	goto labelFunc0872_01F6;
labelFunc0872_01C8:
	var000D = Func090A();
	if (!var000D) goto labelFunc0872_01F6;
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0872_01F6:
	if (!(var000B == 0x0001)) goto labelFunc0872_0207;
	message("「非常好。我們終於有點進展了！」");
	say();
	goto labelFunc0872_0229;
labelFunc0872_0207:
	if (!(var000B == 0x0002)) goto labelFunc0872_0218;
	message("「你的手已經滿了，白痴！」");
	say();
	goto labelFunc0872_0229;
labelFunc0872_0218:
	if (!(var000B == 0x0003)) goto labelFunc0872_0229;
	message("「你竟敢在沒有足夠金幣的情況下試圖從我的商店買東西，膽子真大！」");
	say();
	goto labelFunc0872_0229;
labelFunc0872_0229:
	message("「今天還需要其他東西嗎？」");
	say();
	var0000 = Func090A();
labelFunc0872_0233:
	goto labelFunc0872_0123;
labelFunc0872_0236:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


