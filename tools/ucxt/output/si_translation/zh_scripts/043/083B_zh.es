#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func083B 0x83B (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(var0000[0x0001] == 0xFFFF)) goto labelFunc083B_0068;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Woof woof! Rrruff!@"]);
	UI_set_schedule_type(item, 0x0004);
	var0002 = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_clear_item_say(var0002);
	Func097F(var0002, "@We must be close!@", 0x0004);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x036A], 0x0014);
	abort;
labelFunc083B_0068:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Woof woof! Woof!@"]);
	var0003 = UI_get_object_position(item);
	var0004 = (var0000[0x0002] - var0003[0x0002]);
	var0005 = (var0000[0x0001] - var0003[0x0001]);
	var0006 = var0004;
	if (!(var0004 < 0x0000)) goto labelFunc083B_00BC;
	var0006 = (var0006 * 0xFFFF);
labelFunc083B_00BC:
	var0007 = var0005;
	if (!(var0005 < 0x0000)) goto labelFunc083B_00D6;
	var0007 = (var0007 * 0xFFFF);
labelFunc083B_00D6:
	if (!(var0007 > var0006)) goto labelFunc083B_0128;
	if (!(var0005 > 0x0000)) goto labelFunc083B_0109;
	var0008 = 0x0002;
	var0009 = "east";
	var0003[0x0001] = (var0003[0x0001] + 0x0014);
	goto labelFunc083B_0125;
labelFunc083B_0109:
	var0008 = 0x0006;
	var0009 = "west";
	var0003[0x0001] = (var0003[0x0001] - 0x0014);
labelFunc083B_0125:
	goto labelFunc083B_016D;
labelFunc083B_0128:
	if (!(var0004 > 0x0000)) goto labelFunc083B_0151;
	var0008 = 0x0004;
	var0009 = "south";
	var0003[0x0002] = (var0003[0x0002] + 0x0014);
	goto labelFunc083B_016D;
labelFunc083B_0151:
	var0008 = 0x0000;
	var0009 = "north";
	var0003[0x0002] = (var0003[0x0002] - 0x0014);
labelFunc083B_016D:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0008]);
	var0001 = Func0992(0x0001, (("@The dog points " + var0009) + "!@"), (("@" + var0009) + "!@"), true);
	UI_si_path_run_usecode(item, var0003, 0x000D, item, 0x036A, true);
	abort;
	return;
}


