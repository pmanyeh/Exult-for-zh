#game "serpentisle"
void Func00D2 shape#(0xD2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc00D2_00B7;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == UI_part_of_day())) goto labelFunc00D2_001C;
	return;
labelFunc00D2_001C:
	var0001 = UI_set_item_quality(item, UI_part_of_day());
	if (!(UI_die_roll(0x0001, 0x0004) > 0x0001)) goto labelFunc00D2_00B7;
	var0002 = UI_create_new_object(0x0179);
	if (!var0002) goto labelFunc00D2_00B7;
	UI_set_item_flag(var0002, 0x0012);
	UI_clear_item_flag(var0002, 0x000B);
	UI_set_item_frame(var0002, 0x0018);
	var0003 = UI_get_object_position(item);
	var0004 = (var0003[0x0001] - UI_die_roll(0x0000, 0x0001));
	var0005 = (var0003[0x0002] - UI_die_roll(0x0000, 0x0001));
	var0006 = (var0003[0x0003] + 0x0001);
	var0001 = UI_update_last_created([var0004, var0005, var0006]);
labelFunc00D2_00B7:
	return;
}


