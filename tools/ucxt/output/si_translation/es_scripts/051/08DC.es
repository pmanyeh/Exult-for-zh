#game "serpentisle"
void Func08DC 0x8DC (var var0000)
{
	var var0001;

	var0001 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0009, (var0001[0x0001] - 0x0006), (var0001[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0000);
	return;
}


