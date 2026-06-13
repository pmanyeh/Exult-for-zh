#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0820 0x820 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func081F 0x81F ()
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
	var0005 = [0xFE99, 0x0005, 0x0001, 0x0003];
	var0006 = [0x0000, 0x0008, 0x000F, 0x0005];
	var0007 = [0x0000, 0x0005, 0x0009, 0x0002];
	var0008 = 0x0284;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to ease thy thirst, ");
	message(var0000);
	message("?\"");
	say();
labelFunc081F_00A2:
	if (!var0002) goto labelFunc081F_029E;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc081F_00C6;
	message("\"We have plenty, if thou dost change thy mind!\"");
	say();
	var0002 = false;
	goto labelFunc081F_029B;
labelFunc081F_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc081F_00EF;
	message("\"For that, I must ask ");
	message(var000C);
	message(" gold coins... The last batch was below standard so I sent it back.\" *\"We have very little left. Is this a price that thou canst pay?\"");
	say();
	var000E = "wine bottles";
labelFunc081F_00EF:
	if (!(var000B == 0x0003)) goto labelFunc081F_0109;
	message("\"Thou wilt find the light spice in this brew quite refreshing. At ");
	message(var000C);
	message(" gold coins, wilt thou try some?\"");
	say();
	var000E = "bottles of mead";
labelFunc081F_0109:
	if (!(var000B == 0x0004)) goto labelFunc081F_0129;
	message("\"This batch went a bit flat on us, ");
	message(var0000);
	message(". So I'll not ask more than ");
	message(var000C);
	message(" gold coins for it. Dost thou find that acceptable?\"");
	say();
	var000E = "mugs of ale";
labelFunc081F_0129:
	if (!(var000C == var0007[var000B])) goto labelFunc081F_014E;
	if (!Func0955()) goto labelFunc081F_0145;
	var000F = var000C;
	goto labelFunc081F_014B;
labelFunc081F_0145:
	var000F = 0x0000;
labelFunc081F_014B:
	goto labelFunc081F_0160;
labelFunc081F_014E:
	var000F = Func0820(var0006[var000B], var0007[var000B]);
labelFunc081F_0160:
	if (!(var000F > 0x0000)) goto labelFunc081F_01CE;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc081F_01A9;
	message("\"How many ");
	message(var000E);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc081F_01CE;
labelFunc081F_01A9:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc081F_01CE:
	if (!(var000D == 0x0001)) goto labelFunc081F_01E5;
	message("\"Here's to thine health, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc081F_0291;
labelFunc081F_01E5:
	if (!(var000D == 0x0002)) goto labelFunc081F_01FC;
	message("\"I'm afraid thou canst not carry so many bottles, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc081F_0291;
labelFunc081F_01FC:
	if (!(var000D == 0x0003)) goto labelFunc081F_0291;
	var0010 = Func0992(0x0001, (("@But " + var0001) + ", we lack adequate funds!@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc081F_0246;
	UI_show_npc_face0(0xFFD7, 0x0000);
	message("\"I like a cup or two myself, from time to time.\" *\"I would let thee drink for free, but I have little enough for the paying customers these days.\"");
	say();
	message("\"I fear thou shalt have to do with water, ");
	message(var0000);
	message(". That I have in plenty.\"");
	say();
	goto labelFunc081F_029E;
	goto labelFunc081F_025D;
labelFunc081F_0246:
	message("\"I'm sorry, ");
	message(var0000);
	message(", thou dost not have enough for that.\" *\"I would let thee drink for free, but I have little enough for the paying customers these days.\"");
	say();
	message("\"I fear thou shalt have to do with water, ");
	message(var0000);
	message(". That I have in plenty.\"");
	say();
	goto labelFunc081F_029E;
labelFunc081F_025D:
	if (!(0x001F < (UI_get_npc_id(0xFFD7) + 0x0006))) goto labelFunc081F_027C;
	UI_set_npc_id(0xFFD7, 0x001F);
	goto labelFunc081F_028E;
labelFunc081F_027C:
	UI_set_npc_id(0xFFD7, (UI_get_npc_id(0xFFD7) + 0x0006));
labelFunc081F_028E:
	goto labelFunc081F_0291;
labelFunc081F_0291:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc081F_029B:
	goto labelFunc081F_00A2;
labelFunc081F_029E:
	UI_pop_answers();
	return;
}


