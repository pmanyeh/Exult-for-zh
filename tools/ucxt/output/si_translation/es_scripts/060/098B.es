#game "serpentisle"
void Func098B 0x98B (var var0000)
{
	var var0001;

	var0001 = UI_get_object_position(var0000);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_sprite_effect(0x0018, var0001[0x0001], var0001[0x0002], 0xFFFE, 0xFFFE, 0x0000, 0xFFFF);
	return;
}


