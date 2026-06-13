#game "serpentisle"
void Func0705 object#(0x705) ()
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

	var0000 = 0x0000;
	var0001 = 0x0000;
	var0002 = UI_find_nearby(item, 0x0281, 0x0002, 0x0000);
	enum();
labelFunc0705_001E:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0705_0054;
	if (!(UI_get_item_frame(var0005) == 0x0015)) goto labelFunc0705_003D;
	var0000 = var0005;
labelFunc0705_003D:
	if (!(UI_get_item_frame(var0005) == 0x0016)) goto labelFunc0705_0051;
	var0001 = var0005;
labelFunc0705_0051:
	goto labelFunc0705_001E;
labelFunc0705_0054:
	if (!(var0000 && var0001)) goto labelFunc0705_0140;
	var0006 = UI_get_object_position(var0000);
	UI_play_sound_effect(0x0074);
	var0006[0x0001] = (var0006[0x0001] - (var0006[0x0003] / 0x0002));
	var0006[0x0002] = (var0006[0x0002] - (var0006[0x0003] / 0x0002));
	UI_sprite_effect(0x0011, (var0006[0x0001] - 0x0002), (var0006[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001B, (var0006[0x0001] - 0x0003), (var0006[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_get_object_position(var0000);
	if (!var0000) goto labelFunc0705_0102;
	UI_remove_item(var0000);
labelFunc0705_0102:
	if (!var0001) goto labelFunc0705_010F;
	UI_remove_item(var0001);
labelFunc0705_010F:
	var0007 = UI_create_new_object(0x0281);
	if (!var0007) goto labelFunc0705_0140;
	UI_set_item_frame(var0007, 0x0017);
	var0008 = UI_set_item_quality(var0007, 0x008B);
	var0008 = UI_update_last_created(var0006);
labelFunc0705_0140:
	return;
}


