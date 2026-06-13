#game "serpentisle"
var Func08A7 0x8A7 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0001 = [0x0002, 0x0003, 0x0004, 0x0005, 0x0008, 0x0009, 0x000A, 0x000B];
	var0002 = [0x0001, 0x0004, 0x0005, 0x0007, 0x0002, 0x0004, 0x0006, 0x0008];
	var0003 = UI_get_item_frame(var0000);
	if (!(var0003 in var0001)) goto labelFunc08A7_007A;
	var0004 = 0x0001;
	enum();
labelFunc08A7_0057:
	for (var0007 in var0001 with var0005 to var0006) attend labelFunc08A7_0077;
	if (!(var0003 == var0007)) goto labelFunc08A7_0074;
	return var0002[var0004];
	abort;
labelFunc08A7_0074:
	goto labelFunc08A7_0057;
labelFunc08A7_0077:
	goto labelFunc08A7_007C;
labelFunc08A7_007A:
	return false;
labelFunc08A7_007C:
	return 0;
}


