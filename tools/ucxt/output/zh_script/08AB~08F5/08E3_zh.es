#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08E3 0x8E3 ()
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
	var0001 = ["再看看", "寶石", "金戒指", "結婚戒指", "生命護符"];
	var0002 = [0x0000, 0x02F8, 0x0280, 0x0280, 0x03BB];
	var0003 = [0xFE99, 0xFE99, 0x0000, 0x0001, 0x0000];
	var0004 = [0x0000, 0x004B, 0x0064, 0x0096, 0x00C8];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	message("「你想買些什麼？」");
	say();
labelFunc08E3_0078:
	if (!var0000) goto labelFunc08E3_0135;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08E3_009C;
	message("「好吧。」");
	say();
	var0000 = false;
	goto labelFunc08E3_0132;
labelFunc08E3_009C:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message(" 你願意支付這個價錢嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08E3_00F5;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc08E3_00F5:
	if (!(var000B == 0x0001)) goto labelFunc08E3_0106;
	message("「成交！」");
	say();
	goto labelFunc08E3_0128;
labelFunc08E3_0106:
	if (!(var000B == 0x0002)) goto labelFunc08E3_0117;
	message("「你根本拿不下那麼多東西！」");
	say();
	goto labelFunc08E3_0128;
labelFunc08E3_0117:
	if (!(var000B == 0x0003)) goto labelFunc08E3_0128;
	message("「你的金幣不夠支付這個！」");
	say();
	goto labelFunc08E3_0128;
labelFunc08E3_0128:
	message("「你還需要別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08E3_0132:
	goto labelFunc08E3_0078;
labelFunc08E3_0135:
	UI_pop_answers();
	return;
}