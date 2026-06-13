#game "serpentisle"
void Func0133 shape#(0x133) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0133_003B;
	UI_play_sound_effect(0x0041);
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0133_0029;
	UI_set_item_frame(item, 0x0001);
labelFunc0133_0029:
	if (!(var0000 == 0x0001)) goto labelFunc0133_003B;
	UI_set_item_frame(item, 0x0000);
labelFunc0133_003B:
	return;
}


