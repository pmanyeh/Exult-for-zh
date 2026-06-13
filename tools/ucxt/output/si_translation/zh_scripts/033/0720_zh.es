#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0720 object#(0x720) ()
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

	if (!(!gflags[0x02B8])) goto labelFunc0720_0008;
	abort;
labelFunc0720_0008:
	if (!(event == 0x0002)) goto labelFunc0720_00D6;
	var0000 = UI_get_object_position(item);
	var0001 = UI_die_roll(0xFFFD, 0x0003);
	var0002 = UI_die_roll(0xFFFD, 0x0003);
	UI_sprite_effect(0x0011, (var0000[0x0001] + var0001), (var0000[0x0002] + var0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc0720_00D6:
	if (!((event == 0x000A) || (event == 0x000E))) goto labelFunc0720_0198;
	Func09AA();
	var0003 = UI_find_nearby(item, 0x02E7, 0x002D, 0x0000);
	var0004 = 0x0000;
labelFunc0720_00FE:
	if (!((var0004 < 0x000A) && var0003)) goto labelFunc0720_014C;
	var0005 = UI_die_roll(0x0002, 0x0004);
	event = 0x0002;
	var0006 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x0720], (var0004 * var0005));
	var0004 = (var0004 + 0x0001);
	UI_play_sound_effect(0x0074);
	goto labelFunc0720_00FE;
labelFunc0720_014C:
	var0007 = Func09A0(0x0000, 0x0002);
	if (!var0007) goto labelFunc0720_0175;
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x02E7], 0x0046);
labelFunc0720_0175:
	UI_set_item_frame(var0003, 0x0006);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_schedule_type(0xFE9C, 0x001F);
	abort;
labelFunc0720_0198:
	var0008 = UI_find_nearby(item, 0xFE99, 0x0001, 0x0000);
	var0009 = false;
	var000A = false;
	var000B = [0x0382, 0x033D, 0x039F, 0x01CF, 0x02D4, 0x02E7, 0x0184, 0x03F8, 0x03E0, 0x00D1, 0x03AD];
	var000C = false;
	enum();
labelFunc0720_01DD:
	for (var000F in var0008 with var000D to var000E) attend labelFunc0720_02B4;
	var0010 = UI_get_item_shape(var000F);
	if (!(!(var0010 in var000B))) goto labelFunc0720_0207;
	var0011 = var000F;
	var000C = true;
labelFunc0720_0207:
	if (!(var0010 == 0x00D1)) goto labelFunc0720_02B1;
	var0012 = UI_get_item_frame(var000F);
	if (!((var0012 == 0x0013) || (var0012 == 0x0014))) goto labelFunc0720_02B1;
	if (!(var0012 == 0x0013)) goto labelFunc0720_026F;
	var0009 = true;
	var0000 = UI_get_object_position(var000F);
	UI_sprite_effect(0x0007, var0000[0x0001], (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
labelFunc0720_026F:
	if (!(var0012 == 0x0014)) goto labelFunc0720_02B1;
	var000A = true;
	var0000 = UI_get_object_position(var000F);
	UI_sprite_effect(0x001A, var0000[0x0001], (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
labelFunc0720_02B1:
	goto labelFunc0720_01DD;
labelFunc0720_02B4:
	if (!var000C) goto labelFunc0720_03D8;
	var0007 = Func09A0(0x0000, 0x0001);
	if (!var0007) goto labelFunc0720_02E0;
	var0006 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0798]);
labelFunc0720_02E0:
	var0001 = UI_die_roll(0xFFF1, 0x000F);
	var0002 = UI_die_roll(0x0008, 0x000F);
	var0000 = UI_get_object_position(item);
	var0006 = UI_set_last_created(var0011);
	if (!var0006) goto labelFunc0720_03D7;
	var0006 = UI_update_last_created([(var0000[0x0001] + var0001), (var0000[0x0002] + var0002), var0000[0x0003]]);
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
	var0013 = UI_get_party_list();
	var0014 = 0x0003;
	enum();
labelFunc0720_0389:
	for (var0017 in var0013 with var0015 to var0016) attend labelFunc0720_03D7;
	var0006 = UI_delayed_execute_usecode_array(var0017, [(byte)0x23, (byte)0x55, 0x060F], var0014);
	UI_play_sound_effect(0x0074);
	Func097F(var0017, "@Yowww!@", var0014);
	var0014 = (var0014 + 0x0007);
	Func097F(0xFE9C, "@That was wrong...@", 0x0014);
	goto labelFunc0720_0389;
labelFunc0720_03D7:
	abort;
labelFunc0720_03D8:
	if (!(var0009 && var000A)) goto labelFunc0720_0424;
	Func097F(0xFE9C, "@That did it!@", 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0018 = [0x068B, 0x0015, 0x0002];
	UI_si_path_run_usecode(0xFE9C, var0018, 0x000A, item, 0x0720, true);
	UI_set_path_failure(0x0720, item, 0x000A);
labelFunc0720_0424:
	return;
}


