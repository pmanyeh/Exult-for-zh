#game "serpentisle"
void Func08CC 0x8CC ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc08CC_00FA;
	if (!(UI_get_item_quality(item) == 0x0003)) goto labelFunc08CC_0056;
	var0000 = UI_find_nearby(item, 0x037F, 0x000A, 0x0000);
	enum();
labelFunc08CC_0026:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc08CC_0056;
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x2C, (byte)0x58, 0x0021, (byte)0x2D], UI_die_roll(0x0005, 0x000A));
	goto labelFunc08CC_0026;
labelFunc08CC_0056:
	if (!(UI_get_item_quality(item) == 0x00CB)) goto labelFunc08CC_00FA;
	var0000 = UI_find_nearby(item, 0x037F, 0x000A, 0x0000);
	if (!(!var0000)) goto labelFunc08CC_00FA;
	var0005 = UI_find_nearest(item, 0x00E0, 0x000A);
	if (!var0005) goto labelFunc08CC_00FA;
	var0006 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001F, (var0006[0x0001] - 0x0001), (var0006[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0004 = UI_execute_usecode_array(var0005, [(byte)0x27, 0x0006, (byte)0x55, 0x07E3, (byte)0x27, 0x0006, (byte)0x55, 0x07DF]);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x000E]);
	abort;
labelFunc08CC_00FA:
	if (!(event == 0x0002)) goto labelFunc08CC_01B0;
	if (!(UI_get_item_shape(item) == 0x037F)) goto labelFunc08CC_014A;
	var0006 = UI_get_object_position(item);
	UI_remove_item(item);
	UI_sprite_effect(0x0009, (var0006[0x0001] - 0x0001), (var0006[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	abort;
labelFunc08CC_014A:
	if (!(UI_get_item_shape(item) == 0x00E0)) goto labelFunc08CC_01B0;
	var0006 = [0x0987, 0x05F7, 0x0000];
	UI_move_object(0xFE9B, var0006);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07E3]);
	UI_sprite_effect(0x0007, (var0006[0x0001] - 0x0001), (var0006[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	abort;
labelFunc08CC_01B0:
	return;
}


