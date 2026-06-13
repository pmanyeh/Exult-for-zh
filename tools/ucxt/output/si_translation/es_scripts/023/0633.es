#game "serpentisle"
// externs
extern void Func063A object#(0x63A) ();
extern var Func0983 0x983 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func0633 object#(0x633) ()
{
	var var0000;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc0633_0128;
	if (!gflags[0x000E]) goto labelFunc0633_001C;
	UI_call_guards();
	gflags[0x000E] = false;
labelFunc0633_001C:
	return;
	item->Func063A();
	if (!(UI_die_roll(0x0001, 0x0008) == 0x0001)) goto labelFunc0633_0128;
	if (!(UI_get_item_flag(0xFFFF, 0x0006) && Func0983(0xFFFF))) goto labelFunc0633_0084;
	UI_clear_item_say(0xFFFF);
	Func097F(0xFFFF, "@I am leaving!@", 0x0000);
	UI_remove_from_party(0xFFFF);
	var0000 = UI_get_object_position(0xFFFF);
	Func09AC(0xFFFF, var0000[0x0001], var0000[0x0002], 0x000C);
	gflags[0x02D4] = true;
	return;
labelFunc0633_0084:
	if (!(UI_get_item_flag(0xFFFE, 0x0006) && Func0983(0xFFFE))) goto labelFunc0633_00D6;
	UI_clear_item_say(0xFFFE);
	Func097F(0xFFFE, "@I am leaving!@", 0x0000);
	gflags[0x02D5] = true;
	UI_remove_from_party(0xFFFE);
	var0000 = UI_get_object_position(0xFFFE);
	Func09AC(0xFFFE, var0000[0x0001], var0000[0x0002], 0x000C);
	return;
labelFunc0633_00D6:
	if (!(UI_get_item_flag(0xFFFD, 0x0006) && Func0983(0xFFFD))) goto labelFunc0633_0128;
	UI_clear_item_say(0xFFFD);
	Func097F(0xFFFD, "@I am leaving!@", 0x0000);
	gflags[0x02D3] = true;
	UI_remove_from_party(0xFFFD);
	var0000 = UI_get_object_position(0xFFFD);
	Func09AC(0xFFFD, var0000[0x0001], var0000[0x0002], 0x000C);
	return;
labelFunc0633_0128:
	return;
}


