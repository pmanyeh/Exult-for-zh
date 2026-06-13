#game "serpentisle"
// externs
extern var Func09BA 0x9BA ();
extern var Func097E 0x97E (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09B8 0x9B8 ();

void Func06E4 object#(0x6E4) ()
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

	if (!Func09BA()) goto labelFunc06E4_0007;
	abort;
labelFunc06E4_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E4_00D4;
	UI_sprite_effect(0x0015, 0x06D8, 0x0591, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x06D8, 0x0591, 0x0000]);
	UI_set_schedule_type(0xFEFA, 0x000F);
	var0002 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0002 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06E4], 0x000A);
	var0003 = UI_find_nearby(item, 0x010E, 0x0006, 0x0000);
	if (!var0003) goto labelFunc06E4_00CA;
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x010E]);
labelFunc06E4_00CA:
	gflags[0x0007] = false;
	UI_remove_item(item);
	abort;
labelFunc06E4_00D4:
	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc06E4_0140;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Want to try some spinning...\"* \"...and dying, Avatar?\"");
	say();
	UI_remove_npc_face0();
	var0004 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0004) goto labelFunc06E4_0115;
	UI_set_item_frame(var0004, 0x0002);
labelFunc06E4_0115:
	gflags[0x0007] = true;
	var0005 = Func09A0(0x0000, 0x0001);
	if (!var0005) goto labelFunc06E4_013F;
	var0002 = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x06E4]);
labelFunc06E4_013F:
	abort;
labelFunc06E4_0140:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc06E4_01A6;
	var0006 = UI_find_nearby(item, 0x00C8, 0x001E, 0x0010);
	enum();
labelFunc06E4_0160:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc06E4_019F;
	var000A = UI_get_item_frame(var0009);
	if (!((var000A > 0x0001) && (var000A < 0x0006))) goto labelFunc06E4_019C;
	var0002 = UI_execute_usecode_array(var0009, [(byte)0x49, 0x0002, 0x000F]);
labelFunc06E4_019C:
	goto labelFunc06E4_0160;
labelFunc06E4_019F:
	Func09B8();
	gflags[0x0007] = false;
labelFunc06E4_01A6:
	return;
}


