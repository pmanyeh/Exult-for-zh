#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CB 0x8CB ()
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
	var0002 = ["nothing", "mutton rations", "trout", "Silverleaf", "cake", "ham"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000F, 0x000C, 0x001F, 0x0005, 0x000B];
	var0005 = [0x0000, 0x000C, 0x0002, 0x0019, 0x0002, 0x000A];
	var0006 = ["", "", "", "", "", ""];
	var0007 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0008 = ["", " for ten servings", " for one portion", " for one portion", " per piece", " for a slice"];
	var0009 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08CB_00D2:
	if (!var0001) goto labelFunc08CB_01C2;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08CB_00FC;
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc08CB_01BF;
labelFunc08CB_00FC:
	if (!(var000A == 0x0004)) goto labelFunc08CB_0119;
	if (!gflags[0x012B]) goto labelFunc08CB_0119;
	message("\"I am truly sorry, ");
	message(var0000);
	message(", but I have not been able to get any of that for some time now. It seems the man who used to cut down the Silverleaf trees has stopped.\"");
	say();
	goto labelFunc08CB_01B5;
labelFunc08CB_0119:
	var000B = Func091B(var0006[var000A], var0002[var000A], var0007[var000A], var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(". Art thou happy with the price?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08CB_0182;
	message("\"How many dost thou want?\"");
	say();
	var000E = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0014, 0x0001, true);
labelFunc08CB_0182:
	if (!(var000E == 0x0001)) goto labelFunc08CB_0193;
	message("\"Agreed.\"");
	say();
	goto labelFunc08CB_01B5;
labelFunc08CB_0193:
	if (!(var000E == 0x0002)) goto labelFunc08CB_01A4;
	message("\"Thou cannot carry that much!\"");
	say();
	goto labelFunc08CB_01B5;
labelFunc08CB_01A4:
	if (!(var000E == 0x0003)) goto labelFunc08CB_01B5;
	message("\"Thou hast not the gold for that!\"");
	say();
	goto labelFunc08CB_01B5;
labelFunc08CB_01B5:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc08CB_01BF:
	goto labelFunc08CB_00D2;
labelFunc08CB_01C2:
	UI_pop_answers();
	return;
}


