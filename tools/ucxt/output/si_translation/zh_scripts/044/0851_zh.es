#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0851 0x851 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	message("\"The cost is 12 guilders per person. Wouldst thou like a room for the night?\"");
	say();
	if (!Func0955()) goto labelFunc0851_00A2;
	var0000 = (UI_get_array_size(UI_get_party_list()) * 0x000C);
	var0001 = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var0001 >= var0000)) goto labelFunc0851_0070;
	message("\"Here is thy key.\"");
	say();
	var0002 = UI_remove_party_items(var0000, 0x03B8, 0xFE99, 0xFE99, 0x0000);
	var0003 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B8, 0x000B, 0x0000, true);
	message("\"'Tis the northwest corner room.\"");
	say();
	goto labelFunc0851_009F;
labelFunc0851_0070:
	var0004 = Func0992(0x0001, "@But Avatar, we do not have the guilders!@", 0x0000, false);
	if (!(var0004 != 0xFE9C)) goto labelFunc0851_009B;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"Then thou canst not stay at the inn. In these hard times, I cannot afford to keep thee and thy companions for free.\"");
	say();
	goto labelFunc0851_009F;
labelFunc0851_009B:
	message("\"Thou hast not enough guilders for my rooms.\"");
	say();
labelFunc0851_009F:
	goto labelFunc0851_00A6;
labelFunc0851_00A2:
	message("\"Another time...\"");
	say();
labelFunc0851_00A6:
	return;
}


