#game "serpentisle"
void Func07DA object#(0x7DA) ()
{
	var var0000;

	gflags[0x0007] = true;
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x61, (byte)0x01, (byte)0x59, (byte)0x30]);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0A25, 0x0379, 0x0000]);
	return;
}


