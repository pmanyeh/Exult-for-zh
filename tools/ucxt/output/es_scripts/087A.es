#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func087A 0x87A ()
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
	var0001 = ["nothing", "torch", "oil flasks", "backpack", "bag", "shovel", "hoe", "powder keg", "pick", "bedroll"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0321, 0x0322, 0x0271, 0x0272, 0x02C0, 0x0270, 0x0247];
	var0003 = [0x0000, 0x0003, 0x0030, 0x000A, 0x0003, 0x000A, 0x000A, 0x001E, 0x000C, 0x0010];
	var0004 = ["", "a ", "", "a ", "a ", "a ", "a ", "a ", "a ", "a "];
	var0005 = 0x0000;
	var0006 = ["", "", " for a dozen", "", "", "", "", "", "", ""];
	var0007 = 0xFE99;
	var0008 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What can I sell to thee?\"");
	say();
labelFunc087A_00F0:
	if (!var0000) goto labelFunc087A_01FF;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc087A_0114;
	message("\"Very good.\"");
	say();
	var0000 = false;
	goto labelFunc087A_01FC;
labelFunc087A_0114:
	var000A = Func091B(var0004[var0009], var0001[var0009], var0005, var0003[var0009], var0006);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(". Is that acceptable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc087A_01BF;
	if (!((var0002[var0009] == 0x0253) || (var0002[var0009] == 0x030E))) goto labelFunc087A_01A0;
	if (!(var0002[var0009] == 0x030E)) goto labelFunc087A_017A;
	message("\"How many sets of twelve wouldst thou like?\"");
	say();
	goto labelFunc087A_017E;
labelFunc087A_017A:
	message("\"How many wouldst thou like?\"");
	say();
labelFunc087A_017E:
	var000B = Func08F8(var0002[var0009], var0007, var0008, var0003[var0009], 0x0014, 0x0001, true);
	goto labelFunc087A_01BF;
labelFunc087A_01A0:
	var000B = Func08F8(var0002[var0009], var0007, var0008, var0003[var0009], 0x0000, 0x0001, false);
labelFunc087A_01BF:
	if (!(var000B == 0x0001)) goto labelFunc087A_01D0;
	message("\"Very good!\"");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01D0:
	if (!(var000B == 0x0002)) goto labelFunc087A_01E1;
	message("\"I am sorry, but thou cannot possibly carry that much weight!\"");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01E1:
	if (!(var000B == 0x0003)) goto labelFunc087A_01F2;
	message("\"Thou dost not have enough gold for that,\" he says, shaking his head.~~\"Too many birds in the hand is worth a bush.\"");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01F2:
	message("\"Wouldst thou care to purchase something else?\"");
	say();
	var0000 = Func090A();
labelFunc087A_01FC:
	goto labelFunc087A_00F0;
labelFunc087A_01FF:
	UI_pop_answers();
	return;
}


