#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0924 0x924 (var var0000, var var0001);

void Func06FF object#(0x6FF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(!gflags[0x0208])) goto labelFunc06FF_0008;
	abort;
labelFunc06FF_0008:
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0045)) goto labelFunc06FF_002E;
	if (!(!(gflags[0x0209] && (gflags[0x020A] && (gflags[0x020B] && gflags[0x020C]))))) goto labelFunc06FF_002E;
	abort;
labelFunc06FF_002E:
	var0001 = ("@Uh oh...@" & ("@Something is coming!@" & ("@I hear something...@" & ("@What was that?@" & ("@Oh, no!@" & "@Hark!@")))));
	var0002 = Func0992(0x0001, var0001[UI_get_random(UI_get_array_size(var0001))], var0001[UI_get_random(UI_get_array_size(var0001))], true);
	var0001 = UI_find_nearby(item, 0x036C, 0x0064, 0x0000);
	enum();
labelFunc06FF_0080:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc06FF_00A5;
	if (!(UI_get_item_quality(var0005) == var0000)) goto labelFunc06FF_00A2;
	Func0924(var0005, 0x0001);
labelFunc06FF_00A2:
	goto labelFunc06FF_0080;
labelFunc06FF_00A5:
	var0001 = false;
	if (!(var0000 == 0x0041)) goto labelFunc06FF_00B9;
	var0001 = 0xFFA4;
labelFunc06FF_00B9:
	if (!(var0000 == 0x0042)) goto labelFunc06FF_00C9;
	var0001 = 0xFFAB;
labelFunc06FF_00C9:
	if (!(var0000 == 0x0043)) goto labelFunc06FF_00D9;
	var0001 = 0xFFA9;
labelFunc06FF_00D9:
	if (!(var0000 == 0x0044)) goto labelFunc06FF_00E9;
	var0001 = 0xFFA3;
labelFunc06FF_00E9:
	if (!var0001) goto labelFunc06FF_014B;
	UI_set_new_schedules(var0001, 0x0000, 0x0000, [0x0733, 0x0A79]);
	var0006 = UI_get_object_position(var0001);
	UI_si_path_run_usecode(var0001, [var0006[0x0001], (var0006[0x0002] + 0x000F), 0x0000], 0x000D, UI_get_npc_object(var0001), 0x0455, true);
	UI_set_path_failure(0x0455, UI_get_npc_object(var0001), 0x000E);
labelFunc06FF_014B:
	UI_remove_item(item);
	return;
}


