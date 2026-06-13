#game "blackgate"
// externs
extern var Func0900 0x900 ();
extern var Func0801 0x801 (var var0000);
extern void Func0624 object#(0x624) ();
extern void Func093F 0x93F (var var0000, var var0001);
extern void Func0940 0x940 (var var0000);
extern void Func093A 0x93A (var var0000, var var0001);
extern var Func093C 0x93C (var var0000, var var0001);

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

	if (!(event == 0x0001)) goto labelFunc0622_0179;
	var0000 = UI_get_party_list();
	var0001 = Func0900();
	if (!(var0001 == 0xFE9C)) goto labelFunc0622_0033;
	var0002 = (0x0006 + UI_die_roll(0x0000, 0x0009));
	goto labelFunc0622_00E9;
labelFunc0622_0033:
	UI_show_npc_face(var0001, 0x0000);
	var0003 = UI_get_npc_name(0xFE9C);
	var0004 = UI_get_array_size(UI_get_party_list());
	if (!(var0004 > 0x0002)) goto labelFunc0622_0065;
	var0005 = "我們";
	goto labelFunc0622_006B;
labelFunc0622_0065:
	var0005 = "我";
labelFunc0622_006B:
	message("「你想睡多久？");
	message(var0005);
	message("會叫醒你的， ");
	message(var0003);
	message("？」");
	say();
	var0002 = UI_input_numeric_value(0x0000, 0x000C, 0x0001, 0x0008);
	if (!(var0002 == 0x0000)) goto labelFunc0622_00DE;
	var0003 = UI_get_npc_name(var0001);
	message(var0003);
	message(" 給你一個不耐煩的眼神。「算了。」");
	say();
	if (!Func0801(item)) goto labelFunc0622_00B4;
	item->Func0624();
labelFunc0622_00B4:
	enum();
labelFunc0622_00B5:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc0622_00CC;
	Func093F(var0008, 0x001F);
	goto labelFunc0622_00B5;
labelFunc0622_00CC:
	UI_remove_npc_face(var0001);
	UI_clear_item_flag(0xFE9C, 0x0001);
	return;
labelFunc0622_00DE:
	message("「做個好夢。」");
	say();
	UI_remove_npc_face(var0001);
labelFunc0622_00E9:
	if (!(UI_die_roll(0x0001, 0x0004) == 0x0001)) goto labelFunc0622_0100;
	Func0940(0x0001);
labelFunc0622_0100:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var0009 = (var0002 * 0x05DC);
	Func093A(var0002, item);
	var0000 = Func093C(UI_get_npc_object(0xFE9C), var0000);
	enum();
labelFunc0622_012F:
	for (var0008 in var0000 with var000A to var000B) attend labelFunc0622_0146;
	Func093F(var0008, 0x000B);
	goto labelFunc0622_012F;
labelFunc0622_0146:
	var000C = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0023]);
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0636, (byte)0x55, 0x0623], 0x0021);
	UI_advance_time(var0009);
labelFunc0622_0179:
	return;
}


