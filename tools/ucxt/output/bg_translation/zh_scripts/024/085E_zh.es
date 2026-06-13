#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func085E 0x85E ()
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

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "葡萄酒", "麥酒"];
	var0003 = [0x0000, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0004, 0x0003];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = " (每瓶)";
	var0009 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc085E_0066:
	if (!var0001) goto labelFunc085E_0129;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc085E_0090;
	message("「很好，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc085E_0126;
labelFunc085E_0090:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" 你接受我的價格嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc085E_00E9;
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc085E_00E9:
	if (!(var000C == 0x0001)) goto labelFunc085E_00FA;
	message("「同意。」");
	say();
	goto labelFunc085E_011C;
labelFunc085E_00FA:
	if (!(var000C == 0x0002)) goto labelFunc085E_010B;
	message("「你不可能拿得動那麼多東西！」");
	say();
	goto labelFunc085E_011C;
labelFunc085E_010B:
	if (!(var000C == 0x0003)) goto labelFunc085E_011C;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc085E_011C;
labelFunc085E_011C:
	message("「你還要買其他東西嗎？」");
	say();
	var0001 = Func090A();
labelFunc085E_0126:
	goto labelFunc085E_0066;
labelFunc085E_0129:
	UI_pop_answers();
	return;
}


