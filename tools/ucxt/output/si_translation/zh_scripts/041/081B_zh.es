#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func081C 0x81C (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func081B 0x81B ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "black pearls", "nightshade", "garlic", "ginseng", "mandrake", "onions", "apples", "carrots", "pumpkins"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x0000, 0x0002, 0x0004, 0x0005, 0x0003, 0x0016, 0x0010, 0x0012, 0x0015];
	var0005 = [0x0000, 0x0046, 0x0019, 0x000F, 0x0014, 0x0041, 0x0005, 0x0006, 0x0007, 0x0012];
	var0006 = [0x0000, 0x0023, 0x000D, 0x0009, 0x000B, 0x0023, 0x0002, 0x0003, 0x0004, 0x0009];
	var0007 = 0x03B4;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc081B_0110:
	if (!var0001) goto labelFunc081B_0482;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc081B_017D;
	var000B = UI_die_roll(0x0001, 0x0003);
	if (!(var000B == 0x0001)) goto labelFunc081B_0146;
	var000C = "Perhaps later,";
labelFunc081B_0146:
	if (!(var000B == 0x0002)) goto labelFunc081B_0156;
	var000C = "Another time then,";
labelFunc081B_0156:
	if (!(var000B == 0x0003)) goto labelFunc081B_0166;
	var000C = "Come again,";
labelFunc081B_0166:
	message("\"");
	message(var000C);
	message(" ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc081B_047F;
labelFunc081B_017D:
	var000D = var0005[var000A];
	var000E = 0x0000;
	var000B = UI_die_roll(0x0001, 0x0005);
	if (!(var000B == 0x0001)) goto labelFunc081B_01A9;
	var000F = "Dost thou accept?";
labelFunc081B_01A9:
	if (!(var000B == 0x0002)) goto labelFunc081B_01B9;
	var000F = "Wilt thou pay my price?";
labelFunc081B_01B9:
	if (!(var000B == 0x0003)) goto labelFunc081B_01C9;
	var000F = "Dost thou agree?";
labelFunc081B_01C9:
	if (!(var000B == 0x0004)) goto labelFunc081B_01D9;
	var000F = "Is the price acceptable?";
labelFunc081B_01D9:
	if (!(var000B == 0x0005)) goto labelFunc081B_01E9;
	var000F = "Is that agreeable with thee?";
labelFunc081B_01E9:
	if (!(var000A == 0x0002)) goto labelFunc081B_020A;
	message("\"These were bequeathed to me by my father. They are beautiful, are they not? I will sell one to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message(var000F);
	message("\"");
	say();
	var0010 = "black pearls";
labelFunc081B_020A:
	if (!(var000A == 0x0003)) goto labelFunc081B_022E;
	message("\"");
	message(var000D);
	message(" filari is what I ask for nightshade.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "nightshade mushrooms";
labelFunc081B_022E:
	if (!(var000A == 0x0004)) goto labelFunc081B_0252;
	message("\"I can sell thee sweet cloves of garlic for the pittance of ");
	message(var000D);
	message(" filari.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "cloves of garlic";
labelFunc081B_0252:
	if (!(var000A == 0x0005)) goto labelFunc081B_0279;
	message("\"");
	message(var000D);
	message(" filari is a fair price for my ginseng, ");
	message(var0000);
	message(".\"");
	say();
	message(var000F);
	message("\"");
	say();
	var0010 = "ginseng roots";
labelFunc081B_0279:
	if (!(var000A == 0x0006)) goto labelFunc081B_02A3;
	message("\"The mandrake root is very potent, ");
	message(var0000);
	message(". I charge ");
	message(var000D);
	message(" filari for one.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "mandrake roots";
labelFunc081B_02A3:
	if (!(var000A == 0x0007)) goto labelFunc081B_02C7;
	message("\"Mine onions are very sweet! ");
	message(var000D);
	message(" filari is what I ask.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "onions";
labelFunc081B_02C7:
	if (!(var000A == 0x0008)) goto labelFunc081B_02E8;
	message("\"Thou shouldst try mine apples! I can give them to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message(var000F);
	message("\"");
	say();
	var0010 = "apples";
labelFunc081B_02E8:
	if (!(var000A == 0x0009)) goto labelFunc081B_0309;
	message("\"I can sell thee carrots for ");
	message(var000D);
	message(" filari.\"");
	say();
	message(var000F);
	message("\"");
	say();
	var0010 = "carrots";
labelFunc081B_0309:
	if (!(var000A == 0x000A)) goto labelFunc081B_032A;
	message("\"Not many in Fawn care for pumpkin, but I think it makes an excellent pie. I can sell thee one for ");
	message(var000D);
	message(" filari.\"");
	say();
	message(var000F);
	message("\"");
	say();
	var0010 = "pumpkins";
labelFunc081B_032A:
	if (!(var000D == var0006[var000A])) goto labelFunc081B_034F;
	if (!Func0955()) goto labelFunc081B_0346;
	var0011 = var000D;
	goto labelFunc081B_034C;
labelFunc081B_0346:
	var0011 = 0x0000;
labelFunc081B_034C:
	goto labelFunc081B_0361;
labelFunc081B_034F:
	var0011 = Func081C(var0005[var000A], var0006[var000A]);
labelFunc081B_0361:
	if (!(var0011 > 0x0000)) goto labelFunc081B_03CC;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc081B_03AA;
	message("\"How many ");
	message(var0010);
	message(" dost thou desire?\"");
	say();
	var000E = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var0011, 0x0014, 0x0001, false);
	goto labelFunc081B_03CC;
labelFunc081B_03AA:
	var000E = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var0011, 0x0000, 0x0001, false);
labelFunc081B_03CC:
	if (!(var000E == 0x0001)) goto labelFunc081B_03E3;
	message("\"I hope thou dost enjoy thy purchase, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc081B_0475;
labelFunc081B_03E3:
	if (!(var000E == 0x0002)) goto labelFunc081B_03FA;
	message("\"I believe that thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc081B_0475;
labelFunc081B_03FA:
	if (!(var000E == 0x0003)) goto labelFunc081B_0475;
	var0012 = Func0992(0x0001, (("@But " + var0000) + ", we haven't the filari to purchase this.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc081B_043D;
	UI_show_npc_face0(0xFFD0, 0x0000);
	message("\"Then I am afraid thou canst not purchase any of my goods, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc081B_0441;
labelFunc081B_043D:
	message("\"I am afraid thou dost not have enough to pay for this...\"");
	say();
labelFunc081B_0441:
	if (!(0x001F < (UI_get_npc_id(0xFFD0) + 0x0006))) goto labelFunc081B_0460;
	UI_set_npc_id(0xFFD0, 0x001F);
	goto labelFunc081B_0472;
labelFunc081B_0460:
	UI_set_npc_id(0xFFD0, (UI_get_npc_id(0xFFD0) + 0x0006));
labelFunc081B_0472:
	goto labelFunc081B_0475;
labelFunc081B_0475:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc081B_047F:
	goto labelFunc081B_0110;
labelFunc081B_0482:
	UI_pop_answers();
	return;
}


