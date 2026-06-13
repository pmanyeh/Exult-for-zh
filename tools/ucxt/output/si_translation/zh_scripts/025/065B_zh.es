#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func065B object#(0x65B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc065B_009B;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_frame(var0000);
	var0003 = Func0979(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Mani Ex@");
	if (!(Func0951() && ((var0001 == 0x01BD) && (var0002 == 0x0000)))) goto labelFunc065B_0081;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x67, (byte)0x61, (byte)0x67, (byte)0x61, (byte)0x58, 0x0043]);
	var0004 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x065B], 0x0006);
	goto labelFunc065B_009B;
labelFunc065B_0081:
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x67, (byte)0x61, (byte)0x67, (byte)0x61, (byte)0x55, 0x0606]);
labelFunc065B_009B:
	if (!(event == 0x0002)) goto labelFunc065B_00CD;
	var0005 = UI_get_object_position(item);
	var0004 = UI_set_last_created(item);
	UI_set_item_frame(item, 0x0001);
	UI_clear_item_flag(item, 0x0012);
	var0004 = UI_update_last_created(var0005);
labelFunc065B_00CD:
	return;
}


