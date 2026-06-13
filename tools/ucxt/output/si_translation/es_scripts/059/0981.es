#game "serpentisle"
var Func0981 0x981 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = var0000[0x0001];
	enum();
labelFunc0981_000A:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0981_0036;
	if (!(UI_get_distance(var0001, var0005) < UI_get_distance(var0001, var0002))) goto labelFunc0981_0033;
	var0002 = var0005;
labelFunc0981_0033:
	goto labelFunc0981_000A;
labelFunc0981_0036:
	return var0002;
	return 0;
}


