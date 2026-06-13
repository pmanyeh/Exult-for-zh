#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);

var Func089D 0x89D (var var0000)
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	enum();
labelFunc089D_0001:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc089D_00BB;
	if (!(UI_get_item_shape(var0003) == 0x0366)) goto labelFunc089D_00B8;
	var0004 = UI_get_object_position(var0003);
	var0005 = var0004[0x0001];
	var0006 = var0004[0x0002];
	var0007 = var0004[0x0003];
	var0008 = UI_find_nearby(var0003, 0xFE99, 0x000A, 0x0000);
	enum();
labelFunc089D_0053:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc089D_00B8;
	var0004 = UI_get_object_position(var000B);
	if (!(var0004[0x0003] > var0007)) goto labelFunc089D_00B5;
	if (!((var0004[0x0001] <= var0005) && (var0004[0x0001] >= (var0005 - 0x0003)))) goto labelFunc089D_00B5;
	if (!((var0004[0x0002] <= var0006) && (var0004[0x0002] >= (var0006 - 0x0006)))) goto labelFunc089D_00B5;
	Func094A("I believe the bridge is blocked.");
	return false;
labelFunc089D_00B5:
	goto labelFunc089D_0053;
labelFunc089D_00B8:
	goto labelFunc089D_0001;
labelFunc089D_00BB:
	enum();
labelFunc089D_00BC:
	for (var0003 in var0000 with var000C to var000D) attend labelFunc089D_014B;
	if (!(UI_get_item_shape(var0003) == 0x0366)) goto labelFunc089D_0110;
	var000E = UI_execute_usecode_array(var0003, [(byte)0x46, 0x0000, (byte)0x01, (byte)0x58, 0x0022, (byte)0x46, 0x0001, (byte)0x01, (byte)0x58, 0x0022, (byte)0x55, 0x0611, (byte)0x01, (byte)0x46, 0x0000, (byte)0x01, (byte)0x58, 0x0022]);
	goto labelFunc089D_0148;
labelFunc089D_0110:
	var000E = UI_execute_usecode_array(var0003, [(byte)0x46, 0x0000, (byte)0x01, (byte)0x58, 0x0022, (byte)0x55, 0x0611, (byte)0x01, (byte)0x46, 0x0001, (byte)0x01, (byte)0x58, 0x0022, (byte)0x46, 0x0000, (byte)0x01, (byte)0x58, 0x0022]);
labelFunc089D_0148:
	goto labelFunc089D_00BC;
labelFunc089D_014B:
	if (!(UI_get_array_size(var0000) == 0x0000)) goto labelFunc089D_015E;
	return false;
	goto labelFunc089D_0160;
labelFunc089D_015E:
	return true;
labelFunc089D_0160:
	return 0;
}


