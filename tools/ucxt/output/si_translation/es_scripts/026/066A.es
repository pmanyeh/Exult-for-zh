#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func066A object#(0x66A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc066A_005B;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Quas Wis@");
	if (!Func0951()) goto labelFunc066A_003F;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x6D, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x066A]);
	goto labelFunc066A_005B;
labelFunc066A_003F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc066A_005B:
	if (!(event == 0x0002)) goto labelFunc066A_00C5;
	var0001 = UI_find_nearby(item, 0xFE99, 0x0019, 0x0008);
	var0002 = UI_get_party_list();
	enum();
labelFunc066A_007C:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc066A_00C5;
	if (!(!(var0005 in var0002))) goto labelFunc066A_00C2;
	if (!(UI_get_npc_prop(var0005, 0x0002) > 0x0005)) goto labelFunc066A_00C2;
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_attack_mode(var0005, 0x0007);
	UI_set_oppressor(var0005, UI_get_avatar_ref());
labelFunc066A_00C2:
	goto labelFunc066A_007C;
labelFunc066A_00C5:
	return;
}


