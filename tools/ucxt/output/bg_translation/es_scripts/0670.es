#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0670 object#(0x670) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0670_0057;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Quas Wis@");
	if (!Func0906()) goto labelFunc0670_003D;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6D, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0670]);
	goto labelFunc0670_0057;
labelFunc0670_003D:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0670_0057:
	if (!(event == 0x0002)) goto labelFunc0670_00C1;
	var0001 = UI_find_nearby(item, 0xFFFF, 0x0019, 0x0008);
	var0002 = UI_get_party_list();
	enum();
labelFunc0670_0078:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0670_00C1;
	if (!(!(var0005 in var0002))) goto labelFunc0670_00BE;
	if (!(UI_get_npc_prop(var0005, 0x0002) > 0x0005)) goto labelFunc0670_00BE;
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_attack_mode(var0005, 0x0007);
	UI_set_oppressor(var0005, UI_get_avatar_ref());
labelFunc0670_00BE:
	goto labelFunc0670_0078;
labelFunc0670_00C1:
	return;
}


