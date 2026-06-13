#game "serpentisle"
void Func0606 object#(0x606) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(item);
	var0001 = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0002 = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	var0001 = (var0001 - 0x0003);
	var0002 = (var0002 - 0x0004);
	UI_sprite_effect(0x0009, var0001, var0002, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0030);
	return;
}


