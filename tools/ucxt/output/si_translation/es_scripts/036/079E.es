#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern void Func0982 0x982 (var var0000, var var0001);

void Func079E object#(0x79E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0003)) goto labelFunc079E_004B;
	UI_play_sound_effect(0x0046);
	var0000 = UI_get_party_list();
	var0001 = Func0977(var0000);
	var0002 = UI_die_roll(0x0001, var0001);
	var0003 = UI_die_roll(0x0001, UI_get_item_quality(item));
	Func0982(UI_get_npc_object(var0000[var0002]), var0003);
labelFunc079E_004B:
	return;
}


