#game "serpentisle"
void Func02F0 shape#(0x2F0) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02F0_003D;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc02F0_002D;
	UI_set_item_frame(item, 0x0001);
	UI_play_music(0x001F, item);
	goto labelFunc02F0_003D;
labelFunc02F0_002D:
	UI_set_item_frame(item, 0x0000);
	UI_play_music(0x00FF, item);
labelFunc02F0_003D:
	return;
}


