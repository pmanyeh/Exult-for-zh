#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0680 object#(0x680) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0680_00AB;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Kal An Mani@");
	if (!Func0906()) goto labelFunc0680_0087;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_weather(0x0002);
	UI_halt_scheduled(item);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6D, (byte)0x6D, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x58, 0x0043, (byte)0x6F, (byte)0x67, (byte)0x6C, (byte)0x61, (byte)0x55, 0x0680]);
	goto labelFunc0680_00AB;
labelFunc0680_0087:
	var0001 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x6E, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x67, (byte)0x6C, (byte)0x61, (byte)0x55, 0x0606]);
labelFunc0680_00AB:
	if (!(event == 0x0002)) goto labelFunc0680_00CA;
	UI_item_say(item, "@In Corp Hur Tym@");
	UI_earthquake(0x0028);
	UI_armageddon();
	gflags[0x001E] = true;
labelFunc0680_00CA:
	return;
}


