#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0649 object#(0x649) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0649_00A3;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func092D(var0000);
	UI_item_say(item, "@An Nox@");
	if (!Func0906()) goto labelFunc0649_0088;
	if (!UI_is_npc(var0000)) goto labelFunc0649_006A;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0040, (byte)0x66, (byte)0x65, (byte)0x67]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0649], 0x0006);
	goto labelFunc0649_0085;
labelFunc0649_006A:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0649_0085:
	goto labelFunc0649_00A3;
labelFunc0649_0088:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0649_00A3:
	if (!(event == 0x0002)) goto labelFunc0649_00BB;
	UI_clear_item_flag(item, 0x0008);
	UI_clear_item_flag(item, 0x0007);
labelFunc0649_00BB:
	return;
}


