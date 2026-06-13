#game "serpentisle"
var Func0944 0x944 (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0003 = [0x0001, 0x0002, 0x0003];
	enum();
labelFunc0944_0010:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0944_0040;
	if (!((!(var0000[var0006] >= var0001[var0006])) || (!(var0000[var0006] <= var0002[var0006])))) goto labelFunc0944_003D;
	return false;
labelFunc0944_003D:
	goto labelFunc0944_0010;
labelFunc0944_0040:
	return true;
	return 0;
}


