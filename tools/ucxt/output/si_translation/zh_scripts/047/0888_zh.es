#game "serpentisle"
void Func0888 0x888 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(gflags[0x02F5] && (gflags[0x02F6] && (gflags[0x02F7] && gflags[0x02F8])))) goto labelFunc0888_0082;
	var0000 = UI_find_nearby(item, 0x010E, 0x0014, 0x0000);
	enum();
labelFunc0888_0024:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0888_0082;
	if (!(UI_get_item_quality(var0003) == 0x00F1)) goto labelFunc0888_007F;
	var0004 = UI_get_object_position(var0003);
	UI_remove_item(var0003);
	var0005 = UI_create_new_object(0x010E);
	if (!var0005) goto labelFunc0888_007F;
	var0003 = UI_update_last_created([var0004]);
	UI_play_sound_effect2(0x0046, var0005);
	UI_set_item_frame(var0005, 0x0014);
labelFunc0888_007F:
	goto labelFunc0888_0024;
labelFunc0888_0082:
	return;
}


