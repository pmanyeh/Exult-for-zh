#game "blackgate"
// externs
extern void Func087D 0x87D ();
extern var Func0881 0x881 ();
extern void Func08FF 0x8FF (var var0000);
extern void Func08E6 0x8E6 (var var0000);

void Func06F8 object#(0x6F8) ()
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
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var var002B;
	var var002C;
	var var002D;
	var var002E;
	var var002F;
	var var0030;

	if (!(event == 0x0003)) goto labelFunc06F8_0386;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc06F8_0047;
	var0001 = UI_find_nearest(item, 0x0350, 0x000A);
	var0002 = UI_get_item_frame(var0001);
	if (!(!(var0002 == 0x0009))) goto labelFunc06F8_0047;
	UI_set_item_frame(var0001, 0x0003);
labelFunc06F8_0047:
	if (!(var0000 == 0x0001)) goto labelFunc06F8_0080;
	var0003 = UI_find_nearby(item, 0x02D6, 0x0001, 0x0000);
	if (!var0003) goto labelFunc06F8_006F;
	gflags[0x033F] = true;
	goto labelFunc06F8_0073;
labelFunc06F8_006F:
	gflags[0x033F] = false;
labelFunc06F8_0073:
	if (!(gflags[0x033F] && gflags[0x033C])) goto labelFunc06F8_0080;
	goto labelFunc06F8_00D1;
labelFunc06F8_0080:
	if (!(var0000 == 0x0002)) goto labelFunc06F8_00B9;
	var0003 = UI_find_nearby(item, 0x02D6, 0x0001, 0x0000);
	if (!var0003) goto labelFunc06F8_00A8;
	gflags[0x033C] = true;
	goto labelFunc06F8_00AC;
labelFunc06F8_00A8:
	gflags[0x033C] = false;
labelFunc06F8_00AC:
	if (!(gflags[0x033C] && gflags[0x033F])) goto labelFunc06F8_00B9;
	goto labelFunc06F8_00D1;
labelFunc06F8_00B9:
	if (!(var0000 == 0x0004)) goto labelFunc06F8_00D0;
	if (!(gflags[0x033C] && gflags[0x033F])) goto labelFunc06F8_00D0;
	goto labelFunc06F8_00D1;
labelFunc06F8_00D0:
	return;
labelFunc06F8_00D1:
	var0004 = UI_find_nearest(item, 0x03DE, 0x000A);
	if (!var0004) goto labelFunc06F8_0386;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_find_nearby(var0004, 0x03BB, 0x0001, 0x0000);
	var0007 = false;
	enum();
labelFunc06F8_0107:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc06F8_01F4;
	var000B = UI_get_item_frame(var000A);
	var000C = UI_get_object_position(var000A);
	if (!(var000B == 0x0008)) goto labelFunc06F8_016B;
	if (!(var000C[0x0001] == (var0005[0x0001] - 0x0001))) goto labelFunc06F8_016B;
	if (!(var000C[0x0002] == var0005[0x0002])) goto labelFunc06F8_016B;
	if (!(var000C[0x0003] == 0x0004)) goto labelFunc06F8_016B;
	var0007 = (var0007 + 0x0001);
labelFunc06F8_016B:
	if (!(var000B == 0x0009)) goto labelFunc06F8_01B0;
	if (!(var000C[0x0001] == var0005[0x0001])) goto labelFunc06F8_01B0;
	if (!(var000C[0x0002] == (var0005[0x0002] - 0x0001))) goto labelFunc06F8_01B0;
	if (!(var000C[0x0003] == 0x0004)) goto labelFunc06F8_01B0;
	var0007 = (var0007 + 0x0001);
labelFunc06F8_01B0:
	if (!(var000B == 0x000A)) goto labelFunc06F8_01F1;
	if (!(var000C[0x0001] == var0005[0x0001])) goto labelFunc06F8_01F1;
	if (!(var000C[0x0002] == var0005[0x0002])) goto labelFunc06F8_01F1;
	if (!(var000C[0x0003] == 0x0004)) goto labelFunc06F8_01F1;
	var0007 = (var0007 + 0x0001);
labelFunc06F8_01F1:
	goto labelFunc06F8_0107;
labelFunc06F8_01F4:
	if (!(var0007 == 0x0003)) goto labelFunc06F8_0386;
	var000D = false;
	var000E = UI_find_nearby(UI_get_npc_object(0xFE9C), 0x01B3, 0x0028, 0x0000);
	enum();
labelFunc06F8_021A:
	for (var0011 in var000E with var000F to var0010) attend labelFunc06F8_026E;
	var0012 = UI_get_object_position(var0011);
	if (!((var0012[0x0001] == 0x08A0) || (var0012[0x0001] == 0x08AD))) goto labelFunc06F8_026B;
	if (!(var0012[0x0002] == 0x05EA)) goto labelFunc06F8_026B;
	if (!(var0012[0x0003] == 0x0001)) goto labelFunc06F8_026B;
	var000D = (var000D + 0x0001);
labelFunc06F8_026B:
	goto labelFunc06F8_021A;
labelFunc06F8_026E:
	if (!(var000D == 0x0002)) goto labelFunc06F8_0386;
	Func087D();
	var0013 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	if (!(var0013[0x0002] > var0005[0x0002])) goto labelFunc06F8_02BA;
	if (!UI_is_pc_female()) goto labelFunc06F8_02AD;
	UI_set_item_frame(Func0881(), 0x0014);
	goto labelFunc06F8_02B7;
labelFunc06F8_02AD:
	UI_set_item_frame(Func0881(), 0x0012);
labelFunc06F8_02B7:
	goto labelFunc06F8_02D8;
labelFunc06F8_02BA:
	if (!UI_is_pc_female()) goto labelFunc06F8_02CE;
	UI_set_item_frame(Func0881(), 0x0015);
	goto labelFunc06F8_02D8;
labelFunc06F8_02CE:
	UI_set_item_frame(Func0881(), 0x0013);
labelFunc06F8_02D8:
	var0014 = UI_create_new_object(0x03BB);
	UI_set_item_frame(var0014, 0x0007);
	UI_set_item_frame(var0004, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] - 0x0001);
	var0005[0x0003] = (var0005[0x0003] + 0x0002);
	var0015 = UI_update_last_created(var0005);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0002), (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0044);
	var0016 = UI_execute_usecode_array(var0004, [(byte)0x46, 0x0005, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0018, (byte)0x46, 0x001F, (byte)0x01, (byte)0x55, 0x06F8]);
labelFunc06F8_0386:
	if (!(event == 0x0002)) goto labelFunc06F8_096E;
	if (!gflags[0x030C]) goto labelFunc06F8_03BF;
	if (!(!gflags[0x02EE])) goto labelFunc06F8_03A7;
	Func08FF("@'Tis sad that Erethian's lust for power has brought him to this evil pass.@");
	Func08FF("@Perhaps, at last, he is at rest.@");
labelFunc06F8_03A7:
	if (!(!UI_is_dead(0xFFE9))) goto labelFunc06F8_03B8;
	Func08FF("@I am sure that Lord British even now awaits news of Exodus' exile.@");
labelFunc06F8_03B8:
	Func08FF("@It is time to leave this barren island behind.@");
	abort;
labelFunc06F8_03BF:
	var0005 = UI_get_object_position(item);
	var0013 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	if (!(gflags[0x033F] && gflags[0x033C])) goto labelFunc06F8_05A7;
	if (!(!gflags[0x02EE])) goto labelFunc06F8_0562;
	var0017 = false;
	var0018 = false;
	var0019 = UI_find_nearby(item, 0x009A, 0x0050, 0x0008);
	enum();
labelFunc06F8_0400:
	for (var001C in var0019 with var001A to var001B) attend labelFunc06F8_0471;
	if (!UI_get_cont_items(var001C, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F8_046E;
	if (!(!(UI_get_distance(var001C, item) < 0x0008))) goto labelFunc06F8_0468;
	var001D = UI_get_object_position(var001C);
	UI_sprite_effect(0x000D, (var001D[0x0001] - 0x0001), (var001D[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func08E6(var001C);
	goto labelFunc06F8_046E;
labelFunc06F8_0468:
	var0017 = var001C;
labelFunc06F8_046E:
	goto labelFunc06F8_0400;
labelFunc06F8_0471:
	if (!(!var0017)) goto labelFunc06F8_051B;
	var0017 = UI_create_new_object(0x009A);
	UI_set_item_flag(var0017, 0x0012);
	var001E = UI_get_object_position(UI_get_npc_object(0xFE9C));
	var001F = UI_get_object_position(item);
	var001D = [0x08A8, 0x0000, 0x0000];
	if (!(var001E[0x0002] > var001F[0x0002])) goto labelFunc06F8_04D7;
	UI_set_item_frame(var0017, 0x0013);
	var001D[0x0002] = 0x05E6;
	goto labelFunc06F8_04EA;
labelFunc06F8_04D7:
	UI_set_item_frame(var0017, 0x0003);
	var001D[0x0002] = 0x05EE;
labelFunc06F8_04EA:
	var0015 = UI_update_last_created(var001D);
	UI_sprite_effect(0x000D, (var001D[0x0001] - 0x0001), (var001D[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc06F8_051B:
	var001D = UI_get_object_position(var0017);
	var001F = UI_get_object_position(item);
	var0020 = 0x0004;
	if (!(var001D[0x0002] > var001F[0x0002])) goto labelFunc06F8_0549;
	var0020 = 0x0000;
labelFunc06F8_0549:
	var0016 = UI_execute_usecode_array(var0017, [(byte)0x59, var0020, (byte)0x27, 0x0005, (byte)0x70]);
labelFunc06F8_0562:
	UI_earthquake(0x0001);
	UI_sprite_effect(0x0011, var0013[0x0001], var0013[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	gflags[0x033C] = false;
	var0021 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06F8], 0x0007);
	abort;
labelFunc06F8_05A7:
	if (!gflags[0x033F]) goto labelFunc06F8_06A8;
	if (!(!gflags[0x02EE])) goto labelFunc06F8_05FB;
	UI_show_npc_face(0xFEE2, 0x0001);
	message("\"No! Thou must not do this!\" Erethian's voice is full of anguish. He raises his arms and begins a powerful spell.");
	say();
	message("\"Vas Ort Rel Tym...\"");
	say();
	message("He stops mid-spell and begins another, pointing towards the Talisman of Infinity.");
	say();
	message("\"Vas An Ort Ailem!\"");
	say();
	message("You immediately recognize the resonance of a spell gone awry, and apparently so does Erethian. A look of horror comes to his wrinkled features which appear to become more lined by the second.*");
	say();
	var001C = UI_find_nearest(item, 0x009A, 0x000A);
	var0016 = UI_execute_usecode_array(var001C, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D]);
labelFunc06F8_05FB:
	UI_earthquake(0x0001);
	var0022 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06F8_0614:
	for (var0025 in var0022 with var0023 to var0024) attend labelFunc06F8_0665;
	if (!((UI_get_item_frame(var0025) == 0x0007) && (UI_get_item_quality(var0025) == 0x0001))) goto labelFunc06F8_0662;
	var0026 = UI_get_object_position(var0025);
	UI_sprite_effect(0x0011, var0026[0x0001], var0026[0x0002], 0x0000, 0x0000, 0x0000, 0x0003);
labelFunc06F8_0662:
	goto labelFunc06F8_0614;
labelFunc06F8_0665:
	UI_sprite_effect(0x0011, (var0005[0x0001] - 0x0002), (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x033F] = false;
	gflags[0x033C] = true;
	var0021 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06F8], 0x0007);
	abort;
labelFunc06F8_06A8:
	if (!gflags[0x033C]) goto labelFunc06F8_07B1;
	if (!(!gflags[0x02EE])) goto labelFunc06F8_0705;
	var001C = UI_find_nearest(item, 0x009A, 0x000A);
	var0027 = UI_get_item_frame_rot(var001C);
	var0028 = UI_get_object_position(var001C);
	Func08E6(var001C);
	var0029 = UI_create_new_object(0x0210);
	UI_set_item_flag(var0029, 0x0012);
	UI_set_item_frame_rot(var0029, var0027);
	var0015 = UI_update_last_created(var0028);
labelFunc06F8_0705:
	UI_earthquake(0x0001);
	var0022 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06F8_071E:
	for (var0025 in var0022 with var002A to var002B) attend labelFunc06F8_076F;
	if (!((UI_get_item_frame(var0025) == 0x0007) && (UI_get_item_quality(var0025) == 0x0002))) goto labelFunc06F8_076C;
	var0026 = UI_get_object_position(var0025);
	UI_sprite_effect(0x0011, var0026[0x0001], var0026[0x0002], 0x0000, 0x0000, 0x0000, 0x0003);
labelFunc06F8_076C:
	goto labelFunc06F8_071E;
labelFunc06F8_076F:
	UI_sprite_effect(0x0011, var0013[0x0001], var0013[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0009);
	gflags[0x033F] = false;
	gflags[0x033C] = false;
	var0021 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06F8], 0x0005);
	abort;
labelFunc06F8_07B1:
	if (!(!gflags[0x02EE])) goto labelFunc06F8_0834;
	var001C = UI_find_nearest(item, 0x0210, 0x000A);
	var0027 = UI_get_item_frame(var001C);
	var0028 = UI_get_object_position(var001C);
	Func08E6(var001C);
	var0029 = UI_create_new_object(0x037C);
	UI_set_item_flag(var0029, 0x0012);
	if (!(var0027 == 0x000C)) goto labelFunc06F8_0808;
	UI_set_item_frame(var0029, 0x000E);
labelFunc06F8_0808:
	if (!(var0027 == 0x001C)) goto labelFunc06F8_081C;
	UI_set_item_frame(var0029, 0x0016);
labelFunc06F8_081C:
	var0015 = UI_update_last_created(var0028);
	gflags[0x02EE] = true;
	UI_play_music(0x0011, 0x0000);
labelFunc06F8_0834:
	UI_sprite_effect(0x0011, (var0005[0x0001] - 0x0002), (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0008, (var0005[0x0001] - 0x0002), (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0009);
	var0006 = UI_find_nearby(item, 0x03BB, 0x0001, 0x0000);
	enum();
labelFunc06F8_089B:
	for (var000A in var0006 with var002C to var002D) attend labelFunc06F8_08F7;
	var000B = UI_get_item_frame(var000A);
	if (!(var000B == 0x0007)) goto labelFunc06F8_08C1;
	UI_remove_item(var000A);
labelFunc06F8_08C1:
	if (!(var000B == 0x0008)) goto labelFunc06F8_08D2;
	UI_remove_item(var000A);
labelFunc06F8_08D2:
	if (!(var000B == 0x0009)) goto labelFunc06F8_08E3;
	UI_remove_item(var000A);
labelFunc06F8_08E3:
	if (!(var000B == 0x000A)) goto labelFunc06F8_08F4;
	UI_remove_item(var000A);
labelFunc06F8_08F4:
	goto labelFunc06F8_089B;
labelFunc06F8_08F7:
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var002E = Func0881();
	var002F = UI_delayed_execute_usecode_array(var002E, [(byte)0x2C, (byte)0x2D], 0x000E);
	var0016 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000C, (byte)0x55, 0x069D]);
	var0030 = UI_find_nearest(item, 0x02D6, 0x000A);
	if (!var0030) goto labelFunc06F8_0965;
	var0016 = UI_execute_usecode_array(var0030, [(byte)0x27, 0x0010, (byte)0x55, 0x06F8]);
labelFunc06F8_0965:
	UI_remove_item(item);
	gflags[0x030C] = true;
labelFunc06F8_096E:
	return;
}


