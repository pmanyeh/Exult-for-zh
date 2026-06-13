#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0953 0x953 ()
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
	var0001 = ["nothing", "chain coif", "chain armour", "chain leggings", "gauntlets", "great helm", "plate armour", "plate leggings", "crested helm"];
	var0002 = [0x0000, 0x021B, 0x023B, 0x023F, 0x0244, 0x021D, 0x023D, 0x0240, 0x021E];
	var0003 = [0x0000, 0x0050, 0x0064, 0x0032, 0x0014, 0x0096, 0x012C, 0x0078, 0x003C];
	var0004 = 0xFE99;
	var0005 = ["", "a ", "", "", "", "a ", "", "", "a "];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000];
	var0007 = ["", "", "", " for a pair", " for a pair", "", "", " for a pair", ""];
	var0008 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0953_00DE:
	if (!var0000) goto labelFunc0953_01A1;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0953_0102;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0953_019E;
labelFunc0953_0102:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0003[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Is that acceptable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0953_0161;
	var000B = Func08F8(var0002[var0009], var0004, var0008, var0003[var0009], 0x0000, 0x0001, false);
labelFunc0953_0161:
	if (!(var000B == 0x0001)) goto labelFunc0953_0172;
	message("\"Done!\"");
	say();
	goto labelFunc0953_0194;
labelFunc0953_0172:
	if (!(var000B == 0x0002)) goto labelFunc0953_0183;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0953_0194;
labelFunc0953_0183:
	if (!(var000B == 0x0003)) goto labelFunc0953_0194;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0953_0194;
labelFunc0953_0194:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0953_019E:
	goto labelFunc0953_00DE;
labelFunc0953_01A1:
	UI_pop_answers();
	return;
}


