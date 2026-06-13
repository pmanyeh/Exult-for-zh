#game "serpentisle"
void Func0727 object#(0x727) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0003) && (gflags[0x0004] == false))) goto labelFunc0727_00D4;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_create_new_object2(0x0103, var0001);
	UI_set_alignment(var0002, 0x0000);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x0255, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x000C, 0x02D2, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x0239, 0x0000, 0x0000, true);
	UI_set_schedule_type(var0002, 0x000B);
	if (!(var0000 == 0x0001)) goto labelFunc0727_0098;
	UI_set_schedule_type(var0002, 0x000E);
labelFunc0727_0098:
	if (!(var0000 == 0x0002)) goto labelFunc0727_00AC;
	UI_set_schedule_type(var0002, 0x0005);
labelFunc0727_00AC:
	if (!(var0000 == 0x0003)) goto labelFunc0727_00C0;
	UI_set_schedule_type(var0002, 0x0006);
labelFunc0727_00C0:
	if (!(var0000 > 0x0003)) goto labelFunc0727_00D4;
	UI_set_schedule_type(var0002, 0x0000);
labelFunc0727_00D4:
	return;
}


