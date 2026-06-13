#game "serpentisle"
void Func0658 object#(0x658) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0658_002D;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Rel Por@");
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x69, (byte)0x65, (byte)0x55, 0x0606]);
labelFunc0658_002D:
	return;
}


