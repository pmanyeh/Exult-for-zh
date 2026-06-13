#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0941 0x941 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0650 object#(0x650) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0650_0052;
	UI_item_say(item, "@Rel Frio Mani@");
	if (!Func0951()) goto labelFunc0650_0038;
	UI_halt_scheduled(item);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0650]);
	goto labelFunc0650_0052;
labelFunc0650_0038:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0650_0052:
	if (!(event == 0x0002)) goto labelFunc0650_00BB;
	UI_play_sound_effect(0x005A);
	var0001 = Func0941(0xFE9C);
	var0002 = (0x07D0 + (var0001 * 0x00C8));
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFD);
	gflags[0x01FC] = true;
	var0003 = Func09A0(0x0007, 0x0002);
	var0000 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x068A], var0002);
labelFunc0650_00BB:
	return;
}


