#game "serpentisle"
var Func08E0 0x8E0 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_find_nearby(var0000, 0x03B5, 0x0014, 0x0000);
	enum();
labelFunc08E0_0014:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08E0_002A;
	return UI_get_item_quality(var0004);
	goto labelFunc08E0_0014;
labelFunc08E0_002A:
	return 0x0000;
	return 0;
}


