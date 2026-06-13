#game "serpentisle"
void Func06DD object#(0x6DD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc06DD_0063;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc06DD_0025;
	var0001 = UI_set_item_quality(item, 0x0001);
labelFunc06DD_0025:
	if (!(var0000 == 0x0001)) goto labelFunc06DD_0063;
	var0002 = UI_find_nearby(item, 0x00C8, 0x0014, 0x0010);
	enum();
labelFunc06DD_0041:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc06DD_005E;
	var0001 = UI_execute_usecode_array(var0005, [(byte)0x48]);
	goto labelFunc06DD_0041;
labelFunc06DD_005E:
	UI_remove_item(item);
labelFunc06DD_0063:
	if (!(var0000 == 0x0002)) goto labelFunc06DD_0071;
	gflags[0x0253] = true;
labelFunc06DD_0071:
	return;
}


