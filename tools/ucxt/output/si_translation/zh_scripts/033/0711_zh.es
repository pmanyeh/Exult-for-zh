#game "serpentisle"
void Func0711 object#(0x711) ()
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
	var var0009;

	var0000 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var0000) goto labelFunc0711_00EB;
	var0001 = UI_set_last_created(var0000);
	var0002 = UI_get_object_position(item);
	var0001 = UI_update_last_created(var0002);
	if (!(UI_get_item_frame(var0000) == 0x000F)) goto labelFunc0711_00EB;
	var0003 = UI_find_nearby(item, 0x00A0, 0x000F, 0x0000);
	var0004 = true;
	enum();
labelFunc0711_0057:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0711_008E;
	var0008 = UI_get_object_position(var0007);
	if (!((var0008[0x0001] == 0x0704) && (var0008[0x0002] == 0x0278))) goto labelFunc0711_008B;
	var0004 = false;
	goto labelFunc0711_008E;
labelFunc0711_008B:
	goto labelFunc0711_0057;
labelFunc0711_008E:
	if (!var0004) goto labelFunc0711_00EB;
	var0009 = UI_create_new_object(0x00A0);
	if (!var0009) goto labelFunc0711_00EB;
	UI_clear_item_flag(var0009, 0x0012);
	UI_set_item_frame(var0009, 0x0008);
	UI_sprite_effect(0x002F, 0x0702, 0x0276, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x006C);
	var0001 = UI_update_last_created([0x0704, 0x0278, 0x0000]);
labelFunc0711_00EB:
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	return;
}


