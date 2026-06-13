#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func080D 0x80D (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func080C 0x80C ()
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

	var0000 = Func0954();
	var0001 = UI_die_roll(0x0000, 0x0002);
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "torches", "backpack", "dagger", "abacus", "sextant", "boots", "leather leggings", "bedroll", "sleeping powder", "bandages", "fur cloak"];
	var0004 = [0x0000, 0x0253, 0x0321, 0x0252, 0x02A3, 0x028A, 0x024B, 0x023E, 0x0247, 0x0288, 0x033B, 0x00E3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x000B, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, var0001, 0x0001];
	var0006 = [0x0000, 0x0014, 0x0078, 0x0008, 0x0078, 0x0096, 0x0032, 0x006E, 0x00AF, 0x004B, 0x0032, 0x00FA];
	var0007 = [0x0000, 0x000C, 0x0041, 0x0005, 0x004B, 0x004B, 0x001C, 0x003C, 0x005A, 0x002D, 0x0019, 0x0087];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0003, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001];
	message("\"What dost thou require, ");
	message(var0000);
	message("?\"");
	say();
labelFunc080C_0151:
	if (!var0002) goto labelFunc080C_0510;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc080C_01AD;
	var000C = UI_get_random(0x0003);
	if (!(var000C == 0x0001)) goto labelFunc080C_0182;
	message("\"Thou art correct -- these prices are entirely too high!\"");
	say();
labelFunc080C_0182:
	if (!(var000C == 0x0002)) goto labelFunc080C_0190;
	message("\"Oh, well. But I have so enjoyed our conversation!\"");
	say();
labelFunc080C_0190:
	if (!((var000C != 0x0001) && (var000C != 0x0002))) goto labelFunc080C_01A6;
	message("\"But please come again sometime!\"");
	say();
labelFunc080C_01A6:
	var0002 = false;
	goto labelFunc080C_050D;
labelFunc080C_01AD:
	var000D = var0006[var000B];
	var000E = 0x0000;
	var000C = UI_die_roll(0x0001, 0x0005);
	if (!(var000C == 0x0001)) goto labelFunc080C_01D9;
	var000F = "Dost thou accept?";
labelFunc080C_01D9:
	if (!(var000C == 0x0002)) goto labelFunc080C_01E9;
	var000F = "Will this be fine with thee?";
labelFunc080C_01E9:
	if (!(var000C == 0x0003)) goto labelFunc080C_01F9;
	var000F = "Dost thou find the price agreeable?";
labelFunc080C_01F9:
	if (!(var000C == 0x0004)) goto labelFunc080C_0209;
	var000F = "Dost thou agree?";
labelFunc080C_0209:
	if (!(var000C == 0x0005)) goto labelFunc080C_0219;
	var000F = "Is the price acceptable?";
labelFunc080C_0219:
	if (!(var000B == 0x0002)) goto labelFunc080C_023D;
	message("\"The price for a bundle of 3 torches is ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "torches, in bundles of 3,";
labelFunc080C_023D:
	if (!(var000B == 0x0003)) goto labelFunc080C_0265;
	message("\"These are imported from Fawn, where the womenfolk are skilled at making strong cloth.\"");
	say();
	message("\"Each backpack costs ");
	message(var000D);
	message(" guilders, which I think is a fair price.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "backpacks";
labelFunc080C_0265:
	if (!(var000B == 0x0004)) goto labelFunc080C_0289;
	message("\"For the low price of ");
	message(var000D);
	message(" guilders, I can sell thee a fine dagger.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "daggers";
labelFunc080C_0289:
	if (!(var000B == 0x0005)) goto labelFunc080C_02A7;
	message("\"Only ");
	message(var000D);
	message(" guilders will buy thee an excellent abacus. Thou canst use it to add thy coinage.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
labelFunc080C_02A7:
	if (!(var000B == 0x0006)) goto labelFunc080C_02C5;
	message("\"If thou dost wish to navigate upon the seas, thou shalt surely need a sextant!\" *\"I will sell thee one for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
labelFunc080C_02C5:
	if (!(var000B == 0x0007)) goto labelFunc080C_02EF;
	message("\"To protect thy feet, a sturdy pair of Moonshadian leather boots would do thee well, ");
	message(var0000);
	message(". For only ");
	message(var000D);
	message(" guilders it is thine!\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "pairs of Moonshadian leather boots";
labelFunc080C_02EF:
	if (!(var000B == 0x0008)) goto labelFunc080C_0319;
	message("\"");
	message(var000D);
	message(" guilders is not much to pay if thou dost need to protect thy legs, ");
	message(var0000);
	message(".\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "pairs of leather leggings";
labelFunc080C_0319:
	if (!(var000B == 0x0009)) goto labelFunc080C_0343;
	message("\"Ah, this is one item that we have stocked in plenty, ");
	message(var0000);
	message("! I can sell thee a bedroll for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "bedrolls";
labelFunc080C_0343:
	if (!(var000B == 0x000A)) goto labelFunc080C_036D;
	message("\"This... powder... is most effective if thou dost suffer from sleepless nights, ");
	message(var0000);
	message(". I charge a small fee of ");
	message(var000D);
	message(" guilders for a jar.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "vials of sleeping powder";
labelFunc080C_036D:
	if (!(var000B == 0x000B)) goto labelFunc080C_0391;
	message("\"If thou art in need of healing minor wounds I can offer thee clean bandages for ");
	message(var000D);
	message(" guilders apiece.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "bandages";
labelFunc080C_0391:
	if (!(var000B == 0x000C)) goto labelFunc080C_03B5;
	message("\"For the sum of ");
	message(var000D);
	message(" guilders I can sell thee a bear cloak. 'Twill keep thee warm on a frosty night.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "bear cloaks";
labelFunc080C_03B5:
	if (!(var000D == var0007[var000B])) goto labelFunc080C_03DA;
	if (!Func0955()) goto labelFunc080C_03D1;
	var0011 = var000D;
	goto labelFunc080C_03D7;
labelFunc080C_03D1:
	var0011 = 0x0000;
labelFunc080C_03D7:
	goto labelFunc080C_03EC;
labelFunc080C_03DA:
	var0011 = Func080D(var0006[var000B], var0007[var000B]);
labelFunc080C_03EC:
	if (!(var0011 > 0x0000)) goto labelFunc080C_045A;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc080C_0435;
	message("\"How many ");
	message(var0010);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var0011, 0x000A, 0x0001, false);
	goto labelFunc080C_045A;
labelFunc080C_0435:
	var000E = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var0011, 0x0000, 0x0001, false);
labelFunc080C_045A:
	if (!(var000E == 0x0001)) goto labelFunc080C_0471;
	message("\"Please come again, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc080C_0503;
labelFunc080C_0471:
	if (!(var000E == 0x0002)) goto labelFunc080C_0482;
	message("\"Perhaps thou canst return with more companions, for thou hast not room to carry what thou desirest to purchase!\"");
	say();
	goto labelFunc080C_0503;
labelFunc080C_0482:
	if (!(var000E == 0x0003)) goto labelFunc080C_0503;
	var000C = Func0992(0x0001, "@But we are short of funds!@", 0x0000, false);
	var000C = Func0992(0x0001, "@How embarrassing...@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc080C_04CB;
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("\"I would let thee have the goods for free, as I am sure that thou art a trustworthy person.\"");
	say();
	message("\"But the shop's owner is a stern man, and very strict.\"");
	say();
	goto labelFunc080C_04CF;
labelFunc080C_04CB:
	message("\"But thou dost not have the coins to pay for thy purchase! Next time, thou shouldst count thy coins first.\"");
	say();
labelFunc080C_04CF:
	if (!(0x001F < (UI_get_npc_id(0xFFF3) + 0x0004))) goto labelFunc080C_04EE;
	UI_set_npc_id(0xFFF3, 0x001F);
	goto labelFunc080C_0500;
labelFunc080C_04EE:
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x0004));
labelFunc080C_0500:
	goto labelFunc080C_0503;
labelFunc080C_0503:
	message("\"Dost thou wish to purchase anything else?\"");
	say();
	var0002 = Func0955();
labelFunc080C_050D:
	goto labelFunc080C_0151;
labelFunc080C_0510:
	UI_pop_answers();
	return;
}


