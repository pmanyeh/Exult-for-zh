#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0204 shape#(0x204) ();
extern void Func00E1 shape#(0xE1) ();
extern void Func0178 shape#(0x178) ();
extern void Func010E shape#(0x10E) ();
extern void Func01B1 shape#(0x1B1) ();
extern void Func01B0 shape#(0x1B0) ();

void Func0707 object#(0x707) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x00B0));
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x01B1, 0x000A, 0x00B0));
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x01B0, 0x000A, 0x00B0));
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x0204, 0x000A, 0x00B0));
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x00E1, 0x000A, 0x00B0));
	enum();
labelFunc0707_0087:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0707_0131;
	if (!(UI_get_item_quality(var0003) == 0x00D9)) goto labelFunc0707_012E;
	if (!(Func0906(var0003) == 0x0002)) goto labelFunc0707_012E;
	Func0907(var0003, 0x0000);
	if (!(UI_get_item_shape(var0003) == 0x0204)) goto labelFunc0707_00CA;
	var0003->Func0204();
labelFunc0707_00CA:
	if (!(UI_get_item_shape(var0003) == 0x00E1)) goto labelFunc0707_00DE;
	var0003->Func00E1();
labelFunc0707_00DE:
	if (!(UI_get_item_shape(var0003) == 0x0178)) goto labelFunc0707_00F2;
	var0003->Func0178();
labelFunc0707_00F2:
	if (!(UI_get_item_shape(var0003) == 0x010E)) goto labelFunc0707_0106;
	var0003->Func010E();
labelFunc0707_0106:
	if (!(UI_get_item_shape(var0003) == 0x01B1)) goto labelFunc0707_011A;
	var0003->Func01B1();
labelFunc0707_011A:
	if (!(UI_get_item_shape(var0003) == 0x01B0)) goto labelFunc0707_012E;
	var0003->Func01B0();
labelFunc0707_012E:
	goto labelFunc0707_0087;
labelFunc0707_0131:
	return;
}


