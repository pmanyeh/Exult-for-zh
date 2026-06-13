#game "serpentisle"
void Func08B9 0x8B9 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0002 = [0x02D1, 0x01D1, 0x01E7, 0x0294, 0x038A, 0x0292, 0x0319, 0x035E];
	var0003 = UI_get_party_list2();
	if (!var0000) goto labelFunc08B9_0063;
	enum();
labelFunc08B9_002C:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc08B9_0060;
	UI_obj_sprite_effect(var0006, 0x0036, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(var0006, 0x00EF);
	goto labelFunc08B9_002C;
labelFunc08B9_0060:
	goto labelFunc08B9_00C5;
labelFunc08B9_0063:
	enum();
labelFunc08B9_0064:
	for (var0006 in var0003 with var0007 to var0008) attend labelFunc08B9_00C5;
	UI_obj_sprite_effect(var0006, 0x0036, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!var0001) goto labelFunc08B9_00AE;
	var0009 = UI_die_roll(0x0001, 0x0008);
	UI_set_polymorph(var0006, var0002[var0009]);
	goto labelFunc08B9_00C2;
labelFunc08B9_00AE:
	var0009 = UI_get_item_shape(var0006);
	UI_set_polymorph(var0006, var0009);
labelFunc08B9_00C2:
	goto labelFunc08B9_0064;
labelFunc08B9_00C5:
	UI_play_sound_effect(0x0082);
	return;
}


