#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08A0 0x8A0 ()
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

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "mutton", "beef", "mead", "trout", "ham", "Silverleaf", "bread", "cake", "ale", "wine"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0009, 0x0000, 0x000C, 0x000B, 0x001F, 0x0000, 0x0004, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0005, 0x0012, 0x000C, 0x0004, 0x0012, 0x002D, 0x0003, 0x0002, 0x0004, 0x0004];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " for one portion", " for a rack", " for a bottle", " for one portion", " for one slice", " for one portion", " for a loaf", " for one piece", " for a bottle", " for a bottle"];
	var0009 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc08A0_00E7:
	if (!var0001) goto labelFunc08A0_01FA;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08A0_010B;
	message("\"Fine.\"");
	say();
	var0001 = false;
	goto labelFunc08A0_01F7;
labelFunc08A0_010B:
	if (!(var000A == 0x0007)) goto labelFunc08A0_0128;
	if (!gflags[0x012B]) goto labelFunc08A0_0128;
	message("\"'Tis all gone, ");
	message(var0000);
	message(". And the logger will cut down no more Silverleaf trees. I expect it will become even more of a delicacy, and more expensive, if I can ever get any more to sell.\"");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_0128:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Does that sound like a fair price?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc08A0_01BA;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc08A0_0198;
	message("\"How many wouldst thou like?\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc08A0_01BA;
labelFunc08A0_0198:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc08A0_01BA:
	if (!(var000C == 0x0001)) goto labelFunc08A0_01CB;
	message("\"Done!\"");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01CB:
	if (!(var000C == 0x0002)) goto labelFunc08A0_01DC;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01DC:
	if (!(var000C == 0x0003)) goto labelFunc08A0_01ED;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08A0_01ED;
labelFunc08A0_01ED:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc08A0_01F7:
	goto labelFunc08A0_00E7;
labelFunc08A0_01FA:
	UI_pop_answers();
	return;
}


