#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0683 object#(0x683) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0683_00C7;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Sact Lor@");
	if (!Func0906()) goto labelFunc0683_00AD;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x58, 0x0043, (byte)0x61, (byte)0x6F, (byte)0x61, (byte)0x6A]);
	var0002 = UI_get_party_list();
	enum();
labelFunc0683_006C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0683_00AA;
	var0006 = UI_get_distance(item, var0005);
	var0006 = ((var0006 / 0x0003) + 0x0005);
	var0001 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0683], var0006);
	goto labelFunc0683_006C;
labelFunc0683_00AA:
	goto labelFunc0683_00C7;
labelFunc0683_00AD:
	var0007 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x61, (byte)0x6F, (byte)0x61, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0683_00C7:
	if (!(event == 0x0002)) goto labelFunc0683_00D7;
	UI_set_item_flag(item, 0x0000);
labelFunc0683_00D7:
	return;
}


