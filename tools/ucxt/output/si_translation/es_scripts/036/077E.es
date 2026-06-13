#game "serpentisle"
// externs
extern var Func08EB 0x8EB (var var0000, var var0001);

void Func077E object#(0x77E) ()
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

	if (!(event == 0x0002)) goto labelFunc077E_017C;
	var0000 = UI_get_object_position(item);
	var0001 = UI_find_nearby(item, 0x0315, 0x0028, 0x0000);
	if (!var0001) goto labelFunc077E_0179;
	var0000 = UI_get_object_position(var0001);
	UI_move_object(0xFFDE, [(var0000[0x0001] - 0x0001), (var0000[0x0002] + 0x0001), 0x0000]);
	UI_set_item_frame(UI_get_npc_object(0xFFDE), 0x0010);
	gflags[0x01BB] = true;
	UI_set_new_schedules(0xFFDE, [0x0000, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x0005, 0x000C, 0x0005, 0x000B, 0x0005], [0x0813, 0x0525, 0x0817, 0x0540, 0x0802, 0x0550, 0x0817, 0x0540, 0x081A, 0x0534, 0x0817, 0x0540]);
	UI_run_schedule(0xFFDE);
	UI_play_sound_effect(0x0077);
	var0002 = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x52, "It worked!"], 0x0001);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "Amazing!"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(0xFFDE, [(byte)0x23, (byte)0x52, "I live!"], 0x0005);
	if (!(!UI_get_item_flag(0xFFDD, 0x0004))) goto labelFunc077E_0179;
	gflags[0x0007] = true;
	UI_move_object(0xFFDD, [0x0813, 0x053A, 0x0000]);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_si_path_run_usecode(0xFFDD, [0x081A, 0x052A, 0x0000], 0x0002, 0xFFDD, 0x0423, true);
	abort;
labelFunc077E_0179:
	goto labelFunc077E_0485;
labelFunc077E_017C:
	var0003 = UI_get_item_quality(item);
	var0000 = UI_get_object_position(item);
	var0004 = UI_find_nearby(item, 0xFE99, 0x0002, 0x0000);
	enum();
labelFunc077E_019E:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc077E_03D8;
	if (!(UI_get_lift(var0007) == var0000[0x0003])) goto labelFunc077E_03D5;
	var0008 = 0x0000;
	if (!(UI_get_item_shape(var0007) == 0x031F)) goto labelFunc077E_02C2;
	var0009 = UI_get_item_frame(var0007);
	if (!((var0009 == 0x0012) || (var0009 == 0x000A))) goto labelFunc077E_0226;
	if (!Func08EB(var0003, 0x0006)) goto labelFunc077E_0216;
	if (!(!Func08EB(var0003, 0x0007))) goto labelFunc077E_0213;
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0080);
labelFunc077E_0213:
	goto labelFunc077E_0226;
labelFunc077E_0216:
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0040);
labelFunc077E_0226:
	if (!((var0009 == 0x0006) || (var0009 == 0x0011))) goto labelFunc077E_0274;
	if (!Func08EB(var0003, 0x0004)) goto labelFunc077E_0264;
	if (!(!Func08EB(var0003, 0x0005))) goto labelFunc077E_0261;
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0020);
labelFunc077E_0261:
	goto labelFunc077E_0274;
labelFunc077E_0264:
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0010);
labelFunc077E_0274:
	if (!((var0009 == 0x0007) || (var0009 == 0x0008))) goto labelFunc077E_02C2;
	if (!Func08EB(var0003, 0x0002)) goto labelFunc077E_02B2;
	if (!(!Func08EB(var0003, 0x0003))) goto labelFunc077E_02AF;
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0008);
labelFunc077E_02AF:
	goto labelFunc077E_02C2;
labelFunc077E_02B2:
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0004);
labelFunc077E_02C2:
	if (!((UI_get_item_shape(var0007) == 0x0289) && (UI_get_item_frame(var0007) == 0x0001))) goto labelFunc077E_02F9;
	if (!(!Func08EB(var0003, 0x0000))) goto labelFunc077E_02F9;
	var0008 = 0x0001;
	var0003 = (var0003 + 0x0001);
labelFunc077E_02F9:
	if (!var0008) goto labelFunc077E_03A7;
	UI_remove_item(var0007);
	UI_sprite_effect(0x0020, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_find_nearby(item, 0x0316, 0x0012, 0x0000);
	if (!var0001) goto labelFunc077E_03A4;
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x46, 0x0001, (byte)0x58, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x0002, (byte)0x58, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x0003, (byte)0x58, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x0004, (byte)0x58, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x0005, (byte)0x58, 0x000D, (byte)0x27, 0x0001, (byte)0x46, 0x0000], 0x0001);
labelFunc077E_03A4:
	goto labelFunc077E_03D5;
labelFunc077E_03A7:
	UI_play_sound_effect(0x003E);
	if (!UI_set_last_created(var0007)) goto labelFunc077E_03D5;
	var0002 = UI_update_last_created([var0000[0x0001], (var0000[0x0002] + 0x0005), 0x0000]);
labelFunc077E_03D5:
	goto labelFunc077E_019E;
labelFunc077E_03D8:
	var0002 = UI_set_item_quality(item, var0003);
	if (!((!gflags[0x01BB]) && (var0003 == 0x00FD))) goto labelFunc077E_0485;
	var0001 = UI_find_nearby(item, 0x0315, 0x0008, 0x0000);
	if (!var0001) goto labelFunc077E_0470;
	UI_play_sound_effect(0x0077);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x46, 0x0001, (byte)0x58, 0x000E, (byte)0x27, 0x0002, (byte)0x46, 0x0002, (byte)0x58, 0x000E, (byte)0x27, 0x0002, (byte)0x46, 0x0003, (byte)0x58, 0x000E, (byte)0x27, 0x0002, (byte)0x46, 0x0004, (byte)0x58, 0x000E, (byte)0x27, 0x0002, (byte)0x46, 0x0005, (byte)0x58, 0x000E, (byte)0x27, 0x0002, (byte)0x46, 0x0000], 0x0002);
labelFunc077E_0470:
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x077E], 0x0014);
labelFunc077E_0485:
	return;
}


