#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern var Func0890 0x890 ();
extern void Func0918 0x918 (var var0000);
extern var Func08E7 0x8E7 (var var0000);
extern void Func0917 0x917 (var var0000, var var0001);

void Func00FB shape#(0xFB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event != 0x0001)) goto labelFunc00FB_0009;
	return;
labelFunc00FB_0009:
	if (!UI_in_gump_mode()) goto labelFunc00FB_0014;
	UI_close_gumps();
labelFunc00FB_0014:
	if (!UI_get_barge(item)) goto labelFunc00FB_00F5;
	var0000 = UI_find_nearby(item, 0x00C7, 0x0005, 0x0000);
	var0001 = UI_find_nearby(item, 0x00FB, 0x0005, 0x0000);
	if (!(!(item in var0001))) goto labelFunc00FB_004F;
	var0001 = (var0001 & item);
labelFunc00FB_004F:
	if (!(!UI_get_item_flag(0xFE9C, 0x000A))) goto labelFunc00FB_00D4;
	var0002 = UI_get_item_quality(item);
	var0003 = UI_count_objects(0xFE9B, 0x031D, var0002, 0xFE99);
	if (!(((!var0003) && (!gflags[0x0005])) && (!((var0002 == 0x0001) && gflags[0x00EC])))) goto labelFunc00FB_00B0;
	if (!(UI_get_array_size(UI_get_party_list()) == 0x0001)) goto labelFunc00FB_00A9;
	Func094A("@This vessel doth have an owner.@");
	goto labelFunc00FB_00AF;
labelFunc00FB_00A9:
	Func094A("@We do not own this vessel.@");
labelFunc00FB_00AF:
	return;
labelFunc00FB_00B0:
	if (!Func0890()) goto labelFunc00FB_00BD;
	Func0918(item);
	goto labelFunc00FB_00D1;
labelFunc00FB_00BD:
	var0004 = Func08E7(var0000[0x0001]);
	UI_set_item_flag(item, 0x0014);
labelFunc00FB_00D1:
	goto labelFunc00FB_00F5;
labelFunc00FB_00D4:
	UI_clear_item_flag(item, 0x0014);
	Func0917(var0001, 0x0000);
	UI_clear_item_flag(item, 0x000A);
	UI_clear_item_flag(item, 0x001A);
labelFunc00FB_00F5:
	return;
}


