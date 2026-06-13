#game "serpentisle"
void Func06C8 object#(0x6C8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_array_size(UI_find_nearby(item, 0x0113, 0x0005, 0x0010));
	if (!(var0000 < 0x0002)) goto labelFunc06C8_0057;
	var0001 = UI_find_nearby(item, 0x034A, 0x0001, 0x0000);
	enum();
labelFunc06C8_0031:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06C8_004E;
	if (!(UI_get_item_frame(var0004) == 0x0003)) goto labelFunc06C8_004B;
	abort;
labelFunc06C8_004B:
	goto labelFunc06C8_0031;
labelFunc06C8_004E:
	gflags[0x026D] = true;
	UI_remove_item(item);
labelFunc06C8_0057:
	return;
}


