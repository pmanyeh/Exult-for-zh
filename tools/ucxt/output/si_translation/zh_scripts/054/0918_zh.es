#game "serpentisle"
// externs
extern var Func0910 0x910 (var var0000);
extern void Func094A 0x94A (var var0000);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0918 0x918 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	gflags[0x0005] = false;
	var0001 = UI_get_object_position(var0000);
	var0001 = (var0001 & UI_get_item_quality(var0000));
	var0001 = (var0001 & 0xFE99);
	var0002 = UI_find_nearby(var0001, 0x0096, 0x000C, 0x0000);
	enum();
labelFunc0918_003A:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0918_0059;
	if (!(!Func0910(var0005))) goto labelFunc0918_0056;
	Func094A("@One of the gangplanks seems to be blocked. It must be lowered to sail.@");
	return;
labelFunc0918_0056:
	goto labelFunc0918_003A;
labelFunc0918_0059:
	var0006 = UI_find_nearby(var0001, 0x00FB, 0x0012, 0x0000);
	Func0917(var0006, 0x0001);
	UI_clear_item_flag(0xFE9C, 0x0014);
	UI_set_item_flag(var0000, 0x000A);
	UI_set_item_flag(UI_get_barge(0xFE9C), 0x001A);
	return;
}


