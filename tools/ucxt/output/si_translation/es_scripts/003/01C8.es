#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func01C8 shape#(0x1C8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func09A0(0x0005, 0x0003);
	if (!(event == 0x0001)) goto labelFunc01C8_0063;
	var0001 = UI_get_item_frame(item);
	if (!(var0001 < 0x0006)) goto labelFunc01C8_0063;
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x2C, (byte)0x23, (byte)0x46, 0x0000], 0x0014);
	UI_set_item_frame(item, 0x0006);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x01C8], 0x0002);
	UI_play_sound_effect(0x004A);
labelFunc01C8_0063:
	if (!(event == 0x0002)) goto labelFunc01C8_00C4;
	var0003 = UI_click_on_item();
	var0004 = UI_get_item_shape(var0003);
	if (!(var0004 == 0x0326)) goto labelFunc01C8_00BD;
	gflags[0x00CE] = true;
	var0005 = UI_get_object_position(var0003);
	UI_sprite_effect(0x0015, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	goto labelFunc01C8_00C4;
labelFunc01C8_00BD:
	UI_play_sound_effect(0x0030);
labelFunc01C8_00C4:
	return;
}


