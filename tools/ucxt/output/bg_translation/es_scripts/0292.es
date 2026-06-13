#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);

void Func0292 shape#(0x292) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0292_00B8;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0001) || (var0000 == 0x0002))) goto labelFunc0292_00B8;
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x033F)) goto labelFunc0292_00B8;
	var0003 = UI_set_last_created(item);
	if (!var0003) goto labelFunc0292_00B8;
	var0004 = UI_get_object_position(var0001);
	var0004[0x0001] = (var0004[0x0001] - UI_die_roll(0x0001, 0x0002));
	var0004[0x0003] = (var0004[0x0003] + 0x0001);
	var0003 = UI_update_last_created(var0004);
	if (!var0003) goto labelFunc0292_00B8;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0292], 0x003C);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc0292_00B8;
	Func08FE("@Do not over cook it!@");
labelFunc0292_00B8:
	if (!(event == 0x0002)) goto labelFunc0292_014B;
	var0004 = UI_get_object_position(item);
	var0005 = UI_find_nearby(item, 0x033F, 0x0002, 0x0000);
	if (!(UI_get_array_size(var0005) > 0x0000)) goto labelFunc0292_014B;
	UI_remove_item(item);
	var0006 = UI_create_new_object(0x0179);
	if (!var0006) goto labelFunc0292_014B;
	UI_set_item_flag(var0006, 0x0012);
	UI_set_item_frame(item, 0x0000);
	var0003 = UI_update_last_created(var0004);
	if (!var0003) goto labelFunc0292_014B;
	var0007 = UI_die_roll(0x0001, 0x0003);
	if (!(var0007 == 0x0001)) goto labelFunc0292_013B;
	Func08FE("@I believe the bread is ready.@");
labelFunc0292_013B:
	if (!(var0007 == 0x0002)) goto labelFunc0292_014B;
	Func08FE("@Mmm... Smells good.@");
labelFunc0292_014B:
	return;
}


