#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0346 shape#(0x346) ()
{
	var var0000;
	var var0001;

	UI_close_gumps();
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc0346_009C;
	if (!Func0942(0xFFDB)) goto labelFunc0346_008D;
	if (!(UI_get_distance(0xFE9C, 0xFFDB) < 0x0003)) goto labelFunc0346_0058;
	var0000 = UI_set_last_created(item);
	var0001 = UI_get_object_position(0xFFDB);
	var0000 = UI_update_last_created(var0001);
	UI_set_item_frame(item, 0x0001);
	UI_remove_npc(0xFFDB);
	goto labelFunc0346_008A;
labelFunc0346_0058:
	var0000 = UI_set_last_created(item);
	var0000 = UI_give_last_created(0xFE9C);
	UI_set_schedule_type(0xFFDB, 0x000A);
	Func090D(0xFFDB, 0xFFFF, 0xFFFF, 0xFFFD, 0x0346, item, 0x0001);
labelFunc0346_008A:
	goto labelFunc0346_0099;
labelFunc0346_008D:
	Func097F(0xFE9C, "@Ale? Where art thou?@", 0x0000);
labelFunc0346_0099:
	goto labelFunc0346_0108;
labelFunc0346_009C:
	UI_set_item_frame(item, 0x0000);
	var0001 = UI_get_object_position(item);
	var0001[0x0001] = (var0001[0x0001] - 0x0001);
	var0001[0x0002] = (var0001[0x0002] - 0x0001);
	UI_move_object(0xFFDB, [var0001[0x0001], var0001[0x0002], 0x0000]);
	UI_set_new_schedules(0xFFDB, 0x0000, 0x0011, [var0001[0x0001], var0001[0x0002]]);
	UI_run_schedule(0xFFDB);
labelFunc0346_0108:
	return;
}


