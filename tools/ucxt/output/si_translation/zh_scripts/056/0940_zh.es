#game "serpentisle"
var Func0940 0x940 (var var0000, var var0001)
{
	var var0002;

	if (!(var0001 > 0x0000)) goto labelFunc0940_0050;
	var0002 = ((var0001 * 0x0002) + 0x0001);
	var0000[0x0001] = (var0000[0x0001] + ((UI_get_random(var0002) - 0x0001) - var0001));
	var0000[0x0002] = (var0000[0x0002] + ((UI_get_random(var0002) - 0x0001) - var0001));
labelFunc0940_0050:
	return var0000;
	return 0;
}


