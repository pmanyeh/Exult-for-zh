#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0651 object#(0x651) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0651_0083;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Des Sanct@");
	if (!(Func0951() && (var0000[0x0001] != 0x0000))) goto labelFunc0651_0066;
	var0002 = UI_set_to_attack(item, var0000, 0x0119);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0082, (byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x7A]);
	goto labelFunc0651_0083;
labelFunc0651_0066:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0651_0083:
	return;
}


