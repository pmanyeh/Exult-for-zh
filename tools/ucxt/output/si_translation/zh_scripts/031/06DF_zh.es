#game "serpentisle"
void Func06DF object#(0x6DF) ()
{
	var var0000;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 < 0x0001)) goto labelFunc06DF_001F;
	UI_set_item_flag(0xFE9C, 0x0025);
	goto labelFunc06DF_0029;
labelFunc06DF_001F:
	UI_clear_item_flag(0xFE9C, 0x0025);
labelFunc06DF_0029:
	return;
}


