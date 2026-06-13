#game "serpentisle"
// externs
extern var Func0920 0x920 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func09BC 0x9BC (var var0000);
extern void Func09BD 0x9BD (var var0000);
extern var Func0942 0x942 (var var0000);

void Func09BE 0x9BE (var var0000, var var0001)
{
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
	var var000E;
	var var000F;

	var0002 = (UI_find_nearby_avatar(0x010F) & UI_find_nearby_avatar(0x0110));
	var0003 = false;
	enum();
labelFunc09BE_0017:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc09BE_005D;
	if (!(UI_get_item_quality(var0006) == UI_get_item_quality(var0000))) goto labelFunc09BE_005A;
	var0007 = Func0920();
	var0007 = UI_execute_usecode_array(var0000, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0006]);
	var0003 = true;
labelFunc09BE_005A:
	goto labelFunc09BE_0017;
labelFunc09BE_005D:
	if (!(!var0003)) goto labelFunc09BE_02B2;
	var0008 = UI_get_item_quality(var0000);
	if (!((var0008 >= 0x00C8) && (var0008 <= 0x00CC))) goto labelFunc09BE_02B2;
	var0003 = true;
	var0007 = UI_execute_usecode_array(var0000, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0006]);
	if (!(var0008 == 0x00C8)) goto labelFunc09BE_00F2;
	var0009 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Nothing is happening.@"], 0x000A);
	var000A = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc09BE_00F2;
	var0009 = UI_delayed_execute_usecode_array(var000A, [(byte)0x23, (byte)0x52, "@Perhaps it requires something.@"], 0x000F);
labelFunc09BE_00F2:
	if (!(var0008 == 0x00C9)) goto labelFunc09BE_015E;
	var0009 = UI_set_item_quality(var0000, 0x00CA);
	UI_set_weather(0x0002);
	var000A = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc09BE_0141;
	var0009 = UI_delayed_execute_usecode_array(var000A, [(byte)0x23, (byte)0x52, "@The sky doth threaten rain.@"], 0x000A);
labelFunc09BE_0141:
	var0009 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Even as Gustacio said.@"], 0x0014);
	Func09BC(var0000);
labelFunc09BE_015E:
	if (!(var0008 == 0x00CA)) goto labelFunc09BE_022A;
	if (!(gflags[0x0121] && (gflags[0x0122] && gflags[0x0123]))) goto labelFunc09BE_0210;
	var000B = UI_find_nearby(var0000, 0x01C2, 0x0014, 0x0000);
	enum();
labelFunc09BE_018A:
	for (var000E in var000B with var000C to var000D) attend labelFunc09BE_01E9;
	if (!(UI_get_item_frame(var000E) == 0x0002)) goto labelFunc09BE_01E6;
	var000F = UI_get_object_position(var000E);
	UI_sprite_effect(0x0001, (var000F[0x0001] - 0x0006), (var000F[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	UI_remove_item(var000E);
	gflags[0x00E3] = true;
labelFunc09BE_01E6:
	goto labelFunc09BE_018A;
labelFunc09BE_01E9:
	var0009 = UI_set_item_quality(var0000, 0x00C8);
	var0009 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07EF], 0x000A);
	goto labelFunc09BE_0224;
labelFunc09BE_0210:
	UI_set_weather(0x0000);
	var0009 = UI_set_item_quality(var0000, 0x00C9);
labelFunc09BE_0224:
	Func09BD(var0000);
labelFunc09BE_022A:
	if (!(var0008 == 0x00CB)) goto labelFunc09BE_028E;
	var0009 = UI_set_item_quality(var0000, 0x00CC);
	UI_set_weather(0x0002);
	if (!Func0942(0xFFFD)) goto labelFunc09BE_0268;
	var0009 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x52, "It doth storm again!"], 0x000A);
labelFunc09BE_0268:
	if (!Func0942(0xFFFE)) goto labelFunc09BE_0288;
	var0009 = UI_delayed_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x52, "I should have brought a kite."], 0x0014);
labelFunc09BE_0288:
	Func09BC(var0000);
labelFunc09BE_028E:
	if (!(var0008 == 0x00CC)) goto labelFunc09BE_02B2;
	UI_set_weather(0x0000);
	var0009 = UI_set_item_quality(var0000, 0x00CB);
	Func09BD(var0000);
labelFunc09BE_02B2:
	if (!(var0003 && var0001)) goto labelFunc09BE_02DC;
	var0007 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x0B, 0xFFFE, 0x0004]);
labelFunc09BE_02DC:
	return;
}


