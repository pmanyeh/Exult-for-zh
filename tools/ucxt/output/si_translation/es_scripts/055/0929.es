#game "serpentisle"
// externs
extern var Func089D 0x89D (var var0000);
extern void Func0924 0x924 (var var0000, var var0001);

void Func0929 0x929 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_find_nearby(item, 0x0366, 0x000F, 0x0000);
	var0001 = UI_find_nearby(item, 0x0203, 0x000F, 0x0000);
	var0000 = (var0000 & var0001);
	var0001 = [];
	var0002 = UI_get_item_quality(item);
	enum();
labelFunc0929_003B:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0929_0061;
	if (!(UI_get_item_quality(var0005) == var0002)) goto labelFunc0929_005E;
	var0001 = (var0001 & var0005);
labelFunc0929_005E:
	goto labelFunc0929_003B;
labelFunc0929_0061:
	var0006 = Func089D(var0001);
	Func0924(item, 0xFE99);
	return;
}


