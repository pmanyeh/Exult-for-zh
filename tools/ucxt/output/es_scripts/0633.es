#game "blackgate"
// externs
extern void Func063A object#(0x63A) ();
extern var Func0937 0x937 (var var0000);
extern void Func093F 0x93F (var var0000, var var0001);

void Func0633 object#(0x633) ()
{
	if (!(event == 0x0001)) goto labelFunc0633_00B6;
	item->Func063A();
	if (!(UI_die_roll(0x0001, 0x0008) == 0x0001)) goto labelFunc0633_00B6;
	if (!(UI_get_item_flag(0xFFFC, 0x0006) && Func0937(0xFFFC))) goto labelFunc0633_0050;
	UI_item_say(0xFFFC, "@I am leaving!@");
	UI_remove_from_party(0xFFFC);
	Func093F(0xFFFC, 0x000C);
	gflags[0x02EB] = true;
	return;
labelFunc0633_0050:
	if (!(UI_get_item_flag(0xFFFD, 0x0006) && Func0937(0xFFFD))) goto labelFunc0633_0083;
	UI_item_say(0xFFFD, "@I am leaving!@");
	gflags[0x02EC] = true;
	UI_remove_from_party(0xFFFD);
	Func093F(0xFFFD, 0x000C);
	return;
labelFunc0633_0083:
	if (!(UI_get_item_flag(0xFFFF, 0x0006) && Func0937(0xFFFF))) goto labelFunc0633_00B6;
	UI_item_say(0xFFFF, "@I am leaving!@");
	gflags[0x02EA] = true;
	UI_remove_from_party(0xFFFF);
	Func093F(0xFFFF, 0x000C);
	return;
labelFunc0633_00B6:
	return;
}


