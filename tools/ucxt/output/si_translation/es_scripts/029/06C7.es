#game "serpentisle"
void Func06C7 object#(0x6C7) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(gflags[0x026C] || (UI_get_timer(0x0001) > 0x0005))) goto labelFunc06C7_0062;
	var0000 = UI_get_object_position(item);
	var0001 = UI_create_new_object(0x034A);
	if (!var0001) goto labelFunc06C7_0062;
	UI_set_item_frame(var0001, 0x0003);
	UI_clear_item_flag(var0001, 0x0012);
	var0001 = UI_set_item_quantity(var0001, UI_get_item_quality(item));
	var0002 = UI_update_last_created(var0000);
	if (!var0002) goto labelFunc06C7_0062;
	UI_remove_item(item);
labelFunc06C7_0062:
	return;
}


