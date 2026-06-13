#game "serpentisle"
void Func09A3 0x9A3 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

labelFunc09A3_0000:
	var0001 = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	if (!var0001) goto labelFunc09A3_0032;
	enum();
labelFunc09A3_001A:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc09A3_002F;
	UI_remove_item(var0004);
	goto labelFunc09A3_001A;
labelFunc09A3_002F:
	goto labelFunc09A3_0000;
labelFunc09A3_0032:
	UI_remove_item(var0000);
	return;
}


