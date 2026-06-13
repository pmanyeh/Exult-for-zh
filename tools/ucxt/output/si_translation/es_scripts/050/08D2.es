#game "serpentisle"
void Func08D2 0x8D2 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = (UI_get_object_position(0xFF27) & (0xFE99 & 0x0007));
	var0001 = UI_find_nearby(var0000, 0x0113, 0x0005, 0x0010);
	var0001 = (var0001 & UI_find_nearby(0xFF27, 0x01B8, 0x0005, 0x0080));
	enum();
labelFunc08D2_003D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08D2_0052;
	UI_remove_item(var0004);
	goto labelFunc08D2_003D;
labelFunc08D2_0052:
	var0005[0x0001] = (var0000[0x0001] + 0x0001);
	var0005[0x0002] = (var0000[0x0002] + 0x0001);
	var0005[0x0003] = 0x0000;
	UI_move_object(0xFF27, var0005);
	var0006 = UI_direction_from(0xFF27, 0xFE9C);
	var0007 = UI_execute_usecode_array(0xFF27, [(byte)0x62, (byte)0x59, var0006, (byte)0x27, 0x0002, (byte)0x52, "@Please... Help me...@", (byte)0x27, 0x000F, (byte)0x52, "@Lead me to my nightmare.@"]);
	var0007 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0003]);
	UI_set_alignment(0xFF27, 0x0000);
	UI_set_schedule_type(0xFF27, 0x0009);
	return;
}


