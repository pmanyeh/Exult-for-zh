#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func09AD 0x9AD (var var0000);

void Func0454 object#(0x454) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0454_0011;
	Func0809();
	goto labelFunc0454_0015;
labelFunc0454_0011:
	Func09AD(item);
labelFunc0454_0015:
	return;
}


