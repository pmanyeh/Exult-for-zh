#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);

void Func07E9 object#(0x7E9) ()
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

	var0000 = 0x0000;
	if (!(event == 0x0002)) goto labelFunc07E9_02B2;
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	var0003 = false;
	var0004 = UI_get_object_position(0xFE9C);
	if (!((var0002 == 0x02D1) || (var0002 == 0x03DD))) goto labelFunc07E9_007A;
	var0005 = (var0004[0x0003] + 0x0001);
	var0005 = (var0005 / 0x0002);
	UI_obj_sprite_effect(0xFE9C, 0x0009, var0005, var0005, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	return;
labelFunc07E9_007A:
	if (!UI_is_npc(var0001)) goto labelFunc07E9_0098;
	UI_halt_scheduled(var0001);
	var0003 = UI_get_object_position(var0001);
	goto labelFunc07E9_00D3;
labelFunc07E9_0098:
	if (!(var0001 == 0x0000)) goto labelFunc07E9_00C9;
	var0003[0x0001] = var0001[0x0002];
	var0003[0x0002] = var0001[0x0003];
	var0003[0x0003] = var0001[0x0004];
	goto labelFunc07E9_00D3;
labelFunc07E9_00C9:
	var0003 = UI_get_object_position(var0001);
labelFunc07E9_00D3:
	var0006 = UI_create_new_object(0x025F);
	if (!var0006) goto labelFunc07E9_0117;
	UI_set_item_frame(var0006, 0x001F);
	UI_set_item_flag(var0006, 0x0012);
	var0007 = UI_set_item_quality(var0006, 0x0096);
	var0007 = UI_update_last_created(var0003);
	var0008 = Func0979(var0006);
labelFunc07E9_0117:
	var0007 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0008]);
	if (!(var0003[0x0001] < var0004[0x0001])) goto labelFunc07E9_014D;
	var0004[0x0001] = (var0004[0x0001] - 0x0002);
labelFunc07E9_014D:
	if (!(var0003[0x0001] > var0004[0x0001])) goto labelFunc07E9_016D;
	var0004[0x0001] = (var0004[0x0001] + 0x0002);
labelFunc07E9_016D:
	if (!(var0003[0x0002] < var0004[0x0002])) goto labelFunc07E9_018D;
	var0004[0x0002] = (var0004[0x0002] - 0x0002);
labelFunc07E9_018D:
	if (!(var0003[0x0001] > var0004[0x0001])) goto labelFunc07E9_01AD;
	var0004[0x0002] = (var0004[0x0002] + 0x0002);
labelFunc07E9_01AD:
	var0009 = UI_create_new_object(0x037F);
	if (!var0009) goto labelFunc07E9_02B2;
	UI_set_item_frame(var0009, 0x0000);
	UI_set_item_flag(var0009, 0x0012);
	if (!UI_is_not_blocked(var0004, 0x0284, 0x0000)) goto labelFunc07E9_01EE;
	var0007 = UI_update_last_created(var0004);
	goto labelFunc07E9_028A;
labelFunc07E9_01EE:
	var0004[0x0003] = (var0004[0x0003] + 0x0001);
	if (!UI_is_not_blocked(var0004, 0x0284, 0x0000)) goto labelFunc07E9_021B;
	var0007 = UI_update_last_created(var0004);
	goto labelFunc07E9_028A;
labelFunc07E9_021B:
	var0004[0x0003] = (var0004[0x0003] - 0x0002);
	if (!UI_is_not_blocked(var0004, 0x02D1, 0x0000)) goto labelFunc07E9_0248;
	var0007 = UI_update_last_created(var0004);
	goto labelFunc07E9_028A;
labelFunc07E9_0248:
	var0005 = (var0004[0x0003] + 0x0001);
	var0005 = (var0005 / 0x0002);
	UI_obj_sprite_effect(0xFE9C, 0x0009, var0005, var0005, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	UI_remove_item(var0006);
	return;
labelFunc07E9_028A:
	var0007 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x2D], 0x0009);
	var0007 = UI_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x07EA]);
labelFunc07E9_02B2:
	return;
}


