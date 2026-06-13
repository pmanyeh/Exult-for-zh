#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06DC object#(0x6DC) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;

	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	var0002 = UI_find_nearby(item, 0xFE99, 0x0002, 0x0000);
	enum();
labelFunc06DC_0022:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc06DC_035C;
	var0006 = UI_get_item_shape(var0005);
	if (!((var0001 == 0x0001) && (var0006 == 0x02C3))) goto labelFunc06DC_0106;
	var0000 = UI_get_object_position(var0005);
	UI_sprite_effect(0x000D, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0005), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, (var0000[0x0001] - 0x0005), (var0000[0x0002] - 0x0003), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0028);
	UI_remove_item(var0005);
	var0007 = UI_set_item_quality(item, 0x0002);
	var0008 = UI_find_nearby(item, 0x02C5, 0x0005, 0x0000);
	enum();
labelFunc06DC_00D2:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc06DC_00ED;
	var0007 = UI_set_item_quality(var000B, 0x0097);
	goto labelFunc06DC_00D2;
labelFunc06DC_00ED:
	Func097F(0xFE9C, "@The plaque!@", 0x0000);
	Func097F(0xFE9C, "@It hath changed!@", 0x0010);
	abort;
labelFunc06DC_0106:
	if (!((var0001 == 0x0002) && (var0006 == 0x027C))) goto labelFunc06DC_01C9;
	var0000 = UI_get_object_position(var0005);
	UI_sprite_effect(0x000D, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0005), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, (var0000[0x0001] - 0x0005), (var0000[0x0002] - 0x0003), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	UI_remove_item(var0005);
	var0007 = UI_set_item_quality(item, 0x0003);
	Func097F(0xFE9C, "@The plaque hath changed!@", 0x0002);
	var0008 = UI_find_nearby(item, 0x02C5, 0x0005, 0x0000);
	enum();
labelFunc06DC_01AD:
	for (var000E in var0008 with var000C to var000D) attend labelFunc06DC_01C8;
	var0007 = UI_set_item_quality(var000E, 0x0098);
	goto labelFunc06DC_01AD;
labelFunc06DC_01C8:
	abort;
labelFunc06DC_01C9:
	if (!((var0001 == 0x0003) && (var0006 == 0x00D1))) goto labelFunc06DC_02DE;
	var0000 = UI_get_object_position(var0005);
	UI_sprite_effect(0x000D, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0005), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, (var0000[0x0001] - 0x0005), (var0000[0x0002] - 0x0003), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_remove_item(var0005);
	var0007 = UI_set_item_quality(item, 0x0004);
	Func097F(0xFE9C, "@The door opened!@", 0x0005);
	var000F = UI_find_nearby(item, 0x0178, 0x0014, 0x0000);
	enum();
labelFunc06DC_0270:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc06DC_02DD;
	var0000 = UI_get_object_position(var0012);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0003), (var0000[0x0002] - 0x0003), var0000[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0012);
	var0013 = UI_create_new_object(0x010E);
	if (!var0013) goto labelFunc06DC_02DA;
	UI_set_item_frame(var0013, 0x0014);
	var0007 = UI_update_last_created(var0000);
labelFunc06DC_02DA:
	goto labelFunc06DC_0270;
labelFunc06DC_02DD:
	abort;
labelFunc06DC_02DE:
	if (!((var0001 == 0x0005) && (var0006 == 0x039E))) goto labelFunc06DC_0359;
	var0014 = false;
	var0000 = [0x08F7, 0x0263, 0x0001];
	UI_move_object(0xFE9B, var0000);
	UI_play_sound_effect(0x0051);
	Func097F(0xFE9C, "@By the Virtues!@", 0x0005);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(0xFE9C, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc06DC_0359:
	goto labelFunc06DC_0022;
labelFunc06DC_035C:
	var0014 = false;
	var0002 = UI_find_nearby(item, 0xFE99, 0x0002, 0x0000);
	enum();
labelFunc06DC_0372:
	for (var0017 in var0002 with var0015 to var0016) attend labelFunc06DC_03AD;
	var0000 = UI_get_object_position(var0017);
	var0018 = UI_get_object_position(item);
	var0007 = UI_get_item_shape(var0017);
	if (!(var0000[0x0003] >= 0x0004)) goto labelFunc06DC_03AA;
	var0014 = true;
labelFunc06DC_03AA:
	goto labelFunc06DC_0372;
labelFunc06DC_03AD:
	if (!var0014) goto labelFunc06DC_0418;
	var0019 = UI_die_roll(0x0001, 0x0006);
	if (!(var0019 == 0x0001)) goto labelFunc06DC_03D6;
	Func097F(0xFE9C, "@That did nothing...@", 0x0002);
labelFunc06DC_03D6:
	if (!(var0019 == 0x0002)) goto labelFunc06DC_03EC;
	Func097F(0xFE9C, "@'Twas not it...@", 0x0001);
labelFunc06DC_03EC:
	if (!(var0019 == 0x0003)) goto labelFunc06DC_0402;
	Func097F(0xFE9C, "@Wrong item...@", 0x0001);
labelFunc06DC_0402:
	if (!(var0019 == 0x0004)) goto labelFunc06DC_0418;
	Func097F(0xFE9C, "@Maybe something else?@", 0x0001);
labelFunc06DC_0418:
	abort;
	return;
}


