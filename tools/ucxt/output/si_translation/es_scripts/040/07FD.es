#game "serpentisle"
// externs
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func0937 0x937 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0930 0x930 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func07FD object#(0x7FD) ()
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

	if (!(event == 0x0008)) goto labelFunc07FD_001F;
	gflags[0x0007] = true;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FD], 0x0001);
labelFunc07FD_001F:
	if (!(event == 0x000A)) goto labelFunc07FD_003E;
	gflags[0x0008] = true;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FD], 0x0001);
labelFunc07FD_003E:
	if (!(event == 0x000B)) goto labelFunc07FD_005D;
	gflags[0x000A] = true;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FD], 0x0001);
labelFunc07FD_005D:
	if (!(event == 0x0002)) goto labelFunc07FD_0203;
	if (!(gflags[0x0007] && (!gflags[0x0009]))) goto labelFunc07FD_0105;
	gflags[0x0007] = false;
	UI_set_camera(item);
	var0001 = UI_find_nearby(item, 0x036F, 0x001E, 0x0000);
	enum();
labelFunc07FD_008B:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07FD_00C9;
	var0005 = UI_get_object_position(var0004);
	if (!((var0005[0x0001] == 0x03F4) && ((var0005[0x0002] == 0x0A7F) && (var0005[0x0003] == 0x0006)))) goto labelFunc07FD_00C6;
	goto labelFunc07FD_00D0;
labelFunc07FD_00C6:
	goto labelFunc07FD_008B;
labelFunc07FD_00C9:
	Func092F(item, 0x0002);
labelFunc07FD_00D0:
	var0006 = [0xFFFE, 0xFFFD, 0xFFFF];
	var0007 = [0x0000, 0x0000, 0x0000];
	Func0937(item, var0004, var0006, var0007, 0x0000, 0x07FD, item, 0x000A);
labelFunc07FD_0105:
	if (!gflags[0x0008]) goto labelFunc07FD_015F;
	gflags[0x0008] = false;
	var0008 = Func0930(item, 0x0178, 0x0023);
	if (!(!var0008)) goto labelFunc07FD_012A;
	Func092F(item, 0x0003);
labelFunc07FD_012A:
	var0006 = [0x0003, 0x0003, 0x0003];
	var0007 = [0xFFFF, 0xFFFE, 0x0000];
	Func0937(item, var0008, var0006, var0007, 0x0000, 0x07F9, item, 0x000B);
labelFunc07FD_015F:
	if (!gflags[0x0009]) goto labelFunc07FD_016E;
	gflags[0x000A] = true;
	Func092E(item);
	return;
labelFunc07FD_016E:
	if (!gflags[0x000A]) goto labelFunc07FD_0203;
	gflags[0x000A] = false;
	var0008 = Func0930(item, 0x0178, 0x001E);
	if (!(!var0008)) goto labelFunc07FD_0193;
	Func092F(item, 0x0013);
labelFunc07FD_0193:
	var0009 = UI_find_nearby(0xFE9C, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc07FD_01A7:
	for (var000C in var0009 with var000A to var000B) attend labelFunc07FD_01C6;
	if (!(UI_get_npc_id(var000C) == 0x0009)) goto labelFunc07FD_01C3;
	goto labelFunc07FD_01CD;
labelFunc07FD_01C3:
	goto labelFunc07FD_01A7;
labelFunc07FD_01C6:
	Func092F(item, 0x0016);
labelFunc07FD_01CD:
	var0005 = UI_get_object_position(var0008);
	UI_si_path_run_usecode(var000C, [(var0005[0x0001] + 0x0002), (var0005[0x0002] - 0x0004), var0005[0x0003]], 0x000A, item, 0x07F9, true);
labelFunc07FD_0203:
	if (!(event == 0x000E)) goto labelFunc07FD_0212;
	Func092F(item, 0x0015);
labelFunc07FD_0212:
	return;
}


