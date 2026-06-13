#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0178 shape#(0x178) ();
extern void Func010E shape#(0x10E) ();
extern void Func01B1 shape#(0x1B1) ();
extern void Func01B0 shape#(0x1B0) ();

void Func01DC shape#(0x1DC) ()
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

	var0000 = UI_click_on_item();
	if (!(UI_get_item_shape(var0000) == 0x0280)) goto labelFunc01DC_00C5;
	var0001 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x00B0));
	enum();
labelFunc01DC_0040:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc01DC_00C2;
	if (!(UI_get_item_quality(var0004) == 0x00DB)) goto labelFunc01DC_00BF;
	if (!(Func0906(var0004) == 0x0002)) goto labelFunc01DC_00BF;
	Func0907(var0004, 0x0000);
	if (!(UI_get_item_shape(var0004) == 0x0178)) goto labelFunc01DC_0083;
	var0004->Func0178();
labelFunc01DC_0083:
	if (!(UI_get_item_shape(var0004) == 0x010E)) goto labelFunc01DC_0097;
	var0004->Func010E();
labelFunc01DC_0097:
	if (!(UI_get_item_shape(var0004) == 0x01B1)) goto labelFunc01DC_00AB;
	var0004->Func01B1();
labelFunc01DC_00AB:
	if (!(UI_get_item_shape(var0004) == 0x01B0)) goto labelFunc01DC_00BF;
	var0004->Func01B0();
labelFunc01DC_00BF:
	goto labelFunc01DC_0040;
labelFunc01DC_00C2:
	goto labelFunc01DC_013A;
labelFunc01DC_00C5:
	var0005 = UI_get_item_weight(var0000);
	if (!((var0005 < 0x0002) && (var0005 > 0x0000))) goto labelFunc01DC_0133;
	UI_close_gumps();
	UI_play_sound_effect(0x0043);
	var0006 = UI_get_object_position(var0000);
	var0007 = var0006[0x0003];
	var0008 = UI_input_numeric_value(0x0000, 0x000E, 0x0001, 0x0000);
	var0009 = UI_execute_usecode_array(var0000, [(byte)0x55, 0x0607, (byte)0x0B, 0xFFFD, (var0008 - var0007)]);
	goto labelFunc01DC_013A;
labelFunc01DC_0133:
	UI_play_sound_effect(0x0030);
labelFunc01DC_013A:
	return;
}


