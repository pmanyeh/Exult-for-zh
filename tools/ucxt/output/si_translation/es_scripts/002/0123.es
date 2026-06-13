#game "serpentisle"
void Func0123 shape#(0x123) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0123_003D;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 > 0x0003)) goto labelFunc0123_0029;
	UI_set_item_frame(item, (var0000 - 0x0004));
	goto labelFunc0123_0035;
labelFunc0123_0029:
	UI_set_item_frame(item, (var0000 + 0x0004));
labelFunc0123_0035:
	UI_play_sound_effect2(0x0009, item);
labelFunc0123_003D:
	return;
}


