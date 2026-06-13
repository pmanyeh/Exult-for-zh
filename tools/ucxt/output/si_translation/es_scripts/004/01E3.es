#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D7 object#(0x7D7) ();
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func07D6 object#(0x7D6) ();

void Func01E3 shape#(0x1E3) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	if (!((item == Func09A0(0x0005, 0x0001)) && (event == 0x0002))) goto labelFunc01E3_0148;
	UI_play_music(0x0027, Func09A0(0x0005, 0x0001));
	item->Func07D7();
	if (!(!gflags[0x021D])) goto labelFunc01E3_0075;
	var0000 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc01E3_0043:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc01E3_0075;
	var0004 = UI_get_item_shape(var0003);
	if (!(!((var0004 == 0x01E6) || (var0004 == 0x025F)))) goto labelFunc01E3_0072;
	UI_remove_item(var0003);
labelFunc01E3_0072:
	goto labelFunc01E3_0043;
labelFunc01E3_0075:
	var0000 = UI_find_nearby(item, 0x0320, 0x002D, 0x0000);
	var0005 = false;
	enum();
labelFunc01E3_008B:
	for (var0003 in var0000 with var0006 to var0007) attend labelFunc01E3_00B6;
	if (!(UI_get_object_position(var0003) == [0x0AAB, 0x03C1, 0x0000])) goto labelFunc01E3_00B3;
	var0005 = var0003;
labelFunc01E3_00B3:
	goto labelFunc01E3_008B;
labelFunc01E3_00B6:
	if (!var0005) goto labelFunc01E3_0147;
	var0008 = 0x0000;
	var0000 = UI_get_cont_items(var0005, 0xFE99, 0xFE99, 0xFE99);
labelFunc01E3_00D5:
	if (!(var0008 < 0x0002)) goto labelFunc01E3_0147;
	enum();
labelFunc01E3_00E0:
	for (var0003 in var0000 with var0009 to var000A) attend labelFunc01E3_0127;
	if (!(Func09A6(var0003) || (var0008 == 0x0001))) goto labelFunc01E3_0124;
	if (!(!UI_set_last_created(var0003))) goto labelFunc01E3_0110;
	Func092F(0xFE9C, 0x000D);
labelFunc01E3_0110:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc01E3_0124;
	Func092F(0xFE9C, 0x000E);
labelFunc01E3_0124:
	goto labelFunc01E3_00E0;
labelFunc01E3_0127:
	var0008 = (var0008 + 0x0001);
	var0000 = UI_get_cont_items(var0005, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc01E3_00D5;
labelFunc01E3_0147:
	abort;
labelFunc01E3_0148:
	var000B = UI_get_item_frame(item);
	if (!(var000B != 0x0002)) goto labelFunc01E3_015B;
	abort;
labelFunc01E3_015B:
	if (!(event == 0x0001)) goto labelFunc01E3_0336;
	UI_set_item_flag(0xFE9C, 0x0010);
	if (!UI_in_gump_mode()) goto labelFunc01E3_0178;
	UI_close_gumps();
labelFunc01E3_0178:
	UI_halt_scheduled(0xFE9C);
	var000C = UI_get_object_position(item);
	UI_si_path_run_usecode(0xFE9C, [(var000C[0x0001] - 0x0003), (var000C[0x0002] - 0x0003), 0x0000], 0x000A, item, 0x01E3, true);
	UI_clear_item_flag(0xFE9C, 0x0000);
	var000D = UI_find_nearby(item, 0x0320, 0x001E, 0x0000);
	var0005 = false;
	enum();
labelFunc01E3_01D0:
	for (var0003 in var000D with var000E to var000F) attend labelFunc01E3_01FB;
	if (!(UI_get_object_position(var0003) == [0x0AAB, 0x03C1, 0x0000])) goto labelFunc01E3_01F8;
	var0005 = var0003;
labelFunc01E3_01F8:
	goto labelFunc01E3_01D0;
labelFunc01E3_01FB:
	if (!var0005) goto labelFunc01E3_02A9;
	var0008 = 0x0000;
	var0010 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc01E3_021A:
	if (!(var0008 < 0x0002)) goto labelFunc01E3_02A9;
	enum();
labelFunc01E3_0225:
	for (var0003 in var0010 with var0011 to var0012) attend labelFunc01E3_0289;
	if (!(Func09A6(var0003) || (var0008 == 0x0001))) goto labelFunc01E3_0286;
	var000D = UI_get_item_shape(var0003);
	if (!(!((var000D == 0x01E6) || (var000D == 0x025F)))) goto labelFunc01E3_0286;
	if (!(!UI_set_last_created(var0003))) goto labelFunc01E3_0272;
	Func092F(0xFE9C, 0x0011);
labelFunc01E3_0272:
	if (!(!UI_give_last_created(var0005))) goto labelFunc01E3_0286;
	Func092F(0xFE9C, 0x0012);
labelFunc01E3_0286:
	goto labelFunc01E3_0225;
labelFunc01E3_0289:
	var0008 = (var0008 + 0x0001);
	var0010 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc01E3_021A;
labelFunc01E3_02A9:
	if (!(!gflags[0x021D])) goto labelFunc01E3_0336;
	var000D = UI_add_cont_items(0xFE9C, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0012);
	var0003 = UI_create_new_object(0x0284);
	if (!var0003) goto labelFunc01E3_0304;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0007);
	var000D = UI_set_item_quantity(var0003, 0x0046);
	var000D = UI_give_last_created(0xFE9C);
labelFunc01E3_0304:
	var000D = UI_add_cont_items(0xFE9C, 0x0001, 0x02F8, 0xFE99, 0x0000, 0x0012);
	var000D = UI_add_cont_items(0xFE9C, 0x0001, 0x0286, 0xFE99, 0x0000, 0x0012);
labelFunc01E3_0336:
	if (!(event == 0x000E)) goto labelFunc01E3_0367;
	var000C = UI_get_object_position(item);
	UI_move_object(0xFE9C, [(var000C[0x0001] - 0x0003), (var000C[0x0002] - 0x0003), 0x0000]);
labelFunc01E3_0367:
	if (!((event == 0x000A) || (event == 0x000E))) goto labelFunc01E3_03BD;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_end_conversation();
	var000D = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, (byte)0x30, (byte)0x6C, (byte)0x6D]);
	item->Func07D6();
	var000D = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01E3], 0x0008);
labelFunc01E3_03BD:
	if (!(event == 0x0002)) goto labelFunc01E3_0406;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var000D = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, (byte)0x30], 0x0004);
	UI_move_object(0xFE9C, [0x0A25, 0x0379, 0x0000]);
	UI_play_sound_effect(0x0066);
	UI_init_conversation();
labelFunc01E3_0406:
	return;
}


