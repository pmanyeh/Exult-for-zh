#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0838 0x838 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0837 0x837 ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "garlic", "ginseng", "onion", "apple", "carrot", "banana", "grapes"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x0004, 0x0005, 0x0016, 0x0010, 0x0012, 0x0011, 0x0013];
	var0005 = [0x0000, 0x0008, 0x0009, 0x0001, 0x0006, 0x0002, 0x0006, 0x0002];
	var0006 = [0x0000, 0x0004, 0x0005, 0x0001, 0x0003, 0x0002, 0x0003, 0x0002];
	var0007 = 0x03B7;
	var0008 = [0x0000, 0x0003, 0x0002, 0x0001, 0x0003, 0x0001, 0x0002, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0837_00F6;
	var000A = "Milady";
	goto labelFunc0837_00FC;
labelFunc0837_00F6:
	var000A = "Milord";
labelFunc0837_00FC:
	if (!var0001) goto labelFunc0837_0419;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc0837_0169;
	var000C = UI_die_roll(0x0001, 0x0003);
	if (!(var000C == 0x0001)) goto labelFunc0837_0132;
	var000D = "Perhaps later,";
labelFunc0837_0132:
	if (!(var000C == 0x0002)) goto labelFunc0837_0142;
	var000D = "Another time, then,";
labelFunc0837_0142:
	if (!(var000C == 0x0003)) goto labelFunc0837_0152;
	var000D = "Come again,";
labelFunc0837_0152:
	message("\"");
	message(var000D);
	message(" ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc0837_0416;
labelFunc0837_0169:
	var000E = var0005[var000B];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0004);
	if (!(var0010 == 0x0001)) goto labelFunc0837_0195;
	var0011 = "Dost thou accept?";
labelFunc0837_0195:
	if (!(var0010 == 0x0002)) goto labelFunc0837_01A5;
	var0011 = "Wilt thou pay my price?";
labelFunc0837_01A5:
	if (!(var0010 == 0x0003)) goto labelFunc0837_01B5;
	var0011 = "Dost thou agree?";
labelFunc0837_01B5:
	if (!(var0010 == 0x0004)) goto labelFunc0837_01C5;
	var0011 = "Is the price acceptable?";
labelFunc0837_01C5:
	if (!(var000B == 0x0002)) goto labelFunc0837_01E6;
	message("\"I can sell thee three cloves for ");
	message(var000E);
	message(" monetari.\"");
	say();
	message(var0011);
	message("\"");
	say();
	var0012 = "cloves of garlic, in bunches of three,";
labelFunc0837_01E6:
	if (!(var000B == 0x0003)) goto labelFunc0837_020A;
	message("\"");
	message(var000E);
	message(" monetari is what I ask for two bunches of ginseng roots.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "ginseng roots, in bunches of two,";
labelFunc0837_020A:
	if (!(var000B == 0x0004)) goto labelFunc0837_022E;
	message("\"For an onion, I ask ");
	message(var000E);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "onions";
labelFunc0837_022E:
	if (!(var000B == 0x0005)) goto labelFunc0837_0255;
	message("\"");
	message(var000E);
	message(" monetari will buy thee three apples, ");
	message(var0000);
	message(".\"");
	say();
	message(var0011);
	message("\"");
	say();
	var0012 = "apples, in bunches of three,";
labelFunc0837_0255:
	if (!(var000B == 0x0006)) goto labelFunc0837_0279;
	message("\"My carrots are exceptionally good this season! ");
	message(var000E);
	message(" monetari is the price.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "carrots";
labelFunc0837_0279:
	if (!(var000B == 0x0007)) goto labelFunc0837_02A0;
	message("\"");
	message(var000A);
	message(", thou shouldst try my bananas! I can sell thee two for ");
	message(var000E);
	message(" monetari.\"");
	say();
	message(var0011);
	message("\"");
	say();
	var0012 = "bananas, in bunches of two,";
labelFunc0837_02A0:
	if (!(var000B == 0x0008)) goto labelFunc0837_02C1;
	message("\"I can sell thee one bunch of grapes for ");
	message(var000E);
	message(" monetari.\"");
	say();
	message(var0011);
	message("\"");
	say();
	var0012 = "bunches of grapes";
labelFunc0837_02C1:
	if (!(var000E == var0006[var000B])) goto labelFunc0837_02E6;
	if (!Func0955()) goto labelFunc0837_02DD;
	var0013 = var000E;
	goto labelFunc0837_02E3;
labelFunc0837_02DD:
	var0013 = 0x0000;
labelFunc0837_02E3:
	goto labelFunc0837_02F8;
labelFunc0837_02E6:
	var0013 = Func0838(var0005[var000B], var0006[var000B]);
labelFunc0837_02F8:
	if (!(var0013 > 0x0000)) goto labelFunc0837_0363;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0837_0341;
	message("\"How many ");
	message(var0012);
	message(" wouldst thou like?\"");
	say();
	var000F = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0013, 0x000A, 0x0001, false);
	goto labelFunc0837_0363;
labelFunc0837_0341:
	var000F = Func0943(var0003[var000B], var0004[var000B], 0x0001, var0007, var0013, 0x0000, 0x0001, false);
labelFunc0837_0363:
	if (!(var000F == 0x0001)) goto labelFunc0837_037A;
	message("\"");
	message(var000A);
	message(", I hope thou dost enjoy thy purchase!\"");
	say();
	goto labelFunc0837_040C;
labelFunc0837_037A:
	if (!(var000F == 0x0002)) goto labelFunc0837_0391;
	message("\"I believe that thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0837_040C;
labelFunc0837_0391:
	if (!(var000F == 0x0003)) goto labelFunc0837_040C;
	var0014 = Func0992(0x0001, (("@But " + var0000) + ", we have not the monetari to purchase this.@"), 0x0000, false);
	if (!(var0014 != 0xFE9C)) goto labelFunc0837_03D4;
	UI_show_npc_face0(0xFFBD, 0x0000);
	message("\"Then I am afraid thou canst not purchase any of my goods, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0837_03D8;
labelFunc0837_03D4:
	message("\"I am afraid thou dost not have enough to pay for this...\"");
	say();
labelFunc0837_03D8:
	if (!(0x001F < (UI_get_npc_id(0xFFBD) + 0x0006))) goto labelFunc0837_03F7;
	UI_set_npc_id(0xFFBD, 0x001F);
	goto labelFunc0837_0409;
labelFunc0837_03F7:
	UI_set_npc_id(0xFFBD, (UI_get_npc_id(0xFFBD) + 0x0006));
labelFunc0837_0409:
	goto labelFunc0837_0419;
labelFunc0837_040C:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc0837_0416:
	goto labelFunc0837_00FC;
labelFunc0837_0419:
	UI_pop_answers();
	return;
}


