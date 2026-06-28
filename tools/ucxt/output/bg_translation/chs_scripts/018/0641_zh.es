#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0641 object#(0x641) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0641_0092;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Rel Hur@");
	if (!Func0906()) goto labelFunc0641_007E;
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x58, 0x0044]);
	var0001 = [0x0000, 0x0001, 0x0002];
	if (!(UI_get_weather() == 0x0000)) goto labelFunc0641_0069;
	var0002 = UI_die_roll(0x0002, 0x0003);
	var0003 = var0001[var0002];
	UI_set_weather(var0003);
	goto labelFunc0641_007B;
labelFunc0641_0069:
	if (!(UI_get_weather() != 0x0003)) goto labelFunc0641_007B;
	UI_set_weather(0x0000);
labelFunc0641_007B:
	goto labelFunc0641_0092;
labelFunc0641_007E:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0641_0092:
	return;
}


