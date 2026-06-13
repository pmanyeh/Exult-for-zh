#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func092B 0x92B ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func092C 0x92C (var var0000);

void Func0759 object#(0x759) ()
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

	var0000 = [0xFE9C, 0xFFFD, 0xFFFE, 0xFFFF];
	var0001 = UI_find_nearby(0xFE9C, 0xFFFF, 0x001E, 0x0004);
	if (!(UI_get_array_size(var0001) > 0x0001)) goto labelFunc0759_01B5;
	var0001 = Func0988(UI_get_npc_object(0xFE9C), var0001);
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	var0001 = Func0988(var0002, var0001);
	var0003 = UI_get_object_position(var0002);
	UI_play_sound_effect(0x0074);
	var0002->Func07D1();
	var0004 = 0x0000;
	if (!(UI_get_npc_number(var0002) < 0xFF01)) goto labelFunc0759_00ED;
	UI_sprite_effect(0x0028, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0009, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(var0002, [(0x05F0 + var0004), 0x078D, 0x0000]);
	var0004 = (var0004 + 0x0002);
	goto labelFunc0759_0155;
labelFunc0759_00ED:
	UI_sprite_effect(0x0029, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_get_item_flag(var0002, 0x0006)) goto labelFunc0759_013F;
	UI_remove_from_party(var0002);
labelFunc0759_013F:
	UI_remove_npc(var0002);
	Func09AC(var0002, 0x0000, 0x0000, 0x000F);
labelFunc0759_0155:
	if (!var0001) goto labelFunc0759_0195;
	var0005 = ["@He is gone!@", "@What hath happened?@", "@Is he dead?@", "@'Tis the storm!@", "@Help!@", "@Run!@"];
	Func097F(var0001[UI_get_random(UI_get_array_size(var0001))], var0005[UI_get_random(UI_get_array_size(var0005))], 0x0002);
labelFunc0759_0195:
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0759], (0x0007 + UI_get_random(0x000A)));
	abort;
labelFunc0759_01B5:
	if (!(!gflags[0x0007])) goto labelFunc0759_021A;
	var0003 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x002A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0007] = true;
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0759], 0x0005);
	abort;
labelFunc0759_021A:
	gflags[0x0007] = false;
	var0007 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFFFF) in var0007)) goto labelFunc0759_023A;
	UI_remove_from_party(0xFFFF);
labelFunc0759_023A:
	if (!(UI_get_npc_object(0xFFFE) in var0007)) goto labelFunc0759_024F;
	UI_remove_from_party(0xFFFE);
labelFunc0759_024F:
	if (!(UI_get_npc_object(0xFFFD) in var0007)) goto labelFunc0759_0264;
	UI_remove_from_party(0xFFFD);
labelFunc0759_0264:
	UI_set_schedule_type(0xFFFF, 0x000F);
	UI_remove_npc(0xFFFF);
	UI_set_new_schedules(0xFFFE, 0x0000, 0x000A, [0x025F, 0x0A33]);
	UI_run_schedule(0xFFFE);
	UI_set_new_schedules(0xFFFD, 0x0000, 0x001D, [0x0428, 0x09C7]);
	UI_move_object(0xFFFD, [0x0428, 0x09C7, 0x0000]);
	UI_run_schedule(0xFFFD);
	Func092B();
	var0008 = UI_get_object_position(0xFE9C);
	var0009 = [(var0008[0x0001] + 0x00B0), var0008[0x0002], var0008[0x0003]];
	UI_move_object(0xFE9C, var0009);
	var000A = ("@Yow!@" & ("" & ("@What happened?@" & ("@Where are my friends!@" & ("@Iolo?@" & ("@Shamino???@" & "@Dupre?!@"))))));
	Func094F(0xFE9C, var000A);
	UI_sprite_effect(0x000D, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0006] = true;
	if (!(!Func097D(0xFE9C, 0x0001, 0x0321, 0xFE99, 0xFE99))) goto labelFunc0759_036E;
	var0006 = UI_add_cont_items(0xFE9C, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0000);
labelFunc0759_036E:
	var000B = [0x025C, 0x00E7, 0x0326, 0x0303, 0x02F9, 0x022A, 0x0343, 0x0106, 0x0253, 0x025E, 0x01EA, 0x00B2, 0x0256, 0x024B, 0x0179, 0x0252, 0x017F, 0x029A];
	var000C = [0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99];
	var000D = [0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0xFE99, 0x0006, 0xFE99, 0xFE99, 0xFE99, 0xFE99];
	var000E = Func092C(0x0001);
	var000F = Func092C(0x0002);
	var0010 = Func092C(0x0003);
	var0011 = UI_get_array_size(var000B);
labelFunc0759_0447:
	if (!(var0011 > 0x0000)) goto labelFunc0759_0577;
	enum();
labelFunc0759_0452:
	for (var0014 in var0000 with var0012 to var0013) attend labelFunc0759_051C;
	var0015 = UI_remove_cont_items(var0014, 0x0001, var000B[var0011], var000C[var0011], var000D[var0011], 0x0000);
	var0016 = 0x0001;
	if (!(var000E[var0011] == 0x03B4)) goto labelFunc0759_049C;
	var0016 = UI_get_random(0x0064);
labelFunc0759_049C:
	if (!var0015) goto labelFunc0759_0519;
	var0017 = UI_count_objects(var0014, var000B[var0011], var000C[var0011], var000D[var0011]);
	var0006 = UI_remove_cont_items(var0014, var0017, var000B[var0011], var000C[var0011], var000D[var0011], 0x0000);
	var0006 = UI_add_cont_items(var0014, var0016, var000E[var0011], var000F[var0011], var0010[var0011], 0x0000);
	if (!(var0006 == 0x0000)) goto labelFunc0759_0512;
	goto labelFunc0759_056A;
	goto labelFunc0759_0519;
labelFunc0759_0512:
	var0015 = false;
	goto labelFunc0759_0523;
labelFunc0759_0519:
	goto labelFunc0759_0452;
labelFunc0759_051C:
	if (!(!var0015)) goto labelFunc0759_056A;
labelFunc0759_0523:
	var0006 = UI_add_cont_items(0xFE9C, var0016, var000E[var0011], var000F[var0011], var0010[var0011], 0x0000);
	if (!var0006) goto labelFunc0759_056A;
	var0006 = UI_add_party_items(var0016, var000E[var0011], var000F[var0011], var0010[var0011], 0x0000);
labelFunc0759_056A:
	var0011 = (var0011 - 0x0001);
	goto labelFunc0759_0447;
labelFunc0759_0577:
	return;
}


