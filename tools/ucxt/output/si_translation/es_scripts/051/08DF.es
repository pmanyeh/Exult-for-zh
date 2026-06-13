#game "serpentisle"
// externs
extern void Func08DE 0x8DE (var var0000, var var0001);

void Func08DF 0x8DF (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0015, (var0002[0x0001] - 0x0006), (var0002[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0000);
	if (!(var0001 == 0x01EF)) goto labelFunc08DF_00A1;
	var0003 = UI_create_new_object2(var0001, var0002);
	if (!var0003) goto labelFunc08DF_009E;
	UI_set_item_flag(var0003, 0x0012);
	UI_set_schedule_type(var0003, 0x0011);
	UI_set_item_frame(var0003, 0x0000);
	var0001 = UI_find_nearest(var0003, 0x0179, 0x0001);
	if (!(var0001 && (UI_get_item_frame(var0001) == 0x000C))) goto labelFunc08DF_009E;
	Func08DE(var0003, var0001);
labelFunc08DF_009E:
	goto labelFunc08DF_00CF;
labelFunc08DF_00A1:
	var0003 = UI_create_new_object(var0001);
	if (!var0003) goto labelFunc08DF_00CF;
	UI_set_item_flag(var0003, 0x0012);
	UI_set_item_frame(var0003, 0x0000);
	var0001 = UI_update_last_created(var0002);
labelFunc08DF_00CF:
	return;
}


