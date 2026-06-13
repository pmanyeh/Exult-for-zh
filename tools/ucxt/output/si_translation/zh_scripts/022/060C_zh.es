#game "serpentisle"
// externs
extern void Func08F6 0x8F6 ();
extern var Func0994 0x994 ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func060C object#(0x60C) ()
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
	var var000E;
	var var000F;
	var var0010;

	var0000 = false;
	Func08F6();
	var0001 = Func0994();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0002 = UI_get_party_list2();
	var0002 = [0xFE9C, var0002];
	var0003 = [0x0AA7, 0x0AF3, 0x0000];
	var0004 = [0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001];
	var0005 = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000];
	var0006 = 0x0001;
	enum();
labelFunc060C_008F:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc060C_01C5;
	UI_halt_scheduled(var0009);
	UI_clear_item_say(var0009);
	if (!(!UI_get_item_flag(var0009, 0x001E))) goto labelFunc060C_00C0;
	UI_set_schedule_type(var0009, 0x001F);
labelFunc060C_00C0:
	UI_set_temperature(var0009, 0x0000);
	UI_clear_item_flag(var0009, 0x0001);
	UI_clear_item_flag(var0009, 0x0002);
	UI_clear_item_flag(var0009, 0x0003);
	UI_clear_item_flag(var0009, 0x0004);
	UI_clear_item_flag(var0009, 0x0005);
	UI_clear_item_flag(var0009, 0x0007);
	UI_clear_item_flag(var0009, 0x0008);
	UI_clear_item_flag(var0009, 0x0010);
	if (!(Func095C(var0009, 0x0000) > Func095C(var0009, 0x0003))) goto labelFunc060C_0152;
	var000A = (Func095C(var0009, 0x0000) - Func095C(var0009, 0x0003));
	Func095E(var0009, 0x0003, var000A);
labelFunc060C_0152:
	var000A = Func095C(var0009, 0x0009);
	var000A = (0x001F - var000A);
	Func095E(var0009, 0x0009, var000A);
	var000A = [(var0003[0x0001] + var0004[var0006]), (var0003[0x0002] + var0005[var0006]), var0003[0x0003]];
	UI_move_object(var0009, var000A);
	var000A = UI_execute_usecode_array(var0009, [(byte)0x61, (byte)0x59, 0x0002]);
	var0006 = (var0006 + 0x0001);
	goto labelFunc060C_008F;
labelFunc060C_01C5:
	var000B = Func09A0(0x0000, 0x0001);
	var000C = UI_find_nearby(var000B, 0x03B2, 0x003C, 0x0000);
	if (!var000C) goto labelFunc060C_0284;
	enum();
labelFunc060C_01EB:
	for (var000F in var000C with var000D to var000E) attend labelFunc060C_0284;
	var0010 = [0x0AA7, 0x0AEF, 0x0000];
	UI_move_object(var000F, var0010);
	UI_clear_item_flag(var000F, 0x0001);
	UI_clear_item_flag(var000F, 0x0002);
	UI_clear_item_flag(var000F, 0x0003);
	UI_clear_item_flag(var000F, 0x0004);
	UI_clear_item_flag(var000F, 0x0005);
	UI_clear_item_flag(var000F, 0x0007);
	UI_clear_item_flag(var000F, 0x0008);
	UI_clear_item_flag(var000F, 0x0010);
	UI_set_schedule_type(var000F, 0x0003);
	var000A = UI_execute_usecode_array(var000F, [(byte)0x59, 0x0004, (byte)0x61, (byte)0x6F, (byte)0x70]);
	goto labelFunc060C_01EB;
labelFunc060C_0284:
	var000B = Func09A0(0x0000, 0x0003);
	var000A = UI_execute_usecode_array(var000B, [(byte)0x23, (byte)0x55, 0x060D]);
	return;
}


