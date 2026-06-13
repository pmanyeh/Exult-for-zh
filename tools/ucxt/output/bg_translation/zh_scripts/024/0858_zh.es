#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0858 0x858 ()
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
	var0001 = ["再看看", "木棒", "匕首", "弓", "劍", "戟", "箭", "弩箭"];
	var0002 = [0x0000, 0x024E, 0x0252, 0x0255, 0x0257, 0x025B, 0x02D2, 0x02D3];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0014, 0x0014, 0x0028, 0x0064, 0x00FA, 0x0019, 0x001E];
	var0005 = ["", "a ", "a ", "a ", "a ", "a ", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", "", "", " 一打", " 一打"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x000C, 0x000C];
	message("「你想買些什麼？」");
	say();
labelFunc0858_00E4:
	if (!var0000) goto labelFunc0858_01EB;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0858_0108;
	message("「嘖嘖... 我真傷心...」");
	say();
	var0000 = false;
	goto labelFunc0858_01E8;
labelFunc0858_0108:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" 你還有興趣嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0858_01AB;
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0858_0189;
	message("「你想要多少打？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0005, 0x0001, true);
	goto labelFunc0858_01AB;
labelFunc0858_0189:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0858_01AB:
	if (!(var000B == 0x0001)) goto labelFunc0858_01BC;
	message("「成交！」");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01BC:
	if (!(var000B == 0x0002)) goto labelFunc0858_01CD;
	message("「你不可能拿得動那麼多東西！」");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01CD:
	if (!(var000B == 0x0003)) goto labelFunc0858_01DE;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc0858_01DE;
labelFunc0858_01DE:
	message("「你還要買其他東西嗎？」");
	say();
	var0000 = Func090A();
labelFunc0858_01E8:
	goto labelFunc0858_00E4;
labelFunc0858_01EB:
	UI_pop_answers();
	return;
}


