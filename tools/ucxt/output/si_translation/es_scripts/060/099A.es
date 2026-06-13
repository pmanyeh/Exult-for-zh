#game "serpentisle"
var Func099A 0x99A (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0002 = 0x0001;
	var0003 = [];
	enum();
labelFunc099A_000D:
	for (var0006 in var0000 with var0004 to var0005) attend labelFunc099A_0039;
	if (!(var0002 != var0001)) goto labelFunc099A_002C;
	var0003 = (var0003 & var0006);
labelFunc099A_002C:
	var0002 = (var0002 + 0x0001);
	goto labelFunc099A_000D;
labelFunc099A_0039:
	return var0003;
	return 0;
}


