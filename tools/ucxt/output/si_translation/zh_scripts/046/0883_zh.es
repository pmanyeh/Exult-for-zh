#game "serpentisle"
void Func0883 0x883 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_find_nearby(item, 0x0113, 0x0028, 0x0010);
	enum();
labelFunc0883_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0883_0035;
	if (!(UI_get_item_frame(var0003) == 0x0007)) goto labelFunc0883_0032;
	UI_remove_item(var0003);
labelFunc0883_0032:
	goto labelFunc0883_0012;
labelFunc0883_0035:
	var0004 = UI_find_nearby(item, 0x02D8, 0x0032, 0x0000);
	enum();
labelFunc0883_0047:
	for (var0003 in var0004 with var0005 to var0006) attend labelFunc0883_008C;
	var0007 = UI_get_object_position(var0003);
	UI_play_sound_effect(0x0021);
	UI_sprite_effect(0x001E, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0003);
	goto labelFunc0883_0047;
labelFunc0883_008C:
	return;
}


