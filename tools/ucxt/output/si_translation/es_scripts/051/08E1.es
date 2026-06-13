#game "serpentisle"
var Func08E1 0x8E1 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0001 = UI_find_nearby(var0000, 0x01B9, 0x0004, 0x0000);
	var0002 = 0x0000;
	var0003 = UI_get_object_position(var0000);
	enum();
labelFunc08E1_0024:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc08E1_0066;
	var0007 = UI_get_object_position(var0006);
	if (!(((var0007[0x0002] - var0003[0x0002]) < 0x0002) && ((var0007[0x0002] - var0003[0x0002]) > 0xFFFE))) goto labelFunc08E1_0063;
	return var0006;
labelFunc08E1_0063:
	goto labelFunc08E1_0024;
labelFunc08E1_0066:
	return 0x0000;
	return 0;
}


