#game "serpentisle"
var Func088F 0x88F (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = UI_find_nearby(var0000, 0xFE99, 0x000A, 0x0000);
	var0002 = [0x0316];
	enum();
labelFunc088F_001D:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc088F_0043;
	var0006 = UI_get_item_shape(var0005);
	if (!(var0006 in var0002)) goto labelFunc088F_0040;
	return 0x0316;
labelFunc088F_0040:
	goto labelFunc088F_001D;
labelFunc088F_0043:
	return 0x00C7;
	return 0;
}


