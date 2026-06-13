#game "serpentisle"
void Func02A6 shape#(0x2A6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc02A6_003F;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 % 0x0002) == 0x0000)) goto labelFunc02A6_0027;
	var0001 = 0x0001;
	goto labelFunc02A6_002D;
labelFunc02A6_0027:
	var0001 = 0xFFFF;
labelFunc02A6_002D:
	var0000 = (var0000 + var0001);
	UI_set_item_frame(item, var0000);
labelFunc02A6_003F:
	return;
}


