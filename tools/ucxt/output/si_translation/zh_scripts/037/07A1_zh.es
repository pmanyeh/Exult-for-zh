#game "serpentisle"
void Func07A1 object#(0x7A1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc07A1_006E;
	var0000 = UI_find_nearby(item, 0x0356, 0x0005, 0x0000);
	enum();
labelFunc07A1_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc07A1_006E;
	var0004 = UI_get_item_frame(var0003);
	if (!(var0004 == 0x0000)) goto labelFunc07A1_006B;
	var0005 = UI_get_object_position(var0003);
	UI_remove_item(var0003);
	var0006 = UI_create_new_object2(0x02F1, var0005);
	UI_set_alignment(var0006, 0x0002);
	UI_set_schedule_type(var0006, 0x0000);
labelFunc07A1_006B:
	goto labelFunc07A1_001A;
labelFunc07A1_006E:
	return;
}


