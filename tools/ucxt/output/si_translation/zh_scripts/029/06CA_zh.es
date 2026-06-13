#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06CA object#(0x6CA) ()
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

	var0000 = UI_get_object_position(item);
	var0001 = var0000[0x0001];
	var0002 = var0000[0x0002];
	var0003 = UI_find_nearby(item, 0x01DB, 0x000C, 0x00B0);
	var0003 = (var0003 & UI_find_nearby(item, 0x02D8, 0x000C, 0x00B0));
	var0004 = [0x0000, 0x0000, 0x0000, 0x0000];
	var0005 = [0x0000, 0x0000, 0x0000, 0x0000];
	enum();
labelFunc06CA_0065:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc06CA_0113;
	var0009 = UI_get_object_position(var0008);
	var000A = var0009[0x0001];
	var000B = var0009[0x0002];
	var000C = (var000A - var0001);
	var000D = (var000B - var0002);
	if (!(var000D < 0xFFFB)) goto labelFunc06CA_00BC;
	var0004[0x0001] = 0x0001;
	var0005[0x0001] = var0008;
labelFunc06CA_00BC:
	if (!(var000C > 0x0005)) goto labelFunc06CA_00D8;
	var0004[0x0002] = 0x0001;
	var0005[0x0002] = var0008;
labelFunc06CA_00D8:
	if (!(var000D > 0x0005)) goto labelFunc06CA_00F4;
	var0004[0x0003] = 0x0001;
	var0005[0x0003] = var0008;
labelFunc06CA_00F4:
	if (!(var000C < 0xFFFB)) goto labelFunc06CA_0110;
	var0004[0x0004] = 0x0001;
	var0005[0x0004] = var0008;
labelFunc06CA_0110:
	goto labelFunc06CA_0065;
labelFunc06CA_0113:
	var000E = UI_find_nearby(item, 0x0216, 0x000C, 0x00B0);
	var000F = [0x0000, 0x0000, 0x0000, 0x0000];
	var0010 = [0x0000, 0x0000, 0x0000, 0x0000];
	enum();
labelFunc06CA_0149:
	for (var0013 in var000E with var0011 to var0012) attend labelFunc06CA_01F7;
	var0014 = UI_get_object_position(var0013);
	var000A = var0014[0x0001];
	var000B = var0014[0x0002];
	var000C = (var000A - var0001);
	var000D = (var000B - var0002);
	if (!(var000D < 0xFFFB)) goto labelFunc06CA_01A0;
	var000F[0x0001] = 0x0001;
	var0010[0x0001] = var0013;
labelFunc06CA_01A0:
	if (!(var000C > 0x0005)) goto labelFunc06CA_01BC;
	var000F[0x0002] = 0x0001;
	var0010[0x0002] = var0013;
labelFunc06CA_01BC:
	if (!(var000D > 0x0005)) goto labelFunc06CA_01D8;
	var000F[0x0003] = 0x0001;
	var0010[0x0003] = var0013;
labelFunc06CA_01D8:
	if (!(var000C < 0xFFFB)) goto labelFunc06CA_01F4;
	var000F[0x0004] = 0x0001;
	var0010[0x0004] = var0013;
labelFunc06CA_01F4:
	goto labelFunc06CA_0149;
labelFunc06CA_01F7:
	var0015 = UI_get_item_quality(item);
	var0016 = 0x0000;
	var0017 = 0x0000;
	if (!((var0015 == 0x0001) || ((var0015 == 0x0003) || ((var0015 == 0x0005) || ((var0015 == 0x0007) || ((var0015 == 0x0009) || ((var0015 == 0x000B) || ((var0015 == 0x000D) || (var0015 == 0x000F))))))))) goto labelFunc06CA_02F6;
	if (!(var0004[0x0001] == 0x0000)) goto labelFunc06CA_02B3;
	UI_remove_item(var0010[0x0001]);
	UI_play_sound_effect(0x0025);
	var0018 = UI_create_new_object(0x02D8);
	UI_set_item_frame(var0018, 0x0004);
	UI_clear_item_flag(var0018, 0x0012);
	var0016 = 0x0002;
	var0017 = 0xFFF8;
	var0019 = UI_update_last_created([(var0001 + var0016), (var0002 + var0017), 0x0000]);
	goto labelFunc06CA_02F6;
labelFunc06CA_02B3:
	UI_remove_item(var0005[0x0001]);
	var001A = UI_create_new_object(0x0216);
	UI_set_item_frame(var001A, 0x0000);
	UI_clear_item_flag(var001A, 0x0012);
	var0019 = UI_update_last_created([(var0001 + 0x0002), (var0002 - 0x0008), 0x0000]);
labelFunc06CA_02F6:
	if (!((var0015 == 0x0002) || ((var0015 == 0x0003) || ((var0015 == 0x0006) || ((var0015 == 0x0007) || ((var0015 == 0x000A) || ((var0015 == 0x000B) || ((var0015 == 0x000E) || (var0015 == 0x000F))))))))) goto labelFunc06CA_03E1;
	if (!(var0004[0x0002] == 0x0000)) goto labelFunc06CA_039E;
	UI_remove_item(var0010[0x0002]);
	UI_play_sound_effect(0x0025);
	var0018 = UI_create_new_object(0x01DB);
	UI_set_item_frame(var0018, 0x000A);
	UI_clear_item_flag(var0018, 0x0012);
	var0016 = 0x0008;
	var0017 = 0x0002;
	var0019 = UI_update_last_created([(var0001 + var0016), (var0002 + var0017), 0x0000]);
	goto labelFunc06CA_03E1;
labelFunc06CA_039E:
	UI_remove_item(var0005[0x0002]);
	var001A = UI_create_new_object(0x0216);
	UI_set_item_frame(var001A, 0x0000);
	UI_clear_item_flag(var001A, 0x0012);
	var0019 = UI_update_last_created([(var0001 + 0x0008), (var0002 + 0x0002), 0x0000]);
labelFunc06CA_03E1:
	if (!((var0015 == 0x0004) || ((var0015 == 0x0005) || ((var0015 == 0x0006) || ((var0015 == 0x0007) || ((var0015 == 0x000C) || ((var0015 == 0x000D) || ((var0015 == 0x000E) || (var0015 == 0x000F))))))))) goto labelFunc06CA_04CC;
	if (!(var0004[0x0003] == 0x0000)) goto labelFunc06CA_0489;
	UI_remove_item(var0010[0x0003]);
	UI_play_sound_effect(0x0025);
	var0018 = UI_create_new_object(0x02D8);
	UI_set_item_frame(var0018, 0x0004);
	UI_clear_item_flag(var0018, 0x0012);
	var0016 = 0x0002;
	var0017 = 0x0008;
	var0019 = UI_update_last_created([(var0001 + var0016), (var0002 + var0017), 0x0000]);
	goto labelFunc06CA_04CC;
labelFunc06CA_0489:
	UI_remove_item(var0005[0x0003]);
	var001A = UI_create_new_object(0x0216);
	UI_set_item_frame(var001A, 0x0000);
	UI_clear_item_flag(var001A, 0x0012);
	var001B = UI_update_last_created([(var0001 + 0x0002), (var0002 + 0x0008), 0x0000]);
labelFunc06CA_04CC:
	if (!((var0015 == 0x0008) || ((var0015 == 0x0009) || ((var0015 == 0x000A) || ((var0015 == 0x000B) || ((var0015 == 0x000C) || ((var0015 == 0x000D) || ((var0015 == 0x000E) || (var0015 == 0x000F))))))))) goto labelFunc06CA_05B7;
	if (!(var0004[0x0004] == 0x0000)) goto labelFunc06CA_0574;
	UI_remove_item(var0010[0x0004]);
	UI_play_sound_effect(0x0025);
	var0018 = UI_create_new_object(0x01DB);
	UI_set_item_frame(var0018, 0x000A);
	UI_clear_item_flag(var0018, 0x0012);
	var0016 = 0xFFF8;
	var0017 = 0x0002;
	var0019 = UI_update_last_created([(var0001 + var0016), (var0002 + var0017), 0x0000]);
	goto labelFunc06CA_05B7;
labelFunc06CA_0574:
	UI_remove_item(var0005[0x0004]);
	var001A = UI_create_new_object(0x0216);
	UI_set_item_frame(var001A, 0x0000);
	UI_clear_item_flag(var001A, 0x0012);
	var001B = UI_update_last_created([(var0001 - 0x0008), (var0002 + 0x0002), 0x0000]);
labelFunc06CA_05B7:
	var0003 = UI_find_nearby(item, 0x01DB, 0x000C, 0x00B0);
	var0003 = (var0003 & UI_find_nearby(item, 0x02D8, 0x000C, 0x00B0));
	var0004 = [0x0000, 0x0000, 0x0000, 0x0000];
	enum();
labelFunc06CA_05F0:
	for (var0008 in var0003 with var001C to var001D) attend labelFunc06CA_067A;
	var0009 = UI_get_object_position(var0008);
	var000A = var0009[0x0001];
	var000B = var0009[0x0002];
	var000C = (var000A - var0001);
	var000D = (var000B - var0002);
	if (!(var000D < 0xFFFB)) goto labelFunc06CA_063E;
	var0004[0x0001] = 0x0001;
labelFunc06CA_063E:
	if (!(var000C > 0x0005)) goto labelFunc06CA_0651;
	var0004[0x0002] = 0x0001;
labelFunc06CA_0651:
	if (!(var000D > 0x0005)) goto labelFunc06CA_0664;
	var0004[0x0003] = 0x0001;
labelFunc06CA_0664:
	if (!(var000C < 0xFFFB)) goto labelFunc06CA_0677;
	var0004[0x0004] = 0x0001;
labelFunc06CA_0677:
	goto labelFunc06CA_05F0;
labelFunc06CA_067A:
	if (!((var0004[0x0001] == 0x0001) && ((var0004[0x0002] == 0x0001) && ((var0004[0x0003] == 0x0001) && (var0004[0x0004] == 0x0001))))) goto labelFunc06CA_06B8;
	UI_play_music(0x0004, Func09A0(0x0005, 0x0001));
labelFunc06CA_06B8:
	return;
}


