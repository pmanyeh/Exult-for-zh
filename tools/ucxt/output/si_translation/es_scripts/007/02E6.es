#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09B2 0x9B2 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);

void Func02E6 shape#(0x2E6) ()
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

	var0000 = Func0954();
	var0001 = UI_get_object_position(0xFFBA);
	if (!(event == 0x000E)) goto labelFunc02E6_01D4;
	if (!((UI_get_npc_id(0xFFBA) == 0x0008) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_0034;
	event = 0x000D;
labelFunc02E6_0034:
	if (!((UI_get_npc_id(0xFFBA) == 0x0006) && (item == UI_get_npc_object(0xFFBA)))) goto labelFunc02E6_007E;
	UI_set_npc_id(0xFFBA, 0x0007);
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x55, 0x02E6]);
	var0002 = ("@Thank thee...@" & "@Goodbye!@");
	Func094F(0xFFBA, var0002);
	abort;
labelFunc02E6_007E:
	if (!((UI_get_npc_id(0xFFBA) == 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_00EC;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@Yes!@", 0x0004);
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Oh, my!@", 0x0007);
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_set_npc_id(0xFFBA, 0x0003);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x55, 0x02E6, (byte)0x6E]);
	abort;
labelFunc02E6_00EC:
	if (!((UI_get_npc_id(0xFFBA) < 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_0108;
	event = 0x000D;
labelFunc02E6_0108:
	if (!((UI_get_npc_id(0xFFBA) == 0x0000) && (item == UI_get_npc_object(0xFFBA)))) goto labelFunc02E6_01D4;
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Hurry!@", 0x0003);
	var0002 = UI_find_nearby(item, 0x02B8, 0x000C, 0x0000);
	enum();
labelFunc02E6_0145:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc02E6_016B;
	if (!(UI_get_item_frame(var0005) == 0x000B)) goto labelFunc02E6_0168;
	UI_set_item_frame(var0005, 0x000C);
labelFunc02E6_0168:
	goto labelFunc02E6_0145;
labelFunc02E6_016B:
	UI_set_npc_id(0xFFBA, 0x0001);
	UI_set_schedule_type(0xFFBA, 0x000F);
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x27, 0x0005, (byte)0x55, 0x02E6, (byte)0x6E]);
	UI_si_path_run_usecode(0xFE9C, [0x043B, 0x0A52, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x02E6, false);
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@Just a moment...@", 0x0000);
	abort;
labelFunc02E6_01D4:
	if (!(event == 0x000D)) goto labelFunc02E6_0464;
	if (!((UI_get_npc_id(0xFFBA) == 0x0008) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_0257;
	UI_set_polymorph(0xFE9C, 0x02D1);
	UI_play_sound_effect(0x0001);
	UI_set_npc_id(0xFFBA, UI_get_item_quality(Func09A0(0x0005, 0x0003)));
	var0002 = UI_set_item_quality(Func09A0(0x0005, 0x0003), 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	Func097F(0xFE9C, "@What a beautiful morning!@", 0x0000);
	UI_play_music(0x0016, Func09A0(0x0005, 0x0001));
	abort;
labelFunc02E6_0257:
	if (!((UI_get_npc_id(0xFFBA) == 0x0006) && (item == UI_get_npc_object(0xFFBA)))) goto labelFunc02E6_02B9;
	UI_set_npc_id(0xFFBA, 0x0007);
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x58, 0x0024, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x02E6]);
	var0002 = ("@Thank thee...@" & "@Goodbye!@");
	Func094F(0xFFBA, var0002);
	abort;
labelFunc02E6_02B9:
	if (!((UI_get_npc_id(0xFFBA) == 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_033F;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@Yes!@", 0x0004);
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Oh, my!@", 0x0007);
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_set_npc_id(0xFFBA, 0x0003);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x58, 0x0086, (byte)0x01, (byte)0x6E, (byte)0x27, 0x0002, (byte)0x55, 0x02E6]);
	abort;
labelFunc02E6_033F:
	if (!((UI_get_npc_id(0xFFBA) < 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc02E6_038A;
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_set_npc_id(0xFFBA, 0x0002);
	Func09B2();
	UI_play_sound_effect(0x0001);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x02E6]);
	abort;
labelFunc02E6_038A:
	if (!((UI_get_npc_id(0xFFBA) == 0x0000) && (item == UI_get_npc_object(0xFFBA)))) goto labelFunc02E6_0464;
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Hurry!@", 0x0003);
	var0002 = UI_find_nearby(item, 0x02B8, 0x000C, 0x0000);
	enum();
labelFunc02E6_03C7:
	for (var0005 in var0002 with var0006 to var0007) attend labelFunc02E6_03ED;
	if (!(UI_get_item_frame(var0005) == 0x000B)) goto labelFunc02E6_03EA;
	UI_set_item_frame(var0005, 0x000C);
labelFunc02E6_03EA:
	goto labelFunc02E6_03C7;
labelFunc02E6_03ED:
	UI_set_npc_id(0xFFBA, 0x0001);
	UI_set_schedule_type(0xFFBA, 0x000F);
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x55, 0x02E6, (byte)0x58, 0x0086, (byte)0x01, (byte)0x6E]);
	UI_si_path_run_usecode(0xFE9C, [0x043B, 0x0A52, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x02E6, false);
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@Just a moment...@", 0x0000);
	abort;
labelFunc02E6_0464:
	if (!(event == 0x0002)) goto labelFunc02E6_0822;
	if (!(UI_get_npc_id(0xFFBA) == 0x0008)) goto labelFunc02E6_04AF;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@I should dress...@", 0x0003);
	UI_si_path_run_usecode(0xFE9C, [0x043B, 0x0A52, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x02E6, false);
	abort;
labelFunc02E6_04AF:
	if (!(UI_get_npc_id(0xFFBA) == 0x0007)) goto labelFunc02E6_04E6;
	UI_set_npc_id(0xFFBA, 0x0008);
	UI_run_schedule(0xFFBA);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x02E6], 0x0005);
	abort;
labelFunc02E6_04E6:
	if (!(UI_get_npc_id(0xFFBA) == 0x0006)) goto labelFunc02E6_0516;
	UI_si_path_run_usecode(0xFFBA, [0x0437, 0x0A5A, 0x0000], 0x000D, UI_get_npc_object(0xFFBA), 0x02E6, false);
	abort;
labelFunc02E6_0516:
	if (!(UI_get_npc_id(0xFFBA) == 0x0005)) goto labelFunc02E6_0559;
	UI_set_npc_id(0xFFBA, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("\"Once again, thou hast proved thyself to be the love of my life. When I write my book, I shall dedicate it to thee, my love.\"");
	say();
	UI_end_conversation();
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x55, 0x02E6]);
	abort;
labelFunc02E6_0559:
	if (!(UI_get_npc_id(0xFFBA) == 0x0004)) goto labelFunc02E6_05D8;
	UI_set_npc_id(0xFFBA, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("\"Thou art the man of my dreams! I have never felt so fulfilled. What an experience...\"");
	say();
	message("\"As a sign of mine appreciation and great affection for thee, please accept this gift. 'Tis my greatest possession.\"");
	say();
	message("\"Gwani cloaks are most rare, and are worn by the Goblins as a token of great bravery. My father slew the chieftain who once wore this cloak!\"");
	say();
	message("\"Please wear it, and remember me always.\"");
	say();
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Always...@", 0x0000);
	var0002 = Func099B(0xFE9C, 0x0001, 0x00E3, 0xFE99, 0x0004, 0x0000, true);
	UI_end_conversation();
	gflags[0x008A] = true;
	var0002 = UI_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x55, 0x02E6]);
	abort;
labelFunc02E6_05D8:
	if (!(UI_get_npc_id(0xFFBA) == 0x0003)) goto labelFunc02E6_0689;
	if (!gflags[0x008A]) goto labelFunc02E6_05F9;
	UI_set_npc_id(0xFFBA, 0x0005);
	goto labelFunc02E6_0603;
labelFunc02E6_05F9:
	UI_set_npc_id(0xFFBA, 0x0004);
labelFunc02E6_0603:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_advance_time((0x05DC * 0x0003));
	UI_move_object(0xFFBA, [0x0435, 0x0A54, 0x0000]);
	UI_move_object(0xFE9C, [0x0439, 0x0A5D, 0x0001]);
	var0002 = UI_delayed_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6B, (byte)0x27, 0x0002, (byte)0x55, 0x0636, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x55, 0x02E6], 0x001E);
	Func097F(0xFE9C, "@Where am I?@", 0x0023);
	abort;
labelFunc02E6_0689:
	if (!(UI_get_npc_id(0xFFBA) == 0x0002)) goto labelFunc02E6_06DF;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@I'm ready...@", 0x0000);
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@As am I!@", 0x0003);
	UI_si_path_run_usecode(0xFE9C, [0x043A, 0x0A5C, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x02E6, false);
	abort;
labelFunc02E6_06DF:
	if (!(UI_get_npc_id(0xFFBA) == 0x0001)) goto labelFunc02E6_0701;
	UI_move_object(0xFFBA, [0x0439, 0x0A5D, 0x0001]);
	abort;
labelFunc02E6_0701:
	if (!(UI_get_npc_id(0xFFBA) == 0x0000)) goto labelFunc02E6_0822;
	UI_show_npc_face0(0xFFBA, 0x0000);
	var0001 = UI_get_object_position(0xFFBA);
	if (!((var0001[0x0001] > 0x042F) && ((var0001[0x0001] < 0x043F) && ((var0001[0x0002] > 0x0A50) && (var0001[0x0002] < 0x0A5F))))) goto labelFunc02E6_080A;
	message("\"I am ready now! Come to bed, my love!\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc02E6_07C4;
	var0008 = Func0992(0x0001, "@Er, um, I believe I need some fresh air...@", 0x0000, false);
	var0002 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc02E6_0786:
	for (var000B in var0002 with var0009 to var000A) attend labelFunc02E6_07B8;
	UI_remove_from_party(var000B);
	UI_set_new_schedules(var000B, 0x0000, 0x001A, [0x0409, 0x0A4F]);
	UI_run_schedule(var000B);
	goto labelFunc02E6_0786;
labelFunc02E6_07B8:
	Func097F(var000B, "@Farewell...@", 0x0000);
labelFunc02E6_07C4:
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_si_path_run_usecode(0xFFBA, [0x043A, 0x0A5C, 0x0000], 0x000D, UI_get_npc_object(0xFFBA), 0x02E6, false);
	UI_clear_item_say(0xFFBA);
	Func097F(0xFFBA, "@Come, my love!@", 0x0000);
	abort;
	goto labelFunc02E6_0822;
labelFunc02E6_080A:
	message("\"Oh, darling! Meet me in my bedroom...\"");
	say();
	Func097F(0xFFBA, "@I'm so sleepy...@", 0x0000);
	UI_run_schedule(0xFFBA);
	abort;
labelFunc02E6_0822:
	return;
}


