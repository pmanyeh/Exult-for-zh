#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func066B object#(0x66B) ()
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

	if (!(event == 0x0001)) goto labelFunc066B_00E6;
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Frio Grav@");
	if (!Func0951()) goto labelFunc066B_00C9;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x59, var0001, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0003 = UI_create_new_object(0x0231);
	if (!var0003) goto labelFunc066B_00C6;
	var0004 = (var0000[0x0002] + 0x0001);
	var0005 = (var0000[0x0003] + 0x0001);
	var0006 = var0000[0x0004];
	var0007 = [var0004, var0005, var0006];
	var0008 = UI_update_last_created(var0007);
	if (!var0008) goto labelFunc066B_00C6;
	var0009 = 0x0064;
	var0008 = UI_set_item_quality(var0003, var0009);
	UI_set_item_flag(var0003, 0x0012);
	var0008 = UI_delayed_execute_usecode_array(var0003, (byte)0x2D, var0009);
labelFunc066B_00C6:
	goto labelFunc066B_00E6;
labelFunc066B_00C9:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc066B_00E6:
	return;
}


