#game "serpentisle"
var Func095F 0x95F (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = 0x0000;
	enum();
labelFunc095F_0007:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc095F_002D;
	var0002 = (var0002 + 0x0001);
	if (!(var0000 == var0005)) goto labelFunc095F_002A;
	return var0002;
labelFunc095F_002A:
	goto labelFunc095F_0007;
labelFunc095F_002D:
	return 0x0000;
	return 0;
}


