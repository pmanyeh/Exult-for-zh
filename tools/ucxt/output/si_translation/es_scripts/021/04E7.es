#game "serpentisle"
// externs
extern void Func0809 0x809 ();

void Func04E7 object#(0x4E7) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04E7_000F;
	Func0809();
	abort;
labelFunc04E7_000F:
	return;
}


