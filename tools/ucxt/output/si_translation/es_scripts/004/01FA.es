#game "serpentisle"
// externs
extern var Func099E 0x99E (var var0000);

void Func01FA shape#(0x1FA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	UI_close_gumps();
	var0000 = Func099E(item);
	if (!var0000) goto labelFunc01FA_001E;
	UI_play_music(0x002F, var0000);
	goto labelFunc01FA_0026;
labelFunc01FA_001E:
	UI_play_music(0x002F, item);
labelFunc01FA_0026:
	var0001 = UI_find_nearby(item, 0x017E, 0x0014, 0x0000);
	enum();
labelFunc01FA_0038:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc01FA_005A;
	UI_set_alignment(var0004, 0x0000);
	UI_set_item_flag(var0004, 0x0001);
	goto labelFunc01FA_0038;
labelFunc01FA_005A:
	return;
}


