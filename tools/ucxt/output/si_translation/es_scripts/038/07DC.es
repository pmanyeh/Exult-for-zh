#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func07DC object#(0x7DC) ()
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

	if (!(item == Func09A0(0x0001, 0x0003))) goto labelFunc07DC_0060;
	var0000 = UI_get_party_list();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(0xFE9C, 0x0025);
	UI_end_conversation();
	UI_play_sound_effect(0x0082);
	enum();
labelFunc07DC_0035:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc07DC_005F;
	UI_obj_sprite_effect(var0003, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x000F, 0xFFFD);
	goto labelFunc07DC_0035;
labelFunc07DC_005F:
	abort;
labelFunc07DC_0060:
	if (!gflags[0x00DA]) goto labelFunc07DC_026C;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var0004 = UI_get_party_list();
	var0005 = [0x090F, 0x0912, 0x0918, 0x0915, 0x0915, 0x0918, 0x091B, 0x091B];
	var0006 = [0x071A, 0x0714, 0x0714, 0x071A, 0x0714, 0x071A, 0x0714, 0x071A];
	var0007 = [0x0000, 0x0004, 0x0004, 0x0000, 0x0004, 0x0000, 0x0004, 0x0000];
	var0008 = [0x0910, 0x071C, 0x0000];
	var0009 = 0x0001;
	enum();
labelFunc07DC_00EA:
	for (var0003 in var0004 with var000A to var000B) attend labelFunc07DC_0180;
	UI_move_object(var0003, [var0005[var0009], var0006[var0009], 0x0000]);
	UI_sprite_effect(0x0007, var0005[var0009], var0006[var0009], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!(UI_get_object_position(var0003) != UI_get_object_position(0xFE9C))) goto labelFunc07DC_0150;
	UI_set_npc_id(var0003, 0x000B);
	UI_remove_from_party(var0003);
labelFunc07DC_0150:
	var000C = UI_execute_usecode_array(var0003, [(byte)0x59, var0007[var0009], (byte)0x01, (byte)0x6B]);
	UI_set_schedule_type(var0003, 0x000F);
	var0009 = (var0009 + 0x0001);
	goto labelFunc07DC_00EA;
labelFunc07DC_0180:
	UI_move_object(0xFFEE, [0x090A, 0x0717, 0x0000]);
	UI_move_object(0xFFEC, [0x090C, 0x071A, 0x0000]);
	UI_move_object(0xFFE1, [0x090C, 0x0714, 0x0000]);
	UI_move_object(0xFFEA, [0x090F, 0x0714, 0x0000]);
	UI_move_object(0xFFE3, [0x0916, 0x072E, 0x0000]);
	var0004 = [0xFFEE, 0xFFEC, 0xFFE1, 0xFFEA, 0xFFE3];
	var0007 = [0x0002, 0x0000, 0x0004, 0x0004, 0x0000];
	var0009 = 0x0001;
	enum();
labelFunc07DC_0210:
	for (var0003 in var0004 with var000D to var000E) attend labelFunc07DC_024B;
	UI_set_schedule_type(var0003, 0x000F);
	var000C = UI_execute_usecode_array(var0003, [(byte)0x59, var0007[var0009], (byte)0x01, (byte)0x6B]);
	var0009 = (var0009 + 0x0001);
	goto labelFunc07DC_0210;
labelFunc07DC_024B:
	var000C = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x0636, (byte)0x61, (byte)0x68, (byte)0x55, 0x032E], 0x000F);
	abort;
labelFunc07DC_026C:
	if (!gflags[0x0187]) goto labelFunc07DC_02E2;
	if (!(gflags[0x0172] || (gflags[0x0171] || UI_get_item_flag(0xFE9C, 0x0010)))) goto labelFunc07DC_0288;
	abort;
labelFunc07DC_0288:
	var000C = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0004), [(byte)0x55, 0x07DC], UI_get_random(0x02EE));
	var000F = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_clear_item_say(var000F);
	if (!(var000F == 0xFE9C)) goto labelFunc07DC_02D5;
	Func097F(0xFE9C, "@About time for the trial...@", 0x0000);
	abort;
labelFunc07DC_02D5:
	Func097F(var000F, "@Do not forget the trial!@", 0x0000);
	abort;
labelFunc07DC_02E2:
	return;
}


