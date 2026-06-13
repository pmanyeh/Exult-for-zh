#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func09B5 0x9B5 ();
extern void Func09B6 0x9B6 (var var0000, var var0001);

void Func0207 shape#(0x207) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0207_0027;
	if (!(Func0994() == 0x001F)) goto labelFunc0207_0013;
	abort;
labelFunc0207_0013:
	UI_si_path_run_usecode(0xFE9C, UI_get_object_position(item), 0x000D, item, 0x0207, true);
labelFunc0207_0027:
	if (!((event == 0x000D) || ((event == 0x000E) || (event == 0x0002)))) goto labelFunc0207_0189;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0000) || (UI_get_item_shape(item) == 0x0310))) goto labelFunc0207_005D;
	Func09B5();
	goto labelFunc0207_0189;
labelFunc0207_005D:
	var0001 = 0x01EF;
	var0002 = [0x0B97, 0x0020, 0x0000];
	if (!((Func0994() == 0x000D) && (gflags[0x0095] && (!gflags[0x02E2])))) goto labelFunc0207_010E;
	gflags[0x008B] = true;
	gflags[0x008C] = true;
	var0001 = 0xFFC0;
	var0002 = [0x00CB, 0x0097, 0x0006];
	if (!(!gflags[0x002A])) goto labelFunc0207_010E;
	var0003 = [0x00C8, 0x0097, 0x0006];
	var0004 = UI_create_new_object2(0x013E, var0003);
	if (!var0004) goto labelFunc0207_010E;
	var0005 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x6F]);
	UI_set_item_flag(var0004, 0x0012);
	UI_set_schedule_type(var0004, 0x000F);
	var0005 = UI_add_cont_items(var0004, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0012);
labelFunc0207_010E:
	if (!((Func0994() == 0x000E) && (gflags[0x00F0] && (!gflags[0x00E6])))) goto labelFunc0207_0180;
	gflags[0x0128] = true;
	var0001 = 0xFFF0;
	var0002 = [0x036C, 0x094B, 0x0000];
	UI_set_polymorph(0xFFDB, 0x00EF);
	var0006 = [0x037D, 0x095A, 0x0000];
	UI_move_object(0xFFDB, var0006);
	UI_set_new_schedules(0xFFDB, 0x0000, 0x000F, [var0006[0x0001], var0006[0x0002]]);
	UI_run_schedule(0xFFDB);
labelFunc0207_0180:
	Func09B6(var0001, var0002);
labelFunc0207_0189:
	return;
}


