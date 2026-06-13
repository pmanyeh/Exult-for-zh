#game "serpentisle"
// externs
extern var Func08AC 0x8AC (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func08C4 0x8C4 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func08AC(true);
	if (!var0000) goto labelFunc08C4_00CE;
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x59, 0x0004, (byte)0x01, (byte)0x6B]);
	var0002 = UI_get_object_position(item);
	UI_move_object(var0000, var0002);
	Func09AC(var0000, var0002[0x0001], var0002[0x0002], 0x0007);
	var0003 = UI_part_of_day();
	if (!((var0003 == 0x0000) || (var0003 == 0x0001))) goto labelFunc08C4_00CE;
	var0004 = (UI_get_object_position(item) & (0x0032 & 0x0004));
	var0005 = UI_find_nearby(var0004, 0x036C, 0x0014, 0x0000);
	if (!var0005) goto labelFunc08C4_00CE;
	var0002 = UI_get_object_position(var0005);
	UI_remove_item(var0005);
	var0006 = UI_create_new_object(0x03A7);
	if (!var0006) goto labelFunc08C4_00CE;
	var0001 = UI_set_item_quality(var0006, 0x00B3);
	UI_set_item_frame(var0006, 0x0000);
	var0001 = UI_update_last_created(var0002);
labelFunc08C4_00CE:
	return;
}


