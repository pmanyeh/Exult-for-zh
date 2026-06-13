#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);
extern void Func0809 0x809 ();

void Func08B2 0x8B2 ()
{
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc08B2_0012;
	Func09AD(item);
labelFunc08B2_0012:
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc08B2_0021;
	Func0809();
	abort;
labelFunc08B2_0021:
	return;
}


