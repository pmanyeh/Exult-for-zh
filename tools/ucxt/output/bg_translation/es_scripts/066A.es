#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func066A object#(0x66A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc066A_00B4;
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_halt_scheduled(item);
	var0002 = [0x0300, 0x037F, 0x0384, 0x0386];
	UI_item_say(item, "@An Grav@");
	if (!Func0906()) goto labelFunc066A_0099;
	var0003 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	enum();
labelFunc066A_0059:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc066A_0096;
	if (!(var0006 == UI_get_item_shape(var0000))) goto labelFunc066A_0093;
	var0003 = UI_set_last_created(var0000);
	if (!var0003) goto labelFunc066A_0093;
	var0003 = UI_update_last_created(0xFE9A);
	UI_halt_scheduled(var0000);
labelFunc066A_0093:
	goto labelFunc066A_0059;
labelFunc066A_0096:
	goto labelFunc066A_00B4;
labelFunc066A_0099:
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc066A_00B4:
	return;
}


