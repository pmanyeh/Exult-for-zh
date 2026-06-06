#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CD 0x8CD ()
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
	var0001 = ["再看看", "肉乾", "蜂蜜酒", "葡萄", "乳酪", "麵包", "麥酒", "葡萄酒"];
	var0002 = [0x0000, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x000F, 0x0000, 0x0013, 0x001B, 0x0000, 0x0003, 0x0005];
	var0004 = [0x0000, 0x000C, 0x0004, 0x0001, 0x0004, 0x0002, 0x0001, 0x0002];
	var0005 = "";
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000];
	var0007 = ["", " 10塊", " 一瓶", " 一串", " 每塊", " 一條", " 一瓶", " 一瓶"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「你想購買什麼？」");
	say();
labelFunc08CD_00E1:
	if (!var0000) goto labelFunc08CD_020D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08CD_0105;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc08CD_020A;
labelFunc08CD_0105:
	var000A = Func091B(var0005, var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message(" 你付得起我的開價嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08CD_01CD;
	if (!(var0002[var0009] == 0x0268)) goto labelFunc08CD_0177;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0000, 0x0001, true);
	goto labelFunc08CD_01CD;
labelFunc08CD_0177:
	var000A = "你想買多少";
	if (!(var0008[var0009] > 0x0001)) goto labelFunc08CD_0194;
	var000A = (var000A + "組");
labelFunc08CD_0194:
	var000A = (var000A + "？");
	message("「^");
	message(var000A);
	message("」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc08CD_01CD:
	if (!(var000B == 0x0001)) goto labelFunc08CD_01DE;
	message("「太好了。」");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_01DE:
	if (!(var000B == 0x0002)) goto labelFunc08CD_01EF;
	message("「你拿不動那麼多東西。」");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_01EF:
	if (!(var000B == 0x0003)) goto labelFunc08CD_0200;
	message("「你的金幣不夠支付這個！」");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_0200:
	message("「你還想買別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08CD_020A:
	goto labelFunc08CD_00E1;
labelFunc08CD_020D:
	UI_pop_answers();
	return;
}