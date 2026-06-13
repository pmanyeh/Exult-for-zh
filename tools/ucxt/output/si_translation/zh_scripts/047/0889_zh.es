#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0889 0x889 (var var0000)
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0001 = UI_click_on_item();
	var0002 = var0001[0x0002];
	var0003 = var0001[0x0003];
	if (!(((var0002 > 0x05B3) && ((var0002 < 0x05BC) && ((var0003 > 0x03D2) && (var0003 < 0x03E1)))) || (((var0002 == 0x05B4) && ((var0003 > 0x03E0) && (var0003 < 0x03E3))) || (((var0002 == 0x05BB) && ((var0003 > 0x03E0) && (var0003 < 0x03E3))) || (((var0002 > 0x05B3) && ((var0002 < 0x05B6) && ((var0003 > 0x03E2) && (var0003 < 0x03E6)))) || (((var0002 > 0x05B9) && ((var0002 < 0x05BC) && ((var0003 > 0x03E2) && (var0003 < 0x03EC)))) || (((var0002 > 0x05A7) && ((var0002 < 0x05BA) && ((var0003 > 0x03E9) && (var0003 < 0x03EC)))) || ((var0002 > 0x05A7) && ((var0002 < 0x05B4) && ((var0003 > 0x03E3) && (var0003 < 0x03E6))))))))))) goto labelFunc0889_012C;
	var0004 = UI_find_nearest(0xFE9C, 0x025F, 0x001E);
	var0005 = [0x0000];
	var0006 = [0x0000];
	var0007 = 0xFFFF;
	Func090D(var0004, var0005, var0006, var0007, 0x025F, var0000, 0x000B);
	return;
labelFunc0889_012C:
	if (!(!var0001)) goto labelFunc0889_0134;
	return;
labelFunc0889_0134:
	var0008 = false;
	if (!(var0001 == UI_get_npc_object(0xFE9C))) goto labelFunc0889_0147;
	return;
labelFunc0889_0147:
	var0009 = UI_get_item_shape(var0001);
	var000A = UI_get_item_frame(var0001);
	if (!(var0009 == 0x02E5)) goto labelFunc0889_01C3;
	var0005 = [0x0000, 0x0001, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFC, 0xFFFD, 0xFFFE, 0xFFFF];
	var0006 = [0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_01C3:
	if (!(var0009 == 0x02CF)) goto labelFunc0889_022B;
	var0005 = [0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF];
	var0006 = [0x0000, 0xFFFF, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFB, 0xFFFD, 0xFFFE, 0xFFFF, 0x0000, 0xFFFF];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_022B:
	if (!(var0009 == 0x019C)) goto labelFunc0889_0287;
	var000B = UI_find_nearest(var0001, 0x02CA, 0x0008);
	if (!var000B) goto labelFunc0889_0287;
	if (!(UI_get_item_frame(var000B) != 0x0006)) goto labelFunc0889_0287;
	var0005 = [0x0001, 0xFFFD, 0x0001, 0xFFFD];
	var0006 = [0x0001, 0x0001, 0x0002, 0x0002];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_0287:
	if (!(var0009 == 0x02CA)) goto labelFunc0889_02E1;
	if (!(var000A != 0x0006)) goto labelFunc0889_02E1;
	var0005 = [0x0001, 0xFFFD, 0xFFFF, 0xFFFE, 0x0001, 0xFFFD, 0x0001, 0xFFFD];
	var0006 = [0xFFFF, 0xFFFF, 0x0001, 0x0001, 0xFFFA, 0xFFFA, 0xFFFD, 0xFFFD];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_02E1:
	if (!(((var0009 == 0x030A) && (var000A == 0x0006)) || ((var0009 == 0x0192) && (var000A == 0x0010)))) goto labelFunc0889_0351;
	if (!(UI_get_item_frame(var0000) == 0x0000)) goto labelFunc0889_032B;
	UI_set_item_frame(var0000, 0x0002);
	var000C = UI_set_item_quality(var0000, 0x0009);
	goto labelFunc0889_0350;
labelFunc0889_032B:
	if (!(UI_get_item_frame(var0000) != 0x0006)) goto labelFunc0889_0350;
	UI_set_item_frame(var0000, 0x0000);
	var000C = UI_set_item_quality(var0000, 0x0000);
labelFunc0889_0350:
	abort;
labelFunc0889_0351:
	if (!(var0009 == 0x0269)) goto labelFunc0889_0387;
	if (!(var000A == 0x0000)) goto labelFunc0889_0387;
	var0005 = [0xFFFB, 0xFFFB];
	var0006 = [0xFFFE, 0xFFFF];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_0387:
	if (!(var0009 == 0x0102)) goto labelFunc0889_03BF;
	var0005 = [0x0000, 0xFFFF, 0xFFFE, 0xFFFD];
	var0006 = [0x0002, 0x0002, 0x0002, 0x0002];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_03BF:
	if (!(var0009 == 0x01B2)) goto labelFunc0889_03F7;
	var0005 = [0x0002, 0x0002, 0x0002, 0x0002];
	var0006 = [0x0000, 0xFFFF, 0xFFFE, 0xFFFD];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_03F7:
	if (!(var0009 == 0x01D6)) goto labelFunc0889_046A;
	if (!(UI_get_item_frame(var0001) != 0x0000)) goto labelFunc0889_0448;
	var000D = UI_find_nearby(var0001, 0x01D6, 0x0002, 0x0000);
	enum();
labelFunc0889_0423:
	for (var0010 in var000D with var000E to var000F) attend labelFunc0889_0448;
	if (!(UI_get_item_frame(var0010) == 0x0000)) goto labelFunc0889_0445;
	var0001 = var0010;
	goto labelFunc0889_0448;
labelFunc0889_0445:
	goto labelFunc0889_0423;
labelFunc0889_0448:
	var0005 = [0xFFFC, 0xFFFC];
	var0006 = [0xFFFE, 0xFFFE];
	var0007 = 0xFFFF;
	var0008 = true;
labelFunc0889_046A:
	if (!var0008) goto labelFunc0889_0488;
	Func090D(var0001, var0005, var0006, var0007, var0009, var0000, 0x000B);
labelFunc0889_0488:
	return;
}


