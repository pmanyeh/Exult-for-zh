#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0977 0x977 (var var0000);

var Func09B3 0x9B3 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = [false, 0x0000];
	var0002 = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc09B3_001E:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc09B3_00B0;
	if (!(!((UI_get_item_shape(var0005) == 0x0128) && (UI_get_item_frame(var0005) == 0x0002)))) goto labelFunc09B3_00AD;
	var0006 = Func099B(0xFE9C, UI_get_item_quantity(var0005, 0x0000), UI_get_item_shape(var0005), UI_get_item_quality(var0005), UI_get_item_frame(var0005), UI_get_item_flag(var0005, 0x0012), false);
	if (!(var0001[0x0001] == 0x0000)) goto labelFunc09B3_0090;
	var0001[0x0001] = var0006[0x0001];
labelFunc09B3_0090:
	var0001[0x0002] = (var0001[0x0002] + var0006[Func0977(var0006)]);
	UI_remove_item(var0005);
labelFunc09B3_00AD:
	goto labelFunc09B3_001E;
labelFunc09B3_00B0:
	return var0001;
	return 0;
}


