#game "serpentisle"
// externs
extern var Func099F 0x99F (var var0000, var var0001, var var0002);
extern var Func098D 0x98D ();
extern var Func09A8 0x9A8 (var var0000, var var0001);

var Func08FB 0x8FB ()
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

	var0000 = [];
	var0001 = Func099F(0x0190, 0xFE99, 0xFE99);
	var0000 = (var0000 & var0001);
	var0001 = Func099F(0x019E, 0xFE99, 0xFE99);
	var0000 = (var0000 & var0001);
	var0001 = UI_find_nearby(0xFE9C, 0x0190, 0x0050, 0x0000);
	var0000 = (var0000 & var0001);
	var0001 = UI_find_nearby(0xFE9C, 0x019E, 0x0050, 0x0000);
	var0000 = (var0000 & var0001);
	var0001 = [];
	var0002 = Func098D();
	var0002 = (var0002 & 0xFFC0);
	enum();
labelFunc08FB_0089:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc08FB_012D;
	var0006 = UI_get_item_quality(var0005);
	var0007 = UI_get_item_quantity(var0005, 0x0000);
	var0008 = UI_get_object_position(var0005);
	var0009 = UI_get_body_npc(var0005);
	if (!Func09A8(var0009, var0002)) goto labelFunc08FB_012A;
	if (!(var0009 == 0xFFFF)) goto labelFunc08FB_0108;
	var000A = UI_get_item_frame(var0005);
	var000B = UI_get_item_shape(var0005);
	if (!((var000B == 0x019E) && (var000A == 0x0014))) goto labelFunc08FB_0105;
	var0001 = (var0001 & var0005);
labelFunc08FB_0105:
	goto labelFunc08FB_012A;
labelFunc08FB_0108:
	var0001 = (var0001 & var0005);
	if (!((var0009 == 0xFFFE) && gflags[0x025B])) goto labelFunc08FB_012A;
	UI_set_item_flag(0xFFFE, 0x001D);
labelFunc08FB_012A:
	goto labelFunc08FB_0089;
labelFunc08FB_012D:
	return var0001;
	return 0;
}


