#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0874 0x874 ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["nothing", "torch", "backpack", "lockpicks", "bucket", "swamp boots", "bedroll"];
	var0002 = [0x0000, 0x0253, 0x0321, 0x0273, 0x032A, 0x024C, 0x0247];
	var0003 = 0xFE99;
	var0004 = [0x0000, 0x0004, 0x000C, 0x0008, 0x0002, 0x0028, 0x000F];
	var0005 = ["a ", "a ", "a ", "some ", "a ", "a pair of ", "a "];
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000];
	var0007 = "";
	var0008 = 0x0001;
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc0874_00A5:
	if (!var0000) goto labelFunc0874_01AF;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0874_00C9;
	message("\"Fine.\"");
	say();
	var0000 = false;
	goto labelFunc0874_01AC;
labelFunc0874_00C9:
	var000A = Func091B(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message(" Is that acceptable?\"");
	say();
	if (!((var0002[var0009] == 0x0273) || (var0002[var0009] == 0x0253))) goto labelFunc0874_0144;
	var000C = Func090A();
	if (!var000C) goto labelFunc0874_0141;
	message("\"How many wouldst thou like?\"");
	say();
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0005, 0x0001, true);
labelFunc0874_0141:
	goto labelFunc0874_016F;
labelFunc0874_0144:
	var000D = Func090A();
	if (!var000D) goto labelFunc0874_016F;
	var000B = Func08F8(var0002[var0009], var0003, var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc0874_016F:
	if (!(var000B == 0x0001)) goto labelFunc0874_0180;
	message("\"Very good. At last we are getting somewhere!\"");
	say();
	goto labelFunc0874_01A2;
labelFunc0874_0180:
	if (!(var000B == 0x0002)) goto labelFunc0874_0191;
	message("\"Thou hast thine hands full, idiot!\"");
	say();
	goto labelFunc0874_01A2;
labelFunc0874_0191:
	if (!(var000B == 0x0003)) goto labelFunc0874_01A2;
	message("\"Thou hast a lot of gall attempting to buy something from my shop without enough gold in thy possession!\"");
	say();
	goto labelFunc0874_01A2;
labelFunc0874_01A2:
	message("\"Anything else for thee today?\"");
	say();
	var0000 = Func090A();
labelFunc0874_01AC:
	goto labelFunc0874_00A5;
labelFunc0874_01AF:
	UI_pop_answers();
	UI_pop_answers();
	return;
}


