#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern void Func060F object#(0x60F) ();

void Func079F object#(0x79F) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0003)) goto labelFunc079F_002F;
	UI_play_sound_effect(0x0046);
	var0000 = UI_get_party_list();
	var0001 = UI_die_roll(0x0001, Func0977(var0000));
	var0000[var0001]->Func060F();
labelFunc079F_002F:
	return;
}


