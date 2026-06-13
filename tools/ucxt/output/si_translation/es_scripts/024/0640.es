#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0640 object#(0x640) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0640_0053;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Mani Ylem@");
	if (!Func0951()) goto labelFunc0640_003B;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0039, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0640]);
	goto labelFunc0640_0053;
labelFunc0640_003B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0640_0053:
	if (!(event == 0x0002)) goto labelFunc0640_00B6;
	var0001 = UI_get_party_list();
	enum();
labelFunc0640_0063:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0640_00B6;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_create_new_object(0x0179);
	if (!var0006) goto labelFunc0640_00B3;
	var0007 = UI_die_roll(0x0001, 0x001E);
	UI_set_item_frame(var0006, var0007);
	UI_set_item_flag(var0006, 0x0012);
	var0000 = UI_update_last_created(var0005);
labelFunc0640_00B3:
	goto labelFunc0640_0063;
labelFunc0640_00B6:
	return;
}


