#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06C5 object#(0x6C5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_find_nearest(item, 0x03B5, 0x0014);
	var0001 = UI_find_nearby(item, 0x01C2, 0x0001, 0x0000);
	if (!(UI_get_array_size(var0001) > 0x0000)) goto labelFunc06C5_00B7;
	enum();
labelFunc06C5_002E:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06C5_00B4;
	if (!(var0000 && (UI_get_item_quality(var0000) == 0x00C8))) goto labelFunc06C5_00B1;
	var0005 = UI_get_item_frame(var0004);
	if (!(var0005 == 0x0001)) goto labelFunc06C5_0083;
	var0006 = UI_set_item_quality(var0000, 0x00CB);
	UI_play_sound_effect(0x0039);
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
labelFunc06C5_0083:
	if (!(var0005 == 0x0002)) goto labelFunc06C5_00B1;
	var0006 = UI_set_item_quality(var0000, 0x00C9);
	UI_play_sound_effect(0x0039);
	UI_play_music(0x0017, Func09A0(0x0005, 0x0001));
labelFunc06C5_00B1:
	goto labelFunc06C5_002E;
labelFunc06C5_00B4:
	goto labelFunc06C5_00D1;
labelFunc06C5_00B7:
	if (!var0000) goto labelFunc06C5_00D1;
	UI_set_weather(0x0000);
	var0006 = UI_set_item_quality(var0000, 0x00C8);
labelFunc06C5_00D1:
	return;
}


