#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0869 0x869 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0867 0x867 ()
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

	var0000 = "friend";
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0001)) goto labelFunc0867_0020;
	var0000 = "stranger";
labelFunc0867_0020:
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "spear", "morning star", "bow", "arrows", "sword", "two-handed sword", "two-handed axe", "halberd", "crossbow", "quarrels"];
	var0004 = [0x0000, 0x0250, 0x0254, 0x0255, 0x02D2, 0x0257, 0x025A, 0x0259, 0x025B, 0x0256, 0x02D3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0007];
	var0006 = [0x0000, 0x0014, 0x0028, 0x0078, 0x0014, 0x007D, 0x00C8, 0x0096, 0x0064, 0x0091, 0x0012];
	var0007 = [0x0000, 0x000C, 0x0014, 0x003C, 0x000A, 0x0041, 0x0078, 0x005A, 0x0037, 0x004B, 0x000A];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0867_014F;
	var000B = "Milady";
	goto labelFunc0867_0155;
labelFunc0867_014F:
	var000B = "Milord";
labelFunc0867_0155:
	if (!var0002) goto labelFunc0867_04A0;
	message("\"What weapon wouldst thou care to purchase?\"");
	say();
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0867_0183;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0002 = false;
	goto labelFunc0867_049D;
labelFunc0867_0183:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0867_01AF;
	var0010 = "Dost thou accept?";
labelFunc0867_01AF:
	if (!(var000F == 0x0002)) goto labelFunc0867_01BF;
	var0010 = "Wilt thou pay my price?";
labelFunc0867_01BF:
	if (!(var000F == 0x0003)) goto labelFunc0867_01CF;
	var0010 = "Dost thou find the price agreeable?";
labelFunc0867_01CF:
	if (!(var000F == 0x0004)) goto labelFunc0867_01DF;
	var0010 = "Dost thou agree?";
labelFunc0867_01DF:
	if (!(var000F == 0x0005)) goto labelFunc0867_01EF;
	var0010 = "Is the price acceptable?";
labelFunc0867_01EF:
	if (!(var000C == 0x0002)) goto labelFunc0867_0210;
	message("\"My spears can gut a goblin even as well as a sword can. I charge ");
	message(var000D);
	message(" monetari for one.\"");
	say();
	message(var0010);
	message("\"");
	say();
	var0011 = "spears";
labelFunc0867_0210:
	if (!(var000C == 0x0003)) goto labelFunc0867_0234;
	message("\"A true Knight doth have a selection of weapons to choose from. This is an excellent weapon. The morning star sells for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "morning stars";
labelFunc0867_0234:
	if (!(var000C == 0x0004)) goto labelFunc0867_0258;
	message("\"I will sell thee a bow for ");
	message(var000D);
	message(" monetari. Though most Knights do not carry these weapons, I think one should always be prepared, eh?\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "bows";
labelFunc0867_0258:
	if (!(var000C == 0x0005)) goto labelFunc0867_027C;
	message("\"I can sell thee 20 arrows for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "arrows, in bundles of 20,";
labelFunc0867_027C:
	if (!(var000C == 0x0006)) goto labelFunc0867_02A0;
	message("\"");
	message(var000D);
	message(" monetari for the sharpest swords in all of Serpent Isle! Many of my blades have been blooded in goblin flesh, my friend.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "swords";
labelFunc0867_02A0:
	if (!(var000C == 0x0007)) goto labelFunc0867_02C4;
	message("\"An excellent choice, my friend! Thou wilt have a decisive edge in combat with this blade! ");
	message(var000D);
	message(" monetari is what I charge.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "two-handed swords";
labelFunc0867_02C4:
	if (!(var000C == 0x0008)) goto labelFunc0867_02E8;
	message("\"Not very subtle, but a goblin doth understand thine argument anyway, eh? I can sell thee a fine two-handed axe for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "two-handed axes";
labelFunc0867_02E8:
	if (!(var000C == 0x0009)) goto labelFunc0867_030C;
	message("\"Mine halberds are nothing fancy, but they are inexpensive and they do the job well. I can sell thee one for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "halberds";
labelFunc0867_030C:
	if (!(var000C == 0x000A)) goto labelFunc0867_0330;
	message("\"Crossbows are not the most Knightly of weapons, but they are useful indeed. For ");
	message(var000D);
	message(" monetari I will sell thee one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crossbows";
labelFunc0867_0330:
	if (!(var000C == 0x000B)) goto labelFunc0867_0354;
	message("\"For the cost of ");
	message(var000D);
	message(" monetari I can sell thee 20 quarrels.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "quarrels, in bundles of 20,";
labelFunc0867_0354:
	if (!(var000D == var0007[var000C])) goto labelFunc0867_0379;
	if (!Func0955()) goto labelFunc0867_0370;
	var0012 = var000D;
	goto labelFunc0867_0376;
labelFunc0867_0370:
	var0012 = 0x0000;
labelFunc0867_0376:
	goto labelFunc0867_038B;
labelFunc0867_0379:
	var0012 = Func0869(var0006[var000C], var0007[var000C]);
labelFunc0867_038B:
	if (!(var0012 > 0x0000)) goto labelFunc0867_03F6;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0867_03D4;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0009[var000C], var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0867_03F6;
labelFunc0867_03D4:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0867_03F6:
	if (!(var000E == 0x0001)) goto labelFunc0867_0407;
	message("\"It hath been a pleasure, friend! Enjoy thy purchase!\"");
	say();
	goto labelFunc0867_0493;
labelFunc0867_0407:
	if (!(var000E == 0x0002)) goto labelFunc0867_041E;
	message("\"");
	message(var000B);
	message(", thine hands are full!\"");
	say();
	goto labelFunc0867_0493;
labelFunc0867_041E:
	if (!(var000E == 0x0003)) goto labelFunc0867_0493;
	var0013 = Func0992(0x0001, (("@But " + var0000) + ", we do not have the monetari to purchase this.@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0867_045B;
	UI_show_npc_face0(0xFFB2, 0x0000);
	message("\"If thou canst not pay, please leave!\"");
	say();
	goto labelFunc0867_045F;
labelFunc0867_045B:
	message("\"Thou dost not have enough monetari to purchase this!\"");
	say();
labelFunc0867_045F:
	if (!(0x001F < (UI_get_npc_id(0xFFB2) + 0x0006))) goto labelFunc0867_047E;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0867_0490;
labelFunc0867_047E:
	UI_set_npc_id(0xFFB2, (UI_get_npc_id(0xFFB2) + 0x0006));
labelFunc0867_0490:
	goto labelFunc0867_0493;
labelFunc0867_0493:
	message("\"Dost thou wish to purchase more weapons?\"");
	say();
	var0002 = Func0955();
labelFunc0867_049D:
	goto labelFunc0867_0155;
labelFunc0867_04A0:
	UI_pop_answers();
	return;
}


