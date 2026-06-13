#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0854 0x854 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0853 0x853 ()
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
	var var0010;

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "wine", "mead", "ale"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0000, 0x0005, 0x0003];
	var0006 = [0x0000, 0x000F, 0x0014, 0x0007];
	var0007 = [0x0000, 0x0008, 0x000B, 0x0004];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("\"What dost thou want to drink, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0853_00A2:
	if (!var0002) goto labelFunc0853_0245;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0853_00C6;
	message("\"If thou dost change thy mind, ask me again!\"");
	say();
	var0002 = false;
	goto labelFunc0853_0242;
labelFunc0853_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc0853_00EF;
	message("\"");
	message(var000C);
	message(" guilders is what Rocco charges for wine, though it is very good. Dost thou accept?\"");
	say();
	var000E = "wine bottles";
labelFunc0853_00EF:
	if (!(var000B == 0x0003)) goto labelFunc0853_010D;
	message("\"The mead Rocco imports is sweetly flavored with the honey of bees raised in the mountain highlands.\"");
	say();
	message("\"For the price of ");
	message(var000C);
	message(" guilders, thou wilt accept some?\"");
	say();
	var000E = "bottles of mead";
labelFunc0853_010D:
	if (!(var000B == 0x0004)) goto labelFunc0853_0127;
	message("\"Our ale is weak, as it is imported from the mainland, but Rocco must still charge ");
	message(var000C);
	message(" guilders for it. Dost thou find the price acceptable?\"");
	say();
	var000E = "flasks of ale";
labelFunc0853_0127:
	if (!(var000C == var0007[var000B])) goto labelFunc0853_014C;
	if (!Func0955()) goto labelFunc0853_0143;
	var000F = var000C;
	goto labelFunc0853_0149;
labelFunc0853_0143:
	var000F = 0x0000;
labelFunc0853_0149:
	goto labelFunc0853_015E;
labelFunc0853_014C:
	var000F = Func0854(var0006[var000B], var0007[var000B]);
labelFunc0853_015E:
	if (!(var000F > 0x0000)) goto labelFunc0853_01CC;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc0853_01A7;
	message("\"How many ");
	message(var000E);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc0853_01CC;
labelFunc0853_01A7:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc0853_01CC:
	if (!(var000D == 0x0001)) goto labelFunc0853_01E3;
	message("\"Enjoy thy drink, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0853_0238;
labelFunc0853_01E3:
	if (!(var000D == 0x0002)) goto labelFunc0853_01F4;
	message("\"Thou canst not carry thy drink!\"");
	say();
	goto labelFunc0853_0238;
labelFunc0853_01F4:
	if (!(var000D == 0x0003)) goto labelFunc0853_0238;
	var0010 = Func0992(0x0001, (("@But " + var0001) + ", we lack adequate funds!@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc0853_0231;
	UI_show_npc_face0(0xFFE4, 0x0000);
	message("\"Then thy thirst must be quenched by well water, I'm afraid.\"");
	say();
	goto labelFunc0853_0235;
labelFunc0853_0231:
	message("\"It seems thou dost not have the funds to pay me... Hast thou considered drinking from the public well?\"");
	say();
labelFunc0853_0235:
	goto labelFunc0853_0238;
labelFunc0853_0238:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc0853_0242:
	goto labelFunc0853_00A2;
labelFunc0853_0245:
	UI_pop_answers();
	return;
}


