#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func09A3 0x9A3 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();

void Func013E shape#(0x13E) ()
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
	var var000D;
	var var000E;

	var0000 = UI_is_pc_female();
	var0001 = "him";
	if (!var0000) goto labelFunc013E_0019;
	var0001 = "her";
labelFunc013E_0019:
	var0002 = Func0994();
	if (!gflags[0x021E]) goto labelFunc013E_01C2;
	var0003 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	if (!(event == 0x0002)) goto labelFunc013E_0169;
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"Well, well, well... If it isn't the Avatar!\" *\"Fool! Thou didst think me dead... But now it is time for thee to die!\"");
	say();
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0012);
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x0358, 0x0003, 0xFE99, 0x0012);
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x0327, 0x0003, 0xFE99, 0x0012);
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x011F, 0x0001, 0xFE99, 0x0012);
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x02DB, 0x0006, 0xFE99, 0x0012);
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	var0004 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Thou art no match for me!@"], 0x0014);
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x001D);
	UI_set_item_flag(var0003, 0x001D);
	var0004 = UI_set_npc_prop(var0003, 0x0004, 0x000A);
	var0004 = UI_set_npc_prop(var0003, 0x0002, 0x000A);
	var0004 = UI_set_npc_prop(var0003, 0x0000, 0x000A);
	var0005 = UI_get_npc_prop(0xFE9C, 0x0003);
	if (!(var0005 > 0x000F)) goto labelFunc013E_0169;
	var0004 = UI_set_npc_prop(0xFE9C, 0x0003, (0x000F - var0005));
labelFunc013E_0169:
	if (!(event == 0x0007)) goto labelFunc013E_01C2;
	UI_show_npc_face0(0xFEE1, 0x0000);
	var0006 = UI_die_roll(0x0001, 0x0003);
	if (!(var0006 == 0x0001)) goto labelFunc013E_0196;
	message("\"Fool! Dost thou think thou canst actually kill me?\" *\"I am forever!\" *\"I am eternity!\"");
	say();
labelFunc013E_0196:
	if (!(var0006 == 0x0002)) goto labelFunc013E_01A4;
	message("\"Puny Avatar! Thou canst not defeat what is undefeatable!\"");
	say();
labelFunc013E_01A4:
	if (!(var0006 == 0x0003)) goto labelFunc013E_01B2;
	message("\"No! Thou canst not escape that easily!\"");
	say();
labelFunc013E_01B2:
	var0004 = UI_set_npc_prop(var0003, 0x0003, 0x0014);
labelFunc013E_01C2:
	var0007 = UI_get_npc_id(item);
	if (!((UI_get_schedule_type(item) == 0x001D) && (UI_get_npc_id(0xFFC0) != 0x0000))) goto labelFunc013E_01E3;
	abort;
labelFunc013E_01E3:
	if (!(Func0994() == 0x0010)) goto labelFunc013E_038D;
	if (!(event == 0x0002)) goto labelFunc013E_029C;
	UI_show_npc_face0(0xFEE1, 0x0001);
	message("\"Thou art too late, Avatar! Nothing can stop me now! The girl is dead and the last Bane is mine!\"");
	say();
	message("\"Soon I shall rival the Guardian himself and crush thee like the irritating insect thou art!\"");
	say();
	message("\"I shall open the Wall of Lights and destroy the world! And thou art powerless to follow me!\"");
	say();
	var0008 = UI_get_object_position(item);
	UI_sprite_effect(0x0015, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_npc_nearby(0xFEDB)) goto labelFunc013E_0269;
	message("\"Come, Palos! Destiny awaits beyond the frozen mountains!\"");
	say();
	var0008 = UI_get_object_position(0xFEDB);
	UI_sprite_effect(0x0015, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc013E_0269:
	UI_remove_item(0xFEDB);
	Func09A3(item);
	UI_play_sound_effect(0x0082);
	gflags[0x02E2] = true;
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x00C8);
labelFunc013E_029C:
	if (!((event == 0x0007) && (!UI_get_item_flag(item, 0x001E)))) goto labelFunc013E_02E5;
	Func097F(item, "@At last...@", 0x0000);
	item->Func07D2();
	item->Func07D1();
	UI_set_schedule_type(item, 0x000F);
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x013E], 0x000A);
	UI_set_item_flag(item, 0x001E);
labelFunc013E_02E5:
	if (!(event == 0x0000)) goto labelFunc013E_038D;
	if (!(var0007 == 0x0000)) goto labelFunc013E_033B;
	UI_set_item_flag(0xFFC0, 0x0004);
	var0009 = UI_find_nearby(item, 0x0178, 0x0005, 0x0000);
	if (!var0009) goto labelFunc013E_0330;
	var000A = (UI_get_item_frame(var0009) - 0x0001);
	UI_set_item_frame(var0009, var000A);
labelFunc013E_0330:
	UI_set_npc_id(item, 0x0001);
	goto labelFunc013E_038D;
labelFunc013E_033B:
	if (!((UI_get_distance(0xFE9C, item) < 0x000C) && (!UI_get_item_flag(item, 0x001E)))) goto labelFunc013E_038D;
	Func097F(item, "@At last...@", 0x0000);
	0xFE9C->Func07D2();
	item->Func07D1();
	UI_set_schedule_type(item, 0x000F);
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x013E], 0x000A);
	UI_set_item_flag(item, 0x001E);
labelFunc013E_038D:
	if (!(gflags[0x024F] && ((event == 0x0000) && (!gflags[0x0250])))) goto labelFunc013E_0628;
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	if (!(UI_get_npc_id(item) == 0x000A)) goto labelFunc013E_0408;
	UI_init_conversation();
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"Thy fire shall warm the heart of my trap, Palos. I shall rely on thee to make sure the Avatar feels the warmth of our welcome.\"");
	say();
	UI_show_npc_face1(0xFEEF, 0x0000);
	message("\"To be my great pleasure. To look forward to the meeting...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var000B = UI_find_nearby(item, 0x0373, 0x0014, 0x0000);
	if (!var000B) goto labelFunc013E_0404;
	UI_set_schedule_type(var000B, 0x000B);
labelFunc013E_0404:
	UI_end_conversation();
labelFunc013E_0408:
	if (!(UI_get_npc_id(item) == 0x0009)) goto labelFunc013E_0433;
	Func097F(item, "@Ah, Palos!@", 0x0000);
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x013E], 0x0014);
labelFunc013E_0433:
	if (!(UI_get_npc_id(item) == 0x0008)) goto labelFunc013E_04D5;
	UI_init_conversation();
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"Thou shalt be my door warden. I can count on thy strength to delay the Avatar...\"");
	say();
	UI_show_npc_face1(0xFF81, 0x0000);
	message("\"Dost thou wish ");
	message(var0001);
	message(" dead or mangled, Batlin?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Mangled will suffice, mighty Brunt. But do as thou wishest...\"");
	say();
	UI_show_npc_face1(0xFF81, 0x0000);
	message("\"Good... Dead it is!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	UI_end_conversation();
	UI_set_schedule_type(0xFF81, 0x000B);
	var000C = [0x0924, 0x017E, 0x0000];
	var000B = UI_find_nearby(item, 0x0373, 0x0014, 0x0000);
	if (!var000B) goto labelFunc013E_04D5;
	UI_si_path_run_usecode(var000B, var000C, 0x000D, var000B, 0x0373, false);
labelFunc013E_04D5:
	if (!(UI_get_npc_id(item) == 0x0007)) goto labelFunc013E_04EB;
	Func097F(item, "@Brunt!@", 0x0000);
labelFunc013E_04EB:
	if (!(UI_get_npc_id(item) == 0x0006)) goto labelFunc013E_0524;
	var000D = [0x0926, 0x0187, 0x0000];
	UI_si_path_run_usecode(0xFF81, var000D, 0x000D, 0xFF81, 0x047F, false);
	Func097F(item, "@I must be certain...@", 0x0000);
labelFunc013E_0524:
	if (!(UI_get_npc_id(item) == 0x0005)) goto labelFunc013E_0583;
	UI_init_conversation();
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"To thee I give the anchor's job... The Avatar must not enter the Shrine of Balance before the Wall of Lights is fully open. Thou must stop the Avatar, should the others fail.\"");
	say();
	UI_show_npc_face1(0xFF80, 0x0000);
	message("\"I'll split ");
	message(var0001);
	message(" from stem ta stern afore I let ");
	message(var0001);
	message(" pass, Batlin!\"");
	say();
	message("\"An' o' course there be another yearnin' for a chance ta meet up with ");
	message(var0001);
	message(" again, too...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, yes... I had nearly forgotten.\"");
	say();
	UI_set_schedule_type(0xFF80, 0x000B);
	UI_end_conversation();
labelFunc013E_0583:
	if (!(UI_get_npc_id(item) == 0x0004)) goto labelFunc013E_0599;
	Func097F(item, "@Deadeye! Come here!@", 0x0000);
labelFunc013E_0599:
	if (!(UI_get_npc_id(item) == 0x0003)) goto labelFunc013E_05DE;
	UI_init_conversation();
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"I must prepare an appropriate welcome for mine old enemy!\"");
	say();
	UI_end_conversation();
	var000E = [0x092A, 0x0199, 0x0000];
	UI_si_path_run_usecode(0xFF80, var000E, 0x000D, 0xFF80, 0x0480, false);
labelFunc013E_05DE:
	if (!(UI_get_npc_id(item) == 0x0002)) goto labelFunc013E_05F4;
	Func097F(item, "@...before the Avatar cometh.@", 0x0000);
labelFunc013E_05F4:
	if (!(UI_get_npc_id(item) == 0x0001)) goto labelFunc013E_0627;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	Func097F(item, "@So little time...@", 0x0000);
	UI_play_music(0x0034, Func09A0(0x0005, 0x0001));
labelFunc013E_0627:
	abort;
labelFunc013E_0628:
	if (!(gflags[0x024F] && ((event == 0x0002) && (!gflags[0x0250])))) goto labelFunc013E_06A1;
	UI_ambient_light(0x0001);
	UI_set_time_palette();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_camera(0xFE9C);
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x000A);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_npc_id(item, 0x0000);
	gflags[0x0250] = true;
	UI_remove_npc(0xFF81);
	UI_remove_npc(0xFF80);
	gflags[0x002A] = false;
labelFunc013E_06A1:
	if (!((event == 0x0003) && (var0002 == 0x001F))) goto labelFunc013E_06EE;
	UI_show_npc_face0(0xFEE1, 0x0000);
	message("\"Ah, Avatar! Thou wert ne'er a match for me...\" *\"Soon I will have power to rival even the Guardian himself! And thou wilt be powerless, just as thou art now.\" *\"I will bury my blade deep within thine entrails, twisting it ever so slowly, enjoying each of thy pitiful screams.\" *\"Farewell, hero of Britannia. Though thou wilt beg for a quick end to thy life, I shall resist. I want to enjoy thy death...\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Enjoy thy death!@", 0x0002);
	var0004 = UI_set_item_quality(item, 0x0010);
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x0023);
	abort;
labelFunc013E_06EE:
	return;
}


