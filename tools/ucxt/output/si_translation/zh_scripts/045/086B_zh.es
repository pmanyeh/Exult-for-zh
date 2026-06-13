#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func086B 0x86B ()
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

	var0000 = Func0953();
	var0001 = true;
	message("\"Whom dost thou wish to heal?\"");
	say();
labelFunc086B_000E:
	if (!var0001) goto labelFunc086B_017E;
	var0002 = Func098E();
	var0002 = (0x0000 & var0002);
	var0003 = ["nobody"];
	enum();
labelFunc086B_002E:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc086B_0055;
	if (!(!(var0006 == 0x0000))) goto labelFunc086B_0052;
	var0003 = (var0003 & UI_get_npc_name(var0006));
labelFunc086B_0052:
	goto labelFunc086B_002E;
labelFunc086B_0055:
	var0007 = Func0957(var0003);
	var0007 = var0002[var0007];
	if (!(var0007 == 0x0000)) goto labelFunc086B_0078;
	message("\"So be it.\"");
	say();
	goto labelFunc086B_017E;
labelFunc086B_0078:
	var0008 = UI_get_npc_number(var0007);
	var0009 = UI_get_item_flag(var0007, 0x0008);
	var000A = Func095C(var0007, 0x0000);
	var000B = Func095C(var0007, 0x0003);
	var000C = UI_get_npc_name(var0007);
	var000D = "his";
	if (!(var000C == "Petra")) goto labelFunc086B_00C7;
	var000D = "her";
labelFunc086B_00C7:
	if (!(var000A > var000B)) goto labelFunc086B_010B;
	var000E = (var000A - var000B);
	Func095E(var0008, 0x0003, var000E);
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_00F8;
	message("\"I have healed thee of thy wounds. Rest easy, my friend.\"");
	say();
	goto labelFunc086B_0108;
labelFunc086B_00F8:
	message("\"I have healed thy companion ");
	message(var000C);
	message(" of ");
	message(var000D);
	message(" wounds.\"");
	say();
labelFunc086B_0108:
	goto labelFunc086B_017B;
labelFunc086B_010B:
	if (!(var0009 == false)) goto labelFunc086B_0131;
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_0124;
	message("\"Thou seemest quite healthy!\"");
	say();
	goto labelFunc086B_012E;
labelFunc086B_0124:
	message("\"");
	message(var000C);
	message(" is already healthy!\"");
	say();
labelFunc086B_012E:
	goto labelFunc086B_017B;
labelFunc086B_0131:
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_0167;
	if (!(gflags[0x0098] && (!gflags[0x005A]))) goto labelFunc086B_0156;
	message("\"What is this?! I have never seen the like of such a poison! I am afraid I cannot heal this, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc086B_017E;
	goto labelFunc086B_0164;
labelFunc086B_0156:
	message("\"Ah, this poison I can remedy. A moment... *There, 'tis done. Thou art whole once more.\"");
	say();
	UI_clear_item_flag(0xFE9C, 0x0008);
labelFunc086B_0164:
	goto labelFunc086B_017B;
labelFunc086B_0167:
	message("\"Your companion ");
	message(var000C);
	message(" is badly poisoned. I shall remove it. *There. 'Tis done.\"");
	say();
	UI_clear_item_flag(var0007, 0x0008);
labelFunc086B_017B:
	goto labelFunc086B_000E;
labelFunc086B_017E:
	return;
}


