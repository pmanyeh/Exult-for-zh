#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0644 object#(0x644) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0644_004D;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Bet Lor@");
	if (!Func0906()) goto labelFunc0644_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0044, (byte)0x65, (byte)0x67, (byte)0x55, 0x0644]);
	goto labelFunc0644_004D;
labelFunc0644_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0644_004D:
	if (!(event == 0x0002)) goto labelFunc0644_005C;
	UI_cause_light(0x006E);
labelFunc0644_005C:
	return;
}


