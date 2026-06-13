#game "serpentisle"
// externs
extern void Func08AD 0x8AD (var var0000, var var0001, var var0002, var var0003);

void Func0194 shape#(0x194) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = [0x000F, 0x000C, 0x0008, 0x000E, 0x0014, 0x0004, 0x0004, 0x0004, 0x0004];
	var0001 = var0000[(UI_get_item_frame(item) + 0x0001)];
	var0002 = UI_click_on_item();
	Func08AD(item, var0001, 0x0026, var0002);
	return;
}


