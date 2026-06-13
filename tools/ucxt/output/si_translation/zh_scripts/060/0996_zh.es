#game "serpentisle"
var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
	var var0007;
	var var0008;
	var var0009;
	var var000A;

	if (!(var0000 == 0xFE9B)) goto labelFunc0996_0027;
	if (!(UI_remove_party_items(var0002, var0003, var0004, var0005, var0006) == false)) goto labelFunc0996_0024;
	return false;
labelFunc0996_0024:
	goto labelFunc0996_0044;
labelFunc0996_0027:
	if (!(UI_remove_cont_items(var0000, var0002, var0003, var0004, var0005, var0006) == false)) goto labelFunc0996_0044;
	return false;
labelFunc0996_0044:
	var0007 = UI_add_cont_items(var0001, var0002, var0003, var0004, var0005, var0006);
	if (!var0007) goto labelFunc0996_008E;
	var0008 = UI_create_new_object(var0003);
	if (!var0008) goto labelFunc0996_008E;
	var0009 = UI_set_item_quantity(var0008, var0007);
	var000A = UI_update_last_created(UI_get_object_position(var0001));
labelFunc0996_008E:
	return true;
	return 0;
}


