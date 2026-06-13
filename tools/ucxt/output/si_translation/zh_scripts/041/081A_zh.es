#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func081A 0x81A ()
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
	var0001 = Func0953();
	var0002 = 0x03B4;
	var0003 = UI_count_objects(0xFE9B, var0002, 0xFE99, 0xFE99);
	var0004 = false;
	var0005 = false;
	if (!(gflags[0x0098] && (!gflags[0x005A]))) goto labelFunc081A_0099;
	if (!(gflags[0x01A5] == false)) goto labelFunc081A_004E;
	message("\"I cannot heal this infection! Thou must go to Harnna with the Varo leaves!\"");
	say();
	UI_add_answer("Varo Leaves");
	goto labelFunc081A_0096;
labelFunc081A_004E:
	if (!Func097D(0xFE9B, 0x0005, 0x01D3, 0xFE99, 0x0003)) goto labelFunc081A_006A;
	message("\"I did already give thee all the Varo leaves that I have! Thou must go to Harnna to heal thine infection!\"");
	say();
	goto labelFunc081A_0096;
labelFunc081A_006A:
	message("\"Didst thou lose the leaves I did give thee?\"");
	say();
	if (!Func0955()) goto labelFunc081A_0092;
	message("\"Very well, take five more of the Varo leaves and go thou quickly to Harnna!\"");
	say();
	var0006 = Func099B(0xFE9C, 0x0005, 0x01D3, 0xFE99, 0x0003, false, true);
	goto labelFunc081A_0096;
labelFunc081A_0092:
	message("\"Good. Go to Harnna! Quickly now!\"");
	say();
labelFunc081A_0096:
	goto labelFunc081A_0258;
labelFunc081A_0099:
	if (!(gflags[0x0150] == false)) goto labelFunc081A_0243;
	message("\"I charge 50 filari to use my knowledge of herbs to attempt to heal. Dost thou agree to pay?\"");
	say();
	if (!Func0955()) goto labelFunc081A_0236;
	if (!(var0003 < 0x0032)) goto labelFunc081A_00BC;
	message("\"Thou dost not have the filari to pay me!\"");
	say();
	goto labelFunc081A_0258;
labelFunc081A_00BC:
	message("\"Who is in need of healing? I will do what I can.\"");
	say();
labelFunc081A_00C0:
	var0007 = 0x0032;
	if (!(var0004 == true)) goto labelFunc081A_00D4;
	var0007 = 0x000A;
labelFunc081A_00D4:
	var0008 = Func098E();
	var0008 = (0x0000 & var0008);
	var0009 = ["nobody"];
	enum();
labelFunc081A_00EE:
	for (var000C in var0008 with var000A to var000B) attend labelFunc081A_0115;
	if (!(!(var000C == 0x0000))) goto labelFunc081A_0112;
	var0009 = (var0009 & UI_get_npc_name(var000C));
labelFunc081A_0112:
	goto labelFunc081A_00EE;
labelFunc081A_0115:
	var000D = Func0957(var0009);
	var000D = var0008[var000D];
	if (!(var000D == 0x0000)) goto labelFunc081A_0138;
	message("\"As thou dost wish.\"");
	say();
	goto labelFunc081A_0258;
labelFunc081A_0138:
	var000E = UI_get_npc_number(var000D);
	var000F = UI_get_item_flag(var000D, 0x0008);
	var0010 = Func095C(var000D, 0x0000);
	var0011 = Func095C(var000D, 0x0003);
	var0012 = UI_get_npc_name(var000D);
	if (!(var0010 > var0011)) goto labelFunc081A_01BA;
	var0013 = (var0010 - var0011);
	var0013 = (var0013 / 0x0002);
	Func095E(var000E, 0x0003, var0013);
	var0014 = UI_remove_party_items(var0007, var0002, 0xFE99, 0xFE99, true);
	var0005 = true;
	message("\"I have done all that I can.\"");
	say();
	goto labelFunc081A_01FB;
labelFunc081A_01BA:
	if (!(var000F == false)) goto labelFunc081A_01E0;
	if (!(var000E == 0xFE9C)) goto labelFunc081A_01D3;
	message("\"Thou art unwounded!\"");
	say();
	goto labelFunc081A_01DD;
labelFunc081A_01D3:
	message("\"");
	message(var0012);
	message(" is not wounded!\"");
	say();
labelFunc081A_01DD:
	goto labelFunc081A_01FB;
labelFunc081A_01E0:
	if (!(var000E == 0xFE9C)) goto labelFunc081A_01F1;
	message("\"Thou art poisoned! I believe that I can cure such a simple venom.\"");
	say();
	goto labelFunc081A_01FB;
labelFunc081A_01F1:
	message("\"");
	message(var0012);
	message(" is poisoned! Fortunately, 'tis a simple venom to cure.\"");
	say();
labelFunc081A_01FB:
	if (!(var000F == true)) goto labelFunc081A_0233;
	if (!(var0005 == false)) goto labelFunc081A_021F;
	var0014 = UI_remove_party_items(var0007, var0002, 0xFE99, 0xFE99, true);
labelFunc081A_021F:
	UI_clear_item_flag(var000D, 0x0008);
	message("\"'Tis done, ");
	message(var0000);
	message("! The poison hath been removed.\"");
	say();
labelFunc081A_0233:
	goto labelFunc081A_0240;
labelFunc081A_0236:
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
labelFunc081A_0240:
	goto labelFunc081A_0258;
labelFunc081A_0243:
	message("\"Since thou didst agree to take my letter, I will help thee, ");
	message(var0001);
	message(". I will perform mine healing for only 10 filari.\"");
	say();
	message("\"Whom dost thou wish to heal?\"");
	say();
	var0004 = true;
	goto labelFunc081A_00C0;
labelFunc081A_0258:
	return;
}


