#game "serpentisle"
// externs
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func02C0 shape#(0x2C0) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0000 = UI_get_object_position(item);
	if (!((event == 0x0001) || ((event == 0x0002) || (event == 0x0003)))) goto labelFunc02C0_0379;
	var0001 = UI_get_container(item);
	if (!(!UI_is_npc(var0001))) goto labelFunc02C0_0379;
	UI_close_gumps();
	var0002 = UI_attack_object(UI_get_avatar_ref(), item, 0x02C0);
	var0003 = var0000[0x0001];
	var0004 = var0000[0x0002];
	if (!(((var0003 > 0x04C2) && ((var0003 < 0x04CE) && ((var0004 > 0x036B) && (var0004 < 0x0375)))) && (gflags[0x024B] == false))) goto labelFunc02C0_033A;
	var0005 = UI_find_nearby(0xFE9C, 0x00F6, 0x003C, 0x0000);
	enum();
labelFunc02C0_0090:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc02C0_00FC;
	var0009 = UI_get_object_position(var0008);
	if (!(UI_get_item_frame(var0008) == 0x0002)) goto labelFunc02C0_00CF;
	UI_remove_item(var0008);
	var0002 = Func09AB(0x0374, 0x0001, 0x0000, 0x0000, var0009);
labelFunc02C0_00CF:
	if (!(UI_get_item_frame(var0008) == 0x0012)) goto labelFunc02C0_00F9;
	UI_remove_item(var0008);
	var0002 = Func09AB(0x0374, 0x0003, 0x0000, 0x0000, var0009);
labelFunc02C0_00F9:
	goto labelFunc02C0_0090;
labelFunc02C0_00FC:
	var0005 = UI_find_nearby(0xFE9C, 0x0204, 0x003C, 0x0000);
	enum();
labelFunc02C0_0110:
	for (var0008 in var0005 with var000A to var000B) attend labelFunc02C0_01A2;
	var0009 = UI_get_object_position(var0008);
	if (!(UI_get_item_frame(var0008) == 0x0002)) goto labelFunc02C0_0162;
	UI_remove_item(var0008);
	var0002 = Func09AB(0x0374, 0x0000, 0x0000, 0x0000, [(var0009[0x0001] - 0x0002), var0009[0x0002], 0x0000]);
labelFunc02C0_0162:
	if (!(UI_get_item_frame(var0008) == 0x0012)) goto labelFunc02C0_019F;
	UI_remove_item(var0008);
	var0002 = Func09AB(0x0374, 0x0002, 0x0000, 0x0000, [(var0009[0x0001] - 0x0002), var0009[0x0002], 0x0004]);
labelFunc02C0_019F:
	goto labelFunc02C0_0110;
labelFunc02C0_01A2:
	var000C = 0x0001;
	var000D = [0x04C5, 0x04C7, 0x04C9, 0x04CB, 0x04C5, 0x04C7, 0x04C9, 0x04CB, 0x04C5, 0x04C7, 0x04C9, 0x04CB, 0x04C5, 0x04C7, 0x04C9, 0x04CB, 0x04C3, 0x04C3];
	var000E = [0x036D, 0x036D, 0x036D, 0x036D, 0x036F, 0x036F, 0x036F, 0x036F, 0x0371, 0x0371, 0x0371, 0x0371, 0x0373, 0x0373, 0x0373, 0x0373, 0x0372, 0x0372];
	var000F = [0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0005, 0x0001, 0x0001, 0x0001, 0x0001, 0x0003, 0x0003];
labelFunc02C0_025C:
	if (!(var000C < 0x0012)) goto labelFunc02C0_02AF;
	var0002 = UI_create_new_object(0x00E0);
	if (!var0002) goto labelFunc02C0_02A2;
	UI_set_item_frame(var0002, var000F[var000C]);
	var0009 = [var000D[var000C], var000E[var000C], 0x0000];
	var0002 = UI_update_last_created(var0009);
labelFunc02C0_02A2:
	var000C = (var000C + 0x0001);
	goto labelFunc02C0_025C;
labelFunc02C0_02AF:
	var0002 = UI_create_new_object(0x00CF);
	if (!var0002) goto labelFunc02C0_02DC;
	UI_set_item_frame(var0002, 0x0000);
	var0002 = UI_update_last_created([0x04C3, 0x0370, 0x0000]);
labelFunc02C0_02DC:
	var0002 = UI_create_new_object(0x037F);
	if (!var0002) goto labelFunc02C0_0309;
	UI_set_item_frame(var0002, 0x0001);
	var0002 = UI_update_last_created([0x04CA, 0x0373, 0x0000]);
labelFunc02C0_0309:
	var0002 = UI_create_new_object(0x037F);
	if (!var0002) goto labelFunc02C0_0336;
	UI_set_item_frame(var0002, 0x0000);
	var0002 = UI_update_last_created([0x04C5, 0x0372, 0x0000]);
labelFunc02C0_0336:
	gflags[0x024B] = true;
labelFunc02C0_033A:
	if (!((var0003 > 0x0586) && ((var0003 < 0x0593) && ((var0004 > 0x03D5) && (var0004 < 0x03DE))))) goto labelFunc02C0_0379;
	var0010 = UI_find_nearest(0xFE9C, 0x00CA, 0x0041);
	if (!var0010) goto labelFunc02C0_0379;
	UI_remove_item(var0010);
labelFunc02C0_0379:
	return;
}


