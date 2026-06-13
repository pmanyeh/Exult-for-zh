#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func064A object#(0x64A) ()
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

	if (!(event == 0x0001)) goto labelFunc064A_0094;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = Func0979(var0000);
	UI_halt_scheduled(item);
	var0003 = [0x0284, 0x03B4, 0x03B7, 0x03B8];
	UI_item_say(item, "@Rel Ylem@");
	if (!(Func0951() && (var0001 in var0003))) goto labelFunc064A_007C;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0002, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0004 = UI_execute_usecode_array(var0000, [(byte)0x55, 0x064A]);
	goto labelFunc064A_0094;
labelFunc064A_007C:
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc064A_0094:
	if (!(event == 0x0002)) goto labelFunc064A_0107;
	var0005 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_item_shape(item);
	var0006 = UI_get_item_quantity(item, var0001);
	var0007 = 0x0000;
labelFunc064A_00BF:
	if (!(var0007 < 0x0005)) goto labelFunc064A_0107;
	var0007 = (var0007 + 0x0001);
	var0008 = UI_create_new_object(var0001);
	if (!var0008) goto labelFunc064A_0104;
	UI_set_item_flag(var0008, 0x0012);
	var0004 = UI_set_item_quantity(var0008, var0006);
	var0004 = UI_update_last_created(var0005);
labelFunc064A_0104:
	goto labelFunc064A_00BF;
labelFunc064A_0107:
	return;
}


