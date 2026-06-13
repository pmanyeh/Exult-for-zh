#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);

void Func07F0 object#(0x7F0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	UI_set_weather(0x0000);
	var0000 = UI_get_party_list2();
	var0001 = 0x0935;
	enum();
labelFunc07F0_0015:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07F0_006F;
	if (!(var0004 != UI_get_npc_object(0xFE9C))) goto labelFunc07F0_006C;
	UI_remove_from_party(var0004);
	UI_set_new_schedules(var0004, 0x0000, 0x000C, [var0001, 0x05E2]);
	UI_move_object(var0004, [var0001, 0x05E2]);
	UI_run_schedule(var0004);
	var0001 = (var0001 + 0x0002);
labelFunc07F0_006C:
	goto labelFunc07F0_0015;
labelFunc07F0_006F:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x091D, 0x063C]);
	UI_set_schedule_type(0xFE9C, 0x001F);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
	var0005 = ("" & ("@Oh...@" & ("@Mine head doth ache!@" & "@Where am I?@")));
	Func094F(0xFE9C, var0005);
	return;
}


