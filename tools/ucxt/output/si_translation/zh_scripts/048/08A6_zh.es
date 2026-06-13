#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);

void Func08A6 0x8A6 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0000 = UI_find_nearby(0xFE9C, 0x01E9, 0x0002, 0x00B0);
	var0001 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x00B0));
	if (!var0000) goto labelFunc08A6_008C;
	enum();
labelFunc08A6_0044:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08A6_0089;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x00DA)) goto labelFunc08A6_0086;
	if (!(Func0906(var0004) == 0x0000)) goto labelFunc08A6_0079;
	Func0907(var0004, 0x0002);
labelFunc08A6_0079:
	var0006 = UI_set_item_quality(var0004, 0x00DC);
labelFunc08A6_0086:
	goto labelFunc08A6_0044;
labelFunc08A6_0089:
	goto labelFunc08A6_00D2;
labelFunc08A6_008C:
	enum();
labelFunc08A6_008D:
	for (var0004 in var0001 with var0007 to var0008) attend labelFunc08A6_00D2;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x00DC)) goto labelFunc08A6_00CF;
	if (!(Func0906(var0004) == 0x0002)) goto labelFunc08A6_00C2;
	Func0907(var0004, 0x0000);
labelFunc08A6_00C2:
	var0006 = UI_set_item_quality(var0004, 0x00DA);
labelFunc08A6_00CF:
	goto labelFunc08A6_008D;
labelFunc08A6_00D2:
	return;
}


