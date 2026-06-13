#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);

void Func0635 object#(0x635) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc0635_0063;
	var0000 = UI_find_nearby(item, 0x035F, 0x0000, 0x0000);
	var0001 = UI_get_item_frame(var0000);
	if (!((var0001 > 0x000F) && (var0001 < 0x0013))) goto labelFunc0635_0063;
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0635], 0x003C);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc0635_0063;
	Func0949("@Do not thou overcook it!@");
labelFunc0635_0063:
	if (!(event == 0x0002)) goto labelFunc0635_00F6;
	var0003 = UI_get_object_position(item);
	var0004 = UI_find_nearby(item, 0x033F, 0x0002, 0x0000);
	if (!(UI_get_array_size(var0004) > 0x0000)) goto labelFunc0635_00F6;
	UI_remove_item(item);
	var0005 = UI_create_new_object(0x0179);
	if (!var0005) goto labelFunc0635_00F6;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(item, 0x0000);
	var0002 = UI_update_last_created(var0003);
	if (!var0002) goto labelFunc0635_00F6;
	var0006 = UI_die_roll(0x0001, 0x0003);
	if (!(var0006 == 0x0001)) goto labelFunc0635_00E6;
	Func0949("@I believe the bread is ready.@");
labelFunc0635_00E6:
	if (!(var0006 == 0x0002)) goto labelFunc0635_00F6;
	Func0949("@Mmm... 'Tis a wonderful aroma.@");
labelFunc0635_00F6:
	return;
}


