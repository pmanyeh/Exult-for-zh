#game "serpentisle"
// externs
extern void Func0620 object#(0x620) ();
extern var Func0983 0x983 (var var0000);
extern void Func094F 0x94F (var var0000, var var0001);

void Func0795 object#(0x795) ()
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

	if (!(event == 0x0003)) goto labelFunc0795_00C3;
	var0000 = UI_get_party_list();
	enum();
labelFunc0795_0010:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0795_00C3;
	if (!(!UI_roll_to_win(UI_get_npc_prop(var0003, 0x0000), UI_get_item_quality(item)))) goto labelFunc0795_00C0;
	var0004 = UI_get_npc_object(var0003);
	UI_halt_scheduled(var0004);
	var0004->Func0620();
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x061F], 0x0019);
	var0005 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x6E, (byte)0x27, 0x0004, (byte)0x61]);
	if (!Func0983(var0004)) goto labelFunc0795_00A9;
	Func094F(var0004, ["@Ohh!@", "@Eeehhh!@", "@Bleh!@", "@Gak!@"]);
labelFunc0795_00A9:
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x0795], 0x0011);
labelFunc0795_00C0:
	goto labelFunc0795_0010;
labelFunc0795_00C3:
	if (!(event == 0x0002)) goto labelFunc0795_015F;
	var0006 = 0x0000;
	var0007 = 0x0000;
labelFunc0795_00D7:
	if (!(var0006 < 0x0010)) goto labelFunc0795_0120;
	var0008 = UI_die_roll(0x0000, 0x0003);
	if (!(var0007 == 0x0000)) goto labelFunc0795_0105;
	var0007 = (var0006 + var0008);
	goto labelFunc0795_0113;
labelFunc0795_0105:
	var0007 = (var0007 & (var0006 + var0008));
labelFunc0795_0113:
	var0006 = (var0006 + 0x0004);
	goto labelFunc0795_00D7;
labelFunc0795_0120:
	enum();
labelFunc0795_0121:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc0795_015F;
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc0795_015C;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, var000B);
	var000C = UI_update_last_created(UI_get_object_position(item));
labelFunc0795_015C:
	goto labelFunc0795_0121;
labelFunc0795_015F:
	return;
}


