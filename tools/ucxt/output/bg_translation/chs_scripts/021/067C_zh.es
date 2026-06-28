#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func067C object#(0x67C) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc067C_0078;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@In Hur Grav Ylem@");
	if (!Func0906()) goto labelFunc067C_005B;
	var0002 = UI_set_to_attack(item, var0000, 0x018F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0041, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x7A]);
	goto labelFunc067C_0078;
labelFunc067C_005B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc067C_0078:
	return;
}


