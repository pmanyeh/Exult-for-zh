#game "serpentisle"
void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!UI_get_container(var0000)) goto labelFunc090D_0012;
	UI_flash_mouse(0x0000);
	abort;
labelFunc090D_0012:
	UI_halt_scheduled(0xFE9C);
	var0007 = UI_get_object_position(var0000);
	if (!((var0001 < 0x0000) && (UI_get_array_size(var0001) == 0x0001))) goto labelFunc090D_00E2;
	var0008 = var0003;
labelFunc090D_003F:
	if (!(var0008 <= var0007[0x0003])) goto labelFunc090D_00DF;
	var0009[0x0003] = (var0007[0x0003] + var0008);
	var000A = (0xFFFF * var0001);
labelFunc090D_0066:
	if (!(var000A >= var0001)) goto labelFunc090D_00D2;
	var0009[0x0001] = (var0007[0x0001] + var000A);
	var000B = (0xFFFF * var0002);
labelFunc090D_008A:
	if (!(var000B >= var0002)) goto labelFunc090D_00C5;
	var0009[0x0002] = (var0007[0x0002] + var000B);
	if (!UI_path_run_usecode(var0009, var0004, var0005, var0006)) goto labelFunc090D_00B8;
	return;
labelFunc090D_00B8:
	var000B = (var000B - 0x0001);
	goto labelFunc090D_008A;
labelFunc090D_00C5:
	var000A = (var000A - 0x0001);
	goto labelFunc090D_0066;
labelFunc090D_00D2:
	var0008 = (var0008 + 0x0001);
	goto labelFunc090D_003F;
labelFunc090D_00DF:
	goto labelFunc090D_01C6;
labelFunc090D_00E2:
	var000C = 0x0000;
	enum();
labelFunc090D_00E9:
	for (var000A in var0001 with var000D to var000E) attend labelFunc090D_01BE;
	var000C = (var000C + 0x0001);
	var000B = var0002[var000C];
	var0008 = var0003[var000C];
	var0009[0x0001] = (var0007[0x0001] + var000A);
	var0009[0x0002] = (var0007[0x0002] + var000B);
	if (!(var0003 < 0xFFFF)) goto labelFunc090D_017E;
	var0008 = 0x0000;
labelFunc090D_0140:
	if (!(var0008 >= var0003)) goto labelFunc090D_017B;
	var0009[0x0003] = (var0007[0x0003] + var0008);
	if (!UI_path_run_usecode(var0009, var0004, var0005, var0006)) goto labelFunc090D_016E;
	return;
labelFunc090D_016E:
	var0008 = (var0008 - 0x0001);
	goto labelFunc090D_0140;
labelFunc090D_017B:
	goto labelFunc090D_01BB;
labelFunc090D_017E:
	if (!(var0003 == 0xFFFF)) goto labelFunc090D_0197;
	var0009[0x0003] = var0007[0x0003];
	goto labelFunc090D_01A7;
labelFunc090D_0197:
	var0009[0x0003] = (var0007[0x0003] + var0008);
labelFunc090D_01A7:
	if (!UI_path_run_usecode(var0009, var0004, var0005, var0006)) goto labelFunc090D_01BB;
	return;
labelFunc090D_01BB:
	goto labelFunc090D_00E9;
labelFunc090D_01BE:
	UI_flash_mouse(0x0000);
	abort;
labelFunc090D_01C6:
	return;
}


