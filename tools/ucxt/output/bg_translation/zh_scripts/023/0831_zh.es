#game "blackgate"
// externs
extern var Func0829 0x829 (var var0000);
extern void Func08FF 0x8FF (var var0000);
extern void Func0830 0x830 (var var0000, var var0001);

void Func0831 0x831 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = UI_get_object_position(var0000);
	var0001 = (var0001 & UI_get_item_quality(var0000));
	var0001 = (var0001 & 0xFE99);
	var0002 = UI_find_nearby(var0001, 0x0096, 0x000C, 0x0000);
	enum();
labelFunc0831_0036:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0831_0055;
	if (!(!Func0829(var0005))) goto labelFunc0831_0052;
	Func08FF("@其中一個跳板似乎被擋住了。必須降下來才能開船。@");
	return;
labelFunc0831_0052:
	goto labelFunc0831_0036;
labelFunc0831_0055:
	var0006 = UI_find_nearby(var0001, 0x00FB, 0x0012, 0x0000);
	Func0830(var0006, 0x0001);
	UI_clear_item_flag(0xFE9C, 0x0014);
	UI_set_item_flag(var0000, 0x000A);
	UI_set_item_flag(UI_get_barge(0xFE9C), 0x001A);
	return;
}


