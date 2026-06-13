#game "serpentisle"
void Func063C object#(0x63C) ()
{
	var var0000;
	var var0001;

	UI_fade_palette(0x000C, 0x0001, 0x0001);
	var0000 = UI_find_nearby(0xFE9C, 0x0178, 0x0006, 0x0000);
	if (!var0000) goto labelFunc063C_0042;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x010E, (byte)0x46, 0x0006], 0x0001);
labelFunc063C_0042:
	return;
}


