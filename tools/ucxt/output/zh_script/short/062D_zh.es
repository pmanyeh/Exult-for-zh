#game "blackgate"
// externs
extern var Func0827 0x827 (var var0000, var var0001);
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF (var var0000);

void Func062D object#(0x62D) ()
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

	if (!(event == 0x0007)) goto labelFunc062D_0085;
	var0000 = UI_get_container(item);
	if (!(!var0000)) goto labelFunc062D_0081;
	var0001 = Func0827(0xFE9C, item);
	var0002 = UI_get_object_position(item);
	var0003 = UI_set_last_created(item);
	if (!var0003) goto labelFunc062D_007D;
	var0003 = UI_give_last_created(0xFE9C);
	if (!(!var0003)) goto labelFunc062D_005D;
	var0003 = UI_update_last_created(var0002);
	UI_flash_mouse(0x0004);
	abort;
	goto labelFunc062D_007A;
labelFunc062D_005D:
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0001, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x55, 0x062D]);
labelFunc062D_007A:
	goto labelFunc062D_007E;
labelFunc062D_007D:
	return;
labelFunc062D_007E:
	goto labelFunc062D_0085;
labelFunc062D_0081:
	UI_close_gumps();
labelFunc062D_0085:
	if (!((event == 0x0002) || var0000)) goto labelFunc062D_00F1;
	var0004 = UI_click_on_item();
	var0005 = UI_get_item_shape(var0004);
	if (!(var0005 == 0x028B)) goto labelFunc062D_00E5;
	var0006 = [0x0001, 0x0001];
	var0007 = [0x0000, 0x0000];
	var0008 = 0xFFFF;
	Func0828(var0004, var0006, var0007, var0008, 0x028B, var0004, 0x0007);
	goto labelFunc062D_00F1;
labelFunc062D_00E5:
	var0009 = "@你為什麼不把那些羊毛紡成線呢？@";
	Func08FF(var0009);
labelFunc062D_00F1:
	return;
}


