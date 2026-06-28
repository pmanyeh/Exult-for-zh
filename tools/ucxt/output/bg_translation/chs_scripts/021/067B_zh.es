#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func067B object#(0x67B) ()
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
	var var000A;

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc067B_00F2;
	UI_halt_scheduled(item);
	var0001 = UI_click_on_item();
	UI_item_say(item, "@In Sanct Grav@");
	var0002 = (var0001[0x0002] + 0x0001);
	var0003 = (var0001[0x0003] + 0x0001);
	var0004 = var0001[0x0004];
	var0005 = [var0002, var0003, var0004];
	var0006 = UI_is_not_blocked(var0005, 0x0300, 0x0000);
	if (!(Func0906() && var0006)) goto labelFunc067B_00D0;
	var0007 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x66, (byte)0x67]);
	var0008 = UI_create_new_object(0x0300);
	if (!var0008) goto labelFunc067B_00C9;
	var0009 = UI_update_last_created(var0005);
	if (!var0009) goto labelFunc067B_00C2;
	var000A = 0x00C8;
	var0009 = UI_set_item_quality(var0008, var000A);
	var0009 = UI_delayed_execute_usecode_array(var0008, (byte)0x2D, var000A);
	goto labelFunc067B_00C6;
labelFunc067B_00C2:
	var0000 = true;
labelFunc067B_00C6:
	goto labelFunc067B_00CD;
labelFunc067B_00C9:
	var0000 = true;
labelFunc067B_00CD:
	goto labelFunc067B_00D4;
labelFunc067B_00D0:
	var0000 = true;
labelFunc067B_00D4:
	if (!(0x0606 == true)) goto labelFunc067B_00F2;
	var0007 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc067B_00F2:
	return;
}


