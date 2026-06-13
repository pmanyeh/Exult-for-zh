#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

var Func0900 0x900 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	var0001 = UI_get_array_size(UI_get_party_list());
	if (!((var0001 <= var0000) || (var0001 < 0x0002))) goto labelFunc0900_001F;
	return false;
labelFunc0900_001F:
	var0002 = [];
labelFunc0900_0025:
	if (!(UI_get_array_size(var0002) != var0000)) goto labelFunc0900_0075;
	var0003 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(!(var0003 in var0002))) goto labelFunc0900_0072;
	if (!(UI_get_array_size(var0002) == 0x0000)) goto labelFunc0900_0068;
	var0002 = [var0003];
	goto labelFunc0900_0072;
labelFunc0900_0068:
	var0002 = (var0002 & var0003);
labelFunc0900_0072:
	goto labelFunc0900_0025;
labelFunc0900_0075:
	return var0002;
	return 0;
}


