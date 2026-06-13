#game "serpentisle"
void Func0703 object#(0x703) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_object_position(item);
	if (!(event == 0x0003)) goto labelFunc0703_0057;
	var0001 = UI_create_new_object2(0x014E, var0000);
	if (!var0001) goto labelFunc0703_0034;
	UI_set_polymorph(var0001, 0x014E);
	UI_remove_item(var0001);
labelFunc0703_0034:
	var0002 = UI_find_nearby_avatar(0x014E);
	enum();
labelFunc0703_003F:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0703_0057;
	UI_clear_item_flag(var0005, 0x0020);
	goto labelFunc0703_003F;
labelFunc0703_0057:
	return;
}


