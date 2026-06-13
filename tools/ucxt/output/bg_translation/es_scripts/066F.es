#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func066F object#(0x66F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc066F_0086;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(item);
	UI_item_say(item, "@Vas Zu@");
	if (!Func0906()) goto labelFunc066F_006C;
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x61, (byte)0x65, (byte)0x6F, (byte)0x67, (byte)0x6A, (byte)0x55, 0x066F]);
	goto labelFunc066F_0086;
labelFunc066F_006C:
	var0001 = UI_execute_usecode_array(item, [(byte)0x61, (byte)0x65, (byte)0x6F, (byte)0x67, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc066F_0086:
	if (!(event == 0x0002)) goto labelFunc066F_00D7;
	var0002 = 0x0019;
	var0003 = UI_find_nearby(item, 0xFFFF, var0002, 0x0004);
	var0004 = UI_get_party_list();
	enum();
labelFunc066F_00AD:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc066F_00D7;
	if (!(!(var0007 in var0004))) goto labelFunc066F_00D4;
	UI_halt_scheduled(var0007);
	UI_set_item_flag(var0007, 0x0001);
labelFunc066F_00D4:
	goto labelFunc066F_00AD;
labelFunc066F_00D7:
	return;
}


