#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func01B3 shape#(0x1B3) ()
{
	var var0000;
	var var0001;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc01B3_001B;
	UI_set_item_shape(item, 0x01E1);
	UI_halt_scheduled(item);
labelFunc01B3_001B:
	if (!(event == 0x000A)) goto labelFunc01B3_004D;
	UI_set_item_shape(item, 0x01E1);
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6A, (byte)0x61]);
labelFunc01B3_004D:
	return;
}


