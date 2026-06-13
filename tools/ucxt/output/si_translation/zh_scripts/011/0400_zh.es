#game "serpentisle"
// externs
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0994 0x994 ();
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern void Func07D7 object#(0x7D7) ();
extern var Func08B6 0x8B6 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern void Func08B8 0x8B8 ();
extern void Func08F6 0x8F6 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func08F3 0x8F3 ();
extern var Func084E 0x84E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0400 object#(0x400) ()
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
	var var001A;
	var var001B;

	if (!(event == 0x0008)) goto labelFunc0400_002C;
	if (!UI_get_item_flag(0xFE9C, 0x0023)) goto labelFunc0400_0022;
	UI_set_polymorph(0xFE9C, 0x0292);
	goto labelFunc0400_002C;
labelFunc0400_0022:
	UI_set_polymorph(0xFE9C, 0x0212);
labelFunc0400_002C:
	if (!(event == 0x0007)) goto labelFunc0400_08D1;
	if (!gflags[0x0083]) goto labelFunc0400_0070;
	var0000 = UI_get_oppressor(0xFE9C);
	var0000 = (0x0000 - var0000);
	if (!(!gflags[0x0007])) goto labelFunc0400_006B;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0000), UI_get_npc_object(0xFE9C));
	return;
labelFunc0400_006B:
	Func092E(item);
	return;
labelFunc0400_0070:
	if (!(gflags[0x00BF] && (!gflags[0x0048]))) goto labelFunc0400_007C;
	abort;
labelFunc0400_007C:
	var0001 = Func0994();
	if (!((var0001 == 0x0014) && (!UI_get_item_flag(0xFE9C, 0x0010)))) goto labelFunc0400_021B;
	var0002 = UI_get_object_position(0xFE9C);
	if (!((var0002[0x0001] > 0x09D0) && ((var0002[0x0001] < 0x09FA) && ((var0002[0x0002] > 0x0320) && (var0002[0x0002] < 0x033A))))) goto labelFunc0400_0112;
	var0000 = UI_get_npc_prop(0xFE9C, 0x0003);
	if (!(var0000 < 0x0000)) goto labelFunc0400_00F1;
	var0000 = (0x0003 - var0000);
labelFunc0400_00F1:
	if (!(var0000 == 0x0000)) goto labelFunc0400_0101;
	var0000 = 0x0003;
labelFunc0400_0101:
	var0000 = UI_set_npc_prop(0xFE9C, 0x0003, var0000);
	abort;
labelFunc0400_0112:
	var0003 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	var0000 = UI_find_direction(var0003, 0xFE9C);
	var0000 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x59, var0000]);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E]);
	var0002 = UI_get_object_position(0xFE9C);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0000 = UI_create_new_object(0x0390);
	if (!var0000) goto labelFunc0400_019F;
	var0000 = UI_update_last_created(var0002);
labelFunc0400_019F:
	var0002[0x0001] = (var0002[0x0001] - 0x0002);
	var0000 = UI_create_new_object(0x0390);
	if (!var0000) goto labelFunc0400_01C9;
	var0000 = UI_update_last_created(var0002);
labelFunc0400_01C9:
	var0002[0x0002] = (var0002[0x0002] + 0x0001);
	var0000 = UI_create_new_object(0x0390);
	if (!var0000) goto labelFunc0400_01F3;
	var0000 = UI_update_last_created(var0002);
labelFunc0400_01F3:
	UI_halt_scheduled(var0003);
	UI_set_schedule_type(var0003, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x0400], 0x0005);
labelFunc0400_021B:
	if (!(var0001 == 0x001F)) goto labelFunc0400_03CC;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var0004 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0400_0246:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0400_0276;
	if (!(!((UI_get_item_shape(var0007) == 0x01E6) || (UI_get_item_shape(var0007) == 0x025F)))) goto labelFunc0400_0273;
	UI_remove_item(var0007);
labelFunc0400_0273:
	goto labelFunc0400_0246;
labelFunc0400_0276:
	var0008 = 0x0000;
	var0004 = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
labelFunc0400_028F:
	if (!(var0008 < 0x0002)) goto labelFunc0400_0301;
	enum();
labelFunc0400_029A:
	for (var0007 in var0004 with var0009 to var000A) attend labelFunc0400_02E1;
	if (!(Func09A6(var0007) || (var0008 == 0x0001))) goto labelFunc0400_02DE;
	if (!(!UI_set_last_created(var0007))) goto labelFunc0400_02CA;
	Func092F(0xFE9C, 0x000D);
labelFunc0400_02CA:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc0400_02DE;
	Func092F(0xFE9C, 0x000E);
labelFunc0400_02DE:
	goto labelFunc0400_029A;
labelFunc0400_02E1:
	var0008 = (var0008 + 0x0001);
	var0004 = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0400_028F;
labelFunc0400_0301:
	UI_play_music(0x0016, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFE9C, [0x05B4, 0x0652, 0x0000]);
	if (!(Func095C(0xFE9C, 0x0000) > Func095C(0xFE9C, 0x0003))) goto labelFunc0400_035C;
	var0000 = (Func095C(0xFE9C, 0x0000) - Func095C(0xFE9C, 0x0003));
	Func095E(0xFE9C, 0x0003, var0000);
labelFunc0400_035C:
	item->Func07D7();
	var0004 = Func08B6();
	enum();
labelFunc0400_0367:
	for (var0007 in var0004 with var000B to var000C) attend labelFunc0400_039A;
	UI_clear_item_flag(var0007, 0x0001);
	UI_set_schedule_type(var0007, 0x001F);
	var0000 = UI_execute_usecode_array(var0007, [(byte)0x23, (byte)0x61]);
	goto labelFunc0400_0367;
labelFunc0400_039A:
	if (!var0007) goto labelFunc0400_03AC;
	Func097F(var0007, "@What dreams!@", 0x000E);
labelFunc0400_03AC:
	var000D = Func09A0(0x0002, 0x0001);
	var0000 = UI_execute_usecode_array(var000D, [(byte)0x23, (byte)0x55, 0x0636]);
labelFunc0400_03CC:
	if (!((var0001 == 0x0020) && (!gflags[0x026F]))) goto labelFunc0400_0545;
	var000E = UI_get_object_position(0xFE9C);
	if (!Func08F8(var000E, [0x0900, 0x0A00], [0x09FF, 0x0AFF])) goto labelFunc0400_0521;
	var0004 = [0xFE9C];
	var000F = true;
	enum();
labelFunc0400_040E:
	for (var0003 in var0004 with var0010 to var0011) attend labelFunc0400_051E;
	UI_halt_scheduled(var0003);
	UI_clear_item_say(var0003);
	if (!(!UI_get_item_flag(var0003, 0x001E))) goto labelFunc0400_043F;
	UI_set_schedule_type(var0003, 0x001F);
labelFunc0400_043F:
	UI_set_temperature(var0003, 0x0000);
	UI_clear_item_flag(var0003, 0x0001);
	UI_clear_item_flag(var0003, 0x0002);
	UI_clear_item_flag(var0003, 0x0003);
	UI_clear_item_flag(var0003, 0x0004);
	UI_clear_item_flag(var0003, 0x0005);
	UI_clear_item_flag(var0003, 0x0007);
	UI_clear_item_flag(var0003, 0x0008);
	UI_clear_item_flag(var0003, 0x0010);
	if (!(Func095C(var0003, 0x0000) > Func095C(var0003, 0x0003))) goto labelFunc0400_04D1;
	var0000 = (Func095C(var0003, 0x0000) - Func095C(var0003, 0x0003));
	Func095E(var0003, 0x0003, var0000);
labelFunc0400_04D1:
	var0000 = Func095C(var0003, 0x0009);
	var0000 = (0x001F - var0000);
	Func095E(var0003, 0x0009, var0000);
	gflags[0x026F] = true;
	Func08B8();
	var0012 = Func09A0(0x0000, 0x0004);
	var0000 = UI_execute_usecode_array(var0012, [(byte)0x23, (byte)0x55, 0x0616]);
	abort;
	goto labelFunc0400_040E;
labelFunc0400_051E:
	goto labelFunc0400_0545;
labelFunc0400_0521:
	var0012 = Func09A0(0x0000, 0x0001);
	var0000 = UI_execute_usecode_array(var0012, [(byte)0x23, (byte)0x55, 0x060C]);
	gflags[0x026F] = true;
labelFunc0400_0545:
	if (!((var0001 != 0x0014) && ((var0001 != 0x001F) && ((var0001 != 0x0020) && (!gflags[0x026F]))))) goto labelFunc0400_08D1;
	Func08F6();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0004 = Func08B6();
	var0004 = [0xFE9C, var0004];
	var0002 = [0x0967, 0x047C, 0x0000];
	var0013 = [0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001];
	var0014 = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000];
	var0007 = 0x0001;
	UI_sprite_effect(0x0007, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	enum();
labelFunc0400_0618:
	for (var0003 in var0004 with var0015 to var0016) attend labelFunc0400_074E;
	UI_halt_scheduled(var0003);
	UI_clear_item_say(var0003);
	if (!(!UI_get_item_flag(var0003, 0x001E))) goto labelFunc0400_0649;
	UI_set_schedule_type(var0003, 0x001F);
labelFunc0400_0649:
	UI_set_temperature(var0003, 0x0000);
	UI_clear_item_flag(var0003, 0x0001);
	UI_clear_item_flag(var0003, 0x0002);
	UI_clear_item_flag(var0003, 0x0003);
	UI_clear_item_flag(var0003, 0x0004);
	UI_clear_item_flag(var0003, 0x0005);
	UI_clear_item_flag(var0003, 0x0007);
	UI_clear_item_flag(var0003, 0x0008);
	UI_clear_item_flag(var0003, 0x0010);
	if (!(Func095C(var0003, 0x0000) > Func095C(var0003, 0x0003))) goto labelFunc0400_06DB;
	var0000 = (Func095C(var0003, 0x0000) - Func095C(var0003, 0x0003));
	Func095E(var0003, 0x0003, var0000);
labelFunc0400_06DB:
	var0000 = Func095C(var0003, 0x0009);
	var0000 = (0x001F - var0000);
	Func095E(var0003, 0x0009, var0000);
	var0000 = [(var0002[0x0001] + var0013[var0007]), (var0002[0x0002] + var0014[var0007]), var0002[0x0003]];
	UI_move_object(var0003, var0000);
	var0000 = UI_execute_usecode_array(var0003, [(byte)0x61, (byte)0x59, 0x0000]);
	var0007 = (var0007 + 0x0001);
	goto labelFunc0400_0618;
labelFunc0400_074E:
	var0002 = [];
	var0013 = [];
	var0014 = [];
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0636]);
	var0017 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2B, 0xFF2A, 0xFF30, 0xFF2E];
	if (!(!gflags[0x01CC])) goto labelFunc0400_07A3;
	var0017 = Func0988(0xFF2F, var0017);
labelFunc0400_07A3:
	if (!Func08F3()) goto labelFunc0400_07B3;
	var0017 = (var0017 & 0xFF29);
labelFunc0400_07B3:
	var0000 = UI_set_item_quality(Func09A0(0x0005, 0x0001), 0x0003);
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x00C8);
	enum();
labelFunc0400_07E7:
	for (var0003 in var0017 with var0018 to var0019) attend labelFunc0400_08C3;
	UI_move_object(var0003, Func084E(var0003, 0x0003));
	UI_set_new_schedules(var0003, 0x0000, 0x0010, Func084E(var0003, 0x0003));
	UI_run_schedule(var0003);
	if (!(var0003 == 0xFF31)) goto labelFunc0400_08A8;
	UI_clear_item_flag(var0003, 0x0001);
	UI_clear_item_flag(var0003, 0x0002);
	UI_clear_item_flag(var0003, 0x0003);
	UI_clear_item_flag(var0003, 0x0004);
	UI_clear_item_flag(var0003, 0x0005);
	UI_clear_item_flag(var0003, 0x0007);
	UI_clear_item_flag(var0003, 0x0008);
	UI_clear_item_flag(var0003, 0x0010);
	UI_set_npc_id(0xFF31, 0x0000);
	UI_set_schedule_type(0xFF31, 0x0003);
	var0000 = UI_execute_usecode_array(0xFF31, [(byte)0x59, 0x0004, (byte)0x61, (byte)0x6F, (byte)0x70]);
	goto labelFunc0400_08C0;
labelFunc0400_08A8:
	var0000 = UI_execute_usecode_array(var0003, [(byte)0x59, 0x0000, (byte)0x61, (byte)0x6F, (byte)0x6B]);
labelFunc0400_08C0:
	goto labelFunc0400_07E7;
labelFunc0400_08C3:
	UI_set_item_flag(0xFE9C, 0x0010);
	gflags[0x026F] = true;
labelFunc0400_08D1:
	if (!(event == 0x0002)) goto labelFunc0400_0B32;
	if (!gflags[0x021E]) goto labelFunc0400_09A3;
	UI_set_schedule_type(item, 0x0000);
	UI_show_npc_face0(0xFEE1, 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(item, 0x000F);
	message("\"Thou art nearly dead, Avatar!\"");
	say();
	message("\"Yield to me, and perhaps I shall spare thy life! Dost thou yield?\"");
	say();
	if (!Func0955()) goto labelFunc0400_0969;
	message("\"I always knew that thou wert a coward!\"");
	say();
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x67, (byte)0x23, (byte)0x6A, (byte)0x23, (byte)0x67], 0x0001);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0003, 0x000A);
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x07DA], 0x000A);
	Func097F(item, "@Die, fool!@", 0x0000);
	goto labelFunc0400_09A2;
labelFunc0400_0969:
	Func097F(item, "@Damn thee!@", 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0003, 0x000A);
	gflags[0x021F] = true;
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07DA], 0x000A);
	gflags[0x021E] = false;
labelFunc0400_09A2:
	abort;
labelFunc0400_09A3:
	if (!(Func0994() == 0x0003)) goto labelFunc0400_0B32;
	if (!gflags[0x0007]) goto labelFunc0400_0A25;
	var0000 = UI_game_hour();
	if (!(var0000 > 0x000A)) goto labelFunc0400_09D5;
	var0003 = (0x000A + (0x0018 - var0000));
	goto labelFunc0400_09DF;
labelFunc0400_09D5:
	var0003 = (0x000A - var0000);
labelFunc0400_09DF:
	var0000 = ((0x05DC * var0003) + (0x0019 * (0x003C - UI_game_minute())));
	UI_advance_time(var0000);
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	UI_set_schedule_type(0xFE9C, 0x001F);
	UI_clear_item_flag(0xFE9C, 0x0010);
	gflags[0x0007] = false;
	goto labelFunc0400_0B32;
labelFunc0400_0A25:
	gflags[0x0007] = true;
	var0004 = UI_get_party_list();
	enum();
labelFunc0400_0A31:
	for (var0003 in var0004 with var001A to var001B) attend labelFunc0400_0A58;
	var0000 = UI_execute_usecode_array(var0003, [(byte)0x61]);
	UI_set_schedule_type(var0003, 0x001F);
	goto labelFunc0400_0A31;
labelFunc0400_0A58:
	gflags[0x0187] = true;
	var0000 = UI_create_new_object(0x0281);
	if (!var0000) goto labelFunc0400_0A8C;
	var0000 = UI_set_item_quality(var0000, 0x000B);
	var0000 = UI_update_last_created([0x03A1, 0x06F9, 0x0008]);
labelFunc0400_0A8C:
	var0000 = UI_create_new_object(0x031D);
	if (!var0000) goto labelFunc0400_0ABC;
	var0000 = UI_set_item_quality(var0000, 0x000C);
	var0000 = UI_update_last_created([0x03A1, 0x06F7, 0x0008]);
labelFunc0400_0ABC:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0004), [(byte)0x55, 0x07DC], 0x012C);
	var0000 = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var0000, "@Wake up!@", 0x0004);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x52, "@Oh, mine head...@"]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0400], 0x0005);
	abort;
labelFunc0400_0B32:
	return;
}


