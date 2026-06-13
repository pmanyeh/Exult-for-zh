#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08D4 0x8D4 ()
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
	var0002 = ["再看看", "護腿", "護手", "小圓盾", "弧形紋章盾", "尖刺盾", "巨盔", "板甲護腿", "護喉甲"];
	var0003 = [0x0000, 0x0161, 0x0244, 0x021F, 0x0221, 0x0242, 0x021D, 0x0240, 0x024A];
	var0004 = [0x0000, 0x0028, 0x0012, 0x0012, 0x0023, 0x0016, 0x0096, 0x00A0, 0x00AF, 0x001E];
	var0005 = ["", "", "", "", "", "", "", "", ""];
	var0006 = [0x0000, 0x0001, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0000];
	var0007 = ["", " 每雙", " 每雙", "", "", "", "", " 每雙", ""];
	var0008 = 0xFE99;
	var0009 = 0x0001;
	message("「你想購買哪種防具？」");
	say();
labelFunc08D4_00E7:
	if (!var0001) goto labelFunc08D4_01B0;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08D4_010B;
	message("「很好。」");
	say();
	var0001 = false;
	goto labelFunc08D4_01AD;
labelFunc08D4_010B:
	var000B = Func091B(var0005[var000A], var0002[var000A], var0006[var000A], var0004[var000A], var0007[var000A]);
	var000C = 0x0000;
	message("「^");
	message(var000B);
	message(" 你還有興趣嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08D4_016A;
	var000C = Func08F8(var0003[var000A], var0008, var0009, var0004[var000A], 0x0000, 0x0001, true);
labelFunc08D4_016A:
	if (!(var000C == 0x0001)) goto labelFunc08D4_017B;
	message("「成交！」");
	say();
	goto labelFunc08D4_01A3;
labelFunc08D4_017B:
	if (!(var000C == 0x0002)) goto labelFunc08D4_0192;
	message("「我很抱歉，");
	message(var0000);
	message("，連我都拿不動那麼多東西！」");
	say();
	goto labelFunc08D4_01A3;
labelFunc08D4_0192:
	if (!(var000C == 0x0003)) goto labelFunc08D4_01A3;
	message("「你的金幣不夠支付這個！」");
	say();
	goto labelFunc08D4_01A3;
labelFunc08D4_01A3:
	message("「你還需要別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08D4_01AD:
	goto labelFunc08D4_00E7;
labelFunc08D4_01B0:
	UI_pop_answers();
	return;
}