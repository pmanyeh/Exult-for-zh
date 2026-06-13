#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0664 object#(0x664) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0664_00B0;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = UI_get_object_position(item);
	UI_item_say(item, "@Kal Ort Por@");
	if (!(Func0906() && (UI_get_item_shape(var0000) == 0x014A))) goto labelFunc0664_009A;
	var0002 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0613], 0x0006);
	UI_sprite_effect(0x0007, var0000[0x0002], var0000[0x0003], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0664_00B0;
labelFunc0664_009A:
	var0002 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0664_00B0:
	return;
}


