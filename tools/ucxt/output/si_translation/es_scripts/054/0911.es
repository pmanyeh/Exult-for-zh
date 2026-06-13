#game "serpentisle"
var Func0911 0x911 (var var0000, var var0001, var var0002)
{
	var var0003;

	var0003 = 0x0000;
labelFunc0911_0006:
	var0003 = (var0003 + 0x0001);
	var0000[var0003] = (var0000[var0003] + var0001[var0003]);
	if (!(!(var0003 == var0002))) goto labelFunc0911_0031;
	goto labelFunc0911_0006;
labelFunc0911_0031:
	return var0000;
	return 0;
}


