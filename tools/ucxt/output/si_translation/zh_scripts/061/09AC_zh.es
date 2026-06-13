#game "serpentisle"
// externs
extern var Func098D 0x98D ();

void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003)
{
	var var0004;
	var var0005;

	var0004 = false;
	if (!(var0001 < 0x0000)) goto labelFunc09AC_0077;
	var0004 = UI_get_object_position(var0000);
	if (!(var0004[0x0003] == 0x0000)) goto labelFunc09AC_003A;
	var0001 = var0004[0x0001];
	var0002 = var0004[0x0002];
	goto labelFunc09AC_0077;
labelFunc09AC_003A:
	UI_set_item_frame(var0000, 0x0000);
	UI_set_schedule_type(var0000, 0x000F);
	var0005 = Func098D();
	if (!(var0000 in var0005)) goto labelFunc09AC_0074;
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x097C, 0x0464]);
labelFunc09AC_0074:
	goto labelFunc09AC_00AE;
labelFunc09AC_0077:
	UI_set_new_schedules(var0000, 0x0000, var0003, [var0001, var0002]);
	if (!(!var0004)) goto labelFunc09AC_00A7;
	UI_move_object(var0000, [var0001, var0002, 0x0000]);
labelFunc09AC_00A7:
	UI_run_schedule(var0000);
labelFunc09AC_00AE:
	var0004 = false;
	return;
}


