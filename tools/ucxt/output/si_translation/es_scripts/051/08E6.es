#game "serpentisle"
// externs
extern void Func0982 0x982 (var var0000, var var0001);

void Func08E6 0x8E6 ()
{
	var var0000;

	var0000 = UI_get_object_position(0xFE9C);
	UI_play_sound_effect(0x002A);
	UI_obj_sprite_effect(0xFE9C, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func0982(0xFE9C, 0x007E);
	return;
}


