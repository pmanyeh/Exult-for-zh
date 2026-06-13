#game "serpentisle"
void Func0600 object#(0x600) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = (UI_get_item_quality(item) - 0x0001);
	var0001 = UI_set_item_quality(item, var0000);
	if (!(var0000 == 0x0000)) goto labelFunc0600_008D;
	UI_halt_scheduled(item);
	var0002 = UI_get_item_shape(item);
	if (!(var0002 == 0x0152)) goto labelFunc0600_0040;
	UI_set_item_shape(item, 0x03E5);
labelFunc0600_0040:
	if (!(var0002 == 0x02BD)) goto labelFunc0600_005D;
	UI_set_item_shape(item, 0x0253);
	var0001 = UI_set_item_quality(item, 0x00FF);
labelFunc0600_005D:
	if (!(var0002 == 0x01B3)) goto labelFunc0600_0083;
	var0003 = UI_get_item_frame(item);
	UI_set_item_shape(item, 0x01E1);
	UI_set_item_frame(item, (var0003 + 0x0002));
labelFunc0600_0083:
	UI_play_sound_effect(0x0041);
	goto labelFunc0600_00A0;
labelFunc0600_008D:
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x0600], 0x0032);
labelFunc0600_00A0:
	return;
}


