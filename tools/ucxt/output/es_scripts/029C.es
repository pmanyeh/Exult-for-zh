#game "blackgate"
// externs
extern void Func026F shape#(0x26F) ();
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0944 0x944 (var var0000);
extern var Func0945 0x945 (var var0000);
extern var Func092D 0x92D (var var0000);

void Func029C shape#(0x29C) ()
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

	if (!(event == 0x0001)) goto labelFunc029C_015B;
	if (!UI_is_readied(0xFE9C, 0x0001, 0x026F, 0xFE99)) goto labelFunc029C_0096;
	var0000 = UI_find_nearest(item, 0x03DF, 0x0003);
	if (!var0000) goto labelFunc029C_0096;
	var0001 = UI_get_object_position(item);
	var0002 = UI_get_object_position(var0000);
	if (!(var0001[0x0001] == var0002[0x0001])) goto labelFunc029C_0096;
	if (!(var0001[0x0002] == var0002[0x0002])) goto labelFunc029C_0096;
	if (!(var0001[0x0003] == (var0002[0x0003] + 0x0001))) goto labelFunc029C_0096;
	var0003 = UI_get_item_frame(item);
	if (!((var0003 >= 0x000A) && (var0003 <= 0x000C))) goto labelFunc029C_0096;
	var0000->Func026F();
	return;
labelFunc029C_0096:
	UI_close_gumps();
	var0004 = UI_get_item_frame(item);
	if (!((var0004 >= 0x0008) && (var0004 <= 0x000F))) goto labelFunc029C_015B;
	if (!(!UI_get_container(item))) goto labelFunc029C_00F8;
	var0005 = [0x0000, 0x0001, 0xFFFF, 0x0001];
	var0006 = [0x0002, 0x0001, 0x0002, 0x0000];
	Func0828(item, var0005, var0006, 0xFFFD, 0x029C, item, 0x0007);
	goto labelFunc029C_015B;
labelFunc029C_00F8:
	if (!(!Func0944(item))) goto labelFunc029C_0146;
	var0007 = Func0945(item);
	var0005 = [0x0000, 0x0001, 0xFFFF, 0x0001];
	var0006 = [0x0002, 0x0001, 0x0002, 0x0000];
	Func0828(var0007, var0005, var0006, 0xFFFD, 0x029C, var0007, 0x0007);
	goto labelFunc029C_015B;
labelFunc029C_0146:
	var0008 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x029C]);
labelFunc029C_015B:
	if (!(event == 0x0007)) goto labelFunc029C_01A3;
	var0009 = Func092D(item);
	var0008 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0009, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x55, 0x029C]);
	var0008 = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x0717]);
labelFunc029C_01A3:
	if (!(event == 0x0002)) goto labelFunc029C_02A6;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0xFE99);
	if (!var000A) goto labelFunc029C_0297;
	var000B = UI_click_on_item();
	var000C = UI_get_item_shape(var000B);
	if (!(var000C == 0x03DF)) goto labelFunc029C_0209;
	if (!(UI_get_item_frame(var000B) == 0x0001)) goto labelFunc029C_0209;
	Func0828(var000B, 0x0000, 0x0002, 0x0000, 0x029C, var000B, 0x0008);
labelFunc029C_0209:
	if (!(var000C == 0x02E3)) goto labelFunc029C_0245;
	if (!((UI_get_item_frame(var000B) >= 0x0004) && (UI_get_item_frame(var000B) <= 0x0007))) goto labelFunc029C_0245;
	Func0828(var000B, 0x0001, 0x0000, 0x0000, 0x029C, var000B, 0x0009);
labelFunc029C_0245:
	if (!(var000C == 0x02E5)) goto labelFunc029C_0294;
	var0003 = UI_get_item_frame(var000A);
	if (!((var0003 >= 0x0008) && (var0003 <= 0x000C))) goto labelFunc029C_0286;
	Func0828(var000B, 0x0000, 0x0001, 0x0000, 0x029C, var000B, 0x000A);
	goto labelFunc029C_0294;
labelFunc029C_0286:
	UI_item_say(UI_get_npc_object(0xFE9C), "@The sword's not hot.@");
labelFunc029C_0294:
	goto labelFunc029C_02A6;
labelFunc029C_0297:
	UI_item_say(UI_get_npc_object(0xFE9C), "@I can't pick it up.@");
	return;
labelFunc029C_02A6:
	if (!(event == 0x0008)) goto labelFunc029C_0302;
	var0009 = Func092D(item);
	var0008 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0009, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0xFE99);
	var0008 = UI_execute_usecode_array(var000A, [(byte)0x27, 0x0003, (byte)0x55, 0x068B]);
labelFunc029C_0302:
	if (!(event == 0x0009)) goto labelFunc029C_035E;
	var0009 = Func092D(item);
	var0008 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0009, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0xFE99);
	var0008 = UI_execute_usecode_array(var000A, [(byte)0x27, 0x0003, (byte)0x55, 0x068C]);
labelFunc029C_035E:
	if (!(event == 0x000A)) goto labelFunc029C_039A;
	var0009 = Func092D(item);
	var0008 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0009, (byte)0x6C]);
	var0008 = UI_execute_usecode_array(item, [(byte)0x27, 0x0005, (byte)0x55, 0x068D]);
labelFunc029C_039A:
	return;
}


