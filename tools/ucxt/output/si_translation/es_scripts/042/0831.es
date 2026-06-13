#game "serpentisle"
var Func0831 0x831 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;

	var0002 = var0000;
	var0003 = 0x0000;
	var0004 = 0x0000;
	var0003 = (var0000[0x0001] - var0001[0x0001]);
	if (!(var0003 < 0x0000)) goto labelFunc0831_0036;
	var0003 = (var0003 * 0xFFFF);
labelFunc0831_0036:
	var0004 = (var0000[0x0002] - var0001[0x0002]);
	if (!(var0003 < 0x0000)) goto labelFunc0831_005A;
	var0003 = (var0003 * 0xFFFF);
labelFunc0831_005A:
	if (!((var0003 < 0x0002) && (var0004 < 0x0002))) goto labelFunc0831_0070;
	return 0x0000;
labelFunc0831_0070:
	var0003 = 0x0000;
	var0004 = 0x0000;
	if (!(var0001[0x0001] < var0000[0x0001])) goto labelFunc0831_0099;
	var0003 = UI_die_roll(0xFFFE, 0x0000);
labelFunc0831_0099:
	if (!(var0001[0x0001] == var0000[0x0001])) goto labelFunc0831_00B6;
	var0003 = UI_die_roll(0xFFFF, 0x0001);
labelFunc0831_00B6:
	if (!(var0001[0x0001] > var0000[0x0001])) goto labelFunc0831_00D3;
	var0003 = UI_die_roll(0x0000, 0x0002);
labelFunc0831_00D3:
	if (!(var0001[0x0002] < var0000[0x0002])) goto labelFunc0831_00F0;
	var0004 = UI_die_roll(0xFFFE, 0x0000);
labelFunc0831_00F0:
	if (!(var0001[0x0002] == var0000[0x0002])) goto labelFunc0831_010D;
	var0004 = UI_die_roll(0xFFFF, 0x0001);
labelFunc0831_010D:
	if (!(var0001[0x0002] > var0000[0x0002])) goto labelFunc0831_012A;
	var0004 = UI_die_roll(0x0000, 0x0002);
labelFunc0831_012A:
	var0000[0x0001] = (var0000[0x0001] + var0003);
	var0000[0x0002] = (var0000[0x0002] + var0004);
	if (!(var0000[0x0003] > 0x0000)) goto labelFunc0831_019C;
	var0002 = var0000;
	var0002[0x0003] = (var0002[0x0003] - 0x0001);
	if (!((!UI_is_not_blocked(var0000, 0x037F, 0x0001)) && UI_is_not_blocked(var0002, 0x037F, 0x0001))) goto labelFunc0831_019C;
	var0000[0x0003] = (var0000[0x0003] - 0x0001);
labelFunc0831_019C:
	var0002 = var0000;
	var0002[0x0003] = (var0002[0x0003] + 0x0001);
	if (!((!UI_is_not_blocked(var0000, 0x037F, 0x0001)) && UI_is_not_blocked(var0002, 0x037F, 0x0001))) goto labelFunc0831_01E1;
	var0000[0x0003] = (var0000[0x0003] + 0x0001);
labelFunc0831_01E1:
	return var0000;
	return 0;
}


