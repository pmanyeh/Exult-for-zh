#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func067E object#(0x67E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc067E_00C8;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Vas Por@");
	if (!Func0906()) goto labelFunc067E_00B0;
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x58, 0x0040, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x067E]);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_get_party_list();
	enum();
labelFunc067E_006F:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc067E_00AD;
	var0006 = UI_get_distance(item, var0005);
	var0006 = ((var0006 / 0x0003) + 0x0005);
	var0000 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x067E], var0006);
	goto labelFunc067E_006F;
labelFunc067E_00AD:
	goto labelFunc067E_00C8;
labelFunc067E_00B0:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc067E_00C8:
	if (!(event == 0x0002)) goto labelFunc067E_00D8;
	UI_set_item_flag(item, 0x000C);
labelFunc067E_00D8:
	return;
}


