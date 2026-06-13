#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);

void Func08E4 0x8E4 (var var0000)
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

	var0001 = [0x0178, 0x010E, 0x01B0, 0x01B1];
	var0002 = [];
	enum();
labelFunc08E4_0019:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc08E4_003C;
	var0002 = (var0002 & UI_find_nearby(item, var0005, 0x006E, 0x0000));
	goto labelFunc08E4_0019;
labelFunc08E4_003C:
	var0006 = false;
	enum();
labelFunc08E4_0041:
	for (var0005 in var0002 with var0007 to var0008) attend labelFunc08E4_0063;
	if (!(UI_get_item_quality(var0005) == var0000)) goto labelFunc08E4_0060;
	var0006 = var0005;
labelFunc08E4_0060:
	goto labelFunc08E4_0041;
labelFunc08E4_0063:
	if (!var0006) goto labelFunc08E4_008E;
	var0009 = 0x0002;
	if (!(Func0906(var0006) == 0x0002)) goto labelFunc08E4_0082;
	var0009 = 0x0001;
labelFunc08E4_0082:
	Func0907(var0006, var0009);
	goto labelFunc08E4_00A0;
labelFunc08E4_008E:
	var000A = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@No door!@"]);
labelFunc08E4_00A0:
	return;
}


