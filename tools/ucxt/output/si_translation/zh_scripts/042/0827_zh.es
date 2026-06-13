#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0828 0x828 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0827 0x827 ()
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
	var0001 = UI_die_roll(0x0001, 0x0004);
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "cloak", "sword", "shovel", "torch", "pick", "bucket", "pitcher", "lamp", "cloth", "bread", "rolls", "cake"];
	var0004 = [0x0000, 0x00E3, 0x0257, 0x0271, 0x0253, 0x0270, 0x032A, 0x0338, 0x0150, 0x0353, 0x0179, 0x0179, 0x0179];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0002, 0x0002, var0001, 0x0001, 0x0002, 0x0004];
	var0006 = [0x0000, 0x00C8, 0x015E, 0x0064, 0x000A, 0x008C, 0x001C, 0x001E, 0x000C, 0x0014, 0x0008, 0x0005, 0x000A];
	var0007 = [0x0000, 0x0050, 0x00A0, 0x0032, 0x0005, 0x004B, 0x000E, 0x000F, 0x0006, 0x000A, 0x0004, 0x0003, 0x0005];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0827_016C;
	var000B = "Milady";
	goto labelFunc0827_0172;
labelFunc0827_016C:
	var000B = "Milord";
labelFunc0827_0172:
	message("\"What dost thou care to buy?\"");
	say();
labelFunc0827_0176:
	if (!var0002) goto labelFunc0827_0504;
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0827_01A0;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0002 = false;
	goto labelFunc0827_0501;
labelFunc0827_01A0:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0827_01CC;
	var0010 = "Dost thou accept?";
labelFunc0827_01CC:
	if (!(var000F == 0x0002)) goto labelFunc0827_01DC;
	var0010 = "Dost thou find this price acceptable?";
labelFunc0827_01DC:
	if (!(var000F == 0x0003)) goto labelFunc0827_01EC;
	var0010 = "Wilt thou pay my price?";
labelFunc0827_01EC:
	if (!(var000F == 0x0004)) goto labelFunc0827_0200;
	var0010 = (var000B + ", dost thou agree?");
labelFunc0827_0200:
	if (!(var000F == 0x0005)) goto labelFunc0827_0214;
	var0010 = (var000B + ", is the price acceptable?");
labelFunc0827_0214:
	if (!(var000C == 0x0002)) goto labelFunc0827_0235;
	message("\"That will be ");
	message(var000D);
	message(" guilders for a nice warm cloak.\"");
	say();
	message(var0010);
	message("\"");
	say();
	var0011 = "cloaks";
labelFunc0827_0235:
	if (!(var000C == 0x0003)) goto labelFunc0827_0259;
	message("\"For ");
	message(var000D);
	message(" guilders I can sell thee a very sharp sword.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "swords";
labelFunc0827_0259:
	if (!(var000C == 0x0004)) goto labelFunc0827_027D;
	message("\"");
	message(var000D);
	message(" guilders will buy thee a finely crafted shovel.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "shovels";
labelFunc0827_027D:
	if (!(var000C == 0x0005)) goto labelFunc0827_02A1;
	message("\"I will sell thee a torch for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "torches";
labelFunc0827_02A1:
	if (!(var000C == 0x0006)) goto labelFunc0827_02C5;
	message("\"Mine automaton smith makes them. For ");
	message(var000D);
	message(" guilders I can sell thee one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "picks";
labelFunc0827_02C5:
	if (!(var000C == 0x0007)) goto labelFunc0827_02E9;
	message("\"My buckets sell for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "buckets";
labelFunc0827_02E9:
	if (!(var000C == 0x0008)) goto labelFunc0827_030D;
	message("\"I can sell thee a pitcher for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pitchers";
labelFunc0827_030D:
	if (!(var000C == 0x0009)) goto labelFunc0827_0331;
	message("\"I will sell thee a nice oil lamp for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "oil lamps";
labelFunc0827_0331:
	if (!(var000C == 0x000A)) goto labelFunc0827_0355;
	message("\"I can sell thee a bolt of dyed cloth for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "bolts of cloth";
labelFunc0827_0355:
	if (!(var000C == 0x000B)) goto labelFunc0827_0379;
	message("\"Hmmm... the bread baked by mine automaton baker is very good and filling. I will sell a loaf to thee for ");
	message(var000D);
	message(" guilders.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "loaves of bread";
labelFunc0827_0379:
	if (!(var000C == 0x000C)) goto labelFunc0827_039D;
	message("\"The rolls are baked fresh daily. For ");
	message(var000D);
	message(" guilders I will sell thee one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "rolls";
labelFunc0827_039D:
	if (!(var000C == 0x000D)) goto labelFunc0827_03C1;
	message("\"The cake is actually very good. Nice and sweet. For ");
	message(var000D);
	message(" guilders thou canst have one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "cakes";
labelFunc0827_03C1:
	if (!(var000D == var0007[var000C])) goto labelFunc0827_03E6;
	if (!Func0955()) goto labelFunc0827_03DD;
	var0012 = var000D;
	goto labelFunc0827_03E3;
labelFunc0827_03DD:
	var0012 = 0x0000;
labelFunc0827_03E3:
	goto labelFunc0827_03F8;
labelFunc0827_03E6:
	var0012 = Func0828(var0006[var000C], var0007[var000C]);
labelFunc0827_03F8:
	if (!(var0012 > 0x0000)) goto labelFunc0827_0460;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0827_043E;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x000A, 0x0001, false);
	goto labelFunc0827_0460;
labelFunc0827_043E:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0827_0460:
	if (!(var000E == 0x0001)) goto labelFunc0827_0471;
	message("\"Enjoy thy purchase!\"");
	say();
	goto labelFunc0827_04F7;
labelFunc0827_0471:
	if (!(var000E == 0x0002)) goto labelFunc0827_0482;
	message("\"Thine hands are full!\"");
	say();
	goto labelFunc0827_04F7;
labelFunc0827_0482:
	if (!(var000E == 0x0003)) goto labelFunc0827_04F7;
	var0013 = Func0992(0x0001, (("@But " + var0000) + ", we do not have the guilders to purchase this.@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0827_04BF;
	UI_show_npc_face0(0xFFF1, 0x0000);
	message("\"Please leave if thou canst not pay.\"");
	say();
	goto labelFunc0827_04C3;
labelFunc0827_04BF:
	message("\"Thou dost not have enough guilders to purchase this...\"");
	say();
labelFunc0827_04C3:
	if (!(0x001F < (UI_get_npc_id(0xFFF1) + 0x0006))) goto labelFunc0827_04E2;
	UI_set_npc_id(0xFFF1, 0x001F);
	goto labelFunc0827_04F4;
labelFunc0827_04E2:
	UI_set_npc_id(0xFFF1, (UI_get_npc_id(0xFFF1) + 0x0006));
labelFunc0827_04F4:
	goto labelFunc0827_04F7;
labelFunc0827_04F7:
	message("\"Dost thou care for something else?\"");
	say();
	var0002 = Func0955();
labelFunc0827_0501:
	goto labelFunc0827_0176;
labelFunc0827_0504:
	UI_pop_answers();
	return;
}


