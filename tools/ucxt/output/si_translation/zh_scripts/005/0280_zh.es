#game "serpentisle"
// externs
extern var Func099D 0x99D (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0280 shape#(0x280) ()
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

	if (!(event == 0x0001)) goto labelFunc0280_0146;
	UI_close_gumps();
	var0000 = UI_get_party_list();
	var0001 = 0x0001;
	var0002 = UI_find_nearby(item, 0xFE99, 0xFFFF, 0x0008);
	enum();
labelFunc0280_002B:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0280_0146;
	if (!(UI_get_npc_number(var0005) in var0000)) goto labelFunc0280_0054;
	var0006 = UI_die_roll(0x0001, 0x000F);
	goto labelFunc0280_0061;
labelFunc0280_0054:
	var0006 = UI_die_roll(0x0001, 0x0006);
labelFunc0280_0061:
	var0007 = UI_get_alignment(var0005);
	if (!((var0007 == 0x0002) || (var0007 == 0x0003))) goto labelFunc0280_0087;
	var0006 = (var0006 - 0x0001);
labelFunc0280_0087:
	var0008 = UI_game_hour();
	if (!(((var0008 > 0xFFFF) && (var0008 < 0x0006)) || (var0008 > 0x0015))) goto labelFunc0280_00B2;
	var0006 = (var0006 - 0x0001);
labelFunc0280_00B2:
	if (!(var0006 < 0x0002)) goto labelFunc0280_0143;
	UI_play_sound_effect(0x0008);
	UI_set_item_flag(var0005, 0x0008);
	if (!(Func099D(item) && (var0001 != 0x0000))) goto labelFunc0280_0116;
	if (!(var0001 < 0x0005)) goto labelFunc0280_00F2;
	var0009 = Func09A0(0x0004, var0001);
labelFunc0280_00F2:
	if (!(var0001 < 0x0009)) goto labelFunc0280_0108;
	var0009 = Func09A0(0x0000, var0001);
labelFunc0280_0108:
	if (!(var0001 == 0x0009)) goto labelFunc0280_0113;
	abort;
labelFunc0280_0113:
	goto labelFunc0280_011A;
labelFunc0280_0116:
	var0009 = item;
labelFunc0280_011A:
	var000A = UI_set_to_attack(var0009, var0005, 0x01A8);
	var000A = UI_execute_usecode_array(var0009, [(byte)0x7A]);
	var0001 = (var0001 + 0x0001);
labelFunc0280_0143:
	goto labelFunc0280_002B;
labelFunc0280_0146:
	return;
}


