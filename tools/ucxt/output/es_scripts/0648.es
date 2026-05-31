#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0648 object#(0x648) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0648_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Mani Ylem@");
	if (!Func0906()) goto labelFunc0648_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0044, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0648]);
	goto labelFunc0648_004F;
labelFunc0648_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0648_004F:
	if (!(event == 0x0002)) goto labelFunc0648_00B2;
	var0001 = UI_get_party_list();
	enum();
labelFunc0648_005F:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0648_00B2;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_create_new_object(0x0179);
	if (!var0006) goto labelFunc0648_00AF;
	var0007 = UI_die_roll(0x0001, 0x001E);
	UI_set_item_frame(var0006, var0007);
	UI_set_item_flag(var0006, 0x0012);
	var0000 = UI_update_last_created(var0005);
labelFunc0648_00AF:
	goto labelFunc0648_005F;
labelFunc0648_00B2:
	return;
}


