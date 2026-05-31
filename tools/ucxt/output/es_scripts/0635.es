#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);

void Func0635 object#(0x635) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc0635_004D;
	var0000 = UI_find_nearby(item, 0x0292, 0x0000, 0x0000);
	if (!var0000) goto labelFunc0635_004D;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0635], 0x003C);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc0635_004D;
	Func08FE("@Do not over cook it!@");
labelFunc0635_004D:
	if (!(event == 0x0002)) goto labelFunc0635_00E0;
	var0002 = UI_get_object_position(item);
	var0003 = UI_find_nearby(item, 0x033F, 0x0002, 0x0000);
	if (!(UI_get_array_size(var0003) > 0x0000)) goto labelFunc0635_00E0;
	UI_remove_item(item);
	var0004 = UI_create_new_object(0x0179);
	if (!var0004) goto labelFunc0635_00E0;
	UI_set_item_flag(var0004, 0x0012);
	UI_set_item_frame(item, 0x0000);
	var0001 = UI_update_last_created(var0002);
	if (!var0001) goto labelFunc0635_00E0;
	var0005 = UI_die_roll(0x0001, 0x0003);
	if (!(var0005 == 0x0001)) goto labelFunc0635_00D0;
	Func08FE("@I believe the bread is ready.@");
labelFunc0635_00D0:
	if (!(var0005 == 0x0002)) goto labelFunc0635_00E0;
	Func08FE("@Mmm... Smells good.@");
labelFunc0635_00E0:
	return;
}


