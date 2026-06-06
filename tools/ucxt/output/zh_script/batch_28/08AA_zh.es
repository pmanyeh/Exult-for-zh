#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08AA 0x8AA ()
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
	var0001 = ["再看看", "羽飾頭盔", "鱗甲", "護頸"];
	var0002 = [0x0000, 0x021E, 0x023A, 0x024A];
	var0003 = [0x0000, 0x0096, 0x0078, 0x001E];
	var0004 = ["", "", "", ""];
	var0005 = 0x0000;
	var0006 = "";
	var0007 = 0x0001;
	var0008 = 0xFE99;
	message("「你想買些什麼？」");
	say();
labelFunc08AA_006C:
	if (!var0000) goto labelFunc08AA_0129;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08AA_0090;
	message("「很好。」");
	say();
	var0000 = false;
	goto labelFunc08AA_0126;
labelFunc08AA_0090:
	var000A = Func091B(var0004[var0009], var0001[var0009], var0005, var0003[var0009], var0006);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。這樣可以接受嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08AA_00E9;
	var000B = Func08F8(var0002[var0009], var0008, var0007, var0003[var0009], 0x0000, 0x0001, true);
labelFunc08AA_00E9:
	if (!(var000B == 0x0001)) goto labelFunc08AA_00FA;
	message("「成交！」");
	say();
	goto labelFunc08AA_011C;
labelFunc08AA_00FA:
	if (!(var000B == 0x0002)) goto labelFunc08AA_010B;
	message("「你不可能拿得動那麼多！」");
	say();
	goto labelFunc08AA_011C;
labelFunc08AA_010B:
	if (!(var000B == 0x0003)) goto labelFunc08AA_011C;
	message("「你沒有足夠的金幣買那個！」");
	say();
	goto labelFunc08AA_011C;
labelFunc08AA_011C:
	message("「你還需要其他的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08AA_0126:
	goto labelFunc08AA_006C;
labelFunc08AA_0129:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


