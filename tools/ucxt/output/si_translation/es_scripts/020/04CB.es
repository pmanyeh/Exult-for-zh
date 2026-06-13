#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func0919 0x919 (var var0000);

void Func04CB object#(0x4CB) ()
{
	if (!(event == 0x0001)) goto labelFunc04CB_001C;
	UI_item_say(0xFE9C, "Excuse me...");
	0xFF35->Func07D1();
	Func0919(item);
labelFunc04CB_001C:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc04CB_0044;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	Func0919(item);
labelFunc04CB_0044:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc04CB_005A;
	UI_set_schedule_type(item, 0x000F);
labelFunc04CB_005A:
	if (!(event == 0x0002)) goto labelFunc04CB_006C;
	0xFF35->Func07D1();
	Func0919(item);
labelFunc04CB_006C:
	return;
}


