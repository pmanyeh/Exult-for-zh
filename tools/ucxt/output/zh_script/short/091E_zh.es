#game "blackgate"
void Func091E 0x91E (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_get_npc_object(var0000);
	if (!UI_get_item_flag(var0002, 0x0008)) goto labelFunc091E_003C;
	UI_clear_item_flag(var0002, 0x0008);
	var0003 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("傷口已經癒合了。」");
	say();
	goto labelFunc091E_0040;
labelFunc091E_003C:
	message("「那個人不需要治療！」");
	say();
labelFunc091E_0040:
	return;
}


