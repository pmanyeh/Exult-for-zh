#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0739 object#(0x739) ()
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

	if (!(event == 0x000E)) goto labelFunc0739_002F;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	Func097F(0xFE9C, "@I can do this...@", 0x0000);
	Func097F(0xFE9C, "@I changed my mind...@", 0x0010);
	abort;
labelFunc0739_002F:
	if (!(event == 0x0000)) goto labelFunc0739_0061;
	UI_si_path_run_usecode(0xFFB5, [0x0339, 0x08C4, 0x0000], 0x0003, 0xFFB5, 0x0739, true);
	Func097F(0xFE9C, "@To the test!@", 0x0000);
	abort;
labelFunc0739_0061:
	if (!(event == 0x0007)) goto labelFunc0739_0087;
	UI_si_path_run_usecode(0xFE9C, [0x0337, 0x08D7, 0x0000], 0x0000, 0xFE9C, 0x0739, true);
	abort;
labelFunc0739_0087:
	if (!(event == 0x0003)) goto labelFunc0739_00D5;
	UI_si_path_run_usecode(0xFE9C, [0x0337, 0x08C1, 0x0000], 0x000A, 0xFE9C, 0x0739, true);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0006]);
	UI_set_schedule_type(0xFFB5, 0x000A);
	Func097F(0xFFB5, "@To the test!@", 0x0000);
	abort;
labelFunc0739_00D5:
	if (!(event == 0x000A)) goto labelFunc0739_014C;
	var0001 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x0000);
	enum();
labelFunc0739_00F1:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0739_012A;
	var0005 = UI_get_object_position(var0004);
	UI_remove_item(var0004);
	UI_play_sound_effect(0x0020);
	var0006 = Func09AB(0x0178, 0x000E, 0x0048, true, var0005);
	goto labelFunc0739_00F1;
labelFunc0739_012A:
	Func097F(0xFFB5, "@heh, heh...@", 0x0000);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0739], 0x0003);
	abort;
labelFunc0739_014C:
	if (!(event == 0x0002)) goto labelFunc0739_0171;
	UI_si_path_run_usecode(0xFE9C, [0x0337, 0x08BA, 0x0000], 0x000B, 0xFE9C, 0x0739, true);
labelFunc0739_0171:
	if (!(event == 0x000B)) goto labelFunc0739_020B;
	var0001 = UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x0000);
	enum();
labelFunc0739_018D:
	for (var0004 in var0001 with var0007 to var0008) attend labelFunc0739_01EE;
	if (!(UI_get_item_quality(var0004) == 0x0048)) goto labelFunc0739_01D1;
	var0005 = UI_get_object_position(var0004);
	UI_remove_item(var0004);
	UI_play_sound_effect(0x001F);
	var0006 = Func09AB(0x010E, 0x000E, 0x0048, false, var0005);
labelFunc0739_01D1:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	Func097F(0xFE9C, "@I have a bad feeling...@", 0x0007);
	goto labelFunc0739_018D;
labelFunc0739_01EE:
	UI_si_path_run_usecode(0xFE9C, [0x0337, 0x08C1, 0x0000], 0x000B, 0xFE9C, 0x0739, true);
labelFunc0739_020B:
	return;
}


