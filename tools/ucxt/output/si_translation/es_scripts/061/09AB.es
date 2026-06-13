#game "serpentisle"
var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004)
{
	var var0005;
	var var0006;

	var0005 = UI_create_new_object(var0000);
	if (!(!var0005)) goto labelFunc09AB_0013;
	return false;
labelFunc09AB_0013:
	UI_set_item_frame(var0005, var0001);
	if (!(!UI_set_item_quality(var0005, var0002))) goto labelFunc09AB_003B;
	if (!(!UI_set_item_quantity(var0005, var0002))) goto labelFunc09AB_003B;
	return false;
labelFunc09AB_003B:
	if (!var0003) goto labelFunc09AB_004E;
	UI_set_item_flag(var0005, 0x0012);
	goto labelFunc09AB_0058;
labelFunc09AB_004E:
	UI_clear_item_flag(var0005, 0x0012);
labelFunc09AB_0058:
	if (!(UI_get_array_size(var0004) == 0x0003)) goto labelFunc09AB_0076;
	if (!(!UI_update_last_created(var0004))) goto labelFunc09AB_0073;
	return false;
labelFunc09AB_0073:
	goto labelFunc09AB_0090;
labelFunc09AB_0076:
	var0006 = UI_get_object_position(var0004[0x0001]);
	if (!(!UI_update_last_created(var0006))) goto labelFunc09AB_0090;
	return false;
labelFunc09AB_0090:
	return var0005;
	return 0;
}


