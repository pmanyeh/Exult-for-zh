#game "serpentisle"
// externs
extern var Func09BA 0x9BA ();
extern var Func097E 0x97E (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09B8 0x9B8 ();
extern var Func09A1 0x9A1 (var var0000);

void Func06E6 object#(0x6E6) ()
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

	if (!Func09BA()) goto labelFunc06E6_0007;
	abort;
labelFunc06E6_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E6_0489;
	var0002 = UI_get_item_quality(item);
	var0003 = 0x0000;
	var0004 = 0x0000;
	var0005 = [0xFEFA, 0xFEF8, 0xFEF9];
	var0006 = var0005[UI_die_roll(0x0001, 0x0003)];
	if (!(var0002 == 0x0000)) goto labelFunc06E6_00DA;
	UI_sprite_effect(0x0015, 0x0715, 0x0582, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x0715, 0x0582, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_00DA;
	var0007 = UI_set_item_quality(var0004, 0x0000);
labelFunc06E6_00DA:
	if (!(var0002 == 0x0001)) goto labelFunc06E6_014B;
	UI_sprite_effect(0x0015, 0x06F1, 0x0582, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x06F1, 0x0582, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_014B;
	var0007 = UI_set_item_quality(var0004, 0x0001);
labelFunc06E6_014B:
	if (!(var0002 == 0x0002)) goto labelFunc06E6_01BC;
	UI_sprite_effect(0x0015, 0x06C6, 0x0566, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x06C6, 0x0566, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_01BC;
	var0007 = UI_set_item_quality(var0004, 0x0002);
labelFunc06E6_01BC:
	if (!(var0002 == 0x0003)) goto labelFunc06E6_022D;
	UI_sprite_effect(0x0015, 0x06D1, 0x0555, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x06D1, 0x0555, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_022D;
	var0007 = UI_set_item_quality(var0004, 0x0003);
labelFunc06E6_022D:
	if (!(var0002 == 0x0004)) goto labelFunc06E6_029E;
	UI_sprite_effect(0x0015, 0x0705, 0x0571, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x0705, 0x0571, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x36]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_029E;
	var0007 = UI_set_item_quality(var0004, 0x0004);
labelFunc06E6_029E:
	if (!(var0002 == 0x0005)) goto labelFunc06E6_030F;
	UI_sprite_effect(0x0015, 0x0731, 0x0569, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x0731, 0x0569, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_030F;
	var0007 = UI_set_item_quality(var0004, 0x0005);
labelFunc06E6_030F:
	if (!(var0002 == 0x0006)) goto labelFunc06E6_0380;
	UI_sprite_effect(0x0015, 0x0726, 0x0573, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x0726, 0x0573, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_0380;
	var0007 = UI_set_item_quality(var0004, 0x0006);
labelFunc06E6_0380:
	if (!(var0002 == 0x0007)) goto labelFunc06E6_03F1;
	UI_sprite_effect(0x0015, 0x09A1, 0x0050, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x09A1, 0x0050, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_03F1;
	var0007 = UI_set_item_quality(var0004, 0x0007);
labelFunc06E6_03F1:
	if (!(var0002 == 0x0008)) goto labelFunc06E6_0462;
	UI_sprite_effect(0x0015, 0x09C0, 0x0058, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(var0006, [0x09C0, 0x0058, 0x0000]);
	var0007 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_0462;
	var0007 = UI_set_item_quality(var0004, 0x0008);
labelFunc06E6_0462:
	UI_set_schedule_type(var0006, 0x000F);
	var0007 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x06E6], 0x000A);
	UI_remove_item(item);
	abort;
labelFunc06E6_0489:
	if (!(event == 0x0002)) goto labelFunc06E6_066C;
	var0006 = UI_get_npc_number(item);
	var0008 = "";
	var0004 = Func09A0(0x0000, 0x0001);
	if (!var0004) goto labelFunc06E6_04BB;
	var0002 = UI_get_item_quality(var0004);
labelFunc06E6_04BB:
	if (!(var0002 == 0x0000)) goto labelFunc06E6_04CB;
	var0008 = "Dost thou like to read, Avatar? I have some hot new titles for thee.";
labelFunc06E6_04CB:
	if (!(var0002 == 0x0001)) goto labelFunc06E6_04DB;
	var0008 = "Come in and relax, Avatar.";
labelFunc06E6_04DB:
	if (!(var0002 == 0x0002)) goto labelFunc06E6_04EB;
	var0008 = "Come and meet the sweet ladies, Avatar.";
labelFunc06E6_04EB:
	if (!(var0002 == 0x0003)) goto labelFunc06E6_04FB;
	var0008 = "Wilt thou watch the children for me, Avatar?";
labelFunc06E6_04FB:
	if (!(var0002 == 0x0004)) goto labelFunc06E6_050B;
	var0008 = "Come and dance a jig with these fine fellows, Avatar.";
labelFunc06E6_050B:
	if (!(var0002 == 0x0005)) goto labelFunc06E6_058A;
	var0009 = UI_part_of_day();
	if (!((var0009 == 0x0000) || (var0009 == 0x0001))) goto labelFunc06E6_0534;
	var000A = "a late night morsel";
labelFunc06E6_0534:
	if (!((var0009 == 0x0002) || (var0009 == 0x0003))) goto labelFunc06E6_054C;
	var000A = "breakfast";
labelFunc06E6_054C:
	if (!((var0009 == 0x0004) || (var0009 == 0x0005))) goto labelFunc06E6_0564;
	var000A = "lunch";
labelFunc06E6_0564:
	if (!((var0009 == 0x0006) || (var0009 == 0x0007))) goto labelFunc06E6_057C;
	var000A = "dinner";
labelFunc06E6_057C:
	var0008 = (("Thou'rt just in time for " + var000A) + ", Avatar.");
labelFunc06E6_058A:
	if (!(var0002 == 0x0006)) goto labelFunc06E6_059A;
	var0008 = "Come in, come in, Avatar. I have cooked something special for thee.";
labelFunc06E6_059A:
	if (!(var0002 == 0x0007)) goto labelFunc06E6_05AA;
	var0008 = "So, thou hast found my playroom...";
labelFunc06E6_05AA:
	if (!(var0002 == 0x0008)) goto labelFunc06E6_05D0;
	var0008 = "Thou'rt almost there, Avatar.";
	var0004 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x0033, var0004);
labelFunc06E6_05D0:
	if (!(var0006 == 0xFEFA)) goto labelFunc06E6_05E4;
	UI_show_npc_face0(0xFEE0, 0x0000);
labelFunc06E6_05E4:
	if (!(var0006 == 0xFEF9)) goto labelFunc06E6_05F8;
	UI_show_npc_face0(0xFEE6, 0x0000);
labelFunc06E6_05F8:
	if (!(var0006 == 0xFEF8)) goto labelFunc06E6_060C;
	UI_show_npc_face0(0xFEF4, 0x0000);
labelFunc06E6_060C:
	message(var0008);
	message("");
	say();
	UI_remove_npc_face0();
	var000B = UI_get_object_position(var0006);
	Func09B8();
	if (!(var0002 == 0x0006)) goto labelFunc06E6_066C;
	var000C = UI_create_new_object2(0x0151, var000B);
	if (!var000C) goto labelFunc06E6_0663;
	UI_set_alignment(var000C, 0x0002);
	UI_set_schedule_type(var000C, 0x0000);
	UI_set_oppressor(var0007, UI_get_npc_object(0xFE9C));
labelFunc06E6_0663:
	var0007 = Func09A1(0x0151);
labelFunc06E6_066C:
	return;
}


