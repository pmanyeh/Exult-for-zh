#game "serpentisle"
// externs
extern var Func0994 0x994 ();

void Func087D 0x87D ()
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
	var var000C;
	var var000D;
	var var000E;

	if (!(Func0994() == 0x000D)) goto labelFunc087D_001C;
	var0000 = [0x0433, 0x09C3, 0x0002];
	goto labelFunc087D_004A;
labelFunc087D_001C:
	if (!(Func0994() == 0x000E)) goto labelFunc087D_0038;
	var0000 = [0x090A, 0x0726, 0x0000];
	goto labelFunc087D_004A;
labelFunc087D_0038:
	var0000 = [0x03F9, 0x0617, 0x0002];
	goto labelFunc087D_004A;
labelFunc087D_004A:
	var0001 = UI_find_nearby(0xFE9C, 0x0320, 0x0041, 0x0000);
	enum();
labelFunc087D_005E:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc087D_0081;
	if (!(UI_get_item_quality(var0004) == 0x00EC)) goto labelFunc087D_007E;
	var0005 = true;
	goto labelFunc087D_00A8;
labelFunc087D_007E:
	goto labelFunc087D_005E;
labelFunc087D_0081:
	var0004 = UI_create_new_object(0x0320);
	if (!var0004) goto labelFunc087D_00A8;
	var0006 = UI_set_item_quality(var0004, 0x00EC);
	var0005 = UI_update_last_created(var0000);
labelFunc087D_00A8:
	var0007 = UI_get_party_list();
	enum();
labelFunc087D_00B0:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc087D_013E;
	var000B = UI_get_cont_items(var000A, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc087D_00CF:
	for (var000E in var000B with var000C to var000D) attend labelFunc087D_013B;
	if (!(!((UI_get_item_shape(var000E) == 0x01E6) || (UI_get_item_shape(var000E) == 0x025F)))) goto labelFunc087D_0138;
	var0006 = UI_set_last_created(var000E);
	if (!var0006) goto labelFunc087D_0138;
	if (!var0005) goto labelFunc087D_0123;
	if (!(!UI_give_last_created(var0004))) goto labelFunc087D_0120;
	var0006 = UI_give_last_created(var000A);
labelFunc087D_0120:
	goto labelFunc087D_0138;
labelFunc087D_0123:
	if (!(!UI_update_last_created(var0000))) goto labelFunc087D_0138;
	var0006 = UI_give_last_created(var000A);
labelFunc087D_0138:
	goto labelFunc087D_00CF;
labelFunc087D_013B:
	goto labelFunc087D_00B0;
labelFunc087D_013E:
	return;
}


