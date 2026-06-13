#game "blackgate"
void Func03DE shape#(0x3DE) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc03DE_007E;
	if (!(!gflags[0x0301])) goto labelFunc03DE_006F;
	gflags[0x0301] = true;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("You feel as if your mind is being probed, delicately at first, then with more insistance. Images of long past memories flit before your eyes and old emotions resurface. At one point, the images pause as you remember the words Love, Sol, Moons, and Death then a strange sense of deja vu comes over you as the vision comes up to the current time. The images cease and a vast wave of power overwhelms you. A wall of darkness falls...");
	say();
	UI_remove_npc_face(0xFE9C);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x6E, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFE, 0x0005]);
	var0000 = UI_execute_usecode_array(item, [(byte)0x27, 0x0005, (byte)0x55, 0x02C3]);
	goto labelFunc03DE_007E;
labelFunc03DE_006F:
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("Your mind is quickly probed, then cast aside, leaving you feeling slightly ill and filled with an irrational sense of forboding.");
	say();
labelFunc03DE_007E:
	if (!(event == 0x0002)) goto labelFunc03DE_00B9;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc03DE_00B9:
	return;
}


