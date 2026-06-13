#game "serpentisle"
// externs
extern var Func098D 0x98D ();
extern var Func0880 0x880 (var var0000);
extern void Func0624 object#(0x624) ();
extern void Func0986 0x986 (var var0000, var var0001);
extern void Func0881 0x881 ();
extern var Func0988 0x988 (var var0000, var var0001);

void Func0622 object#(0x622) ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;

	if (!(event == 0x0001)) goto labelFunc0622_01E7;
	var0000 = UI_get_party_list();
	var0001 = UI_get_array_size(UI_get_party_list());
	if (!(var0001 == 0x0001)) goto labelFunc0622_0038;
labelFunc0622_0024:
	var0002 = (0x0006 + UI_die_roll(0x0000, 0x0009));
	goto labelFunc0622_0101;
labelFunc0622_0038:
	var0003 = UI_get_npc_name(0xFE9C);
	if (!(var0001 > 0x0002)) goto labelFunc0622_0055;
	var0004 = "we";
	goto labelFunc0622_005B;
labelFunc0622_0055:
	var0004 = "I";
labelFunc0622_005B:
	var0005 = Func098D();
	enum();
labelFunc0622_0062:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0622_0088;
	if (!(UI_npc_nearby(var0008) && UI_get_item_flag(var0008, 0x0006))) goto labelFunc0622_0085;
	goto labelFunc0622_008B;
labelFunc0622_0085:
	goto labelFunc0622_0062;
labelFunc0622_0088:
	goto labelFunc0622_0024;
labelFunc0622_008B:
	UI_show_npc_face0(var0008, 0x0000);
	message("\"In how many hours shall ");
	message(var0004);
	message(" awaken thee, ");
	message(var0003);
	message("?\"");
	say();
	var0002 = UI_input_numeric_value(0x0000, 0x000C, 0x0001, 0x0008);
	if (!(var0002 == 0x0000)) goto labelFunc0622_00F9;
	message("\"Cease thy jesting, Avatar! We have serious work to do!!\"");
	say();
	UI_remove_npc_face0();
	if (!Func0880(item)) goto labelFunc0622_00D5;
	item->Func0624();
labelFunc0622_00D5:
	enum();
labelFunc0622_00D6:
	for (var000B in var0000 with var0009 to var000A) attend labelFunc0622_00EE;
	UI_set_schedule_type(var000B, 0x001F);
	goto labelFunc0622_00D6;
labelFunc0622_00EE:
	UI_clear_item_flag(0xFE9C, 0x0001);
	return;
labelFunc0622_00F9:
	message("\"Pleasant dreams.\"");
	say();
	UI_remove_npc_face0();
labelFunc0622_0101:
	UI_fade_palette_sleep(0x000C, 0x0001, 0x0000);
	var000C = (var0002 * 0x05DC);
	Func0986(var0002, item);
	var000D = [0x004A, 0x00B8, 0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x000B];
	enum();
labelFunc0622_0144:
	for (var0010 in var000D with var000E to var000F) attend labelFunc0622_0181;
	enum();
labelFunc0622_0150:
	for (var0013 in var0000 with var0011 to var0012) attend labelFunc0622_017E;
	var0014 = UI_find_object(var0013, 0x0281, var0010, 0xFE99);
	if (!var0014) goto labelFunc0622_017B;
	UI_remove_item(var0014);
labelFunc0622_017B:
	goto labelFunc0622_0150;
labelFunc0622_017E:
	goto labelFunc0622_0144;
labelFunc0622_0181:
	Func0881();
	var0000 = Func0988(UI_get_npc_object(0xFE9C), var0000);
	enum();
labelFunc0622_0195:
	for (var000B in var0000 with var0015 to var0016) attend labelFunc0622_01AD;
	UI_set_schedule_type(var000B, 0x000B);
	goto labelFunc0622_0195;
labelFunc0622_01AD:
	var0017 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0022, (byte)0x6E, (byte)0x27, 0x0003]);
	var0017 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0622, (byte)0x55, 0x0623], 0x0021);
	UI_advance_time(var000C);
labelFunc0622_01E7:
	if (!(event == 0x0002)) goto labelFunc0622_01FC;
	UI_fade_palette_sleep(0x000C, 0x0001, 0x0001);
labelFunc0622_01FC:
	return;
}


