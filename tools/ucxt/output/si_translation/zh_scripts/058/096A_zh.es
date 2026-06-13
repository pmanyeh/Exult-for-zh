#game "serpentisle"
void Func096A 0x96A (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;

	var0003 = UI_get_npc_object(var0000);
	if (!UI_get_item_flag(var0003, 0x0008)) goto labelFunc096A_003C;
	UI_clear_item_flag(var0003, 0x0008);
	var0004 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	message("\"The wounds have been healed.\"");
	say();
	goto labelFunc096A_0040;
labelFunc096A_003C:
	message("\"That individual doth not need curing!\"");
	say();
labelFunc096A_0040:
	return;
}


