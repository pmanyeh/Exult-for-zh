#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func028C shape#(0x28C) ()
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

	var0000 = UI_is_pc_female();
	var0001 = Func0953();
	var0002 = UI_get_party_list();
	var0003 = UI_find_nearby(0xFFB8, 0x0381, 0x0014, 0x0000);
	if (!(event == 0x000E)) goto labelFunc028C_0084;
	var0004 = UI_get_object_position(var0003);
	if (!(item == UI_get_npc_object(0xFFB8))) goto labelFunc028C_0058;
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	goto labelFunc028C_0068;
labelFunc028C_0058:
	var0004[0x0001] = (var0004[0x0001] + 0x0001);
labelFunc028C_0068:
	UI_move_object(item, var0004);
	var0005 = UI_execute_usecode_array(0xFFB8, [(byte)0x23, (byte)0x55, 0x028C]);
labelFunc028C_0084:
	if (!(event == 0x0002)) goto labelFunc028C_0371;
	if (!(UI_get_npc_id(0xFFB8) == 0x0003)) goto labelFunc028C_0109;
	UI_set_npc_id(0xFFB8, 0x0004);
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc028C_00CC;
	UI_set_item_flag(var0005, 0x0012);
	var0005 = UI_update_last_created(UI_get_object_position(0xFE9C));
labelFunc028C_00CC:
	var0005 = UI_execute_usecode_array(0xFFB8, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x63, (byte)0x01, (byte)0x58, 0x000A, (byte)0x6A, (byte)0x67, (byte)0x6A, (byte)0x01, (byte)0x58, 0x000C, (byte)0x52, "@'Tis done!@", (byte)0x67, (byte)0x62, (byte)0x63, (byte)0x61, (byte)0x55, 0x028C]);
	abort;
labelFunc028C_0109:
	if (!(UI_get_npc_id(0xFFB8) == 0x0002)) goto labelFunc028C_0165;
	UI_set_npc_id(0xFFB8, 0x0003);
	var0005 = UI_execute_usecode_array(0xFFB8, [(byte)0x23, (byte)0x52, "@Thou art doing well...@", (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x01, (byte)0x58, 0x003E, (byte)0x6A, (byte)0x27, 0x000C, (byte)0x6F, (byte)0x52, "@Whoops!@", (byte)0x66, (byte)0x67, (byte)0x6A, (byte)0x01, (byte)0x58, 0x001B, (byte)0x6F, (byte)0x55, 0x028C]);
	abort;
labelFunc028C_0165:
	if (!(UI_get_npc_id(0xFFB8) == 0x0001)) goto labelFunc028C_01C2;
	UI_set_schedule_type(0xFFB8, 0x000F);
	UI_set_npc_id(0xFFB8, 0x0002);
	var0005 = UI_execute_usecode_array(0xFFB8, [(byte)0x23, (byte)0x55, 0x07D2, (byte)0x52, "@Hold thy breath.@", (byte)0x6A, (byte)0x01, (byte)0x58, 0x000A, (byte)0x27, 0x0004, (byte)0x67, (byte)0x01, (byte)0x58, 0x000C, (byte)0x27, 0x0006, (byte)0x55, 0x028C]);
	abort;
labelFunc028C_01C2:
	if (!(UI_get_npc_id(0xFFB8) == 0x0000)) goto labelFunc028C_0240;
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_set_npc_id(0xFFB8, 0x0001);
	Func097F(0xFFB8, "@Now we begin...@", 0x0000);
	var0004 = UI_get_object_position(var0003);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFFB8, var0004, 0x0002, item, 0x028C, false);
	UI_set_path_failure(0x028C, item, 0x000E);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B]);
	abort;
labelFunc028C_0240:
	UI_init_conversation();
	UI_show_npc_face0(0xFFB8, 0x0000);
	message("\"Use a cloth to soak up the blood...\"");
	say();
	enum();
labelFunc028C_0253:
	for (var0008 in var0002 with var0006 to var0007) attend labelFunc028C_026B;
	UI_set_schedule_type(var0008, 0x001F);
	goto labelFunc028C_0253;
labelFunc028C_026B:
	UI_run_schedule(0xFFB8);
	UI_set_item_flag(0xFE9C, 0x0021);
	UI_clear_item_flag(0xFE9C, 0x0010);
	gflags[0x0098] = true;
	gflags[0x003E] = true;
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0448], 0x03E8);
	var0009 = Func0992(0xFFFD, "@Thou dost look magnificent, Avatar!@", 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc028C_0371;
	if (!(UI_get_array_size(var0002) > 0x0002)) goto labelFunc028C_0371;
	var000A = var0009;
labelFunc028C_02D9:
	if (!(var000A == var0009)) goto labelFunc028C_02F6;
	var000A = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc028C_02D9;
labelFunc028C_02F6:
	var000A = Func0992(var000A, (("@Quite becoming, " + var0001) + ".@"), 0x0000, false);
	if (!(UI_get_array_size(var0002) > 0x0003)) goto labelFunc028C_0371;
	var000B = var000A;
labelFunc028C_0322:
	if (!((var000B == var000A) || (var000B == var0009))) goto labelFunc028C_0347;
	var000B = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc028C_0322;
labelFunc028C_0347:
	if (!(!var0000)) goto labelFunc028C_0361;
	var000B = Func0992(var000B, "@Thou dost look quite the fop, milord!@", 0x0000, false);
	goto labelFunc028C_0371;
labelFunc028C_0361:
	var000B = Func0992(var000B, "That is quite a beauty mark, milady. Hmpf!", 0x0000, false);
labelFunc028C_0371:
	return;
}


