#game "serpentisle"
void Func070A object#(0x70A) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!UI_get_item_flag(0xFE9C, 0x0023)) goto labelFunc070A_0131;
	if (!gflags[0x0228]) goto labelFunc070A_0033;
	var0000 = UI_set_npc_prop(0xFFE4, 0x000A, 0x0001);
	var0000 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0000);
labelFunc070A_0033:
	UI_set_polymorph(0xFFE4, 0x0292);
	UI_set_polymorph(0xFE9C, 0x02D1);
	var0001 = UI_get_object_position(0xFE9C);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	var0002 = UI_die_roll(0x0000, 0x0003);
	UI_lightning();
	UI_sprite_effect(0x002B, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, var0002, 0x0001);
	if (!UI_npc_nearby(0xFFE4)) goto labelFunc070A_011D;
	var0001 = UI_get_object_position(0xFFE4);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	var0002 = UI_die_roll(0x0000, 0x0003);
	UI_sprite_effect(0x002B, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, var0002, 0x0001);
labelFunc070A_011D:
	UI_clear_item_flag(0xFE9C, 0x0023);
	UI_clear_item_flag(0xFFE4, 0x001D);
labelFunc070A_0131:
	return;
}


