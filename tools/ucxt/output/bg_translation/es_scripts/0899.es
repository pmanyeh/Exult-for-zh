#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0899 0x899 ()
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
	var0001 = ["nothing", "torch", "oil flasks", "backpack", "bag", "shovel", "powder keg", "lockpick", "hoe", "bucket"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0321, 0x0322, 0x0271, 0x02C0, 0x0273, 0x0272, 0x032A];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0005, 0x0048, 0x000F, 0x0008, 0x0014, 0x0023, 0x000A, 0x0014, 0x0008];
	var0005 = ["", "a ", "", "a ", "a ", "a ", "a ", "a ", "a ", "a "];
	var0006 = [0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = ["", "", " for a dozen", "", "", "", "", "", "", ""];
	var0008 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0899_010E:
	if (!var0000) goto labelFunc0899_0234;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0899_0132;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0899_0231;
labelFunc0899_0132:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" That is a fair price, is it not?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0899_01F4;
	if (!((var0002[var0009] == 0x030E) || ((var0002[var0009] == 0x0253) || (var0002[var0009] == 0x0273)))) goto labelFunc0899_01D2;
	if (!(var0002[var0009] == 0x030E)) goto labelFunc0899_01A9;
	message("\"How many sets of twelve wouldst thou like?\"");
	say();
	goto labelFunc0899_01AD;
labelFunc0899_01A9:
	message("\"How many wouldst thou like?\"");
	say();
labelFunc0899_01AD:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0014, 0x0001, true);
	goto labelFunc0899_01F4;
labelFunc0899_01D2:
	var000B = Func08F8(var0002[var0009], var0003, var0008[var0009], var0004[var0009], 0x0000, 0x0001, false);
labelFunc0899_01F4:
	if (!(var000B == 0x0001)) goto labelFunc0899_0205;
	message("\"Done!\"");
	say();
	goto labelFunc0899_0227;
labelFunc0899_0205:
	if (!(var000B == 0x0002)) goto labelFunc0899_0216;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0899_0227;
labelFunc0899_0216:
	if (!(var000B == 0x0003)) goto labelFunc0899_0227;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0899_0227;
labelFunc0899_0227:
	message("\"Wouldst thou like something else?\"");
	say();
	var0000 = Func090A();
labelFunc0899_0231:
	goto labelFunc0899_010E;
labelFunc0899_0234:
	UI_pop_answers();
	return;
}


