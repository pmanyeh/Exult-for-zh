#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CD 0x8CD ()
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

	if (!(event == 0x0003)) goto labelFunc08CD_00CB;
	var0000 = [0x08FA, 0x055F, 0x0001];
	UI_move_object(0xFF5D, var0000);
	UI_set_schedule_type(0xFF5D, 0x000F);
	UI_set_schedule_type(item, 0x000F);
	var0001 = UI_find_nearby(item, 0x017D, 0x0000, 0x0008);
	var0002 = (UI_get_object_position(var0001) & (0xFE99 & 0x0000));
	var0003 = UI_find_nearby(var0002, 0x0113, 0x0000, 0x0000);
	if (!var0001) goto labelFunc08CD_00CB;
	var0004 = UI_execute_usecode_array(var0001, [(byte)0x59, 0x0006, (byte)0x27, 0x0003, (byte)0x52, "@Forgive me, master Lorthondo.@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D]);
	var0004 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, 0x0002, (byte)0x6B, (byte)0x27, 0x0002, (byte)0x27, 0x0001, (byte)0x27, 0x0002, (byte)0x27, 0x0003, (byte)0x27, 0x000A, (byte)0x55, 0x07DF]);
labelFunc08CD_00CB:
	if (!(event == 0x0002)) goto labelFunc08CD_02D3;
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc08CD_0151;
	var0002 = (UI_get_object_position(0xFE9C) & (0x0004 & 0x0007));
	var0005 = UI_find_nearby(var0002, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc08CD_0151;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0006 = 0x0006;
	var0007 = 0x0000;
	var0008 = 0x0000;
	Func090D(var0005, var0006, var0007, var0008, 0x07DF, item, 0x000A);
	UI_set_path_failure(0x07DF, item, 0x000A);
labelFunc08CD_0151:
	if (!(UI_get_item_shape(item) == 0x0331)) goto labelFunc08CD_01D7;
	var0001 = UI_find_nearby(item, 0x017D, 0x000A, 0x0008);
	var0004 = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0001, (byte)0x27, 0x0004, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x55, 0x07DF]);
	var0004 = UI_execute_usecode_array(item, [(byte)0x52, "@Thou hast failed me for the last time.@", (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0003, (byte)0x6F, (byte)0x27, 0x0005, (byte)0x70, (byte)0x27, 0x0003, (byte)0x61]);
labelFunc08CD_01D7:
	if (!(UI_get_item_shape(item) == 0x017D)) goto labelFunc08CD_02D3;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001E, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
	UI_remove_item(item);
	var0009 = UI_create_new_object(0x037F);
	if (!var0009) goto labelFunc08CD_025F;
	UI_set_item_frame(var0009, 0x0000);
labelFunc08CD_025F:
	var000A = UI_create_new_object(0x01FB);
	if (!var000A) goto labelFunc08CD_029F;
	UI_set_item_frame(var000A, 0x0000);
	var0004 = UI_update_last_created(var0000);
	var0004 = UI_execute_usecode_array(var000A, [(byte)0x52, "@NOOOooooo!!!@", (byte)0x27, 0x0015, (byte)0x55, 0x04A3]);
labelFunc08CD_029F:
	if (!var0009) goto labelFunc08CD_02D3;
	var0000[0x0003] = (var0000[0x0003] + 0x0001);
	var0004 = UI_update_last_created(var0000);
	var0004 = UI_execute_usecode_array(var0009, [(byte)0x27, 0x0016, (byte)0x2D]);
labelFunc08CD_02D3:
	return;
}


