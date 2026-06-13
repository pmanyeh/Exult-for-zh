#game "serpentisle"
void Func0636 object#(0x636) ()
{
	var var0000;

	UI_fade_palette(0x000C, 0x0001, 0x0001);
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc0636_006E;
	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0636_006E:
	return;
}


