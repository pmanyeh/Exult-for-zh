#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func08E7 0x8E7 ();
extern void Func06F6 object#(0x6F6) ();
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func092D 0x92D (var var0000);

void Func02F8 shape#(0x2F8) ()
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

	var0000 = UI_get_item_frame(item);
	if (!(event == 0x0001)) goto labelFunc02F8_00CD;
	if (!(var0000 <= 0x000B)) goto labelFunc02F8_002D;
	var0001 = ("@那些真漂亮。我確定它們在不列顛尼亞的珠寶商那裡" + "能賣個好價錢。@");
	Func08FF(var0001);
	goto labelFunc02F8_00CD;
labelFunc02F8_002D:
	if (!(var0000 == 0x000E)) goto labelFunc02F8_0064;
	if (!(!Func08E7())) goto labelFunc02F8_0058;
	var0002 = [0x088F, 0x0610, 0x0006];
	UI_display_area(var0002);
	return;
	goto labelFunc02F8_0064;
labelFunc02F8_0058:
	UI_remove_item(item);
	UI_play_sound_effect(0x0025);
labelFunc02F8_0064:
	if (!gflags[0x032F]) goto labelFunc02F8_0078;
	if (!(!gflags[0x0330])) goto labelFunc02F8_0078;
	item->Func06F6();
	goto labelFunc02F8_01B0;
labelFunc02F8_0078:
	if (!gflags[0x0333]) goto labelFunc02F8_00CD;
	if (!(var0000 == 0x000D)) goto labelFunc02F8_008F;
	item->Func06F6();
	goto labelFunc02F8_01B0;
labelFunc02F8_008F:
	if (!(var0000 == 0x000C)) goto labelFunc02F8_00CD;
	if (!(!UI_is_readied(0xFE9C, 0x0001, 0x02F8, 0x000C))) goto labelFunc02F8_00B4;
	Func08FF("@我相信必須把寶石拿在武器手上才能打破鏡子。@");
	return;
labelFunc02F8_00B4:
	UI_close_gumps();
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x02F8]);
labelFunc02F8_00CD:
	if (!(event == 0x0002)) goto labelFunc02F8_011C;
	var0004 = UI_click_on_item();
	var0005 = UI_get_item_shape(var0004);
	var0006 = UI_get_item_frame(var0004);
	if (!(var0005 == 0x0350)) goto labelFunc02F8_011C;
	if (!(var0006 == 0x0003)) goto labelFunc02F8_011C;
	Func0828(var0004, 0x0000, 0x0002, 0xFFFE, 0x02F8, var0004, 0x0007);
labelFunc02F8_011C:
	if (!(event == 0x0007)) goto labelFunc02F8_01B0;
	var0007 = Func092D(item);
	var0003 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0007, (byte)0x27, 0x0002, (byte)0x65, (byte)0x27, 0x0002, (byte)0x66, (byte)0x27, 0x0002, (byte)0x67, (byte)0x58, 0x0025]);
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x000A, (byte)0x46, 0x0009]);
	var0008 = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000C);
	var0003 = UI_execute_usecode_array(var0008, [(byte)0x27, 0x000A, (byte)0x46, 0x000D, (byte)0x27, 0x0002, (byte)0x55, 0x0350]);
	gflags[0x0313] = false;
	gflags[0x0333] = false;
labelFunc02F8_01B0:
	return;
}


