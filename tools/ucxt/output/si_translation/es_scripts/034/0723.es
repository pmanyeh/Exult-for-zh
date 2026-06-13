#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0723 object#(0x723) ()
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

	var0000 = UI_get_item_quality(item);
	if (!(gflags[0x0007] && gflags[0x02B2])) goto labelFunc0723_006E;
	var0001 = UI_find_nearby(item, 0x00E8, 0x0014, 0x0000);
	enum();
labelFunc0723_0024:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0723_006E;
	var0005 = UI_get_object_position(var0004);
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00E0);
	if (!var0006) goto labelFunc0723_006B;
	UI_set_item_frame(var0006, UI_die_roll(0x0008, 0x000B));
	var0006 = UI_update_last_created(var0005);
labelFunc0723_006B:
	goto labelFunc0723_0024;
labelFunc0723_006E:
	if (!((var0000 == 0x0000) && (gflags[0x02B2] == false))) goto labelFunc0723_026A;
	var0007 = UI_find_nearby(item, 0x00D1, 0x0002, 0x0000);
	if (!var0007) goto labelFunc0723_026A;
	var0008 = UI_get_item_frame(var0007);
	if (!(var0008 == 0x0016)) goto labelFunc0723_00FD;
	UI_set_item_frame(item, 0x0017);
	Func097F(0xFE9C, "@'Tis working...@", 0x0004);
	UI_obj_sprite_effect(item, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x27, 0x0014, (byte)0x46, 0x0015]);
	UI_play_sound_effect(0x0068);
	var0008 = 0x0017;
labelFunc0723_00FD:
	if (!(var0008 != 0x0017)) goto labelFunc0723_011E;
	Func097F(0xFE9C, "@That did naught!@", 0x0004);
	UI_play_sound_effect(0x0030);
	abort;
	goto labelFunc0723_026A;
labelFunc0723_011E:
	gflags[0x02B2] = true;
	gflags[0x0007] = true;
	var0001 = UI_find_nearby(item, 0x00E8, 0x0014, 0x0000);
	if (!var0001) goto labelFunc0723_01C8;
	enum();
labelFunc0723_013E:
	for (var0004 in var0001 with var0009 to var000A) attend labelFunc0723_01C8;
	var0005 = UI_get_object_position(var0004);
	var000B = 0x0004;
labelFunc0723_0159:
	if (!(var000B >= 0x0001)) goto labelFunc0723_01C5;
	var000C = UI_create_new_object(0x0289);
	if (!var000C) goto labelFunc0723_01B8;
	UI_set_item_frame(var000C, 0x0005);
	var000D = UI_die_roll(0xFFFC, 0x0004);
	var000E = UI_die_roll(0xFFFC, 0x0004);
	var0006 = UI_update_last_created([(var0005[0x0001] + var000D), (var0005[0x0002] + var000E), 0x0000]);
labelFunc0723_01B8:
	var000B = (var000B - 0x0001);
	goto labelFunc0723_0159;
labelFunc0723_01C5:
	goto labelFunc0723_013E;
labelFunc0723_01C8:
	var0001 = UI_find_nearby(item, 0x00E8, 0x0014, 0x0000);
	enum();
labelFunc0723_01DA:
	for (var0004 in var0001 with var000F to var0010) attend labelFunc0723_024E;
	var0005 = UI_get_object_position(var0004);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, var0005[0x0001], (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x46, 0x0001, (byte)0x27, 0x0001, (byte)0x46, 0x0002, (byte)0x27, 0x0001, (byte)0x46, 0x0003, (byte)0x27, 0x0001, (byte)0x46, 0x0004]);
	goto labelFunc0723_01DA;
labelFunc0723_024E:
	UI_play_sound_effect(0x005F);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0723], 0x000C);
labelFunc0723_026A:
	if (!((var0000 == 0x0001) && (gflags[0x02B3] == false))) goto labelFunc0723_0378;
	var0001 = UI_find_nearby(item, 0x0289, 0x0001, 0x0000);
	if (!var0001) goto labelFunc0723_0378;
	var0008 = UI_get_item_frame(var0001);
	if (!(var0008 == 0x0005)) goto labelFunc0723_0378;
	var0005 = [0x06D9, 0x007A, 0x0000];
	var0011 = 0x0000;
labelFunc0723_02BA:
	if (!(var0011 < 0x0008)) goto labelFunc0723_0374;
	var0012 = UI_create_new_object(0x0184);
	if (!var0012) goto labelFunc0723_0367;
	UI_set_item_frame(var0012, 0x000A);
	var0006 = UI_update_last_created([var0005[0x0001], (var0005[0x0002] + var0011), var0005[0x0003]]);
	var0006 = UI_create_new_object(0x037F);
	if (!var0006) goto labelFunc0723_032F;
	var0006 = UI_update_last_created([(var0005[0x0001] + 0x0002), (var0005[0x0002] + var0011), 0x0000]);
labelFunc0723_032F:
	var0006 = UI_create_new_object(0x037F);
	if (!var0006) goto labelFunc0723_0360;
	var0006 = UI_update_last_created([(var0005[0x0001] - 0x0004), (var0005[0x0002] + var0011), 0x0000]);
labelFunc0723_0360:
	UI_play_sound_effect(0x0027);
labelFunc0723_0367:
	var0011 = (var0011 + 0x0001);
	goto labelFunc0723_02BA;
labelFunc0723_0374:
	gflags[0x02B3] = true;
labelFunc0723_0378:
	return;
}


