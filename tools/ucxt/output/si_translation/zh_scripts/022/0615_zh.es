#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099F 0x99F (var var0000, var var0001, var var0002);
extern void Func08AD 0x8AD (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0615 object#(0x615) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_click_on_item();
	if (!(!var0000)) goto labelFunc0615_000F;
	abort;
labelFunc0615_000F:
	if (!(!UI_is_npc(var0000))) goto labelFunc0615_001B;
	abort;
labelFunc0615_001B:
	if (!(!UI_get_item_flag(var0000, 0x0006))) goto labelFunc0615_002A;
	abort;
labelFunc0615_002A:
	if (!(UI_get_npc_prop(var0000, 0x0009) > 0x0018)) goto labelFunc0615_00A2;
	var0001 = UI_die_roll(0x0001, 0x0005);
	UI_clear_item_say(var0000);
	if (!((var0001 == 0x0001) || (var0001 == 0x0002))) goto labelFunc0615_006D;
	Func097F(var0000, "@No thank thee.@", 0x0000);
labelFunc0615_006D:
	if (!((var0001 == 0x0003) || (var0001 == 0x0004))) goto labelFunc0615_008B;
	Func097F(var0000, "@I am quite full.@", 0x0000);
labelFunc0615_008B:
	if (!(var0001 == 0x0005)) goto labelFunc0615_00A1;
	Func097F(var0000, "@I hunger not.@", 0x0000);
labelFunc0615_00A1:
	abort;
labelFunc0615_00A2:
	event = 0x0008;
	var0002 = [0x0004, 0x0006, 0x0002, 0x0005, 0x0006, 0x0006, 0x0001, 0x000C, 0x0018, 0x0010, 0x0018, 0x0018, 0x0004, 0x0008, 0x0010, 0x000A, 0x0002, 0x0003, 0x0002, 0x0001, 0x0004, 0x0003, 0x0001, 0x0018, 0x0003, 0x0001, 0x0009, 0x0002, 0x0014, 0x0008, 0x0006, 0x001F];
	var0003 = Func099F(0x0179, 0xFE99, 0xFE99);
labelFunc0615_011B:
	if (!var0003) goto labelFunc0615_0153;
	var0004 = var0002[(UI_get_item_frame(var0003) + 0x0001)];
	Func08AD(var0003, var0004, 0x0026, var0000);
	var0003 = Func099F(0x0179, 0xFE99, 0xFE99);
	goto labelFunc0615_011B;
labelFunc0615_0153:
	var0002 = [0x000F, 0x000C, 0x0008, 0x000E, 0x0014, 0x0004, 0x0004, 0x0004, 0x0004];
	var0003 = Func099F(0x0194, 0xFE99, 0xFE99);
labelFunc0615_0183:
	if (!var0003) goto labelFunc0615_01BB;
	var0004 = var0002[(UI_get_item_frame(var0003) + 0x0001)];
	Func08AD(var0003, var0004, 0x0026, var0000);
	var0003 = Func099F(0x0194, 0xFE99, 0xFE99);
	goto labelFunc0615_0183;
labelFunc0615_01BB:
	var0003 = Func099F(0x0268, 0xFE99, 0xFE99);
labelFunc0615_01CA:
	if (!var0003) goto labelFunc0615_01F1;
	Func08AD(var0003, 0x0001, 0x0026, var0000);
	var0003 = Func099F(0x0268, 0xFE99, 0xFE99);
	goto labelFunc0615_01CA;
labelFunc0615_01F1:
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@No more food.@", 0x0000);
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x0004)) goto labelFunc0615_0225;
	Func097F(0xFE9C, "@Except for some garlic.@", 0x0011);
labelFunc0615_0225:
	return;
}


