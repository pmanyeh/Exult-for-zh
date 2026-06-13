#game "serpentisle"
var Func093D 0x93D (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0002 = [0x0108, 0x0116, 0x029F, 0x00C9, 0x00CB, 0x019F];
	var0003 = [0x0004, 0x0006, 0x0012, 0x0013, 0x0015, 0x0020];
	var0004 = UI_find_nearby(item, 0xFE99, var0001, 0x0000);
	enum();
labelFunc093D_0042:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc093D_0077;
	var0008 = UI_get_item_shape(var0007);
	enum();
labelFunc093D_0058:
	for (var000B in var0002 with var0009 to var000A) attend labelFunc093D_0074;
	if (!(var000B == var0008)) goto labelFunc093D_0071;
	return var0007;
labelFunc093D_0071:
	goto labelFunc093D_0058;
labelFunc093D_0074:
	goto labelFunc093D_0042;
labelFunc093D_0077:
	return 0x0000;
	return 0;
}


