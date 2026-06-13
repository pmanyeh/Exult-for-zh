#game "serpentisle"
void Func0734 object#(0x734) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0003) && (gflags[0x0004] == false))) goto labelFunc0734_0195;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_create_new_object2(0x017D, var0001);
	UI_set_alignment(var0002, 0x0000);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x023E, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x0239, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x024B, 0x0000, 0x0000, true);
	if (!(UI_die_roll(0x0001, 0x000A) > 0x0005)) goto labelFunc0734_00CA;
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x026E, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, UI_die_roll(0x0001, 0x0003), 0x0179, 0x0000, UI_die_roll(0x0000, 0x0008), true);
	goto labelFunc0734_00FF;
labelFunc0734_00CA:
	var0003 = UI_add_cont_items(var0002, 0x0001, 0x0257, 0x0000, 0x0000, true);
	var0003 = UI_add_cont_items(var0002, UI_die_roll(0x0005, 0x000F), 0x03B4, 0x0000, 0x0005, true);
labelFunc0734_00FF:
	UI_set_schedule_type(var0002, 0x000B);
	if (!(var0000 == 0x0001)) goto labelFunc0734_011D;
	UI_set_schedule_type(var0002, 0x000B);
labelFunc0734_011D:
	if (!(var0000 == 0x0002)) goto labelFunc0734_0131;
	UI_set_schedule_type(var0002, 0x001D);
labelFunc0734_0131:
	if (!(var0000 == 0x0003)) goto labelFunc0734_0145;
	UI_set_schedule_type(var0002, 0x0001);
labelFunc0734_0145:
	if (!(var0000 == 0x0004)) goto labelFunc0734_0159;
	UI_set_schedule_type(var0002, 0x0002);
labelFunc0734_0159:
	if (!(var0000 == 0x0005)) goto labelFunc0734_016D;
	UI_set_schedule_type(var0002, 0x000E);
labelFunc0734_016D:
	if (!(var0000 == 0x0006)) goto labelFunc0734_0181;
	UI_set_schedule_type(var0002, 0x001B);
labelFunc0734_0181:
	if (!(var0000 > 0x0006)) goto labelFunc0734_0195;
	UI_set_schedule_type(var0002, 0x0005);
labelFunc0734_0195:
	return;
}


