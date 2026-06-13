#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0738 object#(0x738) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc0738_005D;
	var0000 = UI_get_item_flag(0xFF4A, 0x001C);
	if (!var0000) goto labelFunc0738_0051;
	var0001 = UI_find_nearby(item, 0x010F, 0x0006, 0x0000);
	enum();
labelFunc0738_002D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0738_004E;
	UI_remove_item(var0004);
	UI_remove_item(item);
	UI_play_sound_effect(0x0059);
	goto labelFunc0738_002D;
labelFunc0738_004E:
	goto labelFunc0738_005D;
labelFunc0738_0051:
	Func097F(0xFE9C, "@What a strange place...@", 0x000A);
labelFunc0738_005D:
	return;
}


