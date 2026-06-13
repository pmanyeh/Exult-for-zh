#game "serpentisle"
var Func09A7 0x9A7 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0002 = 0x0000;
	var0003 = [];
	enum();
labelFunc09A7_000D:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc09A7_003B;
	var0002 = (var0002 + 0x0001);
	if (!(var0002 != var0000)) goto labelFunc09A7_0038;
	var0003 = [var0003, var0006];
labelFunc09A7_0038:
	goto labelFunc09A7_000D;
labelFunc09A7_003B:
	return var0003;
	return 0;
}


