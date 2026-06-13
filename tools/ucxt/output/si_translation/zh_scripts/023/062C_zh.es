#game "serpentisle"
// externs
extern void Func088C 0x88C ();
extern void Func088B 0x88B (var var0000, var var0001);
extern void Func0889 0x889 (var var0000);
extern void Func088A 0x88A (var var0000);

void Func062C object#(0x62C) ()
{
	var var0000;

	if (!(event == 0x000A)) goto labelFunc062C_0025;
	UI_close_gumps();
	var0000 = UI_get_container(item);
	if (!(!var0000)) goto labelFunc062C_0025;
	Func088C();
	Func088B(item, 0x062C);
labelFunc062C_0025:
	if (!((event == 0x0002) || var0000)) goto labelFunc062C_0048;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc062C_0044;
	Func0889(item);
	goto labelFunc062C_0048;
labelFunc062C_0044:
	Func088A(item);
labelFunc062C_0048:
	return;
}


