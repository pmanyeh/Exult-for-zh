#game "serpentisle"
void Func06F1 object#(0x6F1) ()
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

	var0000 = false;
	var0001 = UI_find_nearby(item, 0x02B0, 0x000A, 0x0000);
	if (!var0001) goto labelFunc06F1_00CD;
	enum();
labelFunc06F1_001C:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06F1_0070;
	if (!(UI_get_item_frame(var0004) == 0x0004)) goto labelFunc06F1_006D;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_get_object_position(item);
	if (!((var0006[0x0002] == var0005[0x0002]) && ((var0006[0x0001] + 0x0008) == var0005[0x0001]))) goto labelFunc06F1_006D;
	var0000 = true;
labelFunc06F1_006D:
	goto labelFunc06F1_001C;
labelFunc06F1_0070:
	if (!var0000) goto labelFunc06F1_00CD;
	var0001 = UI_find_nearby(item, 0x02C3, 0x0003, 0x0000);
	enum();
labelFunc06F1_0088:
	for (var0004 in var0001 with var0007 to var0008) attend labelFunc06F1_00CD;
	if (!(UI_get_item_quality(var0004) == 0x003D)) goto labelFunc06F1_00CA;
	var0009 = UI_get_party_list();
	enum();
labelFunc06F1_00A9:
	for (var000C in var0009 with var000A to var000B) attend labelFunc06F1_00CA;
	UI_move_object(var000C, [0x00D3, 0x036E, 0x0000]);
	goto labelFunc06F1_00A9;
labelFunc06F1_00CA:
	goto labelFunc06F1_0088;
labelFunc06F1_00CD:
	return;
}


