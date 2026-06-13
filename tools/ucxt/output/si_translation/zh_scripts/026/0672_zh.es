#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0672 object#(0x672) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0672_00A6;
	var0000 = UI_get_object_position(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas An Zu@");
	if (!Func0951()) goto labelFunc0672_0090;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0039, (byte)0x65, (byte)0x67]);
	var0002 = 0x0019;
	var0003 = UI_find_nearby(item, 0xFFFF, var0002, 0x0004);
	enum();
labelFunc0672_006B:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0672_008D;
	var0001 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x0672]);
	goto labelFunc0672_006B;
labelFunc0672_008D:
	goto labelFunc0672_00A6;
labelFunc0672_0090:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0672_00A6:
	if (!(event == 0x0002)) goto labelFunc0672_00BB;
	UI_halt_scheduled(item);
	UI_clear_item_flag(item, 0x0001);
labelFunc0672_00BB:
	return;
}


