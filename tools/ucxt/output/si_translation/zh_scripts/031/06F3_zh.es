#game "serpentisle"
void Func06F3 object#(0x6F3) ()
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

	if (!gflags[0x0004]) goto labelFunc06F3_000C;
	UI_remove_item(item);
	abort;
labelFunc06F3_000C:
	var0000 = UI_find_nearby(item, 0x00E4, 0x001E, 0x0000);
	enum();
labelFunc06F3_001E:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06F3_003B;
	if (!(UI_get_npc_id(var0003) == 0x0009)) goto labelFunc06F3_0038;
	abort;
labelFunc06F3_0038:
	goto labelFunc06F3_001E;
labelFunc06F3_003B:
	var0004 = UI_get_object_position(item);
	var0005 = UI_create_new_object2(0x00E4, var0004);
	var0006 = UI_get_cont_items(var0005, 0x025B, 0xFE99, 0xFE99);
	enum();
labelFunc06F3_0064:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc06F3_0087;
	if (!(UI_get_item_shape(var0009) == 0x025B)) goto labelFunc06F3_0084;
	UI_remove_item(var0009);
labelFunc06F3_0084:
	goto labelFunc06F3_0064;
labelFunc06F3_0087:
	var000A = UI_add_cont_items(var0005, 0x0001, 0x0259, 0x0000, 0x0000, true);
	var000A = UI_set_npc_prop(var0005, 0x0002, 0x000A);
	UI_set_npc_id(var0005, 0x0009);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_schedule_type(var0005, 0x0010);
	return;
}


