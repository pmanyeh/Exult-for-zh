#game "serpentisle"
// externs
extern var Func09BA 0x9BA ();
extern var Func097E 0x97E (var var0000);
extern void Func09B8 0x9B8 ();

void Func06E5 object#(0x6E5) ()
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

	if (!Func09BA()) goto labelFunc06E5_0007;
	abort;
labelFunc06E5_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E5_01D0;
	UI_sprite_effect(0x0015, 0x06F2, 0x05A5, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x06F2, 0x05A5, 0x0000]);
	UI_set_schedule_type(0xFEFA, 0x000F);
	var0002 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x30]);
	var0002 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06E5], 0x000A);
	var0003 = UI_find_nearby(item, 0x02B1, 0x000F, 0x0000);
	if (!var0003) goto labelFunc06E5_00CD;
	var0002 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x02B1], 0x0005);
labelFunc06E5_00CD:
	var0004 = UI_find_nearby(item, 0x02B4, 0x0014, 0x0000);
	if (!var0004) goto labelFunc06E5_00FB;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x02B4], 0x0019);
labelFunc06E5_00FB:
	var0005 = UI_find_nearby(item, 0x02B2, 0x000F, 0x0000);
	if (!var0005) goto labelFunc06E5_0129;
	var0002 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x02B2], 0x002D);
labelFunc06E5_0129:
	var0006 = UI_find_nearby(item, 0x02E9, 0x000F, 0x0000);
	if (!var0006) goto labelFunc06E5_0157;
	var0002 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x02E9], 0x0041);
labelFunc06E5_0157:
	var0007 = UI_find_nearby(item, 0x02B5, 0x0014, 0x0000);
	if (!var0007) goto labelFunc06E5_0185;
	var0002 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x02B5], 0x0055);
labelFunc06E5_0185:
	var0008 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc06E5_0197:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc06E5_01CB;
	var000C = UI_get_item_frame(var000B);
	if (!(var000C == 0x0000)) goto labelFunc06E5_01C8;
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x48], 0x0064);
labelFunc06E5_01C8:
	goto labelFunc06E5_0197;
labelFunc06E5_01CB:
	UI_remove_item(item);
labelFunc06E5_01D0:
	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc06E5_01F3;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Want to sing an opera, Avatar?\"");
	say();
	UI_remove_npc_face0();
	Func09B8();
labelFunc06E5_01F3:
	return;
}


