#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0652 object#(0x652) ()
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

	var0000 = [0x02D2, 0x02D3];
	var0001 = [0x022C, 0x01A1];
	if (!(event == 0x0001)) goto labelFunc0652_00A9;
	UI_halt_scheduled(item);
	var0002 = UI_click_on_item();
	var0003 = UI_get_item_shape(var0002);
	var0004 = Func0979(var0002);
	UI_item_say(item, "@Ort Ylem@");
	if (!(Func0951() && (var0003 in var0000))) goto labelFunc0652_008C;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0004, (byte)0x58, 0x0082, (byte)0x66, (byte)0x65, (byte)0x67]);
	var0005 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x0652], 0x0004);
	goto labelFunc0652_00A9;
labelFunc0652_008C:
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0004, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0652_00A9:
	if (!(event == 0x0002)) goto labelFunc0652_00E7;
	var0006 = 0x0000;
	enum();
labelFunc0652_00B8:
	for (var0009 in var0000 with var0007 to var0008) attend labelFunc0652_00E7;
	var0006 = (var0006 + 0x0001);
	if (!(var0009 == UI_get_item_shape(item))) goto labelFunc0652_00E4;
	UI_set_item_shape(item, var0001[var0006]);
labelFunc0652_00E4:
	goto labelFunc0652_00B8;
labelFunc0652_00E7:
	return;
}


