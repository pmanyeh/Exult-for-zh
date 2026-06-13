#game "serpentisle"
var Func0912 0x912 (var var0000, var var0001)
{
	var var0002;

	var0002 = 0x0000;
labelFunc0912_0006:
	var0002 = (var0002 + 0x0001);
	var0000[var0002] = (var0000[var0002] * 0xFFFF);
	if (!(!(var0002 == var0001))) goto labelFunc0912_002E;
	goto labelFunc0912_0006;
labelFunc0912_002E:
	return var0000;
	return 0;
}


