#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0661 object#(0x661) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0661_00BB;
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_halt_scheduled(item);
	var0002 = [0x0300, 0x037F, 0x0231, 0x0384, 0x0386];
	UI_item_say(item, "@An Grav@");
	if (!Func0951()) goto labelFunc0661_009E;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	enum();
labelFunc0661_005E:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0661_009B;
	if (!(var0006 == UI_get_item_shape(var0000))) goto labelFunc0661_0098;
	var0003 = UI_set_last_created(var0000);
	if (!var0003) goto labelFunc0661_0098;
	var0003 = UI_update_last_created(0xFE9A);
	UI_halt_scheduled(var0000);
labelFunc0661_0098:
	goto labelFunc0661_005E;
labelFunc0661_009B:
	goto labelFunc0661_00BB;
labelFunc0661_009E:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0661_00BB:
	return;
}


