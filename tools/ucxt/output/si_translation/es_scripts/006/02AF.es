#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func02AF shape#(0x2AF) ()
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

	if (!(event == 0x0001)) goto labelFunc02AF_0083;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x000A)) goto labelFunc02AF_0083;
	if (!(gflags[0x0205] && (gflags[0x0203] && gflags[0x0204]))) goto labelFunc02AF_0029;
	abort;
labelFunc02AF_0029:
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D6]);
	Func090D(item, [0x0001, 0x0002], [0x0001, 0x0002], 0xFFFF, 0x02AF, item, 0x000A);
	var0002 = UI_get_distance(0xFE9C, item);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x02AF], (var0002 + 0x0002));
labelFunc02AF_0083:
	if (!(event == 0x0002)) goto labelFunc02AF_0218;
	UI_clear_item_flag(0xFE9C, 0x0000);
	UI_play_sound_effect(0x0082);
	UI_lightning();
	UI_set_camera(0xFE9C);
	UI_halt_scheduled(0xFE9C);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	if (!(!gflags[0x01FB])) goto labelFunc02AF_00FA;
	var0001 = UI_find_nearby(item, 0x0320, 0x001E, 0x0000);
	var0003 = false;
	enum();
labelFunc02AF_00D8:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc02AF_00FA;
	if (!(UI_get_item_quality(var0006) == 0x003D)) goto labelFunc02AF_00F7;
	var0003 = var0006;
labelFunc02AF_00F7:
	goto labelFunc02AF_00D8;
labelFunc02AF_00FA:
	if (!(var0003 && (!gflags[0x01FB]))) goto labelFunc02AF_01C4;
	var0001 = ("" & ("@Where am I?@" & "@Where are my belongings?@"));
	Func094F(0xFE9C, var0001);
	var0007 = 0x0000;
	var0008 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc02AF_0135:
	if (!(var0007 < 0x0002)) goto labelFunc02AF_01C4;
	enum();
labelFunc02AF_0140:
	for (var0006 in var0008 with var0009 to var000A) attend labelFunc02AF_01A4;
	if (!(Func09A6(var0006) || (var0007 == 0x0001))) goto labelFunc02AF_01A1;
	var0001 = UI_get_item_shape(var0006);
	if (!(!((var0001 == 0x01E6) || (var0001 == 0x025F)))) goto labelFunc02AF_01A1;
	if (!(!UI_set_last_created(var0006))) goto labelFunc02AF_018D;
	Func092F(0xFE9C, 0x0011);
labelFunc02AF_018D:
	if (!(!UI_give_last_created(var0003))) goto labelFunc02AF_01A1;
	Func092F(0xFE9C, 0x0012);
labelFunc02AF_01A1:
	goto labelFunc02AF_0140;
labelFunc02AF_01A4:
	var0007 = (var0007 + 0x0001);
	var0008 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc02AF_0135;
labelFunc02AF_01C4:
	if (!gflags[0x01FB]) goto labelFunc02AF_01D6;
	Func097F(0xFE9C, "@Back here again?@", 0x0005);
labelFunc02AF_01D6:
	gflags[0x01FB] = true;
	UI_move_object(0xFE9C, [0x0066, 0x066F, 0x0000]);
	UI_play_music(0x0035, Func09A0(0x0005, 0x0001));
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, (byte)0x30, (byte)0x55, 0x0636], 0x0004);
labelFunc02AF_0218:
	return;
}


