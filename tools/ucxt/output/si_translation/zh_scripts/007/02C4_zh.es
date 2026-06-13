#game "serpentisle"
void Func02C4 shape#(0x2C4) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc02C4_0046;
	var0000 = UI_get_item_frame(item);
	var0001 = var0000;
	if (!(var0000 == 0x0001)) goto labelFunc02C4_0026;
	var0001 = 0x0000;
labelFunc02C4_0026:
	if (!(var0000 == 0x0000)) goto labelFunc02C4_0036;
	var0001 = 0x0001;
labelFunc02C4_0036:
	UI_play_sound_effect2(0x0046, item);
	UI_set_item_frame(item, var0001);
labelFunc02C4_0046:
	return;
}


