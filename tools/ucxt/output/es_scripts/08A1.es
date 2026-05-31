#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A1 0x8A1 ()
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

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "torch", "oil flasks", "backpack", "lockpick", "powder keg", "jug", "cannon balls"];
	var0003 = [0x0000, 0x0253, 0x030E, 0x0321, 0x0273, 0x02C0, 0x0006, 0x02BF];
	var0004 = [0x0000, 0x0004, 0x003C, 0x000D, 0x000A, 0x001E, 0x0003, 0x000A];
	var0005 = ["", "a ", "", "a ", "a ", "a ", "a ", ""];
	var0006 = [0x0000, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001];
	var0007 = ["", "", " for a dozen", "", "", "", "", " each"];
	var0008 = 0xFE99;
	var0009 = 0x0001;
	message("\"What dost thou want to buy?\"");
	say();
labelFunc08A1_00D2:
	if (!var0001) goto labelFunc08A1_021A;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A1_00FC;
	message("\"Fine, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc08A1_0217;
labelFunc08A1_00FC:
	var000B = Func091B(var0005[var000A], var0002[var000A], var0006[var000A], var0004[var000A], var0007[var000A]);
	var000C = 0x0000;
	if (!((var0003[var000A] == 0x030E) || ((var0003[var000A] == 0x0253) || (var0003[var000A] == 0x0273)))) goto labelFunc08A1_0199;
	message("\"^");
	message(var000B);
	message(" Dost thou agree?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A1_0196;
	if (!(var0003[var000A] == 0x030E)) goto labelFunc08A1_0173;
	message("\"How many sets of twelve wouldst thou like?\"");
	say();
	goto labelFunc08A1_0177;
labelFunc08A1_0173:
	message("\"How many wouldst thou like?\"");
	say();
labelFunc08A1_0177:
	var000C = Func08F8(var0003[var000A], var0008, var0009, var0004[var000A], 0x0014, 0x0001, true);
labelFunc08A1_0196:
	goto labelFunc08A1_01CE;
labelFunc08A1_0199:
	message("\"^");
	message(var000B);
	message(". Is that acceptable?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc08A1_01CE;
	var000C = Func08F8(var0003[var000A], var0008, var0009, var0004[var000A], 0x0000, 0x0001, true);
labelFunc08A1_01CE:
	if (!(var000C == 0x0001)) goto labelFunc08A1_01E5;
	message("\"Very good, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc08A1_020D;
labelFunc08A1_01E5:
	if (!(var000C == 0x0002)) goto labelFunc08A1_01FC;
	message("\"But, ");
	message(var0000);
	message(", thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08A1_020D;
labelFunc08A1_01FC:
	if (!(var000C == 0x0003)) goto labelFunc08A1_020D;
	message("\"I am sorry, but thou hast not enough gold for that!\"");
	say();
	goto labelFunc08A1_020D;
labelFunc08A1_020D:
	message("\"Wouldst thou care to purchase something else?\"");
	say();
	var0001 = Func090A();
labelFunc08A1_0217:
	goto labelFunc08A1_00D2;
labelFunc08A1_021A:
	UI_pop_answers();
	return;
}


