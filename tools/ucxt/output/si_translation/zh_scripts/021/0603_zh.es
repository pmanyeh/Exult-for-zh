#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0603 object#(0x603) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	if (!(event == 0x0002)) goto labelFunc0603_0132;
	UI_close_gumps();
	var0000 = UI_find_nearby(0xFE9C, 0x03BE, 0x0028, 0x0000);
	if (!var0000) goto labelFunc0603_0132;
	var0001 = UI_find_nearby(0xFE9C, 0x02D8, 0x000A, 0x0000);
	if (!var0001) goto labelFunc0603_0132;
	enum();
labelFunc0603_003F:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0603_0092;
	if (!(UI_get_item_frame(var0004) == 0x0000)) goto labelFunc0603_008F;
	var0005 = UI_get_object_position(var0004);
	UI_play_sound_effect(0x0021);
	UI_sprite_effect(0x001E, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0004);
labelFunc0603_008F:
	goto labelFunc0603_003F;
labelFunc0603_0092:
	var0006 = Func097D(0xFE9B, 0x0001, 0x02C3, 0x007C, 0xFE99);
	if (!var0006) goto labelFunc0603_00C6;
	var0007 = UI_remove_party_items(0x0001, 0x02C3, 0x007C, 0xFE99, 0x0000);
	goto labelFunc0603_0132;
labelFunc0603_00C6:
	var0008 = UI_find_nearby(Func09A0(0x0000, 0x0001), 0x02C3, 0x001E, 0x0000);
	enum();
labelFunc0603_00E0:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0603_0132;
	var000C = UI_get_item_quality(var000B);
	if (!(var000C == 0x007C)) goto labelFunc0603_012F;
	var000D = UI_get_object_position(var000B);
	UI_sprite_effect(0x0015, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var000B);
labelFunc0603_012F:
	goto labelFunc0603_00E0;
labelFunc0603_0132:
	return;
}


