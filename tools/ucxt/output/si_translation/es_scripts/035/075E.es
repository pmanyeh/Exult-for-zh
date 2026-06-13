#game "serpentisle"
void Func075E object#(0x75E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = [0x096B, 0x0B43, 0x0967, 0x0B43, 0x0967, 0x0B5F, 0x096B, 0x0B5F];
	var0001 = 0x0001;
labelFunc075E_0024:
	if (!(var0001 <= 0x0004)) goto labelFunc075E_00B0;
	UI_play_sound_effect(0x0077);
	var0002 = UI_create_new_object(0x02D8);
	if (!var0002) goto labelFunc075E_00AD;
	UI_set_item_frame(var0002, 0x0000);
	UI_set_item_flag(var0002, 0x0012);
	var0003 = (var0001 * 0x0002);
	var0004 = UI_update_last_created([var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000]);
	UI_sprite_effect(0x0015, var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = (var0001 + 0x0001);
labelFunc075E_00AD:
	goto labelFunc075E_0024;
labelFunc075E_00B0:
	return;
}


