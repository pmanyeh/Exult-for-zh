#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func0829 0x829 (var var0000);

void Func0096 shape#(0x96) ()
{
	if (!(event == 0x0001)) goto labelFunc0096_0038;
	if (!UI_get_item_flag(item, 0x000A)) goto labelFunc0096_001C;
	Func08FF("@在收起跳板之前，必須先降下船帆。@");
	goto labelFunc0096_0038;
labelFunc0096_001C:
	if (!(!Func0829(item))) goto labelFunc0096_002D;
	Func08FF("@我想跳板被擋住了。@");
	goto labelFunc0096_0038;
labelFunc0096_002D:
	if (!UI_in_gump_mode()) goto labelFunc0096_0038;
	UI_close_gumps();
labelFunc0096_0038:
	return;
}


