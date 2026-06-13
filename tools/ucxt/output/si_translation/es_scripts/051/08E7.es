#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0989 0x989 (var var0000, var var0001);

var Func08E7 0x8E7 (var var0000)
{
	var var0001;
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
	var var000D;
	var var000E;

	var0001 = 0x0001;
	var0002 = 0x0000;
	var0003 = false;
	var0004 = UI_get_party_list();
	var0005 = UI_get_barge(var0000);
	var0006 = UI_find_nearby(var0000, 0x0124, 0x001E, 0x0000);
	var0007 = [];
	var0008 = [];
	enum();
labelFunc08E7_0041:
	for (var000B in var0006 with var0009 to var000A) attend labelFunc08E7_00AC;
	if (!(UI_get_barge(var000B) == var0005)) goto labelFunc08E7_00A9;
	if (!((!var0003) && (UI_get_item_quality(var000B) == 0x00FF))) goto labelFunc08E7_008E;
	UI_sit_down(0xFE9C, var000B);
	var0004 = Func0988(UI_get_npc_object(0xFE9C), var0004);
	var0003 = true;
	goto labelFunc08E7_00A9;
labelFunc08E7_008E:
	var0008 = (var0008 & UI_get_distance(var000B, 0xFE9C));
	var0007 = (var0007 & var000B);
labelFunc08E7_00A9:
	goto labelFunc08E7_0041;
labelFunc08E7_00AC:
	var000C = UI_get_array_size(var0004);
	var0007 = Func0989(var0007, var0008);
	enum();
labelFunc08E7_00C3:
	for (var000B in var0007 with var000D to var000E) attend labelFunc08E7_00F7;
	if (!(var000C >= var0001)) goto labelFunc08E7_00F2;
	UI_sit_down(var0004[var0001], var000B);
	var0001 = (var0001 + 0x0001);
	goto labelFunc08E7_00F4;
labelFunc08E7_00F2:
	return true;
labelFunc08E7_00F4:
	goto labelFunc08E7_00C3;
labelFunc08E7_00F7:
	return false;
	return 0;
}


