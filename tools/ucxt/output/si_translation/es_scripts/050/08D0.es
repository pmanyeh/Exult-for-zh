#game "serpentisle"
void Func08D0 0x8D0 ()
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

	var0000 = UI_get_object_position(item);
	if (!(!((var0000[0x0001] == 0x09BF) && ((var0000[0x0002] == 0x06EA) && (var0000[0x0003] == 0x0000))))) goto labelFunc08D0_002D;
	abort;
labelFunc08D0_002D:
	var0001 = (UI_get_object_position(item) & [0xFE99, 0x0006]);
	var0002 = UI_find_nearby(var0001, 0x0113, 0x001E, 0x0010);
	enum();
labelFunc08D0_0053:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc08D0_01C1;
	var0000 = UI_get_object_position(var0005);
	var0006 = false;
	if (!(UI_get_item_quality(var0005) == 0x0000)) goto labelFunc08D0_00FF;
	UI_clear_item_flag(0xFF5D, 0x0004);
	UI_set_schedule_type(0xFF5D, 0x000F);
	UI_move_object(0xFF5D, var0000);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0007 = UI_direction_from(0xFF5D, 0xFE9C);
	var0008 = UI_execute_usecode_array(0xFF5D, [(byte)0x52, "@Prepare to die...@", (byte)0x59, var0007, (byte)0x6F, (byte)0x27, 0x0004, (byte)0x70, (byte)0x27, 0x0003, (byte)0x61, (byte)0x55, 0x04A3]);
labelFunc08D0_00FF:
	if (!(UI_get_item_quality(var0005) == 0x0064)) goto labelFunc08D0_0128;
	UI_remove_item(var0005);
	var0006 = UI_create_new_object(0x00A3);
	UI_set_item_frame(var0006, 0x0009);
labelFunc08D0_0128:
	if (!(UI_get_item_quality(var0005) == 0x0096)) goto labelFunc08D0_0151;
	UI_remove_item(var0005);
	var0006 = UI_create_new_object(0x00A3);
	UI_set_item_frame(var0006, 0x0003);
labelFunc08D0_0151:
	if (!(UI_get_item_quality(var0005) == 0x00C8)) goto labelFunc08D0_017A;
	UI_remove_item(var0005);
	var0006 = UI_create_new_object(0x00A3);
	UI_set_item_frame(var0006, 0x0003);
labelFunc08D0_017A:
	if (!var0006) goto labelFunc08D0_01BE;
	var0008 = UI_update_last_created(var0000);
	if (!var0008) goto labelFunc08D0_01BE;
	var0009 = UI_die_roll(0x0001, 0x0003);
	var0008 = UI_execute_usecode_array(var0006, [(byte)0x27, var0009, (byte)0x4E, (byte)0x27, var0009, (byte)0x0B, 0xFFFD, 0x0004]);
labelFunc08D0_01BE:
	goto labelFunc08D0_0053;
labelFunc08D0_01C1:
	UI_earthquake(0x0001);
	var0008 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0326], 0x0039);
	return;
}


