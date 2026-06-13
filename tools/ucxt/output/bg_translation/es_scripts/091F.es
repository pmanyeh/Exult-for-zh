#game "blackgate"
void Func091F 0x91F (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_resurrect(var0000);
	if (!var0002) goto labelFunc091F_002B;
	message("\"Breath doth return to the body. Thy comrade is alive!\"");
	say();
	var0003 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc091F_002F;
labelFunc091F_002B:
	message("\"Alas, I cannot save thy friend. I will provide a proper burial. Thou must go on and continue with thine own life.\"");
	say();
labelFunc091F_002F:
	return;
}


