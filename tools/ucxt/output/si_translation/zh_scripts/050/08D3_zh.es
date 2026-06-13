#game "serpentisle"
void Func08D3 0x8D3 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_object_position(0xFE9C);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0001, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_lightning();
	UI_play_sound_effect(0x002A);
	var0001 = UI_get_party_list();
	enum();
labelFunc08D3_0099:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08D3_00C1;
	var0005 = UI_apply_damage(UI_get_npc_prop(var0004, 0x0000), 0x001E, 0x0003, var0004);
	goto labelFunc08D3_0099;
labelFunc08D3_00C1:
	return;
}


