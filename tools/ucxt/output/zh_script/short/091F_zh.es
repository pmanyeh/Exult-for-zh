#game "blackgate"
void Func091F 0x91F (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_resurrect(var0000);
	if (!var0002) goto labelFunc091F_002B;
	message("「呼吸回到了身體裡。你的同伴活過來了！」");
	say();
	var0003 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc091F_002F;
labelFunc091F_002B:
	message("「唉，我救不了你的朋友。我會好好埋葬他。你必須繼續你的生活。」");
	say();
labelFunc091F_002F:
	return;
}


