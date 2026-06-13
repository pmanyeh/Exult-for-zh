#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0684 object#(0x684) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0684_005C;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Rel Hur@");
	if (!Func0951()) goto labelFunc0684_0046;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x58, 0x0039]);
	if (!(UI_get_weather() != 0x0003)) goto labelFunc0684_0043;
	UI_set_weather(0x0000);
labelFunc0684_0043:
	goto labelFunc0684_005C;
labelFunc0684_0046:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0684_005C:
	return;
}


