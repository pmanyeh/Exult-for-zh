#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);

void Func06D0 object#(0x6D0) ()
{
	if (!UI_get_item_flag(0xFEDA, 0x0004)) goto labelFunc06D0_0015;
	UI_remove_item(item);
	goto labelFunc06D0_001F;
labelFunc06D0_0015:
	Func0922(0x000D);
	gflags[0x02DF] = true;
labelFunc06D0_001F:
	return;
}


