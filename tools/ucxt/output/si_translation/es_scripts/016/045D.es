#game "serpentisle"
// externs
extern void Func08B2 0x8B2 ();

void Func045D object#(0x45D) ()
{
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc045D_0029;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x020C] = true;
	abort;
labelFunc045D_0029:
	Func08B2();
	return;
}


