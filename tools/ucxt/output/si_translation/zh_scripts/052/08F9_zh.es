#game "serpentisle"
// externs
extern var Func08F7 0x8F7 ();
extern var Func0993 0x993 (var var0000);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);

var Func08F9 0x8F9 ()
{
	var var0000;
	var var0001;

	var0000 = Func08F7();
	var0001 = Func0993(var0000);
	if (!(var0001 == 0x0004)) goto labelFunc08F9_001B;
	return true;
labelFunc08F9_001B:
	if (!(var0001 == 0x000B)) goto labelFunc08F9_0027;
	return true;
labelFunc08F9_0027:
	if (!(var0001 == 0x000F)) goto labelFunc08F9_0033;
	return true;
labelFunc08F9_0033:
	if (!(var0001 == 0x000C)) goto labelFunc08F9_003F;
	return true;
labelFunc08F9_003F:
	if (!(!UI_get_item_flag(0xFFB0, 0x001C))) goto labelFunc08F9_004F;
	return true;
labelFunc08F9_004F:
	if (!(Func08F8(var0000, [0x08A3, 0x07B1], [0x08CE, 0x07DF]) || Func08F8(var0000, [0x0853, 0x0821], [0x087E, 0x083D]))) goto labelFunc08F9_0085;
	return true;
labelFunc08F9_0085:
	if (!Func08F8(var0000, [0x0324, 0x0A6C], [0x03BF, 0x0ADC])) goto labelFunc08F9_00A2;
	return true;
labelFunc08F9_00A2:
	if (!Func08F8(var0000, [0x0444, 0x06D5], [0x047A, 0x072A])) goto labelFunc08F9_00BF;
	return true;
labelFunc08F9_00BF:
	if (!Func08F8(var0000, [0x0423, 0x0343], [0x0452, 0x039B])) goto labelFunc08F9_00DC;
	return true;
labelFunc08F9_00DC:
	if (!Func08F8(var0000, [0x0000, 0x0000], [0x04F7, 0x0246])) goto labelFunc08F9_00F9;
	return true;
labelFunc08F9_00F9:
	if (!Func08F8(var0000, [0x0000, 0x0000], [0x03E0, 0x02FE])) goto labelFunc08F9_0116;
	return true;
labelFunc08F9_0116:
	if (!Func08F8(var0000, [0x0000, 0x0000], [0x0366, 0x0402])) goto labelFunc08F9_0133;
	return true;
labelFunc08F9_0133:
	if (!Func08F8(var0000, [0x0133, 0x0373], [0x0331, 0x0480])) goto labelFunc08F9_0150;
	return true;
labelFunc08F9_0150:
	if (!Func08F8(var0000, [0x0913, 0x01BA], [0x093A, 0x01DC])) goto labelFunc08F9_016D;
	return true;
labelFunc08F9_016D:
	if (!Func08F8(var0000, [0x0A70, 0x016F], [0x0B80, 0x0280])) goto labelFunc08F9_018A;
	return true;
labelFunc08F9_018A:
	return false;
	return 0;
}


