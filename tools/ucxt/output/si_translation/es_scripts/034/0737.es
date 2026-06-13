#game "serpentisle"
void Func0737 object#(0x737) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!gflags[0x0004]) goto labelFunc0737_000C;
	UI_remove_item(item);
	abort;
labelFunc0737_000C:
	var0000 = UI_find_nearby(item, 0x0110, 0x0014, 0x0000);
	enum();
labelFunc0737_001E:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0737_0080;
	var0004 = UI_set_item_quality(var0003, 0x004B);
	var0005 = UI_get_object_position(var0003);
	if (!(var0005[0x0003] > 0x0000)) goto labelFunc0737_007D;
	var0004 = UI_set_last_created(var0003);
	if (!var0004) goto labelFunc0737_007D;
	var0005[0x0003] = 0x0000;
	var0004 = UI_update_last_created(var0005);
	var0004 = UI_set_item_quality(var0003, 0x004B);
labelFunc0737_007D:
	goto labelFunc0737_001E;
labelFunc0737_0080:
	return;
}


