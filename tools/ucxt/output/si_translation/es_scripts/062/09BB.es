#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func089D 0x89D (var var0000);
extern void Func09BE 0x9BE (var var0000, var var0001);

void Func09BB 0x9BB (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(var0001 == 0x0001)) goto labelFunc09BB_002D;
	if (!UI_in_usecode(var0000)) goto labelFunc09BB_0015;
	return;
labelFunc09BB_0015:
	Func090D(var0000, 0xFFFE, 0xFFFE, 0xFFFF, 0x0631, var0000, 0x000A);
labelFunc09BB_002D:
	if (!(var0001 == 0x0002)) goto labelFunc09BB_00C1;
	var0002 = UI_get_item_quality(item);
	var0003 = UI_find_nearby(item, 0x0366, 0x000F, 0x0000);
	var0004 = UI_find_nearby(item, 0x0203, 0x000F, 0x0000);
	var0003 = (var0003 & var0004);
	var0004 = [];
	enum();
labelFunc09BB_0072:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc09BB_0098;
	if (!(UI_get_item_quality(var0007) == var0002)) goto labelFunc09BB_0095;
	var0004 = (var0004 & var0007);
labelFunc09BB_0095:
	goto labelFunc09BB_0072;
labelFunc09BB_0098:
	if (!Func089D(var0004)) goto labelFunc09BB_00BC;
	var0008 = UI_execute_usecode_array(item, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0004]);
	return;
labelFunc09BB_00BC:
	Func09BE(item, false);
labelFunc09BB_00C1:
	return;
}


