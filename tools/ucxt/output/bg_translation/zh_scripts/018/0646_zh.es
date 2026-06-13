#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();
extern void Func08FD 0x8FD (var var0000);

void Func0646 object#(0x646) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0646_006F;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@In Flam@");
	if (!Func0906()) goto labelFunc0646_0054;
	var0002 = UI_set_to_attack(item, var0000, 0x0118);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x7A]);
	goto labelFunc0646_006F;
labelFunc0646_0054:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0646_006F:
	if (!(event == 0x0004)) goto labelFunc0646_00B7;
	var0003 = UI_get_item_shape(item);
	if (!(var0003 in [0x0253, 0x0379, 0x0150, 0x01E1])) goto labelFunc0646_00B1;
	UI_telekenesis(var0003);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, var0003]);
	goto labelFunc0646_00B7;
labelFunc0646_00B1:
	Func08FD(0x003C);
labelFunc0646_00B7:
	return;
}


