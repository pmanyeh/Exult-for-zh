#game "serpentisle"
void Func0275 shape#(0x275) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0275_0012;
	var0000 = UI_click_on_item();
	goto labelFunc0275_0016;
labelFunc0275_0012:
	var0000 = item;
labelFunc0275_0016:
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x64, (byte)0x68, (byte)0x6A, (byte)0x7A, (byte)0x64]);
	var0001 = UI_set_to_attack(0xFE9C, var0000, 0x0275);
	return;
}


