#game "serpentisle"
var Func09A8 0x9A8 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0002 = [];
	var0003 = 0x0000;
	enum();
labelFunc09A8_000D:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc09A8_003B;
	var0003 = (var0003 + 0x0001);
	if (!(var0006 == var0000)) goto labelFunc09A8_0038;
	var0002 = [var0002, var0003];
labelFunc09A8_0038:
	goto labelFunc09A8_000D;
labelFunc09A8_003B:
	return var0002;
	return 0;
}


