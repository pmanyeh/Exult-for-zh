#game "serpentisle"
// externs
extern var Func098D 0x98D ();
extern var Func095F 0x95F (var var0000, var var0001);
extern void Func09AD 0x9AD (var var0000);

void Func0797 object#(0x797) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc0797_005D;
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	var0001 = Func098D();
	enum();
labelFunc0797_0020:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc0797_005D;
	if (!(!UI_get_item_flag(var0004, 0x0006))) goto labelFunc0797_005A;
	if (!(!Func095F(UI_get_npc_number(var0004), var0001))) goto labelFunc0797_005A;
	UI_clear_item_flag(var0004, 0x0001);
	Func09AD(var0004);
labelFunc0797_005A:
	goto labelFunc0797_0020;
labelFunc0797_005D:
	return;
}


