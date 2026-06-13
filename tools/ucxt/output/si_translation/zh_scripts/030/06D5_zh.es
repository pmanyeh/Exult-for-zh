#game "serpentisle"
void Func06D5 object#(0x6D5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!gflags[0x0000]) goto labelFunc06D5_00CB;
	var0000 = UI_find_nearby(item, 0x012D, 0x000F, 0x0000);
	enum();
labelFunc06D5_0018:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06D5_008F;
	var0004 = UI_get_object_position(var0003);
	var0004[0x0002] = (var0004[0x0002] + 0x0002);
	UI_remove_item(var0003);
	var0005 = UI_create_new_object(0x0121);
	if (!var0005) goto labelFunc06D5_0068;
	UI_clear_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created(var0004);
labelFunc06D5_0068:
	var0005 = UI_create_new_object(0x00E0);
	if (!var0005) goto labelFunc06D5_008C;
	UI_clear_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created(var0004);
labelFunc06D5_008C:
	goto labelFunc06D5_0018;
labelFunc06D5_008F:
	var0005 = UI_create_new_object(0x0192);
	if (!var0005) goto labelFunc06D5_00C6;
	UI_set_item_frame(var0005, 0x0004);
	UI_clear_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created([0x0750, 0x0416, 0x0000]);
labelFunc06D5_00C6:
	UI_remove_item(item);
labelFunc06D5_00CB:
	return;
}


