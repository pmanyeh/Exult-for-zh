#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08C6 0x8C6 ()
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
	var0001 = ["再看看", "Ginseng (人參)", "Blood Moss (血苔)", "Sulfurous Ash (硫磺灰)", "Mandrake Root (曼陀羅根)", "Black Pearl (黑珍珠)"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0005, 0x0001, 0x0007, 0x0003, 0x0000];
	var0004 = [0x0000, 0x0004, 0x0006, 0x0008, 0x000A, 0x000A];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	message("「你想買什麼魔法材料？」");
	say();
labelFunc08C6_0084:
	if (!var0000) goto labelFunc08C6_0145;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08C6_00A8;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc08C6_0142;
labelFunc08C6_00A8:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" 你願意付這麼多錢嗎？\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08C6_0105;
	message("「你想要多少個？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0014, 0x0001, false);
labelFunc08C6_0105:
	if (!(var000B == 0x0001)) goto labelFunc08C6_0116;
	message("「完成！」");
	say();
	goto labelFunc08C6_0138;
labelFunc08C6_0116:
	if (!(var000B == 0x0002)) goto labelFunc08C6_0127;
	message("「你不可能拿得了那麼多！」");
	say();
	goto labelFunc08C6_0138;
labelFunc08C6_0127:
	if (!(var000B == 0x0003)) goto labelFunc08C6_0138;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc08C6_0138;
labelFunc08C6_0138:
	message("「你還想要點別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc08C6_0142:
	goto labelFunc08C6_0084;
labelFunc08C6_0145:
	UI_pop_answers();
	return;
}


