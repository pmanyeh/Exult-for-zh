#game "serpentisle"
void Func03A1 shape#(0x3A1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc03A1_00AC;
	UI_close_gumps();
	var0000 = UI_click_on_item();
	var0001 = UI_get_object_position(var0000);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!((UI_get_item_shape(var0000) == 0x03E6) && (UI_get_item_frame(var0000) == 0x0006))) goto labelFunc03A1_00A5;
	UI_play_sound_effect(0x0077);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x03E6], 0x0005);
	goto labelFunc03A1_00AC;
labelFunc03A1_00A5:
	UI_play_sound_effect(0x0030);
labelFunc03A1_00AC:
	return;
}


