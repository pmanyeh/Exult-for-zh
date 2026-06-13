#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func0919 0x919 (var var0000);

void Func04CC object#(0x4CC) ()
{
	if (!(event == 0x0001)) goto labelFunc04CC_001C;
	UI_item_say(0xFE9C, "Excuse me...");
	0xFF34->Func07D1();
	Func0919(item);
labelFunc04CC_001C:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc04CC_0044;
	Func0919(item);
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
labelFunc04CC_0044:
	return;
}


