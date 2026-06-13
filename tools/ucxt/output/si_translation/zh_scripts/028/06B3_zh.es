#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func08B5 0x8B5 ();
extern var Func08B6 0x8B6 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D6 object#(0x7D6) ();
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func06B3 object#(0x6B3) ()
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

	var0000 = Func09A0(0x0002, 0x0001);
	if (!gflags[0x0211]) goto labelFunc06B3_0018;
	UI_remove_item(item);
	abort;
labelFunc06B3_0018:
	if (!(event == 0x0003)) goto labelFunc06B3_0054;
	var0001 = Func0992(0x0001, "@I feel sleepy@", "@I feel sleepy@", true);
	var0001 = UI_set_item_quality(var0000, 0x0000);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06B3], 0x000F);
labelFunc06B3_0054:
	if (!(event == 0x0002)) goto labelFunc06B3_04CE;
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 == 0x0000)) goto labelFunc06B3_00A4;
	var0001 = Func0992(0x0001, "@Mine eyes are closing...@", "@I can go no further...@", true);
	var0001 = UI_set_item_quality(var0000, 0x0001);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06B3], 0x000F);
labelFunc06B3_00A4:
	if (!(var0002 == 0x0001)) goto labelFunc06B3_0144;
	var0001 = Func0992(0x0001, "@I can go no further...@", "@Mine eyes are closing...@", true);
	var0003 = Func08B5();
	if (!var0003) goto labelFunc06B3_0105;
	var0004 = UI_get_npc_object(var0003);
	UI_set_item_flag(var0004, 0x0001);
	UI_set_schedule_type(var0004, 0x000E);
	var0005 = UI_get_object_position(var0003);
	UI_set_new_schedules(var0003, 0x0000, 0x000E, var0005);
	goto labelFunc06B3_012D;
labelFunc06B3_0105:
	var0001 = UI_set_item_quality(var0000, 0x0002);
	UI_clear_item_say(0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000E);
labelFunc06B3_012D:
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06B3], 0x000F);
labelFunc06B3_0144:
	if (!(var0002 == 0x0002)) goto labelFunc06B3_01C9;
	var0001 = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_show_npc_face0(var0001, 0x0000);
	if (!(var0001 == 0xFE9C)) goto labelFunc06B3_0179;
	message("\"I must stay awake...\"");
	say();
	goto labelFunc06B3_017D;
labelFunc06B3_0179:
	message("\"We must stay awake...\"");
	say();
labelFunc06B3_017D:
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x6B, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x27, 0x0005]);
	var0001 = UI_set_item_quality(var0000, 0x0003);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06B3], 0x0005);
labelFunc06B3_01C9:
	if (!(var0002 == 0x0003)) goto labelFunc06B3_0331;
	var0006 = Func08B6();
	var0007 = UI_get_npc_object(0xFE9C);
	var0008 = Func0988(var0007, var0006);
	enum();
labelFunc06B3_01F0:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc06B3_0268;
	var000C = UI_get_npc_object(var000B);
	UI_set_schedule_type(var000C, 0x000F);
	var000D = UI_die_roll(0xFFFE, 0x0002);
	var000E = UI_die_roll(0xFFFE, 0x0002);
	UI_move_object(var000C, [(0x05B4 + var000D), (0x0652 + var000E), 0x0000]);
	UI_set_new_schedules(var000C, 0x0000, 0x000E, [(0x05B4 + var000D), (0x0652 + var000E), 0x0000]);
	goto labelFunc06B3_01F0;
labelFunc06B3_0268:
	item->Func07D6();
	var000F = UI_die_roll(0x0001, 0x0004);
	var0010 = [0x0011, 0x05CE, 0x0000];
	if (!(var000F == 0x0001)) goto labelFunc06B3_02A1;
	var0010 = [0x00AF, 0x056B, 0x0000];
labelFunc06B3_02A1:
	if (!(var000F == 0x0002)) goto labelFunc06B3_02BA;
	var0010 = [0x008B, 0x0459, 0x0000];
labelFunc06B3_02BA:
	if (!(var000F == 0x0003)) goto labelFunc06B3_02D3;
	var0010 = [0x0B53, 0x0463, 0x0000];
labelFunc06B3_02D3:
	if (!(var000F == 0x0004)) goto labelFunc06B3_02EC;
	var0010 = [0x0011, 0x05CE, 0x0000];
labelFunc06B3_02EC:
	UI_clear_item_flag(0xFE9C, 0x0008);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, var0010);
	var0001 = UI_set_item_quality(var0000, 0x0004);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x06B3], 0x000F);
labelFunc06B3_0331:
	if (!(var0002 == 0x0004)) goto labelFunc06B3_04CE;
	UI_clear_item_flag(0xFE9C, 0x0000);
	var0011 = 0x0000;
	var0012 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc06B3_035E:
	if (!(var0011 < 0x0002)) goto labelFunc06B3_03ED;
	enum();
labelFunc06B3_0369:
	for (var0015 in var0012 with var0013 to var0014) attend labelFunc06B3_03CD;
	if (!(Func09A6(var0015) || (var0011 == 0x0001))) goto labelFunc06B3_03CA;
	var0001 = UI_get_item_shape(var0015);
	if (!(!((var0001 == 0x01E6) || (var0001 == 0x025F)))) goto labelFunc06B3_03CA;
	if (!(!UI_set_last_created(var0015))) goto labelFunc06B3_03B6;
	Func092F(0xFE9C, 0x0011);
labelFunc06B3_03B6:
	if (!(!UI_give_last_created(0xFF1B))) goto labelFunc06B3_03CA;
	Func092F(0xFE9C, 0x0012);
labelFunc06B3_03CA:
	goto labelFunc06B3_0369;
labelFunc06B3_03CD:
	var0011 = (var0011 + 0x0001);
	var0012 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc06B3_035E;
labelFunc06B3_03ED:
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0000);
	if (!Func097D(0xFF1B, 0x0001, 0x0289, 0xFE99, 0x0003)) goto labelFunc06B3_0434;
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x0289, 0xFE99, 0x0003, 0x0000);
labelFunc06B3_0434:
	if (!Func097D(0xFF1B, 0x0001, 0x017F, 0xFE99, 0x0001)) goto labelFunc06B3_0462;
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x017F, 0xFE99, 0x0001, 0x0000);
labelFunc06B3_0462:
	if (!Func097D(0xFF1B, 0x0001, 0x0289, 0xFE99, 0x000B)) goto labelFunc06B3_0490;
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x0289, 0xFE99, 0x000B, 0x0000);
labelFunc06B3_0490:
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_play_music(0x0018, Func09A0(0x0005, 0x0001));
	UI_set_schedule_type(0xFE9C, 0x001F);
	var0001 = UI_set_item_quality(var0000, 0x0000);
labelFunc06B3_04CE:
	return;
}


