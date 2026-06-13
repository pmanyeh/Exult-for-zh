#game "serpentisle"
// externs
extern var Func09A9 0x9A9 (var var0000, var var0001, var var0002);
extern var Func09A7 0x9A7 (var var0000, var var0001);
extern void Func0971 0x971 (var var0000);

void Func071B object#(0x71B) ()
{
	var var0000;
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

	if (!(event == 0x0003)) goto labelFunc071B_0116;
	var0000 = UI_find_nearby(item, 0x014A, 0x0003, 0x0000);
	var0001 = UI_get_object_position(item);
	var0002 = [0x0000, 0x0000, 0xFFFE, 0x0002, 0x0000, 0x0000];
	var0003 = [0x0000, 0x0000, 0x0000, 0x0000, 0xFFFE, 0x0002];
	enum();
labelFunc071B_0052:
	for (var0006 in var0000 with var0004 to var0005) attend labelFunc071B_00D7;
	var0007 = UI_get_item_frame(var0006);
	if (!(var0007 == 0x0002)) goto labelFunc071B_00D4;
	var0008 = UI_get_object_position(var0006);
	var0008[0x0001] = (var0008[0x0001] - var0001[0x0001]);
	var0008[0x0002] = (var0008[0x0002] - var0001[0x0002]);
	var0009 = Func09A9(var0008, var0002, var0003);
	if (!var0009) goto labelFunc071B_00D4;
	var0002 = Func09A7(var0009[0x0001], var0002);
	var0003 = Func09A7(var0009[0x0001], var0003);
labelFunc071B_00D4:
	goto labelFunc071B_0052;
labelFunc071B_00D7:
	var000A = UI_get_array_size(var0002);
	var000A = (var000A + UI_get_array_size(var0003));
	if (!(var000A == 0x0000)) goto labelFunc071B_0116;
	var000B = UI_find_nearby(item, 0x0300, 0x0004, 0x0000);
	if (!var000B) goto labelFunc071B_0116;
	Func0971(var000B);
labelFunc071B_0116:
	return;
}


