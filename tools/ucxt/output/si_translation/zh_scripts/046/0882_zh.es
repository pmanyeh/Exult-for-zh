#game "serpentisle"
void Func0882 0x882 ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_object_position(0xFE9C);
	gflags[0x02EA] = false;
	gflags[0x02EB] = false;
	gflags[0x02EC] = false;
	var0001 = UI_create_new_object(0x037F);
	if (!var0001) goto labelFunc0882_0041;
	var0001 = UI_update_last_created(var0000);
	UI_play_sound_effect(0x0029);
	UI_set_item_flag(var0001, 0x0012);
labelFunc0882_0041:
	return;
}


