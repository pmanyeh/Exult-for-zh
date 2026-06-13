#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08C1 0x8C1 ();
extern void Func08C0 0x8C0 (var var0000);
extern void Func0922 0x922 (var var0000);

void Func08BF 0x8BF ()
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

	if (!(event == 0x0003)) goto labelFunc08BF_03E3;
	if (!((UI_get_item_quality(item) == 0x0007) && (gflags[0x023E] && (gflags[0x0241] && (gflags[0x0240] && gflags[0x023F]))))) goto labelFunc08BF_0160;
	gflags[0x0242] = false;
	var0000 = UI_find_nearby(item, 0x0392, 0x0001, 0x0000);
	enum();
labelFunc08BF_003A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc08BF_0160;
	var0004 = UI_get_object_position(var0003);
	var0005 = UI_get_object_position(item);
	if (!((UI_get_item_quality(var0003) == 0x0001) && ((UI_get_item_frame(var0003) == 0x0000) && (var0004[0x0003] == 0x0002)))) goto labelFunc08BF_015C;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@In pri kli ort ailem!@", 0x0000);
	Func097F(0xFE9C, "@Priin ort inten mani!@", 0x0007);
	UI_sprite_effect(0x0030, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
	gflags[0x0242] = true;
	UI_remove_item(var0003);
	var0006 = (UI_find_nearby(item, 0x037F, 0x0032, 0x0000) & UI_find_nearby(item, 0x0113, 0x001E, 0x0010));
	enum();
labelFunc08BF_00ED:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc08BF_012B;
	var000A = UI_get_object_position(var0009);
	UI_sprite_effect(0x0004, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0009);
	goto labelFunc08BF_00ED;
labelFunc08BF_012B:
	if (!Func08C1()) goto labelFunc08BF_015C;
	var000B = UI_find_nearest(0xFE9C, 0x017C, 0x0014);
	if (!var000B) goto labelFunc08BF_015C;
	var000C = UI_delayed_execute_usecode_array(var000B, [(byte)0x55, 0x07E7], 0x001B);
labelFunc08BF_015C:
	abort;
	goto labelFunc08BF_003A;
labelFunc08BF_0160:
	if (!(UI_get_item_quality(item) == 0x0008)) goto labelFunc08BF_0215;
	gflags[0x023E] = false;
	var000D = UI_find_nearby(item, 0x0106, 0x0002, 0x0000);
	enum();
labelFunc08BF_0182:
	for (var0010 in var000D with var000E to var000F) attend labelFunc08BF_0211;
	var0011 = UI_get_object_position(var0010);
	var0005 = UI_get_object_position(item);
	if (!((var0011[0x0001] <= var0005[0x0001]) && ((var0011[0x0003] == 0x0002) && (UI_get_item_frame(var0010) == 0x0003)))) goto labelFunc08BF_020E;
	var000C = UI_set_last_created(var0010);
	if (!var000C) goto labelFunc08BF_01F0;
	var0005[0x0002] = (var0005[0x0002] + 0x0002);
	var000C = UI_update_last_created(var0005);
labelFunc08BF_01F0:
	gflags[0x023E] = true;
	Func08C0(true);
	var000C = UI_delayed_execute_usecode_array(var0010, [(byte)0x55, 0x07E7], 0x0014);
	abort;
labelFunc08BF_020E:
	goto labelFunc08BF_0182;
labelFunc08BF_0211:
	Func08C0(false);
labelFunc08BF_0215:
	if (!((UI_get_item_quality(item) == 0x0009) && gflags[0x023E])) goto labelFunc08BF_02AF;
	gflags[0x0241] = false;
	var0012 = UI_find_nearby(item, 0x01BD, 0x0001, 0x0000);
	enum();
labelFunc08BF_023B:
	for (var0015 in var0012 with var0013 to var0014) attend labelFunc08BF_02AF;
	if (!(UI_get_item_frame(var0015) == 0x0005)) goto labelFunc08BF_02AC;
	gflags[0x0241] = true;
	var0005 = UI_get_object_position(item);
	UI_remove_item(var0015);
	UI_remove_item(item);
	var0016 = UI_create_new_object(0x037F);
	if (!var0016) goto labelFunc08BF_02AC;
	UI_play_sound_effect(0x0061);
	var0016 = UI_update_last_created(var0005);
	UI_sprite_effect(0x0027, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc08BF_02AC:
	goto labelFunc08BF_023B;
labelFunc08BF_02AF:
	if (!((UI_get_item_quality(item) == 0x000A) && gflags[0x023E])) goto labelFunc08BF_0349;
	gflags[0x0240] = false;
	var0012 = UI_find_nearby(item, 0x01BD, 0x0001, 0x0000);
	enum();
labelFunc08BF_02D5:
	for (var0015 in var0012 with var0017 to var0018) attend labelFunc08BF_0349;
	if (!(UI_get_item_frame(var0015) == 0x0006)) goto labelFunc08BF_0346;
	gflags[0x0240] = true;
	var0005 = UI_get_object_position(item);
	UI_remove_item(item);
	UI_remove_item(var0015);
	var0016 = UI_create_new_object(0x037F);
	if (!var0016) goto labelFunc08BF_0346;
	UI_play_sound_effect(0x0061);
	var0016 = UI_update_last_created(var0005);
	UI_sprite_effect(0x0027, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc08BF_0346:
	goto labelFunc08BF_02D5;
labelFunc08BF_0349:
	if (!((UI_get_item_quality(item) == 0x000B) && gflags[0x023E])) goto labelFunc08BF_03E3;
	gflags[0x023F] = false;
	var0012 = UI_find_nearby(item, 0x01BD, 0x0001, 0x0000);
	enum();
labelFunc08BF_036F:
	for (var0015 in var0012 with var0019 to var001A) attend labelFunc08BF_03E3;
	if (!(UI_get_item_frame(var0015) == 0x0007)) goto labelFunc08BF_03E0;
	gflags[0x023F] = true;
	var0005 = UI_get_object_position(item);
	UI_remove_item(item);
	UI_remove_item(var0015);
	var0016 = UI_create_new_object(0x037F);
	if (!var0016) goto labelFunc08BF_03E0;
	UI_play_sound_effect(0x0061);
	var0016 = UI_update_last_created(var0005);
	UI_sprite_effect(0x0027, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc08BF_03E0:
	goto labelFunc08BF_036F;
labelFunc08BF_03E3:
	if (!(event == 0x0002)) goto labelFunc08BF_055A;
	if (!(UI_get_item_shape(item) == 0x0106)) goto labelFunc08BF_0422;
	if (!Func08C1()) goto labelFunc08BF_0422;
	var000B = UI_find_nearest(0xFE9C, 0x017C, 0x0028);
	var000C = UI_delayed_execute_usecode_array(var000B, [(byte)0x55, 0x07E7], 0x0002);
labelFunc08BF_0422:
	if (!(UI_get_item_shape(item) == 0x017C)) goto labelFunc08BF_055A;
	if (!gflags[0x024A]) goto labelFunc08BF_0527;
	var001B = false;
	var001C = UI_get_object_position(0xFE9C);
	if (!(var001C[0x0002] <= 0x04A6)) goto labelFunc08BF_047D;
	var001C[0x0001] = 0x03FF;
	var001C[0x0002] = 0x04AA;
	var001C[0x0003] = 0x0000;
	var001B = 0x0000;
	UI_set_item_frame(0xFF29, 0x000C);
	goto labelFunc08BF_04A8;
labelFunc08BF_047D:
	var001C[0x0001] = 0x03FF;
	var001C[0x0002] = 0x04A2;
	var001C[0x0003] = 0x0000;
	var001B = 0x0004;
	UI_set_item_frame(0xFF29, 0x001C);
labelFunc08BF_04A8:
	var001D = UI_part_of_day();
	UI_move_object(0xFF29, var001C);
	Func097F(0xFF29, "@Wait!@", 0x0000);
	UI_set_schedule_type(0xFF29, 0x0003);
	UI_set_new_schedules(0xFF29, 0x0000, 0x0003, var001C);
	var000C = UI_execute_usecode_array(0xFF29, [(byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003]);
	UI_obj_sprite_effect(0xFF29, 0x0007, 0x0001, 0x0001, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	goto labelFunc08BF_055A;
labelFunc08BF_0527:
	gflags[0x024A] = true;
	Func0922(0x0019);
	Func08C0(false);
	var000B = UI_find_nearest(0xFE9C, 0x017C, 0x0028);
	var000C = UI_delayed_execute_usecode_array(var000B, [(byte)0x55, 0x07E7], 0x001E);
labelFunc08BF_055A:
	return;
}


