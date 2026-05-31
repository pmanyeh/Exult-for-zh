#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0871 0x871 ()
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
	var0002 = ["nothing", "jerky", "mead", "fish", "ham", "silverleaf", "ale", "wine"];
	var0003 = [0x0000, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x000F, 0x0000, 0x000D, 0x000B, 0x001F, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0019, 0x0005, 0x0003, 0x000A, 0x0014, 0x0002, 0x0002];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " for ten pieces", " for a bottle", " each", " for one slice", " for a plateful", " for a bottle", " for a bottle"];
	var0009 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like?\"");
	say();
labelFunc0871_00D2:
	if (!var0001) goto labelFunc0871_021E;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0871_00F6;
	message("\"Very well.\"");
	say();
	var0001 = false;
	goto labelFunc0871_021B;
labelFunc0871_00F6:
	if (!(var000A == 0x0006)) goto labelFunc0871_010D;
	if (!gflags[0x012B]) goto labelFunc0871_010D;
	message("\"I have no more. For some reason, no one is sending Silverleaf to us, so I cannot make a meal from it.\"");
	say();
	goto labelFunc0871_0211;
labelFunc0871_010D:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Is that all right?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0871_01D2;
	if (!(var0003[var000A] == 0x0268)) goto labelFunc0871_017C;
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0000, 0x0001, true);
	goto labelFunc0871_01D2;
labelFunc0871_017C:
	var000B = "How many ";
	if (!(var0009[var000A] > 0x0001)) goto labelFunc0871_0199;
	var000B = (var000B + "sets ");
labelFunc0871_0199:
	var000B = (var000B + "wouldst thou like?");
	message("\"^");
	message(var000B);
	message("\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0014, 0x0001, true);
labelFunc0871_01D2:
	if (!(var000C == 0x0001)) goto labelFunc0871_01E3;
	message("\"Done!\"");
	say();
	goto labelFunc0871_0211;
labelFunc0871_01E3:
	if (!(var000C == 0x0002)) goto labelFunc0871_01FA;
	message("\"But, ");
	message(var0000);
	message(", thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0871_0211;
labelFunc0871_01FA:
	if (!(var000C == 0x0003)) goto labelFunc0871_0211;
	message("\"I am sorry, ");
	message(var0000);
	message(", thou hast not enough gold for that.\"");
	say();
	goto labelFunc0871_0211;
labelFunc0871_0211:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc0871_021B:
	goto labelFunc0871_00D2;
labelFunc0871_021E:
	UI_pop_answers();
	return;
}


