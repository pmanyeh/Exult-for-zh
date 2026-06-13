#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func088B 0x88B (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = Func090C(0xFE9C, var0000);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0002, (byte)0x01, (byte)0x6C, (byte)0x61]);
	var0003 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, var0001], 0x0002);
	return;
}


