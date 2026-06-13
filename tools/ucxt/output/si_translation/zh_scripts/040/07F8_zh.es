#game "serpentisle"
// externs
extern void Func08C4 0x8C4 ();
extern void Func08C3 0x8C3 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func08C2 0x8C2 ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func0939 0x939 (var var0000);
extern void Func093B 0x93B (var var0000);
extern void Func093A 0x93A (var var0000);

void Func07F8 object#(0x7F8) ()
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

	var0000 = UI_get_item_quality(item);
	if (!(event == 0x0003)) goto labelFunc07F8_0035;
	if (!(var0000 == 0x0001)) goto labelFunc07F8_001B;
	abort;
labelFunc07F8_001B:
	if (!(var0000 == 0x0004)) goto labelFunc07F8_0028;
	Func08C4();
labelFunc07F8_0028:
	if (!(var0000 == 0x0005)) goto labelFunc07F8_0035;
	Func08C3();
labelFunc07F8_0035:
	if (!((event == 0x000D) && (UI_get_npc_number(item) == 0xFE9C))) goto labelFunc07F8_0116;
	if (!(!gflags[0x0171])) goto labelFunc07F8_008E;
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0001 = UI_execute_usecode_array(0xFFC3, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x52, "@Bring in the defendant.@"]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x000F);
	goto labelFunc07F8_0115;
labelFunc07F8_008E:
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F8], 0x0014);
	var0001 = [0xFFC9, 0xFFCA, 0xFFCD, 0xFFC3, 0xFFCE, 0xFFCF, 0xFFC7, 0xFFC8, 0xFFCC, 0xFFD0, 0xFFD1, 0xFFCB, 0xFFC4, 0xFFC5, 0xFFD2, 0xFFC6];
	enum();
labelFunc07F8_00DC:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07F8_00F8;
	UI_remove_npc(var0004);
	UI_run_schedule(var0004);
	goto labelFunc07F8_00DC;
labelFunc07F8_00F8:
	Func09AC(0xFFCD, 0x03F4, 0x0663, 0x000F);
	UI_remove_npc(0xFFCA);
	UI_set_timer(0x0000);
labelFunc07F8_0115:
	abort;
labelFunc07F8_0116:
	if (!((event == 0x0002) && (item == Func09A0(0x0001, 0x0002)))) goto labelFunc07F8_01EC;
	var0001 = UI_get_party_list2();
	var0004 = false;
	enum();
labelFunc07F8_0136:
	for (var0007 in var0001 with var0005 to var0006) attend labelFunc07F8_0158;
	if (!(UI_get_schedule_type(var0007) == 0x000F)) goto labelFunc07F8_0155;
	var0004 = var0007;
labelFunc07F8_0155:
	goto labelFunc07F8_0136;
labelFunc07F8_0158:
	if (!var0004) goto labelFunc07F8_01EB;
	if (!gflags[0x0171]) goto labelFunc07F8_016D;
	var0001 = 0x0689;
	goto labelFunc07F8_0173;
labelFunc07F8_016D:
	var0001 = 0x066A;
labelFunc07F8_0173:
	var0007 = (0x0404 + UI_get_item_quality(Func09A0(0x0001, 0x0002)));
	UI_si_path_run_usecode(var0004, [var0007, var0001, 0x0000], 0x000D, Func09A0(0x0001, 0x0002), 0x07F8, true);
	var0001 = (UI_get_item_quality(Func09A0(0x0001, 0x0002)) + 0x0002);
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0002), var0001);
	var0001 = UI_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x07F8]);
labelFunc07F8_01EB:
	abort;
labelFunc07F8_01EC:
	if (!((event == 0x0002) && (var0000 == 0x00B3))) goto labelFunc07F8_03E0;
	var0001 = UI_part_of_day();
	if (!((var0001 < 0x0003) || (var0001 > 0x0006))) goto labelFunc07F8_024B;
	var0001 = Func0992(0x0001, 0x0000, 0x0000, true);
	if (!(var0001 == 0xFE9C)) goto labelFunc07F8_023E;
	Func097F(0xFE9C, "@I should come back later...@", 0x0000);
	goto labelFunc07F8_024A;
labelFunc07F8_023E:
	Func097F(var0001, "@Let's come back later...@", 0x0000);
labelFunc07F8_024A:
	abort;
labelFunc07F8_024B:
	if (!(gflags[0x0172] && (UI_get_timer(0x0000) < 0x000C))) goto labelFunc07F8_0293;
	var0001 = Func0992(0x0001, 0x0000, 0x0000, true);
	if (!(var0001 == 0xFE9C)) goto labelFunc07F8_0286;
	Func097F(0xFE9C, "@It isn't time yet...@", 0x0000);
	goto labelFunc07F8_0292;
labelFunc07F8_0286:
	Func097F(var0001, "@We've come too early...@", 0x0000);
labelFunc07F8_0292:
	abort;
labelFunc07F8_0293:
	UI_play_music(0x0013, Func09A0(0x0005, 0x0001));
	gflags[0x0171] = false;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_close_gumps();
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x00F8);
	var0001 = (UI_find_nearby(item, 0x01B0, 0x000A, 0x0000) & UI_find_nearby(item, 0x010E, 0x000A, 0x0000));
	enum();
labelFunc07F8_02ED:
	for (var0007 in var0001 with var0008 to var0009) attend labelFunc07F8_0312;
	if (!(UI_get_item_quality(var0007) == 0x00B3)) goto labelFunc07F8_030F;
	Func0907(var0007, 0x0000);
labelFunc07F8_030F:
	goto labelFunc07F8_02ED;
labelFunc07F8_0312:
	var0001 = UI_get_party_list2();
	enum();
labelFunc07F8_031A:
	for (var0007 in var0001 with var000A to var000B) attend labelFunc07F8_0332;
	UI_set_schedule_type(var0007, 0x000F);
	goto labelFunc07F8_031A;
labelFunc07F8_0332:
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0002), 0x0000);
	var0001 = UI_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x07F8]);
	UI_si_path_run_usecode(0xFE9C, [0x0407, 0x0668, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x07F8, false);
	Func08C2();
	if (!gflags[0x0170]) goto labelFunc07F8_03C0;
	var000C = Func0992(0x0001, "@The trial awaits!@", "@The trial awaits our presence.@", true);
	Func097F(0xFFD1, "@It's the stranger...@", 0x0016);
	Func097F(0xFFC8, "@Now the trial begins!@", 0x001C);
	Func097F(0xFFD2, "@Hush!@", 0x0023);
	goto labelFunc07F8_03DF;
labelFunc07F8_03C0:
	var0001 = "@Let justice be swift!@";
	var000C = Func0992(0x0001, 0x0000, 0x0000, true);
	Func094F(var000C, var0001);
labelFunc07F8_03DF:
	abort;
labelFunc07F8_03E0:
	if (!((event == 0x000D) && (item == Func09A0(0x0001, 0x0002)))) goto labelFunc07F8_03F5;
	abort;
labelFunc07F8_03F5:
	if (!((event == 0x0002) || (event == 0x000D))) goto labelFunc07F8_047A;
	var000D = UI_get_item_quality(Func09A0(0x0001, 0x0001));
	if (!(var000D == 0x00FD)) goto labelFunc07F8_0433;
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0014);
	goto labelFunc07F8_044A;
labelFunc07F8_0433:
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0001), (var000D + 0x0001));
labelFunc07F8_044A:
	if (!(var000D > 0x00F7)) goto labelFunc07F8_045B;
	Func0939(var000D);
	abort;
labelFunc07F8_045B:
	if (!((var000D > 0x0013) && (var000D < 0x001E))) goto labelFunc07F8_0474;
	Func093B(var000D);
	abort;
labelFunc07F8_0474:
	Func093A(var000D);
labelFunc07F8_047A:
	return;
}


