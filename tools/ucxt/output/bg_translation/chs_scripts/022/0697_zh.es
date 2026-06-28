#game "blackgate"
// externs
extern var Func0881 0x881 ();

void Func0697 object#(0x697) ()
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

	var0000 = UI_get_object_position(item);
	if (!gflags[0x0003]) goto labelFunc0697_0283;
	if (!(!gflags[0x032B])) goto labelFunc0697_00D3;
	gflags[0x032B] = true;
	UI_sprite_effect(0x000D, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	UI_set_item_frame(item, 0x0004);
	var0001 = UI_create_new_object(0x0112);
	UI_set_item_frame(var0001, 0x001C);
	var0002 = UI_update_last_created(var0000);
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x0010, (byte)0x55, 0x0696]);
	var0004 = UI_execute_usecode_array(var0001, [(byte)0x59, 0x0004, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x63, (byte)0x27, 0x0002]);
	goto labelFunc0697_0280;
labelFunc0697_00D3:
	if (!(!gflags[0x032C])) goto labelFunc0697_01B4;
	gflags[0x032C] = true;
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0004, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0009);
	var0001 = UI_find_nearest(item, 0x0112, 0x0001);
	UI_remove_item(var0001);
	var0005 = UI_create_new_object(0x01F8);
	UI_set_item_frame(var0005, 0x0013);
	var0002 = UI_update_last_created(var0000);
	var0006 = UI_find_nearest(var0005, 0x009A, 0x0001);
	var0003 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x000E, (byte)0x55, 0x0696]);
	var0007 = UI_execute_usecode_array(var0005, [(byte)0x59, 0x0004, (byte)0x27, 0x0004, (byte)0x68, (byte)0x27, 0x0003, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0001]);
	goto labelFunc0697_0280;
labelFunc0697_01B4:
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
	var0006 = UI_find_nearest(item, 0x009A, 0x0001);
	UI_remove_item(item);
	UI_set_item_frame(var0006, 0x001C);
	var0003 = UI_execute_usecode_array(var0006, [(byte)0x6D, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x61]);
	UI_set_schedule_type(var0006, 0x001D);
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var0008 = Func0881();
	var0009 = UI_delayed_execute_usecode_array(var0008, [(byte)0x2C, (byte)0x2D], 0x000D);
	var000A = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000B, (byte)0x55, 0x069D]);
labelFunc0697_0280:
	goto labelFunc0697_0417;
labelFunc0697_0283:
	if (!(!gflags[0x032B])) goto labelFunc0697_033F;
	gflags[0x032B] = true;
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	UI_set_item_frame(item, 0x0004);
	var000B = UI_create_new_object(0x0209);
	UI_set_item_frame(var000B, 0x0010);
	var0002 = UI_update_last_created(var0000);
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x000B, (byte)0x52, "@吱吱！@", (byte)0x27, 0x0007, (byte)0x55, 0x0698]);
	var000C = UI_execute_usecode_array(var000B, [(byte)0x59, 0x0004, (byte)0x27, 0x0004, (byte)0x62, (byte)0x27, 0x0001, (byte)0x63, (byte)0x27, 0x0001, (byte)0x64, (byte)0x27, 0x0002, (byte)0x63, (byte)0x27, 0x0001, (byte)0x64, (byte)0x27, 0x0001, (byte)0x62, (byte)0x27, 0x0002, (byte)0x64]);
	goto labelFunc0697_0417;
labelFunc0697_033F:
	if (!(!gflags[0x032C])) goto labelFunc0697_0417;
	gflags[0x032C] = true;
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	UI_set_item_frame(item, 0x0004);
	var000D = UI_create_new_object(0x01F4);
	UI_set_item_frame(var000D, 0x0017);
	var0002 = UI_update_last_created(var0000);
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x000B, (byte)0x52, "@哞？！@", (byte)0x27, 0x0007, (byte)0x55, 0x0698]);
	var000E = UI_execute_usecode_array(var000D, [(byte)0x59, 0x0004, (byte)0x27, 0x0004, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x68]);
labelFunc0697_0417:
	return;
}


