#game "serpentisle"
void Func072E object#(0x72E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc072E_0069;
	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	if (!gflags[0x0261]) goto labelFunc072E_0069;
	var0002 = UI_find_nearby(item, 0x010E, 0x000F, 0x0000);
	enum();
labelFunc072E_0030:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc072E_0064;
	UI_set_item_frame(var0005, 0x0008);
	var0006 = UI_set_item_quality(var0005, 0x0000);
	if (!(var0006 == false)) goto labelFunc072E_0061;
	UI_remove_item(var0005);
labelFunc072E_0061:
	goto labelFunc072E_0030;
labelFunc072E_0064:
	UI_remove_item(item);
labelFunc072E_0069:
	return;
}


