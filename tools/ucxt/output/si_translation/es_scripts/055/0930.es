#game "serpentisle"
var Func0930 0x930 (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0003 = UI_find_nearby(var0000, var0001, var0002, 0x0000);
	enum();
labelFunc0930_0014:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0930_0034;
	if (!(UI_get_item_quality(var0006) == 0x006C)) goto labelFunc0930_0031;
	return var0006;
labelFunc0930_0031:
	goto labelFunc0930_0014;
labelFunc0930_0034:
	return false;
	return 0;
}


