#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0671 object#(0x671) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0671_0084;
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Quas Xen@");
	if (!(Func0906() && (UI_is_npc(var0000) && (!(UI_get_item_flag(0x0000, 0x001B) == 0xFFFF))))) goto labelFunc0671_006E;
	var0002 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x70, (byte)0x6A]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0671], 0x0004);
	goto labelFunc0671_0084;
labelFunc0671_006E:
	var0002 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0671_0084:
	if (!(event == 0x0002)) goto labelFunc0671_0094;
	var0002 = UI_clone(item);
labelFunc0671_0094:
	return;
}


