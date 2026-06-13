#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func0950 0x950 (var var0000);

void Func0152 shape#(0x152) ()
{
	var var0000;
	var var0001;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc0152_001B;
	UI_set_item_shape(item, 0x0150);
	UI_halt_scheduled(item);
labelFunc0152_001B:
	if (!(event == 0x000A)) goto labelFunc0152_004D;
	UI_set_item_shape(item, 0x0150);
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6A, (byte)0x61]);
labelFunc0152_004D:
	if (!(event == 0x0005)) goto labelFunc0152_0059;
	Func0950(item);
labelFunc0152_0059:
	return;
}


