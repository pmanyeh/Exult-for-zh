#game "serpentisle"
// externs
extern var Func088F 0x88F (var var0000);
extern void Func0918 0x918 (var var0000);

void Func0634 object#(0x634) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_barge(item);
	if (!var0000) goto labelFunc0634_0064;
	var0001 = Func088F(item);
	if (!(var0001 == 0x0316)) goto labelFunc0634_0041;
	UI_clear_item_flag(0xFE9C, 0x0014);
	UI_set_item_flag(0x0001, 0x000A);
	UI_set_item_flag(UI_get_barge(0xFE9C), 0x001A);
labelFunc0634_0041:
	if (!(var0001 == 0x00C7)) goto labelFunc0634_0064;
	var0002 = UI_get_item_flag(0xFE9C, 0x0014);
	if (!var0002) goto labelFunc0634_0064;
	Func0918(var0002);
labelFunc0634_0064:
	return;
}


