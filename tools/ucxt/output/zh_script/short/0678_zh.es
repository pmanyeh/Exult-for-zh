#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0678 object#(0x678) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0678_00AF;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Rel Ylem@");
	if (!(Func0906() && (UI_get_item_shape(var0000) == 0x0393))) goto labelFunc0678_0093;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x58, 0x0042, (byte)0x65, (byte)0x67]);
	var0003 = UI_get_object_position(var0000);
	UI_sprite_effect(0x000D, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0678], 0x0005);
	goto labelFunc0678_00AC;
labelFunc0678_0093:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0678_00AC:
	goto labelFunc0678_00D7;
labelFunc0678_00AF:
	var0005 = UI_get_item_quantity(item, 0x0001);
	var0005 = (var0005 * 0x000A);
	UI_set_item_shape(item, 0x0285);
	var0005 = UI_set_item_quantity(item, var0005);
labelFunc0678_00D7:
	return;
}


