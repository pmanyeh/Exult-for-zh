#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0940 0x940 (var var0000, var var0001);
extern void Func093E 0x93E (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06BC object#(0x6BC) ()
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

	var0000 = Func09A0(0x0002, 0x0001);
	var0001 = 0x0006;
	if (!(event == 0x0003)) goto labelFunc06BC_008A;
	if (!gflags[0x0190]) goto labelFunc06BC_0025;
	UI_remove_item(item);
labelFunc06BC_0025:
	var0002 = UI_get_item_quality(item);
	if (!((!gflags[0x018C]) && Func0942(0xFFFD))) goto labelFunc06BC_008A;
	UI_play_music(0x0017, Func09A0(0x0005, 0x0001));
	var0003 = UI_set_item_quality(var0000, 0x0000);
	gflags[0x018C] = true;
	UI_set_weather(0x0002);
	var0004 = Func0992(0x0001, "@Looks like a storm coming...@", 0x0000, true);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x001E);
labelFunc06BC_008A:
	if (!(event == 0x0002)) goto labelFunc06BC_043E;
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 < var0001)) goto labelFunc06BC_015F;
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x000A);
	var0003 = UI_set_item_quality(var0000, (var0002 + 0x0001));
	var0005 = Func0940(UI_get_object_position(0xFE9C), 0x000F);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0015, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0029, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func093E(var0005);
	var0006 = ("@Run!@" & ("@'Tis a magic storm!@" & ("@Help!@" & ("@That almost hit me!@" & ("@Whoa!@" & "@I wish I were home!@")))));
	var0004 = Func0992(0x0001, var0006[UI_get_random(UI_get_array_size(var0006))], 0x0000, true);
	abort;
labelFunc06BC_015F:
	if (!(var0002 == var0001)) goto labelFunc06BC_028D;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0007 = UI_create_new_object(0x02B4);
	if (!var0007) goto labelFunc06BC_0275;
	UI_set_item_frame(var0007, 0x0002);
	var0008 = UI_get_object_position(0xFFFD);
	var0008[0x0002] = (var0008[0x0002] + 0x0001);
	var0003 = UI_update_last_created(var0008);
	if (!var0003) goto labelFunc06BC_025B;
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_find_direction(0xFFFD, var0007);
	var0003 = UI_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x27, 0x0001, (byte)0x59, var0009, (byte)0x52, "@Look, Avatar!@", (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0009, (byte)0x55, 0x06BC]);
	var0003 = UI_set_item_quality(var0000, (var0002 + 0x0001));
	UI_set_weather(0x0000);
	goto labelFunc06BC_0272;
labelFunc06BC_025B:
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x000A);
labelFunc06BC_0272:
	goto labelFunc06BC_028C;
labelFunc06BC_0275:
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x000A);
labelFunc06BC_028C:
	abort;
labelFunc06BC_028D:
	if (!(var0002 == (var0001 + 0x0001))) goto labelFunc06BC_0323;
	var0007 = UI_find_nearby(0xFFFD, 0x02B4, 0x0019, 0x0000);
	if (!var0007) goto labelFunc06BC_02D4;
	UI_remove_item(var0007);
	var0003 = Func099B(0xFFFD, 0x0001, 0x02B4, 0x0000, 0x0002, 0x0000, false);
labelFunc06BC_02D4:
	var0003 = UI_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x61]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x0003);
	var0003 = UI_set_item_quality(var0000, (var0002 + 0x0001));
	UI_clear_item_flag(0xFE9C, 0x0010);
	Func097F(0xFFFD, "@A lute!@", 0x0000);
labelFunc06BC_0323:
	if (!(var0002 == (var0001 + 0x0002))) goto labelFunc06BC_03A2;
	var0003 = UI_set_item_quality(var0000, (var0002 + 0x0001));
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043A], 0x002D);
	var0003 = UI_approach_avatar(0xFFD0, 0x0078, 0x0028);
	if (!var0003) goto labelFunc06BC_038B;
	UI_set_schedule_type(0xFFD0, 0x0009);
	Func097F(0xFFD0, "@The storm is over!@", 0x0000);
labelFunc06BC_038B:
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x000A);
labelFunc06BC_03A2:
	if (!(var0002 == (var0001 + 0x0003))) goto labelFunc06BC_0404;
	var0003 = UI_set_item_quality(var0000, (var0002 + 0x0001));
	var0003 = UI_approach_avatar(0xFFCB, 0x0078, 0x0028);
	if (!var0003) goto labelFunc06BC_03ED;
	UI_set_schedule_type(0xFFCB, 0x0009);
	Func097F(0xFFCB, "@All is safe now!@", 0x0000);
labelFunc06BC_03ED:
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06BC], 0x000A);
labelFunc06BC_0404:
	if (!(var0002 == (var0001 + 0x0004))) goto labelFunc06BC_043E;
	var0003 = UI_approach_avatar(0xFFCA, 0x0078, 0x0028);
	if (!var0003) goto labelFunc06BC_043E;
	UI_set_schedule_type(0xFFCA, 0x0009);
	Func097F(0xFFCA, "@Praise Beauty!@", 0x0000);
labelFunc06BC_043E:
	return;
}


