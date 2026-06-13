#game "serpentisle"
void Func091C 0x91C ()
{
	if (!(event == 0x0001)) goto labelFunc091C_001E;
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("\"Avatar! Save me!\"");
	say();
	message("\"Some fell sorcery brought me here and nothing I do can unlock the door. Release me, I beg thee! -- Before the fiend that did this comes for me!\"");
	say();
	UI_remove_npc_face0();
labelFunc091C_001E:
	return;
}


