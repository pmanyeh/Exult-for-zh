#game "serpentisle"
// externs
extern void Func0987 0x987 (var var0000, var var0001, var var0002, var var0003);

void Func0986 0x986 (var var0000, var var0001)
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
	var var000C;

	var0002 = UI_get_party_list2();
	enum();
labelFunc0986_0008:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0986_00BC;
	if (!(UI_get_npc_prop(var0005, 0x0009) >= 0x000A)) goto labelFunc0986_00B9;
	if (!(!(var0005 == UI_get_npc_object(0xFE9C)))) goto labelFunc0986_003D;
	UI_clear_item_flag(var0005, 0x0001);
labelFunc0986_003D:
	UI_clear_item_flag(var0005, 0x0008);
	UI_clear_item_flag(var0005, 0x0007);
	UI_clear_item_flag(var0005, 0x0003);
	UI_clear_item_flag(var0005, 0x0002);
	UI_clear_item_flag(var0005, 0x0000);
	UI_clear_item_flag(var0005, 0x0009);
	Func0987(var0005, 0x0003, 0x0000, var0000);
	if (!(var0005 == UI_get_npc_object(0xFE9C))) goto labelFunc0986_00A5;
	Func0987(var0005, 0x0005, 0x0006, var0000);
labelFunc0986_00A5:
	var0006 = UI_set_npc_prop(var0005, 0x0009, (var0000 * 0xFFFF));
labelFunc0986_00B9:
	goto labelFunc0986_0008;
labelFunc0986_00BC:
	var0007 = UI_find_nearby(var0001, 0x02BD, 0x001E, 0x0000);
	var0007 = (var0007 & UI_find_nearby(var0001, 0x0152, 0x001E, 0x0000));
	enum();
labelFunc0986_00E7:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc0986_016B;
	var000B = UI_get_item_quality(var000A);
	if (!(var000B < (var0000 * 0x001E))) goto labelFunc0986_0153;
	UI_halt_scheduled(var000A);
	var000C = UI_get_item_shape(var000A);
	if (!(var000C == 0x0152)) goto labelFunc0986_012F;
	UI_set_item_shape(var000A, 0x03E5);
labelFunc0986_012F:
	if (!(var000C == 0x02BD)) goto labelFunc0986_0143;
	UI_set_item_shape(var000A, 0x0253);
labelFunc0986_0143:
	var0006 = UI_set_item_quality(var000A, 0x00FF);
	goto labelFunc0986_0168;
labelFunc0986_0153:
	var0006 = UI_set_item_quality(var000A, (var000B - (var0000 * 0x001E)));
labelFunc0986_0168:
	goto labelFunc0986_00E7;
labelFunc0986_016B:
	return;
}


