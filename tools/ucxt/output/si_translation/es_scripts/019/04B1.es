#game "serpentisle"
void Func04B1 object#(0x4B1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B1_0012;
	UI_item_say(0xFF4F, "@I need water!@");
labelFunc04B1_0012:
	if (!((event == 0x0009) || (event == 0x0000))) goto labelFunc04B1_0059;
	var0000 = UI_die_roll(0x0001, 0x0003);
	var0001 = ["Water! Please!", "I beseech thee!", "My throat is so dry..."];
	var0002 = var0001[var0000];
	UI_item_say(0xFF4F, var0002);
	UI_set_schedule_type(0xFF4F, 0x0007);
labelFunc04B1_0059:
	return;
}


