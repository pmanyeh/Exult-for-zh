#game "serpentisle"
// externs
extern var Func0930 0x930 (var var0000, var var0001, var var0002);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0931 0x931 (var var0000);
extern var Func0932 0x932 (var var0000);
extern void Func0937 0x937 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern void Func09AA 0x9AA ();

void Func07F9 object#(0x7F9) ()
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

	if (!(event == 0x0008)) goto labelFunc07F9_00D9;
	gflags[0x0083] = false;
	gflags[0x0007] = false;
	var0000 = Func0930(item, 0x0178, 0x000F);
	if (!(!var0000)) goto labelFunc07F9_002B;
	Func092F(item, 0x0004);
labelFunc07F9_002B:
	var0001 = UI_create_new_object(0x025F);
	if (!var0001) goto labelFunc07F9_00C5;
	UI_set_item_frame(var0001, 0x0006);
	var0002 = UI_get_object_position(var0000);
	if (!(!UI_update_last_created([(var0002[0x0001] + 0x0003), (var0002[0x0002] - 0x0001), var0002[0x0003]]))) goto labelFunc07F9_007B;
	Func092F(item, 0x0005);
labelFunc07F9_007B:
	if (!Func0908(var0000, 0x010E, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc07F9_00BE;
	Func0909(var0000, 0x01B1, 0x0000, 0x0001, 0x01B0, 0x0001, 0x0000, 0xFFFD, 0x0007);
	UI_play_sound_effect2(0x0020, var0000);
	goto labelFunc07F9_00C1;
labelFunc07F9_00BE:
	Func0903();
labelFunc07F9_00C1:
	gflags[0x0007] = true;
labelFunc07F9_00C5:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F9], 0x0001);
	return;
labelFunc07F9_00D9:
	if (!(event == 0x0009)) goto labelFunc07F9_016B;
	var0001 = UI_find_nearest(item, 0x025F, 0x000F);
	if (!var0001) goto labelFunc07F9_00FC;
	UI_remove_item(var0001);
labelFunc07F9_00FC:
	var0000 = Func0930(item, 0x010E, 0x000F);
	if (!(!var0000)) goto labelFunc07F9_0117;
	Func092F(item, 0x0006);
labelFunc07F9_0117:
	if (!Func0908(var0000, 0x0178, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc07F9_0163;
	Func0909(var0000, 0x01B0, 0x0001, 0x0001, 0x01B1, 0x0000, 0x0000, 0x0003, 0x0005);
	UI_play_sound_effect2(0x001F, var0000);
	Func0907(var0000, 0x0002);
	goto labelFunc07F9_0166;
labelFunc07F9_0163:
	Func0903();
labelFunc07F9_0166:
	Func0931(item);
	abort;
labelFunc07F9_016B:
	if (!(event == 0x000E)) goto labelFunc07F9_017A;
	Func092F(item, 0x0007);
labelFunc07F9_017A:
	if (!(event == 0x000A)) goto labelFunc07F9_01DA;
	var0004 = UI_find_nearby(0xFE9C, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc07F9_0196:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc07F9_01B5;
	if (!(UI_get_npc_id(var0007) == 0x0009)) goto labelFunc07F9_01B2;
	goto labelFunc07F9_01BC;
labelFunc07F9_01B2:
	goto labelFunc07F9_0196;
labelFunc07F9_01B5:
	Func092F(item, 0x0008);
labelFunc07F9_01BC:
	UI_clear_item_say(var0007);
	gflags[0x0007] = true;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FD], 0x0001);
labelFunc07F9_01DA:
	if (!(event == 0x000B)) goto labelFunc07F9_02AA;
	var0000 = Func0930(item, 0x0178, 0x0023);
	if (!(!var0000)) goto labelFunc07F9_01FD;
	Func092F(item, 0x0009);
labelFunc07F9_01FD:
	if (!Func0908(var0000, 0x010E, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc07F9_0240;
	Func0909(var0000, 0x01B1, 0x0000, 0x0001, 0x01B0, 0x0001, 0x0000, 0xFFFD, 0x0007);
	UI_play_sound_effect2(0x0020, var0000);
	goto labelFunc07F9_0243;
labelFunc07F9_0240:
	Func0903();
labelFunc07F9_0243:
	var0001 = UI_create_new_object(0x025F);
	if (!var0001) goto labelFunc07F9_0297;
	UI_set_item_frame(var0001, 0x0006);
	var0002 = UI_get_object_position(item);
	var0003 = UI_update_last_created([(var0002[0x0001] - 0x0009), (var0002[0x0002] - 0x0002), var0002[0x0003]]);
	if (!(!var0003)) goto labelFunc07F9_0297;
	Func092F(item, 0x000A);
labelFunc07F9_0297:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F9], 0x0001);
labelFunc07F9_02AA:
	if (!(event == 0x0002)) goto labelFunc07F9_047A;
	if (!gflags[0x0007]) goto labelFunc07F9_036C;
	gflags[0x0007] = false;
	var0001 = UI_find_nearest(item, 0x025F, 0x000F);
	var0008 = [0x0000, 0x0001, 0x0001, 0x0000];
	var0009 = [0x0000, 0x0001, 0x0000, 0x0001];
	var000A = [0xFFC1, 0xFFB1, 0xFFB6, 0xFFB9, 0xFF6A];
	enum();
labelFunc07F9_0304:
	for (var000D in var000A with var000B to var000C) attend labelFunc07F9_0354;
	if (!Func0932(var000D)) goto labelFunc07F9_0351;
	UI_set_alignment(var000D, 0x0000);
	var0003 = UI_get_npc_prop(var000D, 0x0003);
	var0003 = UI_set_npc_prop(var000D, 0x0003, (UI_get_npc_prop(var000D, 0x0000) - var0003));
	UI_run_schedule(var000D);
labelFunc07F9_0351:
	goto labelFunc07F9_0304;
labelFunc07F9_0354:
	Func0937(item, var0001, var0008, var0009, 0x0000, 0x07F9, item, 0x0009);
	return;
labelFunc07F9_036C:
	var000E = UI_find_nearby(item, 0x00E4, 0x001E, 0x0000);
	enum();
labelFunc07F9_037E:
	for (var0011 in var000E with var000F to var0010) attend labelFunc07F9_039D;
	if (!(UI_get_npc_id(var0011) == 0x0009)) goto labelFunc07F9_039A;
	goto labelFunc07F9_03A4;
labelFunc07F9_039A:
	goto labelFunc07F9_037E;
labelFunc07F9_039D:
	Func092F(item, 0x000B);
labelFunc07F9_03A4:
	var0012 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0001)) goto labelFunc07F9_03C5;
	UI_item_say(var0011, "@Have at 'em, men!@");
labelFunc07F9_03C5:
	if (!(var0012 == 0x0002)) goto labelFunc07F9_03D9;
	UI_item_say(var0011, "@Best of luck!@");
labelFunc07F9_03D9:
	if (!(var0012 == 0x0003)) goto labelFunc07F9_03ED;
	UI_item_say(var0011, "@In ya go!@");
labelFunc07F9_03ED:
	if (!(var0012 == 0x0004)) goto labelFunc07F9_0401;
	UI_item_say(var0011, "@Pray for mercy!@");
labelFunc07F9_0401:
	var0008 = [0x0000, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE];
	var0013 = 0xFFFF;
	var0001 = UI_find_nearest(item, 0x025F, 0x000F);
	Func0937(item, var0001, var0008, var0009, var0013, 0x07F9, item, 0x000D);
labelFunc07F9_047A:
	if (!(event == 0x000D)) goto labelFunc07F9_0658;
	var000A = [0xFFC1, 0xFFB1, 0xFFB6, 0xFFB9, 0xFF6A];
	enum();
labelFunc07F9_0498:
	for (var000D in var000A with var0014 to var0015) attend labelFunc07F9_05AA;
	if (!Func0932(var000D)) goto labelFunc07F9_05A7;
	var0016 = UI_get_npc_prop(var000D, 0x0003);
	var0003 = UI_set_npc_prop(var000D, 0x0003, (UI_get_npc_prop(var000D, 0x0000) - var0016));
	if (!gflags[0x0084]) goto labelFunc07F9_0589;
	if (!UI_get_npc_id(var000D)) goto labelFunc07F9_054C;
	UI_set_alignment(var000D, 0x0002);
	UI_set_schedule_type(var000D, 0x0000);
	UI_set_attack_mode(var000D, 0x0000);
	UI_set_opponent(var000D, item);
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc07F9_0539;
	UI_set_attack_mode(item, 0x0000);
	UI_set_opponent(item, var000D);
	UI_set_oppressor(item, var000D);
	UI_set_schedule_type(item, 0x001F);
	goto labelFunc07F9_0549;
labelFunc07F9_0539:
	UI_set_schedule_type(item, 0x0000);
	UI_set_opponent(item, var000D);
labelFunc07F9_0549:
	goto labelFunc07F9_0586;
labelFunc07F9_054C:
	UI_set_alignment(var000D, 0x0003);
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc07F9_0572;
	UI_set_opponent(var000D, item);
	UI_set_oppressor(var000D, item);
labelFunc07F9_0572:
	UI_set_attack_mode(var000D, 0x0000);
	UI_set_schedule_type(var000D, 0x0007);
labelFunc07F9_0586:
	goto labelFunc07F9_05A7;
labelFunc07F9_0589:
	UI_set_alignment(var000D, 0x0003);
	UI_set_schedule_type(var000D, 0x0000);
	UI_set_attack_mode(var000D, 0x0000);
labelFunc07F9_05A7:
	goto labelFunc07F9_0498;
labelFunc07F9_05AA:
	var0000 = Func0930(item, 0x010E, 0x000F);
	if (!(!var0000)) goto labelFunc07F9_05C5;
	Func092F(item, 0x000C);
labelFunc07F9_05C5:
	if (!Func0908(var0000, 0x0178, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc07F9_0611;
	Func0909(var0000, 0x01B0, 0x0001, 0x0001, 0x01B1, 0x0000, 0x0000, 0x0003, 0x0005);
	UI_play_sound_effect2(0x001F, var0000);
	Func0907(var0000, 0x0002);
	goto labelFunc07F9_0614;
labelFunc07F9_0611:
	Func0903();
labelFunc07F9_0614:
	var0001 = UI_find_nearest(item, 0x025F, 0x000A);
	if (!var0001) goto labelFunc07F9_062F;
	UI_remove_item(var0001);
labelFunc07F9_062F:
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc07F9_0641;
	Func09AA();
	goto labelFunc07F9_0658;
labelFunc07F9_0641:
	if (!(!gflags[0x0084])) goto labelFunc07F9_0650;
	UI_set_schedule_type(item, 0x0000);
labelFunc07F9_0650:
	UI_set_item_flag(item, 0x001D);
labelFunc07F9_0658:
	return;
}


