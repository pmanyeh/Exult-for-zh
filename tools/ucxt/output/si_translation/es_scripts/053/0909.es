#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);

void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008)
{
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0009 = UI_get_object_position(var0000);
	var000A = var0009[var0003];
	var000B = UI_find_nearby(var0000, var0001, 0x0007, 0x0000);
	var000C = false;
	enum();
labelFunc0909_002B:
	for (var000F in var000B with var000D to var000E) attend labelFunc0909_0076;
	var0010 = UI_get_object_position(var000F);
	var0010 = var0010[0x0003];
	if (!((Func0906(var000F) == var0002) && ((var0009[var0003] == var000A) && (var0009[0x0003] == var0010)))) goto labelFunc0909_0073;
	var000C = true;
	goto labelFunc0909_0076;
labelFunc0909_0073:
	goto labelFunc0909_002B;
labelFunc0909_0076:
	if (!var000C) goto labelFunc0909_0094;
	var000C = Func0908(var000F, var0004, var0005, var0006, var0007, var0008);
labelFunc0909_0094:
	return;
}


