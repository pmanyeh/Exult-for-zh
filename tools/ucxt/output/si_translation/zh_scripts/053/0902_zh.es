#game "serpentisle"
// externs
extern void Func00F6 shape#(0xF6) ();
extern void Func01D7 shape#(0x1D7) ();
extern void Func0204 shape#(0x204) ();
extern void Func00E1 shape#(0xE1) ();

void Func0902 0x902 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0002 = UI_find_nearby(var0000, var0001, 0x0005, 0x0000);
	var0003 = UI_get_item_frame(var0000);
	enum();
labelFunc0902_001E:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0902_009C;
	var0007 = UI_get_item_frame(var0006);
	if (!(((var0007 > 0x000F) && (var0003 <= 0x000F)) || ((var0007 <= 0x000F) && (var0003 > 0x000F)))) goto labelFunc0902_0099;
	if (!(var0001 == 0x00F6)) goto labelFunc0902_0066;
	var0006->Func00F6();
	return;
labelFunc0902_0066:
	if (!(var0001 == 0x01D7)) goto labelFunc0902_0077;
	var0006->Func01D7();
	return;
labelFunc0902_0077:
	if (!(var0001 == 0x0204)) goto labelFunc0902_0088;
	var0006->Func0204();
	return;
labelFunc0902_0088:
	if (!(var0001 == 0x00E1)) goto labelFunc0902_0099;
	var0006->Func00E1();
	return;
labelFunc0902_0099:
	goto labelFunc0902_001E;
labelFunc0902_009C:
	return;
}


