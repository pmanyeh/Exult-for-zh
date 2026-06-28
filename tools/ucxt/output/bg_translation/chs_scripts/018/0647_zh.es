#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0647 object#(0x647) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0647_0046;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Kal@");
	if (!Func0906()) goto labelFunc0647_0032;
	var0000 = UI_execute_usecode_array(item, [(byte)0x69, (byte)0x6A, (byte)0x58, 0x003E]);
	goto labelFunc0647_0046;
labelFunc0647_0032:
	var0000 = UI_execute_usecode_array(item, [(byte)0x69, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0647_0046:
	return;
}


