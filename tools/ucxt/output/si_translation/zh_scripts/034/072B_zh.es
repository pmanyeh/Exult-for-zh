#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func072B object#(0x72B) ()
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

	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc072B_021B;
	gflags[0x0007] = false;
	Func0922(0x0007);
	gflags[0x02E5] = true;
	var0000 = UI_find_nearby(item, 0x0280, 0x0019, 0x0000);
	var0001 = UI_find_nearby(item, 0x027E, 0x0019, 0x0000);
	var0002 = UI_find_nearby(item, 0x03EC, 0x0019, 0x0000);
	var0003 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0015, (var0003[0x0001] - 0x0003), (var0003[0x0002] - 0x0003), 0xFFFB, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0000);
	var0003 = UI_get_object_position(var0001);
	UI_sprite_effect(0x000D, (var0003[0x0001] - 0x0003), (var0003[0x0002] - 0x0003), 0x0000, 0xFFFB, 0x0000, 0xFFFF);
	UI_remove_item(var0001);
	var0003 = UI_get_object_position(var0002);
	UI_sprite_effect(0x0015, (var0003[0x0001] - 0x0003), (var0003[0x0002] - 0x0003), 0x0005, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000D, (var0003[0x0001] - 0x0003), (var0003[0x0002] - 0x0003), 0x0000, 0x0005, 0x0000, 0xFFFF);
	UI_remove_item(var0002);
	UI_play_sound_effect(0x0077);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x072B], 0x001B);
	var0005 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0004), (var0005[0x0002] - 0x0004), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_find_nearby(item, 0x00D1, 0x000F, 0x0000);
	enum();
labelFunc072B_01A6:
	for (var0004 in var0006 with var0007 to var0008) attend labelFunc072B_021A;
	var0009 = UI_get_item_frame(var0004);
	if (!(var0009 == 0x0014)) goto labelFunc072B_0201;
	gflags[0x000A] = true;
	var0003 = UI_get_object_position(var0004);
	UI_sprite_effect(0x0021, (var0003[0x0001] - 0x0003), (var0003[0x0002] - 0x0003), 0x0005, 0x0000, 0x0000, 0xFFFD);
	UI_remove_item(var0004);
labelFunc072B_0201:
	if (!(var0009 == 0x0013)) goto labelFunc072B_0217;
	Func097F(0xFE9C, "@I forgot the eye!@", 0x0041);
labelFunc072B_0217:
	goto labelFunc072B_01A6;
labelFunc072B_021A:
	abort;
labelFunc072B_021B:
	if (!(event == 0x0002)) goto labelFunc072B_04A5;
	if (!(gflags[0x0009] == true)) goto labelFunc072B_0391;
	gflags[0x0009] = false;
	var000A = UI_find_nearby(item, 0x0204, 0x000F, 0x0000);
	var000A = (var000A & UI_find_nearby(item, 0x00F6, 0x000F, 0x0000));
	enum();
labelFunc072B_0256:
	for (var000D in var000A with var000B to var000C) attend labelFunc072B_0347;
	var0009 = UI_get_item_frame(var000D);
	if (!((var0009 == 0x000E) || (var0009 == 0x001E))) goto labelFunc072B_0344;
	var0009 = (var0009 - 0x0002);
	UI_set_item_frame(var000D, var0009);
	var000E = var000D;
	var000F = UI_get_object_position(var000D);
	UI_play_sound_effect(0x0059);
	UI_sprite_effect(0x000D, (var000F[0x0001] - 0x0002), (var000F[0x0002] - 0x0002), 0x0003, 0x0003, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000D, (var000F[0x0001] - 0x0003), (var000F[0x0002] - 0x0003), 0xFFFD, 0x0003, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, (var000F[0x0001] - 0x0002), (var000F[0x0002] - 0x0002), 0xFFFD, 0xFFFD, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, (var000F[0x0001] - 0x0003), (var000F[0x0002] - 0x0003), 0x0003, 0xFFFD, 0x0000, 0xFFFF);
labelFunc072B_0344:
	goto labelFunc072B_0256;
labelFunc072B_0347:
	var0010 = UI_get_item_shape(var000E);
	if (!(var0010 == 0x00F6)) goto labelFunc072B_0372;
	var0004 = UI_execute_usecode_array(var000E, [(byte)0x23, (byte)0x55, 0x00F6, 0x0000]);
labelFunc072B_0372:
	if (!(var0010 == 0x0204)) goto labelFunc072B_0390;
	var0004 = UI_execute_usecode_array(var000E, [(byte)0x23, (byte)0x55, 0x0204]);
labelFunc072B_0390:
	abort;
labelFunc072B_0391:
	if (!(gflags[0x0008] == false)) goto labelFunc072B_03F6;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFE9C, [0x0687, 0x0072, 0x0000]);
	gflags[0x0008] = true;
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x0001);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x072B], 0x0002);
	abort;
	goto labelFunc072B_04A5;
labelFunc072B_03F6:
	gflags[0x0009] = true;
	gflags[0x0008] = false;
	var0004 = Func099B(0xFE9C, 0x0001, 0x0280, 0x0000, 0x0000, 0x0000, false);
	var0004 = Func099B(0xFE9C, 0x0001, 0x027E, 0x0000, 0x0000, 0x0000, false);
	var0004 = Func099B(0xFE9C, 0x0001, 0x03EC, 0x0000, 0x0002, 0x0000, false);
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!gflags[0x000A]) goto labelFunc072B_0476;
	var0004 = Func099B(0xFE9C, 0x0001, 0x00D1, 0x0000, 0x0014, 0x0000, false);
	gflags[0x000A] = false;
labelFunc072B_0476:
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x072B], 0x0011);
	abort;
labelFunc072B_04A5:
	if (!(event == 0x0003)) goto labelFunc072B_06AD;
	gflags[0x0007] = 0x0000;
	gflags[0x0008] = 0x0000;
	gflags[0x0009] = 0x0000;
	gflags[0x000A] = 0x0000;
	var0000 = UI_find_nearby(item, 0x0280, 0x0005, 0x0000);
	var0001 = UI_find_nearby(item, 0x027E, 0x0005, 0x0000);
	var0002 = UI_find_nearby(item, 0x03EC, 0x0005, 0x0000);
	if (!var0002) goto labelFunc072B_0512;
	if (!(UI_get_item_frame(var0002) != 0x0002)) goto labelFunc072B_0512;
	var0002 = 0x0000;
labelFunc072B_0512:
	if (!var0000) goto labelFunc072B_0534;
	UI_obj_sprite_effect(var0000, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc072B_0534:
	if (!var0001) goto labelFunc072B_0556;
	UI_obj_sprite_effect(var0001, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc072B_0556:
	if (!var0002) goto labelFunc072B_0578;
	UI_obj_sprite_effect(var0002, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc072B_0578:
	if (!(var0000 && (var0001 && var0002))) goto labelFunc072B_06AD;
	UI_set_item_frame(0xFE9C, 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	if (!(!gflags[0x02B1])) goto labelFunc072B_0692;
	var0011 = UI_create_new_object(0x00D1);
	if (!var0011) goto labelFunc072B_0692;
	UI_set_item_frame(var0011, 0x0014);
	UI_clear_item_flag(var0011, 0x0012);
	var0004 = UI_find_nearby(item, 0x02B0, 0x000A, 0x00B0);
	enum();
labelFunc072B_05D7:
	for (var0014 in var0004 with var0012 to var0013) attend labelFunc072B_05F6;
	var0015 = UI_get_object_position(var0014);
	UI_remove_item(var0014);
	goto labelFunc072B_05D7;
labelFunc072B_05F6:
	var0004 = UI_update_last_created(var0015);
	if (!var0004) goto labelFunc072B_060A;
	gflags[0x02B1] = true;
labelFunc072B_060A:
	UI_sprite_effect(0x0021, (var0015[0x0001] - 0x0003), (var0015[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, (var0015[0x0001] - 0x0004), (var0015[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, (var0015[0x0001] - 0x0003), (var0015[0x0002] - 0x0004), 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0043);
	Func097F(0xFE9C, "@The Eye of Order!@", 0x0005);
labelFunc072B_0692:
	gflags[0x0007] = true;
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x072B], 0x0014);
labelFunc072B_06AD:
	return;
}


