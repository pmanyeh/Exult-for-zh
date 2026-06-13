#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0961 0x961 (var var0000, var var0001);
extern void Func0963 0x963 (var var0000, var var0001);
extern void Func0960 0x960 (var var0000, var var0001);
extern var Func0932 0x932 (var var0000);
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0931 0x931 (var var0000)
{
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

	Func09AA();
	var0001 = UI_set_npc_prop(var0000, 0x0008, UI_die_roll(0x0001, 0x0032));
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	gflags[0x0085] = false;
	if (!(UI_get_npc_id(0xFF6A) && gflags[0x0084])) goto labelFunc0931_0087;
	if (!(Func095C(var0000, 0x0001) < 0x001E)) goto labelFunc0931_0055;
	Func0961(var0000, 0x0001);
labelFunc0931_0055:
	if (!(Func095C(var0000, 0x0004) < 0x001E)) goto labelFunc0931_006E;
	Func0963(var0000, 0x0001);
labelFunc0931_006E:
	if (!(Func095C(var0000, 0x0004) < 0x001E)) goto labelFunc0931_0087;
	Func0963(var0000, 0x0001);
labelFunc0931_0087:
	if (!(UI_get_npc_id(0xFFC1) && gflags[0x0084])) goto labelFunc0931_00E0;
	if (!(Func095C(var0000, 0x0000) < 0x001E)) goto labelFunc0931_00AE;
	Func0960(var0000, 0x0001);
labelFunc0931_00AE:
	if (!(Func095C(var0000, 0x0000) < 0x001E)) goto labelFunc0931_00C7;
	Func0960(var0000, 0x0001);
labelFunc0931_00C7:
	if (!(Func095C(var0000, 0x0004) < 0x001E)) goto labelFunc0931_00E0;
	Func0963(var0000, 0x0001);
labelFunc0931_00E0:
	if (!(UI_get_npc_id(0xFFB6) && gflags[0x0084])) goto labelFunc0931_0139;
	if (!(Func095C(var0000, 0x0001) < 0x001E)) goto labelFunc0931_0107;
	Func0961(var0000, 0x0001);
labelFunc0931_0107:
	if (!(Func095C(var0000, 0x0001) < 0x001E)) goto labelFunc0931_0120;
	Func0961(var0000, 0x0001);
labelFunc0931_0120:
	if (!(Func095C(var0000, 0x0004) < 0x001E)) goto labelFunc0931_0139;
	Func0963(var0000, 0x0001);
labelFunc0931_0139:
	if (!(UI_get_npc_id(0xFFB9) && gflags[0x0084])) goto labelFunc0931_0192;
	if (!(Func095C(var0000, 0x0000) < 0x001E)) goto labelFunc0931_0160;
	Func0960(var0000, 0x0001);
labelFunc0931_0160:
	if (!(Func095C(var0000, 0x0000) < 0x001E)) goto labelFunc0931_0179;
	Func0960(var0000, 0x0001);
labelFunc0931_0179:
	if (!(Func095C(var0000, 0x0000) < 0x001E)) goto labelFunc0931_0192;
	Func0960(var0000, 0x0001);
labelFunc0931_0192:
	var0002 = [0xFFC1, 0xFFB1, 0xFFB6, 0xFFB9, 0xFF6A];
	enum();
labelFunc0931_01A8:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0931_01DA;
	if (!Func0932(var0005)) goto labelFunc0931_01D7;
	UI_clear_item_flag(var0005, 0x0004);
	UI_run_schedule(var0005);
	UI_set_npc_id(var0005, 0x0000);
labelFunc0931_01D7:
	goto labelFunc0931_01A8;
labelFunc0931_01DA:
	gflags[0x0084] = false;
	if (!(!(UI_get_npc_object(0xFE9C) == var0000))) goto labelFunc0931_01F7;
	UI_clear_item_flag(var0000, 0x001D);
labelFunc0931_01F7:
	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"Very good, very good,\" he says as he returns your equipment.");
	say();
	UI_set_alignment(var0000, 0x0001);
	var0006 = UI_find_nearby(var0000, 0x020A, 0x002D, 0x0000);
	enum();
labelFunc0931_0223:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0931_0248;
	if (!(UI_get_item_quality(var0009) == 0x00EB)) goto labelFunc0931_0245;
	var000A = var0009;
	goto labelFunc0931_024F;
labelFunc0931_0245:
	goto labelFunc0931_0223;
labelFunc0931_0248:
	message("\"Well, I seem to have misplaced thy belongings. Mine apologies. As a favor to thee, I shall let thee keep what thou dost have right now.\"");
	say();
	goto labelFunc0931_031E;
labelFunc0931_024F:
	var000B = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0931_0263:
	for (var000E in var000B with var000C to var000D) attend labelFunc0931_0293;
	if (!(!((UI_get_item_shape(var000E) == 0x01E6) || (UI_get_item_shape(var000E) == 0x025F)))) goto labelFunc0931_0290;
	UI_remove_item(var000E);
labelFunc0931_0290:
	goto labelFunc0931_0263;
labelFunc0931_0293:
	var000F = 0x0000;
	var000B = UI_get_cont_items(var000A, 0xFE99, 0xFE99, 0xFE99);
labelFunc0931_02AC:
	if (!(var000F < 0x0002)) goto labelFunc0931_031E;
	enum();
labelFunc0931_02B7:
	for (var000E in var000B with var0010 to var0011) attend labelFunc0931_02FE;
	if (!(Func09A6(var000E) || (var000F == 0x0001))) goto labelFunc0931_02FB;
	if (!(!UI_set_last_created(var000E))) goto labelFunc0931_02E7;
	Func092F(var0000, 0x000D);
labelFunc0931_02E7:
	if (!(!UI_give_last_created(var0000))) goto labelFunc0931_02FB;
	Func092F(var0000, 0x000E);
labelFunc0931_02FB:
	goto labelFunc0931_02B7;
labelFunc0931_02FE:
	var000F = (var000F + 0x0001);
	var000B = UI_get_cont_items(var000A, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0931_02AC;
labelFunc0931_031E:
	var0012 = Func09A0(0x0001, 0x0002);
	var0013 = UI_get_item_quality(var0012);
	if (!var0013) goto labelFunc0931_03B0;
	var0014 = (UI_get_item_quality(var0012) - UI_get_npc_prop(0xFE9C, 0x0003));
	var0001 = UI_set_npc_prop(0xFE9C, 0x0003, var0014);
	var0001 = UI_set_item_quality(var0012, 0x0000);
	var0002 = UI_find_nearby(0xFE9C, 0xFFFF, 0x002D, 0x0004);
	enum();
labelFunc0931_0380:
	for (var0005 in var0002 with var0015 to var0016) attend labelFunc0931_03AD;
	if (!(UI_get_npc_id(var0005) == 0x000D)) goto labelFunc0931_03AA;
	UI_add_to_party(var0005);
	UI_set_npc_id(var0005, 0x0000);
labelFunc0931_03AA:
	goto labelFunc0931_0380;
labelFunc0931_03AD:
	goto labelFunc0931_03E6;
labelFunc0931_03B0:
	var0014 = (UI_get_npc_id(var0000) - UI_get_npc_prop(var0000, 0x0003));
	var0001 = UI_set_npc_prop(var0000, 0x0003, var0014);
	UI_set_npc_id(var0000, 0x0000);
	UI_add_to_party(var0000);
labelFunc0931_03E6:
	if (!(!(var0000 == UI_get_npc_object(0xFE9C)))) goto labelFunc0931_040A;
	UI_set_camera(UI_get_npc_object(0xFE9C));
	UI_set_schedule_type(var0000, 0x001F);
labelFunc0931_040A:
	var0017 = UI_find_nearby(var0000, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc0931_041E:
	for (var001A in var0017 with var0018 to var0019) attend labelFunc0931_043D;
	if (!(UI_get_npc_id(var001A) == 0x0009)) goto labelFunc0931_043A;
	goto labelFunc0931_0446;
labelFunc0931_043A:
	goto labelFunc0931_041E;
labelFunc0931_043D:
	Func092F(var0000, 0x000F);
labelFunc0931_0446:
	UI_si_path_run_usecode(var001A, [0x03FB, 0x0A77, 0x0006], 0x000D, var001A, 0x00E4, true);
	return;
}


