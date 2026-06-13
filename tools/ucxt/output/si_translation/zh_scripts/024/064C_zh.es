#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func064C object#(0x64C) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc064C_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Lor@");
	if (!Func0951()) goto labelFunc064C_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0039, (byte)0x65, (byte)0x67, (byte)0x55, 0x064C]);
	goto labelFunc064C_004F;
labelFunc064C_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064C_004F:
	if (!(event == 0x0002)) goto labelFunc064C_005E;
	UI_cause_light(0x1388);
labelFunc064C_005E:
	return;
}


