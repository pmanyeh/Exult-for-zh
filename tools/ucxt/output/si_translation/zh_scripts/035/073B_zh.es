#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08C0 0x8C0 (var var0000);
extern void Func0922 0x922 (var var0000);
extern void Func07D8 object#(0x7D8) ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func073B object#(0x73B) ()
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

	if (!((UI_get_item_quality(item) == 0x00FF) && (event == 0x0003))) goto labelFunc073B_00DD;
	UI_set_weather(0x0003);
	UI_play_sound_effect(0x0082);
	var0000 = UI_get_object_position(item);
	var0001 = UI_create_new_object2(0x013E, [var0000[0x0001], (var0000[0x0002] + 0x0001), var0000[0x0003]]);
	UI_set_schedule_type(var0001, 0x000F);
	UI_set_alignment(var0001, 0x0001);
	UI_set_item_flag(var0001, 0x001D);
	var0002 = Func0992(0x0001, "@We must hurry!@", "@I must hurry!@", true);
	if (!(!UI_get_item_flag(0xFFFD, 0x0006))) goto labelFunc073B_009A;
	UI_add_to_party(0xFFFD);
	Func097F(0xFFFD, "@Wait, Avatar!@", 0x0000);
labelFunc073B_009A:
	if (!(!UI_get_item_flag(0xFFFE, 0x0006))) goto labelFunc073B_00BB;
	UI_add_to_party(0xFFFE);
	Func097F(0xFFFE, "@Hold, Avatar!@", 0x0000);
labelFunc073B_00BB:
	if (!(!UI_get_item_flag(0xFFFF, 0x0006))) goto labelFunc073B_00DC;
	UI_add_to_party(0xFFFF);
	Func097F(0xFFFF, "@Stop, Avatar!@", 0x0000);
labelFunc073B_00DC:
	abort;
labelFunc073B_00DD:
	var0003 = Func09A0(0x0002, 0x0001);
	if (!(event == 0x0003)) goto labelFunc073B_01B2;
	var0002 = UI_set_item_quality(var0003, 0x0000);
	var0001 = UI_find_nearby(0xFE9C, 0x013E, 0x0028, 0x0000);
	var0002 = Func0992(0x0001, "@Batlin!@", "@Batlin!@", true);
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x27, 0x0007, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x65, (byte)0x27, 0x0002, (byte)0x68, (byte)0x68, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61, (byte)0x30, (byte)0x27, 0x0002, (byte)0x30, (byte)0x27, 0x0001, (byte)0x30, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0005]);
	Func08C0(true);
	var0002 = UI_set_item_quality(item, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x061D], 0x001E);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	abort;
labelFunc073B_01B2:
	if (!(event == 0x0002)) goto labelFunc073B_0DC3;
	var0004 = UI_get_item_quality(var0003);
	if (!(var0004 == 0x0000)) goto labelFunc073B_029C;
	var0001 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	UI_show_npc_face0(0xFEE1, 0x0001);
	message("\"Fool! Thou art too late. Now I shall enter the Wall of Lights and become immortal!\"");
	say();
	message("\"Then I shall return to destroy thy mortal soul!\"");
	say();
	UI_remove_npc_face0();
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x61, (byte)0x27, 0x0003, (byte)0x6F, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0004, (byte)0x65, (byte)0x68, (byte)0x27, 0x0003, (byte)0x68, (byte)0x27, 0x0003, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x67, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x65, (byte)0x68, (byte)0x27, 0x0003, (byte)0x68, (byte)0x27, 0x0003, (byte)0x69, (byte)0x27, 0x0003, (byte)0x55, 0x073B]);
	var0000 = UI_get_object_position(var0001);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_set_item_quality(var0003, 0x0001);
labelFunc073B_029C:
	if (!(var0004 == 0x0001)) goto labelFunc073B_0360;
	var0001 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	if (!(!var0001)) goto labelFunc073B_02C7;
	UI_error_message("No Batlin");
labelFunc073B_02C7:
	UI_show_npc_face0(0xFEE1, 0x0001);
	message("\"Wait... No! The wall is not opening for me! This cannot be!\"");
	say();
	message("\"No... The banes, they have... Oh, what have I done!\"");
	say();
	message("\"I have been tricked! Avatar! I beseech thee! Help me before...\"");
	say();
	UI_remove_npc_face0();
	UI_clear_item_flag(var0001, 0x001D);
	Func08C0(false);
	UI_obj_sprite_effect(var0001, 0x002A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(var0001, 0x001B, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_get_party_list();
	UI_play_sound_effect(0x002A);
	var0002 = UI_set_item_quality(var0003, 0x0002);
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x27, 0x0014, (byte)0x55, 0x073B]);
	UI_end_conversation();
	abort;
labelFunc073B_0360:
	if (!(var0004 == 0x0002)) goto labelFunc073B_05B7;
	var0001 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	if (!(!var0001)) goto labelFunc073B_038B;
	UI_error_message("No Batlin");
labelFunc073B_038B:
	var0000 = UI_get_object_position(var0001);
	var0006 = UI_create_new_object(0x0281);
	if (!var0006) goto labelFunc073B_03D7;
	UI_set_item_frame(var0006, 0x0001);
	var0002 = UI_set_item_quality(var0006, 0x0086);
	var0002 = UI_give_last_created(var0001);
	if (!(!var0002)) goto labelFunc073B_03D7;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_03D7:
	var0006 = UI_create_new_object(0x0106);
	if (!var0006) goto labelFunc073B_040C;
	UI_set_item_frame(var0006, 0x0003);
	var0002 = UI_give_last_created(var0001);
	if (!(!var0002)) goto labelFunc073B_040C;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_040C:
	var0007 = UI_create_new_object(0x022B);
	if (!var0007) goto labelFunc073B_057F;
	UI_set_item_frame(var0007, 0x0000);
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_045B;
	UI_set_item_frame(var0006, 0x0009);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_045B;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_045B:
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_0490;
	UI_set_item_frame(var0006, 0x0004);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_0490;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_0490:
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_04C5;
	UI_set_item_frame(var0006, 0x0002);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_04C5;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_04C5:
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_04FA;
	UI_set_item_frame(var0006, 0x000D);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_04FA;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_04FA:
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_052F;
	UI_set_item_frame(var0006, 0x0011);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_052F;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_052F:
	var0006 = UI_create_new_object(0x022F);
	if (!var0006) goto labelFunc073B_0564;
	UI_set_item_frame(var0006, 0x0003);
	var0002 = UI_give_last_created(var0007);
	if (!(!var0002)) goto labelFunc073B_0564;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_0564:
	var0002 = UI_give_last_created(var0001);
	if (!(!var0002)) goto labelFunc073B_057F;
	var0002 = UI_update_last_created(var0000);
labelFunc073B_057F:
	UI_clear_item_flag(var0001, 0x001D);
	UI_kill_npc(var0001);
	var0002 = UI_set_item_quality(var0003, 0x0003);
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x073B]);
	abort;
labelFunc073B_05B7:
	if (!(var0004 == 0x0003)) goto labelFunc073B_060D;
	Func0922(0x0016);
	gflags[0x0004] = true;
	0x0000->Func07D8();
	var0006 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x0033, var0006);
	var0002 = UI_set_item_quality(var0003, 0x0004);
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x073B]);
labelFunc073B_060D:
	if (!((var0004 > 0x0003) && (var0004 < 0x0007))) goto labelFunc073B_0821;
	var0005 = [0xFFFE, 0xFFFF, 0xFFFD];
	var0008 = var0005[(var0004 - 0x0003)];
	UI_play_sound_effect(0x0077);
	if (!(var0004 > 0x0004)) goto labelFunc073B_0675;
	var0000 = UI_get_object_position(var0008);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc073B_0675:
	var0009 = UI_find_object(0xFE99, 0x019E, 0xFE99, 0x0010);
	var000A = UI_find_direction(var0008, var0009);
	var000B = [0x0000, 0x0000];
	if (!(var000A == 0x0000)) goto labelFunc073B_06B7;
	var000B = [0x0000, 0xFFFF];
labelFunc073B_06B7:
	if (!(var000A == 0x0001)) goto labelFunc073B_06CD;
	var000B = [0x0001, 0xFFFF];
labelFunc073B_06CD:
	if (!(var000A == 0x0002)) goto labelFunc073B_06E3;
	var000B = [0x0001, 0x0000];
labelFunc073B_06E3:
	if (!(var000A == 0x0003)) goto labelFunc073B_06F9;
	var000B = [0x0001, 0x0001];
labelFunc073B_06F9:
	if (!(var000A == 0x0004)) goto labelFunc073B_070F;
	var000B = [0x0000, 0x0001];
labelFunc073B_070F:
	if (!(var000A == 0x0005)) goto labelFunc073B_0725;
	var000B = [0xFFFF, 0x0001];
labelFunc073B_0725:
	if (!(var000A == 0x0006)) goto labelFunc073B_073B;
	var000B = [0xFFFF, 0x0000];
labelFunc073B_073B:
	if (!(var000A == 0x0007)) goto labelFunc073B_0751;
	var000B = [0xFFFF, 0xFFFF];
labelFunc073B_0751:
	var000C = UI_get_distance(var0008, var0009);
	var000B[0x0001] = (var000B[0x0001] * var000C);
	var000B[0x0002] = (var000B[0x0002] * var000C);
	var0000 = UI_get_object_position(var0008);
	var0000[0x0001] = (var0000[0x0001] + var000B[0x0001]);
	var0000[0x0002] = (var0000[0x0002] + var000B[0x0002]);
	var000B[0x0001] = (var000B[0x0001] * 0xFFFF);
	var000B[0x0002] = (var000B[0x0002] * 0xFFFF);
	UI_sprite_effect(0x0020, var0000[0x0001], var0000[0x0002], var000B[0x0001], var000B[0x0002], 0x0000, var000C);
	var0002 = UI_set_item_quality(var0003, (var0004 + 0x0001));
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x27, (var000C + 0x000A), (byte)0x55, 0x073B]);
labelFunc073B_0821:
	if (!(var0004 == 0x0004)) goto labelFunc073B_08BF;
	if (!UI_get_item_flag(0xFFFE, 0x0006)) goto labelFunc073B_08BF;
	var0000 = UI_get_object_position(0xFFFE);
	var000D = UI_get_item_frame(0xFFFE);
	UI_remove_from_party(0xFFFE);
	UI_move_object(0xFFFE, [0x0065, 0x0036, 0x0000]);
	Func09AC(0xFFFE, 0x0065, 0x0036, 0x000F);
	var000E = UI_create_new_object2(0x013D, var0000);
	UI_set_item_frame(var000E, var000D);
	UI_set_schedule_type(var000E, 0x000F);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(0xFFFE, 0x0004);
labelFunc073B_08BF:
	if (!(var0004 == 0x0005)) goto labelFunc073B_095D;
	if (!UI_get_item_flag(0xFFFF, 0x0006)) goto labelFunc073B_095D;
	var0000 = UI_get_object_position(0xFFFF);
	var000D = UI_get_item_frame(0xFFFF);
	UI_remove_from_party(0xFFFF);
	UI_move_object(0xFFFF, [0x0068, 0x0036, 0x0000]);
	Func09AC(0xFFFF, 0x0068, 0x0036, 0x000F);
	var000E = UI_create_new_object2(0x038A, var0000);
	UI_set_item_frame(var000E, var000D);
	UI_set_schedule_type(var000E, 0x000F);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(0xFFFF, 0x0004);
labelFunc073B_095D:
	if (!(var0004 == 0x0006)) goto labelFunc073B_09FB;
	if (!UI_get_item_flag(0xFFFD, 0x0006)) goto labelFunc073B_09FB;
	var0000 = UI_get_object_position(0xFFFD);
	var000D = UI_get_item_frame(0xFFFD);
	UI_remove_from_party(0xFFFD);
	UI_move_object(0xFFFD, [0x0062, 0x0036, 0x0000]);
	Func09AC(0xFFFD, 0x0062, 0x0036, 0x000F);
	var000E = UI_create_new_object2(0x0370, var0000);
	UI_set_item_frame(var000E, var000D);
	UI_set_schedule_type(var000E, 0x000F);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(0xFFFD, 0x0004);
labelFunc073B_09FB:
	if (!(var0004 == 0x0007)) goto labelFunc073B_0DC3;
	UI_show_npc_face0(0xFEDE, 0x0000);
	message("\"I am Anarchy! Hahaha!\"");
	say();
	message("\"The world shall quail before me! Wrong shall become right! And right shall become lost! Nothing shall escape my touch!\"");
	say();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFEDD, 0x0000);
	message("\"Hahaha! I am the Wantonness Bane!\"");
	say();
	message("\"Wherever I pass, people shall frolic and sate their wild desires! I shall drive thee to feed thy darkest hungers!\"");
	say();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFEDC, 0x0000);
	message("\"I -- hahaha! -- am the Insanity Bane! Hahaha!\"");
	say();
	message("\"All those who fall within my shadow shall have their reason clouded and their wits addled! Their greatest love shall lie in the rubbish they once loathed! Hahaha!\"");
	say();
	UI_remove_npc_face0();
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000F = UI_find_nearby(0xFE9C, 0x0370, 0x0028, 0x0000);
	if (!var000F) goto labelFunc073B_0B44;
	var0000 = UI_get_object_position(var000F);
	UI_remove_item(var000F);
	var0010 = UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99);
	if (!var0010) goto labelFunc073B_0B44;
	enum();
labelFunc073B_0AB4:
	for (var0013 in var0010 with var0011 to var0012) attend labelFunc073B_0B44;
	var0014 = UI_set_last_created(var0013);
	if (!var0014) goto labelFunc073B_0B41;
	var0014 = UI_update_last_created(var0000);
	if (!(!var0014)) goto labelFunc073B_0AF3;
	var0014 = UI_update_last_created([0x0921, 0x017A, 0x0000]);
labelFunc073B_0AF3:
	if (!(!var0014)) goto labelFunc073B_0B0D;
	var0014 = UI_update_last_created([0x0923, 0x0178, 0x0000]);
labelFunc073B_0B0D:
	if (!(!var0014)) goto labelFunc073B_0B27;
	var0014 = UI_update_last_created([0x0925, 0x017A, 0x0000]);
labelFunc073B_0B27:
	if (!(!var0014)) goto labelFunc073B_0B41;
	var0014 = UI_update_last_created([0x0923, 0x017C, 0x0000]);
labelFunc073B_0B41:
	goto labelFunc073B_0AB4;
labelFunc073B_0B44:
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000F = UI_find_nearby(0xFE9C, 0x038A, 0x0028, 0x0000);
	if (!var000F) goto labelFunc073B_0C37;
	var0000 = UI_get_object_position(var000F);
	UI_remove_item(var000F);
	var0010 = UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99);
	if (!var0010) goto labelFunc073B_0C37;
	enum();
labelFunc073B_0BA7:
	for (var0013 in var0010 with var0015 to var0016) attend labelFunc073B_0C37;
	var0014 = UI_set_last_created(var0013);
	if (!var0014) goto labelFunc073B_0C34;
	var0014 = UI_update_last_created(var0000);
	if (!(!var0014)) goto labelFunc073B_0BE6;
	var0014 = UI_update_last_created([0x092B, 0x0174, 0x0000]);
labelFunc073B_0BE6:
	if (!(!var0014)) goto labelFunc073B_0C00;
	var0014 = UI_update_last_created([0x092D, 0x0172, 0x0000]);
labelFunc073B_0C00:
	if (!(!var0014)) goto labelFunc073B_0C1A;
	var0014 = UI_update_last_created([0x092F, 0x0174, 0x0000]);
labelFunc073B_0C1A:
	if (!(!var0014)) goto labelFunc073B_0C34;
	var0014 = UI_update_last_created([0x092D, 0x0176, 0x0000]);
labelFunc073B_0C34:
	goto labelFunc073B_0BA7;
labelFunc073B_0C37:
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000F = UI_find_nearby(0xFE9C, 0x013D, 0x0028, 0x0000);
	if (!var000F) goto labelFunc073B_0D2A;
	var0000 = UI_get_object_position(var000F);
	UI_remove_item(var000F);
	var0010 = UI_get_cont_items(0xFFFE, 0xFE99, 0xFE99, 0xFE99);
	if (!var0010) goto labelFunc073B_0D2A;
	enum();
labelFunc073B_0C9A:
	for (var0013 in var0010 with var0017 to var0018) attend labelFunc073B_0D2A;
	var0014 = UI_set_last_created(var0013);
	if (!var0014) goto labelFunc073B_0D27;
	var0014 = UI_update_last_created(var0000);
	if (!(!var0014)) goto labelFunc073B_0CD9;
	var0014 = UI_update_last_created([0x092A, 0x017A, 0x0000]);
labelFunc073B_0CD9:
	if (!(!var0014)) goto labelFunc073B_0CF3;
	var0014 = UI_update_last_created([0x092C, 0x0178, 0x0000]);
labelFunc073B_0CF3:
	if (!(!var0014)) goto labelFunc073B_0D0D;
	var0014 = UI_update_last_created([0x092E, 0x017A, 0x0000]);
labelFunc073B_0D0D:
	if (!(!var0014)) goto labelFunc073B_0D27;
	var0014 = UI_update_last_created([0x092C, 0x017C, 0x0000]);
labelFunc073B_0D27:
	goto labelFunc073B_0C9A;
labelFunc073B_0D2A:
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_npc_nearby(0xFFDE)) goto labelFunc073B_0D79;
	var0000 = UI_get_object_position(0xFFDE);
	var0002 = UI_execute_usecode_array(0xFFDE, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x78, 0x0037, 0x0000]);
labelFunc073B_0D79:
	UI_play_sound_effect(0x002A);
	gflags[0x02DC] = true;
	var0002 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0028);
	var0002 = UI_set_item_quality(var0003, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_weather(0x0000);
labelFunc073B_0DC3:
	return;
}


