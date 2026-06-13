#game "serpentisle"
void Func08B7 0x8B7 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = [0x03A5, 0x035B, 0x03B4, 0x0357, 0x0380, 0x0457];
	var0001 = [0x0425, 0x034B, 0x0441, 0x0347, 0x038E, 0x04A7];
	var0002 = [0x0003, 0x0006, 0x0008];
	var0003 = [0x000E, 0x000C, 0x000C];
	UI_set_new_schedules(UI_get_npc_object(0xFF66), var0002, var0003, var0000);
	UI_set_new_schedules(UI_get_npc_object(0xFF67), var0002, var0003, var0001);
	return;
}


