#game "serpentisle"
void Func0370 shape#(0x370) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x000D)) goto labelFunc0370_001E;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B]);
labelFunc0370_001E:
	if (!(event == 0x000E)) goto labelFunc0370_002E;
	UI_set_schedule_type(item, 0x000C);
labelFunc0370_002E:
	if (!(event == 0x0007)) goto labelFunc0370_00D9;
	if (!(!gflags[0x00CE])) goto labelFunc0370_003E;
	abort;
labelFunc0370_003E:
	if (!gflags[0x00CF]) goto labelFunc0370_0045;
	abort;
labelFunc0370_0045:
	if (!(UI_get_oppressor(item) == 0x0000)) goto labelFunc0370_00D9;
	if (!(UI_get_weapon(0xFE9C) == 0x0326)) goto labelFunc0370_00D9;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Thou hast beaten me, vile human. I will remember this day!\"");
	say();
	UI_remove_npc_face0();
	var0001 = UI_get_object_position(item);
	UI_set_schedule_type(item, 0x000F);
	UI_set_opponent(0xFE9C, 0x0001);
	UI_move_object(item, [0x008E, 0x002E, 0x0000]);
	UI_clear_item_flag(0xFFFD, 0x0004);
	UI_set_item_flag(0xFFFD, 0x001E);
	UI_clear_item_flag(0xFFFD, 0x001D);
	UI_move_object(0xFFFD, var0001);
	UI_reduce_health(0xFFFD, 0x0037, 0x0000);
	gflags[0x00D2] = true;
	gflags[0x00D5] = true;
labelFunc0370_00D9:
	return;
}


