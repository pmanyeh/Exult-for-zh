#game "serpentisle"
void Func08EF 0x8EF ()
{
	var var0000;
	var var0001;

	gflags[0x0007] = true;
	if (!gflags[0x0072]) goto labelFunc08EF_000F;
	message("\"Caladin is already deceased!\"");
	say();
	abort;
labelFunc08EF_000F:
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DB], 0x0008);
	var0001 = UI_direction_from(0xFEF9, 0xFFC1);
	var0000 = UI_execute_usecode_array(0xFEF9, [(byte)0x59, var0001, (byte)0x70, (byte)0x6F, (byte)0x70, (byte)0x58, 0x0040, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	var0000 = UI_execute_usecode_array(0xFFC1, [(byte)0x23, (byte)0x27, 0x000A]);
	abort;
	return;
}


