#game "serpentisle"
void Func096B 0x96B (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;

	var0003 = UI_resurrect(var0000);
	if (!var0003) goto labelFunc096B_002B;
	message("\"Breath doth return to the body. Thy comrade is alive!\"");
	say();
	var0004 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	goto labelFunc096B_002F;
labelFunc096B_002B:
	message("\"Alas, I cannot save thy friend. I will provide a proper burial. Thou must go on and continue with thine own life.\"");
	say();
labelFunc096B_002F:
	return;
}


