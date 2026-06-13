#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func085C 0x85C ()
{
	var var0000;
	var var0001;

	var0000 = UI_find_direction(0xFF4B, 0xFE9C);
	var0001 = UI_execute_usecode_array(0xFF4B, [(byte)0x59, var0000, (byte)0x68, (byte)0x65, (byte)0x66, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x61]);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x04B5], 0x000A);
	return;
}


