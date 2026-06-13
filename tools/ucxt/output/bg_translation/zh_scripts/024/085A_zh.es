#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func085A 0x85A ()
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
	if (!gflags[0x02B6]) goto labelFunc085A_006E;
	var0001 = ["再看看", "火把", "開鎖工具"];
	var0002 = [0x0000, 0x0253, 0x0273];
	var0003 = [0xFE99, 0xFE99, 0xFE99];
	var0004 = [0x0000, 0x0005, 0x0001];
	var0005 = ["", "a ", "a "];
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	goto labelFunc085A_00CB;
labelFunc085A_006E:
	var0001 = ["再看看", "火把", "開鎖工具"];
	var0002 = [0x0000, 0x0253, 0x0273];
	var0003 = [0xFE99, 0xFE99, 0xFE99];
	var0004 = [0x0000, 0x0005, 0x000A];
	var0005 = ["", "a ", "a "];
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
labelFunc085A_00CB:
	message("「你想買些什麼？」");
	say();
labelFunc085A_00CF:
	if (!var0000) goto labelFunc085A_01D0;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc085A_00F3;
	message("「嘖嘖... 我真傷心...」");
	say();
	var0000 = false;
	goto labelFunc085A_01CD;
labelFunc085A_00F3:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" 你還有興趣嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc085A_0190;
	if (!((var0002[var0009] == 0x0273) || (var0002[var0009] == 0x0253))) goto labelFunc085A_016E;
	message("「你想要多少？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0005, 0x0001, true);
	goto labelFunc085A_0190;
labelFunc085A_016E:
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc085A_0190:
	if (!(var000B == 0x0001)) goto labelFunc085A_01A1;
	message("「成交！」");
	say();
	goto labelFunc085A_01C3;
labelFunc085A_01A1:
	if (!(var000B == 0x0002)) goto labelFunc085A_01B2;
	message("「你不可能拿得動那麼多東西！」");
	say();
	goto labelFunc085A_01C3;
labelFunc085A_01B2:
	if (!(var000B == 0x0003)) goto labelFunc085A_01C3;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc085A_01C3;
labelFunc085A_01C3:
	message("「你還要買其他東西嗎？」");
	say();
	var0000 = Func090A();
labelFunc085A_01CD:
	goto labelFunc085A_00CF;
labelFunc085A_01D0:
	UI_pop_answers();
	return;
}


