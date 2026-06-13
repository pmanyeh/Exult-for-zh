#game "serpentisle"
void Func06CD object#(0x6CD) ()
{
	var var0000;
	var var0001;

	if (!gflags[0x0004]) goto labelFunc06CD_0041;
	var0000 = UI_create_new_object(0x03E6);
	if (!var0000) goto labelFunc06CD_0041;
	UI_clear_item_flag(var0000, 0x0012);
	UI_set_item_frame(var0000, 0x0006);
	var0001 = UI_update_last_created(UI_get_object_position(item));
	if (!var0001) goto labelFunc06CD_0041;
	UI_remove_item(item);
labelFunc06CD_0041:
	return;
}


