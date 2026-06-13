#game "serpentisle"
void Func091A 0x91A (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	if (!((UI_die_roll(0x0001, 0x0007) == 0x0007) && ((UI_game_hour() < 0x0007) && (gflags[0x0004] == true)))) goto labelFunc091A_002A;
	var0001 = UI_click_on_item();
	goto labelFunc091A_002B;
labelFunc091A_002A:
	abort;
labelFunc091A_002B:
	if (!UI_is_npc(var0001)) goto labelFunc091A_009A;
	UI_play_sound_effect(0x0077);
	var0002 = UI_get_npc_number(var0001);
	if (!UI_get_item_flag(var0002, 0x0006)) goto labelFunc091A_009A;
	UI_show_npc_face0(var0002, 0x0000);
	message("\"I am the Lizard King. I can do anything.\"");
	say();
	UI_remove_npc_face0();
	if (!(var0002 == 0xFE9C)) goto labelFunc091A_0079;
	UI_set_item_flag(var0002, 0x0019);
labelFunc091A_0079:
	UI_set_item_flag(var0002, 0x0024);
	var0003 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x03C0], 0x0014);
labelFunc091A_009A:
	return;
}


