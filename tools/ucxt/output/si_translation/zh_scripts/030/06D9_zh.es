#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func09A4 0x9A4 (var var0000);
extern void Func09A3 0x9A3 (var var0000);
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func06D9 object#(0x6D9) ()
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

	if (!(event == 0x0003)) goto labelFunc06D9_05CE;
	var0000 = UI_get_skin_colour();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_item_quality(item);
	var0003 = UI_get_object_position(item);
	if (!(var0002 == 0x0001)) goto labelFunc06D9_0052;
	var0004 = UI_find_nearby(item, 0x00E4, 0x0014, 0x0000);
	if (!var0004) goto labelFunc06D9_0051;
	UI_set_npc_id(var0004, 0x000F);
labelFunc06D9_0051:
	abort;
labelFunc06D9_0052:
	if (!(var0002 == 0x00DE)) goto labelFunc06D9_00AF;
	var0004 = UI_find_nearby(item, 0x00E4, 0x0014, 0x0000);
	if (!var0004) goto labelFunc06D9_00AE;
	UI_clear_item_say(var0004);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"Aaargh! I cannot keep pace with thee! My chest feels as though it shall soon explode!\"");
	say();
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x0008);
	Func097F(var0004, "@Mine heart!!!@", 0x0001);
labelFunc06D9_00AE:
	abort;
labelFunc06D9_00AF:
	if (!(var0002 == 0x0002)) goto labelFunc06D9_0125;
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x000C, 0xFFFD);
	UI_move_object(0xFF4E, var0003);
	UI_set_schedule_type(0xFF4E, 0x000A);
	Func097F(0xFF4E, "@Avatar!@", 0x0001);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0403], 0x0008);
	var0005 = UI_set_item_quality(item, 0x00FF);
	0xFF4E->Func07D2();
labelFunc06D9_0125:
	if (!(var0002 == 0x0003)) goto labelFunc06D9_0157;
	UI_remove_item(item);
	var0003 = [0x0061, 0x0644, 0x0000];
	UI_set_schedule_type(0xFF4E, 0x0014);
	UI_move_object(0xFF4E, var0003);
labelFunc06D9_0157:
	if (!(var0002 == 0x0004)) goto labelFunc06D9_01CD;
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x000C, 0xFFFD);
	UI_move_object(0xFF2D, var0003);
	UI_set_schedule_type(0xFF2D, 0x000A);
	0xFF2D->Func07D2();
	Func097F(0xFF2D, "@Avatar!@", 0x0001);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0363], 0x000A);
	var0005 = UI_set_item_quality(item, 0x00FF);
labelFunc06D9_01CD:
	if (!(var0002 == 0x0005)) goto labelFunc06D9_01E3;
	UI_remove_npc(0xFF2D);
	UI_remove_item(item);
labelFunc06D9_01E3:
	if (!(var0002 == 0x0006)) goto labelFunc06D9_0202;
	UI_set_schedule_type(0xFF25, 0x0003);
	var0005 = UI_set_item_quality(item, 0x00FF);
labelFunc06D9_0202:
	if (!(var0002 == 0x0007)) goto labelFunc06D9_021F;
	UI_remove_npc(0xFF25);
	UI_remove_npc(0xFF24);
	UI_remove_item(item);
labelFunc06D9_021F:
	if (!(var0002 == 0x0008)) goto labelFunc06D9_0355;
	var0006 = UI_create_new_object2(0x013E, var0003);
	UI_set_schedule_type(var0006, 0x0000);
	UI_set_alignment(var0006, 0x0003);
	Func09A4(var0006);
	var0007 = [(var0003[0x0001] + 0x0009), var0003[0x0002], var0003[0x0003]];
	var0008 = UI_create_new_object2(0x012E, var0007);
	UI_set_schedule_type(var0008, 0x0000);
	UI_set_alignment(var0008, 0x0002);
	Func09A4(var0008);
	UI_set_oppressor(var0006, var0008);
	UI_set_oppressor(var0008, var0006);
	UI_set_opponent(var0006, var0008);
	UI_set_opponent(var0008, var0006);
	UI_set_item_flag(var0006, 0x001D);
	UI_set_item_flag(var0008, 0x001D);
	UI_set_polymorph(var0008, 0x02D1);
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x000C, 0xFFFD);
	UI_sprite_effect(0x0007, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x000C, 0xFFFD);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x013E], 0x001E);
	var0005 = UI_set_item_quality(item, 0x00FF);
	var0005 = UI_add_cont_items(var0006, 0x0001, 0x02C6, 0x0000, 0x0000, false);
labelFunc06D9_0355:
	if (!(var0002 == 0x0010)) goto labelFunc06D9_04BD;
	var0009 = UI_find_nearby(item, 0x012E, 0x0028, 0x0000);
	enum();
labelFunc06D9_0371:
	for (var000C in var0009 with var000A to var000B) attend labelFunc06D9_0479;
	var000D = UI_get_object_position(var000C);
	UI_set_polymorph(var000C, 0x012E);
	Func09A3(var000C);
	var000E = 0x0190;
	var000F = 0x0001;
	var0010 = UI_find_nearby(item, 0x013E, 0x0014, 0x0000);
	enum();
labelFunc06D9_03B4:
	for (var0013 in var0010 with var0011 to var0012) attend labelFunc06D9_03D6;
	UI_set_alignment(var0013, 0x0001);
	UI_set_schedule_type(var0013, 0x0004);
	goto labelFunc06D9_03B4;
labelFunc06D9_03D6:
	if (!var0001) goto labelFunc06D9_0421;
	if (!(var0000 == 0x0000)) goto labelFunc06D9_03F2;
	var000E = 0x0190;
	var000F = 0x0002;
labelFunc06D9_03F2:
	if (!(var0000 == 0x0001)) goto labelFunc06D9_0408;
	var000E = 0x019E;
	var000F = 0x001F;
labelFunc06D9_0408:
	if (!(var0000 > 0x0001)) goto labelFunc06D9_041E;
	var000E = 0x019E;
	var000F = 0x001D;
labelFunc06D9_041E:
	goto labelFunc06D9_0463;
labelFunc06D9_0421:
	if (!(var0000 == 0x0000)) goto labelFunc06D9_0437;
	var000E = 0x0190;
	var000F = 0x0001;
labelFunc06D9_0437:
	if (!(var0000 == 0x0001)) goto labelFunc06D9_044D;
	var000E = 0x019E;
	var000F = 0x001E;
labelFunc06D9_044D:
	if (!(var0000 > 0x0001)) goto labelFunc06D9_0463;
	var000E = 0x019E;
	var000F = 0x001C;
labelFunc06D9_0463:
	var0005 = Func09AB(var000E, var000F, 0x0000, true, var000D);
	goto labelFunc06D9_0371;
labelFunc06D9_0479:
	Func097F(var0013, "@Die, Avatar!@", 0x0003);
	Func097F(var0013, "@Nothing can stop me now!@", 0x0014);
	Func097F(var0013, "@The universe is mine!@", 0x0020);
	var0005 = UI_set_item_quality(item, 0x0009);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x0028);
labelFunc06D9_04BD:
	if (!(var0002 == 0x0009)) goto labelFunc06D9_05CE;
	var0010 = UI_find_nearby(item, 0x013E, 0x001E, 0x0000);
	enum();
labelFunc06D9_04D9:
	for (var0013 in var0010 with var0014 to var0015) attend labelFunc06D9_051D;
	var0003 = UI_get_object_position(var0013);
	Func09A3(var0013);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	goto labelFunc06D9_04D9;
labelFunc06D9_051D:
	var0016 = UI_find_nearby(item, 0x019E, 0x0014, 0x0000);
	enum();
labelFunc06D9_052F:
	for (var000C in var0016 with var0017 to var0018) attend labelFunc06D9_0573;
	var0003 = UI_get_object_position(var000C);
	Func09A3(var000C);
	UI_play_sound_effect(0x004C);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc06D9_052F;
labelFunc06D9_0573:
	var0016 = UI_find_nearby(item, 0x0190, 0x0014, 0x0000);
	enum();
labelFunc06D9_0585:
	for (var000C in var0016 with var0019 to var001A) attend labelFunc06D9_05C9;
	var0003 = UI_get_object_position(var000C);
	Func09A3(var000C);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc06D9_0585;
labelFunc06D9_05C9:
	UI_remove_item(item);
labelFunc06D9_05CE:
	return;
}


