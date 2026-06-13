#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0842 0x842 ()
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

	UI_push_answers();
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = true;
	var0003 = ["nothing", "mutton", "bread", "mead", "flounder", "Silverleaf", "cake", "wine", "ale"];
	var0004 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0008, 0x0000, 0x0000, 0x000D, 0x001F, 0x0004, 0x0005, 0x0003];
	var0006 = [0x0000, 0x0003, 0x0002, 0x0007, 0x0003, 0x001E, 0x0002, 0x0003, 0x0002];
	var0007 = "";
	var0008 = 0x0000;
	var0009 = ["", " for one portion", " for one loaf", " for one bottle", " for one portion", " for one portion", " for one portion", " per bottle", " per bottle"];
	var000A = 0x0001;
	message("\"What wouldst thou like?\"");
	say();
labelFunc0842_00D0:
	if (!var0002) goto labelFunc0842_01F4;
	var000B = Func090C(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0842_00FF;
	message("\"Nothing at all? Well, alright.\"");
	say();
	if (!(!var0001)) goto labelFunc0842_00F8;
	message("She bats her eyelashes at you and grins.");
	say();
labelFunc0842_00F8:
	var0002 = false;
	goto labelFunc0842_01F1;
labelFunc0842_00FF:
	if (!(var000B == 0x0006)) goto labelFunc0842_011C;
	if (!gflags[0x012B]) goto labelFunc0842_011C;
	message("\"I have none to sell thee, ");
	message(var0000);
	message(", for the logger will no longer supply it.\"");
	say();
	goto labelFunc0842_01E7;
labelFunc0842_011C:
	var000C = Func091B(var0007, var0003[var000B], var0008, var0006[var000B], var0009[var000B]);
	var000D = 0x0000;
	message("\"^");
	message(var000C);
	message(" Is that price all right?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc0842_01AE;
	if (!(var0004[var000B] == 0x0179)) goto labelFunc0842_018C;
	message("\"How many wouldst thou like?\"");
	say();
	var000D = Func08F8(var0004[var000B], var0005[var000B], var000A, var0006[var000B], 0x0014, 0x0001, true);
	goto labelFunc0842_01AE;
labelFunc0842_018C:
	var000D = Func08F8(var0004[var000B], var0005[var000B], var000A, var0006[var000B], 0x0000, 0x0001, true);
labelFunc0842_01AE:
	if (!(var000D == 0x0001)) goto labelFunc0842_01BF;
	message("\"'Tis thine!\"");
	say();
	goto labelFunc0842_01E7;
labelFunc0842_01BF:
	if (!(var000D == 0x0002)) goto labelFunc0842_01D6;
	message("\"Thou cannot possibly carry that much, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0842_01E7;
labelFunc0842_01D6:
	if (!(var000D == 0x0003)) goto labelFunc0842_01E7;
	message("\"Hmmm. Thou dost not have enough gold!\"");
	say();
	goto labelFunc0842_01E7;
labelFunc0842_01E7:
	message("\"Wouldst thou like something else?\"");
	say();
	var0002 = Func090A();
labelFunc0842_01F1:
	goto labelFunc0842_00D0;
labelFunc0842_01F4:
	UI_pop_answers();
	return;
}


