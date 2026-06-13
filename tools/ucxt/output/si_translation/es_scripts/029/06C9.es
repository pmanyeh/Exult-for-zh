#game "serpentisle"
void Func06C9 object#(0x6C9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0000 = UI_get_item_quality(item);
	var0001 = UI_game_hour();
	var0002 = UI_get_object_position(item);
	if (!(gflags[0x0120] == false)) goto labelFunc06C9_0152;
	var0003 = 0x0001;
	var0004 = UI_find_nearest(item, 0x0103, 0x0050);
	enum();
labelFunc06C9_0034:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc06C9_0056;
	if (!(UI_get_npc_id(var0007) == 0x0001)) goto labelFunc06C9_0053;
	var0003 = 0x0000;
labelFunc06C9_0053:
	goto labelFunc06C9_0034;
labelFunc06C9_0056:
	if (!((var0001 < 0x0007) && ((var0000 == 0x0001) && var0003))) goto labelFunc06C9_0097;
	var0008 = UI_create_new_object2(0x0103, var0002);
	UI_set_schedule_type(var0008, 0x000E);
	UI_set_npc_id(var0008, 0x0001);
	UI_set_item_flag(var0008, 0x001D);
labelFunc06C9_0097:
	if (!((var0001 > 0x0007) && ((var0001 < 0x000F) && var0003))) goto labelFunc06C9_00D8;
	var0008 = UI_create_new_object2(0x0103, var0002);
	UI_set_schedule_type(var0008, 0x0007);
	UI_set_npc_id(var0008, 0x0001);
	UI_set_item_flag(var0008, 0x001D);
labelFunc06C9_00D8:
	if (!((var0001 > 0x0010) && ((var0001 < 0x0014) && var0003))) goto labelFunc06C9_0119;
	var0008 = UI_create_new_object2(0x0103, var0002);
	UI_set_schedule_type(var0008, 0x001D);
	UI_set_npc_id(var0008, 0x0001);
	UI_set_item_flag(var0008, 0x001D);
labelFunc06C9_0119:
	if (!((var0001 > 0x0013) && var0003)) goto labelFunc06C9_0152;
	var0008 = UI_create_new_object2(0x0103, var0002);
	UI_set_schedule_type(var0008, 0x0007);
	UI_set_npc_id(var0008, 0x0001);
	UI_set_item_flag(var0008, 0x001D);
labelFunc06C9_0152:
	return;
}


