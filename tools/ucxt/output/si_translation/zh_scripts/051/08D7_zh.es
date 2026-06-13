#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();

void Func08D7 0x8D7 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0003)) goto labelFunc08D7_0138;
	var0000 = (UI_get_object_position(item) & (0xFE99 & 0x0012));
	var0001 = UI_find_nearby(var0000, 0x0179, 0x0006, 0x0000);
	if (!var0001) goto labelFunc08D7_0138;
	var0002 = UI_find_nearby(item, 0x032B, 0x000A, 0x0008);
	if (!var0002) goto labelFunc08D7_0138;
	UI_remove_item(item);
	var0003 = UI_get_object_position(var0001);
	UI_remove_item(var0001);
	UI_sprite_effect(0x000D, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0003 = UI_get_object_position(var0002);
	UI_set_polymorph(var0002, 0x02E6);
	UI_sprite_effect(0x0009, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_frame(var0002, 0x0012);
	var0004 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x07DF], 0x001E);
	var0005 = UI_create_new_object(0x0349);
	if (!var0005) goto labelFunc08D7_0118;
	UI_set_item_frame(var0005, 0x0005);
	var0004 = UI_update_last_created(var0003);
	var0004 = UI_execute_usecode_array(var0005, [(byte)0x52, "@I thank thee...@", (byte)0x27, 0x000F, (byte)0x52, "@...and here is thy reward.@"]);
labelFunc08D7_0118:
	var0006 = UI_find_nearby(var0002, 0x0113, 0x0000, 0x0010);
	if (!var0006) goto labelFunc08D7_0138;
	UI_remove_item(var0006);
labelFunc08D7_0138:
	if (!(event == 0x0002)) goto labelFunc08D7_020A;
	var0003 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(item, 0x032B);
	UI_set_schedule_type(item, 0x0011);
	var0007 = UI_create_new_object(0x03E7);
	if (!var0007) goto labelFunc08D7_01C3;
	UI_set_item_frame(var0007, 0x0004);
	var0003[0x0001] = (var0003[0x0001] + 0x0001);
	var0003[0x0002] = (var0003[0x0002] + 0x0001);
	var0004 = UI_update_last_created(var0003);
labelFunc08D7_01C3:
	UI_sprite_effect(0x000D, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0005 = UI_find_nearby(item, 0x0349, 0x000A, 0x0000);
	if (!var0005) goto labelFunc08D7_0207;
	UI_remove_item(var0005);
labelFunc08D7_0207:
	Func09AA();
labelFunc08D7_020A:
	return;
}


