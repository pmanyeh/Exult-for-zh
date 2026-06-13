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
	var0001 = ["nothing", "Garlic", "Blood Moss", "Spider Silk", "Mandrake Root", "Nightshade"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0004, 0x0001, 0x0006, 0x0003, 0x0002];
	var0004 = [0x0000, 0x0002, 0x0003, 0x0003, 0x0005, 0x0005];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08C4_006C:
	if (!var0000) goto labelFunc08C4_0145;
	var0005 = Func090C(var0001);
	if (!(var0005 == 0x0001)) goto labelFunc08C4_0090;
	message("\"Fine.\"");
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
	message("\"^");
	message(var000A);
	message(" Okey-dokey?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08C4_0105;
	message("\"How many wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0005], var0003[var0005], var0009, var0004[var0005], 0x0014, 0x0001, true);
labelFunc08C4_0105:
	if (!(var000B == 0x0001)) goto labelFunc08C4_0116;
	message("\"Done!\"");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0116:
	if (!(var000B == 0x0002)) goto labelFunc08C4_0127;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0127:
	if (!(var000B == 0x0003)) goto labelFunc08C4_0138;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08C4_0138;
labelFunc08C4_0138:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc08C4_0142:
	goto labelFunc08C4_006C;
labelFunc08C4_0145:
	UI_pop_answers();
	return;
}


