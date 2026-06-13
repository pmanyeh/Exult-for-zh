#game "serpentisle"
void Func06D2 object#(0x6D2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(item, 0x0151, 0x0019, 0x0000);
	if (!var0000) goto labelFunc06D2_0018;
	abort;
labelFunc06D2_0018:
	var0001 = UI_get_object_position(item);
	var0002 = 0x0004;
labelFunc06D2_0026:
	if (!(var0002 > 0x0000)) goto labelFunc06D2_0090;
	var0001[0x0001] = ((var0001[0x0001] - 0x0008) + (var0002 * 0x0002));
	var0003 = UI_create_new_object2(0x0151, var0001);
	if (!var0003) goto labelFunc06D2_0083;
	UI_set_schedule_type(var0003, 0x000B);
	UI_set_alignment(var0003, 0x0000);
	UI_set_item_flag(var0003, 0x001D);
	UI_set_npc_id(var0003, var0002);
labelFunc06D2_0083:
	var0002 = (var0002 - 0x0001);
	goto labelFunc06D2_0026;
labelFunc06D2_0090:
	if (!var0003) goto labelFunc06D2_00A0;
	UI_set_schedule_type(var0003, 0x001D);
labelFunc06D2_00A0:
	return;
}


