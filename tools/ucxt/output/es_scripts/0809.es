#game "blackgate"
// externs
extern void Func0904 0x904 (var var0000, var var0001);
extern var Func080D 0x80D ();
extern var Func08B3 0x8B3 (var var0000);
extern void Func08FF 0x8FF (var var0000);

void Func0809 0x809 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_barge(var0000);
	if (!var0001) goto labelFunc0809_00C3;
	if (!UI_get_item_flag(var0000, 0x000A)) goto labelFunc0809_003D;
	UI_clear_item_flag(var0000, 0x000A);
	UI_clear_item_flag(var0000, 0x001A);
	Func0904(0xFE9C, "@Whoa!@");
	goto labelFunc0809_00C3;
labelFunc0809_003D:
	var0002 = UI_find_nearby(var0000, 0x031C, 0x0010, 0x0000);
	if (!var0002) goto labelFunc0809_00C3;
	var0003 = UI_count_objects(0xFE9B, 0x031D, UI_get_item_quality(var0002), 0xFE99);
	if (!var0003) goto labelFunc0809_00A5;
	if (!Func080D()) goto labelFunc0809_0099;
	UI_set_item_flag(var0000, 0x000A);
	UI_set_item_flag(var0001, 0x001A);
	Func0904(0xFE9C, "@Giddy-up!@");
	goto labelFunc0809_00A2;
labelFunc0809_0099:
	var0004 = Func08B3(var0000);
labelFunc0809_00A2:
	goto labelFunc0809_00C3;
labelFunc0809_00A5:
	if (!(UI_get_array_size(UI_get_party_list()) == 0x0001)) goto labelFunc0809_00BD;
	Func08FF("@The title for this cart must first be purchased.@");
	goto labelFunc0809_00C3;
labelFunc0809_00BD:
	Func08FF("@We must first purchase the title for this cart.@");
labelFunc0809_00C3:
	return;
}


