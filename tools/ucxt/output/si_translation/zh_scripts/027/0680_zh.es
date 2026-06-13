#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0680 object#(0x680) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0680_0074;
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Corp Hur@");
	if (!Func0951()) goto labelFunc0680_0059;
	var0002 = UI_set_to_attack(item, var0000, 0x027F);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0014, (byte)0x6F, (byte)0x67, (byte)0x7A]);
	goto labelFunc0680_0074;
labelFunc0680_0059:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0680_0074:
	return;
}


