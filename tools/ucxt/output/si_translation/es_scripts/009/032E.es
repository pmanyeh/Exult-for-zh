#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AF 0x9AF (var var0000, var var0001, var var0002, var var0003);
extern void Func0907 0x907 (var var0000, var var0001);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func098D 0x98D ();

void Func032E shape#(0x32E) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "his";
	var0003 = "him";
	var0004 = "he";
	var0005 = "man";
	if (!UI_is_pc_female()) goto labelFunc032E_0044;
	var0002 = "her";
	var0004 = "she";
	var0003 = "her";
	var0005 = "woman";
labelFunc032E_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!(UI_get_npc_id(0xFFEC) > 0x0001)) goto labelFunc032E_006B;
	var0008 = 0x0002;
labelFunc032E_006B:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc032E_0086;
	var0007 = "day";
	goto labelFunc032E_008C;
labelFunc032E_0086:
	var0007 = "evening";
labelFunc032E_008C:
	if (!(event == 0x0003)) goto labelFunc032E_009D;
	UI_set_schedule_type(item, 0x000F);
	abort;
labelFunc032E_009D:
	if (!(event == 0x000E)) goto labelFunc032E_00A9;
	event = 0x0002;
labelFunc032E_00A9:
	if (!((event == 0x0002) && (!gflags[0x00D9]))) goto labelFunc032E_0B47;
	if (!(UI_get_npc_id(0xFFEE) == 0x000C)) goto labelFunc032E_00F1;
	UI_set_npc_id(0xFFEE, 0x000D);
	var0009 = UI_execute_usecode_array(0xFFE3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_00F1:
	if (!(UI_get_npc_id(0xFFEE) == 0x000B)) goto labelFunc032E_0157;
	UI_set_npc_id(0xFFEE, 0x000C);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"And to think she was once a young and beautiful sorceress, before her ambitions turned her cold and heartless...\"");
	say();
	UI_end_conversation();
	UI_si_path_run_usecode(0xFFE3, [0x090A, 0x071A, 0x0000], 0x0002, item, 0x032E, false);
	Func097F(0xFFE3, "@Pardon me...@", 0x0005);
	UI_play_music(0x0012, Func09A0(0x0005, 0x0001));
	abort;
labelFunc032E_0157:
	if (!(UI_get_npc_id(0xFFEE) == 0x000A)) goto labelFunc032E_0275;
	UI_set_npc_id(0xFFEE, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("\"See here, Rotoluncia! This stranger may have secrets -- as do we all! But I will not condone treating a guest of the Council like a criminal!\"");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("\"Thou dost dare to interfere with my spells! MageLord, I demand that thou reprimandest this sorcerer.\"");
	say();
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"My dear, calm thyself. Perhaps our visitor shall tell us all, without the use of force...\"");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("\"If there is one thing I cannot stand, it is being hamstrung by petty politics. Thou art not half the man thou once wert, Filbercio...\"");
	say();
	message("\"I bid you all a pleasant dinner. I have lost mine appetite and am leaving. But mark my words -- I shall have my way!\"");
	say();
	UI_end_conversation();
	var000A = UI_get_object_position(0xFFE1);
	UI_sprite_effect(0x001A, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_set_new_schedules(0xFFE1, 0x0000, 0x000C, [0x086D, 0x0837]);
	UI_run_schedule(0xFFE1);
	UI_move_object(0xFFE1, [0x086D, 0x0837, 0x0000]);
	UI_set_item_flag(0xFFE1, 0x001D);
	Func097F(0xFFEC, "@Goodbye, witch...@", 0x0004);
	var0009 = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0002]);
	var0009 = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x52, "@Good riddance!@", (byte)0x27, 0x0004, (byte)0x55, 0x032E], 0x0008);
	abort;
labelFunc032E_0275:
	if (!(UI_get_npc_id(0xFFEE) == 0x0009)) goto labelFunc032E_031D;
	UI_set_npc_id(0xFFEE, 0x000A);
	var000B = UI_find_nearby(item, 0x0121, 0x0014, 0x0000);
	enum();
labelFunc032E_029F:
	for (var000E in var000B with var000C to var000D) attend labelFunc032E_02E4;
	var000A = UI_get_object_position(var000E);
	UI_remove_item(var000E);
	UI_sprite_effect(0x0009, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0068);
	goto labelFunc032E_029F;
labelFunc032E_02E4:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x59, 0x0002]);
	var0009 = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x55, 0x032E], 0x000A);
	abort;
labelFunc032E_031D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0008)) goto labelFunc032E_0391;
	UI_set_npc_id(0xFFEE, 0x0009);
	var000A = UI_get_object_position(0xFFEA);
	UI_sprite_effect(0x002F, (var000A[0x0001] - 0x0003), (var000A[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0083);
	var0009 = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x55, 0x032E], 0x000F);
	Func097F(0xFFE1, "@How darest thou!@", 0x000A);
	abort;
labelFunc032E_0391:
	if (!(UI_get_npc_id(0xFFEE) == 0x0007)) goto labelFunc032E_0435;
	UI_set_npc_id(0xFFEE, 0x0008);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_040B;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc032E_040B:
	var0009 = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x52, "@Stop this!@", (byte)0x27, 0x0005, (byte)0x6C, (byte)0x61, (byte)0x6F, (byte)0x52, "@Contra Flam!@", (byte)0x55, 0x032E]);
	abort;
labelFunc032E_0435:
	if (!(UI_get_npc_id(0xFFEE) == 0x0006)) goto labelFunc032E_053D;
	UI_set_npc_id(0xFFEE, 0x0007);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_04AF;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0027);
labelFunc032E_04AF:
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_0503;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([(var000A[0x0001] + 0x0002), var000A[0x0002], var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_0503:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Mas Mas!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	Func097F(0xFFEE, "@Must thou?@", 0x0005);
	abort;
labelFunc032E_053D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0005)) goto labelFunc032E_0684;
	UI_set_npc_id(0xFFEE, 0x0006);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_05B7;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
labelFunc032E_05B7:
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_060B;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([(var000A[0x0001] - 0x0002), var000A[0x0002], var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_060B:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Flam Mas!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	Func097F(0xFFF6, "@Help!@", 0x0000);
	UI_si_path_run_usecode(0xFFF6, [0x0916, 0x0742, 0x0000], 0x0003, item, 0x032E, false);
	Func097F(0xFFEC, "@How rude...@", 0x0006);
	Func097F(0xFFFE, "@Stop that!@", 0x0002);
	Func097F(0xFFFF, "@No!@", 0x000A);
	abort;
labelFunc032E_0684:
	if (!(UI_get_npc_id(0xFFEE) == 0x0004)) goto labelFunc032E_0785;
	UI_set_npc_id(0xFFEE, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"Good Mages, this is the adventurer from a distant land whose arrival was foretold in our conjurings!\"");
	say();
	UI_show_npc_face1(0xFFEC, 0x0000);
	message("\"Could ");
	message(var0004);
	message(" be responsible for the storms which plague the land? Or for the growing strangenesses which afflict our spellcasting?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I hope, my dear, that ");
	message(var0004);
	message(" is the solution to our problems, rather than the cause...\"");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("\"Thou art a fool, MageLord! Our guest is most certainly a factor in the supernatural disturbances that are threatening our world. Let us question ");
	message(var0003);
	message(" now!\"");
	say();
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	UI_end_conversation();
	UI_remove_npc_face1();
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_0757;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([var000A[0x0001], (var000A[0x0002] + 0x0002), var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_0757:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Ex Ort Flam!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_0785:
	if (!(UI_get_npc_id(0xFFEE) == 0x0003)) goto labelFunc032E_07D4;
	UI_set_npc_id(0xFFEE, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("\"Welcome to thee. These cursed teleportation storms have made travel so difficult that we are becoming isolated! It hath disturbed everyone, but it is good to see a new face.\"");
	say();
	UI_end_conversation();
	var0009 = UI_execute_usecode_array(0xFFEC, [(byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_07D4:
	if (!(UI_get_npc_id(0xFFEE) == 0x0002)) goto labelFunc032E_0826;
	UI_set_npc_id(0xFFEE, 0x0003);
	UI_init_conversation();
	UI_show_npc_face0(0xFFE1, 0x0000);
	message("\"Filbercio is never lacking in social graces, ");
	message(var0000);
	message(". Now if he only attended to the problems of Moonshade as he doth attend to his mistresses. Speaking of which...\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Ahem--! Also present, as my dinner companion, is the most charming Frigidazzi. She, too, is a Mage.\"");
	say();
	UI_end_conversation();
	Func09AF(0xFFE1, 0xFFEC, 0x0004, 0x032E);
	abort;
labelFunc032E_0826:
	if (!(UI_get_npc_id(0xFFEE) == 0x0001)) goto labelFunc032E_0878;
	UI_set_npc_id(0xFFEE, 0x0002);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("\"Thou needest not worry, ");
	message(var0000);
	message(". We have brought thee here against thy will, but only that we may get to know thee. Thou art free to leave, once this dinner is concluded.\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Quite right, Gustacio... and here is Adept Rotoluncia, whom I believe thou hast met.\"");
	say();
	UI_end_conversation();
	Func09AF(0xFFEA, 0xFFE1, 0x0004, 0x032E);
	abort;
labelFunc032E_0878:
	if (!(UI_get_npc_id(0xFFEE) == 0x0000)) goto labelFunc032E_0966;
	UI_play_music(0x001B, Func09A0(0x0005, 0x0001));
	UI_set_npc_id(0xFFEE, 0x0001);
	UI_set_item_flag(0xFFEE, 0x001C);
	var000F = UI_find_nearby(0xFE9C, 0x010E, 0x002D, 0x0000);
	var0010 = UI_find_nearby(0xFE9C, 0x01B0, 0x002D, 0x0000);
	enum();
labelFunc032E_08D1:
	for (var0013 in var000F with var0011 to var0012) attend labelFunc032E_08F6;
	if (!(UI_get_item_quality(var0013) == 0x00CF)) goto labelFunc032E_08F3;
	Func0907(var0013, 0x0000);
labelFunc032E_08F3:
	goto labelFunc032E_08D1;
labelFunc032E_08F6:
	enum();
labelFunc032E_08F7:
	for (var0013 in var0010 with var0014 to var0015) attend labelFunc032E_091C;
	if (!(UI_get_item_quality(var0013) == 0x00CF)) goto labelFunc032E_0919;
	Func0907(var0013, 0x0000);
labelFunc032E_0919:
	goto labelFunc032E_08F7;
labelFunc032E_091C:
	var0016 = UI_get_party_list();
	enum();
labelFunc032E_0924:
	for (var000B in var0016 with var0017 to var0018) attend labelFunc032E_093C;
	UI_set_schedule_type(var000B, 0x001F);
	goto labelFunc032E_0924;
labelFunc032E_093C:
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"Please be seated. We have been waiting for thee. I am the MageLord Filbercio.\"");
	say();
	message("\"Allow me to introduce the others. First, my fellow members on the Council of Mages. Adept Gustacio...\"");
	say();
	UI_end_conversation();
	Func09AF(0xFFEE, 0xFFEA, 0x0002, 0x032E);
	abort;
labelFunc032E_0966:
	UI_init_conversation();
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("\"I beg thy pardon, MageLord Filbercio, but I have an urgent message for thee.\"");
	say();
	message("\"I regret to report that mine attempts to locate any significant quantity of the reagent Blood Moss have met with failure.\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Pothos! I should send thee to the dungeons and have the rats feed on thy carcass!\"");
	say();
	message("\"Dear guests, I am afraid that I shall have to adjourn this pleasant repast.\"");
	say();
	message("\"Pothos and I must speak privately concerning important matters of state. I thank thee all for coming!\"");
	say();
	gflags[0x00D9] = true;
	var0019 = [0xFFEE, 0xFFEC, 0xFFEA, 0xFFE3];
	enum();
labelFunc032E_09A9:
	for (var000B in var0019 with var001A to var001B) attend labelFunc032E_09BE;
	UI_revert_schedule(var000B);
	goto labelFunc032E_09A9;
labelFunc032E_09BE:
	var0019 = Func0988(0xFFEA, var0019);
	enum();
labelFunc032E_09CB:
	for (var000B in var0019 with var001C to var001D) attend labelFunc032E_0A09;
	var000A = UI_get_object_position(var000B);
	UI_sprite_effect(0x0007, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(var000B);
	goto labelFunc032E_09CB;
labelFunc032E_0A09:
	UI_set_schedule_type(0xFFEA, 0x001A);
	UI_set_schedule_type(0xFFF6, 0x0017);
	UI_play_sound_effect(0x0082);
	UI_set_new_schedules(0xFFEE, [0x0000, 0x0001, 0x0003, 0x0004, 0x0006, 0x0007], [0x0010, 0x000E, 0x001A, 0x0010, 0x001A, 0x000C], [0x0926, 0x0726, 0x08F7, 0x071C, 0x090A, 0x0717, 0x08F7, 0x0737, 0x090A, 0x0717, 0x0918, 0x072F]);
	var001E = [0x08F3, 0x0779];
	var001F = [0x08E6, 0x0776];
	var0020 = [0x08C8, 0x0716];
	UI_set_new_schedules(0xFFE3, [0x0002, 0x0003, 0x0007], [0x001A, 0x001D, 0x000E], [var0020, var001E, var001F]);
	UI_move_object(0xFFE3, [0x08F9, 0x0778, 0x0000]);
	UI_run_schedule(0xFFE3);
	var0016 = UI_find_nearby(0xFE9C, 0xFFFF, 0x002D, 0x0004);
	var0009 = Func098D();
	enum();
labelFunc032E_0AFF:
	for (var000B in var0016 with var0021 to var0022) attend labelFunc032E_0B2E;
	if (!((UI_get_npc_id(var000B) == 0x000B) && (UI_get_npc_number(var000B) in var0009))) goto labelFunc032E_0B2B;
	UI_add_to_party(var000B);
labelFunc032E_0B2B:
	goto labelFunc032E_0AFF;
labelFunc032E_0B2E:
	UI_clear_item_flag(0xFE9C, 0x0010);
	gflags[0x00DA] = false;
	UI_set_npc_id(0xFFEE, 0x0000);
	abort;
labelFunc032E_0B47:
	return;
}


