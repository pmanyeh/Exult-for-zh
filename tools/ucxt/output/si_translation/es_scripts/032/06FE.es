#game "serpentisle"
void Func06FE object#(0x6FE) ()
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

	if (!(!UI_get_item_flag(0xFE9C, 0x0023))) goto labelFunc06FE_0011;
	goto labelFunc06FE_0045;
labelFunc06FE_0011:
	var0000 = UI_get_party_list();
	enum();
labelFunc06FE_0019:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06FE_0044;
	if (!((UI_get_item_shape(var0003) != 0x02EB) && (var0003 != UI_get_npc_object(0xFE9C)))) goto labelFunc06FE_0041;
	goto labelFunc06FE_0045;
labelFunc06FE_0041:
	goto labelFunc06FE_0019;
labelFunc06FE_0044:
	abort;
labelFunc06FE_0045:
	var0004 = UI_find_nearby(0xFE9C, 0x02EC, 0x000C, 0x0000);
	enum();
labelFunc06FE_0059:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc06FE_0076;
	if (!(UI_get_item_frame(var0007) == 0x000A)) goto labelFunc06FE_0073;
	return;
labelFunc06FE_0073:
	goto labelFunc06FE_0059;
labelFunc06FE_0076:
	var0004 = UI_create_new_object(0x02EC);
	if (!var0004) goto labelFunc06FE_00A3;
	UI_set_item_frame(var0004, 0x000A);
	var0008 = UI_update_last_created([0x071D, 0x0279, 0x0000]);
labelFunc06FE_00A3:
	return;
}


