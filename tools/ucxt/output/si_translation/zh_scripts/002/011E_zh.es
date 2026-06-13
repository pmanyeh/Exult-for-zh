#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func011E shape#(0x11E) ()
{
	var var0000;
	var var0001;

	UI_clear_item_say(0xFE9C);
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0001) || (var0000 == 0x0002))) goto labelFunc011E_00AA;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc011E_0050;
	UI_play_sound_effect(0x0038);
	UI_item_say(0xFE9C, "@Take that!@");
	Func097F(var0001, "@Oooww!@", 0xFFFE);
	abort;
labelFunc011E_0050:
	if (!((UI_get_item_shape(var0001) == 0x011E) && (UI_get_item_frame(var0001) == 0x0000))) goto labelFunc011E_007E;
	UI_play_sound_effect(0x003C);
	Func097F(0xFE9C, "@Listen...@", 0x0001);
	abort;
labelFunc011E_007E:
	if (!((UI_get_item_shape(var0001) == 0x011E) && (UI_get_item_frame(var0001) == 0x0003))) goto labelFunc011E_00AA;
	UI_play_sound_effect(0x007A);
	UI_item_say(0xFE9C, "@Troll drum, nice...@");
	abort;
labelFunc011E_00AA:
	return;
}


