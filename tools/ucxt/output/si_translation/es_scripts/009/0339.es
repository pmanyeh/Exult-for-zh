#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func0339 shape#(0x339) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x000A)) goto labelFunc0339_0032;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6A, (byte)0x61]);
	UI_set_item_frame(item, 0x0000);
labelFunc0339_0032:
	return;
}


