#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08B9 0x8B9 ()
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
	var0002 = ["nothing", "mutton", "bread", "flounder", "Silverleaf", "wine", "ale"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0001, 0x000D, 0x001F, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0006, 0x0005, 0x0005, 0x0032, 0x0005, 0x0005];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " for one portion", " for one loaf", " for one portion", " for one portion", " per bottle", " per bottle"];
	var0009 = 0x0001;
	message("\"What suits thy fancy?\"");
	say();
labelFunc08B9_00AB:
	if (!var0001) goto labelFunc08B9_01BC;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc08B9_00CF;
	message("\"Mmmm. Thou wilt love it.\"");
	say();
	var0001 = false;
	goto labelFunc08B9_01B9;
labelFunc08B9_00CF:
	if (!(var000A == 0x0005)) goto labelFunc08B9_00E9;
	if (!gflags[0x012B]) goto labelFunc08B9_00E9;
	message("\"I have no more left, ");
	message(var0000);
	message(". Silverleaf trees are no longer being cut down and my supply has diminished.\"");
	say();
labelFunc08B9_00E9:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Too rich for thy blood?\"");
	say();
	var000D = Func090A();
	if (!(!var000D)) goto labelFunc08B9_017C;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc08B9_015A;
	message("\"How many wouldst thou like?\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc08B9_017C;
labelFunc08B9_015A:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc08B9_017C:
	if (!(var000C == 0x0001)) goto labelFunc08B9_018D;
	message("\"Done!\"");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_018D:
	if (!(var000C == 0x0002)) goto labelFunc08B9_019E;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_019E:
	if (!(var000C == 0x0003)) goto labelFunc08B9_01AF;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08B9_01AF;
labelFunc08B9_01AF:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc08B9_01B9:
	goto labelFunc08B9_00AB;
labelFunc08B9_01BC:
	UI_pop_answers();
	return;
}


