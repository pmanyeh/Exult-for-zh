#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0670 object#(0x670) ()
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
	if (!(event == 0x0001)) goto labelFunc0670_0100;
	UI_halt_scheduled(item);
	var0001 = UI_click_on_item();
	UI_item_say(item, "@In Sanct Grav@");
	var0002 = (var0001[0x0002] + 0x0001);
	var0003 = (var0001[0x0003] + 0x0001);
	var0004 = var0001[0x0004];
	var0005 = [var0002, var0003, var0004];
	var0006 = UI_is_not_blocked(var0005, 0x0300, 0x0000);
	if (!(Func0951() && var0006)) goto labelFunc0670_00DC;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0008 = UI_create_new_object(0x0300);
	if (!var0008) goto labelFunc0670_00D5;
	var0009 = UI_update_last_created(var0005);
	if (!var0009) goto labelFunc0670_00CE;
	UI_set_item_flag(var0008, 0x0012);
	var000A = 0x00C8;
	var0009 = UI_set_item_quality(var0008, var000A);
	var0009 = UI_delayed_execute_usecode_array(var0008, (byte)0x2D, var000A);
	goto labelFunc0670_00D2;
labelFunc0670_00CE:
	var0000 = true;
labelFunc0670_00D2:
	goto labelFunc0670_00D9;
labelFunc0670_00D5:
	var0000 = true;
labelFunc0670_00D9:
	goto labelFunc0670_00E0;
labelFunc0670_00DC:
	var0000 = true;
labelFunc0670_00E0:
	if (!(0x0606 == true)) goto labelFunc0670_0100;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0670_0100:
	return;
}


