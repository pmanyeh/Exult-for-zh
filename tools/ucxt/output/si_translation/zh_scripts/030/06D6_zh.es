#game "serpentisle"
// externs
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func06D6 object#(0x6D6) ()
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
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var var002B;
	var var002C;
	var var002D;
	var var002E;

	if (!(event == 0x0003)) goto labelFunc06D6_0B4B;
	if (!gflags[0x0004]) goto labelFunc06D6_0815;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0001)) goto labelFunc06D6_0815;
	var0001 = UI_find_nearby(item, 0x03C2, 0x0050, 0x0000);
	enum();
labelFunc06D6_0032:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06D6_0262;
	var0005 = UI_get_object_position(var0004);
	if (!((var0005[0x0001] == 0x03E7) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_008A;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_008A;
	UI_set_item_frame(var0006, 0x0004);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_008A:
	if (!((var0005[0x0001] == 0x03EB) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_00CD;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_00CD;
	UI_set_item_frame(var0006, 0x0003);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_00CD:
	if (!((var0005[0x0001] == 0x03EF) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_0110;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_0110;
	UI_set_item_frame(var0006, 0x0000);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0110:
	if (!((var0005[0x0001] == 0x03EF) && (var0005[0x0002] == 0x0A0B))) goto labelFunc06D6_0153;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_0153;
	UI_set_item_frame(var0006, 0x0002);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0153:
	if (!((var0005[0x0001] == 0x03D3) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_0196;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_0196;
	UI_set_item_frame(var0006, 0x0004);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0196:
	if (!((var0005[0x0001] == 0x03D7) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_01D9;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_01D9;
	UI_set_item_frame(var0006, 0x0006);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_01D9:
	if (!((var0005[0x0001] == 0x03DB) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_021C;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_021C;
	UI_set_item_frame(var0006, 0x0003);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_021C:
	if (!((var0005[0x0001] == 0x03DF) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_025F;
	UI_remove_item(var0004);
	var0006 = UI_create_new_object(0x00DF);
	if (!var0006) goto labelFunc06D6_025F;
	UI_set_item_frame(var0006, 0x0006);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_025F:
	goto labelFunc06D6_0032;
labelFunc06D6_0262:
	var0008 = UI_find_nearby(item, 0x038D, 0x0050, 0x0000);
	enum();
labelFunc06D6_0274:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc06D6_04E7;
	var0005 = UI_get_object_position(var000B);
	if (!((var0005[0x0001] == 0x03E8) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_02CC;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_02CC;
	UI_set_item_frame(var000C, 0x0008);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_02CC:
	if (!((var0005[0x0001] == 0x03EA) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_030F;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_030F;
	UI_set_item_frame(var000C, 0x000D);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_030F:
	if (!((var0005[0x0001] == 0x03EC) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_0352;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_0352;
	UI_set_item_frame(var000C, 0x0009);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0352:
	if (!((var0005[0x0001] == 0x03EE) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_0395;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_0395;
	UI_set_item_frame(var000C, 0x000A);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0395:
	if (!((var0005[0x0001] == 0x03D2) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_03D8;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_03D8;
	UI_set_item_frame(var000C, 0x000A);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_03D8:
	if (!((var0005[0x0001] == 0x03D4) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_041B;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_041B;
	UI_set_item_frame(var000C, 0x000D);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_041B:
	if (!((var0005[0x0001] == 0x03DA) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_045E;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_045E;
	UI_set_item_frame(var000C, 0x000D);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_045E:
	if (!((var0005[0x0001] == 0x03DC) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_04A1;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_04A1;
	UI_set_item_frame(var000C, 0x0008);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_04A1:
	if (!((var0005[0x0001] == 0x03DE) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_04E4;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038D);
	if (!var000C) goto labelFunc06D6_04E4;
	UI_set_item_frame(var000C, 0x000D);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_04E4:
	goto labelFunc06D6_0274;
labelFunc06D6_04E7:
	var0008 = UI_find_nearby(item, 0x038E, 0x0050, 0x0000);
	enum();
labelFunc06D6_04F9:
	for (var000B in var0008 with var000D to var000E) attend labelFunc06D6_0597;
	var0005 = UI_get_object_position(var000B);
	if (!((var0005[0x0001] == 0x03EF) && (var0005[0x0002] == 0x0A0D))) goto labelFunc06D6_0551;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038E);
	if (!var000C) goto labelFunc06D6_0551;
	UI_set_item_frame(var000C, 0x000C);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0551:
	if (!((var0005[0x0001] == 0x03EF) && (var0005[0x0002] == 0x0A0F))) goto labelFunc06D6_0594;
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x038E);
	if (!var000C) goto labelFunc06D6_0594;
	var0007 = UI_update_last_created(var0005);
	UI_set_item_frame(var000C, 0x0009);
labelFunc06D6_0594:
	goto labelFunc06D6_04F9;
labelFunc06D6_0597:
	var000F = 0x0000;
	var0010 = UI_find_nearby(item, 0x02A3, 0x000A, 0x0000);
	enum();
labelFunc06D6_05AF:
	for (var0013 in var0010 with var0011 to var0012) attend labelFunc06D6_05D1;
	if (!(UI_get_item_quality(var0013) == 0x0001)) goto labelFunc06D6_05CE;
	var000F = 0x0001;
labelFunc06D6_05CE:
	goto labelFunc06D6_05AF;
labelFunc06D6_05D1:
	if (!(var000F == 0x0000)) goto labelFunc06D6_0815;
	var0007 = Func09AB(0x02A3, 0x0000, 0x0001, false, item);
	var0014 = UI_find_nearby(item, 0x01B0, 0x0050, 0x0000);
	enum();
labelFunc06D6_05FE:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc06D6_0613;
	UI_remove_item(var0017);
	goto labelFunc06D6_05FE;
labelFunc06D6_0613:
	var0014 = UI_find_nearby(item, 0x0178, 0x0050, 0x0000);
	enum();
labelFunc06D6_0625:
	for (var0017 in var0014 with var0018 to var0019) attend labelFunc06D6_063A;
	UI_remove_item(var0017);
	goto labelFunc06D6_0625;
labelFunc06D6_063A:
	var001A = 0x0001;
	var001B = [0x03D0, 0x03D2, 0x03D4, 0x03D2, 0x03D8, 0x03DA, 0x03DC, 0x03DE, 0x03DA, 0x03DC, 0x03D6, 0x03E3, 0x03F5, 0x03F5, 0x03F5, 0x03DB, 0x03D2, 0x03E8, 0x03EA, 0x03EC, 0x03EC, 0x03EA];
	var001C = [0x0A11, 0x0A11, 0x0A11, 0x0A13, 0x0A11, 0x0A11, 0x0A11, 0x0A11, 0x0A13, 0x0A13, 0x0A15, 0x0A13, 0x0A0E, 0x0A14, 0x0A16, 0x0A10, 0x0A10, 0x0A11, 0x0A11, 0x0A11, 0x0A13, 0x0A13];
	var001D = [0x0003, 0x0005, 0x0004, 0x0001, 0x0003, 0x0005, 0x0005, 0x0004, 0x0001, 0x0001, 0x0000, 0x0000, 0x0000, 0x0002, 0x0001, 0x0004, 0x0006, 0x0003, 0x0005, 0x0005, 0x0001, 0x0001];
labelFunc06D6_0718:
	if (!(var001A < 0x0017)) goto labelFunc06D6_076B;
	var001E = UI_create_new_object(0x00E0);
	if (!var001E) goto labelFunc06D6_075E;
	UI_set_item_frame(var001E, var001D[var001A]);
	var0005 = [var001B[var001A], var001C[var001A], 0x0000];
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_075E:
	var001A = (var001A + 0x0001);
	goto labelFunc06D6_0718;
labelFunc06D6_076B:
	var001A = 0x0001;
	var001B = [0x03F5, 0x03F4, 0x03EB, 0x03E2, 0x03DC, 0x03D9, 0x03D2];
	var001C = [0x0A15, 0x0A0D, 0x0A10, 0x0A12, 0x0A10, 0x0A10, 0x0A10];
	var001D = [0x0005, 0x0004, 0x0005, 0x0006, 0x0005, 0x0006, 0x0005];
labelFunc06D6_07C2:
	if (!(var001A < 0x0008)) goto labelFunc06D6_0815;
	var001E = UI_create_new_object(0x0339);
	if (!var001E) goto labelFunc06D6_0808;
	UI_set_item_frame(var001E, var001D[var001A]);
	var0005 = [var001B[var001A], var001C[var001A], 0x0000];
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0808:
	var001A = (var001A + 0x0001);
	goto labelFunc06D6_07C2;
labelFunc06D6_0815:
	if (!(var0000 == 0x0002)) goto labelFunc06D6_0B4B;
	var001F = UI_get_object_position(item);
	var001A = 0x0000;
labelFunc06D6_082D:
	if (!(var001A < 0x0002)) goto labelFunc06D6_08EC;
	var0020 = UI_die_roll(0x0001, 0x0028);
	var0020 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0022 = UI_die_roll(0x0000, 0x000F);
	var0023 = UI_create_new_object(0x0222);
	if (!var0023) goto labelFunc06D6_08E9;
	UI_set_item_frame(var0023, var0022);
	var0005 = [((var001F[0x0001] - 0x0028) + (var0020 * 0x0002)), ((var001F[0x0002] - 0x0028) + (var0021 * 0x0002)), 0x0000];
	var0024 = UI_is_not_blocked(var0005, 0x0222, var0022);
	if (!var0024) goto labelFunc06D6_08E9;
	var0007 = UI_update_last_created(var0005);
	var001A = (var001A + 0x0001);
labelFunc06D6_08E9:
	goto labelFunc06D6_082D;
labelFunc06D6_08EC:
	var001A = 0x0000;
labelFunc06D6_08F2:
	if (!(var001A < 0x0002)) goto labelFunc06D6_09B1;
	var0020 = UI_die_roll(0x0001, 0x0028);
	var0025 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0022 = UI_die_roll(0x0000, 0x001F);
	var0023 = UI_create_new_object(0x019F);
	if (!var0023) goto labelFunc06D6_09AE;
	UI_set_item_frame(var0023, var0022);
	var0005 = [((var001F[0x0001] - 0x0028) + (var0020 * 0x0002)), ((var001F[0x0002] - 0x0028) + (var0021 * 0x0002)), 0x0000];
	var0024 = UI_is_not_blocked(var0005, 0x019F, var0022);
	if (!var0024) goto labelFunc06D6_09AE;
	var0007 = UI_update_last_created(var0005);
	var001A = (var001A + 0x0001);
labelFunc06D6_09AE:
	goto labelFunc06D6_08F2;
labelFunc06D6_09B1:
	var001A = 0x0000;
labelFunc06D6_09B7:
	if (!(var001A < 0x0002)) goto labelFunc06D6_0A5F;
	var0020 = UI_die_roll(0x0001, 0x0028);
	var0025 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0021 = UI_die_roll(0x0001, 0x0028);
	var0023 = UI_create_new_object(0x00E0);
	if (!var0023) goto labelFunc06D6_0A5C;
	var0005 = [((var001F[0x0001] - 0x0028) + (var0020 * 0x0002)), ((var001F[0x0002] - 0x0028) + (var0021 * 0x0002)), 0x0000];
	var0024 = UI_is_not_blocked(var0005, 0x00E0, 0x0000);
	if (!var0024) goto labelFunc06D6_0A5C;
	var0007 = UI_update_last_created(var0005);
	var001A = (var001A + 0x0001);
labelFunc06D6_0A5C:
	goto labelFunc06D6_09B7;
labelFunc06D6_0A5F:
	var0026 = UI_find_nearby_avatar(0x012C);
	enum();
labelFunc06D6_0A6A:
	for (var0007 in var0026 with var0027 to var0028) attend labelFunc06D6_0A7F;
	UI_remove_item(var0007);
	goto labelFunc06D6_0A6A;
labelFunc06D6_0A7F:
	var0029 = UI_find_nearby(item, 0x0369, 0x0050, 0x0000);
	enum();
labelFunc06D6_0A91:
	for (var002C in var0029 with var002A to var002B) attend labelFunc06D6_0AF2;
	var0005 = UI_get_object_position(var002C);
	UI_remove_item(var002C);
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0002)) goto labelFunc06D6_0AEF;
	var0022 = UI_die_roll(0x0014, 0x0017);
	var002D = UI_create_new_object(0x0369);
	if (!var002D) goto labelFunc06D6_0AEF;
	UI_set_item_frame(var002D, var0022);
	var0007 = UI_update_last_created(var0005);
labelFunc06D6_0AEF:
	goto labelFunc06D6_0A91;
labelFunc06D6_0AF2:
	var002E = UI_die_roll(0x0000, 0x0063);
	if (!(var002E < 0x0021)) goto labelFunc06D6_0B14;
	var0007 = UI_summon(0x012E, item);
labelFunc06D6_0B14:
	if (!((var002E > 0x0021) && (var002E < 0x0042))) goto labelFunc06D6_0B31;
	var0007 = UI_summon(0x0219, item);
labelFunc06D6_0B31:
	if (!(var002E > 0x0042)) goto labelFunc06D6_0B46;
	var0007 = UI_summon(0x02F2, item);
labelFunc06D6_0B46:
	UI_remove_item(item);
labelFunc06D6_0B4B:
	return;
}


