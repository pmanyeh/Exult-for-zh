#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007)
{
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0008 = UI_count_objects(0xFE9B, var0003, 0xFE99, 0xFE99);
	if (!(var0005 == 0x0000)) goto labelFunc0943_0026;
	var0009 = 0x0001;
	goto labelFunc0943_0039;
labelFunc0943_0026:
	var0009 = UI_input_numeric_value(var0006, var0005, 0x0001, 0x0001);
labelFunc0943_0039:
	if (!(var0002 > 0x0001)) goto labelFunc0943_0050;
	var000A = (var0002 * var0009);
	goto labelFunc0943_0056;
labelFunc0943_0050:
	var000A = var0009;
labelFunc0943_0056:
	if (!(var0009 == 0x0000)) goto labelFunc0943_0069;
	var000B = 0x0000;
	goto labelFunc0943_00B7;
labelFunc0943_0069:
	if (!(var0008 >= (var0004 * var0009))) goto labelFunc0943_00B1;
	var000C = UI_remove_party_items((var0004 * var0009), var0003, 0xFE99, 0xFE99, true);
	var000D = Func099B(0xFE9C, var000A, var0000, 0xFE99, var0001, var0007, true);
	var000B = 0x0001;
	goto labelFunc0943_00B7;
labelFunc0943_00B1:
	var000B = 0x0003;
labelFunc0943_00B7:
	return var000B;
	return 0;
}


