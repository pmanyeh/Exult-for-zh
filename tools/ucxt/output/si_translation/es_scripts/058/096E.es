#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);

var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004)
{
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0005 = false;
	var0006 = Func095C(var0003, 0x0007);
	var0007 = UI_count_objects(0xFE9B, var0001, 0xFE99, 0xFE99);
	if (!(!(var0007 >= var0002))) goto labelFunc096E_0032;
	return 0x0001;
labelFunc096E_0032:
	if (!(!(var0006 >= var0004))) goto labelFunc096E_0041;
	return 0x0000;
labelFunc096E_0041:
	enum();
labelFunc096E_0042:
	for (var000A in var0000 with var0008 to var0009) attend labelFunc096E_006A;
	var000B = Func095C(var0003, var000A);
	if (!(var000B < 0x001E)) goto labelFunc096E_0067;
	var0005 = true;
labelFunc096E_0067:
	goto labelFunc096E_0042;
labelFunc096E_006A:
	if (!(var0005 == false)) goto labelFunc096E_0076;
	return 0x0002;
labelFunc096E_0076:
	return 0x0003;
	return 0;
}


