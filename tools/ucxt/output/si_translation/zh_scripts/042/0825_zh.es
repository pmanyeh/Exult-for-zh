#game "serpentisle"
var Func0825 0x825 ()
{
	var var0000;

	var0000 = UI_get_object_position(0xFF2B);
	if (!((var0000[0x0001] > 0x090C) && ((var0000[0x0001] < 0x0920) && ((var0000[0x0002] > 0x0412) && (var0000[0x0002] < 0x0426))))) goto labelFunc0825_003D;
	return true;
	goto labelFunc0825_003F;
labelFunc0825_003D:
	return false;
labelFunc0825_003F:
	return 0;
}


