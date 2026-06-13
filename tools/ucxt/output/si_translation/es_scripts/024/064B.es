#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func064B object#(0x64B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0001) || (event == 0x0004))) goto labelFunc064B_0082;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Vas Frio@");
	if (!Func0951()) goto labelFunc064B_0065;
	var0002 = UI_set_to_attack(item, var0000, 0x0358);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0014, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x6A, (byte)0x7A, (byte)0x61]);
	goto labelFunc064B_0082;
labelFunc064B_0065:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc064B_0082:
	return;
}


