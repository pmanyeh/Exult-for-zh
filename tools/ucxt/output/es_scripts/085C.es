#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func085C 0x85C ()
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
	var0001 = ["nothing", "heavy cloak", "tunic", "pants", "dress", "hood"];
	var0002 = [0x0000, 0x011D, 0x00F9, 0x02E2, 0x00F9, 0x01BC];
	var0003 = [0x0000, 0x0032, 0x001E, 0x001E, 0x002D, 0x000A];
	var0004 = ["", "a ", "a ", "", "a ", "a "];
	var0005 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000];
	var0006 = ["", "", "", " per pair", "", ""];
	var0007 = [0xFE99, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001];
	var0008 = 0x0001;
	message("\"What article wouldst thou like to buy?\"");
	say();
labelFunc085C_00BA:
	if (!var0000) goto labelFunc085C_0180;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc085C_00DE;
	message("\"Fine!\"");
	say();
	var0000 = false;
	goto labelFunc085C_017D;
labelFunc085C_00DE:
	var000A = Func091B(var0004[var0009], var0001[var0009], var0005[var0009], var0003[var0009], var0006[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Art thou willing to pay my price?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc085C_0140;
	var000B = Func08F8(var0002[var0009], var0007[var0009], var0008, var0003[var0009], 0x0000, 0x0001, false);
labelFunc085C_0140:
	if (!(var000B == 0x0001)) goto labelFunc085C_0151;
	message("\"Excellent choice!\"");
	say();
	goto labelFunc085C_0173;
labelFunc085C_0151:
	if (!(var000B == 0x0002)) goto labelFunc085C_0162;
	message("\"Thou must put away one of thine other items before thou canst take this fine piece of clothing.\"");
	say();
	goto labelFunc085C_0173;
labelFunc085C_0162:
	if (!(var000B == 0x0003)) goto labelFunc085C_0173;
	message("\"Thou dost not have enough gold for my fine apparel. Perhaps in the near future.\"");
	say();
	goto labelFunc085C_0173;
labelFunc085C_0173:
	message("\"Is there something else thou wouldst like to see?\"");
	say();
	var0000 = Func090A();
labelFunc085C_017D:
	goto labelFunc085C_00BA;
labelFunc085C_0180:
	UI_pop_answers();
	return;
}


