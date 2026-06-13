#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func064D object#(0x64D) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc064D_004D;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Lor@");
	if (!Func0906()) goto labelFunc064D_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0044, (byte)0x65, (byte)0x67, (byte)0x55, 0x064D]);
	goto labelFunc064D_004D;
labelFunc064D_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064D_004D:
	if (!(event == 0x0002)) goto labelFunc064D_005C;
	UI_cause_light(0x01F4);
labelFunc064D_005C:
	return;
}


