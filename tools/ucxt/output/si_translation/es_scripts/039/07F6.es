#game "serpentisle"
void Func07F6 object#(0x7F6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc07F6_00DA;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x025F, 0x001E, 0x0010);
	if (!var0001) goto labelFunc07F6_00D5;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0002 = UI_get_distance(item, var0001);
	var0003 = UI_get_object_position(var0001);
	UI_si_path_run_usecode(0xFE9C, var0003, 0x000A, var0001, 0x07F6, false);
	if (!(var0000 == 0x0005)) goto labelFunc07F6_0087;
	var0004 = UI_delayed_execute_usecode_array(0xFF4E, [(byte)0x55, 0x07F6], (var0002 + 0x000A));
	gflags[0x0203] = true;
labelFunc07F6_0087:
	if (!(var0000 == 0x0006)) goto labelFunc07F6_00AE;
	var0004 = UI_delayed_execute_usecode_array(0xFF4D, [(byte)0x55, 0x07F6], (var0002 + 0x000A));
	gflags[0x0204] = true;
labelFunc07F6_00AE:
	if (!(var0000 == 0x0007)) goto labelFunc07F6_00D5;
	var0004 = UI_delayed_execute_usecode_array(0xFF4C, [(byte)0x55, 0x07F6], (var0002 + 0x000A));
	gflags[0x0205] = true;
labelFunc07F6_00D5:
	gflags[0x0007] = true;
	abort;
labelFunc07F6_00DA:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07F6_0139;
	gflags[0x0007] = false;
	UI_set_schedule_type(item, 0x0003);
	if (!(UI_get_npc_number(item) == 0xFF4E)) goto labelFunc07F6_010B;
	UI_item_say(0xFF4E, "@Avatar! Avatar!@");
	abort;
labelFunc07F6_010B:
	if (!(UI_get_npc_number(item) == 0xFF4D)) goto labelFunc07F6_0122;
	UI_item_say(0xFF4D, "@Avatar, thou hast returned!@");
	abort;
labelFunc07F6_0122:
	if (!(UI_get_npc_number(item) == 0xFF4C)) goto labelFunc07F6_0139;
	UI_item_say(0xFF4C, "@Art thou ready, Avatar?@");
	abort;
labelFunc07F6_0139:
	if (!(event == 0x000E)) goto labelFunc07F6_0179;
	var0003 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFE9C, var0003);
	UI_play_sound_effect(0x0082);
labelFunc07F6_0179:
	return;
}


