#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06B6 object#(0x6B6) ()
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

	if (!(event == 0x0003)) goto labelFunc06B6_02F3;
	var0000 = UI_get_item_quality(item);
	var0001 = [];
	var0002 = [];
	if (!(var0000 == 0x0001)) goto labelFunc06B6_003E;
	var0001 = [0x06B1, 0x0751];
	var0002 = [0x002D, 0x001D];
labelFunc06B6_003E:
	if (!(var0000 == 0x0002)) goto labelFunc06B6_0060;
	var0001 = [0x07F0, 0x073F];
	var0002 = [0x001A, 0x0017];
labelFunc06B6_0060:
	var0003 = [0x0000, 0x0000, 0x0000];
	var0004 = UI_get_party_list();
	var0005 = UI_die_roll(0x0001, Func0977(var0004));
	var0006 = var0004[var0005];
	var0003 = UI_get_object_position(var0006);
	var0007 = true;
labelFunc06B6_009D:
	if (!var0007) goto labelFunc06B6_00EE;
	var0003[0x0001] = (var0001[0x0001] + UI_die_roll(0x0000, var0002[0x0001]));
	var0003[0x0002] = (var0001[0x0002] + UI_die_roll(0x0000, var0002[0x0002]));
	if (!UI_is_not_blocked(var0003, 0x02D1, 0x0000)) goto labelFunc06B6_00EB;
	var0007 = false;
labelFunc06B6_00EB:
	goto labelFunc06B6_009D;
labelFunc06B6_00EE:
	UI_move_object(var0006, var0003);
	var0008 = ["@Whoa!@", "@Huh?@", "@What happened?@", "@Magic!@", "@Whoops...@", "@Watch out!@", "@Help!@"];
	var0009 = var0008[UI_get_random(UI_get_array_size(var0008))];
	Func097F(var0006, var0009, 0x0014);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = UI_find_nearby(item, 0x0113, 0x001E, 0x0010);
	if (!var000A) goto labelFunc06B6_01E7;
	enum();
labelFunc06B6_0167:
	for (var000D in var000A with var000B to var000C) attend labelFunc06B6_01E7;
	if (!(UI_get_item_quality(var000D) == var0000)) goto labelFunc06B6_01E4;
	var0003[0x0001] = (var0001[0x0001] + UI_die_roll(0x0000, var0002[0x0001]));
	var0003[0x0002] = (var0001[0x0002] + UI_die_roll(0x0000, var0002[0x0002]));
	UI_sprite_effect(0x002F, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0030);
	UI_move_object(var000D, var0003);
labelFunc06B6_01E4:
	goto labelFunc06B6_0167;
labelFunc06B6_01E7:
	if (!(var0000 == 0x0001)) goto labelFunc06B6_02F3;
	var000E = UI_find_nearby_avatar(0x0202);
	var000F = UI_get_array_size(var000E);
	if (!(var000F < 0x0003)) goto labelFunc06B6_02F3;
	var0003[0x0001] = (var0001[0x0001] + UI_die_roll(0x0000, var0002[0x0001]));
	var0003[0x0002] = (var0001[0x0002] + UI_die_roll(0x0000, var0002[0x0002]));
	var0010 = UI_create_new_object2(0x0202, var0003);
	UI_set_alignment(var0010, 0x0002);
	UI_set_schedule_type(var0010, 0x0000);
	UI_set_oppressor(var0010, UI_get_npc_object(0xFE9C));
	UI_set_item_flag(var0010, 0x001D);
	UI_set_item_flag(var0010, 0x0012);
	UI_set_npc_id(var0010, 0x0001);
	var0011 = UI_get_npc_prop(var0010, 0x0003);
	var0007 = UI_set_npc_prop(var0010, 0x0003, (0x0001 - var0011));
	var0011 = UI_get_npc_prop(var0010, 0x0000);
	var0007 = UI_set_npc_prop(var0010, 0x0000, (0x0000 - var0011));
	var0011 = UI_get_npc_prop(var0010, 0x0001);
	var0007 = UI_set_npc_prop(var0010, 0x0001, (0x0005 - var0011));
labelFunc06B6_02F3:
	return;
}


