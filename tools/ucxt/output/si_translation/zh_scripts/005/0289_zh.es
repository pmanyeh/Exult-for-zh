#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099E 0x99E (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func02C0 shape#(0x2C0) ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0887 0x887 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0289 shape#(0x289) ()
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

	var0000 = UI_get_item_frame(item);
	if (!(event == 0x0001)) goto labelFunc0289_049E;
	if (!(var0000 == 0x0006)) goto labelFunc0289_00A4;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0289_00A4;
	Func097F(var0001, "@Ow!@", 0x0000);
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x78, 0x0001, 0x0000]);
	var0003 = UI_find_nearby(0xFE9C, 0x032A, 0x000A, 0x0000);
	var0004 = 0x0000;
	if (!var0003) goto labelFunc0289_00A4;
	enum();
labelFunc0289_006E:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0289_0090;
	if (!(UI_get_item_frame(var0007) == 0x0000)) goto labelFunc0289_008D;
	var0004 = var0007;
labelFunc0289_008D:
	goto labelFunc0289_006E;
labelFunc0289_0090:
	if (!(var0004 != 0x0000)) goto labelFunc0289_00A4;
	UI_set_item_frame(var0004, 0x0002);
labelFunc0289_00A4:
	if (!(var0000 == 0x0004)) goto labelFunc0289_0186;
	UI_close_gumps();
	if (!Func099E(item)) goto labelFunc0289_00C3;
	var0008 = Func099E(item);
	goto labelFunc0289_00C7;
labelFunc0289_00C3:
	var0008 = item;
labelFunc0289_00C7:
	UI_obj_sprite_effect(var0008, 0x0018, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x001D);
	var0009 = UI_find_nearby(0xFE9C, 0x036A, 0x001E, 0x0000);
	if (!(var0009 == [])) goto labelFunc0289_0179;
	UI_set_item_flag(0xFEF3, 0x001D);
	UI_set_alignment(0xFEF3, 0x0001);
	var000A = UI_approach_avatar(0xFEF3, 0x0078, 0x0028);
	if (!var000A) goto labelFunc0289_0155;
	UI_si_path_run_usecode(0xFEF3, [0x0000, 0x0000, 0x0000], 0x0009, UI_get_npc_object(0xFEF3), 0x036A, true);
	goto labelFunc0289_0176;
labelFunc0289_0155:
	gflags[0x0007] = true;
	var0002 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0289], 0x000F);
labelFunc0289_0176:
	goto labelFunc0289_0186;
labelFunc0289_0179:
	UI_set_schedule_type(var0009[0x0001], 0x0003);
labelFunc0289_0186:
	if (!(var0000 == 0x0008)) goto labelFunc0289_024E;
	UI_close_gumps();
	var000B = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000B = UI_get_object_position(item);
	UI_obj_sprite_effect(item, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x060F]);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x060F], 0x0002);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x060F], 0x0004);
	Func097F(0xFE9C, "Yeeooww!", 0x0003);
	UI_clear_item_flag(item, 0x0012);
	UI_remove_item(item);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0289], 0x000A);
labelFunc0289_024E:
	if (!(var0000 == 0x0009)) goto labelFunc0289_03A8;
	var000C = UI_get_object_position(item);
	if (!(!(((var000C[0x0001] > 0x0610) && (var000C[0x0001] < 0x066F)) && ((var000C[0x0002] > 0x0070) && (var000C[0x0002] < 0x00BF))))) goto labelFunc0289_03A8;
	UI_play_sound_effect(0x003F);
	var000D = UI_find_nearby(item, 0x02F3, 0x000A, 0x0000);
	if (!var000D) goto labelFunc0289_0353;
	enum();
labelFunc0289_02AE:
	for (var0007 in var000D with var000E to var000F) attend labelFunc0289_0353;
	var000B = UI_get_object_position(var0007);
	var0010 = UI_get_cont_items(var0007, 0xFE99, 0xFE99, 0xFE99);
	UI_sprite_effect(0x000D, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0007->Func02C0();
	enum();
labelFunc0289_02FC:
	for (var0013 in var0010 with var0011 to var0012) attend labelFunc0289_0350;
	if (!((UI_get_item_shape(var0013) == 0x0190) && (UI_get_item_frame(var0013) == 0x0008))) goto labelFunc0289_0339;
	var0014 = UI_set_npc_prop(0xFF6B, 0x0003, 0x0001);
	gflags[0x025F] = true;
	gflags[0x0262] = true;
labelFunc0289_0339:
	var0002 = UI_set_last_created(var0013);
	var0002 = UI_update_last_created(var000B);
	goto labelFunc0289_02FC;
labelFunc0289_0350:
	goto labelFunc0289_02AE;
labelFunc0289_0353:
	var0015 = UI_find_nearby(item, 0x00E8, 0x000A, 0x0000);
	if (!var0015) goto labelFunc0289_03A8;
	enum();
labelFunc0289_036B:
	for (var0007 in var0015 with var0016 to var0017) attend labelFunc0289_03A8;
	var000B = UI_get_object_position(var0007);
	var0007->Func02C0();
	UI_sprite_effect(0x000D, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0289_036B;
labelFunc0289_03A8:
	if (!(var0000 == 0x000C)) goto labelFunc0289_049E;
	var000C = UI_get_object_position(item);
	if (!((var000C[0x0001] > 0x0234) && ((var000C[0x0001] < 0x023D) && ((var000C[0x0002] > 0x0BC7) && (var000C[0x0002] < 0x0BCD))))) goto labelFunc0289_049E;
	gflags[0x02FD] = true;
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	UI_set_weather(0x0002);
	var000B = UI_get_object_position(item);
	UI_remove_item(item);
	UI_sprite_effect(0x001A, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0018 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x0041, var0018);
	var0002 = UI_delayed_execute_usecode_array(var0018, [(byte)0x23, (byte)0x55, 0x0618], 0x001E);
	gflags[0x0313] = true;
labelFunc0289_049E:
	if (!(var0000 == 0x000D)) goto labelFunc0289_056D;
	UI_close_gumps();
	var0019 = UI_click_on_item();
	var001A = UI_get_item_shape(var0019);
	if (!(var0019 == UI_get_npc_object(0xFE9C))) goto labelFunc0289_04CC;
	return;
labelFunc0289_04CC:
	if (!(var0019[0x0001] != 0x0000)) goto labelFunc0289_055D;
	if (!(UI_is_npc(var0019[0x0001]) && (UI_get_npc_number(var0019[0x0001]) != 0xFE9C))) goto labelFunc0289_050E;
	var001B = UI_get_npc_number(var0019);
	Func097F(var001B, "@Don't tie me up!@", 0x0000);
	goto labelFunc0289_055A;
labelFunc0289_050E:
	if (!(var001A == 0x03BE)) goto labelFunc0289_054A;
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000D)) goto labelFunc0289_0536;
	Func0887(var0019);
	goto labelFunc0289_0547;
labelFunc0289_0536:
	var001C = Func0992(0x0001, "@Don't leave the rope!@", "@I shouldn't leave the rope!@", false);
	return;
labelFunc0289_0547:
	goto labelFunc0289_055A;
labelFunc0289_054A:
	var001C = Func0992(0x0001, "@Try it on something else!@", "@Perhaps something else...@", false);
labelFunc0289_055A:
	goto labelFunc0289_056D;
labelFunc0289_055D:
	var001C = Func0992(0x0001, "@That won't work!@", "@That won't work!@", false);
labelFunc0289_056D:
	if (!(event == 0x0002)) goto labelFunc0289_05CD;
	if (!(gflags[0x0007] == true)) goto labelFunc0289_05BD;
	gflags[0x0007] = false;
	var001C = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var001C != 0xFE9C)) goto labelFunc0289_05AC;
	UI_show_npc_face0(var001C, 0x0000);
	message("\"The dog doth not come! Perhaps thou shouldst try the whistle in a more open place, where the sound will travel.\"");
	say();
	goto labelFunc0289_05BC;
labelFunc0289_05AC:
	var001C = Func0992(0xFE9C, 0x0000, "@I should try this elsewhere...@", true);
labelFunc0289_05BC:
	abort;
labelFunc0289_05BD:
	var001C = Func0992(0xFFFD, "@The spellbook! It disintegrated!@", 0x0000, false);
labelFunc0289_05CD:
	return;
}


