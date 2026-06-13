#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func094B 0x94B (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func094A 0x94A ()
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
	var var000E;

	UI_push_answers();
	var0000 = true;
	var0001 = ["nothing", "blood moss", "spider silk", "sulfurous ash", "mandrake root", "black pearl"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0001, 0x0006, 0x0007, 0x0003, 0x0000];
	var0004 = [0x0000, 0x0004, 0x0005, 0x0006, 0x0008, 0x0008];
	var0005 = [0x0000, 0x0010, 0x0014, 0x0019, 0x0020, 0x0022];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = "";
	var0009 = 0x0001;
	message("\"To want what item?\"");
	say();
labelFunc094A_009C:
	if (!var0000) goto labelFunc094A_01B0;
	var000A = Func090C(var0001);
	if (!(var000A == 0x0001)) goto labelFunc094A_00CD;
	if (!gflags[0x0003]) goto labelFunc094A_00C2;
	message("\"To understand.\"");
	say();
	goto labelFunc094A_00C6;
labelFunc094A_00C2:
	message("\"To be good. To want to sell nothing to you.\"");
	say();
labelFunc094A_00C6:
	var0000 = false;
	goto labelFunc094A_01AD;
labelFunc094A_00CD:
	if (!gflags[0x0003]) goto labelFunc094A_00F7;
	var000B = var0004[var000A];
	var000C = Func091C(var0006, var0001[var000A], var0007, var000B, var0008);
	goto labelFunc094A_0131;
labelFunc094A_00F7:
	var000B = var0005[var000A];
	var000B = Func094B(var000B, 0xFF28);
	var000C = Func091C(var0006, var0001[var000A], var0007, var000B, var0008);
	if (!(var000B == 0x0000)) goto labelFunc094A_0131;
	goto labelFunc094A_01A3;
labelFunc094A_0131:
	var000D = 0x0000;
	message("\"");
	message(var000C);
	message(" To agree to the cost?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc094A_0170;
	message("\"To want how many?\"");
	say();
	var000D = Func08F8(var0002[var000A], var0003[var000A], var0009, var000B, 0x0014, 0x0001, true);
labelFunc094A_0170:
	if (!(var000D == 0x0001)) goto labelFunc094A_0181;
	message("\"To be agreed!\"");
	say();
	goto labelFunc094A_01A3;
labelFunc094A_0181:
	if (!(var000D == 0x0002)) goto labelFunc094A_0192;
	message("\"To be unable to carry that much, human!\"");
	say();
	goto labelFunc094A_01A3;
labelFunc094A_0192:
	if (!(var000D == 0x0003)) goto labelFunc094A_01A3;
	message("\"To have not enough gold for that!\"");
	say();
	goto labelFunc094A_01A3;
labelFunc094A_01A3:
	message("\"To want something else?\"");
	say();
	var0000 = Func090A();
labelFunc094A_01AD:
	goto labelFunc094A_009C;
labelFunc094A_01B0:
	UI_pop_answers();
	return;
}


