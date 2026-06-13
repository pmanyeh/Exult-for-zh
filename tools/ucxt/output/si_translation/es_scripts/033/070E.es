#game "serpentisle"
void Func070E object#(0x70E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var0000) goto labelFunc070E_0079;
	var0001 = UI_set_last_created(var0000);
	var0002 = UI_get_object_position(item);
	var0001 = UI_update_last_created(var0002);
	if (!(UI_get_item_frame(var0000) == 0x000E)) goto labelFunc070E_0079;
	var0003 = UI_find_nearby(item, 0x0113, 0x0004, 0x0010);
	enum();
labelFunc070E_0053:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc070E_0079;
	if (!(UI_get_item_quality(var0006) == 0x000D)) goto labelFunc070E_0076;
	UI_remove_item(var0006);
	goto labelFunc070E_0079;
labelFunc070E_0076:
	goto labelFunc070E_0053;
labelFunc070E_0079:
	return;
}


