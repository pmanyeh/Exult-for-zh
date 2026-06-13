#game "serpentisle"
var Func0989 0x989 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = UI_get_array_size(var0000);
	if (!(var0002 > 0x0001)) goto labelFunc0989_00A6;
	var0003 = true;
labelFunc0989_0018:
	if (!var0003) goto labelFunc0989_00A6;
	var0003 = false;
	var0004 = 0x0001;
labelFunc0989_0028:
	if (!(var0004 < var0002)) goto labelFunc0989_00A3;
	if (!(var0001[var0004] > var0001[(var0004 + 0x0001)])) goto labelFunc0989_0096;
	var0005 = var0001[var0004];
	var0001[var0004] = var0001[(var0004 + 0x0001)];
	var0001[(var0004 + 0x0001)] = var0005;
	var0005 = var0000[var0004];
	var0000[var0004] = var0000[(var0004 + 0x0001)];
	var0000[(var0004 + 0x0001)] = var0005;
	var0003 = true;
labelFunc0989_0096:
	var0004 = (var0004 + 0x0001);
	goto labelFunc0989_0028;
labelFunc0989_00A3:
	goto labelFunc0989_0018;
labelFunc0989_00A6:
	return var0000;
	return 0;
}


