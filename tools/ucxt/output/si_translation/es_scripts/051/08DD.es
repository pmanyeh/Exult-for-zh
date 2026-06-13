#game "serpentisle"
void Func08DD 0x8DD (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;

	var0003 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0009, (var0003[0x0001] - 0x0006), (var0003[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0000);
	var0004 = UI_create_new_object(var0001);
	if (!var0004) goto labelFunc08DD_0066;
	UI_set_item_flag(var0004, 0x0012);
	UI_set_item_frame(var0004, var0002);
	var0005 = UI_update_last_created(var0003);
labelFunc08DD_0066:
	return;
}


