#game "serpentisle"
void Func0291 shape#(0x291) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0291_003F;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 % 0x0002) == 0x0000)) goto labelFunc0291_0027;
	var0001 = 0x0001;
	goto labelFunc0291_002D;
labelFunc0291_0027:
	var0001 = 0xFFFF;
labelFunc0291_002D:
	var0000 = (var0000 + var0001);
	UI_set_item_frame(item, var0000);
labelFunc0291_003F:
	return;
}


