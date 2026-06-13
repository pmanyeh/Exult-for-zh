#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func064E object#(0x64E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc064E_006D;
	UI_halt_scheduled(item);
	UI_obj_sprite_effect(item, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_item_say(item, "@Vas An Nox@");
	if (!Func0951()) goto labelFunc064E_0055;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x58, 0x0040, (byte)0x55, 0x064E]);
	goto labelFunc064E_006D;
labelFunc064E_0055:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064E_006D:
	if (!(event == 0x0002)) goto labelFunc064E_00B3;
	var0001 = UI_get_party_list();
	var0001 = (var0001 & 0xFE9C);
	enum();
labelFunc064E_0087:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc064E_00B3;
	UI_clear_item_flag(var0004, 0x0008);
	UI_clear_item_flag(var0004, 0x0007);
	UI_clear_item_flag(var0004, 0x0024);
	goto labelFunc064E_0087;
labelFunc064E_00B3:
	return;
}


