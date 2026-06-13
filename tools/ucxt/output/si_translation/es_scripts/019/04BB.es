#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func04BA object#(0x4BA) ();

void Func04BB object#(0x4BB) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BB_000F;
	Func0809();
	abort;
labelFunc04BB_000F:
	item->Func04BA();
	return;
}


