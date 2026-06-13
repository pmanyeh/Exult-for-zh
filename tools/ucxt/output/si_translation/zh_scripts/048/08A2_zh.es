#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func08A2 0x8A2 ()
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

	var0000 = 0x0001;
	var0001 = ["I feel well!", "I feel younger!", "Amazing!", "I'm not tired now!", "I am rejuvenated!", "What was that?!", "That was nice..."];
	var0002 = UI_get_party_list();
	enum();
labelFunc08A2_0029:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc08A2_00B8;
	var0006 = UI_get_object_position(var0005);
	var0007 = UI_get_npc_prop(var0005, 0x0000);
	var0008 = UI_get_npc_prop(var0005, 0x0003);
	var0009 = UI_set_npc_prop(var0005, 0x0003, (var0007 - var0008));
	UI_sprite_effect(0x000D, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0040);
	if (!(var0000 < 0x0008)) goto labelFunc08A2_00B5;
	Func097F(var0005, var0001[var0000], var0000);
	var0000 = (var0000 + 0x0001);
labelFunc08A2_00B5:
	goto labelFunc08A2_0029;
labelFunc08A2_00B8:
	gflags[0x02C8] = true;
	return;
}


