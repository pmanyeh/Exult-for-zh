#game "serpentisle"
void Func060F object#(0x60F) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0x0001);
	UI_play_sound_effect(0x0074);
	UI_lightning();
	var0001 = UI_apply_damage(UI_get_npc_prop(item, 0x0000), 0x000C, 0x0003, item);
	return;
}


