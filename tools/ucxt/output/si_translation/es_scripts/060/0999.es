#game "serpentisle"
var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(var0004 == 0x0000)) goto labelFunc0999_0020;
	var0007 = UI_input_numeric_value(0x0000, var0000, 0x0001, 0x0000);
	goto labelFunc0999_0033;
labelFunc0999_0020:
	var0007 = UI_input_numeric_value(var0003, var0000, 0x0001, 0x0000);
labelFunc0999_0033:
	var0008 = 0x0000;
	var0009 = 0x0000;
	if (!(var0007 == var0000)) goto labelFunc0999_004C;
	goto labelFunc0999_0166;
labelFunc0999_004C:
	var0008 = (var0000 - var0007);
	if (!(var0006 == 0x0001)) goto labelFunc0999_0072;
	var0009 = 0x0005;
	var000A = var0000;
	goto labelFunc0999_0218;
	goto labelFunc0999_00A1;
labelFunc0999_0072:
	if (!(!var0006)) goto labelFunc0999_00A1;
	if (!(var0004 > (var0005 / 0x0002))) goto labelFunc0999_00A1;
	if (!UI_get_random((var0005 - var0004))) goto labelFunc0999_00A1;
	var0006 = 0x0001;
	var0009 = 0x0004;
labelFunc0999_00A1:
	if (!(!var0009)) goto labelFunc0999_0166;
	if (!(var0007 < (var0003 + ((var0008 * 0x0003) / 0x000A)))) goto labelFunc0999_0108;
	if (!(var0007 < (var0003 + ((var0008 * 0x000F) / 0x0064)))) goto labelFunc0999_00FB;
	if (!(var0007 > var0001)) goto labelFunc0999_00F5;
	if (!(UI_get_random(0x0002) == 0x0001)) goto labelFunc0999_00F2;
	var0009 = 0x0001;
labelFunc0999_00F2:
	goto labelFunc0999_00FB;
labelFunc0999_00F5:
	var0009 = 0x0001;
labelFunc0999_00FB:
	var0009 = (var0009 + 0x0004);
	goto labelFunc0999_0166;
labelFunc0999_0108:
	if (!(var0008 < ((var0000 - var0003) / 0x0002))) goto labelFunc0999_014D;
	if (!(var0007 > var0001)) goto labelFunc0999_0144;
	if (!(UI_get_random(0x0003) == 0x0001)) goto labelFunc0999_013B;
	var0009 = 0x0001;
	goto labelFunc0999_0141;
labelFunc0999_013B:
	var0009 = 0x0002;
labelFunc0999_0141:
	goto labelFunc0999_014A;
labelFunc0999_0144:
	var0009 = 0x0003;
labelFunc0999_014A:
	goto labelFunc0999_0166;
labelFunc0999_014D:
	if (!(var0007 == var0000)) goto labelFunc0999_0160;
	var0009 = 0x0001;
	goto labelFunc0999_0166;
labelFunc0999_0160:
	var0009 = 0x0003;
labelFunc0999_0166:
	if (!(var0002 == 0x0001)) goto labelFunc0999_017E;
	var000A = (var0000 - (var0008 / 0x0002));
labelFunc0999_017E:
	if (!(var0002 == 0x0002)) goto labelFunc0999_0196;
	var000A = (var0000 - (var0008 / 0x0003));
labelFunc0999_0196:
	if (!(var0002 == 0x0003)) goto labelFunc0999_01AE;
	var000A = (var0000 - (var0008 / 0x0004));
labelFunc0999_01AE:
	var000B = (var0000 - var000A);
	var000A = (var0000 - ((var000B * (0x0050 + UI_get_random(0x0028))) / 0x0064));
	if (!(var000A >= var0000)) goto labelFunc0999_01E6;
	var000A = (var000A - 0x0001);
labelFunc0999_01E6:
	if (!(var000A <= var0007)) goto labelFunc0999_01FC;
	var000A = var0007;
	var0009 = 0x0001;
labelFunc0999_01FC:
	if (!(var000A <= var0001)) goto labelFunc0999_0218;
	var000A = var0001;
	var0006 = 0x0001;
	var0009 = 0x0004;
labelFunc0999_0218:
	return [var0007, var000A, var0009, var0006];
	return 0;
}


