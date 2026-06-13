#game "serpentisle"
// externs
extern void Func08B2 0x8B2 ();

void Func0455 object#(0x455) ()
{
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0455_0029;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x0209] = true;
	abort;
labelFunc0455_0029:
	Func08B2();
	return;
}


