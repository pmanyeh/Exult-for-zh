#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func090C 0x90C (var var0000, var var0001);
extern var Func089D 0x89D (var var0000);
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func092A 0x92A (var var0000);

void Func0314 shape#(0x314) ()
{
	var var0000;
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

	if (!(event == 0x0001)) goto labelFunc0314_0032;
	UI_close_gumps();
	var0000 = 0xFFFF;
	var0001 = 0xFFFF;
	var0002 = 0xFFFD;
	Func090D(item, var0000, var0001, var0002, 0x0314, item, 0x000A);
labelFunc0314_0032:
	if (!((event == 0x000A) || (event == 0x0002))) goto labelFunc0314_01C3;
	if (!(event != 0x0002)) goto labelFunc0314_006A;
	var0003 = Func090C(0xFE9C, item);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0003, (byte)0x01, (byte)0x67, (byte)0x61]);
labelFunc0314_006A:
	var0005 = UI_get_item_frame(item);
	var0006 = var0005;
	if (!((var0005 % 0x0002) == 0x0000)) goto labelFunc0314_0095;
	UI_set_item_frame(item, (var0005 + 0x0001));
	goto labelFunc0314_00A1;
labelFunc0314_0095:
	UI_set_item_frame(item, (var0005 - 0x0001));
labelFunc0314_00A1:
	UI_play_sound_effect2(0x0046, item);
	var0007 = UI_get_item_quality(item);
	if (!((var0006 > 0x0005) && (var0006 < 0x000C))) goto labelFunc0314_00FD;
	if (!(var0006 < 0x000A)) goto labelFunc0314_00E5;
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02E8], 0x0001);
	goto labelFunc0314_00FA;
labelFunc0314_00E5:
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x060B], 0x0001);
labelFunc0314_00FA:
	goto labelFunc0314_01C3;
labelFunc0314_00FD:
	var0008 = UI_find_nearby(item, 0x0366, 0x000F, 0x0000);
	var0009 = UI_find_nearby(item, 0x0203, 0x000F, 0x0000);
	var0008 = (var0008 & var0009);
	var0009 = [];
	enum();
labelFunc0314_0130:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0314_0156;
	if (!(UI_get_item_quality(var000C) == var0007)) goto labelFunc0314_0153;
	var0009 = (var0009 & var000C);
labelFunc0314_0153:
	goto labelFunc0314_0130;
labelFunc0314_0156:
	var0004 = Func089D(var0009);
	Func0924(item, 0xFE99);
	if (!((var0007 >= 0x00C9) && (var0007 <= 0x00D9))) goto labelFunc0314_01C3;
	var000D = [0x0087, 0x06C2, 0x0001];
	if (!UI_find_object(var000D, 0x0314, 0x00DC, 0x0000)) goto labelFunc0314_019E;
	gflags[0x01E0] = true;
labelFunc0314_019E:
	if (!UI_find_object(var000D, 0x0314, 0x00DC, 0x0001)) goto labelFunc0314_01B5;
	gflags[0x01E0] = false;
labelFunc0314_01B5:
	if (!(gflags[0x01E0] == true)) goto labelFunc0314_01C3;
	Func092A(var0007);
labelFunc0314_01C3:
	return;
}


