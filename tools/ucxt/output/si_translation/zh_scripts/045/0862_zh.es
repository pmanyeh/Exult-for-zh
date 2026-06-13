#game "serpentisle"
void Func0862 0x862 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_cont_items(0xFFD4, 0xFE99, 0xFE99, 0xFE99);
	var0001 = UI_get_object_position(0xFFD4);
	enum();
labelFunc0862_001E:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc0862_0107;
	if (!(!((UI_get_item_shape(var0004) == 0x0128) && (UI_get_item_frame(var0004) == 0x0002)))) goto labelFunc0862_0104;
	var0004 = UI_set_last_created(var0004);
	if (!var0004) goto labelFunc0862_0104;
	UI_set_item_flag(var0004, 0x000B);
	var0004 = UI_update_last_created(var0001);
	if (!(!var0004)) goto labelFunc0862_008F;
	var0004 = UI_update_last_created([(var0001[0x0001] - 0x0002), var0001[0x0002], var0001[0x0003]]);
labelFunc0862_008F:
	if (!(!var0004)) goto labelFunc0862_00B6;
	var0004 = UI_update_last_created([var0001[0x0001], (var0001[0x0002] - 0x0002), var0001[0x0003]]);
labelFunc0862_00B6:
	if (!(!var0004)) goto labelFunc0862_00DD;
	var0004 = UI_update_last_created([(var0001[0x0001] + 0x0002), var0001[0x0002], var0001[0x0003]]);
labelFunc0862_00DD:
	if (!(!var0004)) goto labelFunc0862_0104;
	var0004 = UI_update_last_created([var0001[0x0001], (var0001[0x0002] + 0x0002), var0001[0x0003]]);
labelFunc0862_0104:
	goto labelFunc0862_001E;
labelFunc0862_0107:
	return;
}


