#game "serpentisle"
var Func0980 0x980 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = UI_find_nearby(item, 0xFE99, var0000, 0x0008);
	var0002 = UI_get_party_list();
	var0003 = [];
	if (!UI_get_item_flag(item, 0x0006)) goto labelFunc0980_0054;
	enum();
labelFunc0980_002A:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc0980_004D;
	if (!(!(var0006 in var0002))) goto labelFunc0980_004A;
	var0003 = (var0003 & var0006);
labelFunc0980_004A:
	goto labelFunc0980_002A;
labelFunc0980_004D:
	return var0003;
	goto labelFunc0980_0058;
labelFunc0980_0054:
	return var0002;
labelFunc0980_0058:
	return 0;
}


