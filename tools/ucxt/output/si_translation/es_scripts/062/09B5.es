#game "serpentisle"
// externs
extern void Func09B6 0x9B6 (var var0000, var var0001);

void Func09B5 0x9B5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = 0x01EF;
	var0001 = [0x0B97, 0x0020, 0x0000];
	if (!((!gflags[0x0004]) && (!gflags[0x0250]))) goto labelFunc09B5_00D7;
	if (!(!gflags[0x024F])) goto labelFunc09B5_00BE;
	var0002 = [0x0931, 0x0190, 0x0000];
	UI_set_new_schedules(0xFF80, 0x0000, 0x000F, var0002);
	UI_set_schedule_type(0xFF80, 0x000F);
	UI_move_object(0xFF80, var0002);
	var0003 = [0x092B, 0x017E, 0x0000];
	UI_set_new_schedules(0xFF81, 0x0000, 0x000F, var0003);
	UI_set_schedule_type(0xFF81, 0x000F);
	UI_move_object(0xFF81, var0003);
	var0004 = [0x0921, 0x0176, 0x0000];
	var0005 = UI_create_new_object2(0x0373, var0004);
	UI_set_npc_id(var0005, 0x0002);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc09B5_00BE:
	gflags[0x024F] = true;
	var0000 = 0x013E;
	var0001 = [0x0927, 0x01AD, 0x0000];
labelFunc09B5_00D7:
	if (!(gflags[0x0004] && ((!gflags[0x022D]) && (!(gflags[0x00D4] || (gflags[0x00D5] || gflags[0x00D3])))))) goto labelFunc09B5_014E;
	gflags[0x022C] = true;
	var0000 = 0xFEF8;
	var0001 = [0x09D9, 0x004E, 0x0000];
	var0006 = [0x09AC, 0x006E, 0x0000];
	UI_set_schedule_type(0xFEFA, 0x000F);
	UI_move_object(0xFEFA, var0006);
	var0007 = [0x099F, 0x0073, 0x0000];
	UI_set_schedule_type(0xFEF9, 0x000F);
	UI_move_object(0xFEF9, var0007);
labelFunc09B5_014E:
	Func09B6(var0000, var0001);
	return;
}


