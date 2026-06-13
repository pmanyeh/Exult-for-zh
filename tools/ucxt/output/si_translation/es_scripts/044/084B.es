#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func084C 0x84C (var var0000, var var0001);

void Func084B 0x84B ()
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

	UI_push_answers();
	var0000 = true;
	message("\"What coins wilt thou pay me with?\"");
	say();
	var0001 = Func0956(["Guilders", "Gold Coins"]);
	if (!(var0001 == "Guilders")) goto labelFunc084B_002B;
	var0002 = 0x03B8;
labelFunc084B_002B:
	if (!(var0001 == "Gold Coins")) goto labelFunc084B_0041;
	var0002 = 0x0284;
	var0003 = 0x0001;
labelFunc084B_0041:
	if (!var0000) goto labelFunc084B_0402;
	message("\"In which circle art thou interested?\"");
	say();
	var0004 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"]);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 == 0x0000)) goto labelFunc084B_0086;
	goto labelFunc084B_0402;
labelFunc084B_0086:
	if (!(var0004 == 0x0001)) goto labelFunc084B_00CF;
	var0005 = ["nothing", "Telekinesis", "Cure"];
	var0006 = [0x0000, 0x0007, 0x0001];
	var0007 = [0x0000, 0x001E, 0x0016];
	var0008 = [0x0000, 0x0012, 0x000E];
	goto labelFunc084B_02AA;
labelFunc084B_00CF:
	if (!(var0004 == 0x0002)) goto labelFunc084B_0118;
	var0005 = ["nothing", "Great Light", "Mass Cure"];
	var0006 = [0x0000, 0x000C, 0x000E];
	var0007 = [0x0000, 0x003C, 0x004B];
	var0008 = [0x0000, 0x0028, 0x0032];
	goto labelFunc084B_02AA;
labelFunc084B_0118:
	if (!(var0004 == 0x0003)) goto labelFunc084B_0155;
	var0005 = ["nothing", "Enchant Missiles"];
	var0006 = [0x0000, 0x0012];
	var0007 = [0x0000, 0x0046];
	var0008 = [0x0000, 0x0023];
	goto labelFunc084B_02AA;
labelFunc084B_0155:
	if (!(var0004 == 0x0004)) goto labelFunc084B_019E;
	var0005 = ["nothing", "Reveal", "Flash"];
	var0006 = [0x0000, 0x001D, 0x001A];
	var0007 = [0x0000, 0x0064, 0x005A];
	var0008 = [0x0000, 0x003C, 0x0032];
	goto labelFunc084B_02AA;
labelFunc084B_019E:
	if (!(var0004 == 0x0005)) goto labelFunc084B_01DB;
	var0005 = ["nothing", "Explosion"];
	var0006 = [0x0000, 0x0022];
	var0007 = [0x0000, 0x0087];
	var0008 = [0x0000, 0x0050];
	goto labelFunc084B_02AA;
labelFunc084B_01DB:
	if (!(var0004 == 0x0006)) goto labelFunc084B_0224;
	var0005 = ["nothing", "Dispel Illusion", "Betray"];
	var0006 = [0x0000, 0x0029, 0x0028];
	var0007 = [0x0000, 0x00A0, 0x0091];
	var0008 = [0x0000, 0x006E, 0x0050];
	goto labelFunc084B_02AA;
labelFunc084B_0224:
	if (!(var0004 == 0x0007)) goto labelFunc084B_026D;
	var0005 = ["nothing", "Energy Field", "Mass Awaken"];
	var0006 = [0x0000, 0x0030, 0x0032];
	var0007 = [0x0000, 0x00E6, 0x00FA];
	var0008 = [0x0000, 0x006E, 0x008C];
	goto labelFunc084B_02AA;
labelFunc084B_026D:
	if (!(var0004 == 0x0008)) goto labelFunc084B_02AA;
	var0005 = ["nothing", "Fetch"];
	var0006 = [0x0000, 0x003B];
	var0007 = [0x0000, 0x011D];
	var0008 = [0x0000, 0x00A5];
	goto labelFunc084B_02AA;
labelFunc084B_02AA:
	message("\"What spell dost thou wish to buy?\"");
	say();
	var0009 = Func0957(var0005);
	if (!(var0009 == 0x0001)) goto labelFunc084B_02C8;
	message("\"As thou wishest...\"");
	say();
	goto labelFunc084B_03F5;
labelFunc084B_02C8:
	var000A = var0006[var0009];
	var000B = (var0007[var0009] * var0003);
	var000C = (var0008[var0009] * var0003);
	var000D = var0005[var0009];
	if (!(var0001 == "Guilders")) goto labelFunc084B_0320;
	var000B = ((var0007[var0009] * 0x0003) / 0x0002);
	var000C = ((var0008[var0009] * 0x0003) / 0x0002);
labelFunc084B_0320:
	if (!(var000B == var000C)) goto labelFunc084B_0360;
	message("\"The ");
	message(var000D);
	message(" spell will cost ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Is this acceptable?\"");
	say();
	var000E = 0x0000;
	if (!(Func0955() == true)) goto labelFunc084B_035D;
	var000E = Func096F(var000A, var0002, var000B);
labelFunc084B_035D:
	goto labelFunc084B_03A1;
labelFunc084B_0360:
	message("\"The price to purchase ");
	message(var000D);
	message(" is ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Dost thou agree?\"");
	say();
	var000F = Func084C(var000B, var000C);
	var000E = 0x0000;
	if (!(var000F > 0x0000)) goto labelFunc084B_03A1;
	var000E = Func096F(var000A, var0002, var000F);
labelFunc084B_03A1:
	if (!(var000E == 0x0001)) goto labelFunc084B_03B8;
	message("\"Thou now hast ");
	message(var000D);
	message(" in thy spellbook!\"");
	say();
	goto labelFunc084B_03F5;
labelFunc084B_03B8:
	if (!(var000E == 0x0002)) goto labelFunc084B_03CD;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0000 = false;
	goto labelFunc084B_0402;
labelFunc084B_03CD:
	if (!(var000E == 0x0003)) goto labelFunc084B_03E4;
	message("\"Thou dost not have enough ");
	message(var0001);
	message(" for that!\"");
	say();
	goto labelFunc084B_03F5;
labelFunc084B_03E4:
	if (!(var000E == 0x0004)) goto labelFunc084B_03F5;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc084B_03F5;
labelFunc084B_03F5:
	message("\"Wouldst thou like another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc084B_0041;
labelFunc084B_0402:
	UI_pop_answers();
	return;
}


