#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0682 object#(0x682) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0682_00B6;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Sact Lor@");
	if (!Func0951()) goto labelFunc0682_009A;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x58, 0x0082, (byte)0x61, (byte)0x6F, (byte)0x61, (byte)0x6A]);
	var0001 = UI_get_party_list();
	enum();
labelFunc0682_0059:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0682_0097;
	var0005 = UI_get_distance(item, var0004);
	var0005 = ((var0005 / 0x0003) + 0x0005);
	var0000 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x0682], var0005);
	goto labelFunc0682_0059;
labelFunc0682_0097:
	goto labelFunc0682_00B6;
labelFunc0682_009A:
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x61, (byte)0x6F, (byte)0x61, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0682_00B6:
	if (!(event == 0x0002)) goto labelFunc0682_00C6;
	UI_set_item_flag(item, 0x0000);
labelFunc0682_00C6:
	return;
}


