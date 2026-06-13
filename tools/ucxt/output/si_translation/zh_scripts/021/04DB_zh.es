#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04DB object#(0x4DB) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_flag(0xFFAF, 0x001C);
	if (!(event == 0x0009)) goto labelFunc04DB_00FF;
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(var0000 == true)) goto labelFunc04DB_0044;
	message("\"Do not interfere with me, Avatar!\" ~\"I am the MageLord now...");
	say();
	message("\"Thou dost know that Filbercio is lower than swine...\" ~\"He doth deserve to be tortured for all the ill that he hath done.\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Help me, Please! I beseech thee...\" *\"I cannot survive much more of this...\" *\"Uunnggghhh!\"");
	say();
	UI_remove_npc_face1();
	goto labelFunc04DB_005E;
labelFunc04DB_0044:
	message("\"Do not meddle in that which thou dost not understand, hero!\" ~\"I am the MageLord, and this man is evil.\"");
	say();
	message("\"He hath destroyed the lives of many.\" ~\"He doth deserve to be tortured for all the ill that he hath done.\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Help me, Please! I beseech thee... It is he who is evil, not I.\" *\"I cannot survive much more of this torture...\"");
	say();
	UI_remove_npc_face1();
labelFunc04DB_005E:
	UI_show_npc_face0(0xFFAF, 0x0000);
	message("Ha, ha, ha, ha, ha!");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF25, 0x000A);
	var0001 = UI_get_object_position(0xFF25);
	UI_sprite_effect(0x0004, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_get_object_position(0xFF24);
	UI_sprite_effect(0x0004, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	Func097F(0xFF25, "@Ha, ha, ha!@", 0x0000);
	Func097F(0xFF24, "@Have mercy!@", 0x0000);
	UI_remove_npc(0xFF25);
	UI_remove_npc(0xFF24);
	UI_remove_item(item);
	abort;
labelFunc04DB_00FF:
	return;
}


