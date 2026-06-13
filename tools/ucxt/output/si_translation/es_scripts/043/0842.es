#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0844 0x844 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0842 0x842 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	if (!UI_is_pc_female()) goto labelFunc0842_001E;
	var0002 = "Milady";
	goto labelFunc0842_0024;
labelFunc0842_001E:
	var0002 = "Milord";
labelFunc0842_0024:
	if (!var0001) goto labelFunc0842_05DE;
	var0003 = Func0956(["nothing", "leather goods", "supplies"]);
	if (!(var0003 == "nothing")) goto labelFunc0842_0053;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0842_05DE;
labelFunc0842_0053:
	if (!(var0003 == "leather goods")) goto labelFunc0842_010B;
	var0004 = ["nothing", "leather armour", "leather gloves", "leather boots", "leather helm", "leather leggings"];
	var0005 = [0x0000, 0x0239, 0x0243, 0x024B, 0x03EC, 0x023E];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = [0x0000, 0x004B, 0x000F, 0x0019, 0x0014, 0x002D];
	var0008 = [0x0000, 0x0032, 0x0008, 0x000F, 0x000C, 0x0019];
	var0009 = 0x03B7;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000B = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0842_010B:
	if (!(var0003 == "supplies")) goto labelFunc0842_0202;
	var0004 = ["nothing", "kidney belt", "backpack", "shovel", "torch", "bedroll", "pick", "jerky", "hard-tack"];
	var0005 = [0x0000, 0x0248, 0x0321, 0x0271, 0x0253, 0x0247, 0x0270, 0x0179, 0x0179];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x000F, 0x0002];
	var0007 = [0x0000, 0x000C, 0x004B, 0x0028, 0x0008, 0x0032, 0x003C, 0x0006, 0x0004];
	var0008 = [0x0000, 0x0005, 0x002D, 0x0012, 0x0002, 0x001E, 0x0028, 0x0004, 0x0002];
	var0009 = 0x03B7;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0002, 0x0002];
	var000B = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001];
labelFunc0842_0202:
	var000C = Func0957(var0004);
	if (!(var000C == 0x0001)) goto labelFunc0842_021B;
	goto labelFunc0842_05D1;
	goto labelFunc0842_05DB;
labelFunc0842_021B:
	var000D = var0007[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0842_0247;
	var0010 = "Dost thou accept?";
labelFunc0842_0247:
	if (!(var000F == 0x0002)) goto labelFunc0842_0257;
	var0010 = "Dost thou find this price acceptable?";
labelFunc0842_0257:
	if (!(var000F == 0x0003)) goto labelFunc0842_0267;
	var0010 = "Dost thou find the price agreeable?";
labelFunc0842_0267:
	if (!(var000F == 0x0004)) goto labelFunc0842_027B;
	var0010 = (var0002 + ", dost thou agree?");
labelFunc0842_027B:
	if (!(var000F == 0x0005)) goto labelFunc0842_028F;
	var0010 = (var0002 + ", is the price acceptable?");
labelFunc0842_028F:
	if (!(var0003 == "leather goods")) goto labelFunc0842_035C;
	if (!(var000C == 0x0002)) goto labelFunc0842_02BA;
	message("\"That will be ");
	message(var000D);
	message(" monetari for the finest leather armour in town!\"");
	say();
	message(var0010);
	message("\"");
	say();
	var0011 = "suits of leather armour";
labelFunc0842_02BA:
	if (!(var000C == 0x0003)) goto labelFunc0842_02DE;
	message("\"I sell my gloves for ");
	message(var000D);
	message(" monetari each.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of leather gloves";
labelFunc0842_02DE:
	if (!(var000C == 0x0004)) goto labelFunc0842_0308;
	message("\"Thou wilt surely require boots if thou dost desire to adventure, ");
	message(var0000);
	message(". I will sell a pair to thee for the fair price of ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of leather boots";
labelFunc0842_0308:
	if (!(var000C == 0x0005)) goto labelFunc0842_0332;
	message("\"My leather helms are sturdy and will last thee for a long time, ");
	message(var0000);
	message(". I can sell thee a helm for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "leather helms";
labelFunc0842_0332:
	if (!(var000C == 0x0006)) goto labelFunc0842_035C;
	message("\"Ah, if thou dost wish affordable protection for thy legs, then thou shouldst buy my leather leggings, ");
	message(var0000);
	message("! I can sell thee a pair for only ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of leather leggings";
labelFunc0842_035C:
	if (!(var0003 == "supplies")) goto labelFunc0842_048C;
	if (!(var000C == 0x0002)) goto labelFunc0842_038A;
	message("\"");
	message(var000D);
	message(" monetari for the finest kidney belts found in Monitor is a small amount to pay!\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "kidney belts";
labelFunc0842_038A:
	if (!(var000C == 0x0003)) goto labelFunc0842_03AE;
	message("\"The backpacks I stock are made from the finest materials! I can sell one to thee for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "backpacks";
labelFunc0842_03AE:
	if (!(var000C == 0x0004)) goto labelFunc0842_03D2;
	message("\"Ah, for the low price of ");
	message(var000D);
	message(" monetari, I can sell a fine shovel.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "shovels";
labelFunc0842_03D2:
	if (!(var000C == 0x0005)) goto labelFunc0842_03F6;
	message("\"");
	message(var000D);
	message(" monetari is a small price to pay for one of my torches.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "torches";
labelFunc0842_03F6:
	if (!(var000C == 0x0006)) goto labelFunc0842_041A;
	message("\"Thou wilt sleep most comfortably on one of my bedrolls.\" ~\"I swear!\" *\"I will sell thee one for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "bedrolls";
labelFunc0842_041A:
	if (!(var000C == 0x0007)) goto labelFunc0842_043E;
	message("\"I can sell thee a fine pick for ");
	message(var000D);
	message(" monetari that will not break even upon the hardest stone!\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "picks";
labelFunc0842_043E:
	if (!(var000C == 0x0008)) goto labelFunc0842_0468;
	message("\"My jerky is well preserved and will last for many months, ");
	message(var0000);
	message(". ");
	message(var000D);
	message(" monetari is my price for two strips.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "strips of jerky, in bundles of two,";
labelFunc0842_0468:
	if (!(var000C == 0x0009)) goto labelFunc0842_048C;
	message("\"I can sell thee two rolls of hard-tack for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "rolls, in bundles of two,";
labelFunc0842_048C:
	if (!(var000D == var0008[var000C])) goto labelFunc0842_04B1;
	if (!Func0955()) goto labelFunc0842_04A8;
	var0012 = var000D;
	goto labelFunc0842_04AE;
labelFunc0842_04A8:
	var0012 = 0x0000;
labelFunc0842_04AE:
	goto labelFunc0842_04C3;
labelFunc0842_04B1:
	var0012 = Func0844(var0007[var000C], var0008[var000C]);
labelFunc0842_04C3:
	if (!(var0012 > 0x0000)) goto labelFunc0842_052E;
	if (!(var000B[var000C] == 0x0001)) goto labelFunc0842_050C;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0005[var000C], var0006[var000C], var000A[var000C], var0009, var0012, 0x0005, 0x0001, false);
	goto labelFunc0842_052E;
labelFunc0842_050C:
	var000E = Func0943(var0005[var000C], var0006[var000C], 0x0001, var0009, var0012, 0x0000, 0x0001, false);
labelFunc0842_052E:
	if (!(var000E == 0x0001)) goto labelFunc0842_0545;
	message("\"It hath been a pleasure, ");
	message(var0000);
	message("! Enjoy thy purchase!\"");
	say();
	goto labelFunc0842_05D1;
labelFunc0842_0545:
	if (!(var000E == 0x0002)) goto labelFunc0842_055C;
	message("\"");
	message(var0002);
	message(", thine hands are full!\"");
	say();
	goto labelFunc0842_05D1;
labelFunc0842_055C:
	if (!(var000E == 0x0003)) goto labelFunc0842_05D1;
	var0013 = Func0992(0x0001, (("@But " + var0000) + ", we haven't the coins to purchase this.@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0842_0599;
	UI_show_npc_face0(0xFFBC, 0x0000);
	message("\"If thou canst not pay, please leave!\"");
	say();
	goto labelFunc0842_059D;
labelFunc0842_0599:
	message("\"Thou dost not have enough monetari to purchase this...\"");
	say();
labelFunc0842_059D:
	if (!(0x001F < (UI_get_npc_id(0xFFBC) + 0x0006))) goto labelFunc0842_05BC;
	UI_set_npc_id(0xFFBC, 0x001F);
	goto labelFunc0842_05CE;
labelFunc0842_05BC:
	UI_set_npc_id(0xFFBC, (UI_get_npc_id(0xFFBC) + 0x0006));
labelFunc0842_05CE:
	goto labelFunc0842_05D1;
labelFunc0842_05D1:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc0842_05DB:
	goto labelFunc0842_0024;
labelFunc0842_05DE:
	UI_pop_answers();
	return;
}


