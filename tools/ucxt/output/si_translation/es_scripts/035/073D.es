#game "serpentisle"
void Func073D object#(0x73D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0003) && gflags[0x0004])) goto labelFunc073D_004A;
	var0000 = UI_get_object_position(item);
	var0001 = UI_create_new_object(0x03BB);
	if (!var0001) goto labelFunc073D_004A;
	UI_play_sound_effect(0x004D);
	UI_set_item_frame(var0001, 0x0005);
	var0002 = UI_update_last_created(var0000);
	if (!var0002) goto labelFunc073D_004A;
	UI_remove_item(item);
labelFunc073D_004A:
	return;
}


