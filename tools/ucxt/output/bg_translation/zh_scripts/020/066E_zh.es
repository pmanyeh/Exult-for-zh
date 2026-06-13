#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func066E object#(0x66E) ()
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
	var var0009;

	if (!(event == 0x0001)) goto labelFunc066E_00DC;
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Flam Grav@");
	if (!Func0906()) goto labelFunc066E_00C1;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x59, var0001, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0003 = UI_create_new_object(0x037F);
	if (!var0003) goto labelFunc066E_00BE;
	var0004 = (var0000[0x0002] + 0x0001);
	var0005 = (var0000[0x0003] + 0x0001);
	var0006 = var0000[0x0004];
	var0007 = [var0004, var0005, var0006];
	var0008 = UI_update_last_created(var0007);
	var0009 = 0x0064;
	var0008 = UI_set_item_quality(var0003, var0009);
	UI_set_item_flag(var0003, 0x0012);
	var0008 = UI_delayed_execute_usecode_array(var0003, (byte)0x2D, var0009);
labelFunc066E_00BE:
	goto labelFunc066E_00DC;
labelFunc066E_00C1:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc066E_00DC:
	return;
}


