#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func066B object#(0x66B) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0001) || (event == 0x0004))) goto labelFunc066B_007E;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Vas Flam Hur@");
	if (!Func0906()) goto labelFunc066B_0063;
	var0002 = UI_set_to_attack(item, var0000, 0x004E);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0041, (byte)0x6F, (byte)0x70, (byte)0x67, (byte)0x67, (byte)0x7A, (byte)0x61]);
	goto labelFunc066B_007E;
labelFunc066B_0063:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc066B_007E:
	return;
}


