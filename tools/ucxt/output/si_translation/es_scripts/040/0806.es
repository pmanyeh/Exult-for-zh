#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0807 0x807 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);

void Func0806 0x806 ()
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
	var var000F;

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "wine", "mead", "ale"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0005, 0x0001, 0x0003];
	var0006 = [0x0000, 0x0008, 0x000F, 0x0005];
	var0007 = [0x0000, 0x0005, 0x0009, 0x0002];
	var0008 = 0x0284;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to quench thy thirst, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0806_00A2:
	if (!var0002) goto labelFunc0806_0249;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0806_00C6;
	message("\"Our cellars are full, if thou dost change thy mind!\"");
	say();
	var0002 = false;
	goto labelFunc0806_0246;
labelFunc0806_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc0806_00EF;
	message("\"Ah, that will be ");
	message(var000C);
	message(" gold coins. We have very little left.\" ~\"Dost thou accept?\"");
	say();
	var000E = "bottles of wine";
labelFunc0806_00EF:
	if (!(var000B == 0x0003)) goto labelFunc0806_0109;
	message("\"At ");
	message(var000C);
	message(", wilt thou try some?\"");
	say();
	var000E = "bottles of mead";
labelFunc0806_0109:
	if (!(var000B == 0x0004)) goto labelFunc0806_0123;
	message("\"");
	message(var000C);
	message(" is the price. Dost thou find that acceptable?\"");
	say();
	var000E = "mugs of ale";
labelFunc0806_0123:
	if (!(var000C == var0007[var000B])) goto labelFunc0806_0148;
	if (!Func0955()) goto labelFunc0806_013F;
	var000F = var000C;
	goto labelFunc0806_0145;
labelFunc0806_013F:
	var000F = 0x0000;
labelFunc0806_0145:
	goto labelFunc0806_015A;
labelFunc0806_0148:
	var000F = Func0807(var0006[var000B], var0007[var000B]);
labelFunc0806_015A:
	if (!(var000F > 0x0000)) goto labelFunc0806_01C8;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc0806_01A3;
	message("\"How many ");
	message(var000E);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc0806_01C8;
labelFunc0806_01A3:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc0806_01C8:
	if (!(var000D == 0x0001)) goto labelFunc0806_01DF;
	message("\"Drink in health, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0806_023C;
labelFunc0806_01DF:
	if (!(var000D == 0x0002)) goto labelFunc0806_01F6;
	message("\"Thou canst not carry so many bottles, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0806_023C;
labelFunc0806_01F6:
	if (!(var000D == 0x0003)) goto labelFunc0806_023C;
	message("\"I am afraid thou dost not have the money to pay, ");
	message(var0000);
	message(".\"");
	say();
	if (!(0x001F < (UI_get_npc_id(0xFFDA) + 0x0006))) goto labelFunc0806_0229;
	UI_set_npc_id(0xFFDA, 0x001F);
	goto labelFunc0806_023B;
labelFunc0806_0229:
	UI_set_npc_id(0xFFDA, (UI_get_npc_id(0xFFDA) + 0x0006));
labelFunc0806_023B:
	abort;
labelFunc0806_023C:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc0806_0246:
	goto labelFunc0806_00A2;
labelFunc0806_0249:
	UI_pop_answers();
	return;
}


