#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0863 0x863 ()
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
	var0001 = ["什麼都不買", "弓", "十字弓", "三連弩", "箭矢", "弩箭"];
	var0002 = [0x0000, 0x0255, 0x0256, 0x0287, 0x02D2, 0x02D3];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0028, 0x007D, 0x0190, 0x0019, 0x001E];
	var0005 = ["", "一把", "一把", "一把", "", ""];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	var0007 = ["", "", "", "", "，一打", "，一打"];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x000C, 0x000C];
	message("「你想買些什麼？」");
	say();
labelFunc0863_00BA:
	if (!var0000) goto labelFunc0863_01C1;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0863_00DE;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc0863_01BE;
labelFunc0863_00DE:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message(" 你確定要買嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0863_0181;
	if (!((var0002[var0009] == 0x02D2) || (var0002[var0009] == 0x02D3))) goto labelFunc0863_015F;
	message("「你想要幾打？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
	goto labelFunc0863_0181;
labelFunc0863_015F:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0863_0181:
	if (!(var000B == 0x0001)) goto labelFunc0863_0192;
	message("「成交！」");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_0192:
	if (!(var000B == 0x0002)) goto labelFunc0863_01A3;
	message("「你不可能拿得動那麼多東西！」");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_01A3:
	if (!(var000B == 0x0003)) goto labelFunc0863_01B4;
	message("「你的金幣不夠買這個！」");
	say();
	goto labelFunc0863_01B4;
labelFunc0863_01B4:
	message("「你還想要點別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc0863_01BE:
	goto labelFunc0863_00BA;
labelFunc0863_01C1:
	UI_pop_answers();
	return;
}

