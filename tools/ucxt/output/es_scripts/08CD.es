#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CD 0x8CD ()
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
	var0001 = ["nothing", "jerky", "mead", "grapes", "cheese", "bread", "ale", "wine"];
	var0002 = [0x0000, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0003 = [0xFE99, 0x000F, 0x0000, 0x0013, 0x001B, 0x0000, 0x0003, 0x0005];
	var0004 = [0x0000, 0x000C, 0x0004, 0x0001, 0x0004, 0x0002, 0x0001, 0x0002];
	var0005 = "";
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000];
	var0007 = ["", " for 10 pieces", " for a bottle", " for one bunch", " per wedge", " for a loaf", " for a bottle", " for a bottle"];
	var0008 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08CD_00E1:
	if (!var0000) goto labelFunc08CD_020D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08CD_0105;
	message("\"All right.\"");
	say();
	var0000 = false;
	goto labelFunc08CD_020A;
labelFunc08CD_0105:
	var000A = Func091B(var0005, var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Canst thou afford my price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08CD_01CD;
	if (!(var0002[var0009] == 0x0268)) goto labelFunc08CD_0177;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0000, 0x0001, true);
	goto labelFunc08CD_01CD;
labelFunc08CD_0177:
	var000A = "How many ";
	if (!(var0008[var0009] > 0x0001)) goto labelFunc08CD_0194;
	var000A = (var000A + "sets ");
labelFunc08CD_0194:
	var000A = (var000A + "wouldst thou like?");
	message("\"^");
	message(var000A);
	message("\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
labelFunc08CD_01CD:
	if (!(var000B == 0x0001)) goto labelFunc08CD_01DE;
	message("\"Excellent.\"");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_01DE:
	if (!(var000B == 0x0002)) goto labelFunc08CD_01EF;
	message("\"Thou cannot carry that much of a load.\"");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_01EF:
	if (!(var000B == 0x0003)) goto labelFunc08CD_0200;
	message("\"Thou dost not have the gold for that!\"");
	say();
	goto labelFunc08CD_0200;
labelFunc08CD_0200:
	message("\"Is there something else thou mayest wish to buy?\"");
	say();
	var0000 = Func090A();
labelFunc08CD_020A:
	goto labelFunc08CD_00E1;
labelFunc08CD_020D:
	UI_pop_answers();
	return;
}


