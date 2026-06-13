#game "serpentisle"
// externs
extern void Func0809 0x809 ();

void Func04C5 object#(0x4C5) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04C5_000F;
	Func0809();
	abort;
labelFunc04C5_000F:
	return;
}


