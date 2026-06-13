#game "serpentisle"
void Func079C object#(0x79C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0003)) goto labelFunc079C_004A;
	UI_play_sound_effect(0x0046);
	var0000 = UI_get_party_list();
	enum();
labelFunc079C_0017:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc079C_004A;
	if (!(!UI_roll_to_win(UI_get_npc_prop(var0003, 0x0000), UI_get_item_quality(item)))) goto labelFunc079C_0047;
	UI_set_item_flag(UI_get_npc_object(var0003), 0x0008);
labelFunc079C_0047:
	goto labelFunc079C_0017;
labelFunc079C_004A:
	return;
}


