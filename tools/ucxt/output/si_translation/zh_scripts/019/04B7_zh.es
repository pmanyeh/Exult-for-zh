#game "serpentisle"
void Func04B7 object#(0x4B7) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B7_0012;
	UI_item_say(0xFF49, "@Dammit, I need water!@");
labelFunc04B7_0012:
	if (!((event == 0x0009) || (event == 0x0000))) goto labelFunc04B7_0059;
	var0000 = UI_die_roll(0x0001, 0x0003);
	var0001 = ["Just a drop!", "Water, dammit!", "I have to have water!!!"];
	var0002 = var0001[var0000];
	UI_item_say(0xFF49, var0002);
	UI_set_schedule_type(0xFF49, 0x0007);
labelFunc04B7_0059:
	return;
}


