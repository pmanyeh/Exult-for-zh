#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0952 0x952 ()
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
	var0001 = ["nothing", "throwing axe", "dagger", "mace", "sword", "2-handed sword", "2-handed axe"];
	var0002 = [0x0000, 0x0251, 0x0252, 0x0293, 0x0257, 0x025A, 0x0259];
	var0003 = [0x0000, 0x0014, 0x000C, 0x000F, 0x0046, 0x007D, 0x0046];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0952_005D:
	if (!var0000) goto labelFunc0952_0135;
	var0004 = Func090C(var0001);
	if (!(var0004 == 0x0001)) goto labelFunc0952_0081;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0952_0132;
labelFunc0952_0081:
	var0005 = "a ";
	var0006 = 0xFE99;
	var0007 = 0x0000;
	var0008 = "";
	var0009 = 0x0001;
	var000A = Func091B(var0005, var0001[var0004], var0007, var0003[var0004], var0008);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Wilt thou buy it at that price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0952_00F5;
	var000B = Func08F8(var0002[var0004], var0006, var0009, var0003[var0004], 0x0000, 0x0001, true);
labelFunc0952_00F5:
	if (!(var000B == 0x0001)) goto labelFunc0952_0106;
	message("\"Done!\"");
	say();
	goto labelFunc0952_0128;
labelFunc0952_0106:
	if (!(var000B == 0x0002)) goto labelFunc0952_0117;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0952_0128;
labelFunc0952_0117:
	if (!(var000B == 0x0003)) goto labelFunc0952_0128;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0952_0128;
labelFunc0952_0128:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0952_0132:
	goto labelFunc0952_005D;
labelFunc0952_0135:
	UI_pop_answers();
	return;
}


