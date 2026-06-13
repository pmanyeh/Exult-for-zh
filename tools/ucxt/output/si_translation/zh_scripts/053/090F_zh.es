#game "serpentisle"
var Func090F 0x90F (var var0000, var var0001, var var0002, var var0003)
{
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0004 = UI_get_object_position(var0000);
	if (!((var0001 < 0x0000) && (UI_get_array_size(var0001) == 0x0001))) goto labelFunc090F_00C3;
	var0005 = var0003;
labelFunc090F_0026:
	if (!(var0005 <= var0004[0x0003])) goto labelFunc090F_00C0;
	var0006[0x0003] = (var0004[0x0003] + var0005);
	var0007 = (0xFFFF * var0001);
labelFunc090F_004D:
	if (!(var0007 >= var0001)) goto labelFunc090F_00B3;
	var0006[0x0001] = (var0004[0x0001] + var0007);
	var0008 = (0xFFFF * var0002);
labelFunc090F_0071:
	if (!(var0008 >= var0002)) goto labelFunc090F_00A6;
	var0006[0x0002] = (var0004[0x0002] + var0008);
	if (!UI_can_avatar_reach_pos(var0006)) goto labelFunc090F_0099;
	return var0006;
labelFunc090F_0099:
	var0008 = (var0008 - 0x0001);
	goto labelFunc090F_0071;
labelFunc090F_00A6:
	var0007 = (var0007 - 0x0001);
	goto labelFunc090F_004D;
labelFunc090F_00B3:
	var0005 = (var0005 + 0x0001);
	goto labelFunc090F_0026;
labelFunc090F_00C0:
	goto labelFunc090F_0196;
labelFunc090F_00C3:
	var0009 = 0x0000;
	enum();
labelFunc090F_00CA:
	for (var0007 in var0001 with var000A to var000B) attend labelFunc090F_0193;
	var0009 = (var0009 + 0x0001);
	var0008 = var0002[var0009];
	var0005 = var0003[var0009];
	var0006[0x0001] = (var0004[0x0001] + var0007);
	var0006[0x0002] = (var0004[0x0002] + var0008);
	if (!(var0003 < 0xFFFF)) goto labelFunc090F_0159;
	var0005 = 0x0000;
labelFunc090F_0121:
	if (!(var0005 >= var0003)) goto labelFunc090F_0156;
	var0006[0x0003] = (var0004[0x0003] + var0005);
	if (!UI_can_avatar_reach_pos(var0006)) goto labelFunc090F_0149;
	return var0006;
labelFunc090F_0149:
	var0005 = (var0005 - 0x0001);
	goto labelFunc090F_0121;
labelFunc090F_0156:
	goto labelFunc090F_0190;
labelFunc090F_0159:
	if (!(var0003 == 0xFFFF)) goto labelFunc090F_0172;
	var0006[0x0003] = var0004[0x0003];
	goto labelFunc090F_0182;
labelFunc090F_0172:
	var0006[0x0003] = (var0004[0x0003] + var0005);
labelFunc090F_0182:
	if (!UI_can_avatar_reach_pos(var0006)) goto labelFunc090F_0190;
	return var0006;
labelFunc090F_0190:
	goto labelFunc090F_00CA;
labelFunc090F_0193:
	return false;
	abort;
labelFunc090F_0196:
	return 0;
}


