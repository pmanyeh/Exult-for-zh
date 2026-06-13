#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();

void Func01D1 shape#(0x1D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	if (!(event == 0x0002)) goto labelFunc01D1_035D;
	if (!gflags[0x0006]) goto labelFunc01D1_0127;
	if (!gflags[0x0078]) goto labelFunc01D1_00E2;
	if (!(gflags[0x018B] && (!gflags[0x0190]))) goto labelFunc01D1_00DF;
	UI_show_npc_face0(0xFFFD, 0x0000);
	var0001 = UI_get_music_track();
	gflags[0x0190] = true;
	message("\"Wait, sailor! I shall sing thee mine heart's one song... I fear that it is a sad one --\"");
	say();
	UI_play_music(0x003D, var0001);
	message("\"It is a shame, a heartsore shame,\"");
	say();
	UI_play_music(0x003E, var0001);
	message("\"That I am singing of my love in vain.\"");
	say();
	UI_play_music(0x003B, var0001);
	message("\"For I have lost my lady, my love,\"");
	say();
	UI_play_music(0x003C, var0001);
	message("\"And I will search for her, yes, search for her,\"");
	say();
	UI_play_music(0x003D, var0001);
	message("\"Even through all the stars above.\"");
	say();
	UI_play_music(0x003E, var0001);
	message("\"Gwenno, canst thou hear me? Gwenno, my dear,\"");
	say();
	UI_play_music(0x003B, var0001);
	message("\"Take heart for thy beloved Iolo is here!\"");
	say();
	UI_play_music(0x003C, var0001);
	UI_remove_npc_face0();
	UI_revert_schedule(0xFFC6);
	UI_run_schedule(0xFFC6);
	UI_set_schedule_type(0xFFC6, 0x000C);
	Func097F(0xFFD0, "@How sad...@", 0x0000);
	Func097F(0xFFCB, "@Catchy tune...@", 0x000A);
	abort;
labelFunc01D1_00DF:
	goto labelFunc01D1_0124;
labelFunc01D1_00E2:
	UI_show_npc_face0(0xFFFD, 0x0000);
	if (!(!gflags[0x0038])) goto labelFunc01D1_0108;
	message("\"Please free thine old friend! There hath been a terrible mistake, ");
	message(var0000);
	message("!\"");
	say();
	message("\"That storm transported me to this odd city. Because I am a stranger, they arrested me. They say that I am an enchanter!\"");
	say();
	message("\"Speak to Lord Marsten, and win my freedom! I know thou shalt not leave me...\"");
	say();
	goto labelFunc01D1_010C;
labelFunc01D1_0108:
	message("\"Avatar! Please free thine old friend! Now that Marsten is jailed, please speak to Brendann and win my freedom!\"");
	say();
labelFunc01D1_010C:
	Func097F(0xFFFD, "@Return soon...@", 0x0000);
	UI_run_schedule(0xFFFD);
	gflags[0x00AA] = true;
	abort;
labelFunc01D1_0124:
	goto labelFunc01D1_035D;
labelFunc01D1_0127:
	var0002 = UI_get_npc_id(0xFFFD);
	if (!(var0002 < 0x000A)) goto labelFunc01D1_0347;
	UI_lightning();
	if (!(var0002 == 0x0000)) goto labelFunc01D1_02B8;
	var0003 = UI_get_object_position(0xFE9C);
	var0004 = 0x0007;
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0008, 0x0008, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFF8, 0xFFF8, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0008, 0xFFF8, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFF8, 0x0008, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0xFFFB, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFFB, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0005, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0005, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc01D1_02B8:
	if (!(var0002 == 0x0007)) goto labelFunc01D1_02DA;
	Func097F(0xFFFF, "@Is everyone all right?@", 0x0005);
	Func097F(0xFFFE, "@What happened?@", 0x0000);
labelFunc01D1_02DA:
	if (!(var0002 == 0x0009)) goto labelFunc01D1_031E;
	UI_set_schedule_type(0xFFFF, 0x000F);
	UI_set_schedule_type(0xFFFE, 0x000F);
	0xFFFF->Func07D2();
	0xFFFE->Func07D2();
	var0005 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x000F);
	goto labelFunc01D1_0335;
labelFunc01D1_031E:
	var0005 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x0000);
labelFunc01D1_0335:
	UI_set_npc_id(0xFFFD, (var0002 + 0x0001));
	abort;
	goto labelFunc01D1_035D;
labelFunc01D1_0347:
	UI_set_schedule_type(0xFFFD, 0x0003);
	Func097F(0xFFFD, "@Avatar!@", 0x0000);
labelFunc01D1_035D:
	return;
}


