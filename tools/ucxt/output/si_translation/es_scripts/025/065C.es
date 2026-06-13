#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0980 0x980 (var var0000);

void Func065C object#(0x65C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc065C_00E8;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Des Sanct@");
	if (!Func0951()) goto labelFunc065C_00CE;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x58, 0x0014, (byte)0x70, (byte)0x6F, (byte)0x6A]);
	var0001 = 0x001E;
	var0002 = Func0980(var0001);
	var0003 = UI_get_party_list();
	var0003 = (var0003 & 0xFE9C);
	enum();
labelFunc065C_0070:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc065C_00CB;
	if (!(!(var0006 in var0003))) goto labelFunc065C_00C8;
	if (!(!(UI_die_roll(0x0001, 0x0003) == 0x0001))) goto labelFunc065C_00C8;
	var0001 = UI_get_distance(item, var0006);
	var0001 = ((var0001 / 0x0003) + 0x0005);
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x065C], var0001);
labelFunc065C_00C8:
	goto labelFunc065C_0070;
labelFunc065C_00CB:
	goto labelFunc065C_00E8;
labelFunc065C_00CE:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc065C_00E8:
	if (!(event == 0x0002)) goto labelFunc065C_00F8;
	UI_set_item_flag(item, 0x0003);
labelFunc065C_00F8:
	return;
}


