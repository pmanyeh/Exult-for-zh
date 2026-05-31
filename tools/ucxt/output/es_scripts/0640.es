#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();
extern void Func08FD 0x8FD (var var0000);

void Func0640 object#(0x640) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0640_0082;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@An Zu@");
	if (!(Func0906() && (var0000[0x0001] != 0x0000))) goto labelFunc0640_0069;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0040, (byte)0x65, (byte)0x67]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0640], 0x0005);
	goto labelFunc0640_0082;
labelFunc0640_0069:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0640_0082:
	if (!(event == 0x0002)) goto labelFunc0640_00A3;
	if (!UI_is_npc(item)) goto labelFunc0640_009D;
	UI_clear_item_flag(item, 0x0001);
	goto labelFunc0640_00A3;
labelFunc0640_009D:
	Func08FD(0x003C);
labelFunc0640_00A3:
	return;
}


