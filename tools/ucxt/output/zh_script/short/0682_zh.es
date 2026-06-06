#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern void Func0936 0x936 (var var0000, var var0001);

void Func0682 object#(0x682) ()
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
	var var000D;

	if (!(event == 0x0001)) goto labelFunc0682_014D;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Corp@");
	if (!Func0906()) goto labelFunc0682_0135;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x58, 0x0043]);
	var0002 = 0x0019;
	var0003 = UI_find_nearby(item, 0xFFFF, var0002, 0x0004);
	var0004 = UI_get_party_list2();
	var0004 = (var0004 & UI_get_npc_object(0xFFE9));
	var0004 = (var0004 & UI_get_npc_object(0xFFE6));
	var0005 = false;
	enum();
labelFunc0682_00A6:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc0682_00FA;
	if (!(!(var0008 in var0004))) goto labelFunc0682_00F7;
	var0002 = UI_get_distance(item, var0008);
	var0002 = ((var0002 / 0x0003) + 0x0005);
	UI_halt_scheduled(var0008);
	var0001 = UI_delayed_execute_usecode_array(var0008, [(byte)0x23, (byte)0x55, 0x0682], var0002);
	var0005 = true;
labelFunc0682_00F7:
	goto labelFunc0682_00A6;
labelFunc0682_00FA:
	if (!(var0005 == true)) goto labelFunc0682_0132;
	var0004 = UI_get_party_list();
	enum();
labelFunc0682_010A:
	for (var000B in var0004 with var0009 to var000A) attend labelFunc0682_0132;
	var000C = UI_get_npc_prop(var000B, 0x0003);
	Func0936(var000B, (var000C - 0x0002));
	goto labelFunc0682_010A;
labelFunc0682_0132:
	goto labelFunc0682_014D;
labelFunc0682_0135:
	var0001 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x55, 0x0606]);
labelFunc0682_014D:
	if (!(event == 0x0002)) goto labelFunc0682_0185;
	var000D = UI_get_item_flag(item, 0x000E);
	if (!(var000D == false)) goto labelFunc0682_0185;
	var000C = UI_get_npc_prop(item, 0x0003);
	Func0936(item, (var000C - 0x0002));
	Func0936(item, 0x0032);
labelFunc0682_0185:
	return;
}


