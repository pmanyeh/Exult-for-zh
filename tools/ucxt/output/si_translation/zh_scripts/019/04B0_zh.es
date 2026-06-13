#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);

void Func04B0 object#(0x4B0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04B0_0012;
	UI_item_say(0xFF50, "@Water, please!@");
labelFunc04B0_0012:
	if (!(event == 0x0009)) goto labelFunc04B0_0045;
	UI_set_schedule_type(0xFF50, 0x0007);
	UI_item_say(0xFF50, "@Water, please!@");
	var0000 = UI_delayed_execute_usecode_array(0xFF50, [(byte)0x23, (byte)0x55, 0x04B0], 0x0050);
labelFunc04B0_0045:
	if (!(event == 0x0009)) goto labelFunc04B0_007C;
	var0001 = UI_die_roll(0x0001, 0x0003);
	var0002 = ["Give me some water!", "Water! I'm thirsty!", "I must have water!"];
	var0003 = var0002[var0001];
	UI_item_say(0xFF50, var0003);
labelFunc04B0_007C:
	if (!(event == 0x0002)) goto labelFunc04B0_00D5;
	var0004 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc04B0_0096:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc04B0_00D5;
	if (!(!UI_get_item_flag(var0007, 0x0006))) goto labelFunc04B0_00D2;
	UI_clear_item_flag(var0007, 0x0001);
	UI_clear_item_say(var0007);
	Func097F(var0007, "@Water!@", 0x0000);
	Func09AD(var0007);
labelFunc04B0_00D2:
	goto labelFunc04B0_0096;
labelFunc04B0_00D5:
	return;
}


