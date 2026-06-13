#game "serpentisle"
void Func072D object#(0x72D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!((event == 0x0003) && ((gflags[0x0004] == false) && (gflags[0x014E] == true)))) goto labelFunc072D_0154;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_find_nearby(item, 0x019F, 0x0032, 0x0000);
	enum();
labelFunc072D_0036:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc072D_004B;
	UI_remove_item(var0005);
	goto labelFunc072D_0036;
labelFunc072D_004B:
	var0006 = UI_create_new_object2(0x00E4, var0001);
	UI_set_alignment(var0006, 0x0000);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x025B, 0x0000, 0x0000, true);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x023B, 0x0000, 0x0000, true);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x021B, 0x0000, 0x0000, true);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x02D9, 0x0000, 0x0000, true);
	UI_set_schedule_type(var0006, 0x000B);
	if (!(var0000 == 0x0001)) goto labelFunc072D_00DC;
	UI_set_schedule_type(var0006, 0x0010);
labelFunc072D_00DC:
	if (!(var0000 == 0x0002)) goto labelFunc072D_00F0;
	UI_set_schedule_type(var0006, 0x001D);
labelFunc072D_00F0:
	if (!(var0000 == 0x0003)) goto labelFunc072D_0104;
	UI_set_schedule_type(var0006, 0x0001);
labelFunc072D_0104:
	if (!(var0000 == 0x0004)) goto labelFunc072D_0118;
	UI_set_schedule_type(var0006, 0x0002);
labelFunc072D_0118:
	if (!(var0000 == 0x0005)) goto labelFunc072D_012C;
	UI_set_schedule_type(var0006, 0x000E);
labelFunc072D_012C:
	if (!(var0000 == 0x0006)) goto labelFunc072D_0140;
	UI_set_schedule_type(var0006, 0x0000);
labelFunc072D_0140:
	if (!(var0000 > 0x0006)) goto labelFunc072D_0154;
	UI_set_schedule_type(var0006, 0x000C);
labelFunc072D_0154:
	return;
}


