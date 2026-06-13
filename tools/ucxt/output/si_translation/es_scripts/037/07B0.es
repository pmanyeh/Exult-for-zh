#game "serpentisle"
void Func07B0 object#(0x7B0) ()
{
	var var0000;
	var var0001;

	if (!gflags[0x00E2]) goto labelFunc07B0_0037;
	var0000 = UI_create_new_object(0x034F);
	if (!var0000) goto labelFunc07B0_0037;
	UI_set_item_frame(var0000, 0x001F);
	var0001 = UI_update_last_created(UI_get_object_position(item));
	if (!var0001) goto labelFunc07B0_0037;
	UI_remove_item(item);
labelFunc07B0_0037:
	return;
}


