#game "blackgate"
void Func01EF shape#(0x1EF) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc01EF_004B;
	UI_item_say(0xFE9C, "@來來來，小貓咪～@");
	UI_set_schedule_type(item, 0x0000);
	UI_set_attack_mode(item, 0x0007);
	UI_set_oppressor(item, 0xFE9C);
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc01EF_004B;
	var0000 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x52, "@我討厭貓！@"], 0x0004);
labelFunc01EF_004B:
	if (!(event == 0x0000)) goto labelFunc01EF_005B;
	UI_item_say(item, "@喵～@");
labelFunc01EF_005B:
	return;
}


