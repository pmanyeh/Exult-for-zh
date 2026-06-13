#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0664 object#(0x664) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0664_007F;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Sanct Lor@");
	if (!Func0951()) goto labelFunc0664_0062;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0082, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0664], 0x0004);
	goto labelFunc0664_007F;
labelFunc0664_0062:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0664_007F:
	if (!(event == 0x0002)) goto labelFunc0664_008F;
	UI_set_item_flag(item, 0x0000);
labelFunc0664_008F:
	return;
}


