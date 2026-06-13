#game "serpentisle"
// externs
extern var Func099F 0x99F (var var0000, var var0001, var var0002);
extern void Func08AE 0x8AE ();
extern void Func09AA 0x9AA ();
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);

void Func04A9 object#(0x4A9) ()
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

	if (!(event == 0x0009)) goto labelFunc04A9_0131;
	UI_clear_item_say(0xFF57);
	var0000 = Func099F(0x034A, 0xFE99, 0x000F);
	var0001 = Func099F(0x034A, 0xFE99, 0x0008);
	if (!(var0000 || var0001)) goto labelFunc04A9_00CC;
	if (!(var0000 && var0001)) goto labelFunc04A9_004E;
	UI_item_say(0xFF57, "@Die, thief!@");
	goto labelFunc04A9_006B;
labelFunc04A9_004E:
	if (!var0000) goto labelFunc04A9_0061;
	UI_item_say(0xFF57, "@Thou shalt not steal my bloodspawn!@");
	goto labelFunc04A9_006B;
labelFunc04A9_0061:
	UI_item_say(0xFF57, "@I shan't reveal my secret!@");
labelFunc04A9_006B:
	UI_set_polymorph(0xFF57, 0x012E);
	gflags[0x0236] = false;
	gflags[0x0237] = true;
	UI_set_schedule_type(0xFF57, 0x0000);
	UI_set_alignment(0xFF57, 0x0003);
	var0002 = UI_get_object_position(0xFF57);
	UI_sprite_effect(0x0009, (var0002[0x0001] - 0x0001), (var0002[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	goto labelFunc04A9_0131;
labelFunc04A9_00CC:
	UI_item_say(0xFF57, "@Thou shalt not have the reagent!@");
	UI_set_polymorph(0xFF57, 0x01F2);
	gflags[0x0236] = true;
	gflags[0x0237] = false;
	UI_set_schedule_type(item, 0x000F);
	UI_set_alignment(item, 0x0000);
	var0002 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, (var0002[0x0001] - 0x0001), (var0002[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	Func08AE();
labelFunc04A9_0131:
	if (!(event == 0x000A)) goto labelFunc04A9_024F;
	var0003 = (UI_get_object_position(0xFF57) & (0xFE99 & 0x0006));
	var0004 = UI_find_nearby(var0003, 0x0113, 0x0001, 0x0010);
	if (!var0004) goto labelFunc04A9_024F;
	if (!(UI_get_item_quality(var0004) == 0x0064)) goto labelFunc04A9_023A;
	UI_item_say(item, "@Thou shalt not have my reagents!@");
	if (!gflags[0x0236]) goto labelFunc04A9_01A8;
	var0005 = UI_execute_usecode_array(item, [(byte)0x68, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0003, (byte)0x55, 0x04A9]);
	goto labelFunc04A9_01CD;
labelFunc04A9_01A8:
	var0005 = UI_execute_usecode_array(item, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x55, 0x04A9]);
labelFunc04A9_01CD:
	var0006 = UI_find_nearest(item, 0x00E9, 0x000A);
	if (!var0006) goto labelFunc04A9_0223;
	UI_set_item_frame(var0006, 0x0001);
	var0002 = UI_get_object_position(var0006);
	UI_sprite_effect(0x000D, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
labelFunc04A9_0223:
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFF57, 0x000F);
	goto labelFunc04A9_024F;
labelFunc04A9_023A:
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x04A9], 0x0001);
labelFunc04A9_024F:
	if (!(event == 0x000B)) goto labelFunc04A9_02AD;
	var0006 = UI_find_nearest(item, 0x00E9, 0x0005);
	if (!var0006) goto labelFunc04A9_02A3;
	var0002 = UI_get_object_position(var0006);
	UI_sprite_effect(0x0007, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
labelFunc04A9_02A3:
	UI_remove_npc(0xFF57);
	Func09AA();
labelFunc04A9_02AD:
	if (!(event == 0x0002)) goto labelFunc04A9_0333;
	if (!(UI_get_item_shape(item) == UI_get_item_shape(0xFF57))) goto labelFunc04A9_0330;
	var0003 = (UI_get_object_position(0xFF57) & (0xFE99 & 0x0000));
	var0004 = UI_find_nearby(var0003, 0x025F, 0x0014, 0x0010);
	if (!var0004) goto labelFunc04A9_032D;
	var0007 = 0xFFFF;
	var0008 = 0xFFFF;
	var0009 = 0xFFFD;
	Func090E(0xFF57, var0004, var0007, var0008, var0009, 0x04A9, UI_get_npc_object(0xFF57), 0x000B, false);
	UI_set_path_failure(0x04A9, item, 0x000B);
labelFunc04A9_032D:
	goto labelFunc04A9_0333;
labelFunc04A9_0330:
	Func08AE();
labelFunc04A9_0333:
	if (!(event == 0x0001)) goto labelFunc04A9_0343;
	UI_item_say(item, "@Leave me be!@");
labelFunc04A9_0343:
	if (!(event == 0x0007)) goto labelFunc04A9_03F6;
	if (!(gflags[0x0236] || gflags[0x0237])) goto labelFunc04A9_03CF;
	var0002 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, (var0002[0x0001] - 0x0001), (var0002[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0021);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0002[0x0002] = (var0002[0x0002] + 0x0001);
	var000A = UI_create_new_object(0x03D1);
	if (!var000A) goto labelFunc04A9_03CF;
	UI_set_item_frame(var000A, 0x0001);
	var0005 = UI_update_last_created(var0002);
labelFunc04A9_03CF:
	UI_set_polymorph(0xFF57, 0x0191);
	gflags[0x0236] = false;
	gflags[0x0237] = false;
	UI_set_alignment(item, 0x0000);
	UI_set_schedule_type(0xFE9C, 0x001F);
	Func08AE();
labelFunc04A9_03F6:
	if (!(event == 0x0008)) goto labelFunc04A9_042E;
	if (!gflags[0x0236]) goto labelFunc04A9_0411;
	UI_set_polymorph(0xFF57, 0x01F2);
	goto labelFunc04A9_042E;
labelFunc04A9_0411:
	if (!gflags[0x0237]) goto labelFunc04A9_0424;
	UI_set_polymorph(0xFF57, 0x012E);
	goto labelFunc04A9_042E;
labelFunc04A9_0424:
	UI_set_polymorph(0xFF57, 0x0191);
labelFunc04A9_042E:
	return;
}


