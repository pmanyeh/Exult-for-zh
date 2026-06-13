#game "serpentisle"
void Func09A4 0x9A4 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

labelFunc09A4_0000:
	var0001 = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	if (!var0001) goto labelFunc09A4_0032;
	enum();
labelFunc09A4_001A:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc09A4_002F;
	UI_remove_item(var0004);
	goto labelFunc09A4_001A;
labelFunc09A4_002F:
	goto labelFunc09A4_0000;
labelFunc09A4_0032:
	return;
}


