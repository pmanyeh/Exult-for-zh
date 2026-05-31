#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08DC 0x8DC ()
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
	var0001 = ["nothing", "Ginseng", "Blood Moss", "Sulfurous Ash", "Mandrake Root", "Black Pearl"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0005, 0x0001, 0x0007, 0x0003, 0x0000];
	var0004 = [0x0000, 0x0002, 0x0003, 0x0004, 0x0005, 0x0005];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = "";
	var0008 = 0x0001;
	message("\"What reagent wouldst thou like to buy?\"");
	say();
labelFunc08DC_0084:
	if (!var0000) goto labelFunc08DC_0145;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08DC_00A8;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc08DC_0142;
labelFunc08DC_00A8:
	var000A = Func091B(var0005, var0001[var0009], var0006, var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Art thou willing to pay that much?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08DC_0105;
	message("\"How many wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0014, 0x0001, false);
labelFunc08DC_0105:
	if (!(var000B == 0x0001)) goto labelFunc08DC_0116;
	message("\"Done!\"");
	say();
	goto labelFunc08DC_0138;
labelFunc08DC_0116:
	if (!(var000B == 0x0002)) goto labelFunc08DC_0127;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08DC_0138;
labelFunc08DC_0127:
	if (!(var000B == 0x0003)) goto labelFunc08DC_0138;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08DC_0138;
labelFunc08DC_0138:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc08DC_0142:
	goto labelFunc08DC_0084;
labelFunc08DC_0145:
	UI_pop_answers();
	return;
}


