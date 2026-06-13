#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func080D 0x80D ();
extern void Func0831 0x831 (var var0000);
extern var Func08B3 0x8B3 (var var0000);
extern void Func0830 0x830 (var var0000, var var0001);

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
	if (!UI_get_barge(item)) goto labelFunc00FB_00ED;
	var0000 = UI_find_nearby(item, 0x00C7, 0x0005, 0x0000);
	var0001 = UI_find_nearby(item, 0x00FB, 0x0005, 0x0000);
	if (!(!(item in var0001))) goto labelFunc00FB_004F;
	var0001 = (var0001 & item);
labelFunc00FB_004F:
	if (!(!UI_get_item_flag(0xFE9C, 0x000A))) goto labelFunc00FB_00C2;
	var0002 = UI_get_item_quality(item);
	var0003 = UI_count_objects(0xFE9B, 0x031D, var0002, 0xFE99);
	if (!(!var0003)) goto labelFunc00FB_009E;
	if (!(UI_get_array_size(UI_get_party_list()) == 0x0001)) goto labelFunc00FB_0097;
	Func08FF("@必須先購買這艘船的契約。@");
	goto labelFunc00FB_009D;
labelFunc00FB_0097:
	Func08FF("@在我們開船之前，必須先購買這艘船的契約。@");
labelFunc00FB_009D:
	return;
labelFunc00FB_009E:
	if (!Func080D()) goto labelFunc00FB_00AB;
	Func0831(item);
	goto labelFunc00FB_00BF;
labelFunc00FB_00AB:
	var0004 = Func08B3(var0000[0x0001]);
	UI_set_item_flag(item, 0x0014);
labelFunc00FB_00BF:
	goto labelFunc00FB_00ED;
labelFunc00FB_00C2:
	UI_clear_item_flag(item, 0x0014);
	Func0830(var0001, 0x0000);
	UI_clear_item_flag(item, 0x000A);
	UI_clear_item_flag(item, 0x001A);
	UI_play_music(0x00FF, 0x0000);
labelFunc00FB_00ED:
	return;
}


