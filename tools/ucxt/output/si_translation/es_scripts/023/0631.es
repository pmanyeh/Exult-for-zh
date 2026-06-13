#game "serpentisle"
// externs
extern var Func089D 0x89D (var var0000);
extern void Func09BE 0x9BE (var var0000, var var0001);

void Func0631 object#(0x631) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x000A)) goto labelFunc0631_00C0;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x0366, 0x000F, 0x0000);
	var0002 = UI_find_nearby(item, 0x0203, 0x000F, 0x0000);
	var0001 = (var0001 & var0002);
	var0002 = [];
	enum();
labelFunc0631_0043:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0631_0069;
	if (!(UI_get_item_quality(var0005) == var0000)) goto labelFunc0631_0066;
	var0002 = (var0002 & var0005);
labelFunc0631_0066:
	goto labelFunc0631_0043;
labelFunc0631_0069:
	if (!Func089D(var0002)) goto labelFunc0631_00BB;
	var0006 = UI_execute_usecode_array(item, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0004]);
	var0006 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x0B, 0xFFFE, 0x0002]);
	if (!(var0000 == 0x00B5)) goto labelFunc0631_00BA;
	gflags[0x0215] = true;
labelFunc0631_00BA:
	return;
labelFunc0631_00BB:
	Func09BE(item, true);
labelFunc0631_00C0:
	if (!(event == 0x0002)) goto labelFunc0631_00CD;
	Func09BE(item, true);
labelFunc0631_00CD:
	return;
}


