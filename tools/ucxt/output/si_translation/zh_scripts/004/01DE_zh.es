#game "serpentisle"
void Func01DE shape#(0x1DE) ()
{
	var var0000;

	if (!(event == 0x0007)) goto labelFunc01DE_0065;
	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x000C, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(item);
	goto labelFunc01DE_006D;
labelFunc01DE_0065:
	UI_item_say(item, "Kill the Avatar!");
labelFunc01DE_006D:
	return;
}


