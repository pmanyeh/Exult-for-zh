#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern void Func091D 0x91D ();

void Func065F object#(0x65F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc065F_00DF;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = Func0979(item);
	UI_halt_scheduled(item);
	var0003 = [0x010E, 0x0178, 0x01B0, 0x01B1, 0x034D, 0x033C];
	var0004 = [0x01B0, 0x01B1, 0x010E, 0x0178];
	UI_item_say(item, "@Ex Por@");
	if (!Func0951()) goto labelFunc065F_00C2;
	if (!(!(var0001 in var0003))) goto labelFunc065F_006B;
	goto labelFunc065F_00C2;
labelFunc065F_006B:
	var0005 = UI_get_item_frame(var0000);
	if (!(!(((var0005 + 0x0001) % 0x0004) == 0x0000))) goto labelFunc065F_008B;
	goto labelFunc065F_00C2;
labelFunc065F_008B:
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x58, 0x0043]);
	var0006 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x065F], 0x0006);
	goto labelFunc065F_00DF;
labelFunc065F_00C2:
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc065F_00DF:
	if (!(event == 0x0002)) goto labelFunc065F_0104;
	var0005 = UI_get_item_frame(item);
	var0007 = (var0005 - 0x0003);
	UI_set_item_frame(item, var0007);
	Func091D();
labelFunc065F_0104:
	return;
}


