#game "serpentisle"
var Func08F8 0x8F8 (var var0000, var var0001, var var0002)
{
	if (!((var0000[0x0001] > var0001[0x0001]) && ((var0000[0x0001] < var0002[0x0001]) && ((var0000[0x0002] > var0001[0x0002]) && (var0000[0x0002] < var0002[0x0002]))))) goto labelFunc08F8_003F;
	return true;
	goto labelFunc08F8_0041;
labelFunc08F8_003F:
	return false;
labelFunc08F8_0041:
	return 0;
}


