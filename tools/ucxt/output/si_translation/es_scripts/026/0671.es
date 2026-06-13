#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0671 object#(0x671) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0671_007C;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@In Hur Grav Ylem@");
	if (!Func0951()) goto labelFunc0671_005D;
	var0002 = UI_set_to_attack(item, var0000, 0x018F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0014, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x7A]);
	goto labelFunc0671_007C;
labelFunc0671_005D:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0671_007C:
	return;
}


