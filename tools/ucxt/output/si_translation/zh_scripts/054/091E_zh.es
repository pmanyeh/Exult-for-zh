#game "serpentisle"
// externs
extern void Func0921 0x921 (var var0000);

void Func091E 0x91E (var var0000, var var0001)
{
	var var0002;
	var var0003;

	Func0921(var0000);
	var0002 = UI_get_item_frame(var0000);
	if (!(var0002 <= 0x0004)) goto labelFunc091E_0023;
	var0002 = 0x0004;
	goto labelFunc091E_003C;
labelFunc091E_0023:
	if (!(var0002 >= 0x000A)) goto labelFunc091E_0036;
	var0002 = 0x000E;
	goto labelFunc091E_003C;
labelFunc091E_0036:
	var0002 = 0x0009;
labelFunc091E_003C:
	var0003 = UI_execute_usecode_array(var0000, [(byte)0x46, var0002, (byte)0x50, (byte)0x58, 0x0059, (byte)0x0B, 0xFFFD, 0x0003, (byte)0x55, var0001, (byte)0x58, 0x0058]);
	return;
}


