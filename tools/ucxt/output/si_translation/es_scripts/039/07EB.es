#game "serpentisle"
void Func07EB object#(0x7EB) ()
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

	var0000 = UI_get_object_position(item);
	var0001 = (var0000[0x0003] + 0x0001);
	var0001 = (var0001 / 0x0002);
	UI_sprite_effect(0x0001, (var0000[0x0001] + var0001), (var0000[0x0002] + var0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0002 = UI_get_party_list2();
	var0003 = UI_find_nearby(item, 0xFE99, 0x0005, 0x0008);
	enum();
labelFunc07EB_0066:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc07EB_0111;
	if (!(!(var0006 in var0002))) goto labelFunc07EB_010E;
	var0007 = UI_die_roll(0x0005, 0x000A);
	var0008 = UI_apply_damage(UI_get_npc_prop(var0006, 0x0000), var0007, 0x0001, var0006);
	var0007 = UI_die_roll(0x0005, 0x000A);
	var0008 = UI_apply_damage(UI_get_npc_prop(var0006, 0x0000), var0007, 0x0002, var0006);
	var0009 = UI_get_alignment(var0006);
	if (!((var0009 == 0x0002) || (var0009 == 0x0003))) goto labelFunc07EB_00F0;
	UI_set_schedule_type(var0006, 0x0000);
labelFunc07EB_00F0:
	if (!(var0009 == 0x0000)) goto labelFunc07EB_010E;
	UI_set_alignment(var0006, 0x0002);
	UI_set_schedule_type(var0006, 0x0000);
labelFunc07EB_010E:
	goto labelFunc07EB_0066;
labelFunc07EB_0111:
	return;
}


