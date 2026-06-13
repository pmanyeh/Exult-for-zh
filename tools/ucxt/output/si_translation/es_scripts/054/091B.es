#game "serpentisle"
void Func091B 0x91B ()
{
	if (!(event == 0x0001)) goto labelFunc091B_001E;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("\"Avatar! Release thou me from this vile cell!\"");
	say();
	message("\"Some fell sorcery brought me here and nothing I do can unlock the door. Release me and together we shall find the key to this mystery!\"");
	say();
	UI_remove_npc_face0();
labelFunc091B_001E:
	return;
}


