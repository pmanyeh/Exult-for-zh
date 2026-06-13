#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0425 object#(0x425) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_get_schedule_type(0xFFDB);
	if (!(event == 0x0002)) goto labelFunc0425_0083;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_weather(0x0000);
	UI_set_camera(0xFE9C);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_npc_id(0xFFF0, 0x0000);
	UI_set_new_schedules(0xFFDB, 0x0000, 0x000C, [0x09A7, 0x07F7]);
	UI_run_schedule(0xFFDB);
	gflags[0x002A] = false;
labelFunc0425_0083:
	if (!(event == 0x0000)) goto labelFunc0425_00F9;
	if (!(var0000 == 0x001D)) goto labelFunc0425_00F9;
	var0002 = UI_find_nearby(0xFFDB, 0x025F, 0x0002, 0x0010);
	var0003 = UI_get_item_quality(var0002);
	if (!(var0003 == 0x000F)) goto labelFunc0425_00F9;
	UI_set_schedule_type(0xFFDB, 0x000F);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x34, (byte)0x36, (byte)0x34, (byte)0x34]);
	var0004 = UI_get_npc_id(0xFFD8);
	var0004 = (var0004 + 0x0001);
	UI_set_npc_id(0xFFD8, var0004);
labelFunc0425_00F9:
	if (!((event == 0x0001) || ((event == 0x0000) && (UI_get_schedule_type(item) == 0x0009)))) goto labelFunc0425_01AF;
	var0005 = UI_get_random(0x0006);
	if (!(var0005 == 0x0001)) goto labelFunc0425_012F;
	UI_item_say(0xFFDB, "@Awk!@");
labelFunc0425_012F:
	if (!(var0005 == 0x0002)) goto labelFunc0425_0143;
	UI_item_say(0xFFDB, "@See nor hear. See nor hear. Squawk!@");
labelFunc0425_0143:
	if (!(var0005 == 0x0003)) goto labelFunc0425_0157;
	UI_item_say(0xFFDB, "@Cracker!@");
labelFunc0425_0157:
	if (!(var0005 == 0x0004)) goto labelFunc0425_016B;
	UI_item_say(0xFFDB, "@Walla Walla!@");
labelFunc0425_016B:
	if (!(var0005 == 0x0005)) goto labelFunc0425_019B;
	if (!Func0942(0xFFD5)) goto labelFunc0425_018B;
	UI_item_say(0xFFD5, "@Leave the bird alone!@");
	goto labelFunc0425_019B;
labelFunc0425_018B:
	var0006 = Func0992(0x0001, "@Cute bird.@", 0x0000, true);
labelFunc0425_019B:
	if (!(var0005 == 0x0006)) goto labelFunc0425_01AF;
	UI_item_say(0xFFDB, "@Squawk!@");
labelFunc0425_01AF:
	if (!(event == 0x0007)) goto labelFunc0425_01D7;
	Func097F(0xFFDB, "@Skreee!@", 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFDB);
	UI_set_attack_mode(0xFFDB, 0x0007);
labelFunc0425_01D7:
	return;
}


