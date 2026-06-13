#game "serpentisle"
// externs
extern var Func09B9 0x9B9 (var var0000, var var0001);

void Func06E9 object#(0x6E9) ()
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

	if (!(event == 0x0003)) goto labelFunc06E9_01F2;
	var0000 = UI_find_nearby(item, 0x00C8, 0x0082, 0x0010);
	enum();
labelFunc06E9_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06E9_005B;
	var0004 = UI_get_item_frame(var0003);
	if (!(((var0004 > 0x0002) && (var0004 < 0x0007)) || ((var0004 > 0x0008) && (var0004 < 0x000D)))) goto labelFunc06E9_0058;
	UI_remove_item(var0003);
labelFunc06E9_0058:
	goto labelFunc06E9_001A;
labelFunc06E9_005B:
	var0005 = UI_get_object_position(item);
	var0006 = 0x0000;
	UI_play_sound_effect(0x002C);
labelFunc06E9_0070:
	if (!(var0006 < 0x000E)) goto labelFunc06E9_0121;
	var0007 = UI_die_roll(0x0001, 0x0002);
	if (!(UI_die_roll(0x0000, 0x0001) == 0x0000)) goto labelFunc06E9_00A2;
	var0007 = (var0007 * 0xFFFF);
labelFunc06E9_00A2:
	var0008 = (var0006 + var0007);
	var0009 = UI_create_new_object(0x037F);
	if (!var0009) goto labelFunc06E9_00E0;
	UI_set_item_flag(var0009, 0x0012);
	var000A = UI_update_last_created(Func09B9(var0005[0x0001], (var0005[0x0002] + var0008)));
labelFunc06E9_00E0:
	var000B = UI_create_new_object(0x037F);
	if (!var000B) goto labelFunc06E9_0114;
	UI_set_item_flag(var000B, 0x0012);
	var000A = UI_update_last_created(Func09B9(var0005[0x0001], (var0005[0x0002] - var0008)));
labelFunc06E9_0114:
	var0006 = (var0006 + 0x0001);
	goto labelFunc06E9_0070;
labelFunc06E9_0121:
	var0006 = 0x0000;
	UI_play_sound_effect(0x002C);
labelFunc06E9_012E:
	if (!(var0006 < 0x000F)) goto labelFunc06E9_01ED;
	var0005 = UI_get_object_position(item);
	var000C = UI_die_roll(0x0001, 0x0008);
	var000D = UI_die_roll(0x0001, 0x0008);
	if (!(UI_die_roll(0x0000, 0x0001) == 0x0000)) goto labelFunc06E9_0175;
	var000C = (var000C * 0xFFFF);
labelFunc06E9_0175:
	if (!(UI_die_roll(0x0000, 0x0001) == 0x0000)) goto labelFunc06E9_0190;
	var000D = (var000D * 0xFFFF);
labelFunc06E9_0190:
	var0005[0x0001] = (var0005[0x0001] + var000C);
	var0005[0x0002] = (var0005[0x0002] + var000D);
	var0009 = UI_create_new_object(0x037F);
	if (!var0009) goto labelFunc06E9_01E0;
	UI_set_item_flag(var0009, 0x0012);
	var000A = UI_update_last_created(Func09B9(var0005[0x0001], var0005[0x0002]));
labelFunc06E9_01E0:
	var0006 = (var0006 + 0x0001);
	goto labelFunc06E9_012E;
labelFunc06E9_01ED:
	UI_remove_item(item);
labelFunc06E9_01F2:
	return;
}


