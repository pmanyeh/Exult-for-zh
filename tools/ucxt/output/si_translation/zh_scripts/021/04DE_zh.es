#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04DE object#(0x4DE) ()
{
	if (!((event == 0x0007) && UI_get_item_flag(0xFF22, 0x001D))) goto labelFunc04DE_00A6;
	UI_clear_item_flag(0xFF22, 0x001D);
	UI_reduce_health(0xFF22, 0x0032, 0x0000);
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04DE_0044;
	UI_set_schedule_type(0xFF58, 0x001F);
	goto labelFunc04DE_009A;
labelFunc04DE_0044:
	UI_set_new_schedules(0xFF58, [0x0000, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x000C, 0x001A, 0x0004], [0x09A7, 0x0778, 0x08C7, 0x0714, 0x099F, 0x078F, 0x08BE, 0x0707, 0x08B6, 0x070C]);
	UI_set_schedule_type(0xFF58, 0x0003);
labelFunc04DE_009A:
	Func097F(0xFF58, "@I am saved!@", 0x0000);
labelFunc04DE_00A6:
	return;
}


