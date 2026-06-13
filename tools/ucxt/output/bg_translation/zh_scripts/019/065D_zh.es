#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func065D object#(0x65D) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc065D_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Wis@");
	if (!Func0906()) goto labelFunc065D_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x55, 0x065D]);
	goto labelFunc065D_004F;
labelFunc065D_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc065D_004F:
	if (!(event == 0x0002)) goto labelFunc065D_005E;
	var0000 = UI_display_map();
labelFunc065D_005E:
	return;
}


