#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);

void Func04BD object#(0x4BD) ()
{
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BD_000F;
	Func0809();
	abort;
labelFunc04BD_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF43) != 0x000F))) goto labelFunc04BD_0045;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFF43->Func07D1();
	Func097F(0xFF43, "@Die, fool!@", 0x0005);
	Func09AD(0xFF43);
labelFunc04BD_0045:
	if (!(event == 0x0002)) goto labelFunc04BD_006B;
	if (!(item != UI_get_npc_object(0xFF43))) goto labelFunc04BD_006B;
	Func097F(0xFF43, "@Die, intruder!@", 0x0005);
	Func09AD(0xFF43);
labelFunc04BD_006B:
	return;
}


