#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func085A 0x85A ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "Magic Leggings", "Magic Boots", "Magic Axe", "Sword of Defense", "Magic Bolts", "Glass Sword"];
	var0003 = [0x0000, 0x02AE, 0x024B, 0x0228, 0x0237, 0x01A1, 0x025C];
	var0004 = [0xFE99, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0005 = [0x0000, 0x0226, 0x0064, 0x0258, 0x04B0, 0x00C8, 0x05DC];
	var0006 = [0x0000, 0x0226, 0x0064, 0x0258, 0x04B0, 0x00C8, 0x05DC];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x000A, 0x0001];
	var0009 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0000];
labelFunc085A_00D1:
	if (!var0001) goto labelFunc085A_02FC;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc085A_00FB;
	message("\"Drop by again, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc085A_02F9;
labelFunc085A_00FB:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc085A_0122;
	message("\"Well, for a warrior such as thou art, I suppose that magic leggings will prove useful. I will sell a pair to thee for ");
	message(var000B);
	message(" guilders.\"");
	say();
	message("\"Wilt thou buy?\"");
	say();
labelFunc085A_0122:
	if (!(var000A == 0x0003)) goto labelFunc085A_013A;
	message("\"Hmmm... a pair of magic boots will protect thee quite well. I offer a pair for ");
	message(var000B);
	message(" guilders.\"");
	say();
	message("\"Wilt thou take it?\"");
	say();
labelFunc085A_013A:
	if (!(var000A == 0x0004)) goto labelFunc085A_0152;
	message("\"I do not recall who enchanted my magic axes, but let me assure thee, they are well constructed! I can sell thee one for ");
	message(var000B);
	message(" guilders.\"");
	say();
	message("\"Dost thou agree?\"");
	say();
labelFunc085A_0152:
	if (!(var000A == 0x0005)) goto labelFunc085A_016A;
	message("\"Ah, thou hast chosen what I consider to be the ultimate weapon for a warrior born! The Sword of Defense will protect thee just as well as plate armour, but without the encumbrance and weight. I can sell thee one for ");
	message(var000B);
	message(" guilders.\"");
	say();
	message("\"Dost thou accept the price?\"");
	say();
labelFunc085A_016A:
	if (!(var000A == 0x0006)) goto labelFunc085A_0188;
	message("\"For the low cost of ");
	message(var000B);
	message(" guilders I can sell thee ten magic bolts. They are more accurate and far more deadly than the mundane variety.\"");
	say();
	message("\"Is the price acceptable?\"");
	say();
	var000D = "magic bolts, in bundles of ten,";
labelFunc085A_0188:
	if (!(var000A == 0x0007)) goto labelFunc085A_01A0;
	message("\"Some say that the Glass Sword is the deadliest weapon one can aspire to wield. I do not know for certain, but rest assured that it is most lethal. For ");
	message(var000B);
	message(" guilders it is thine.\"");
	say();
	message("\"Wilt thou agree to this price?\"");
	say();
labelFunc085A_01A0:
	if (!(var000B == var0006[var000A])) goto labelFunc085A_01CF;
	if (!Func0955()) goto labelFunc085A_01BC;
	var000E = var000B;
	goto labelFunc085A_01CC;
labelFunc085A_01BC:
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var000E = 0x0000;
labelFunc085A_01CC:
	goto labelFunc085A_01E1;
labelFunc085A_01CF:
	var000E = Func085B(var0005[var000A], var0006[var000A]);
labelFunc085A_01E1:
	if (!(var000E > 0x0000)) goto labelFunc085A_024C;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc085A_022A;
	message("\"How many ");
	message(var000D);
	message(" wouldst thou like?\"");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0005, 0x0001, false);
	goto labelFunc085A_024C;
labelFunc085A_022A:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000E, 0x0000, 0x0001, false);
labelFunc085A_024C:
	if (!(var000C == 0x0001)) goto labelFunc085A_0263;
	message("\"Good luck with thy purchase, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc085A_02EF;
labelFunc085A_0263:
	if (!(var000C == 0x0002)) goto labelFunc085A_027A;
	message("\"Thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc085A_02EF;
labelFunc085A_027A:
	if (!(var000C == 0x0003)) goto labelFunc085A_02EF;
	var000A = Func0992(0x0001, (("@But " + var0000) + ", we have not the guilders to purchase this.@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc085A_02B7;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("\"I do not give my merchandise away!\"");
	say();
	goto labelFunc085A_02BB;
labelFunc085A_02B7:
	message("\"I am sorry, but thou dost not have enough guilders to purchase this!\"");
	say();
labelFunc085A_02BB:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc085A_02DA;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc085A_02EC;
labelFunc085A_02DA:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc085A_02EC:
	goto labelFunc085A_02EF;
labelFunc085A_02EF:
	message("\"Dost thou wish something else?\"");
	say();
	var0001 = Func0955();
labelFunc085A_02F9:
	goto labelFunc085A_00D1;
labelFunc085A_02FC:
	UI_pop_answers();
	return;
}


