#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);

void Func07ED object#(0x7ED) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!((event == 0x0002) && (gflags[0x0008] == true))) goto labelFunc07ED_0135;
	UI_set_weather(0x0000);
	gflags[0x0008] = false;
	UI_init_conversation();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("\"Hero, listen to me before the fires consume me! Beware of thy friends -- they shall only bring destruction upon thee!\"");
	say();
	UI_end_conversation();
	Func097F(0xFF31, "@Vile witch!@", 0x0007);
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x001B, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0001 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x000C, (byte)0x52, "@Thou wilt pay!@", (byte)0x6C, (byte)0x61, (byte)0x59, (byte)0x32, (byte)0x55, 0x07ED], 0x0006);
	var0002 = 0x0000;
labelFunc07ED_00A9:
	if (!(var0002 < 0x0008)) goto labelFunc07ED_012C;
	var0003 = UI_die_roll(0xFFFC, 0x0004);
	var0004 = UI_die_roll(0xFFFC, 0x0004);
	var0005 = UI_create_new_object(0x0121);
	if (!var0005) goto labelFunc07ED_011F;
	var0006 = UI_die_roll(0x0000, 0x0005);
	UI_set_item_frame(var0005, var0006);
	UI_clear_item_flag(var0005, 0x0012);
	var0001 = UI_update_last_created([(var0000[0x0001] + var0003), (var0000[0x0002] + var0004), 0x0000]);
labelFunc07ED_011F:
	var0002 = (var0002 + 0x0001);
	goto labelFunc07ED_00A9;
labelFunc07ED_012C:
	gflags[0x0008] = false;
	gflags[0x0009] = true;
	abort;
labelFunc07ED_0135:
	if (!((event == 0x0002) && (gflags[0x0009] == true))) goto labelFunc07ED_01F8;
	var0005 = UI_create_new_object(0x025F);
	if (!var0005) goto labelFunc07ED_01F8;
	UI_clear_item_flag(var0005, 0x0012);
	var0000 = UI_get_object_position(0xFF2D);
	var0000[0x0001] = (var0000[0x0001] + 0x0008);
	var0000[0x0002] = (var0000[0x0002] + 0x0003);
	var0001 = UI_update_last_created(var0000);
	var0007 = UI_get_distance(0xFF2D, var0005);
	Func090E(0xFF2D, var0005, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, true);
	Func090E(0xFF31, var0005, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, true);
	var0001 = UI_delayed_execute_usecode_array(var0005, [(byte)0x55, 0x07ED], (var0007 - 0x0002));
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	abort;
labelFunc07ED_01F8:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc07ED_02A2;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_set_schedule_type(0xFF31, 0x000F);
	var0001 = UI_execute_usecode_array(0xFF31, [(byte)0x52, "@Aaahhh!@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6E]);
	var0001 = UI_execute_usecode_array(0xFF2D, [(byte)0x27, 0x0008, (byte)0x59, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x53, (byte)0x36, (byte)0x6C, (byte)0x6D, (byte)0x61, (byte)0x55, 0x07EE]);
	abort;
labelFunc07ED_02A2:
	return;
}


