#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern void Func08C0 0x8C0 (var var0000);
extern void Func0922 0x922 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func071F object#(0x71F) ()
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

	var0000 = UI_get_object_position(0xFE9C);
	if (!(var0000[0x0003] == 0x0000)) goto labelFunc071F_002A;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"It seems that I cannot put the serpent in the slot. Perhaps I should step up a level...\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc071F_002A:
	if (!((event == 0x000A) || (event == 0x000E))) goto labelFunc071F_0088;
	Func09AA();
	Func08C0(true);
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0001 = UI_find_nearby(item, 0x02E7, 0x002D, 0x0000);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x071F], 0x000F);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x0005]);
	abort;
labelFunc071F_0088:
	if (!(event == 0x0002)) goto labelFunc071F_00B3;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	Func0922(0x0008);
	gflags[0x02E4] = true;
	UI_set_schedule_type(0xFE9C, 0x001F);
	abort;
labelFunc071F_00B3:
	if (!gflags[0x02B8]) goto labelFunc071F_00BA;
	abort;
labelFunc071F_00BA:
	var0003 = UI_get_item_quality(item);
	var0004 = false;
	var0005 = UI_find_nearby(item, 0x0106, 0x0001, 0x0000);
	if (!var0005) goto labelFunc071F_0210;
	var0006 = UI_get_item_frame(var0005);
	if (!((var0006 + 0x0001) != var0003)) goto labelFunc071F_0151;
	var0007 = UI_get_party_list();
	var0008 = 0x0003;
	enum();
labelFunc071F_0103:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc071F_014A;
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x55, 0x060F], var0008);
	Func097F(var000B, "@Ahhhh!@", var0008);
	var0008 = (var0008 + 0x0007);
	Func097F(0xFE9C, "@That was wrong...@", var0008);
	goto labelFunc071F_0103;
labelFunc071F_014A:
	var0004 = true;
	goto labelFunc071F_0210;
labelFunc071F_0151:
	UI_set_item_flag(var0005, 0x0012);
	UI_remove_item(var0005);
	var000C = UI_find_nearby(item, 0x039F, 0x0001, 0x0000);
	if (!var000C) goto labelFunc071F_01E6;
	var000D = UI_get_object_position(var000C);
	var000E = UI_get_item_frame(var000C);
	UI_remove_item(var000C);
	var000F = UI_create_new_object(0x039F);
	if (!var000F) goto labelFunc071F_01E6;
	UI_set_item_frame(var000F, (var000E + 0x0004));
	var0002 = UI_update_last_created(var000D);
	UI_play_sound_effect(0x0004);
	UI_sprite_effect(0x0015, var000D[0x0001], (var000D[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc071F_01E6:
	if (!(var0003 == 0x0002)) goto labelFunc071F_01F4;
	gflags[0x02A6] = true;
labelFunc071F_01F4:
	if (!(var0003 == 0x0003)) goto labelFunc071F_0202;
	gflags[0x02A7] = true;
labelFunc071F_0202:
	if (!(var0003 == 0x0004)) goto labelFunc071F_0210;
	gflags[0x02A8] = true;
labelFunc071F_0210:
	if (!((!var0005) || var0004)) goto labelFunc071F_0330;
	if (!(var0003 == 0x0002)) goto labelFunc071F_0242;
	var0010 = 0x0007;
	var0011 = (UI_die_roll(0x0005, 0x000A) * 0xFFFF);
	var0012 = 0x0000;
labelFunc071F_0242:
	if (!(var0003 == 0x0003)) goto labelFunc071F_0265;
	var0010 = 0x0007;
	var0011 = 0x0000;
	var0012 = UI_die_roll(0x0005, 0x000A);
labelFunc071F_0265:
	if (!(var0003 == 0x0004)) goto labelFunc071F_0288;
	var0010 = 0x001A;
	var0011 = UI_die_roll(0x0005, 0x000A);
	var0012 = 0x0000;
labelFunc071F_0288:
	var0013 = [0x039F, 0x01CF, 0x0201];
	var0014 = UI_find_nearby(item, 0xFE99, 0x0001, 0x0000);
	enum();
labelFunc071F_02A9:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc071F_0330;
	if (!(!(UI_get_item_shape(var0017) in var0013))) goto labelFunc071F_032D;
	var0018 = UI_get_object_position(item);
	var0002 = UI_set_last_created(var0017);
	if (!var0002) goto labelFunc071F_02FF;
	var0002 = UI_update_last_created([(var0018[0x0001] + var0011), (var0018[0x0002] + var0012), var0018[0x0003]]);
labelFunc071F_02FF:
	UI_play_sound_effect(0x0043);
	UI_sprite_effect(var0010, (var0018[0x0001] + var0011), (var0018[0x0002] + var0012), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc071F_032D:
	goto labelFunc071F_02A9;
labelFunc071F_0330:
	if (!(gflags[0x02A6] && (gflags[0x02A7] && gflags[0x02A8]))) goto labelFunc071F_040A;
	UI_play_sound_effect(0x0077);
	UI_set_item_flag(0xFE9C, 0x0010);
	gflags[0x02B8] = true;
	var0018 = [0x0687, 0x001C, 0x0000];
	UI_sprite_effect(0x001A, var0018[0x0001], var0018[0x0002], 0x0005, 0x0005, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0018[0x0001], var0018[0x0002], 0xFFFB, 0xFFFB, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0018[0x0001], var0018[0x0002], 0xFFFB, 0x0005, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0018[0x0001], var0018[0x0002], 0x0005, 0xFFFB, 0x0000, 0xFFFF);
	var0019 = [0x068B, 0x0015, 0x0002];
	UI_si_path_run_usecode(0xFE9C, var0019, 0x000A, item, 0x071F, true);
	UI_set_path_failure(0x071F, item, 0x000A);
labelFunc071F_040A:
	return;
}


