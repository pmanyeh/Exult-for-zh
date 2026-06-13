#game "serpentisle"
// externs
extern void Func08AD 0x8AD (var var0000, var var0001, var var0002, var var0003);

void Func0268 shape#(0x268) ()
{
	var var0000;

	var0000 = UI_click_on_item();
	Func08AD(item, 0x0001, 0x0024, var0000);
	return;
}


