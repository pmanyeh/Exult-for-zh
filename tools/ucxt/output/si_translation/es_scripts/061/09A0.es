#game "serpentisle"
var Func09A0 0x9A0 (var var0000, var var0001)
{
	var var0002;
	var var0003;

	if (!(((var0000 < 0x0000) || (var0000 > 0x0007)) || ((var0001 < 0x0001) || (var0001 > 0x0004)))) goto labelFunc09A0_0024;
	return false;
labelFunc09A0_0024:
	if (!((var0000 == 0x0000) || (var0000 == 0x0001))) goto labelFunc09A0_0079;
	var0002 = (((var0000 * 0x0002) + 0x0017) + var0001);
	var0003 = UI_get_cont_items(0xFE9C, 0x025F, 0xFE99, var0002);
	if (!(var0003 < 0x0008)) goto labelFunc09A0_0072;
	UI_error_message(["WARNING! GimmePathEgg returning ref = ", var0003]);
labelFunc09A0_0072:
	return var0003;
	goto labelFunc09A0_00B9;
labelFunc09A0_0079:
	var0002 = (((var0000 * 0x0004) + var0001) - 0x0001);
	var0003 = UI_get_cont_items(0xFE9C, 0x025F, 0xFE99, var0002);
	if (!(var0003 < 0x0008)) goto labelFunc09A0_00B5;
	UI_error_message(["WARNING! GimmePathEgg returning ref = ", var0003]);
labelFunc09A0_00B5:
	return var0003;
labelFunc09A0_00B9:
	return 0;
}


