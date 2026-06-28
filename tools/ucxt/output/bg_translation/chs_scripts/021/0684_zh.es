#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0684 object#(0x684) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc0684_013B;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_object_position(var0000);
	var0003 = Func092D(var0000);
	UI_halt_scheduled(var0000);
	UI_halt_scheduled(item);
	if (!(UI_get_item_shape(var0000) in [0x0190, 0x019E, 0x030A])) goto labelFunc0684_008E;
	var0004 = UI_get_item_quality(var0000);
	var0005 = UI_get_item_quantity(var0000, var0001);
	if (!((var0004 == 0x0000) && (var0005 == 0x0000))) goto labelFunc0684_0081;
	var0006 = 0x0000;
	goto labelFunc0684_008B;
labelFunc0684_0081:
	var0006 = UI_resurrect(var0000);
labelFunc0684_008B:
	goto labelFunc0684_0094;
labelFunc0684_008E:
	var0006 = 0x0000;
labelFunc0684_0094:
	UI_item_say(item, "@In Mani Corp@");
	if (!(Func0906() && var0006)) goto labelFunc0684_011A;
	var0007 = 0x0001;
	var0008 = UI_execute_usecode_array(item, [(byte)0x59, var0003, (byte)0x58, 0x0040, (byte)0x6D, (byte)0x61, (byte)0x6F]);
	UI_play_music(0x000F, 0x0000);
	UI_sprite_effect(0x0011, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000D, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0684_013B;
labelFunc0684_011A:
	var0007 = 0x0001;
	var0008 = UI_execute_usecode_array(item, [(byte)0x59, var0003, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc0684_013B:
	return;
}


