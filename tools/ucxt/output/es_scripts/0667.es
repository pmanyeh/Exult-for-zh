#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0667 object#(0x667) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0667_00DB;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = Func092D(item);
	UI_halt_scheduled(item);
	var0003 = [0x010E, 0x0178, 0x01B0, 0x01B1, 0x034D, 0x033C];
	var0004 = [0x01B0, 0x01B1, 0x010E, 0x0178];
	UI_item_say(item, "@Ex Por@");
	if (!Func0906()) goto labelFunc0667_00C0;
	if (!(!(var0001 in var0003))) goto labelFunc0667_006B;
	goto labelFunc0667_00C0;
labelFunc0667_006B:
	var0005 = UI_get_item_frame(var0000);
	if (!(!(((var0005 + 0x0001) % 0x0004) == 0x0000))) goto labelFunc0667_008B;
	goto labelFunc0667_00C0;
labelFunc0667_008B:
	var0006 = UI_execute_usecode_array(item, [(byte)0x59, var0002, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x58, 0x0042]);
	var0006 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0667], 0x0006);
	goto labelFunc0667_00DB;
labelFunc0667_00C0:
	var0006 = UI_execute_usecode_array(item, [(byte)0x59, var0002, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0667_00DB:
	if (!(event == 0x0002)) goto labelFunc0667_00FD;
	var0005 = UI_get_item_frame(item);
	var0007 = (var0005 - 0x0003);
	UI_set_item_frame(item, var0007);
labelFunc0667_00FD:
	return;
}


