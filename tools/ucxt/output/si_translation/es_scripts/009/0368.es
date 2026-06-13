#game "serpentisle"
void Func0368 shape#(0x368) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0368_0041;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0368_0041;
	UI_play_sound_effect(0x0061);
	UI_set_item_frame(item, 0x0001);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0014, (byte)0x55, 0x0368]);
	abort;
labelFunc0368_0041:
	if (!(event == 0x0002)) goto labelFunc0368_0058;
	UI_set_item_frame(item, 0x0000);
	UI_play_sound_effect(0x00FF);
labelFunc0368_0058:
	return;
}


