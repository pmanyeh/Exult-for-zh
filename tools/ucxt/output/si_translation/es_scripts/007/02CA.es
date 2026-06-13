#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func02CA shape#(0x2CA) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x000B)) goto labelFunc02CA_003D;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x019C], 0x0002);
labelFunc02CA_003D:
	return;
}


