#game "blackgate"
// externs
extern void Func08E6 0x8E6 (var var0000);

void Func070A object#(0x70A) ()
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
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var var002B;
	var var002C;
	var var002D;

	if (!(event == 0x0003)) goto labelFunc070A_0300;
	if (!(!UI_get_item_quality(item))) goto labelFunc070A_01B1;
	if (!(!gflags[0x033B])) goto labelFunc070A_01AE;
	gflags[0x033B] = true;
	var0000 = UI_find_nearest(item, 0x009A, 0x0000);
	if (!var0000) goto labelFunc070A_01AE;
	var0001 = UI_create_new_object(0x0281);
	UI_set_item_frame(var0001, 0x0007);
	var0002 = UI_set_item_quality(var0001, 0x0041);
	var0002 = UI_give_last_created(var0000);
	UI_item_say(var0000, "@我召喚你！@");
	var0002 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0016]);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x6F, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x01, (byte)0x55, 0x070A, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var0003 = UI_find_nearby(item, 0x0150, 0x0014, 0x0000);
	enum();
labelFunc070A_00CD:
	for (var0001 in var0003 with var0004 to var0005) attend labelFunc070A_0122;
	if (!((UI_get_item_frame(var0001) == 0x0007) || (UI_get_item_frame(var0001) == 0x0009))) goto labelFunc070A_011F;
	var0006 = UI_create_new_object(0x0152);
	UI_set_item_frame(var0006, UI_get_item_frame(var0001));
	var0002 = UI_update_last_created(UI_get_object_position(var0001));
	UI_remove_item(var0001);
labelFunc070A_011F:
	goto labelFunc070A_00CD;
labelFunc070A_0122:
	var0003 = UI_find_nearby(item, 0x0152, 0x0014, 0x0000);
	enum();
labelFunc070A_0134:
	for (var0001 in var0003 with var0007 to var0008) attend labelFunc070A_01AE;
	if (!(UI_get_item_frame(var0001) == 0x0009)) goto labelFunc070A_01AB;
	var0009 = UI_find_nearby(var0001, 0x0113, 0x0001, 0x0010);
	enum();
labelFunc070A_0161:
	for (var000C in var0009 with var000A to var000B) attend labelFunc070A_01AB;
	if (!((UI_get_item_frame(var000C) == 0x0006) && (UI_get_item_quality(var000C) == 0x00C9))) goto labelFunc070A_01A8;
	var000D = UI_create_new_object(0x037F);
	UI_set_item_frame(var000D, 0x0000);
	var0002 = UI_update_last_created(UI_get_object_position(var000C));
labelFunc070A_01A8:
	goto labelFunc070A_0161;
labelFunc070A_01AB:
	goto labelFunc070A_0134;
labelFunc070A_01AE:
	goto labelFunc070A_0300;
labelFunc070A_01B1:
	if (!gflags[0x033B]) goto labelFunc070A_0300;
	var0003 = UI_find_nearby(item, 0x0152, 0x0014, 0x0000);
	enum();
labelFunc070A_01C9:
	for (var0001 in var0003 with var000E to var000F) attend labelFunc070A_021E;
	if (!((UI_get_item_frame(var0001) == 0x0007) || (UI_get_item_frame(var0001) == 0x0009))) goto labelFunc070A_021B;
	var0006 = UI_create_new_object(0x03E5);
	UI_set_item_frame(var0006, UI_get_item_frame(var0001));
	var0002 = UI_update_last_created(UI_get_object_position(var0001));
	UI_remove_item(var0001);
labelFunc070A_021B:
	goto labelFunc070A_01C9;
labelFunc070A_021E:
	var0003 = UI_find_nearby(item, 0x037F, 0x001E, 0x0010);
	enum();
labelFunc070A_0230:
	for (var0001 in var0003 with var0010 to var0011) attend labelFunc070A_0245;
	UI_remove_item(var0001);
	goto labelFunc070A_0230;
labelFunc070A_0245:
	var0003 = UI_find_nearby(item, 0x00A8, 0x001E, 0x0000);
	enum();
labelFunc070A_0257:
	for (var0001 in var0003 with var0012 to var0013) attend labelFunc070A_026C;
	UI_remove_item(var0001);
	goto labelFunc070A_0257;
labelFunc070A_026C:
	var0003 = UI_find_nearby(item, 0x0190, 0x000A, 0x0000);
	enum();
labelFunc070A_027E:
	for (var0001 in var0003 with var0014 to var0015) attend labelFunc070A_02A0;
	if (!(UI_get_item_frame(var0001) == 0x001D)) goto labelFunc070A_029D;
	Func08E6(var0001);
labelFunc070A_029D:
	goto labelFunc070A_027E;
labelFunc070A_02A0:
	var0003 = UI_find_nearby(item, 0x0113, 0x0000, 0x0010);
	enum();
labelFunc070A_02B2:
	for (var0001 in var0003 with var0016 to var0017) attend labelFunc070A_02D5;
	if (!(UI_get_item_frame(var0001) == 0x0000)) goto labelFunc070A_02D2;
	UI_remove_item(var0001);
labelFunc070A_02D2:
	goto labelFunc070A_02B2;
labelFunc070A_02D5:
	var0003 = UI_find_nearby(item, 0x009A, 0x0001, 0x0008);
	enum();
labelFunc070A_02E7:
	for (var0001 in var0003 with var0018 to var0019) attend labelFunc070A_02FB;
	Func08E6(var0001);
	goto labelFunc070A_02E7;
labelFunc070A_02FB:
	UI_remove_item(item);
labelFunc070A_0300:
	if (!(event == 0x0002)) goto labelFunc070A_0751;
	if (!(UI_get_item_shape(item) == 0x009A)) goto labelFunc070A_03A7;
	var001A = (UI_get_object_position(item) & (0x00C8 & 0x0006));
	var0003 = UI_find_nearby(var001A, 0x0113, 0x0014, 0x0010);
	if (!var0003) goto labelFunc070A_03A7;
	enum();
labelFunc070A_033E:
	for (var0001 in var0003 with var001B to var001C) attend labelFunc070A_03A7;
	var001A = (UI_get_object_position(var0001) & (0xFE99 & 0x0000));
	var001D = UI_find_nearby(var001A, 0x0113, 0x0000, 0x0010);
	enum();
labelFunc070A_036F:
	for (var0020 in var001D with var001E to var001F) attend labelFunc070A_03A4;
	var0002 = UI_execute_usecode_array(var0020, [(byte)0x2C, (byte)0x48]);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x070A]);
	goto labelFunc070A_036F;
labelFunc070A_03A4:
	goto labelFunc070A_033E;
labelFunc070A_03A7:
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc070A_04B9;
	var0001 = UI_find_nearby(0xFE9C, 0x0162, 0x001E, 0x0008);
	if (!var0001) goto labelFunc070A_045E;
	var0021 = UI_get_object_position(var0001);
	UI_sprite_effect(0x0008, (var0021[0x0001] - 0x0002), (var0021[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, (var0021[0x0001] - 0x0002), (var0021[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0034);
	UI_set_item_frame(var0001, 0x0013);
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x59, 0x0004, (byte)0x27, 0x0005, (byte)0x55, 0x070A]);
	goto labelFunc070A_04B9;
labelFunc070A_045E:
	var001A = (UI_get_object_position(var0001) & (0xFE99 & 0x0006));
	var0003 = UI_find_nearby(var0001, 0x0113, 0x0000, 0x0010);
	enum();
labelFunc070A_0484:
	for (var0001 in var0003 with var0022 to var0023) attend labelFunc070A_04B9;
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x2C, (byte)0x48]);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x070A]);
	goto labelFunc070A_0484;
labelFunc070A_04B9:
	if (!UI_get_item_flag(0xFE9C, 0x0004)) goto labelFunc070A_04C7;
	abort;
labelFunc070A_04C7:
	if (!(UI_get_item_shape(item) == 0x0162)) goto labelFunc070A_0751;
	var0024 = UI_get_distance(item, UI_get_npc_object(0xFE9C));
	if (!((var0024 < 0x0014) && UI_get_item_flag(UI_get_npc_object(0xFE9C), 0x0017))) goto labelFunc070A_0728;
	var0021 = UI_get_object_position(item);
	UI_sprite_effect(0x0011, (var0021[0x0001] + 0x0003), (var0021[0x0002] + 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0025 = UI_get_party_list();
	enum();
labelFunc070A_0532:
	for (var0028 in var0025 with var0026 to var0027) attend labelFunc070A_06DE;
	var0029 = "";
	var002A = UI_die_roll(0x0000, 0x0008);
	if (!(var002A == 0x0000)) goto labelFunc070A_0572;
	var002B = [(byte)0x6D, (byte)0x6C, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_0572:
	if (!(var002A == 0x0001)) goto labelFunc070A_0594;
	var002B = [(byte)0x6D, (byte)0x61, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_0594:
	if (!(var002A == 0x0002)) goto labelFunc070A_05B6;
	var002B = [(byte)0x6C, (byte)0x6E, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_05B6:
	if (!(var002A == 0x0003)) goto labelFunc070A_05D8;
	var002B = [(byte)0x61, (byte)0x61, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_05D8:
	if (!(var002A == 0x0004)) goto labelFunc070A_05FA;
	var002B = [(byte)0x6D, (byte)0x64, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_05FA:
	if (!(var002A == 0x0005)) goto labelFunc070A_061C;
	var002B = [(byte)0x64, (byte)0x6D, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_061C:
	if (!(var002A == 0x0006)) goto labelFunc070A_0655;
	var002C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var002B = [(byte)0x59, var002C, (byte)0x6C, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_0655:
	if (!(var002A == 0x0007)) goto labelFunc070A_068E;
	var002C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var002B = [(byte)0x59, var002C, (byte)0x6D, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_068E:
	if (!(var002A == 0x0008)) goto labelFunc070A_06C7;
	var002C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var002B = [(byte)0x59, var002C, (byte)0x64, (byte)0x61];
	var0029 = [var0029, var002B];
labelFunc070A_06C7:
	UI_halt_scheduled(var0028);
	var0002 = UI_execute_usecode_array(var0028, var0029);
	goto labelFunc070A_0532;
labelFunc070A_06DE:
	UI_earthquake(0x0003);
	var002D = UI_die_roll(0x0005, 0x0014);
	var0002 = UI_execute_usecode_array(item, [(byte)0x64, (byte)0x27, var002D, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x55, 0x070A]);
	goto labelFunc070A_0751;
labelFunc070A_0728:
	var002D = UI_die_roll(0x0005, 0x000F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x64, (byte)0x27, var002D, (byte)0x27, 0x000A, (byte)0x55, 0x070A]);
labelFunc070A_0751:
	return;
}


