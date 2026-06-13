#game "serpentisle"
// externs
extern void Func0982 0x982 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func094F 0x94F (var var0000, var var0001);

void Func07E1 object#(0x7E1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0004)) goto labelFunc07E1_0167;
	var0000 = UI_click_on_item();
	if (!(!UI_is_npc(var0000))) goto labelFunc07E1_001B;
	abort;
labelFunc07E1_001B:
	UI_play_sound_effect(0x005B);
	var0001 = UI_get_npc_number(var0000);
	if (!(var0001 == 0xFF64)) goto labelFunc07E1_0153;
	gflags[0x02BC] = true;
	UI_set_item_flag(0xFF64, 0x001D);
	UI_set_alignment(0xFF64, 0x0003);
	UI_set_item_frame(0xFF64, 0x000D);
	UI_set_schedule_type(0xFF64, 0x000F);
	var0002 = UI_get_npc_prop(0xFF64, 0x0003);
	Func0982(0xFF64, (var0002 - 0x0001));
	Func097F(0xFF64, "@zzzzzz....@", 0x0002);
	if (!UI_npc_nearby(0xFF63)) goto labelFunc07E1_00A4;
	Func09AD(0xFF63);
	Func097F(0xFF63, "@I obey, Master!@", 0x0002);
labelFunc07E1_00A4:
	if (!UI_npc_nearby(0xFF62)) goto labelFunc07E1_00C0;
	Func09AD(0xFF62);
	Func097F(0xFF62, "@Hold on, Master!@", 0x0007);
labelFunc07E1_00C0:
	if (!UI_get_item_flag(0xFF65, 0x0004)) goto labelFunc07E1_00CE;
	abort;
labelFunc07E1_00CE:
	if (!(!UI_find_nearby(item, 0x02E6, 0xFFFF, 0x00B0))) goto labelFunc07E1_0105;
	var0002 = UI_approach_avatar(0xFF65, 0x008C, 0x0028);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x61, (byte)0x6C, (byte)0x6D, (byte)0x6E]);
labelFunc07E1_0105:
	UI_clear_item_flag(0xFF65, 0x0001);
	UI_set_schedule_type(0xFF65, 0x0000);
	UI_set_opponent(0xFF65, 0xFF64);
	UI_set_oppressor(0xFF65, 0xFF64);
	UI_set_alignment(0xFF65, 0x0001);
	UI_clear_item_say(0xFF65);
	Func094F(0xFF65, ["Die, Draygan!", "I shall kill thee!", "Whoreson!"]);
	goto labelFunc07E1_0167;
labelFunc07E1_0153:
	UI_set_item_flag(var0000, 0x0001);
	UI_set_schedule_type(var0000, 0x000E);
labelFunc07E1_0167:
	return;
}


