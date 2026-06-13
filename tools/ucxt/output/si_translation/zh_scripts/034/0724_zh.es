#game "serpentisle"
// externs
extern void Func0971 0x971 (var var0000);

void Func0724 object#(0x724) ()
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

	if (!(event == 0x0002)) goto labelFunc0724_000D;
	Func0971(item);
	abort;
labelFunc0724_000D:
	var0000 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var0000) goto labelFunc0724_050E;
	var0001 = UI_get_item_frame(var0000);
	if (!(!((var0001 == 0x0001) || (var0001 == 0x0002)))) goto labelFunc0724_0048;
	var0002 = true;
	goto labelFunc0724_0512;
labelFunc0724_0048:
	var0003 = UI_get_object_position(var0000);
	Func0971(var0000);
	var0004 = 0x0000;
	if (!(var0001 == 0x0001)) goto labelFunc0724_00BB;
	var0004 = 0x0231;
	if (!(gflags[0x02B4] == true)) goto labelFunc0724_00B7;
	if (!(gflags[0x02B5] == true)) goto labelFunc0724_00B0;
	UI_play_sound_effect(0x0052);
	UI_sprite_effect(0x0009, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
	goto labelFunc0724_00B4;
labelFunc0724_00B0:
	gflags[0x02B5] = true;
labelFunc0724_00B4:
	goto labelFunc0724_00BB;
labelFunc0724_00B7:
	gflags[0x02B4] = true;
labelFunc0724_00BB:
	if (!(var0001 == 0x0002)) goto labelFunc0724_0118;
	var0004 = 0x037F;
	if (!(gflags[0x02B6] == true)) goto labelFunc0724_0114;
	if (!(gflags[0x02B7] == true)) goto labelFunc0724_010D;
	UI_play_sound_effect(0x0052);
	UI_sprite_effect(0x0009, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
	goto labelFunc0724_0111;
labelFunc0724_010D:
	gflags[0x02B7] = true;
labelFunc0724_0111:
	goto labelFunc0724_0118;
labelFunc0724_0114:
	gflags[0x02B6] = true;
labelFunc0724_0118:
	var0005 = UI_create_new_object(var0004);
	if (!var0005) goto labelFunc0724_0153;
	UI_clear_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created(var0003);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0724], 0x000C);
labelFunc0724_0153:
	var0007 = UI_get_item_quality(item);
	var0006 = UI_set_item_quality(item, (var0007 + 0x0001));
	var0007 = (var0007 + 0x0001);
	var0008 = 0x0000;
	if (!(var0007 == 0x0004)) goto labelFunc0724_0255;
	var0009 = [0x0683, 0x0687, 0x068B, 0x068F, 0x0683, 0x0687, 0x068B, 0x068F];
	var000A = [0x0083, 0x0083, 0x0083, 0x0083, 0x0087, 0x0087, 0x0087, 0x0087];
	var000B = [0x0008, 0x0009, 0x0009, 0x0009, 0x000A, 0x000B, 0x000B, 0x000B];
	UI_play_sound_effect(0x0082);
	UI_sprite_effect(0x001A, 0x0686, 0x0082, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0724_01FE:
	if (!(var0008 < 0x0008)) goto labelFunc0724_0255;
	var000C = UI_create_new_object(0x00A0);
	var0008 = (var0008 + 0x0001);
	if (!var000C) goto labelFunc0724_0252;
	UI_set_item_frame(var000C, var000B[var0008]);
	UI_clear_item_flag(var000C, 0x0012);
	var0006 = UI_update_last_created([var0009[var0008], var000A[var0008], 0x0000]);
labelFunc0724_0252:
	goto labelFunc0724_01FE;
labelFunc0724_0255:
	if (!(var0007 == 0x0003)) goto labelFunc0724_031E;
	var0009 = [0x0685, 0x0689, 0x068D, 0x0685, 0x0689, 0x068D];
	var000A = [0x0083, 0x0083, 0x0083, 0x0087, 0x0087, 0x0087];
	var000B = [0x0008, 0x0009, 0x0009, 0x000A, 0x000B, 0x000B];
	UI_play_sound_effect(0x0082);
	UI_sprite_effect(0x0007, 0x0686, 0x0082, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0724_02C7:
	if (!(var0008 < 0x0006)) goto labelFunc0724_031E;
	var000C = UI_create_new_object(0x00A0);
	var0008 = (var0008 + 0x0001);
	if (!var000C) goto labelFunc0724_031B;
	UI_set_item_frame(var000C, var000B[var0008]);
	UI_clear_item_flag(var000C, 0x0012);
	var0006 = UI_update_last_created([var0009[var0008], var000A[var0008], 0x0001]);
labelFunc0724_031B:
	goto labelFunc0724_02C7;
labelFunc0724_031E:
	if (!(var0007 == 0x0002)) goto labelFunc0724_03D5;
	var0009 = [0x0687, 0x0687, 0x068B, 0x068B];
	var000A = [0x0083, 0x0087, 0x0083, 0x0087];
	var000B = [0x0008, 0x000A, 0x0009, 0x000B];
	UI_play_sound_effect(0x0082);
	UI_sprite_effect(0x001A, 0x0686, 0x0082, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0724_037E:
	if (!(var0008 < 0x0004)) goto labelFunc0724_03D5;
	var000C = UI_create_new_object(0x00A0);
	var0008 = (var0008 + 0x0001);
	if (!var000C) goto labelFunc0724_03D2;
	UI_set_item_frame(var000C, var000B[var0008]);
	UI_clear_item_flag(var000C, 0x0012);
	var0006 = UI_update_last_created([var0009[var0008], var000A[var0008], 0x0002]);
labelFunc0724_03D2:
	goto labelFunc0724_037E;
labelFunc0724_03D5:
	if (!(var0007 == 0x0001)) goto labelFunc0724_047A;
	var0009 = [0x0689, 0x0689];
	var000A = [0x0083, 0x0087];
	var000B = [0x0008, 0x000A];
	UI_play_sound_effect(0x0082);
	UI_sprite_effect(0x0007, 0x0686, 0x0082, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0724_0423:
	if (!(var0008 < 0x0002)) goto labelFunc0724_047A;
	var000C = UI_create_new_object(0x00A0);
	var0008 = (var0008 + 0x0001);
	if (!var000C) goto labelFunc0724_0477;
	UI_set_item_frame(var000C, var000B[var0008]);
	UI_clear_item_flag(var000C, 0x0012);
	var0006 = UI_update_last_created([var0009[var0008], var000A[var0008], 0x0003]);
labelFunc0724_0477:
	goto labelFunc0724_0423;
labelFunc0724_047A:
	if (!(var0007 == 0x0004)) goto labelFunc0724_050B;
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, 0x0686, 0x0082, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000D = UI_create_new_object(0x00E9);
	if (!var000D) goto labelFunc0724_04D1;
	UI_set_item_frame(var000D, 0x0007);
	var0006 = UI_update_last_created([0x0689, 0x0085, 0x0004]);
labelFunc0724_04D1:
	var000D = UI_create_new_object(0x02C3);
	if (!var000D) goto labelFunc0724_050B;
	UI_set_item_frame(var000D, 0x0003);
	var0006 = UI_set_item_quality(var000D, 0x007B);
	var0006 = UI_update_last_created([0x0688, 0x0084, 0x0005]);
labelFunc0724_050B:
	goto labelFunc0724_0512;
labelFunc0724_050E:
	var0002 = true;
labelFunc0724_0512:
	if (!var0002) goto labelFunc0724_059E;
	var0003 = UI_get_object_position(item);
	var000E = UI_die_roll(0x0003, 0x000A);
	var000F = UI_die_roll(0x0000, 0x0001);
	if (!(var000F == 0x0000)) goto labelFunc0724_054E;
	var000E = (var000E * 0xFFFF);
labelFunc0724_054E:
	var0006 = UI_set_last_created(var0000);
	if (!var0006) goto labelFunc0724_057B;
	var0006 = UI_update_last_created([(var0003[0x0001] + var000E), var0003[0x0002], 0x0000]);
labelFunc0724_057B:
	UI_sprite_effect(0x0015, (var0003[0x0001] + var000E), var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0724_059E:
	return;
}


