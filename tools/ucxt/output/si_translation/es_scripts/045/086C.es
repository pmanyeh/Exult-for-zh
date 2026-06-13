#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func086C 0x86C (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!UI_get_item_flag(var0000, 0x0004)) goto labelFunc086C_0014;
	UI_resurrect_npc(var0000);
labelFunc086C_0014:
	UI_clear_item_flag(var0000, 0x0001);
	UI_clear_item_flag(var0000, 0x0002);
	UI_clear_item_flag(var0000, 0x0003);
	UI_clear_item_flag(var0000, 0x0007);
	UI_clear_item_flag(var0000, 0x0008);
	UI_clear_item_flag(var0000, 0x0010);
	UI_clear_item_flag(var0000, 0x0004);
	if (!(!Func0942(var0000))) goto labelFunc086C_00E1;
	var0001 = UI_get_object_position(item);
	var0002 = UI_die_roll(0xFFFE, 0x0002);
	var0003 = UI_die_roll(0xFFFE, 0x0002);
	var0001[0x0001] = (var0001[0x0001] + var0002);
	var0001[0x0002] = (var0001[0x0002] + var0003);
	UI_move_object(var0000, [var0001[0x0001], var0001[0x0002], var0001[0x0003]]);
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc086C_00E1:
	var0004 = Func095C(var0000, 0x0000);
	var0005 = Func095C(var0000, 0x0003);
	var0006 = (var0004 - var0005);
	Func095E(var0000, 0x0003, var0006);
	if (!(!UI_get_item_flag(var0000, 0x0006))) goto labelFunc086C_0124;
	UI_add_to_party(var0000);
labelFunc086C_0124:
	UI_set_schedule_type(var0000, 0x001F);
	var0007 = UI_execute_usecode_array(var0000, [(byte)0x61]);
	return;
}


