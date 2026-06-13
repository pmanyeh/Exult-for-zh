#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern void Func0982 0x982 (var var0000, var var0001);

void Func0681 object#(0x681) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;

	if (!(event == 0x0001)) goto labelFunc0681_0120;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Corp@");
	if (!Func0951()) goto labelFunc0681_0106;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x58, 0x0082]);
	var0001 = 0x0019;
	var0002 = UI_find_nearby(item, 0xFFFF, var0001, 0x0004);
	var0003 = UI_get_party_list2();
	var0004 = false;
	enum();
labelFunc0681_0077:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc0681_00CB;
	if (!(!(var0007 in var0003))) goto labelFunc0681_00C8;
	var0001 = UI_get_distance(item, var0007);
	var0001 = ((var0001 / 0x0003) + 0x0005);
	UI_halt_scheduled(var0007);
	var0000 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0681], var0001);
	var0004 = true;
labelFunc0681_00C8:
	goto labelFunc0681_0077;
labelFunc0681_00CB:
	if (!(var0004 == true)) goto labelFunc0681_0103;
	var0003 = UI_get_party_list();
	enum();
labelFunc0681_00DB:
	for (var000A in var0003 with var0008 to var0009) attend labelFunc0681_0103;
	var000B = UI_get_npc_prop(var000A, 0x0003);
	Func0982(var000A, (var000B - 0x0002));
	goto labelFunc0681_00DB;
labelFunc0681_0103:
	goto labelFunc0681_0120;
labelFunc0681_0106:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x55, 0x0606]);
labelFunc0681_0120:
	if (!(event == 0x0002)) goto labelFunc0681_0158;
	var000C = UI_get_item_flag(item, 0x000E);
	if (!(var000C == false)) goto labelFunc0681_0158;
	var000B = UI_get_npc_prop(item, 0x0003);
	Func0982(item, (var000B - 0x0002));
	Func0982(item, 0x0032);
labelFunc0681_0158:
	return;
}


