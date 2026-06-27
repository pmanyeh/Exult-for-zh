#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08D3 0x8D3 ()
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
	var0002 = ["再看看", "匕首", "長矛", "晨星錘", "釘頭錘", "劍", "雙手巨劍", "長柄戟"];
	var0003 = [0x0000, 0x0252, 0x0250, 0x0254, 0x0293, 0x0257, 0x025A, 0x025B];
	var0004 = [0x0000, 0x000C, 0x0019, 0x0019, 0x0014, 0x0041, 0x00AF, 0x00C8];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	var0009 = 0xFE99;
	message("「你想購買什麼武器？」");
	say();
labelFunc08D3_008A:
	if (!var0001) goto labelFunc08D3_0150;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08D3_00B4;
	message("「我完全理解，");
	message(var0000);
	message("。自從不列顛尼亞n Tax Council 制定了如此離譜的稅率以來，整個大陸的物價都上漲了。」");
	say();
	var0001 = false;
	goto labelFunc08D3_014D;
labelFunc08D3_00B4:
	var000B = Func091B(var0005, var0002[var000A], var0006, var0004[var000A], var0007);
	var000C = 0x0000;
	message("「^");
	message(var000B);
	message("。」這個價格你能接受嗎？");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08D3_010A;
	var000C = Func08F8(var0003[var000A], var0009, var0008, var0004[var000A], 0x0000, 0x0001, true);
labelFunc08D3_010A:
	if (!(var000C == 0x0001)) goto labelFunc08D3_011B;
	message("「成交！」");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_011B:
	if (!(var000C == 0x0002)) goto labelFunc08D3_0132;
	message("「我很抱歉，");
	message(var0000);
	message("，但連我都拿不動那麼多東西！」");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_0132:
	if (!(var000C == 0x0003)) goto labelFunc08D3_0143;
	message("「你的金幣不夠支付這個！」");
	say();
	goto labelFunc08D3_0143;
labelFunc08D3_0143:
	message("「你還需要別的嗎？」");
	say();
	var0001 = Func090A();
labelFunc08D3_014D:
	goto labelFunc08D3_008A;
labelFunc08D3_0150:
	UI_pop_answers();
	return;
}
