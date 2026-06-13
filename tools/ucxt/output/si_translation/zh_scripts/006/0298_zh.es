#game "serpentisle"
void Func0298 shape#(0x298) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0298_0041;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0298_0041;
	UI_play_sound_effect(0x0019);
	UI_set_item_frame(item, 0x0001);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0014, (byte)0x55, 0x0298]);
	abort;
labelFunc0298_0041:
	if (!(event == 0x0002)) goto labelFunc0298_0058;
	UI_set_item_frame(item, 0x0000);
	UI_play_sound_effect(0x00FF);
labelFunc0298_0058:
	return;
}


