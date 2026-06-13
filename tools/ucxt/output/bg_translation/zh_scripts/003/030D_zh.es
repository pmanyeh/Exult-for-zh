#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func0829 0x829 (var var0000);

void Func030D shape#(0x30D) ()
{
	if (!(event == 0x0001)) goto labelFunc030D_002A;
	if (!UI_get_item_flag(item, 0x000A)) goto labelFunc030D_001C;
	Func08FF("@在放下跳板之前，必須先降下船帆。@");
	goto labelFunc030D_002A;
labelFunc030D_001C:
	if (!(!Func0829(item))) goto labelFunc030D_002A;
	Func08FF("@我想跳板被擋住了。@");
labelFunc030D_002A:
	return;
}


