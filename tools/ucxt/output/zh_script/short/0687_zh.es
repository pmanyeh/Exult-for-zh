#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0687 object#(0x687) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0687_004B;
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Tym@");
	if (!Func0906()) goto labelFunc0687_0037;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x6A, (byte)0x70, (byte)0x55, 0x0687]);
	goto labelFunc0687_004B;
labelFunc0687_0037:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6A, (byte)0x70, (byte)0x55, 0x0606]);
labelFunc0687_004B:
	if (!(event == 0x0002)) goto labelFunc0687_005A;
	UI_stop_time(0x0064);
labelFunc0687_005A:
	return;
}


