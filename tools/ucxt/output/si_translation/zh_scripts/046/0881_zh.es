#game "serpentisle"
void Func0881 0x881 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_find_nearby(0xFE9C, 0x010E, 0x000C, 0x00B0);
	var0000 = (var0000 & UI_find_nearby(0xFE9C, 0x0178, 0x000C, 0x00B0));
	enum();
labelFunc0881_002B:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0881_00CE;
	var0004 = UI_get_item_quality(var0003);
	if (!((var0004 == 0x0001) || ((var0004 == 0x0002) || ((var0004 == 0x0003) || ((var0004 == 0x0004) || ((var0004 == 0x0005) || ((var0004 == 0x0006) || ((var0004 == 0x0007) || ((var0004 == 0x000B) || ((var0004 == 0x004A) || (var0004 == 0x00B8))))))))))) goto labelFunc0881_00CB;
	var0005 = 0x0002;
labelFunc0881_0098:
	if (!(var0005 < 0x001F)) goto labelFunc0881_00CB;
	if (!(UI_get_item_frame(var0003) == var0005)) goto labelFunc0881_00BE;
	UI_set_item_frame(var0003, (var0005 - 0x0002));
labelFunc0881_00BE:
	var0005 = (var0005 + 0x0004);
	goto labelFunc0881_0098;
labelFunc0881_00CB:
	goto labelFunc0881_002B;
labelFunc0881_00CE:
	return;
}


