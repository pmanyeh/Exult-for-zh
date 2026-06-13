#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0980 0x980 (var var0000);

void Func0659 object#(0x659) ()
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

	if (!(event == 0x0001)) goto labelFunc0659_00D8;
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Xen Jux@");
	if (!Func0951()) goto labelFunc0659_00BE;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x6A, (byte)0x69, (byte)0x58, 0x0043]);
	var0001 = UI_get_npc_object(0xFE9C);
	UI_obj_sprite_effect(var0001, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = 0x0019;
	var0003 = Func0980(var0002);
	enum();
labelFunc0659_006B:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0659_00BB;
	var0002 = UI_get_distance(item, var0006);
	var0002 = ((var0002 / 0x0004) + 0x0004);
	if (!(!(UI_die_roll(0x0001, 0x0003) == 0x0001))) goto labelFunc0659_00B8;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x0659], var0002);
labelFunc0659_00B8:
	goto labelFunc0659_006B;
labelFunc0659_00BB:
	goto labelFunc0659_00D8;
labelFunc0659_00BE:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x6A, (byte)0x69, (byte)0x55, 0x0606]);
labelFunc0659_00D8:
	if (!(event == 0x0002)) goto labelFunc0659_0119;
	var0007 = UI_get_npc_number(item);
	if (!(!(var0007 in [0xFE9C]))) goto labelFunc0659_0119;
	var0008 = UI_get_alignment(0xFE9C);
	if (!var0008) goto labelFunc0659_0111;
	UI_set_item_flag(item, 0x0002);
	goto labelFunc0659_0119;
labelFunc0659_0111:
	UI_clear_item_flag(item, 0x0002);
labelFunc0659_0119:
	return;
}


