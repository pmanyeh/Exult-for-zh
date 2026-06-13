#game "serpentisle"
void Func0998 0x998 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	var0002 = [0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002, 0x0003, 0x0004, 0x0004, 0x0004, 0x0004, 0x0004, 0x0003, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFD];
	var0003 = [0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFD, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002, 0x0003, 0x0004, 0x0004, 0x0004, 0x0004, 0x0004, 0x0003, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFD];
	var0004 = UI_get_object_position(var0000);
	var0005 = (var0000 & var0004);
	var0006 = 0x0000;
labelFunc0998_00FE:
	if (!(var0006 < 0x0024)) goto labelFunc0998_01CF;
	var0006 = (var0006 + 0x0001);
	var0007 = (var0005[0x0002] + var0002[var0006]);
	var0008 = (var0005[0x0003] + var0003[var0006]);
	var0009 = var0005[0x0004];
	var000A = [var0007, var0008, var0009];
	var000B = [var0007, var0008, (var0009 + 0x0001)];
	if (!(!UI_is_not_blocked(var000A, var0001, 0x0000))) goto labelFunc0998_0174;
	var000A = var000B;
labelFunc0998_0174:
	if (!UI_is_not_blocked(var000A, var0001, 0x0000)) goto labelFunc0998_01C2;
	var000C = UI_create_new_object(var0001);
	if (!var000C) goto labelFunc0998_01BF;
	var000D = UI_die_roll(0x0000, 0x0005);
	UI_set_item_frame(var000C, var000D);
	UI_set_item_flag(var000C, 0x0012);
	var000E = UI_update_last_created(var000A);
labelFunc0998_01BF:
	goto labelFunc0998_01CC;
labelFunc0998_01C2:
	var000E = UI_update_last_created(0xFE9A);
labelFunc0998_01CC:
	goto labelFunc0998_00FE;
labelFunc0998_01CF:
	return;
}


