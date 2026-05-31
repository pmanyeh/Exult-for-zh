#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func01F7 shape#(0x1F7) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc01F7_00B1;
	if (!UI_in_usecode(item)) goto labelFunc01F7_0011;
	return;
labelFunc01F7_0011:
	if (!UI_npc_nearby(0xFFD4)) goto labelFunc01F7_00B1;
	UI_show_npc_face(0xFFD4, 0x0000);
	message("\"Now is the time for the young and the old to dig in their pockets and give up the gold. * Dost thou wish to donate a gold piece?\"");
	say();
	if (!Func090A()) goto labelFunc01F7_00AA;
	var0000 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, 0xFE99);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x46, 0x0000, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x001F, (byte)0x46, 0x0000]);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x000B, (byte)0x58, 0x0055, (byte)0x58, 0x0053, (byte)0x58, 0x0054, (byte)0x27, 0x0001, (byte)0x58, 0x0055, (byte)0x58, 0x0053, (byte)0x27, 0x0003, (byte)0x58, 0x0053, (byte)0x27, 0x0002, (byte)0x58, 0x0055]);
labelFunc01F7_00AA:
	UI_remove_npc_face(0xFFD4);
labelFunc01F7_00B1:
	return;
}


