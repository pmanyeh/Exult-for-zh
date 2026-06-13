#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func0178 shape#(0x178) ();
extern void Func010E shape#(0x10E) ();
extern void Func01B1 shape#(0x1B1) ();
extern void Func01B0 shape#(0x1B0) ();
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func09A1 0x9A1 (var var0000);
extern void Func09AD 0x9AD (var var0000);
extern void Func09A2 0x9A2 (var var0000, var var0001);

void Func07E2 object#(0x7E2) ()
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

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc07E2_0019;
	UI_error_message("egg quality not set");
labelFunc07E2_0019:
	if (!((var0000 == 0x0001) || (var0000 == 0x0048))) goto labelFunc07E2_0121;
	var0001 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x00B0));
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x01B1, 0x000A, 0x00B0));
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x01B0, 0x000A, 0x00B0));
	enum();
labelFunc07E2_0084:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07E2_0112;
	if (!(UI_get_item_quality(var0004) == 0x0048)) goto labelFunc07E2_010F;
	if (!(Func0906(var0004) == 0x0001)) goto labelFunc07E2_010F;
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x55, 0x07E2], 0x0002);
	if (!(UI_get_item_shape(var0004) == 0x0178)) goto labelFunc07E2_00D3;
	var0004->Func0178();
labelFunc07E2_00D3:
	if (!(UI_get_item_shape(var0004) == 0x010E)) goto labelFunc07E2_00E7;
	var0004->Func010E();
labelFunc07E2_00E7:
	if (!(UI_get_item_shape(var0004) == 0x01B1)) goto labelFunc07E2_00FB;
	var0004->Func01B1();
labelFunc07E2_00FB:
	if (!(UI_get_item_shape(var0004) == 0x01B0)) goto labelFunc07E2_010F;
	var0004->Func01B0();
labelFunc07E2_010F:
	goto labelFunc07E2_0084;
labelFunc07E2_0112:
	if (!(event == 0x0002)) goto labelFunc07E2_0121;
	Func0907(item, 0x0002);
labelFunc07E2_0121:
	if (!(var0000 == 0x0002)) goto labelFunc07E2_01DE;
	gflags[0x004A] = true;
	var0001 = UI_find_nearby(item, 0x0178, 0x0014, 0x0000);
	enum();
labelFunc07E2_0141:
	for (var0004 in var0001 with var0006 to var0007) attend labelFunc07E2_016E;
	if (!(UI_get_item_quality(var0004) == 0x003D)) goto labelFunc07E2_016B;
	UI_set_item_frame(var0004, 0x000C);
	UI_play_sound_effect(0x0004);
labelFunc07E2_016B:
	goto labelFunc07E2_0141;
labelFunc07E2_016E:
	var0001 = UI_find_nearby(item, 0x010E, 0x0014, 0x0000);
	enum();
labelFunc07E2_0180:
	for (var0004 in var0001 with var0008 to var0009) attend labelFunc07E2_01AD;
	if (!(UI_get_item_quality(var0004) == 0x0048)) goto labelFunc07E2_01AA;
	UI_set_item_frame(var0004, 0x000C);
	UI_play_sound_effect(0x0004);
labelFunc07E2_01AA:
	goto labelFunc07E2_0180;
labelFunc07E2_01AD:
	Func097F(0xFE9C, "@I made it!@", 0x0002);
	Func097F(0xFFB5, "@Thou didst survive?@", 0x000A);
	UI_set_schedule_type(0xFFB5, 0x0003);
	Func09AC(0xFFB5, 0x0337, 0x08C8, 0x0003);
labelFunc07E2_01DE:
	if (!(var0000 == 0x0003)) goto labelFunc07E2_022D;
	var000A = Func09A1(0x0212);
	if (!var000A) goto labelFunc07E2_022D;
	var000B = UI_get_object_position(item);
	Func09AD(var000A);
	var0005 = UI_set_last_created(var000A);
	if (!var0005) goto labelFunc07E2_022D;
	var0005 = UI_update_last_created(var000B);
	if (!(!var0005)) goto labelFunc07E2_022D;
	Func09A2(var000A, item);
labelFunc07E2_022D:
	if (!(var0000 == 0x0004)) goto labelFunc07E2_02B9;
	UI_play_sound_effect(0x0077);
	var000B = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFEE4, var000B);
	UI_set_item_flag(0xFEE4, 0x001D);
	UI_set_item_flag(0xFEE4, 0x0000);
	UI_set_npc_id(0xFEE4, 0x000E);
	Func09AD(0xFEE4);
	Func097F(0xFEE4, "@Accept thy death, Avatar!@", 0x0002);
	var0005 = UI_delayed_execute_usecode_array(0xFEE4, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0006);
labelFunc07E2_02B9:
	return;
}


