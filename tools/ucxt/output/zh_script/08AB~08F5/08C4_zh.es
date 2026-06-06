#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08C4 0x8C4 ()
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
	var0001 = ["再看看", "大蒜", "血苔", "蜘蛛絲", "曼陀羅根", "龍葵"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0004, 0x0001, 0x0006, 0x0003, 0x0002];
	var0004 = [0x0000, 0x0002, 0x0003, 0x0003, 0x0005, 0x0005];
	message("「你想購買什麼？」");
	say();
labelFunc08C4_006C:
	if (!var0000) goto labelFunc08C4_0145;
	var0005 = Func090C(var0001);
	if (!(var0005 == 0x0001)) goto labelFunc08C4_0090;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc08C4_0142;
labelFunc08C4_0090:
	var0006 = "";
	var0007 = 0x0000;
	var0008 = "";
	var0009 = 0x0001;
	var000A = Func091B(var0006, var0001[var0005], var0007, var0004[var0005], var0008);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message(" 這樣可以嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08C4_0105;
	message("「你想買多少？」");
	say();
	var000B = Func08F8(var0002[var0005], var0003[var0005], var0009, var0004[var0005], 0x0014, 0x0001, true);
labelFunc08C4_0105:
	if (!(var000B == 0x0001)) goto labelFunc08C4_0116;
	message("正式的「成交！」");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0116:
	if (!(var000B == 0x0002)) goto labelFunc08C4_0127;
	message("「你絕不可能拿得動那麼多東西！」");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0127:
	if (!(var000B == 0x0003)) goto labelFunc08C4_0138;
	message("「你的金幣不夠支付這個！」");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0138:
	message("「你還需要別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08C4_0142:
	goto labelFunc08C4_006C;
labelFunc08C4_0145:
	UI_pop_answers();
	return;
}