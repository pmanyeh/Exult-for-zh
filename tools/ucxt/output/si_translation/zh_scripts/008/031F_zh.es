#game "serpentisle"
void Func031F shape#(0x31F) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc031F_003B;
	if (!(UI_get_item_frame(item) != 0x0012)) goto labelFunc031F_0015;
	abort;
labelFunc031F_0015:
	UI_item_say(0xFE9C, "@Hello, head.@");
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Who said that?@", (byte)0x27, 0x0007, (byte)0x55, 0x0422]);
labelFunc031F_003B:
	return;
}


