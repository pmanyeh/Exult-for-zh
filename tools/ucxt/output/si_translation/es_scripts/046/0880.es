#game "serpentisle"
var Func0880 0x880 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_item_frame(var0000);
	var0002 = UI_get_item_shape(var0000);
	if (!((var0001 == 0x0015) && (var0002 == 0x03F3))) goto labelFunc0880_002B;
	return true;
	goto labelFunc0880_002D;
labelFunc0880_002B:
	return false;
labelFunc0880_002D:
	return 0;
}


