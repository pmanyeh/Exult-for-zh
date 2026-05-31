#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0662 object#(0x662) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0662_00B0;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	if (!(!(UI_get_item_shape(var0000) == 0x014A))) goto labelFunc0662_0026;
	goto labelFunc0662_009A;
labelFunc0662_0026:
	if (!UI_get_barge(0xFE9C)) goto labelFunc0662_0033;
	goto labelFunc0662_009A;
labelFunc0662_0033:
	UI_item_say(item, "@Kal Por Ylem@");
	if (!(Func0906() && (!gflags[0x0039]))) goto labelFunc0662_009A;
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0612]);
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x000D, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0662_00B0;
labelFunc0662_009A:
	var0002 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0662_00B0:
	return;
}


