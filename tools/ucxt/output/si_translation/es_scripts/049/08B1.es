#game "serpentisle"
void Func08B1 0x8B1 (var var0000, var var0001, var var0002, var var0003)
{
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0004 = 0x0000;
	var0005 = 0x0000;
labelFunc08B1_000C:
	var0006 = UI_get_readied(var0000, var0005);
	if (!var0006) goto labelFunc08B1_0070;
	var0007 = UI_set_last_created(var0006);
	if (!var0007) goto labelFunc08B1_0039;
	var0007 = UI_set_last_created(var0001);
labelFunc08B1_0039:
	var0004 = (var0004 + 0x0001);
	if (!UI_give_last_created(var0000)) goto labelFunc08B1_0053;
	goto labelFunc08B1_0182;
	goto labelFunc08B1_0070;
labelFunc08B1_0053:
	if (!var0002) goto labelFunc08B1_0066;
	var0007 = UI_give_last_created(var0003);
	goto labelFunc08B1_0070;
labelFunc08B1_0066:
	var0007 = UI_update_last_created(var0003);
labelFunc08B1_0070:
	if (!(var0005 == 0x0000)) goto labelFunc08B1_0083;
	var0005 = 0x0005;
	goto labelFunc08B1_000C;
labelFunc08B1_0083:
	if (!(var0005 == 0x0005)) goto labelFunc08B1_0096;
	var0005 = 0x0010;
	goto labelFunc08B1_000C;
labelFunc08B1_0096:
	if (!(var0005 == 0x0010)) goto labelFunc08B1_00A9;
	var0005 = 0x0011;
	goto labelFunc08B1_000C;
labelFunc08B1_00A9:
	if (!(var0005 == 0x0011)) goto labelFunc08B1_00BC;
	var0005 = 0x000F;
	goto labelFunc08B1_000C;
labelFunc08B1_00BC:
	if (!(var0005 == 0x000F)) goto labelFunc08B1_00CF;
	var0005 = 0x000B;
	goto labelFunc08B1_000C;
labelFunc08B1_00CF:
	if (!(var0005 == 0x000B)) goto labelFunc08B1_00E2;
	var0005 = 0x0001;
	goto labelFunc08B1_000C;
labelFunc08B1_00E2:
	if (!(var0005 == 0x0001)) goto labelFunc08B1_00F5;
	var0005 = 0x000C;
	goto labelFunc08B1_000C;
labelFunc08B1_00F5:
	if (!(var0005 == 0x000C)) goto labelFunc08B1_0108;
	var0005 = 0x0004;
	goto labelFunc08B1_000C;
labelFunc08B1_0108:
	if (!(var0005 == 0x0004)) goto labelFunc08B1_011B;
	var0005 = 0x000E;
	goto labelFunc08B1_000C;
labelFunc08B1_011B:
	if (!(var0005 == 0x000E)) goto labelFunc08B1_012E;
	var0005 = 0x000D;
	goto labelFunc08B1_000C;
labelFunc08B1_012E:
	if (!(var0005 == 0x000D)) goto labelFunc08B1_0141;
	var0005 = 0x0002;
	goto labelFunc08B1_000C;
labelFunc08B1_0141:
	if (!(var0005 == 0x0002)) goto labelFunc08B1_0154;
	var0005 = 0x0003;
	goto labelFunc08B1_000C;
labelFunc08B1_0154:
	if (!(var0005 == 0x0003)) goto labelFunc08B1_0182;
	var0007 = UI_set_last_created(var0001);
	if (!var0007) goto labelFunc08B1_0182;
	var0008 = UI_get_object_position(var0000);
	var0007 = UI_update_last_created(var0008);
labelFunc08B1_0182:
	var0008 = UI_get_object_position(var0000);
	var0007 = UI_update_last_created(var0008);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 == 0x0000)) goto labelFunc08B1_01AE;
	return;
	goto labelFunc08B1_01B1;
labelFunc08B1_01AE:
	goto labelFunc08B1_0182;
labelFunc08B1_01B1:
	return;
}


