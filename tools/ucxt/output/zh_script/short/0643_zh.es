#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0643 object#(0x643) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0643_004B;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Bet Ort@");
	if (!Func0906()) goto labelFunc0643_0037;
	var0000 = UI_execute_usecode_array(item, [(byte)0x70, (byte)0x6F, (byte)0x58, 0x0024, (byte)0x55, 0x0643]);
	goto labelFunc0643_004B;
labelFunc0643_0037:
	var0000 = UI_execute_usecode_array(item, [(byte)0x70, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc0643_004B:
	if (!(event == 0x0002)) goto labelFunc0643_0082;
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x000C, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0643_0082:
	return;
}


