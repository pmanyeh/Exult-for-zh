#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern var Func0890 0x890 ();
extern var Func08E7 0x8E7 (var var0000);

void Func0316 shape#(0x316) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event != 0x0001)) goto labelFunc0316_0009;
	return;
labelFunc0316_0009:
	if (!UI_in_gump_mode()) goto labelFunc0316_0014;
	UI_close_gumps();
labelFunc0316_0014:
	if (!UI_get_barge(item)) goto labelFunc0316_00D2;
	if (!(!UI_get_item_flag(0xFE9C, 0x000A))) goto labelFunc0316_00BA;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_count_objects(0xFE9B, 0x031D, var0000, 0xFE99);
	if (!(((!var0001) && (!gflags[0x0005])) && (!((var0000 == 0x0001) && gflags[0x00EC])))) goto labelFunc0316_007D;
	if (!(UI_get_array_size(UI_get_party_list()) == 0x0001)) goto labelFunc0316_0076;
	Func094A("@This vessel belongs to another.@");
	goto labelFunc0316_007C;
labelFunc0316_0076:
	Func094A("@This vessel doth not belong to us.@");
labelFunc0316_007C:
	return;
labelFunc0316_007D:
	if (!Func0890()) goto labelFunc0316_00A8;
	UI_clear_item_flag(0xFE9C, 0x0014);
	UI_set_item_flag(0xFE9C, 0x000A);
	UI_set_item_flag(UI_get_barge(0xFE9C), 0x001A);
	goto labelFunc0316_00B7;
labelFunc0316_00A8:
	var0002 = Func08E7(item);
	UI_set_item_flag(item, 0x0014);
labelFunc0316_00B7:
	goto labelFunc0316_00D2;
labelFunc0316_00BA:
	UI_clear_item_flag(item, 0x0014);
	UI_clear_item_flag(item, 0x000A);
	UI_clear_item_flag(item, 0x001A);
labelFunc0316_00D2:
	return;
}


