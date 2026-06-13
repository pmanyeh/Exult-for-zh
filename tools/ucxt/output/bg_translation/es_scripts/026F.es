#game "blackgate"
// externs
extern void Func0690 object#(0x690) ();
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func092D 0x92D (var var0000);

void Func026F shape#(0x26F) ()
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

	if (!(event == 0x0001)) goto labelFunc026F_002C;
	if (!(!UI_is_readied(0xFE9C, 0x0001, 0x026F, 0xFE99))) goto labelFunc026F_0024;
	UI_flash_mouse(0x0002);
	return;
labelFunc026F_0024:
	UI_close_gumps();
	item->Func0690();
labelFunc026F_002C:
	if (!(event == 0x0002)) goto labelFunc026F_0109;
	var0000 = false;
	var0001 = UI_get_item_shape(item);
	if (!(var0001 == 0x03DF)) goto labelFunc026F_0058;
	var0000 = UI_find_nearest(item, 0x029C, 0x0001);
labelFunc026F_0058:
	if (!(var0001 == 0x026F)) goto labelFunc026F_0069;
	var0000 = UI_click_on_item();
labelFunc026F_0069:
	if (!(UI_get_item_shape(var0000) == 0x029C)) goto labelFunc026F_0109;
	var0002 = UI_find_nearest(var0000, 0x03DF, 0x0003);
	if (!var0002) goto labelFunc026F_0109;
	var0003 = UI_get_object_position(var0002);
	var0004 = UI_get_object_position(var0000);
	if (!(var0004[0x0001] == var0003[0x0001])) goto labelFunc026F_0109;
	if (!(var0004[0x0002] == var0003[0x0002])) goto labelFunc026F_0109;
	if (!((var0004[0x0003] - 0x0001) == var0003[0x0003])) goto labelFunc026F_0109;
	var0005 = UI_get_item_frame(var0000);
	if (!((var0005 >= 0x0008) && (var0005 <= 0x000F))) goto labelFunc026F_0109;
	Func0828(var0002, 0x0000, 0x0002, 0x0000, 0x026F, var0002, 0x0007);
labelFunc026F_0109:
	if (!(event == 0x0007)) goto labelFunc026F_01F5;
	var0006 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x029C, 0x0003);
	var0005 = UI_get_item_frame(var0006);
	var0007 = UI_get_npc_object(0xFE9C);
	var0008 = Func092D(item);
	if (!((var0005 >= 0x000D) && (var0005 <= 0x000F))) goto labelFunc026F_016E;
	UI_item_say(var0007, "@The sword is not heated.@");
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x59, var0008]);
labelFunc026F_016E:
	if (!((var0005 == 0x0008) || (var0005 == 0x0009))) goto labelFunc026F_019C;
	UI_item_say(var0007, "@The sword is too cool.@");
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x59, var0008]);
labelFunc026F_019C:
	if (!((var0005 >= 0x000A) && (var0005 <= 0x000C))) goto labelFunc026F_01F5;
	var0009 = UI_execute_usecode_array(var0007, [(byte)0x59, var0008, (byte)0x64, (byte)0x65, (byte)0x67, (byte)0x64, (byte)0x61]);
	var0002 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x03DF, 0x0003);
	var0009 = UI_execute_usecode_array(var0002, [(byte)0x27, 0x0004, (byte)0x55, 0x0691]);
labelFunc026F_01F5:
	return;
}


