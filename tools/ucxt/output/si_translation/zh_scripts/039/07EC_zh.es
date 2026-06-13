#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func094F 0x94F (var var0000, var var0001);

void Func07EC object#(0x7EC) ()
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

	if (!((event == 0x0002) && ((gflags[0x0007] == false) && (gflags[0x0008] == false)))) goto labelFunc07EC_0173;
	var0000 = UI_get_object_position(0xFF31);
	UI_sprite_effect(0x0015, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0001 = UI_find_nearby(UI_get_npc_object(0xFF2D), 0x0113, 0x0002, 0x0010);
	var0002 = UI_set_to_attack(0xFF31, var0001, 0x0118);
	var0003 = UI_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x6F, (byte)0x67, (byte)0x01, (byte)0x7A]);
	var0004 = UI_get_distance(0xFF2D, 0xFF31);
	var0005 = (var0004 / 0x0002);
labelFunc07EC_00A1:
	if (!(var0005 < 0x002D)) goto labelFunc07EC_0107;
	var0003 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x55, 0x075A], var0005);
	var0003 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x55, 0x075A], (var0005 + 0x0001));
	var0003 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x27, 0x0001, (byte)0x61], var0005);
	var0005 = (var0005 + 0x000A);
	goto labelFunc07EC_00A1;
labelFunc07EC_0107:
	Func097F(0xFF2D, "@Damn thee!@", 0x000A);
	Func097F(0xFF2D, "@Oh...@", 0x0011);
	var0003 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0006, (byte)0x6D, (byte)0x27, 0x000A, (byte)0x6E, (byte)0x27, 0x0014, (byte)0x6D, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0002, (byte)0x59, (byte)0x32, (byte)0x27, 0x0002, (byte)0x55, 0x07EC], 0x0001);
	gflags[0x0007] = true;
	abort;
labelFunc07EC_0173:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07EC_028C;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("\"I'm not so easily defeated, friend monk...\"");
	say();
	UI_end_conversation();
	var0003 = ("@In Frio Grav!@" & ("@Mas Frio!@" & "@Take that!@"));
	Func094F(0xFF2D, var0003);
	var0003 = ("" & "@Ah!@");
	Func094F(0xFF31, var0003);
	var0003 = UI_create_new_object(0x0390);
	if (!var0003) goto labelFunc07EC_01E9;
	UI_set_item_flag(var0003, 0x0012);
	var0003 = UI_update_last_created(UI_get_object_position(0xFF2D));
labelFunc07EC_01E9:
	var0006 = UI_find_nearby(UI_get_npc_object(0xFF2D), 0x025F, 0x0019, 0x0010);
	var0007 = 0x0001;
	enum();
labelFunc07EC_0207:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc07EC_0260;
	var0003 = UI_delayed_execute_usecode_array(var000A, [(byte)0x23, (byte)0x55, 0x07EE], var0007);
	var0007 = (var0007 + 0x0003);
	var0004 = UI_get_distance(0xFF2D, var000A);
	var0003 = UI_delayed_execute_usecode_array(var000A, [(byte)0x55, 0x07EC], (var0007 + (var0004 / 0x0002)));
	goto labelFunc07EC_0207;
labelFunc07EC_0260:
	var0003 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x55, 0x07ED], ((var0007 + (var0004 / 0x0002)) + 0x0002));
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	abort;
labelFunc07EC_028C:
	if (!((event == 0x0002) && (gflags[0x0008] == true))) goto labelFunc07EC_02BC;
	UI_play_sound_effect(0x0029);
	UI_obj_sprite_effect(item, 0x001F, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc07EC_02BC:
	return;
}


