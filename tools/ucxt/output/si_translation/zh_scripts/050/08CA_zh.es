#game "serpentisle"
// externs
extern void Func09A3 0x9A3 (var var0000);
extern void Func09AA 0x9AA ();
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08CA 0x8CA ()
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

	if (!(event == 0x0003)) goto labelFunc08CA_019E;
	if (!(UI_get_item_quality(item) == 0x0001)) goto labelFunc08CA_0062;
	var0000 = UI_find_nearby(item, 0x0103, 0x0003, 0x0008);
	if (!var0000) goto labelFunc08CA_0062;
	UI_set_schedule_type(var0000, 0x000F);
	UI_set_alignment(var0000, 0x0000);
	UI_set_npc_id(var0000, 0x0002);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x59, 0x0006, (byte)0x6D, (byte)0x55, 0x07DF]);
labelFunc08CA_0062:
	if (!(UI_get_item_quality(item) == 0x000D)) goto labelFunc08CA_00DF;
	var0000 = UI_find_nearby(item, 0x0103, 0x0005, 0x0008);
	if (!var0000) goto labelFunc08CA_00DF;
	UI_remove_item(item);
	var0002 = (UI_get_object_position(var0000) & [0xFE99, 0x0015]);
	var0003 = UI_find_nearby(var0002, 0x0190, 0x0005, 0x0000);
	if (!var0003) goto labelFunc08CA_00CB;
	UI_clear_item_say(var0000);
	UI_item_say(var0000, "@She loved flowers so...@");
	goto labelFunc08CA_00DF;
labelFunc08CA_00CB:
	UI_item_say(var0000, "@If I had flowers...@");
	UI_set_alignment(var0000, 0x0000);
labelFunc08CA_00DF:
	if (!(UI_get_item_quality(item) == 0x0011)) goto labelFunc08CA_019E;
	var0000 = UI_find_nearby(item, 0x0103, 0x0014, 0x0008);
	if (!var0000) goto labelFunc08CA_019E;
	var0003 = UI_find_nearby(item, 0x0190, 0x000A, 0x0000);
	if (!var0003) goto labelFunc08CA_018A;
	var0004 = UI_find_nearby(item, 0x03E7, 0x000A, 0x0000);
	if (!var0004) goto labelFunc08CA_0187;
	UI_clear_item_say(var0000);
	UI_halt_scheduled(var0000);
	var0005 = UI_direction_from(var0000, 0xFE9C);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x52, "@I shall repay thy kindness.@", (byte)0x59, var0005]);
	var0001 = UI_execute_usecode_array(var0003, [(byte)0x27, 0x0012, (byte)0x55, 0x07DF]);
labelFunc08CA_0187:
	goto labelFunc08CA_019E;
labelFunc08CA_018A:
	UI_item_say(var0000, "@If I had flowers...@");
	UI_set_alignment(var0000, 0x0000);
labelFunc08CA_019E:
	if (!(event == 0x0002)) goto labelFunc08CA_03FE;
	if (!(UI_get_item_shape(item) == 0x0103)) goto labelFunc08CA_023F;
	var0006 = UI_die_roll(0x0001, 0x0005);
	if (!(var0006 == 0x0001)) goto labelFunc08CA_01CF;
	var0007 = "@Oh, my love.@";
labelFunc08CA_01CF:
	if (!(var0006 == 0x0002)) goto labelFunc08CA_01DF;
	var0007 = "@What have they done?@";
labelFunc08CA_01DF:
	if (!(var0006 == 0x0003)) goto labelFunc08CA_01EF;
	var0007 = "@They shall pay!@";
labelFunc08CA_01EF:
	if (!(var0006 == 0x0004)) goto labelFunc08CA_01FF;
	var0007 = "@I'll never forget thee.@";
labelFunc08CA_01FF:
	if (!(var0006 == 0x0005)) goto labelFunc08CA_020F;
	var0007 = "@Thy life was my life.@";
labelFunc08CA_020F:
	var0006 = UI_die_roll(0x0000, 0x000F);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, var0007, (byte)0x27, 0x000F, (byte)0x55, 0x07DF], (0x0014 + var0006));
labelFunc08CA_023F:
	if (!(UI_get_item_shape(item) == 0x0190)) goto labelFunc08CA_02AF;
	var0000 = UI_find_nearby(item, 0x0103, 0x0014, 0x0008);
	if (!var0000) goto labelFunc08CA_02AF;
	var0005 = UI_direction_from(0xFE9C, var0000);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0005]);
	UI_set_schedule_type(var0000, 0x000F);
	var0008 = [0x0A09, 0x055A, 0x0000];
	UI_si_path_run_usecode(var0000, var0008, 0x000A, var0000, 0x07DF, true);
	abort;
labelFunc08CA_02AF:
	if (!(UI_get_item_shape(item) == 0x0313)) goto labelFunc08CA_03B4;
	if (!(UI_get_item_quality(item) == 0x00A3)) goto labelFunc08CA_0334;
	var0000 = UI_find_nearby(item, 0x0103, 0x0005, 0x0008);
	if (!var0000) goto labelFunc08CA_0331;
	UI_play_sound_effect(0x0046);
	var0001 = UI_set_item_quality(item, 0x009D);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0003, (byte)0x64]);
	UI_item_say(var0000, "@Now I can rest!@");
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x07DF]);
labelFunc08CA_0331:
	goto labelFunc08CA_03B4;
labelFunc08CA_0334:
	var0000 = UI_find_nearby(item, 0x0103, 0x000F, 0x0008);
	if (!var0000) goto labelFunc08CA_03B4;
	var0008 = UI_get_object_position(var0000);
	var0009 = UI_get_item_frame_rot(var0000);
	Func09A3(var0000);
	var000A = UI_create_new_object2(0x0210, var0008);
	UI_set_schedule_type(var000A, 0x000F);
	UI_set_item_frame_rot(var000A, var0009);
	var0001 = UI_execute_usecode_array(var000A, [(byte)0x64, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x000A, (byte)0x55, 0x07DF]);
labelFunc08CA_03B4:
	if (!(UI_get_item_shape(item) == 0x0210)) goto labelFunc08CA_03FE;
	Func09AA();
	var0008 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	Func09A3(item);
	abort;
labelFunc08CA_03FE:
	if (!(event == 0x000A)) goto labelFunc08CA_0503;
	if (!(UI_get_item_shape(item) == 0x0103)) goto labelFunc08CA_0503;
	var0000 = UI_find_nearby(item, 0x0103, 0x001E, 0x0008);
	var0002 = (UI_get_object_position(item) & (0x00A3 & 0xFE99));
	var000B = UI_find_nearby(var0002, 0x0313, 0x001E, 0x0000);
	var0002 = (UI_get_object_position(item) & (0x0098 & 0xFE99));
	var000C = UI_find_nearby(var0002, 0x0313, 0x001E, 0x0000);
	if (!(var0000 && (var000B && var000C))) goto labelFunc08CA_0503;
	UI_clear_item_say(var0000);
	var0005 = UI_direction_from(var0000, var000B);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0007, (byte)0x52, "@I will fix this lever.@", (byte)0x59, var0005, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D]);
	var0001 = UI_execute_usecode_array(var000B, [(byte)0x27, 0x0014, (byte)0x55, 0x07DF]);
	var000D = 0x0001;
	var000E = 0xFFFD;
	var000F = 0x0000;
	Func090D(var000C, var000D, var000E, var000F, 0x07DF, var0000, 0x000B);
	UI_set_path_failure(0x07DF, var0000, 0x000B);
labelFunc08CA_0503:
	return;
}


