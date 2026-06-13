#game "serpentisle"
// externs
extern var Func093D 0x93D (var var0000, var var0001);
extern var Func0940 0x940 (var var0000, var var0001);
extern void Func093E 0x93E (var var0000);

void Func07AD object#(0x7AD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	var0002 = UI_get_item_quantity(item, 0x0000);
	if (!(var0001 == 0x0000)) goto labelFunc07AD_004F;
	UI_set_weather(0x0002);
	if (!(!Func093D(var0000, (var0002 + 0x0001)))) goto labelFunc07AD_004F;
	var0000 = Func0940(var0000, var0002);
	Func093E(var0000);
labelFunc07AD_004F:
	if (!(var0001 == 0x0001)) goto labelFunc07AD_007A;
	UI_play_sound_effect(0x0074);
	UI_obj_sprite_effect(item, 0x0028, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07AD_007A:
	if (!(var0001 == 0x0002)) goto labelFunc07AD_00A5;
	UI_play_sound_effect(0x0074);
	UI_obj_sprite_effect(item, 0x0029, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07AD_00A5:
	if (!(var0001 == 0x0003)) goto labelFunc07AD_00D0;
	UI_play_sound_effect(0x0074);
	UI_obj_sprite_effect(item, 0x002A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07AD_00D0:
	if (!(var0001 == 0x0004)) goto labelFunc07AD_00FB;
	UI_play_sound_effect(0x0074);
	UI_obj_sprite_effect(item, 0x002B, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07AD_00FB:
	if (!(var0001 > 0x0000)) goto labelFunc07AD_012A;
	UI_play_sound_effect(0x0074);
	UI_lightning();
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07AC], 0x0003);
	UI_set_weather(0x0000);
labelFunc07AD_012A:
	return;
}


