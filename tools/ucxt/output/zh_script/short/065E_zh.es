#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func065E object#(0x65E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc065E_007A;
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@In Nox@");
	if (!(Func0906() && (var0000[0x0001] != 0x0000))) goto labelFunc065E_0061;
	var0002 = UI_set_to_attack(item, var0000, 0x01A8);
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x006E, (byte)0x65, (byte)0x67, (byte)0x67, (byte)0x7A, (byte)0x61]);
	goto labelFunc065E_007A;
labelFunc065E_0061:
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc065E_007A:
	return;
}


