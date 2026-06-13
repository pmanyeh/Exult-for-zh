#game "serpentisle"
// externs
extern void Func08F4 0x8F4 ();
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func062B object#(0x62B) ();
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func088A 0x88A (var var0000)
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

	var0001 = UI_click_on_item();
	if (!(var0001 == UI_get_npc_object(0xFE9C))) goto labelFunc088A_0016;
	return;
labelFunc088A_0016:
	if (!(var0001[0x0001] != 0x0000)) goto labelFunc088A_0470;
	if (!(UI_is_npc(var0001[0x0001]) && (UI_get_npc_number(var0001[0x0001]) != 0xFE9C))) goto labelFunc088A_018A;
	var0002 = UI_get_item_quality(var0000);
	var0003 = UI_get_npc_number(var0001);
	if (!(UI_get_item_frame(var0000) < 0x0006)) goto labelFunc088A_0078;
	UI_set_item_frame(var0000, 0x0000);
	var0004 = UI_set_item_quality(var0000, 0x0000);
labelFunc088A_0078:
	if (!var0002) goto labelFunc088A_015B;
	if (!((var0002 == 0x000D) && (var0003 == 0xFFFD))) goto labelFunc088A_00B5;
	UI_clear_item_flag(0xFFFD, 0x001E);
	if (!(!UI_get_item_flag(0xFFFD, 0x0006))) goto labelFunc088A_00B2;
	UI_set_schedule_type(0xFFFD, 0x0003);
labelFunc088A_00B2:
	Func08F4();
labelFunc088A_00B5:
	if (!((var0002 == 0x000E) && (var0003 == 0xFFFE))) goto labelFunc088A_00EC;
	UI_clear_item_flag(0xFFFE, 0x001E);
	if (!(!UI_get_item_flag(0xFFFE, 0x0006))) goto labelFunc088A_00E9;
	UI_set_schedule_type(0xFFFE, 0x0003);
labelFunc088A_00E9:
	Func08F4();
labelFunc088A_00EC:
	if (!((var0002 == 0x000F) && (var0003 == 0xFFFF))) goto labelFunc088A_0123;
	UI_clear_item_flag(0xFFFF, 0x001E);
	if (!(!UI_get_item_flag(0xFFFF, 0x0006))) goto labelFunc088A_0120;
	UI_set_schedule_type(0xFFFF, 0x0003);
labelFunc088A_0120:
	Func08F4();
labelFunc088A_0123:
	if (!((var0002 == 0x000F) && (var0003 == 0xFF6B))) goto labelFunc088A_015A;
	UI_clear_item_flag(0xFF6B, 0x001E);
	if (!(!UI_get_item_flag(0xFF6B, 0x0006))) goto labelFunc088A_0157;
	UI_set_schedule_type(0xFF6B, 0x0003);
labelFunc088A_0157:
	Func08F4();
labelFunc088A_015A:
	return;
labelFunc088A_015B:
	var0005 = Func090C(0xFE9C, var0001);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0005, (byte)0x01, (byte)0x6A]);
	Func097F(var0001, "@Cease and desist!@", 0x0000);
	return;
labelFunc088A_018A:
	var0006 = UI_get_item_shape(var0001[0x0001]);
	if (!(var0006 == 0x01BD)) goto labelFunc088A_0219;
	if (!((UI_get_item_frame(var0001) == 0x0001) && (UI_get_item_frame(var0000) == 0x0001))) goto labelFunc088A_0218;
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 == 0x000A)) goto labelFunc088A_01D9;
	UI_set_item_frame(var0001, 0x0002);
labelFunc088A_01D9:
	if (!(var0002 == 0x000B)) goto labelFunc088A_01ED;
	UI_set_item_frame(var0001, 0x0003);
labelFunc088A_01ED:
	if (!(var0002 == 0x000C)) goto labelFunc088A_0201;
	UI_set_item_frame(var0001, 0x0004);
labelFunc088A_0201:
	var0004 = UI_set_item_quality(var0000, 0x0000);
	UI_set_item_frame(var0000, 0x0000);
labelFunc088A_0218:
	return;
labelFunc088A_0219:
	if (!(UI_get_item_quality(var0000) > 0x0000)) goto labelFunc088A_0231;
	event = 0x000A;
	var0000->Func062B();
labelFunc088A_0231:
	var0007 = false;
	if (!((var0006 == 0x0152) || ((var0006 == 0x02BD) || (var0006 == 0x01B3)))) goto labelFunc088A_0295;
	var0008 = [0x0002, 0xFFFE, 0x0000, 0x0002, 0xFFFE, 0xFFFE, 0x0000, 0xFFFE];
	var0009 = [0x0000, 0xFFFE, 0xFFFE, 0xFFFE, 0x0000, 0x0002, 0x0002, 0x0002];
	var000A = 0xFFFE;
	var0007 = true;
labelFunc088A_0295:
	if (!((var0006 == 0x02E3) || (var0006 == 0x0339))) goto labelFunc088A_0323;
	var0008 = [0x0001, 0x0001, 0x0001, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFD, 0xFFFE, 0xFFFF, 0xFFFF, 0x0000];
	var0009 = [0x0000, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFC, 0xFFFD, 0xFFFE, 0xFFFF, 0x0000, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF];
	var000A = 0xFFFF;
	var0007 = true;
labelFunc088A_0323:
	if (!(var0006 == 0x02E5)) goto labelFunc088A_039A;
	if (!(UI_get_item_frame(var0000) > 0x0000)) goto labelFunc088A_033C;
	abort;
labelFunc088A_033C:
	var0008 = [0x0000, 0x0001, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFC, 0xFFFD, 0xFFFE, 0xFFFF];
	var0009 = [0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001];
	var000A = 0xFFFF;
	var0007 = true;
labelFunc088A_039A:
	if (!(var0006 == 0x02CF)) goto labelFunc088A_0411;
	if (!(UI_get_item_frame(var0000) > 0x0000)) goto labelFunc088A_03B3;
	abort;
labelFunc088A_03B3:
	var0008 = [0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF];
	var0009 = [0x0000, 0xFFFF, 0xFFFF, 0xFFFE, 0xFFFD, 0xFFFC, 0xFFFB, 0xFFFD, 0xFFFE, 0xFFFF, 0x0000, 0xFFFF];
	var000A = 0xFFFF;
	var0007 = true;
labelFunc088A_0411:
	if (!(var0006 == 0x035F)) goto labelFunc088A_0434;
	if (!(UI_get_item_frame(var0001) == 0x0010)) goto labelFunc088A_0433;
	UI_set_item_frame(var0001, 0x0012);
labelFunc088A_0433:
	return;
labelFunc088A_0434:
	if (!var0007) goto labelFunc088A_0455;
	Func090D(var0001, var0008, var0009, var000A, var0006, var0001, 0x000A);
	goto labelFunc088A_046D;
labelFunc088A_0455:
	if (!(UI_get_item_frame(var0000) < 0x0006)) goto labelFunc088A_046D;
	UI_set_item_frame(var0000, 0x0000);
labelFunc088A_046D:
	goto labelFunc088A_04A6;
labelFunc088A_0470:
	var0004 = UI_path_run_usecode([var0001[0x0002], var0001[0x0003], var0001[0x0004]], 0x062B, var0000, 0x000A);
	if (!(!var0004)) goto labelFunc088A_04A6;
	event = 0x000A;
	var0000->Func062B();
labelFunc088A_04A6:
	return;
}


