#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0645 object#(0x645) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0645_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Lor@");
	if (!Func0951()) goto labelFunc0645_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0039, (byte)0x65, (byte)0x67, (byte)0x55, 0x0645]);
	goto labelFunc0645_004F;
labelFunc0645_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0645_004F:
	if (!(event == 0x0002)) goto labelFunc0645_005E;
	UI_cause_light(0x029A);
labelFunc0645_005E:
	return;
}


