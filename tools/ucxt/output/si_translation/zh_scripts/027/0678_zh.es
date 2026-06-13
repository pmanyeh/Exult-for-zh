#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0678 object#(0x678) ()
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

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0678_00E3;
	UI_halt_scheduled(item);
	var0001 = UI_click_on_item();
	UI_item_say(item, "@In Sanct Grav@");
	var0002 = (var0001[0x0002] + 0x0001);
	var0003 = (var0001[0x0003] + 0x0001);
	var0004 = var0001[0x0004];
	var0005 = [var0002, var0003, var0004];
	if (!Func0951()) goto labelFunc0678_00BF;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0007 = UI_create_new_object(0x037E);
	if (!var0007) goto labelFunc0678_00B8;
	UI_set_item_frame(var0007, 0x0009);
	var0006 = UI_update_last_created(var0005);
	if (!var0006) goto labelFunc0678_00B1;
	UI_set_item_flag(var0007, 0x0012);
	var0006 = UI_delayed_execute_usecode_array(var0007, (byte)0x2D, 0x00C8);
	goto labelFunc0678_00B5;
labelFunc0678_00B1:
	var0000 = true;
labelFunc0678_00B5:
	goto labelFunc0678_00BC;
labelFunc0678_00B8:
	var0000 = true;
labelFunc0678_00BC:
	goto labelFunc0678_00C3;
labelFunc0678_00BF:
	var0000 = true;
labelFunc0678_00C3:
	if (!(0x0606 == true)) goto labelFunc0678_00E3;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0678_00E3:
	return;
}


