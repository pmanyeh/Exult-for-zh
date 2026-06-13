#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0869 0x869 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0866 0x866 ()
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
	if (!(!var0001)) goto labelFunc0866_0020;
	var0000 = "stranger";
labelFunc0866_0020:
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "scale mail", "chain armour", "plate mail", "chain leggings", "plate leggings", "gauntlets", "spiked shield", "great helm", "crested helm"];
	var0004 = [0x0000, 0x023A, 0x023B, 0x023D, 0x023F, 0x0240, 0x0244, 0x0242, 0x021D, 0x021E];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001];
	var0006 = [0x0000, 0x0096, 0x00C8, 0x015E, 0x0064, 0x0096, 0x003C, 0x005A, 0x004B, 0x002D];
	var0007 = [0x0000, 0x0055, 0x0064, 0x00AF, 0x0032, 0x005A, 0x0023, 0x0032, 0x0028, 0x0019];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0866_013A;
	var000B = "Milady";
	goto labelFunc0866_0140;
labelFunc0866_013A:
	var000B = "Friend";
labelFunc0866_0140:
	if (!var0002) goto labelFunc0866_0487;
	message("\"What dost thou care to buy, ");
	message(var0000);
	message("?\"");
	say();
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0866_0174;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0002 = false;
	goto labelFunc0866_0484;
labelFunc0866_0174:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0866_01A0;
	var0010 = "Dost thou accept?";
labelFunc0866_01A0:
	if (!(var000F == 0x0002)) goto labelFunc0866_01B0;
	var0010 = "Wilt thou pay my price?";
labelFunc0866_01B0:
	if (!(var000F == 0x0003)) goto labelFunc0866_01C0;
	var0010 = "Dost thou find the price agreeable?";
labelFunc0866_01C0:
	if (!(var000F == 0x0004)) goto labelFunc0866_01D4;
	var0010 = (var000B + ", dost thou agree?");
labelFunc0866_01D4:
	if (!(var000F == 0x0005)) goto labelFunc0866_01E8;
	var0010 = (var000B + ", is the price acceptable?");
labelFunc0866_01E8:
	if (!(var000C == 0x0002)) goto labelFunc0866_0209;
	message("\"");
	message(var000D);
	message(" monetari is a low price for durable scale armour, my friend.\"");
	say();
	message(var0010);
	message("\"");
	say();
	var0011 = "suits of scale armour";
labelFunc0866_0209:
	if (!(var000C == 0x0003)) goto labelFunc0866_022D;
	message("\"If thou art serious about fighting, then thou shouldst purchase the best chain armour found in Monitor. I charge ");
	message(var000D);
	message(" monetari for a chain byrnie.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "chain byrnies";
labelFunc0866_022D:
	if (!(var000C == 0x0004)) goto labelFunc0866_0257;
	message("\"Ah, plate mail is the best armour a knight could ask for, ");
	message(var0000);
	message(". I will sell thee a suit for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "suits of plate armour";
labelFunc0866_0257:
	if (!(var000C == 0x0005)) goto labelFunc0866_027B;
	message("\"I can sell thee chain leggings for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of chain leggings";
labelFunc0866_027B:
	if (!(var000C == 0x0006)) goto labelFunc0866_02A5;
	message("\"Plate leggings will protect thy legs very well indeed, ");
	message(var0000);
	message(". I will sell thee a pair for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of plate leggings";
labelFunc0866_02A5:
	if (!(var000C == 0x0007)) goto labelFunc0866_02C9;
	message("\"A pair of gauntlets sell for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of gauntlets";
labelFunc0866_02C9:
	if (!(var000C == 0x0008)) goto labelFunc0866_02ED;
	message("\"An excellent choice, friend! The spiked shield can be used in close quarters to surprise thy foe. ");
	message(var000D);
	message(" monetari is a small price to pay for one of these shields.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "spiked shields";
labelFunc0866_02ED:
	if (!(var000C == 0x0009)) goto labelFunc0866_0311;
	message("\"'Tis nothing fancy, but it serves its purpose well. I can sell thee a great helm for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "great helms";
labelFunc0866_0311:
	if (!(var000C == 0x000A)) goto labelFunc0866_0335;
	message("\"Most Knights of Monitor prefer the great helm, but the crested helm doth not obstruct thy view as much. I charge ");
	message(var000D);
	message(" monetari for one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crested helms";
labelFunc0866_0335:
	if (!(var000D == var0007[var000C])) goto labelFunc0866_035A;
	if (!Func0955()) goto labelFunc0866_0351;
	var0012 = var000D;
	goto labelFunc0866_0357;
labelFunc0866_0351:
	var0012 = 0x0000;
labelFunc0866_0357:
	goto labelFunc0866_036C;
labelFunc0866_035A:
	var0012 = Func0869(var0006[var000C], var0007[var000C]);
labelFunc0866_036C:
	if (!(var0012 > 0x0000)) goto labelFunc0866_03D7;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0866_03B5;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0009[var000C], var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0866_03D7;
labelFunc0866_03B5:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0866_03D7:
	if (!(var000E == 0x0001)) goto labelFunc0866_03EE;
	message("\"It hath been a pleasure, ");
	message(var0000);
	message("! Enjoy thy purchase!\"");
	say();
	goto labelFunc0866_047A;
labelFunc0866_03EE:
	if (!(var000E == 0x0002)) goto labelFunc0866_0405;
	message("\"");
	message(var000B);
	message(", thine hands are full!\"");
	say();
	goto labelFunc0866_047A;
labelFunc0866_0405:
	if (!(var000E == 0x0003)) goto labelFunc0866_047A;
	var0013 = Func0992(0x0001, (("@But " + var0000) + ", we do not have the monetari to purchase this.@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0866_0442;
	UI_show_npc_face0(0xFFB2, 0x0000);
	message("\"If thou canst not pay, please leave!\"");
	say();
	goto labelFunc0866_0446;
labelFunc0866_0442:
	message("\"Thou dost not have enough monetari to purchase this...\"");
	say();
labelFunc0866_0446:
	if (!(0x001F < (UI_get_npc_id(0xFFB2) + 0x0006))) goto labelFunc0866_0465;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0866_0477;
labelFunc0866_0465:
	UI_set_npc_id(0xFFB2, (UI_get_npc_id(0xFFB2) + 0x0006));
labelFunc0866_0477:
	goto labelFunc0866_047A;
labelFunc0866_047A:
	message("\"Dost thou want to buy more armour?\"");
	say();
	var0002 = Func0955();
labelFunc0866_0484:
	goto labelFunc0866_0140;
labelFunc0866_0487:
	UI_pop_answers();
	return;
}


