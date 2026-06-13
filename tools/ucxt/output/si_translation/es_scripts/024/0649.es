#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern var Func0941 0x941 (var var0000);

void Func0649 object#(0x649) ()
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

	if (!(event == 0x0001)) goto labelFunc0649_0158;
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Jux@");
	if (!Func0951()) goto labelFunc0649_0140;
	var0002 = (0x0005 + Func0941(0xFE9C));
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0004 = UI_find_nearby(var0000, 0x00C8, var0002, 0x00B0);
	enum();
labelFunc0649_0064:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0649_00C0;
	var0000 = UI_get_object_position(var0007);
	var0003 = UI_set_last_created(var0007);
	if (!var0003) goto labelFunc0649_00BD;
	var0003 = UI_update_last_created(0xFE9A);
	UI_halt_scheduled(var0007);
	UI_obj_sprite_effect(var0007, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
labelFunc0649_00BD:
	goto labelFunc0649_0064;
labelFunc0649_00C0:
	var0008 = UI_find_nearby(var0000, 0x0320, var0002, 0x00B0);
	var0009 = UI_find_nearby(var0000, 0x020A, var0002, 0x00B0);
	var000A = (var0008 & var0009);
	enum();
labelFunc0649_00F1:
	for (var0007 in var000A with var000B to var000C) attend labelFunc0649_013D;
	if (!(UI_get_item_quality(var0007) >= 0x00FA)) goto labelFunc0649_013A;
	var0003 = UI_set_item_quality(var0007, 0x0000);
	UI_obj_sprite_effect(var0007, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
labelFunc0649_013A:
	goto labelFunc0649_00F1;
labelFunc0649_013D:
	goto labelFunc0649_0158;
labelFunc0649_0140:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0649_0158:
	return;
}


