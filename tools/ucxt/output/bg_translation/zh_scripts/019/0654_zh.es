#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0654 object#(0x654) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0654_0076;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_item_say(item, "@Vas An Nox@");
	if (!Func0906()) goto labelFunc0654_0060;
	var0001 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67, (byte)0x58, 0x0040, (byte)0x55, 0x0654]);
	goto labelFunc0654_0076;
labelFunc0654_0060:
	var0001 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0654_0076:
	if (!(event == 0x0002)) goto labelFunc0654_00B2;
	var0002 = UI_get_party_list();
	var0002 = (var0002 & 0xFE9C);
	enum();
labelFunc0654_0090:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0654_00B2;
	UI_clear_item_flag(var0005, 0x0008);
	UI_clear_item_flag(var0005, 0x0007);
	goto labelFunc0654_0090;
labelFunc0654_00B2:
	return;
}


