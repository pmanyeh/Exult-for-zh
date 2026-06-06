#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0841 0x841 ()
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
	var0001 = ["再看看", "羊肉口糧", "蛋糕", "火腿", "酒", "麥酒"];
	var0002 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x000F, 0x0005, 0x000B, 0x0005, 0x0003];
	var0004 = [0x0000, 0x000E, 0x0005, 0x000A, 0x0009, 0x0002, 0x0001];
	var0005 = "";
	var0006 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = ["", " 10 塊", " 每份", " 每片", " 每瓶", " 每瓶"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「想買什麼？」");
	say();
labelFunc0841_00BD:
	if (!var0000) goto labelFunc0841_01B9;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0841_00E1;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc0841_01B6;
labelFunc0841_00E1:
	var000A = Func091C(var0005, var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" 這個價格可以嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0841_0179;
	if (!(var0002 == 0x0268)) goto labelFunc0841_0150;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0000, 0x0001, true);
	goto labelFunc0841_0179;
labelFunc0841_0150:
	message("「你想要多少個？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc0841_0179:
	if (!(var000B == 0x0001)) goto labelFunc0841_018A;
	message("「同意！」");
	say();
	goto labelFunc0841_01AC;
labelFunc0841_018A:
	if (!(var000B == 0x0002)) goto labelFunc0841_019B;
	message("「你無法拿那麼多！」");
	say();
	goto labelFunc0841_01AC;
labelFunc0841_019B:
	if (!(var000B == 0x0003)) goto labelFunc0841_01AC;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc0841_01AC;
labelFunc0841_01AC:
	message("「還想買其他的嗎？」");
	say();
	var0000 = Func090A();
labelFunc0841_01B6:
	goto labelFunc0841_00BD;
labelFunc0841_01B9:
	UI_pop_answers();
	return;
}


