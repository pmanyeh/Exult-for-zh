#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AA 0x9AA ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func071D object#(0x71D) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;

	if (!(event == 0x000E)) goto labelFunc071D_008E;
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0000 = UI_get_item_quality(Func09A0(0x0000, 0x0001));
	if (!((var0000 == 0x0000) || (var0000 == 0x0001))) goto labelFunc071D_0043;
	var0001 = [0x068E, 0x0100, 0x0000];
labelFunc071D_0043:
	if (!((var0000 == 0x0002) || (var0000 == 0x0003))) goto labelFunc071D_0064;
	var0001 = [0x068E, 0x011D, 0x0000];
labelFunc071D_0064:
	UI_move_object(0xFE9C, var0001);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc071D_008E:
	if (!(((gflags[0x02A5] == true) && (gflags[0x02A4] == true)) || (event == 0x000A))) goto labelFunc071D_00A6;
	Func09AA();
	abort;
labelFunc071D_00A6:
	if (!(event == 0x0002)) goto labelFunc071D_03D5;
	var0000 = UI_get_item_quality(item);
	var0002 = UI_find_nearby(item, 0x02CE, 0x000A, 0x0000);
	if (!((var0000 == 0x0000) || (var0000 == 0x0001))) goto labelFunc071D_0264;
	gflags[0x02A5] = true;
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_0101;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0004);
labelFunc071D_0101:
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_0125;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0006);
labelFunc071D_0125:
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_0149;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0008);
labelFunc071D_0149:
	enum();
labelFunc071D_014A:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc071D_01A3;
	var0001 = UI_get_object_position(var0006);
	var0001[0x0003] = 0x0002;
	var0007 = UI_update_last_created(var0001);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_014A;
labelFunc071D_01A3:
	var0002 = UI_find_nearby(item, 0x00F6, 0x0019, 0x0000);
	enum();
labelFunc071D_01B5:
	for (var0007 in var0002 with var0008 to var0009) attend labelFunc071D_0202;
	var0003 = UI_get_item_frame(var0007);
	UI_set_item_frame(var0007, (var0003 - 0x0002));
	UI_sprite_effect(0x0015, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_01B5;
labelFunc071D_0202:
	var0002 = UI_find_nearby(item, 0x0204, 0x0019, 0x0000);
	enum();
labelFunc071D_0214:
	for (var0007 in var0002 with var000A to var000B) attend labelFunc071D_0261;
	var0003 = UI_get_item_frame(var0007);
	UI_set_item_frame(var0007, (var0003 - 0x0002));
	UI_sprite_effect(0x0015, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_0214;
labelFunc071D_0261:
	goto labelFunc071D_03D4;
labelFunc071D_0264:
	gflags[0x02A4] = true;
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_028C;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0003);
labelFunc071D_028C:
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_02B0;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0007);
labelFunc071D_02B0:
	var0003 = UI_create_new_object(0x00D1);
	if (!var0003) goto labelFunc071D_02D4;
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0012);
labelFunc071D_02D4:
	enum();
labelFunc071D_02D5:
	for (var0006 in var0002 with var000C to var000D) attend labelFunc071D_0326;
	var0001 = UI_get_object_position(var0006);
	var0001[0x0003] = 0x0002;
	var0007 = UI_update_last_created(var0001);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x001A, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_02D5;
labelFunc071D_0326:
	var0002 = UI_find_nearby(item, 0x00F6, 0x0019, 0x0000);
	enum();
labelFunc071D_0338:
	for (var0007 in var0002 with var000E to var000F) attend labelFunc071D_037D;
	var0003 = UI_get_item_frame(var0007);
	UI_set_item_frame(var0007, (var0003 - 0x0002));
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_0338;
labelFunc071D_037D:
	var0002 = UI_find_nearby(item, 0x0204, 0x0019, 0x0000);
	enum();
labelFunc071D_038F:
	for (var0007 in var0002 with var0010 to var0011) attend labelFunc071D_03D4;
	var0003 = UI_get_item_frame(var0007);
	UI_set_item_frame(var0007, (var0003 - 0x0002));
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071D_038F;
labelFunc071D_03D4:
	abort;
labelFunc071D_03D5:
	var0012 = UI_find_nearby(item, 0x02AA, 0x0001, 0x0000);
	var0013 = false;
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = UI_find_nearby(item, 0x0262, 0x000A, 0x0000);
	var0018 = UI_get_object_position(item);
	enum();
labelFunc071D_0410:
	for (var001B in var0017 with var0019 to var001A) attend labelFunc071D_046A;
	var001C = UI_get_object_position(var001B);
	if (!(!((var0018[0x0001] == var001C[0x0001]) && (var0018[0x0002] == var001C[0x0002])))) goto labelFunc071D_0467;
	var001D = UI_get_item_frame(var001B);
	if (!(var001D == 0x0000)) goto labelFunc071D_0461;
	var001E = var001B;
	goto labelFunc071D_0467;
labelFunc071D_0461:
	var001F = var001B;
labelFunc071D_0467:
	goto labelFunc071D_0410;
labelFunc071D_046A:
	if (!((!var0012) || (UI_get_array_size(var0012) > 0x0001))) goto labelFunc071D_04F6;
	var0020 = UI_get_item_frame(var001F);
	if (!((var0020 == 0x0001) || (var0020 == 0x0002))) goto labelFunc071D_04BE;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x27, 0x0002, (byte)0x46, 0x0003]);
labelFunc071D_04BE:
	if (!((var0020 == 0x0004) || (var0020 == 0x0005))) goto labelFunc071D_04F5;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0004, (byte)0x27, 0x0002, (byte)0x46, 0x0003]);
labelFunc071D_04F5:
	abort;
labelFunc071D_04F6:
	var0021 = UI_get_item_frame(var0012);
	if (!((var0021 == 0x000C) || (var0021 == 0x000D))) goto labelFunc071D_0519;
	var0013 = true;
	goto labelFunc071D_052F;
labelFunc071D_0519:
	if (!((var0021 == 0x0012) || (var0021 == 0x0013))) goto labelFunc071D_052F;
	var0014 = true;
labelFunc071D_052F:
	if (!((!var0013) && (!var0014))) goto labelFunc071D_053C;
	abort;
labelFunc071D_053C:
	var0022 = UI_find_nearby(var001E, 0x02AA, 0x0001, 0x0000);
	if (!var0022) goto labelFunc071D_058E;
	var0021 = UI_get_item_frame(var0022);
	if (!((var0021 == 0x000C) || (var0021 == 0x000D))) goto labelFunc071D_0578;
	var0015 = true;
	goto labelFunc071D_058E;
labelFunc071D_0578:
	if (!((var0021 == 0x0012) || (var0021 == 0x0013))) goto labelFunc071D_058E;
	var0016 = true;
labelFunc071D_058E:
	var0000 = UI_get_item_quality(item);
	if (!((var0013 && var0016) || (var0014 && var0015))) goto labelFunc071D_06D3;
	if (!((var0000 == 0x0000) || (var0000 == 0x0002))) goto labelFunc071D_05DF;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0004, (byte)0x27, 0x0001, (byte)0x46, 0x0003]);
labelFunc071D_05DF:
	if (!((var0000 == 0x0001) || (var0000 == 0x0003))) goto labelFunc071D_0616;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x27, 0x0001, (byte)0x46, 0x0003]);
labelFunc071D_0616:
	if (!((var0000 == 0x0000) || (var0000 == 0x0001))) goto labelFunc071D_062E;
	var0023 = 0x0002;
labelFunc071D_062E:
	if (!((var0000 == 0x0002) || (var0000 == 0x0003))) goto labelFunc071D_0646;
	var0023 = 0xFFFE;
labelFunc071D_0646:
	var0024 = UI_get_distance(0xFE9C, var001F);
	Func097F(0xFE9C, "@That should do it.@", 0x0002);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0001 = UI_get_object_position(var001F);
	UI_si_path_run_usecode(0xFE9C, [var0001[0x0001], (var0001[0x0002] + var0023), 0x0000], 0x000A, item, 0x071D, false);
	var0025 = Func09A0(0x0000, 0x0001);
	if (!var0025) goto labelFunc071D_06D2;
	var0007 = UI_set_item_quality(var0025, var0000);
	var0007 = UI_delayed_execute_usecode_array(var0025, [(byte)0x23, (byte)0x55, 0x071D], (var0024 + 0x0004));
labelFunc071D_06D2:
	abort;
labelFunc071D_06D3:
	if (!((var0000 == 0x0000) || (var0000 == 0x0002))) goto labelFunc071D_070A;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x27, 0x0001, (byte)0x46, 0x0001]);
labelFunc071D_070A:
	if (!((var0000 == 0x0001) || (var0000 == 0x0003))) goto labelFunc071D_0741;
	UI_play_sound_effect(0x0069);
	var0007 = UI_execute_usecode_array(var001F, [(byte)0x23, (byte)0x46, 0x0004, (byte)0x27, 0x0001, (byte)0x46, 0x0005]);
labelFunc071D_0741:
	return;
}


