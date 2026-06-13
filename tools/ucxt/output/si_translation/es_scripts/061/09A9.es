#game "serpentisle"
// externs
extern var Func09A8 0x9A8 (var var0000, var var0001);
extern var Func095F 0x95F (var var0000, var var0001);

var Func09A9 0x9A9 (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0003 = Func09A8(var0000[0x0001], var0001);
	var0004 = Func09A8(var0000[0x0002], var0002);
	var0005 = [];
	if (!var0003) goto labelFunc09A9_0058;
	enum();
labelFunc09A9_002B:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc09A9_0051;
	if (!Func095F(var0008, var0004)) goto labelFunc09A9_004E;
	var0005 = [var0005, var0008];
labelFunc09A9_004E:
	goto labelFunc09A9_002B;
labelFunc09A9_0051:
	return var0005;
	goto labelFunc09A9_005C;
labelFunc09A9_0058:
	return [];
labelFunc09A9_005C:
	return 0;
}


