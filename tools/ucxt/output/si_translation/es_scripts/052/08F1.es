#game "serpentisle"
var Func08F1 0x8F1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = [0x03A3, 0x0A46, 0x0000];
	var0001 = UI_get_object_position(0xFF6A);
	var0002 = (var0000[0x0001] - var0001[0x0001]);
	if (!(var0002 < 0x0000)) goto labelFunc08F1_003D;
	var0002 = (var0002 * 0xFFFF);
labelFunc08F1_003D:
	var0003 = (var0000[0x0002] - var0001[0x0002]);
	if (!(var0003 < 0x0000)) goto labelFunc08F1_0061;
	var0003 = (var0003 * 0xFFFF);
labelFunc08F1_0061:
	var0004 = (var0002 + var0003);
	return var0004;
	return 0;
}


