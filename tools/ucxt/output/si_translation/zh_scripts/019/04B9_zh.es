#game "serpentisle"
// externs
extern void Func0809 0x809 ();

void Func04B9 object#(0x4B9) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04B9_000F;
	Func0809();
	abort;
labelFunc04B9_000F:
	return;
}


