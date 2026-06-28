#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func066D object#(0x66D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc066D_007B;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Sanct Lor@");
	if (!Func0906()) goto labelFunc066D_0060;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0043, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x066D], 0x0004);
	goto labelFunc066D_007B;
labelFunc066D_0060:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc066D_007B:
	if (!(event == 0x0002)) goto labelFunc066D_008B;
	UI_set_item_flag(item, 0x0000);
labelFunc066D_008B:
	return;
}


