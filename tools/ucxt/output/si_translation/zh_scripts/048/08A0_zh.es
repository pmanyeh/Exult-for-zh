#game "serpentisle"
// externs
extern var Func098D 0x98D ();

var Func08A0 0x8A0 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = 0x0001;
	var0002 = 0x0001;
	var0003 = UI_get_party_list();
	var0004 = (0xFE9C & Func098D());
	if (!(var0000 < 0x0002)) goto labelFunc08A0_0074;
	var0001 = UI_get_random(UI_get_array_size(var0003));
	if (!(var0000 == 0x0000)) goto labelFunc08A0_0049;
	return var0003[var0001];
	goto labelFunc08A0_0071;
labelFunc08A0_0049:
	if (!(UI_get_npc_object(var0004[var0002]) != var0003[var0001])) goto labelFunc08A0_006A;
	var0002 = (var0002 + 0x0001);
	goto labelFunc08A0_0049;
labelFunc08A0_006A:
	return var0004[var0002];
labelFunc08A0_0071:
	goto labelFunc08A0_0104;
labelFunc08A0_0074:
	if (!(UI_get_array_size(var0003) < 0x0002)) goto labelFunc08A0_0086;
	return 0x0045;
labelFunc08A0_0086:
	var0001 = UI_get_random(UI_get_array_size(var0003));
labelFunc08A0_0094:
	if (!(var0003[var0001] == UI_get_npc_object(0xFE9C))) goto labelFunc08A0_00B6;
	var0001 = UI_get_random(UI_get_array_size(var0003));
	goto labelFunc08A0_0094;
labelFunc08A0_00B6:
	if (!(var0000 == 0x0002)) goto labelFunc08A0_00CA;
	return var0003[var0001];
	goto labelFunc08A0_0104;
labelFunc08A0_00CA:
	if (!(UI_get_npc_object(var0004[var0002]) != var0003[var0001])) goto labelFunc08A0_00FD;
	var0002 = (var0002 + 0x0001);
	if (!(var0002 > UI_get_array_size(var0004))) goto labelFunc08A0_00FA;
	return 0x0045;
labelFunc08A0_00FA:
	goto labelFunc08A0_00CA;
labelFunc08A0_00FD:
	return var0004[var0002];
labelFunc08A0_0104:
	return 0;
}


