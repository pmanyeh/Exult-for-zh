#game "serpentisle"
void Func0729 object#(0x729) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0003) && (gflags[0x0004] == false))) goto labelFunc0729_0127;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_create_new_object2(0x00E4, var0001);
	UI_set_alignment(var0002, 0x0000);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x025B, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x023B, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x02D9, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x021B, 0x0000, 0x0000, true);
	UI_set_schedule_type(var0002, 0x000B);
	if (!(var0000 == 0x0001)) goto labelFunc0729_00AF;
	UI_set_schedule_type(var0002, 0x0010);
labelFunc0729_00AF:
	if (!(var0000 == 0x0002)) goto labelFunc0729_00C3;
	UI_set_schedule_type(var0002, 0x001D);
labelFunc0729_00C3:
	if (!(var0000 == 0x0003)) goto labelFunc0729_00D7;
	UI_set_schedule_type(var0002, 0x0001);
labelFunc0729_00D7:
	if (!(var0000 == 0x0004)) goto labelFunc0729_00EB;
	UI_set_schedule_type(var0002, 0x0002);
labelFunc0729_00EB:
	if (!(var0000 == 0x0005)) goto labelFunc0729_00FF;
	UI_set_schedule_type(var0002, 0x000E);
labelFunc0729_00FF:
	if (!(var0000 == 0x0006)) goto labelFunc0729_0113;
	UI_set_schedule_type(var0002, 0x0000);
labelFunc0729_0113:
	if (!(var0000 > 0x0006)) goto labelFunc0729_0127;
	UI_set_schedule_type(var0002, 0x000C);
labelFunc0729_0127:
	return;
}


