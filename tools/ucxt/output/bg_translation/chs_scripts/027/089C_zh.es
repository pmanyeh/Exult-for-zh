#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func089C 0x89C ()
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
	var0001 = ["再看看", "飞斧", "双手斧", "回旋镖"];
	var0002 = [0x0000, 0x0251, 0x0259, 0x025D];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0012, 0x0032, 0x000C];
	var0005 = "";
	var0006 = 0x0001;
	var0007 = "";
	var0008 = 0x0001;
	message("「要购买什么物品？」");
	say();
labelFunc089C_0060:
	if (!var0000) goto labelFunc089C_011A;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc089C_0084;
	message("「接受。」");
	say();
	var0000 = false;
	goto labelFunc089C_0117;
labelFunc089C_0084:
	var000A = Func091C(var0005, var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。这可以接受吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc089C_00DA;
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc089C_00DA:
	if (!(var000B == 0x0001)) goto labelFunc089C_00EB;
	message("「同意。」");
	say();
	goto labelFunc089C_010D;
labelFunc089C_00EB:
	if (!(var000B == 0x0002)) goto labelFunc089C_00FC;
	message("「没有能力拿得动那么多！」");
	say();
	goto labelFunc089C_010D;
labelFunc089C_00FC:
	if (!(var000B == 0x0003)) goto labelFunc089C_010D;
	message("「没有足够的金币买那个。」");
	say();
	goto labelFunc089C_010D;
labelFunc089C_010D:
	message("「还想要别的东西吗？」");
	say();
	var0000 = Func090A();
labelFunc089C_0117:
	goto labelFunc089C_0060;
labelFunc089C_011A:
	UI_pop_answers();
	return;
}


