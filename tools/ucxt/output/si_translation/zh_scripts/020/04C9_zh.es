#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04C9 object#(0x4C9) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_item_flag(0xFF37, 0x001C);
	if (!(event == 0x0007)) goto labelFunc04C9_005C;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("\"Why dost thou attack me? Do thine eyes deceive thee so?\" *\"Slay the foul bane that wishes to devour me instead! If it is not stopped, it will destroy us all!\" *\"I can stand this nightmare no more...\"");
	say();
	UI_remove_npc_face0();
	var0001 = UI_get_object_position(item);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x001B, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF37);
labelFunc04C9_005C:
	if (!(event == 0x0000)) goto labelFunc04C9_00C9;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc04C9_0087;
	Func097F(0xFF37, "@Make it stop!@", 0x0000);
labelFunc04C9_0087:
	if (!(var0002 == 0x0002)) goto labelFunc04C9_009D;
	Func097F(0xFF37, "@It will kill me!@", 0x0000);
labelFunc04C9_009D:
	if (!(var0002 == 0x0003)) goto labelFunc04C9_00B3;
	Func097F(0xFF37, "@Canst thou not see it!@", 0x0000);
labelFunc04C9_00B3:
	if (!(var0002 == 0x0004)) goto labelFunc04C9_00C9;
	Func097F(0xFF37, "@It is pure evil!@", 0x0000);
labelFunc04C9_00C9:
	if (!(event == 0x0001)) goto labelFunc04C9_0120;
	if (!(var0000 != true)) goto labelFunc04C9_0103;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("\"Iieeeee.... Help me!\" ~\"I cannot escape...\" ~\"It will catch and devour me!\" *\"Canst thou not see it? Please, help me!\"");
	say();
	UI_set_item_flag(0xFF37, 0x001C);
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF37, 0x001D);
	abort;
	goto labelFunc04C9_0120;
labelFunc04C9_0103:
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("\"Art thou blind! Canst thou not see the foul beast?\" *\"Have mercy! I beg thee to slay such an horror! Please, thou must kill it before it takes me!\"");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF37, 0x001D);
	abort;
labelFunc04C9_0120:
	return;
}


