#game "serpentisle"
void Func00D7 shape#(0xD7) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0002) || (event == 0x0001))) goto labelFunc00D7_006E;
	var0000 = UI_find_nearby(0xFE9C, 0x03C1, 0x0028, 0x00B0);
	if (!(!UI_on_barge())) goto labelFunc00D7_0042;
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x00D7, 0x0000], 0x0002);
	goto labelFunc00D7_006E;
labelFunc00D7_0042:
	var0002 = UI_get_object_position(item);
	if (!(var0002 > 0x082F)) goto labelFunc00D7_006E;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x36, (byte)0x55, 0x00D7, 0x0000], 0x0003);
labelFunc00D7_006E:
	return;
}


