#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0870 0x870 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func086F 0x86F ()
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
	var0001 = false;
	var0002 = UI_die_roll(0x0001, 0x0004);
	UI_push_answers();
	var0003 = true;
	var0004 = ["nothing", "cloak", "sword", "shovel", "torch", "pick", "bucket", "pitcher", "lamp", "cloth", "bread", "rolls", "cake"];
	var0005 = [0x0000, 0x00E3, 0x0257, 0x0271, 0x0253, 0x0270, 0x032A, 0x0338, 0x0150, 0x0353, 0x0179, 0x0179, 0x0179];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0002, 0x0002, var0002, 0x0001, 0x0002, 0x0004];
	var0007 = [0x0000, 0x00C8, 0x015E, 0x0064, 0x000A, 0x008C, 0x001C, 0x001E, 0x000C, 0x0014, 0x0008, 0x0005, 0x000A];
	var0008 = [0x0000, 0x0050, 0x00A0, 0x0032, 0x0005, 0x004B, 0x000E, 0x000F, 0x0006, 0x000A, 0x0004, 0x0003, 0x0005];
	var0009 = 0x03B8;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000B = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc086F_0170;
	var000C = "Milady";
	goto labelFunc086F_0176;
labelFunc086F_0170:
	var000C = "Milord";
labelFunc086F_0176:
	if (!(var0001 == false)) goto labelFunc086F_01AE;
	if (!Func0942(0xFFF1)) goto labelFunc086F_01A6;
	message("\"Oh, we sell all manner of things. Cloaks, swords...\"");
	say();
	Func094E(0xFFF1, "@Shovels, too...@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, Master, shovels too. Pitchers and other containers. Cloth and a few weapons. We also sell baked goods.\"");
	say();
	goto labelFunc086F_01AA;
labelFunc086F_01A6:
	message("\"Oh, we sell all manner of things. Cloaks, swords, and shovels, too. Pitchers and other containers. Cloth and a few weapons. We also sell baked goods.\"");
	say();
labelFunc086F_01AA:
	var0001 = true;
labelFunc086F_01AE:
	message("\"So, ");
	message(var0000);
	message(", what dost thou wish to buy?\"");
	say();
labelFunc086F_01B8:
	if (!var0003) goto labelFunc086F_0566;
	var000D = Func0957(var0004);
	if (!(var000D == 0x0001)) goto labelFunc086F_01E2;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0003 = false;
	goto labelFunc086F_0563;
labelFunc086F_01E2:
	var000E = var0007[var000D];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0005);
	if (!(var0010 == 0x0001)) goto labelFunc086F_0216;
	var0011 = (("Dost thou accept, " + var0000) + "?");
labelFunc086F_0216:
	if (!(var0010 == 0x0002)) goto labelFunc086F_0226;
	var0011 = "What dost thou think?";
labelFunc086F_0226:
	if (!(var0010 == 0x0003)) goto labelFunc086F_0236;
	var0011 = "Wilt thou pay my master's price?";
labelFunc086F_0236:
	if (!(var0010 == 0x0004)) goto labelFunc086F_024A;
	var0011 = (var000C + ", dost thou agree?");
labelFunc086F_024A:
	if (!(var0010 == 0x0005)) goto labelFunc086F_025E;
	var0011 = (var000C + ", is the price acceptable?");
labelFunc086F_025E:
	if (!(var000D == 0x0002)) goto labelFunc086F_027F;
	message("\"Well, our cloaks are not fancy, but they are warm.\" *\"If thou dost want one, it will cost thee ");
	message(var000E);
	message(" guilders.\"");
	say();
	message(var0011);
	message("\"");
	say();
	var0012 = "cloaks";
labelFunc086F_027F:
	if (!(var000D == 0x0003)) goto labelFunc086F_02A3;
	message("\"[\"Oh, we sell swords that the blacksmith automaton makes. They are very durable blades...\" *\"For ");
	message(var000E);
	message(" guilders I can sell thee one of our fine swords.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "swords";
labelFunc086F_02A3:
	if (!(var000D == 0x0004)) goto labelFunc086F_02C7;
	message("\"Our shovels are very well made. I believe that even Mortegro hath bought a couple of them. I can sell thee one for ");
	message(var000E);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "shovels";
labelFunc086F_02C7:
	if (!(var000D == 0x0005)) goto labelFunc086F_02EB;
	message("\"The torches we sell are soaked in pitch, so they burn for a very long time.\" *\"I will sell a torch to thee for ");
	message(var000E);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "torches";
labelFunc086F_02EB:
	if (!(var000D == 0x0006)) goto labelFunc086F_030F;
	message("\"I believe our picks have been used in the Mountains of Freedom. Only ");
	message(var000E);
	message(" guilders will buy thee one.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "picks";
labelFunc086F_030F:
	if (!(var000D == 0x0007)) goto labelFunc086F_0339;
	message("\"");
	message(var000E);
	message(" guilders and one of our finely crafted buckets can be thine, ");
	message(var0000);
	message(".\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "buckets";
labelFunc086F_0339:
	if (!(var000D == 0x0008)) goto labelFunc086F_035D;
	message("\"Even Petra uses our pitchers! I can sell thee a fine piece of crockery for ");
	message(var000E);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "pitchers";
labelFunc086F_035D:
	if (!(var000D == 0x0009)) goto labelFunc086F_0387;
	message("\"One of our oil lamps will last a long time, ");
	message(var0000);
	message(". I can sell thee one for ");
	message(var000E);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "oil lamps";
labelFunc086F_0387:
	if (!(var000D == 0x000A)) goto labelFunc086F_03AB;
	message("\"I can sell thee a bolt of dyed cloth for ");
	message(var000E);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "bolts of cloth";
labelFunc086F_03AB:
	if (!(var000D == 0x000B)) goto labelFunc086F_03D5;
	message("\"The bread baked by the automaton baker is quite filling, ");
	message(var0000);
	message(". For ");
	message(var000E);
	message(" guilders I will sell thee a fresh loaf.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "loaves of bread";
labelFunc086F_03D5:
	if (!(var000D == 0x000C)) goto labelFunc086F_03F9;
	message("\"");
	message(var000E);
	message(" guilders will buy thee a delicious roll.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "rolls";
labelFunc086F_03F9:
	if (!(var000D == 0x000D)) goto labelFunc086F_0423;
	message("\"The baker automaton makes a very sweet cake, ");
	message(var0000);
	message(". For ");
	message(var000E);
	message(" guilders thou canst have one.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
	var0012 = "cakes";
labelFunc086F_0423:
	if (!(var000E == var0008[var000D])) goto labelFunc086F_0448;
	if (!Func0955()) goto labelFunc086F_043F;
	var0013 = var000E;
	goto labelFunc086F_0445;
labelFunc086F_043F:
	var0013 = 0x0000;
labelFunc086F_0445:
	goto labelFunc086F_045A;
labelFunc086F_0448:
	var0013 = Func0870(var0007[var000D], var0008[var000D]);
labelFunc086F_045A:
	if (!(var0013 > 0x0000)) goto labelFunc086F_04C2;
	if (!(var000B[var000D] == 0x0001)) goto labelFunc086F_04A0;
	message("\"How many ");
	message(var0012);
	message(" wouldst thou like?\"");
	say();
	var000F = Func0943(var0005[var000D], var0006[var000D], 0x0001, var0009, var0013, 0x000A, 0x0001, false);
	goto labelFunc086F_04C2;
labelFunc086F_04A0:
	var000F = Func0943(var0005[var000D], var0006[var000D], 0x0001, var0009, var0013, 0x0000, 0x0001, false);
labelFunc086F_04C2:
	if (!(var000F == 0x0001)) goto labelFunc086F_04D3;
	message("\"Enjoy thy purchase!\"");
	say();
	goto labelFunc086F_0559;
labelFunc086F_04D3:
	if (!(var000F == 0x0002)) goto labelFunc086F_04E4;
	message("\"Thine hands are full!\"");
	say();
	goto labelFunc086F_0559;
labelFunc086F_04E4:
	if (!(var000F == 0x0003)) goto labelFunc086F_0559;
	var0014 = Func0992(0x0001, (("@But " + var0000) + ", we do not have the guilders to purchase this.@"), 0x0000, false);
	if (!(var0014 != 0xFE9C)) goto labelFunc086F_0521;
	UI_show_npc_face0(0xFFE0, 0x0000);
	message("\"Please leave if thou canst not pay.\"");
	say();
	goto labelFunc086F_0525;
labelFunc086F_0521:
	message("\"Thou dost not have enough guilders to purchase this...\"");
	say();
labelFunc086F_0525:
	if (!(0x001F < (UI_get_npc_id(0xFFE0) + 0x0006))) goto labelFunc086F_0544;
	UI_set_npc_id(0xFFE0, 0x001F);
	goto labelFunc086F_0556;
labelFunc086F_0544:
	UI_set_npc_id(0xFFE0, (UI_get_npc_id(0xFFE0) + 0x0006));
labelFunc086F_0556:
	goto labelFunc086F_0559;
labelFunc086F_0559:
	message("\"Dost thou care for something else?\"");
	say();
	var0003 = Func0955();
labelFunc086F_0563:
	goto labelFunc086F_01B8;
labelFunc086F_0566:
	UI_pop_answers();
	return;
}


