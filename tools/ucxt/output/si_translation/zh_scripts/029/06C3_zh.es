#game "serpentisle"
void Func06C3 object#(0x6C3) ()
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
	var var0009;

	var0000 = UI_find_nearby_avatar(0x00E4);
	if (!(UI_get_array_size(var0000) > 0x0000)) goto labelFunc06C3_0019;
	abort;
labelFunc06C3_0019:
	var0001 = 0x04C1;
	var0002 = 0x04CE;
	var0003 = 0x0841;
	var0004 = 0x084E;
	var0005 = UI_get_object_position(0xFE9C);
	var0006 = UI_get_object_position(item);
	if (!((var0005[0x0001] > var0001) && ((var0005[0x0001] < var0002) && ((var0005[0x0002] > var0003) && (var0005[0x0002] < var0004))))) goto labelFunc06C3_0081;
	var0006[0x0002] = (var0006[0x0002] + 0x001E);
labelFunc06C3_0081:
	var0007 = false;
	var0008 = 0x0000;
labelFunc06C3_008B:
	if (!(var0008 < 0x0008)) goto labelFunc06C3_018B;
	if (!(var0008 < 0x0003)) goto labelFunc06C3_00DA;
	var0009 = UI_create_new_object2(0x00E4, [(var0006[0x0001] + var0008), (var0006[0x0002] + var0008), 0x0000]);
	UI_set_item_flag(var0009, 0x0012);
	UI_set_schedule_type(var0009, 0x0007);
	goto labelFunc06C3_0174;
labelFunc06C3_00DA:
	if (!(var0008 < 0x0005)) goto labelFunc06C3_0134;
	if (!var0007) goto labelFunc06C3_0103;
	var0009 = UI_create_new_object2(0x00E4, [0x04CA, 0x0846, 0x0006]);
	goto labelFunc06C3_011D;
labelFunc06C3_0103:
	var0009 = UI_create_new_object2(0x00E4, [0x04C9, 0x084C, 0x0006]);
	var0007 = true;
labelFunc06C3_011D:
	UI_set_item_flag(var0009, 0x0012);
	UI_set_schedule_type(var0009, 0x000E);
	goto labelFunc06C3_0174;
labelFunc06C3_0134:
	var0009 = UI_create_new_object2(0x00E4, [(var0006[0x0001] - (var0008 / 0x0002)), (var0006[0x0002] - (var0008 / 0x0002)), 0x0000]);
	UI_set_item_flag(var0009, 0x0012);
	UI_set_schedule_type(var0009, 0x000C);
labelFunc06C3_0174:
	UI_set_npc_id(var0009, 0x0001);
	var0008 = (var0008 + 0x0001);
	goto labelFunc06C3_008B;
labelFunc06C3_018B:
	return;
}


